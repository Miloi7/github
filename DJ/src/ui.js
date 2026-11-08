/**
 * DJI Osmo Action 4 — interactive teardown UI layer.
 *
 * Owns every non-WebGL interface element declared in index.html:
 *   - the component list (#partsList),
 *   - the detail / overview panel (#detailBody),
 *   - the floating 3D labels (#labelLayer),
 *   - the hover chip, guide card, dock buttons, help modal and toast,
 *   - the boot loader.
 *
 * The renderer (src/main.js) is responsible for the 3D scene. This module only
 * renders text/DOM and projects the label anchor coordinates that main hands to
 * `updateLabels()`. No external assets, no innerHTML written into index.html.
 */

import { PARTS } from './parts-data.js';

const AXES = ['X', 'Y', 'Z'];
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const pad2 = (value) => String(Math.max(0, Math.trunc(Number(value) || 0))).padStart(2, '0');

const ESCAPE_MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (ch) => ESCAPE_MAP[ch]);

const rgbaCache = new Map();
function hexToRgba(hex, alpha) {
  const key = `${hex}|${alpha}`;
  if (rgbaCache.has(key)) return rgbaCache.get(key);
  let body = String(hex || '').trim().replace(/^#/, '');
  if (body.length === 3) body = body.split('').map((ch) => ch + ch).join('');
  let out = `rgba(91, 231, 255, ${alpha})`;
  if (/^[0-9a-f]{6}$/i.test(body)) {
    const int = parseInt(body, 16);
    out = `rgba(${(int >> 16) & 255}, ${(int >> 8) & 255}, ${int & 255}, ${alpha})`;
  }
  if (rgbaCache.size < 128) rgbaCache.set(key, out);
  return out;
}

const signed = (value) => `${Number(value) >= 0 ? '+' : ''}${(Number(value) || 0).toFixed(2)}`;

const fmtCoordNumber = (value) => {
  const num = Number(value);
  return Number.isFinite(num) ? num.toFixed(2) : '00.00';
};

function formatCoord(coord) {
  if (coord == null) return 'X 00.00 / Y 00.00 / Z 00.00';
  if (typeof coord === 'string') return coord;
  if (Array.isArray(coord)) {
    return coord.slice(0, 3).map((value, index) => `${AXES[index] || '?'} ${fmtCoordNumber(value)}`).join(' / ');
  }
  if (typeof coord === 'object') {
    return ['x', 'y', 'z'].map((axis, index) => `${AXES[index]} ${fmtCoordNumber(coord[axis])}`).join(' / ');
  }
  return String(coord);
}

function formatTarget(target) {
  if (target == null) return 'STANDBY';
  if (typeof target === 'string') return target || 'STANDBY';
  if (typeof target === 'object') return target.en || target.name || target.id || 'STANDBY';
  return String(target);
}

function formatCount(exploded, total) {
  const fallbackTotal = Math.max(1, total);
  if (typeof exploded === 'boolean') return `${pad2(exploded ? fallbackTotal : 0)} / ${pad2(fallbackTotal)}`;
  if (Array.isArray(exploded)) return `${pad2(exploded.length)} / ${pad2(fallbackTotal)}`;
  return `${pad2(exploded)} / ${pad2(fallbackTotal)}`;
}

export class UI {
  constructor(options = {}) {
    const opts = options || {};
    this.opts = opts;
    this.camera = opts.camera || null;
    this.parts = Array.isArray(opts.parts) && opts.parts.length ? opts.parts : PARTS;
    this._partMap = new Map(this.parts.map((part) => [part.id, part]));

    this.el = {};
    this._partItems = new Map();
    this._labelEls = new Map();
    this._detailRefs = null;

    this._mounted = false;
    this._detailRendered = false;
    this._selectedId = null;
    this._selectedExploded = false;
    this._hoveredId = null;
    this._hoverSource = null;
    this._hoverChipId = null;
    this._hoverChipW = 0;
    this._hoverChipH = 0;

    this._allExploded = false;
    this._autoRotate = false;
    this._labelsVisible = true;
    this._helpOpen = false;
    this._loaderHidden = false;
    this._lastFocus = null;

    this._zones = { left: 0, right: 0, top: 0, bottom: 0, vw: 0, vh: 0, valid: false };
    this._labelLayerHidden = false;

    this._toastTimer = 0;
    this._loaderTimer = 0;
    this._resizeRaf = 0;
    this._zoneTimer = 0;

    this._handleResize = () => this._onResize();
    this._handleKeyDown = (event) => this._onKeyDown(event);
  }

  /* ------------------------------------------------------------------ */
  /* Lifecycle                                                           */
  /* ------------------------------------------------------------------ */

  mount() {
    if (this._mounted) return this;
    const byId = (id) => document.getElementById(id);

    this.el = {
      partsPanel: byId('partsPanel'),
      partsList: byId('partsList'),
      partCount: byId('partCount'),
      detailPanel: byId('detailPanel'),
      detailBody: byId('detailBody'),
      btnCloseDetail: byId('btnCloseDetail'),
      detailFootLeft: byId('detailFootLeft'),
      detailFootRight: byId('detailFootRight'),
      labelLayer: byId('labelLayer'),
      hoverChip: byId('hoverChip'),
      modeValue: byId('modeValue'),
      explodeValue: byId('explodeValue'),
      fpsValue: byId('fpsValue'),
      targetReadout: byId('targetReadout'),
      coordReadout: byId('coordReadout'),
      selectionReadout: byId('selectionReadout'),
      guideCard: byId('guideCard'),
      btnDismissGuide: byId('btnDismissGuide'),
      dock: byId('dock'),
      btnExplodeAll: byId('btnExplodeAll'),
      btnExplodeLabel: byId('btnExplodeLabel'),
      btnResetView: byId('btnResetView'),
      btnAutoRotate: byId('btnAutoRotate'),
      btnLabels: byId('btnLabels'),
      btnHelp: byId('btnHelp'),
      toast: byId('toast'),
      loader: byId('loader'),
      loaderBar: byId('loaderBar'),
      loaderPercent: byId('loaderPercent'),
      loaderText: byId('loaderText'),
      helpModal: byId('helpModal'),
      btnCloseHelp: byId('btnCloseHelp'),
      btnStartExploring: byId('btnStartExploring'),
      topbar: document.querySelector('.topbar'),
      sceneCanvas: byId('scene-canvas'),
      detailKicker: null,
      detailTitle: null,
    };

    if (this.el.detailPanel) {
      this.el.detailKicker = this.el.detailPanel.querySelector('.panel__kicker');
      this.el.detailTitle = this.el.detailPanel.querySelector('.panel__title');
    }

    this._mounted = true;

    this._buildPartsList();
    this._buildLabels();
    this._bindEvents();

    this.setSelected(null);
    this.setAllExploded(false);
    this.setAutoRotate(false);
    this.setLabelsVisible(true);

    this._measureZones();
    this._measureAllLabels();

    // Re-measure once webfont-less layout settled (system fonts are instant, but
    // this also covers a document that was still being parsed when mounted).
    if (document.fonts && document.fonts.ready && typeof document.fonts.ready.then === 'function') {
      document.fonts.ready
        .then(() => {
          if (!this._mounted) return;
          this._measureZones();
          this._measureAllLabels();
        })
        .catch(() => {});
    }

    return this;
  }

  /* ------------------------------------------------------------------ */
  /* Public API                                                          */
  /* ------------------------------------------------------------------ */

  /** Show a part in the detail panel, or the camera overview when `id` is null. */
  setSelected(id) {
    if (!this._mounted) return this;
    const part = id == null ? null : this._partMap.get(id) || null;
    const nextId = part ? part.id : null;
    const changed = this._selectedId !== nextId || !this._detailRendered;
    this._selectedId = nextId;

    const detailPanel = this.el.detailPanel;
    if (detailPanel) {
      detailPanel.classList.toggle('is-selected', !!part);
      detailPanel.classList.toggle('is-overview', !part);
      detailPanel.classList.toggle('is-open', !!part);
    }

    if (this._partItems) {
      this._partItems.forEach((item, key) => {
        item.classList.toggle('is-active', key === nextId);
        item.setAttribute('aria-current', key === nextId ? 'true' : 'false');
      });
    }

    const labelRec = part ? this._labelEls.get(part.id) : null;
    if (part) {
      this._selectedExploded = labelRec ? !!labelRec.appliedExploded : this._allExploded;
    } else {
      this._selectedExploded = false;
    }

    if (changed) {
      if (part) {
        this._applyAccent(detailPanel, part.accent);
        this._renderDetail(part);
      } else {
        this._clearAccent(detailPanel);
        this._renderOverview();
      }
      if (this.el.detailBody) this.el.detailBody.scrollTop = 0;
      this._detailRendered = true;
    }

    this._syncDetailFoot(part);
    this._syncDetailStatus();

    if (this.el.btnCloseDetail) {
      this.el.btnCloseDetail.classList.toggle('is-idle', !part);
      this.el.btnCloseDetail.setAttribute('aria-disabled', part ? 'false' : 'true');
    }

    this._labelEls.forEach((rec, key) => {
      const selected = key === nextId;
      if (rec.appliedSelected !== selected) {
        rec.root.classList.toggle('is-selected', selected);
        rec.appliedSelected = selected;
      }
    });

    if (this.el.detailKicker) {
      this.el.detailKicker.textContent = part ? 'COMPONENT DETAIL' : 'CAMERA OVERVIEW';
    }
    if (this.el.detailTitle) {
      this.el.detailTitle.textContent = part ? '部件详情' : '整机概览';
    }

    this._updateLabelLayerState();
    if (changed) this._scheduleZoneRefresh();
    return this;
  }

  /** Update / hide the pointer chip and sync the list hover highlight. */
  setHovered(id, x, y) {
    if (!this._mounted) return this;
    this._applyHover(id, x, y, 'scene');
    return this;
  }

  /** Toggle the dock "全部拆解 / 全部归位" state. */
  setAllExploded(flag) {
    if (!this._mounted) return this;
    const on = !!flag;
    this._allExploded = on;
    if (this.el.btnExplodeLabel) this.el.btnExplodeLabel.textContent = on ? '全部归位' : '全部拆解';
    if (this.el.btnExplodeAll) {
      this.el.btnExplodeAll.classList.toggle('dock-button--active', on);
      this.el.btnExplodeAll.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
    this._syncDetailStatus();
    return this;
  }

  /** Toggle the dock auto-rotate state. */
  setAutoRotate(flag) {
    if (!this._mounted) return this;
    const on = !!flag;
    this._autoRotate = on;
    if (this.el.btnAutoRotate) {
      this.el.btnAutoRotate.classList.toggle('dock-button--active', on);
      this.el.btnAutoRotate.classList.toggle('is-rotating', on);
      this.el.btnAutoRotate.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
    return this;
  }

  /** Toggle the dock label state and the whole 3D label layer. */
  setLabelsVisible(flag) {
    if (!this._mounted) return this;
    const on = !!flag;
    this._labelsVisible = on;
    if (this.el.btnLabels) {
      this.el.btnLabels.classList.toggle('dock-button--active', on);
      this.el.btnLabels.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
    this._updateLabelLayerState();
    if (on) this._measureZones();
    return this;
  }

  /**
   * Project the 3D label anchors into the DOM.
   * @param {Array<{id:string,x:number,y:number,visible?:boolean,exploded?:boolean,selected?:boolean}>} labels
   */
  updateLabels(labels) {
    if (!this._mounted || !this.el.labelLayer) return this;
    const list = Array.isArray(labels) ? labels : [];

    // Keep the detail panel status in sync with the live exploded flag.
    if (this._selectedId) {
      for (let i = 0; i < list.length; i += 1) {
        const data = list[i];
        if (data && data.id === this._selectedId && typeof data.exploded === 'boolean') {
          if (this._selectedExploded !== data.exploded) {
            this._selectedExploded = data.exploded;
            this._syncDetailStatus();
          }
          break;
        }
      }
    }

    if (!this._labelsVisible || this._labelLayerHidden) return this;

    let zones = this._zones;
    if (!zones.valid || zones.vw !== window.innerWidth) {
      this._measureZones();
      zones = this._zones;
    }

    const vw = zones.vw;
    const vh = zones.vh;
    const compact = vw < 640;
    const gap = compact ? 26 : vw < 900 ? 34 : 44;
    const overlapGap = compact ? 5 : 7;
    const centerX = (zones.left + zones.right) / 2;
    const seen = new Set();
    const visibleEntries = [];

    for (let i = 0; i < list.length; i += 1) {
      const data = list[i];
      if (!data || !data.id) continue;
      const rec = this._labelEls.get(data.id);
      if (!rec) continue;
      seen.add(data.id);
      this._applyLabelState(rec, data);

      const hasPoint = Number.isFinite(data.x) && Number.isFinite(data.y);
      const visible = data.visible !== false && hasPoint;
      if (!visible) {
        if (rec.visible) {
          rec.visible = false;
          rec.root.classList.add('is-hidden');
        }
        continue;
      }

      if (!rec.visible) {
        rec.visible = true;
        rec.root.classList.remove('is-hidden');
      }
      if (rec.dirty || !rec.w || !rec.h) this._measureLabel(rec);
      visibleEntries.push({ rec, x: data.x, y: data.y });
    }

    // Labels that main did not report this frame are stale: hide them.
    this._labelEls.forEach((rec, id) => {
      if (!seen.has(id)) {
        if (rec.visible) {
          rec.visible = false;
          rec.root.classList.add('is-hidden');
        }
      }
    });

    visibleEntries.sort((a, b) => a.y - b.y);

    const placed = [];
    const maxX = Math.max(zones.left + 60, zones.right - 20);
    const minY = Math.max(zones.top, 12);
    const maxY = Math.max(minY + 80, zones.bottom);

    for (let i = 0; i < visibleEntries.length; i += 1) {
      const entry = visibleEntries[i];
      const rec = entry.rec;
      const cardW = rec.w || 160;
      const cardH = rec.h || 42;
      const ax = entry.x;
      const ay = entry.y;

      const fitsRight = ax + gap + cardW <= zones.right - 4;
      const fitsLeft = ax - gap - cardW >= zones.left + 4;
      const outwardRight = ax >= centerX;
      let side;
      if (fitsRight && fitsLeft) side = outwardRight ? 'right' : 'left';
      else if (fitsRight) side = 'right';
      else if (fitsLeft) side = 'left';
      else side = zones.right - ax >= ax - zones.left ? 'right' : 'left';

      let cx = side === 'right' ? ax + gap : ax - gap - cardW;
      const cxMin = zones.left + 4;
      const cxMax = Math.max(cxMin, zones.right - cardW - 4);
      cx = clamp(cx, cxMin, cxMax);

      const topLimit = Math.max(8, zones.top);
      const bottomLimit = Math.max(topLimit + 40, maxY - cardH);
      let cy = clamp(ay - cardH / 2, topLimit, bottomLimit);

      // Greedy vertical de-overlap: keep cards legible when anchors bunch up.
      for (let pass = 0; pass < 4; pass += 1) {
        let hit = null;
        for (let p = 0; p < placed.length; p += 1) {
          const other = placed[p];
          if (
            cx < other.x + other.w + overlapGap &&
            cx + cardW + overlapGap > other.x &&
            cy < other.y + other.h + overlapGap &&
            cy + cardH + overlapGap > other.y
          ) {
            hit = other;
            break;
          }
        }
        if (!hit) break;
        cy = clamp(hit.y + hit.h + overlapGap + 2, topLimit, bottomLimit);
      }

      placed.push({ x: cx, y: cy, w: cardW, h: cardH });

      const attachX = side === 'right' ? cx - 1 : cx + cardW + 1;
      const attachY = cy + cardH / 2;
      const dx = attachX - ax;
      const dy = attachY - ay;
      const length = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);
      const scale = clamp(length / 100, 0, 6);

      this._setTransform(rec, 'anchorT', rec.anchor, `translate3d(${ax.toFixed(1)}px, ${ay.toFixed(1)}px, 0)`);
      this._setTransform(rec, 'cardT', rec.card, `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`);
      this._setTransform(
        rec,
        'leaderT',
        rec.leader,
        `translate3d(${ax.toFixed(1)}px, ${ay.toFixed(1)}px, 0) rotate(${angle.toFixed(4)}rad) scaleX(${scale.toFixed(4)})`
      );

      if (rec.side !== side) {
        rec.side = side;
        rec.root.classList.toggle('is-left', side === 'left');
      }
    }

    // Drop cached strings for elements that went invisible so a re-appearance
    // always writes a fresh transform.
    this._labelEls.forEach((rec) => {
      if (!rec.visible) {
        rec.anchorT = '';
        rec.cardT = '';
        rec.leaderT = '';
      }
    });

    return this;
  }

  /**
   * Update the telemetry strip.
   * @param {{mode?:string,exploded?:number, total?:number, fps?:number, target?:string, coord?:string|number[]|{x:number,y:number,z:number}}} data
   */
  updateTelemetry(data) {
    if (!this._mounted || !data) return this;
    const setText = (el, value) => {
      if (el && el.textContent !== value) el.textContent = value;
    };

    if (data.mode !== undefined && data.mode !== null) {
      setText(this.el.modeValue, String(data.mode));
    }

    if (data.exploded !== undefined && data.exploded !== null) {
      const total = Number.isFinite(Number(data.total)) && Number(data.total) > 0
        ? Math.trunc(Number(data.total))
        : this.parts.length;
      const value = formatCount(data.exploded, total);
      setText(this.el.explodeValue, value);
      if (this.el.explodeValue) {
        const count = typeof data.exploded === 'boolean'
          ? (data.exploded ? total : 0)
          : Array.isArray(data.exploded)
            ? data.exploded.length
            : Number(data.exploded) || 0;
        this.el.explodeValue.classList.toggle('is-live', count > 0);
      }
    }

    if (data.fps !== undefined && data.fps !== null) {
      const fps = Number(data.fps);
      setText(this.el.fpsValue, Number.isFinite(fps) ? String(Math.round(fps)) : '--');
    }

    if (data.target !== undefined) {
      setText(this.el.targetReadout, formatTarget(data.target).toUpperCase());
    }

    if (data.coord !== undefined) {
      setText(this.el.coordReadout, formatCoord(data.coord));
    }

    return this;
  }

  /** Transient feedback message (bottom-centre). */
  showToast(text, duration = 2200) {
    if (!this._mounted || !this.el.toast) return this;
    const message = String(text == null ? '' : text).trim();
    if (!message) {
      this.el.toast.classList.remove('is-visible');
      return this;
    }
    this.el.toast.textContent = message;
    // Force the class re-add so repeated toasts restart the entrance transition.
    this.el.toast.classList.remove('is-visible');
    void this.el.toast.offsetWidth;
    this.el.toast.classList.add('is-visible');
    window.clearTimeout(this._toastTimer);
    const hold = Number(duration) > 0 ? Number(duration) : 2200;
    this._toastTimer = window.setTimeout(() => {
      this.el.toast.classList.remove('is-visible');
    }, hold);
    return this;
  }

  /** progress in [0, 1]. */
  setLoaderProgress(progress01, text) {
    if (!this._mounted) return this;
    const value = clamp(Number(progress01) || 0, 0, 1);
    if (this.el.loaderBar) this.el.loaderBar.style.width = `${(value * 100).toFixed(1)}%`;
    if (this.el.loaderPercent) this.el.loaderPercent.textContent = `${pad2(Math.round(value * 100))}%`;
    if (this.el.loaderText && typeof text === 'string' && text.trim()) {
      this.el.loaderText.textContent = text.trim();
    }
    return this;
  }

  /** Fade the boot loader out and unlock the scene / panel entrance animations. */
  hideLoader() {
    if (!this._mounted || !this.el.loader || this._loaderHidden) return this;
    this._loaderHidden = true;
    this.setLoaderProgress(1);
    document.body.classList.add('is-loaded');
    const loader = this.el.loader;
    loader.classList.add('is-hidden');
    loader.setAttribute('aria-hidden', 'true');
    window.clearTimeout(this._loaderTimer);
    this._loaderTimer = window.setTimeout(() => {
      loader.classList.add('is-removed');
    }, 750);
    return this;
  }

  /* ------------------------------------------------------------------ */
  /* DOM construction                                                    */
  /* ------------------------------------------------------------------ */

  _buildPartsList() {
    const list = this.el.partsList;
    if (!list) return;
    const fragment = document.createDocumentFragment();
    this._partItems.clear();

    this.parts.forEach((part) => {
      const item = document.createElement('div');
      item.className = 'part-item';
      item.setAttribute('role', 'listitem');
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-current', 'false');
      item.dataset.partId = part.id;
      this._applyAccent(item, part.accent);
      item.innerHTML = [
        '<span class="part-item__bar" aria-hidden="true"></span>',
        `<span class="part-item__no">${esc(part.no)}</span>`,
        '<span class="part-item__body">',
        `<span class="part-item__name">${esc(part.name)}</span>`,
        `<span class="part-item__en">${esc(part.en)}</span>`,
        '</span>',
        `<span class="part-item__spec">${esc(part.keySpec)}</span>`,
      ].join('');

      item.addEventListener('click', () => this._selectPart(part.id));
      item.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
          event.preventDefault();
          this._selectPart(part.id);
        }
      });
      item.addEventListener('mouseenter', (event) => {
        this._applyHover(part.id, event.clientX, event.clientY, 'list');
      });
      item.addEventListener('mousemove', (event) => {
        if (this._hoverSource === 'list' && this._hoveredId === part.id) {
          this._positionHoverChip(event.clientX, event.clientY);
        }
      });
      item.addEventListener('mouseleave', () => {
        if (this._hoverSource === 'list') this._applyHover(null, 0, 0, null);
      });

      fragment.appendChild(item);
      this._partItems.set(part.id, item);
    });

    list.appendChild(fragment);
    if (this.el.partCount) this.el.partCount.textContent = pad2(this.parts.length);
  }

  _buildLabels() {
    const layer = this.el.labelLayer;
    if (!layer) return;
    const fragment = document.createDocumentFragment();
    this._labelEls.clear();

    this.parts.forEach((part) => {
      const root = document.createElement('div');
      root.className = 'label is-hidden';
      root.dataset.partId = part.id;
      this._applyAccent(root, part.accent);

      const extra = (Array.isArray(part.specs) ? part.specs : [])
        .slice(0, 2)
        .map(
          (spec) =>
            `<div class="label__kv"><span>${esc(spec.label)}</span><b>${esc(spec.value)}</b></div>`
        )
        .join('');

      const card = document.createElement('div');
      card.className = 'label__card';
      card.innerHTML = [
        '<div class="label__head">',
        `<span class="label__no">${esc(part.no)}</span>`,
        `<span class="label__name">${esc(part.name)}</span>`,
        '</div>',
        `<div class="label__en">${esc(part.en)}</div>`,
        `<div class="label__spec">${esc(part.keySpec)}</div>`,
        `<div class="label__extra">${extra}</div>`,
      ].join('');

      const anchor = document.createElement('span');
      anchor.className = 'label__anchor';
      anchor.setAttribute('aria-hidden', 'true');
      anchor.innerHTML = '<i></i>';

      const leader = document.createElement('span');
      leader.className = 'label__leader';
      leader.setAttribute('aria-hidden', 'true');

      root.appendChild(leader);
      root.appendChild(card);
      root.appendChild(anchor);
      fragment.appendChild(root);

      this._labelEls.set(part.id, {
        id: part.id,
        part,
        root,
        card,
        leader,
        anchor,
        w: 0,
        h: 0,
        dirty: true,
        visible: false,
        side: '',
        appliedExploded: false,
        appliedSelected: false,
        anchorT: '',
        cardT: '',
        leaderT: '',
      });
    });

    layer.appendChild(fragment);
  }

  /* ------------------------------------------------------------------ */
  /* Detail panel rendering                                              */
  /* ------------------------------------------------------------------ */

  _renderOverview() {
    if (!this.el.detailBody) return;
    const camera = this.camera || {};
    const quickStats = Array.isArray(camera.quickStats) ? camera.quickStats : [];
    const overviewSpecs = Array.isArray(camera.overviewSpecs) ? camera.overviewSpecs : [];
    const title = String(camera.name || 'Osmo Action 4')
      .replace(/\s*\d+\s*$/, '')
      .toUpperCase();
    const edition = camera.edition || 'INTERACTIVE TEARDOWN / 01';

    const quickHtml = quickStats
      .map(
        (stat) =>
          `<div class="ov-stat"><span class="ov-stat__label">${esc(stat.label)}</span>` +
          `<strong class="ov-stat__value">${esc(stat.value)}</strong></div>`
      )
      .join('');

    const specHtml = overviewSpecs
      .map(
        (spec) =>
          `<div class="ov-spec"><span class="ov-spec__label">${esc(spec.label)}</span>` +
          `<strong class="ov-spec__value">${esc(spec.value)}</strong></div>`
      )
      .join('');

    this.el.detailBody.innerHTML = `
      <div class="ov">
        <div class="ov-hero">
          <span class="ov-hero__kicker">CAMERA OVERVIEW / 整机概览</span>
          <div class="ov-hero__title">${esc(title)} <em>4</em></div>
          <p class="ov-hero__tagline">${esc(camera.tagline || '')}</p>
          <div class="ov-hero__chips">
            <span class="ov-chip">${esc(camera.brand || 'DJI')} · ${esc(camera.model || 'OA4-2023')}</span>
            <span class="ov-chip ov-chip--ghost">${esc(edition)}</span>
          </div>
        </div>

        <div class="ov-quick">${quickHtml}</div>

        <section class="ov-section">
          <header class="ov-section__head">
            <span class="ov-section__no">01</span>
            <h4>整机概述</h4>
            <span class="ov-section__rule"></span>
          </header>
          <p class="ov-desc">${esc(camera.overviewDesc || '')}</p>
        </section>

        <section class="ov-section">
          <header class="ov-section__head">
            <span class="ov-section__no">02</span>
            <h4>核心规格</h4>
            <span class="ov-section__rule"></span>
          </header>
          <div class="ov-specs">${specHtml}</div>
        </section>

        <section class="ov-section">
          <header class="ov-section__head">
            <span class="ov-section__no">03</span>
            <h4>操作提示</h4>
            <span class="ov-section__rule"></span>
          </header>
          <ul class="ov-hints">
            <li><kbd>拖拽</kbd><span>自由旋转视角</span></li>
            <li><kbd>滚轮</kbd><span>缩放查看细节</span></li>
            <li><kbd>点击</kbd><span>拆解部件 / 查看参数</span></li>
          </ul>
        </section>

        <div class="ov-status">
          <span class="ov-status__dot" aria-hidden="true"></span>
          <strong>TEARDOWN READY</strong>
          <span>${pad2(this.parts.length)} 个可拆解部件</span>
        </div>
      </div>`;

    this._detailRefs = null;
  }

  _renderDetail(part) {
    if (!this.el.detailBody) return;
    const specs = (Array.isArray(part.specs) ? part.specs : [])
      .map(
        (spec) =>
          `<div class="dt-spec"><span class="dt-spec__label">${esc(spec.label)}</span>` +
          `<strong class="dt-spec__value">${esc(spec.value)}</strong></div>`
      )
      .join('');

    const tags = (Array.isArray(part.tags) ? part.tags : [])
      .map((tag) => `<span class="dt-tag">${esc(tag)}</span>`)
      .join('');

    const explode = Array.isArray(part.explode) ? part.explode : [0, 0, 0];
    const axes = AXES.map(
      (axis, index) =>
        `<span class="dt-axis dt-axis--${axis.toLowerCase()}"><i>${axis}</i>` +
        `<strong>${signed(explode[index])}</strong></span>`
    ).join('');

    this.el.detailBody.innerHTML = `
      <div class="dt">
        <div class="dt-hero">
          <div class="dt-hero__no">${esc(part.no)}</div>
          <div class="dt-hero__text">
            <span class="dt-hero__cat">${esc(part.categoryEn)} / ${esc(part.category)}</span>
            <h3 class="dt-hero__name">${esc(part.name)}</h3>
            <div class="dt-hero__en">${esc(part.en)}</div>
            <div class="dt-hero__spec">${esc(part.keySpec)}</div>
          </div>
        </div>

        <p class="dt-summary">${esc(part.summary)}</p>

        <div class="dt-explode">
          <div class="dt-explode__head">
            <span>EXPLODE VECTOR / 拆解位移</span>
            <span class="dt-explode__state">待拆解</span>
          </div>
          <div class="dt-explode__vec">${axes}</div>
        </div>

        <section class="dt-section">
          <header class="dt-section__head">
            <span class="dt-section__no">01</span>
            <h4>结构说明</h4>
            <span class="dt-section__rule"></span>
          </header>
          <p class="dt-desc">${esc(part.description)}</p>
        </section>

        <section class="dt-section">
          <header class="dt-section__head">
            <span class="dt-section__no">02</span>
            <h4>技术规格</h4>
            <span class="dt-section__rule"></span>
          </header>
          <div class="dt-specs">${specs}</div>
        </section>

        <section class="dt-section">
          <header class="dt-section__head">
            <span class="dt-section__no">03</span>
            <h4>关键标签</h4>
            <span class="dt-section__rule"></span>
          </header>
          <div class="dt-tags">${tags}</div>
        </section>

        <div class="dt-status">
          <span class="dt-status__dot" aria-hidden="true"></span>
          <span class="dt-status__text">装配位 · 点击模型可拆解</span>
        </div>
      </div>`;

    const body = this.el.detailBody;
    this._detailRefs = {
      status: body.querySelector('.dt-status'),
      statusText: body.querySelector('.dt-status__text'),
      state: body.querySelector('.dt-explode__state'),
    };
  }

  _syncDetailFoot(part) {
    if (this.el.detailFootLeft) {
      this.el.detailFootLeft.textContent = part ? `FOCUS · ${part.en}` : 'SYSTEM READY';
    }
    if (this.el.detailFootRight) {
      this.el.detailFootRight.textContent = part
        ? `COMPONENT ${part.no} / ${pad2(this.parts.length)}`
        : 'OA4 / 2023';
    }
  }

  _syncDetailStatus() {
    const refs = this._detailRefs;
    if (!refs) return;
    const exploded = !!this._selectedId && (this._selectedExploded || this._allExploded);
    if (refs.state) {
      if (refs.state.textContent !== (exploded ? '已拆解' : '待拆解')) {
        refs.state.textContent = exploded ? '已拆解' : '待拆解';
      }
      refs.state.classList.toggle('is-on', exploded);
    }
    if (refs.status) refs.status.classList.toggle('is-exploded', exploded);
    if (refs.statusText) {
      const text = exploded ? '部件已展开 · 数据链路已同步' : '装配位 · 点击模型可拆解';
      if (refs.statusText.textContent !== text) refs.statusText.textContent = text;
    }
  }

  /* ------------------------------------------------------------------ */
  /* Hover chip                                                          */
  /* ------------------------------------------------------------------ */

  _selectPart(id) {
    const part = this._partMap.get(id);
    if (!part) return;
    if (typeof this.opts.onSelectPart === 'function') {
      this.opts.onSelectPart(part.id);
    }
    if (this._selectedId !== part.id) this.setSelected(part.id);
  }

  _applyHover(id, x, y, source) {
    const part = id == null ? null : this._partMap.get(id) || null;
    this._hoverSource = part ? source || 'scene' : null;
    this._hoveredId = part ? part.id : null;

    if (this._partItems) {
      this._partItems.forEach((item, key) => {
        const hovered = !!part && key === part.id;
        if (item.classList.contains('is-hover') !== hovered) {
          item.classList.toggle('is-hover', hovered);
        }
      });
    }

    const chip = this.el.hoverChip;
    if (!chip) return;

    if (!part) {
      chip.classList.remove('is-visible');
      this._hoverChipId = null;
      return;
    }

    // The list already communicates hover with its own highlight. Showing the
    // pointer chip there creates a second, competing label over the model.
    // Likewise, a selected part already has a highlighted detail label and an
    // open detail panel, so the pointer chip would only duplicate it.
    if (source === 'list' || this._selectedId === part.id) {
      chip.classList.remove('is-visible');
      this._hoverChipId = null;
      return;
    }

    if (this._hoverChipId !== part.id) {
      this._hoverChipId = part.id;
      this._applyAccent(chip, part.accent);
      chip.innerHTML = [
        `<span class="hover-chip__no">${esc(part.no)}</span>`,
        `<span class="hover-chip__name">${esc(part.name)}</span>`,
        `<span class="hover-chip__spec">${esc(part.keySpec)}</span>`,
        '<span class="hover-chip__action">点击拆解</span>',
      ].join('');
      this._measureHoverChip();
    }

    if (Number.isFinite(x) && Number.isFinite(y)) this._positionHoverChip(x, y);
    chip.classList.add('is-visible');
  }

  _measureHoverChip() {
    const chip = this.el.hoverChip;
    if (!chip) return;
    this._hoverChipW = chip.offsetWidth || 180;
    this._hoverChipH = chip.offsetHeight || 32;
  }

  _positionHoverChip(x, y) {
    const chip = this.el.hoverChip;
    if (!chip) return;
    const vw = window.innerWidth || 1280;
    const vh = window.innerHeight || 800;
    const width = this._hoverChipW || 180;
    const height = this._hoverChipH || 32;
    let left = x + 18;
    let top = y + 18;
    if (left + width > vw - 10) left = x - width - 18;
    if (top + height > vh - 10) top = y - height - 18;
    left = clamp(left, 10, Math.max(10, vw - width - 10));
    top = clamp(top, 10, Math.max(10, vh - height - 10));
    const transform = `translate3d(${Math.round(left)}px, ${Math.round(top)}px, 0)`;
    if (chip.dataset.position !== transform) {
      chip.dataset.position = transform;
      chip.style.transform = transform;
    }
  }

  /* ------------------------------------------------------------------ */
  /* Label helpers                                                       */
  /* ------------------------------------------------------------------ */

  _applyLabelState(rec, data) {
    const exploded = !!data.exploded;
    const selected = !!data.selected;
    if (rec.appliedExploded !== exploded) {
      rec.appliedExploded = exploded;
      rec.root.classList.toggle('is-exploded', exploded);
      rec.card.classList.toggle('is-exploded', exploded);
      rec.dirty = true;
    }
    if (rec.appliedSelected !== selected) {
      rec.appliedSelected = selected;
      rec.root.classList.toggle('is-selected', selected);
    }
  }

  _measureLabel(rec) {
    if (!rec || !rec.card) return;
    rec.w = rec.card.offsetWidth || 150;
    rec.h = rec.card.offsetHeight || 42;
    if (rec.w < 1) rec.w = 150;
    if (rec.h < 1) rec.h = 42;
    rec.dirty = false;
  }

  _measureAllLabels() {
    this._labelEls.forEach((rec) => {
      rec.dirty = true;
      this._measureLabel(rec);
    });
  }

  _setTransform(rec, key, element, value) {
    if (!element) return;
    if (rec[key] === value) return;
    rec[key] = value;
    element.style.transform = value;
  }

  _measureZones() {
    const vw = window.innerWidth || 1280;
    const vh = window.innerHeight || 800;
    let left = 14;
    let right = vw - 14;
    let top = 96;
    let bottom = vh - 92;

    const topbar = this.el.topbar;
    if (topbar) {
      const rect = topbar.getBoundingClientRect();
      if (rect.height > 0) top = rect.bottom + 10;
    }

    const dock = this.el.dock;
    if (dock) {
      const rect = dock.getBoundingClientRect();
      if (rect.height > 0 && rect.top > vh * 0.5) bottom = rect.top - 14;
    }

    const partsPanel = this.el.partsPanel;
    if (partsPanel) {
      const rect = partsPanel.getBoundingClientRect();
      // Only constrain when the panel is actually parked on the left edge.
      if (rect.width > 0 && rect.height > 0 && rect.right > 0 && rect.right < vw * 0.5) {
        left = rect.right + 16;
      }
    }

    const detailPanel = this.el.detailPanel;
    if (detailPanel) {
      const rect = detailPanel.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0 && rect.left > vw * 0.5 && rect.top < vh * 0.9) {
        right = rect.left - 16;
      } else if (
        vw < 900 &&
        detailPanel.classList.contains('is-open') &&
        rect.top > vh * 0.25 &&
        rect.top < vh
      ) {
        // Mobile bottom sheet: keep labels above it.
        bottom = Math.min(bottom, rect.top - 14);
      }
    }

    if (right - left < 120) {
      left = 14;
      right = vw - 14;
    }

    this._zones = {
      left,
      right,
      top,
      bottom: Math.max(top + 100, bottom),
      vw,
      vh,
      valid: true,
    };
  }

  _updateLabelLayerState() {
    const layer = this.el.labelLayer;
    if (!layer) return;
    const mobileSheet = (window.innerWidth || 0) < 900 && this._selectedId !== null;
    const hidden = !this._labelsVisible || mobileSheet;
    this._labelLayerHidden = hidden;
    layer.classList.toggle('is-off', hidden);
  }

  _scheduleZoneRefresh() {
    window.clearTimeout(this._zoneTimer);
    this._zoneTimer = window.setTimeout(() => {
      if (this._mounted) this._measureZones();
    }, 430);
  }

  /* ------------------------------------------------------------------ */
  /* Events                                                              */
  /* ------------------------------------------------------------------ */

  _invoke(name) {
    const handler = this.opts[name];
    if (typeof handler === 'function') handler();
  }

  _bindEvents() {
    const el = this.el;

    el.btnCloseDetail?.addEventListener('click', () => this._closeDetail());

    el.btnExplodeAll?.addEventListener('click', () => this._invoke('onToggleExplodeAll'));
    el.btnResetView?.addEventListener('click', () => this._invoke('onResetView'));
    el.btnAutoRotate?.addEventListener('click', () => this._invoke('onToggleAutoRotate'));
    el.btnLabels?.addEventListener('click', () => this._invoke('onToggleLabels'));

    el.btnHelp?.addEventListener('click', () => this._openHelp());
    el.btnCloseHelp?.addEventListener('click', () => this._closeHelp());
    el.btnStartExploring?.addEventListener('click', () => this._closeHelp());
    el.helpModal?.addEventListener('click', (event) => {
      if (event.target === el.helpModal) this._closeHelp();
    });

    el.btnDismissGuide?.addEventListener('click', () => this._dismissGuide());

    window.addEventListener('resize', this._handleResize, { passive: true });
    window.addEventListener('keydown', this._handleKeyDown, true);
  }

  _closeDetail() {
    if (this._selectedId === null) return;
    if (typeof this.opts.onClosePart === 'function') this.opts.onClosePart();
    if (this._selectedId !== null) this.setSelected(null);
  }

  _openHelp() {
    const modal = this.el.helpModal;
    if (!modal || this._helpOpen) return;
    this._helpOpen = true;
    this._lastFocus = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    window.requestAnimationFrame(() => {
      if (this.el.btnCloseHelp) this.el.btnCloseHelp.focus({ preventScroll: true });
    });
  }

  _closeHelp() {
    const modal = this.el.helpModal;
    if (!modal || !this._helpOpen) return;
    this._helpOpen = false;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    const previous = this._lastFocus;
    this._lastFocus = null;
    if (previous && typeof previous.focus === 'function' && document.contains(previous)) {
      window.requestAnimationFrame(() => previous.focus({ preventScroll: true }));
    }
  }

  _dismissGuide() {
    const card = this.el.guideCard;
    if (!card || card.classList.contains('is-dismissed')) return;
    card.classList.add('is-dismissed');
    card.setAttribute('aria-hidden', 'true');
  }

  _onKeyDown(event) {
    if (!this._helpOpen) return;
    const key = event.key;
    if (key === 'Escape' || key === 'Esc') {
      event.preventDefault();
      event.stopPropagation();
      this._closeHelp();
    }
  }

  _onResize() {
    if (!this._mounted) return;
    if (this._resizeRaf) return;
    this._resizeRaf = window.requestAnimationFrame(() => {
      this._resizeRaf = 0;
      if (!this._mounted) return;
      this._updateLabelLayerState();
      this._measureZones();
      this._measureAllLabels();
    });
  }

  /* ------------------------------------------------------------------ */
  /* Accent helpers                                                      */
  /* ------------------------------------------------------------------ */

  _applyAccent(element, accent) {
    if (!element) return;
    const color = accent || '#5BE7FF';
    element.style.setProperty('--accent', color);
    element.style.setProperty('--accent-08', hexToRgba(color, 0.08));
    element.style.setProperty('--accent-12', hexToRgba(color, 0.12));
    element.style.setProperty('--accent-14', hexToRgba(color, 0.14));
    element.style.setProperty('--accent-18', hexToRgba(color, 0.18));
    element.style.setProperty('--accent-20', hexToRgba(color, 0.2));
    element.style.setProperty('--accent-25', hexToRgba(color, 0.25));
    element.style.setProperty('--accent-32', hexToRgba(color, 0.32));
    element.style.setProperty('--accent-35', hexToRgba(color, 0.35));
    element.style.setProperty('--accent-45', hexToRgba(color, 0.45));
    element.style.setProperty('--accent-50', hexToRgba(color, 0.5));
    element.style.setProperty('--accent-65', hexToRgba(color, 0.65));
  }

  _clearAccent(element) {
    if (!element) return;
    [
      '--accent',
      '--accent-08',
      '--accent-12',
      '--accent-14',
      '--accent-18',
      '--accent-20',
      '--accent-25',
      '--accent-32',
      '--accent-35',
      '--accent-45',
      '--accent-50',
      '--accent-65',
    ].forEach((name) => element.style.removeProperty(name));
  }
}

export default UI;
