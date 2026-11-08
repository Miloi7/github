/**
 * DJI Osmo Action 4 — fully procedural teardown model.
 *
 * Everything (geometry, textures, screens, labels) is generated at runtime.
 * No external models, images, fonts or loaders are used.
 *
 * Coordinate contract (see docs/CONTRACT.md):
 *   1 world unit = 10 mm, body 7.05 × 4.42 × 3.28, front = +Z, up = +Y, right = +X.
 *   Every part group sits at its assembled position; main.js applies the explode
 *   offsets from src/parts-data.js on top of it.
 *
 * export createCameraModel() -> { root, parts, pickables }
 */

import * as THREE from '../vendor/three.module.js';
import { RoundedBoxGeometry } from '../vendor/RoundedBoxGeometry.js';

/* ============================================================================
   0. Small utilities
   ========================================================================== */

const TAU = Math.PI * 2;

function makeCanvas(w, h) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  return canvas;
}

/** Create a CanvasTexture from a draw callback. Colour maps are tagged sRGB. */
function canvasTexture(w, h, draw, opts = {}) {
  const canvas = makeCanvas(w, h);
  const ctx = canvas.getContext('2d');
  draw(ctx, w, h);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  tex.wrapS = opts.wrapS || THREE.ClampToEdgeWrapping;
  tex.wrapT = opts.wrapT || THREE.ClampToEdgeWrapping;
  if (opts.repeat) tex.repeat.set(opts.repeat[0], opts.repeat[1]);
  return tex;
}

const texCache = new Map();
function cachedTexture(key, factory) {
  if (!texCache.has(key)) texCache.set(key, factory());
  return texCache.get(key);
}

/* ---------- canvas drawing helpers ---------- */

function cRoundRect(ctx, x, y, w, h, r) {
  r = Math.min(r, w * 0.5, h * 0.5);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function cText(ctx, text, x, y, font, color, align = 'left', base = 'middle') {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.textBaseline = base;
  ctx.fillText(text, x, y);
}

const FONT_UI = '"Bahnschrift", "Segoe UI", "Microsoft YaHei", Arial, sans-serif';
const FONT_MONO = 'Consolas, "Courier New", monospace';

/* ============================================================================
   1. Runtime textures
   ========================================================================== */

/* ---------- 1.1 front 1.4" selfie screen (square) ---------- */
function texFrontScreen() {
  return cachedTexture('front-screen', () =>
    canvasTexture(512, 512, (ctx, W, H) => {
      // --- live viewfinder scene -------------------------------------------------
      const sky = ctx.createLinearGradient(0, 0, 0, H);
      sky.addColorStop(0, '#0b1e2e');
      sky.addColorStop(0.34, '#1f4f68');
      sky.addColorStop(0.6, '#123243');
      sky.addColorStop(1, '#060c12');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, W, H);

      const sun = ctx.createRadialGradient(W * 0.7, H * 0.29, 4, W * 0.7, H * 0.29, W * 0.36);
      sun.addColorStop(0, 'rgba(255,232,190,0.95)');
      sun.addColorStop(0.22, 'rgba(255,182,104,0.42)');
      sun.addColorStop(1, 'rgba(255,160,80,0)');
      ctx.fillStyle = sun;
      ctx.fillRect(0, 0, W, H);

      // mountain layers
      const layers = [
        { base: 0.62, amp: 0.17, color: '#0b1d28', seed: 0.4 },
        { base: 0.69, amp: 0.12, color: '#091720', seed: 1.7 },
        { base: 0.76, amp: 0.08, color: '#060f16', seed: 2.9 },
      ];
      for (const L of layers) {
        ctx.beginPath();
        ctx.moveTo(0, H);
        ctx.lineTo(0, H * L.base);
        for (let i = 0; i <= 9; i++) {
          const t = i / 9;
          const y = H * (L.base - Math.sin(t * 3.1 + L.seed) * L.amp * 0.55 - Math.cos(t * 5.3 + L.seed * 2) * L.amp * 0.3);
          ctx.lineTo(W * t, y);
        }
        ctx.lineTo(W, H);
        ctx.closePath();
        ctx.fillStyle = L.color;
        ctx.fill();
      }

      // water reflection band
      const water = ctx.createLinearGradient(0, H * 0.74, 0, H);
      water.addColorStop(0, 'rgba(90,190,220,0.18)');
      water.addColorStop(1, 'rgba(3,8,12,0.9)');
      ctx.fillStyle = water;
      ctx.fillRect(0, H * 0.74, W, H * 0.26);
      for (let i = 0; i < 14; i++) {
        const y = H * (0.76 + i * 0.016);
        ctx.fillStyle = `rgba(190,235,255,${0.12 - i * 0.007})`;
        ctx.fillRect(W * (0.08 + (i % 5) * 0.17), y, W * 0.09, 1.4);
      }

      // horizon accent
      ctx.fillStyle = 'rgba(255,205,150,0.35)';
      ctx.fillRect(0, H * 0.615, W, 1.6);

      // --- composition grid ------------------------------------------------------
      ctx.strokeStyle = 'rgba(235,250,255,0.13)';
      ctx.lineWidth = 1.2;
      for (let i = 1; i <= 2; i++) {
        ctx.beginPath();
        ctx.moveTo((W * i) / 3, 0);
        ctx.lineTo((W * i) / 3, H);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, (H * i) / 3);
        ctx.lineTo(W, (H * i) / 3);
        ctx.stroke();
      }

      // centre reticle
      ctx.strokeStyle = 'rgba(255,255,255,0.75)';
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(W * 0.5 - 16, H * 0.5);
      ctx.lineTo(W * 0.5 - 5, H * 0.5);
      ctx.moveTo(W * 0.5 + 5, H * 0.5);
      ctx.lineTo(W * 0.5 + 16, H * 0.5);
      ctx.moveTo(W * 0.5, H * 0.5 - 16);
      ctx.lineTo(W * 0.5, H * 0.5 - 5);
      ctx.moveTo(W * 0.5, H * 0.5 + 5);
      ctx.lineTo(W * 0.5, H * 0.5 + 16);
      ctx.stroke();

      // corner brackets
      ctx.strokeStyle = 'rgba(91,231,255,0.9)';
      ctx.lineWidth = 3;
      const pad = 22, len = 26;
      const corners = [
        [pad, pad, 1, 1],
        [W - pad, pad, -1, 1],
        [pad, H - pad, 1, -1],
        [W - pad, H - pad, -1, -1],
      ];
      for (const [cx, cy, sx, sy] of corners) {
        ctx.beginPath();
        ctx.moveTo(cx + sx * len, cy);
        ctx.lineTo(cx, cy);
        ctx.lineTo(cx, cy + sy * len);
        ctx.stroke();
      }

      // --- status HUD ------------------------------------------------------------
      ctx.fillStyle = 'rgba(2,6,10,0.55)';
      ctx.fillRect(0, 0, W, 62);
      ctx.fillRect(0, H - 78, W, 78);
      ctx.fillStyle = 'rgba(91,231,255,0.25)';
      ctx.fillRect(0, 62, W, 1.5);

      ctx.fillStyle = '#ff3b30';
      ctx.beginPath();
      ctx.arc(40, 31, 8, 0, TAU);
      ctx.fill();
      cText(ctx, 'REC', 58, 32, `700 22px ${FONT_UI}`, '#ffffff');
      cText(ctx, '00:12:45', 130, 32, `600 18px ${FONT_MONO}`, 'rgba(235,250,255,0.8)');

      // top-right battery
      ctx.strokeStyle = 'rgba(235,250,255,0.85)';
      ctx.lineWidth = 2;
      cRoundRect(ctx, W - 78, 20, 40, 20, 5);
      ctx.stroke();
      ctx.fillStyle = 'rgba(121,255,178,0.95)';
      ctx.fillRect(W - 74, 24, 28, 12);
      ctx.fillRect(W - 36, 26, 4, 8);
      cText(ctx, '87%', W - 108, 32, `600 16px ${FONT_MONO}`, 'rgba(235,250,255,0.85)', 'right');

      // resolution pill
      ctx.fillStyle = 'rgba(91,231,255,0.16)';
      cRoundRect(ctx, W * 0.5 - 62, 15, 124, 34, 8);
      ctx.fill();
      ctx.strokeStyle = 'rgba(91,231,255,0.6)';
      ctx.lineWidth = 1.2;
      cRoundRect(ctx, W * 0.5 - 62, 15, 124, 34, 8);
      ctx.stroke();
      cText(ctx, '4K / 120', W * 0.5, 33, `700 17px ${FONT_UI}`, '#bfeaff', 'center');

      // bottom row
      cText(ctx, '1/240', 22, H - 46, `600 19px ${FONT_MONO}`, '#eaf6fb');
      cText(ctx, 'F2.8', 98, H - 46, `600 19px ${FONT_MONO}`, '#eaf6fb');
      cText(ctx, 'ISO 100', 172, H - 46, `600 19px ${FONT_MONO}`, '#eaf6fb');
      cText(ctx, '155°', 22, H - 22, `500 15px ${FONT_MONO}`, 'rgba(125,147,162,0.95)');
      cText(ctx, 'D-LOG M · 10-BIT', W - 22, H - 24, `600 15px ${FONT_UI}`, '#ffb25e', 'right');

      // exposure meter
      const mx = W - 30, my0 = H * 0.5 - 44, my1 = H * 0.5 + 44;
      ctx.strokeStyle = 'rgba(255,255,255,0.35)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(mx, my0);
      ctx.lineTo(mx, my1);
      ctx.stroke();
      ctx.fillStyle = 'rgba(91,231,255,0.95)';
      ctx.beginPath();
      ctx.moveTo(mx, H * 0.5 - 4);
      ctx.lineTo(mx - 6, H * 0.5 + 6);
      ctx.lineTo(mx + 6, H * 0.5 + 6);
      ctx.closePath();
      ctx.fill();
    })
  );
}

/* ---------- 1.2 rear 2.25" landscape screen ---------- */
function texRearScreen() {
  return cachedTexture('rear-screen', () =>
    canvasTexture(1024, 576, (ctx, W, H) => {
      const sky = ctx.createLinearGradient(0, 0, 0, H);
      sky.addColorStop(0, '#081a28');
      sky.addColorStop(0.4, '#1b4a60');
      sky.addColorStop(0.62, '#0d2634');
      sky.addColorStop(1, '#04090d');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, W, H);

      const sun = ctx.createRadialGradient(W * 0.63, H * 0.34, 6, W * 0.63, H * 0.34, W * 0.34);
      sun.addColorStop(0, 'rgba(255,236,196,0.95)');
      sun.addColorStop(0.2, 'rgba(255,186,110,0.42)');
      sun.addColorStop(1, 'rgba(255,160,80,0)');
      ctx.fillStyle = sun;
      ctx.fillRect(0, 0, W, H);

      // ridges
      const ridges = [
        { base: 0.58, amp: 0.16, color: '#0a1c27', seed: 0.7 },
        { base: 0.67, amp: 0.11, color: '#081620', seed: 2.1 },
        { base: 0.76, amp: 0.07, color: '#050e15', seed: 3.3 },
      ];
      for (const L of ridges) {
        ctx.beginPath();
        ctx.moveTo(0, H);
        ctx.lineTo(0, H * L.base);
        for (let i = 0; i <= 12; i++) {
          const t = i / 12;
          const y = H * (L.base - Math.sin(t * 4.2 + L.seed) * L.amp * 0.5 - Math.cos(t * 6.7 + L.seed) * L.amp * 0.28);
          ctx.lineTo(W * t, y);
        }
        ctx.lineTo(W, H);
        ctx.closePath();
        ctx.fillStyle = L.color;
        ctx.fill();
      }

      const water = ctx.createLinearGradient(0, H * 0.74, 0, H);
      water.addColorStop(0, 'rgba(80,185,220,0.16)');
      water.addColorStop(1, 'rgba(2,7,11,0.92)');
      ctx.fillStyle = water;
      ctx.fillRect(0, H * 0.74, W, H * 0.26);
      ctx.fillStyle = 'rgba(255,205,150,0.32)';
      ctx.fillRect(0, H * 0.61, W, 2);

      // thirds grid
      ctx.strokeStyle = 'rgba(235,250,255,0.11)';
      ctx.lineWidth = 1.5;
      for (let i = 1; i <= 2; i++) {
        ctx.beginPath();
        ctx.moveTo((W * i) / 3, 0);
        ctx.lineTo((W * i) / 3, H);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, (H * i) / 3);
        ctx.lineTo(W, (H * i) / 3);
        ctx.stroke();
      }

      // ---------- top bar ----------
      ctx.fillStyle = 'rgba(2,6,10,0.58)';
      ctx.fillRect(0, 0, W, 74);
      ctx.fillStyle = 'rgba(91,231,255,0.22)';
      ctx.fillRect(0, 74, W, 1.6);

      ctx.fillStyle = '#ff3b30';
      ctx.beginPath();
      ctx.arc(46, 37, 9, 0, TAU);
      ctx.fill();
      cText(ctx, 'REC', 66, 38, `700 24px ${FONT_UI}`, '#ffffff');
      cText(ctx, '00:12:45', 146, 38, `600 20px ${FONT_MONO}`, 'rgba(235,250,255,0.82)');

      cText(ctx, '4K / 120', W * 0.5, 38, `700 24px ${FONT_UI}`, '#bfeaff', 'center');
      cText(ctx, 'D-LOG M 10-BIT', W - 160, 38, `600 17px ${FONT_UI}`, '#ffb25e', 'right');

      ctx.strokeStyle = 'rgba(235,250,255,0.85)';
      ctx.lineWidth = 2.4;
      cRoundRect(ctx, W - 92, 24, 42, 21, 5);
      ctx.stroke();
      ctx.fillStyle = 'rgba(121,255,178,0.95)';
      ctx.fillRect(W - 88, 28, 30, 13);
      ctx.fillRect(W - 49, 30, 4, 9);

      // ---------- right icon rail ----------
      const icons = ['⚙', '▤', '◉', '▦'];
      for (let i = 0; i < icons.length; i++) {
        const y = 130 + i * 78;
        ctx.fillStyle = i === 0 ? 'rgba(91,231,255,0.20)' : 'rgba(255,255,255,0.06)';
        cRoundRect(ctx, W - 94, y - 27, 66, 56, 12);
        ctx.fill();
        ctx.strokeStyle = i === 0 ? 'rgba(91,231,255,0.7)' : 'rgba(255,255,255,0.2)';
        ctx.lineWidth = 1.4;
        cRoundRect(ctx, W - 94, y - 27, 66, 56, 12);
        ctx.stroke();
        cText(ctx, icons[i], W - 61, y + 1, `600 26px ${FONT_UI}`, i === 0 ? '#8ce9ff' : 'rgba(235,250,255,0.78)', 'center');
      }

      // ---------- exposure tiles ----------
      const tiles = [
        ['1/240', 'SHUTTER'],
        ['F2.8', 'APERTURE'],
        ['ISO 100', 'ISO'],
        ['0.0 EV', 'EV'],
      ];
      for (let i = 0; i < tiles.length; i++) {
        const x = 30 + i * 112;
        const y = H - 132;
        ctx.fillStyle = 'rgba(3,9,14,0.66)';
        cRoundRect(ctx, x, y, 100, 74, 10);
        ctx.fill();
        ctx.strokeStyle = 'rgba(91,231,255,0.35)';
        ctx.lineWidth = 1.3;
        cRoundRect(ctx, x, y, 100, 74, 10);
        ctx.stroke();
        cText(ctx, tiles[i][0], x + 50, y + 30, `700 22px ${FONT_MONO}`, '#eaf6fb', 'center');
        cText(ctx, tiles[i][1], x + 50, y + 57, `600 11px ${FONT_UI}`, 'rgba(125,147,162,0.95)', 'center');
      }

      // ---------- record button ----------
      const cx = W * 0.5, cy = H - 74;
      ctx.strokeStyle = 'rgba(255,255,255,0.85)';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(cx, cy, 32, 0, TAU);
      ctx.stroke();
      ctx.fillStyle = '#ff3b30';
      ctx.beginPath();
      ctx.arc(cx, cy, 23, 0, TAU);
      ctx.fill();

      // ---------- stabilisation + battery ----------
      cText(ctx, 'ROCKSTEADY 3.0+', W - 130, H - 96, `600 15px ${FONT_UI}`, 'rgba(121,255,178,0.9)', 'right');
      cText(ctx, '87%  ·  01:42:12', W - 130, H - 66, `600 16px ${FONT_MONO}`, 'rgba(235,250,255,0.85)', 'right');
      cText(ctx, 'HORIZON  ●', W - 130, H - 38, `600 13px ${FONT_UI}`, 'rgba(125,147,162,0.9)', 'right');

      // corner brackets
      ctx.strokeStyle = 'rgba(91,231,255,0.85)';
      ctx.lineWidth = 3.4;
      const pad = 20, len = 28;
      const corners = [
        [pad, pad, 1, 1],
        [W - pad, pad, -1, 1],
        [pad, H - pad, 1, -1],
        [W - pad, H - pad, -1, -1],
      ];
      for (const [x, y, sx, sy] of corners) {
        ctx.beginPath();
        ctx.moveTo(x + sx * len, y);
        ctx.lineTo(x, y);
        ctx.lineTo(x, y + sy * len);
        ctx.stroke();
      }
    })
  );
}

/* ---------- 1.3 green PCB with copper routing ---------- */
function drawPcbBase(ctx, W, H) {
  const base = ctx.createLinearGradient(0, 0, W, H);
  base.addColorStop(0, '#0f4a2a');
  base.addColorStop(0.45, '#0b3a21');
  base.addColorStop(1, '#082d19');
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, W, H);

  // copper pours
  ctx.fillStyle = 'rgba(150,122,48,0.09)';
  for (let i = 0; i < 6; i++) {
    cRoundRect(ctx, W * (0.06 + i * 0.14), H * (0.08 + (i % 3) * 0.26), W * 0.2, H * 0.18, 10);
    ctx.fill();
  }
  ctx.fillStyle = 'rgba(4,18,10,0.45)';
  for (let i = 0; i < 5; i++) {
    cRoundRect(ctx, W * (0.12 + i * 0.16), H * (0.16 + (i % 2) * 0.4), W * 0.13, H * 0.12, 8);
    ctx.fill();
  }
}

function drawPcbTraces(ctx, W, H, seedInit, count) {
  let seed = seedInit;
  const rnd = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  ctx.lineCap = 'round';
  for (let i = 0; i < count; i++) {
    let x = 30 + rnd() * (W - 60);
    let y = 30 + rnd() * (H - 60);
    ctx.beginPath();
    ctx.moveTo(x, y);
    const segs = 2 + ((rnd() * 4) | 0);
    for (let j = 0; j < segs; j++) {
      if (rnd() < 0.5) x += (rnd() - 0.5) * W * 0.14;
      else y += (rnd() - 0.5) * H * 0.14;
      x = Math.max(16, Math.min(W - 16, x));
      y = Math.max(16, Math.min(H - 16, y));
      ctx.lineTo(x, y);
    }
    ctx.strokeStyle = `rgba(190,148,58,${0.24 + rnd() * 0.34})`;
    ctx.lineWidth = 1 + rnd() * 1.6;
    ctx.stroke();
    // via at the end of the trace
    if (rnd() < 0.5) {
      ctx.beginPath();
      ctx.arc(x, y, 3.2, 0, TAU);
      ctx.fillStyle = 'rgba(210,170,74,0.6)';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x, y, 1.5, 0, TAU);
      ctx.fillStyle = 'rgba(4,16,9,0.9)';
      ctx.fill();
    }
  }
}

function drawPcbSilk(ctx, W, H, lines) {
  ctx.strokeStyle = 'rgba(226,240,232,0.72)';
  ctx.fillStyle = 'rgba(226,240,232,0.72)';
  ctx.lineWidth = 1.6;

  // component footprints
  const boxes = [
    [W * 0.12, H * 0.12, W * 0.13, H * 0.15],
    [W * 0.32, H * 0.1, W * 0.1, H * 0.12],
    [W * 0.52, H * 0.12, W * 0.11, H * 0.1],
    [W * 0.72, H * 0.1, W * 0.16, H * 0.14],
    [W * 0.11, H * 0.62, W * 0.14, H * 0.18],
    [W * 0.4, H * 0.66, W * 0.2, H * 0.2],
    [W * 0.7, H * 0.62, W * 0.18, H * 0.16],
  ];
  for (const [x, y, w, h] of boxes) {
    ctx.strokeRect(x, y, w, h);
  }

  // footprints for passive parts
  for (let i = 0; i < 26; i++) {
    const t = i / 26;
    const x = W * (0.06 + ((i * 37) % 100) / 118);
    const y = H * (0.3 + t * 0.32);
    ctx.strokeRect(x, y, 12, 7);
  }

  // header pads
  ctx.fillStyle = 'rgba(214,176,82,0.85)';
  for (let i = 0; i < 10; i++) {
    ctx.fillRect(W * 0.05 + i * 13, H * 0.86, 8, 26);
  }

  cText(ctx, lines.title, W * 0.08, H * 0.05, `700 22px ${FONT_MONO}`, 'rgba(230,244,236,0.8)');
  cText(ctx, lines.sub, W * 0.08, H * 0.92, `500 16px ${FONT_MONO}`, 'rgba(226,240,232,0.6)');

  // small QR-ish marker
  const qx = W * 0.88, qy = H * 0.78, qs = 46;
  ctx.fillStyle = 'rgba(226,240,232,0.75)';
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      if ((i * 7 + j * 3 + ((i * j) % 5)) % 3 === 0) {
        ctx.fillRect(qx + i * (qs / 7), qy + j * (qs / 7), qs / 7 - 1, qs / 7 - 1);
      }
    }
  }
}

function texMainboard() {
  return cachedTexture('mainboard', () =>
    canvasTexture(1024, 768, (ctx, W, H) => {
      drawPcbBase(ctx, W, H);
      drawPcbTraces(ctx, W, H, 20230817, 110);
      drawPcbSilk(ctx, W, H, { title: 'DJI  OA4-MAIN  V1.2', sub: '2023-08-17  ·  REV C  ·  ROHS' });
      // DJI silk logo
      cText(ctx, 'DJI', W * 0.86, H * 0.1, `700 30px ${FONT_UI}`, 'rgba(226,240,232,0.75)', 'center');
    })
  );
}

function texSensorBoard() {
  return cachedTexture('sensor-board', () =>
    canvasTexture(512, 448, (ctx, W, H) => {
      drawPcbBase(ctx, W, H);
      drawPcbTraces(ctx, W, H, 77123, 42);
      ctx.strokeStyle = 'rgba(226,240,232,0.7)';
      ctx.lineWidth = 2;
      ctx.strokeRect(W * 0.28, H * 0.2, W * 0.44, H * 0.36);
      ctx.fillStyle = 'rgba(214,176,82,0.9)';
      for (let i = 0; i < 8; i++) ctx.fillRect(W * 0.3 + i * W * 0.05, H * 0.72, W * 0.032, H * 0.05);
      cText(ctx, 'IMX  SENSOR  BOARD', W * 0.5, H * 0.09, `700 18px ${FONT_MONO}`, 'rgba(226,240,232,0.8)', 'center');
      cText(ctx, 'DJI  OA4  SEN  V1.0', W * 0.5, H * 0.9, `500 15px ${FONT_MONO}`, 'rgba(226,240,232,0.55)', 'center');
    })
  );
}

/* ---------- 1.4 battery label ---------- */
function texBatteryLabel() {
  return cachedTexture('battery-label', () =>
    canvasTexture(512, 560, (ctx, W, H) => {
      ctx.fillStyle = '#14161a';
      ctx.fillRect(0, 0, W, H);

      // top orange band with DJI mark
      const band = ctx.createLinearGradient(0, 0, W, 0);
      band.addColorStop(0, '#ff6b2c');
      band.addColorStop(1, '#e03a16');
      ctx.fillStyle = band;
      ctx.fillRect(0, 0, W, 86);
      cText(ctx, 'DJI', 30, 45, `700 52px ${FONT_UI}`, '#ffffff');
      cText(ctx, 'OSMO ACTION 4', W - 30, 45, `600 22px ${FONT_UI}`, 'rgba(255,255,255,0.92)', 'right');

      // big capacity block
      cText(ctx, '1770', 34, 168, `700 92px ${FONT_UI}`, '#f2f7fa');
      cText(ctx, 'mAh', 190, 190, `600 34px ${FONT_UI}`, 'rgba(242,247,250,0.75)');
      cText(ctx, '6.8 Wh  ·  LiPo 1S  ·  3.85 V', 34, 238, `500 22px ${FONT_MONO}`, '#9fb3c0');

      // divider
      ctx.strokeStyle = 'rgba(255,255,255,0.16)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(30, 268);
      ctx.lineTo(W - 30, 268);
      ctx.stroke();

      cText(ctx, 'RECHARGEABLE  Li-ion  BATTERY', 34, 300, `600 17px ${FONT_UI}`, '#dfe9ef');
      cText(ctx, 'MODEL  AB4        CAPACITY 1770 mAh', 34, 334, `500 16px ${FONT_MONO}`, '#95a8b4');
      cText(ctx, 'MADE IN CHINA', 34, 362, `500 15px ${FONT_MONO}`, '#7d93a2');
      cText(ctx, '充电温度 0℃~45℃  ·  请使用原装充电器', 34, 396, `500 17px ${FONT_UI}`, '#c9d6de');
      cText(ctx, '-20℃ ~ 45℃  OPERATING', 34, 424, `500 15px ${FONT_MONO}`, '#7d93a2');

      // warning triangle
      const tx = 70, ty = 492;
      ctx.fillStyle = '#f7c948';
      ctx.beginPath();
      ctx.moveTo(tx, ty - 30);
      ctx.lineTo(tx + 30, ty + 22);
      ctx.lineTo(tx - 30, ty + 22);
      ctx.closePath();
      ctx.fill();
      cText(ctx, '!', tx, ty + 4, `700 30px ${FONT_UI}`, '#14161a', 'center');

      // barcode
      const bx = W - 196, by = 458, bw = 168, bh = 62;
      ctx.fillStyle = 'rgba(255,255,255,0.92)';
      ctx.fillRect(bx, by, bw, bh);
      ctx.fillStyle = '#14161a';
      let s = 99;
      const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
      for (let x = bx + 6; x < bx + bw - 6; ) {
        const wpx = 1 + ((rnd() * 4) | 0);
        ctx.fillRect(x, by + 4, wpx, bh - 16);
        x += wpx + 1 + ((rnd() * 3) | 0);
      }
      cText(ctx, 'AB4-1770-3S85', bx + bw * 0.5, by + bh - 5, `500 11px ${FONT_MONO}`, '#14161a', 'center');

      // warning text
      cText(ctx, 'CAUTION: DO NOT PUNCTURE, CRUSH OR EXPOSE TO FIRE.', 34, 536, `500 11px ${FONT_MONO}`, '#6f8492');
    })
  );
}

/* ---------- 1.5 lens engravings / coating / iris / sensor die ---------- */
function texLensRing() {
  return cachedTexture('lens-ring', () =>
    canvasTexture(1024, 96, (ctx, W, H) => {
      ctx.fillStyle = '#14161a';
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = 'rgba(255,255,255,0.05)';
      ctx.fillRect(0, 0, W, 3);
      ctx.fillRect(0, H - 3, W, 3);

      const text = 'DJI  OSMO ACTION 4   ·   1/1.3" CMOS   ·   F2.8   ·   155°   ·   ASPHERICAL LENS   ·   ';
      ctx.font = `600 26px ${FONT_MONO}`;
      ctx.fillStyle = 'rgba(196,206,216,0.92)';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 14, H * 0.5 + 1, W - 28);

      // rotation index mark
      ctx.fillStyle = '#ff3b30';
      ctx.fillRect(0, 0, 7, H);
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      ctx.fillRect(10, 0, 2, H);
    })
  );
}

function texLensCoating() {
  return cachedTexture('lens-coating', () =>
    canvasTexture(512, 512, (ctx, W, H) => {
      // v axis runs from lens centre (top) to the rim (bottom) on the lathe dome.
      // Deep coated glass: mostly near-black with a restrained blue-violet sheen.
      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, '#020308');
      g.addColorStop(0.2, '#050920');
      g.addColorStop(0.42, '#0b1240');
      g.addColorStop(0.6, '#1d1652');
      g.addColorStop(0.76, '#0d2a52');
      g.addColorStop(0.9, '#061428');
      g.addColorStop(1, '#030509');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      // subtle iridescent bands
      const bands = [
        { y: 0.32, h: 0.1, c1: 'rgba(58,150,190,0.16)', c2: 'rgba(58,150,190,0)' },
        { y: 0.5, h: 0.12, c1: 'rgba(112,64,180,0.2)', c2: 'rgba(112,64,180,0)' },
        { y: 0.68, h: 0.1, c1: 'rgba(52,150,150,0.12)', c2: 'rgba(52,150,150,0)' },
      ];
      for (const b of bands) {
        const bg = ctx.createLinearGradient(0, H * b.y, 0, H * (b.y + b.h));
        bg.addColorStop(0, b.c1);
        bg.addColorStop(1, b.c2);
        ctx.fillStyle = bg;
        ctx.fillRect(0, H * b.y, W, H * b.h);
      }

      // off-axis reflection streak (kept tight and dim)
      const streak = ctx.createRadialGradient(W * 0.3, H * 0.44, 6, W * 0.3, H * 0.44, W * 0.36);
      streak.addColorStop(0, 'rgba(220,240,255,0.42)');
      streak.addColorStop(0.16, 'rgba(150,200,255,0.16)');
      streak.addColorStop(0.5, 'rgba(90,130,220,0.05)');
      streak.addColorStop(1, 'rgba(90,130,220,0)');
      ctx.fillStyle = streak;
      ctx.fillRect(0, 0, W, H);

      // thin concentric AR rings
      for (let i = 0; i < 7; i++) {
        ctx.strokeStyle = `rgba(120,170,220,${0.05 - i * 0.005})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, H * (0.2 + i * 0.09));
        ctx.lineTo(W, H * (0.2 + i * 0.09));
        ctx.stroke();
      }
    })
  );
}

function texAperture() {
  return cachedTexture('aperture', () =>
    canvasTexture(512, 512, (ctx, W, H) => {
      const cx = W * 0.5, cy = H * 0.5, R = W * 0.48;
      ctx.fillStyle = '#05070a';
      ctx.fillRect(0, 0, W, H);

      // iris blades
      for (let i = 0; i < 7; i++) {
        const a = (i / 7) * TAU + 0.35;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, R, a, a + TAU / 7 - 0.16);
        ctx.closePath();
        const shade = 22 + ((i * 13) % 16);
        ctx.fillStyle = `rgb(${shade},${shade + 3},${shade + 6})`;
        ctx.fill();
        ctx.strokeStyle = 'rgba(120,140,160,0.18)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // aperture opening
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.35, 0, TAU);
      ctx.fillStyle = '#020305';
      ctx.fill();
      ctx.strokeStyle = 'rgba(140,190,230,0.35)';
      ctx.lineWidth = 3;
      ctx.stroke();

      // lens element rim highlight
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.98, 0, TAU);
      ctx.strokeStyle = 'rgba(90,140,190,0.45)';
      ctx.lineWidth = 10;
      ctx.stroke();
    })
  );
}

function texSensorDie() {
  return cachedTexture('sensor-die', () =>
    canvasTexture(512, 512, (ctx, W, H) => {
      ctx.fillStyle = '#171a44';
      ctx.fillRect(0, 0, W, H);

      // pixel array
      const n = 40;
      const cell = W / n;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          const v = (i * 7 + j * 13 + ((i * j) % 9)) % 5;
          ctx.fillStyle = `rgba(${30 + v * 7},${60 + v * 10},${150 + v * 14},${0.35 + v * 0.06})`;
          ctx.fillRect(i * cell + 0.6, j * cell + 0.6, cell - 1.2, cell - 1.2);
        }
      }

      // optical black border
      ctx.strokeStyle = 'rgba(220,230,255,0.7)';
      ctx.lineWidth = 14;
      ctx.strokeRect(7, 7, W - 14, H - 14);
      ctx.strokeStyle = 'rgba(215,170,80,0.9)';
      ctx.lineWidth = 5;
      ctx.strokeRect(17, 17, W - 34, H - 34);

      // bond pads
      ctx.fillStyle = 'rgba(228,190,100,0.95)';
      for (let i = 0; i < 12; i++) {
        const t = 23 + i * ((W - 46) / 11);
        ctx.fillRect(t - 5, 9, 10, 9);
        ctx.fillRect(t - 5, H - 18, 10, 9);
        ctx.fillRect(9, t - 5, 9, 10);
        ctx.fillRect(W - 18, t - 5, 9, 10);
      }

      // iridescent sheen
      const sheen = ctx.createLinearGradient(0, 0, W, H);
      sheen.addColorStop(0, 'rgba(120,255,220,0.14)');
      sheen.addColorStop(0.45, 'rgba(255,120,220,0.1)');
      sheen.addColorStop(1, 'rgba(120,160,255,0.16)');
      ctx.fillStyle = sheen;
      ctx.fillRect(0, 0, W, H);

      cText(ctx, '1/1.3"', W * 0.5, H * 0.5, `700 34px ${FONT_MONO}`, 'rgba(235,245,255,0.45)', 'center');
    })
  );
}

/* ---------- 1.6 word marks & small icons ---------- */
function texDjiLogo() {
  return cachedTexture('dji-logo', () =>
    canvasTexture(512, 160, (ctx, W, H) => {
      ctx.clearRect(0, 0, W, H);
      ctx.font = `700 128px ${FONT_UI}`;
      ctx.fillStyle = 'rgba(240,248,252,0.94)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('DJI', W * 0.5, H * 0.54);
    })
  );
}

function texOsmoText() {
  return cachedTexture('osmo-text', () =>
    canvasTexture(768, 96, (ctx, W, H) => {
      ctx.clearRect(0, 0, W, H);
      ctx.font = `600 44px ${FONT_UI}`;
      ctx.fillStyle = 'rgba(214,228,238,0.72)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('OSMO ACTION 4', W * 0.5, H * 0.54);
    })
  );
}

function texRecIcon() {
  return cachedTexture('rec-icon', () =>
    canvasTexture(128, 128, (ctx, W, H) => {
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = 'rgba(255,255,255,0.85)';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(W / 2, H / 2, 34, 0, TAU);
      ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,0.92)';
      ctx.beginPath();
      ctx.arc(W / 2, H / 2, 16, 0, TAU);
      ctx.fill();
    })
  );
}

function texUsbIcon() {
  return cachedTexture('usb-icon', () =>
    canvasTexture(128, 128, (ctx, W, H) => {
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = 'rgba(214,228,238,0.85)';
      ctx.fillStyle = 'rgba(214,228,238,0.85)';
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      const cx = W / 2;
      // stem
      ctx.beginPath();
      ctx.moveTo(cx, 96);
      ctx.lineTo(cx, 34);
      ctx.stroke();
      // arrow head
      ctx.beginPath();
      ctx.moveTo(cx - 10, 44);
      ctx.lineTo(cx, 26);
      ctx.lineTo(cx + 10, 44);
      ctx.closePath();
      ctx.fill();
      // branches
      ctx.beginPath();
      ctx.moveTo(cx, 66);
      ctx.lineTo(cx - 22, 52);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx - 24, 50, 6, 0, TAU);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(cx, 76);
      ctx.lineTo(cx + 22, 62);
      ctx.stroke();
      ctx.fillRect(cx + 18, 48, 12, 12);
      // base
      ctx.beginPath();
      ctx.arc(cx, 100, 9, 0, TAU);
      ctx.fill();
    })
  );
}

function texMountText() {
  return cachedTexture('mount-text', () =>
    canvasTexture(768, 96, (ctx, W, H) => {
      ctx.clearRect(0, 0, W, H);
      ctx.font = `600 30px ${FONT_MONO}`;
      ctx.fillStyle = 'rgba(220,232,240,0.66)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('DJI  ·  MAGNETIC  QUICK-RELEASE', W * 0.5, H * 0.54);
    })
  );
}

function texChipLabel(title, sub) {
  return cachedTexture(`chip:${title}:${sub}`, () =>
    canvasTexture(256, 256, (ctx, W, H) => {
      ctx.fillStyle = '#08090b';
      ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = 'rgba(190,205,220,0.22)';
      ctx.lineWidth = 2;
      ctx.strokeRect(4, 4, W - 8, H - 8);
      cText(ctx, title, W * 0.5, H * 0.42, `700 44px ${FONT_UI}`, 'rgba(226,238,248,0.92)', 'center');
      cText(ctx, sub, W * 0.5, H * 0.66, `500 20px ${FONT_MONO}`, 'rgba(178,196,210,0.8)', 'center');
      ctx.fillStyle = 'rgba(150,170,190,0.25)';
      ctx.fillRect(W * 0.2, H * 0.78, W * 0.6, 3);
    })
  );
}

/* ============================================================================
   2. Procedural geometry helpers
   ========================================================================== */

/** Rounded rectangle as a THREE.Shape (counter-clockwise). */
function rrShape(w, h, r) {
  const hw = w * 0.5;
  const hh = h * 0.5;
  const rr = Math.min(r, hw * 0.999, hh * 0.999);
  const s = new THREE.Shape();
  s.moveTo(-hw + rr, -hh);
  s.lineTo(hw - rr, -hh);
  s.quadraticCurveTo(hw, -hh, hw, -hh + rr);
  s.lineTo(hw, hh - rr);
  s.quadraticCurveTo(hw, hh, hw - rr, hh);
  s.lineTo(-hw + rr, hh);
  s.quadraticCurveTo(-hw, hh, -hw, hh - rr);
  s.lineTo(-hw, -hh + rr);
  s.quadraticCurveTo(-hw, -hh, -hw + rr, -hh);
  s.closePath();
  return s;
}

/** Rounded rectangle hole path (reversed winding, optional centre offset). */
function rrHolePath(w, h, r, cx = 0, cy = 0) {
  const pts = rrShape(w, h, r).getPoints(8);
  pts.reverse();
  for (const p of pts) {
    p.x += cx;
    p.y += cy;
  }
  return new THREE.Path(pts);
}

function circleHole(cx, cy, r, segments = 32) {
  const path = new THREE.Path();
  path.absarc(cx, cy, r, 0, TAU, true, segments);
  return path;
}

/** Rectangular ring shape (outer rounded rect with an inner rounded hole). */
function frameShape(ow, oh, iw, ih, rOuter, rInner) {
  const shape = rrShape(ow, oh, rOuter);
  shape.holes.push(rrHolePath(iw, ih, rInner));
  return shape;
}

/**
 * Extruded plate from a 2D shape, centred on the origin.
 * axis: 'z' (thickness along Z), 'y' (along Y), 'x' (along X).
 */
function plateGeo(shape, thickness, opts = {}) {
  const bevel = Math.max(0, Math.min(opts.bevel ?? 0.02, thickness * 0.24));
  const depth = Math.max(0.005, thickness - bevel * 2);
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: bevel > 0,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: opts.bevelSegments ?? 1,
    curveSegments: opts.curveSegments ?? 20,
    steps: 1,
  });
  geo.computeBoundingBox();
  const bb = geo.boundingBox;
  geo.translate(0, 0, -(bb.min.z + bb.max.z) * 0.5);
  const axis = opts.axis || 'z';
  if (axis === 'y') geo.rotateX(-Math.PI / 2);
  else if (axis === 'x') geo.rotateY(Math.PI / 2);
  return geo;
}

function rbox(w, h, d, r = 0.08, seg = 2) {
  const rr = Math.min(r, w * 0.49, h * 0.49, d * 0.49);
  return new RoundedBoxGeometry(w, h, d, seg, rr);
}

function cyl(rt, rb, h, seg = 32, open = false) {
  return new THREE.CylinderGeometry(rt, rb, h, seg, 1, open);
}

function torus(r, tube, radial = 8, tubular = 32) {
  return new THREE.TorusGeometry(r, tube, radial, tubular);
}

/* ============================================================================
   3. Material factories — every call returns a NEW material instance so that
   materials are never shared across parts (highlighting must not leak).
   ========================================================================== */

const M = {
  body(opts = {}) {
    return new THREE.MeshPhysicalMaterial({
      color: 0x0e1013,
      roughness: 0.42,
      metalness: 0.28,
      clearcoat: 0.55,
      clearcoatRoughness: 0.32,
      ...opts,
    });
  },
  matte(opts = {}) {
    return new THREE.MeshStandardMaterial({
      color: 0x14161a,
      roughness: 0.68,
      metalness: 0.15,
      ...opts,
    });
  },
  plastic(opts = {}) {
    return new THREE.MeshStandardMaterial({
      color: 0x101114,
      roughness: 0.55,
      metalness: 0.08,
      ...opts,
    });
  },
  metal(opts = {}) {
    return new THREE.MeshStandardMaterial({
      color: 0x9aa3ad,
      roughness: 0.3,
      metalness: 0.95,
      ...opts,
    });
  },
  darkMetal(opts = {}) {
    return new THREE.MeshStandardMaterial({
      color: 0x3a3f46,
      roughness: 0.36,
      metalness: 0.88,
      ...opts,
    });
  },
  rubber(opts = {}) {
    return new THREE.MeshStandardMaterial({
      color: 0x0a0b0d,
      roughness: 0.95,
      metalness: 0.02,
      ...opts,
    });
  },
  copper(opts = {}) {
    return new THREE.MeshStandardMaterial({
      color: 0xa8702f,
      roughness: 0.4,
      metalness: 0.75,
      ...opts,
    });
  },
  kapton(opts = {}) {
    return new THREE.MeshStandardMaterial({
      color: 0xd07527,
      roughness: 0.42,
      metalness: 0.18,
      ...opts,
    });
  },
  glass(opts = {}) {
    return new THREE.MeshPhysicalMaterial({
      color: 0x0a1620,
      roughness: 0.05,
      metalness: 0.0,
      transparent: true,
      opacity: 0.28,
      clearcoat: 1,
      clearcoatRoughness: 0.04,
      ior: 1.46,
      depthWrite: false,
      ...opts,
    });
  },
  screen(tex, opts = {}) {
    return new THREE.MeshStandardMaterial({
      map: tex,
      emissiveMap: tex,
      emissive: new THREE.Color(0xffffff),
      emissiveIntensity: 0.9,
      color: 0x2b2b2b,
      roughness: 0.26,
      metalness: 0.0,
      ...opts,
    });
  },
};

/* ============================================================================
   4. Part building helpers (groups are positioned before building, so all
   placements below are expressed in world/model coordinates).
   ========================================================================== */

function addMesh(g, geo, mat, x, y, z, name) {
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x - g.position.x, y - g.position.y, z - g.position.z);
  if (name) mesh.name = name;
  g.add(mesh);
  return mesh;
}

function addInstanced(g, geo, mat, positions, name) {
  const mesh = new THREE.InstancedMesh(geo, mat, positions.length);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < positions.length; i++) {
    const p = positions[i];
    dummy.position.set(p[0] - g.position.x, p[1] - g.position.y, p[2] - g.position.z);
    dummy.rotation.set(0, 0, 0);
    if (p.length > 3) dummy.rotation.set(p[3], p[4] || 0, p[5] || 0);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  mesh.instanceMatrix.needsUpdate = true;
  if (name) mesh.name = name;
  g.add(mesh);
  return mesh;
}

function addDecal(g, tex, w, h, x, y, z, rotX = 0, rotY = 0, rotZ = 0, opacity = 1) {
  const mat = new THREE.MeshStandardMaterial({
    map: tex,
    transparent: true,
    opacity,
    depthWrite: false,
    roughness: 0.5,
    metalness: 0.1,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  mesh.position.set(x - g.position.x, y - g.position.y, z - g.position.z);
  mesh.rotation.set(rotX, rotY, rotZ);
  g.add(mesh);
  return mesh;
}

function setAnchor(g, x, y, z) {
  g.userData.labelAnchor = new THREE.Vector3(x - g.position.x, y - g.position.y, z - g.position.z);
}

/* ============================================================================
   5. Shared model dimensions
   ========================================================================== */

const BODY_W = 7.05;
const BODY_H = 4.42;
const BODY_D = 3.16;
const BODY_R = 0.7;

const FRONT_FACE = 1.74; // front cover front surface
const BACK_FACE = -1.70; // rear cover back surface
const BODY_TOP = 2.21;
const BODY_BOTTOM = -2.21;

const LENS_X = -1.55;
const LENS_Y = 0.5;
const SCREEN_X = 2.0;
const SCREEN_Y = 0.25;

/* ============================================================================
   6. Individual parts
   ========================================================================== */

/* ---------------------------------------------------------------------------
   01 — FRONT SHELL: front cover with lens + screen openings, wrap-around
   left / top / bottom casing panels, power key, seals, screws, microphones.
   ------------------------------------------------------------------------- */
function buildFrontShell(g) {
  /* -- front cover plate with openings (lens, 1.4" display, status LED) -- */
  const coverShape = rrShape(BODY_W, BODY_H, BODY_R);
  coverShape.holes.push(circleHole(LENS_X, LENS_Y, 1.5, 40));
  coverShape.holes.push(rrHolePath(2.3, 2.3, 0.26, SCREEN_X, SCREEN_Y));
  coverShape.holes.push(circleHole(0.45, 1.8, 0.08, 16));

  const coverMat = M.body({ color: 0x101216, roughness: 0.34, metalness: 0.3, clearcoat: 0.75 });
  addMesh(g, plateGeo(coverShape, 0.16, { bevel: 0.018, curveSegments: 22 }), coverMat, 0, 0, 1.66, 'front-cover');

  /* -- casing panels (left / top / bottom); the right side is the side door -- */
  const wallMat = () =>
    M.body({ color: 0x0d0f12, roughness: 0.48, metalness: 0.24, clearcoat: 0.35 });
  addMesh(g, plateGeo(rrShape(3.3, 4.16, 0.5), 0.2, { axis: 'x', bevel: 0.02, curveSegments: 12 }), wallMat(), -3.42, 0, 0.02, 'left-wall');
  addMesh(g, plateGeo(rrShape(BODY_W, 3.3, 0.55), 0.18, { axis: 'y', bevel: 0.02, curveSegments: 12 }), wallMat(), 0, BODY_TOP - 0.09, 0.02, 'top-wall');
  addMesh(g, plateGeo(rrShape(BODY_W, 3.3, 0.55), 0.18, { axis: 'y', bevel: 0.02, curveSegments: 12 }), wallMat(), 0, BODY_BOTTOM + 0.09, 0.02, 'bottom-wall');

  /* -- inner sealing gasket (visible once the shell is pulled forward) -- */
  addMesh(
    g,
    plateGeo(frameShape(6.5, 3.9, 6.16, 3.56, 0.5, 0.45), 0.05, { bevel: 0.01, curveSegments: 12 }),
    M.rubber({ color: 0x08090b, roughness: 0.9 }),
    0, 0, 1.575, 'shell-gasket'
  );

  /* -- EMI copper foil on the inside of the left wall -- */
  const foilMat = M.copper({ roughness: 0.34, metalness: 0.82, color: 0x9c6a2c });
  const foil = addMesh(g, new THREE.PlaneGeometry(2.4, 1.7), foilMat, -3.31, 0.05, 0.15, 'emi-foil');
  foil.rotation.y = Math.PI / 2;

  /* -- inner screw bosses -- */
  const bossGeo = cyl(0.1, 0.1, 0.1, 14);
  bossGeo.rotateX(Math.PI / 2);
  addInstanced(g, bossGeo, M.darkMetal({ color: 0x23262b }), [
    [-2.7, 1.62, 1.54], [2.72, 1.62, 1.54], [2.72, -1.62, 1.54], [-2.7, -1.62, 1.54],
  ], 'shell-bosses');

  /* -- front corner screws (torx heads) -- */
  const screwGeo = cyl(0.072, 0.072, 0.035, 14);
  screwGeo.rotateX(Math.PI / 2);
  addInstanced(g, screwGeo, M.darkMetal({ color: 0x2c3037, roughness: 0.3, metalness: 0.92 }), [
    [-3.2, 1.86, 1.744], [3.2, 1.86, 1.744], [-3.2, -1.86, 1.744], [3.2, -1.86, 1.744],
  ], 'front-screws');

  /* -- status LED behind its front opening -- */
  const ledGeo = cyl(0.075, 0.075, 0.03, 14);
  ledGeo.rotateX(Math.PI / 2);
  addMesh(g, ledGeo, new THREE.MeshStandardMaterial({
    color: 0x3a0a08, emissive: new THREE.Color(0xff2a1e), emissiveIntensity: 1.6,
    roughness: 0.35, metalness: 0.2,
  }), 0.45, 1.8, 1.715, 'status-led');

  /* -- microphones on the top casing -- */
  const micGeo = cyl(0.048, 0.048, 0.02, 10);
  addInstanced(g, micGeo, M.matte({ color: 0x050607, roughness: 0.95 }), [
    [-1.62, BODY_TOP + 0.004, 0.62], [-1.44, BODY_TOP + 0.004, 0.62], [-1.26, BODY_TOP + 0.004, 0.62],
    [1.95, BODY_TOP + 0.004, -1.06], [2.14, BODY_TOP + 0.004, -1.06],
  ], 'top-mics');

  /* -- bottom microphone slots -- */
  const slotGeo = new THREE.BoxGeometry(0.62, 0.012, 0.075);
  addInstanced(g, slotGeo, M.matte({ color: 0x040506, roughness: 0.95 }), [
    [-1.35, BODY_BOTTOM + 0.004, 0.86], [0.15, BODY_BOTTOM + 0.004, 0.86],
    [-1.35, BODY_BOTTOM + 0.004, -0.98], [0.15, BODY_BOTTOM + 0.004, -0.98],
  ], 'bottom-slots');

  /* -- left side power key -- */
  const keyGeo = cyl(0.21, 0.21, 0.1, 24);
  keyGeo.rotateZ(Math.PI / 2);
  addMesh(g, keyGeo, M.plastic({ color: 0x191b20, roughness: 0.5 }), -3.5, 1.18, 0.6, 'power-key');
  const keyRing = torus(0.225, 0.03, 8, 26);
  keyRing.rotateY(Math.PI / 2);
  addMesh(g, keyRing, M.darkMetal({ color: 0x54595f }), -3.49, 1.18, 0.6, 'power-key-ring');

  /* -- printed marks -- */
  addDecal(g, texDjiLogo(), 0.92, 0.29, -1.72, -1.55, 1.745, 0, 0, 0, 0.85);
  addDecal(g, texOsmoText(), 1.75, 0.22, 2.02, -1.52, 1.745, 0, 0, 0, 0.72);
  addDecal(g, texDjiLogo(), 0.78, 0.24, -2.15, BODY_TOP + 0.003, -0.7, -Math.PI / 2, 0, 0, 0.75);
  addDecal(g, texOsmoText(), 1.55, 0.2, -0.35, BODY_TOP + 0.003, -1.2, -Math.PI / 2, 0, 0, 0.6);

  setAnchor(g, -0.2, 1.55, 1.74);
}

/* ---------------------------------------------------------------------------
   02 — LENS MODULE: long barrel (extends into the body), metal bezel ring,
   engraved ring, coated convex front element, iris, rear optical block.
   ------------------------------------------------------------------------- */
function buildLens(g) {
  const barrelMat = M.plastic({ color: 0x121519, roughness: 0.56, metalness: 0.24 });
  const ringMat = M.darkMetal({ color: 0x353a41, roughness: 0.34, metalness: 0.9 });
  const ringGeoMat = M.metal({ color: 0x626970, roughness: 0.28, metalness: 0.95 });

  /* rear barrel reaching towards the sensor */
  const rear = cyl(1.12, 1.12, 0.78, 40);
  rear.rotateX(Math.PI / 2);
  addMesh(g, rear, barrelMat, LENS_X, LENS_Y, 1.19, 'lens-rear-barrel');
  for (let i = 0; i < 3; i++) {
    const rib = torus(1.125, 0.024, 6, 36);
    addMesh(g, rib, ringMat.clone(), LENS_X, LENS_Y, 0.94 + i * 0.22, 'lens-rib');
  }

  /* rear optical element + retaining ring (seen from inside after teardown) */
  const rearGlassGeo = new THREE.CircleGeometry(0.94, 32);
  rearGlassGeo.rotateY(Math.PI);
  addMesh(g, rearGlassGeo, M.glass({ color: 0x0b1c33, opacity: 0.85, metalness: 0.2, roughness: 0.06 }),
    LENS_X, LENS_Y, 0.802, 'lens-rear-glass');
  const rearRing = torus(0.98, 0.045, 8, 36);
  addMesh(g, rearRing, ringGeoMat.clone(), LENS_X, LENS_Y, 0.81, 'lens-rear-ring');

  /* front optical block / ring */
  const block = cyl(1.28, 1.28, 0.14, 40);
  block.rotateX(Math.PI / 2);
  addMesh(g, block, ringMat.clone(), LENS_X, LENS_Y, 1.655, 'lens-block');

  const barrel = cyl(1.62, 1.62, 0.28, 56, true);
  barrel.rotateX(Math.PI / 2);
  addMesh(g, barrel, ringMat, LENS_X, LENS_Y, 1.8, 'lens-bezel-tube');

  const annulus = new THREE.RingGeometry(1.16, 1.64, 56);
  addMesh(g, annulus, ringGeoMat, LENS_X, LENS_Y, 1.945, 'lens-bezel-face');

  const chamfer = torus(1.6, 0.032, 8, 56);
  addMesh(g, chamfer, ringGeoMat.clone(), LENS_X, LENS_Y, 1.945, 'lens-bezel-chamfer');

  /* engraved ring band */
  const band = cyl(1.632, 1.632, 0.1, 72, true);
  band.rotateX(Math.PI / 2);
  addMesh(g, band, new THREE.MeshStandardMaterial({
    map: texLensRing(), color: 0xffffff, roughness: 0.36, metalness: 0.85,
  }), LENS_X, LENS_Y, 1.868, 'lens-engraving');

  /* inner barrel + iris */
  const inner = cyl(1.14, 1.14, 0.26, 40, true);
  inner.rotateX(Math.PI / 2);
  addMesh(g, inner, M.matte({ color: 0x07080a, roughness: 0.9 }), LENS_X, LENS_Y, 1.79, 'lens-inner-barrel');

  const iris = new THREE.CircleGeometry(1.13, 44);
  addMesh(g, iris, new THREE.MeshStandardMaterial({
    map: texAperture(), roughness: 0.34, metalness: 0.55, color: 0xffffff,
  }), LENS_X, LENS_Y, 1.9, 'lens-iris');

  const irisRing = new THREE.RingGeometry(1.12, 1.165, 48);
  addMesh(g, irisRing, ringMat.clone(), LENS_X, LENS_Y, 1.903, 'lens-iris-ring');

  /* convex coated front element */
  const profile = [];
  const STEPS = 12;
  for (let i = 0; i <= STEPS; i++) {
    const a = (i / STEPS) * (Math.PI / 2);
    profile.push(new THREE.Vector2(Math.cos(a) * 1.14, Math.sin(a) * 0.115));
  }
  const dome = new THREE.LatheGeometry(profile, 56);
  dome.rotateX(Math.PI / 2);
  addMesh(g, dome, new THREE.MeshPhysicalMaterial({
    map: texLensCoating(),
    color: 0xffffff,
    metalness: 0.32,
    roughness: 0.08,
    clearcoat: 1,
    clearcoatRoughness: 0.03,
    transparent: true,
    opacity: 0.97,
    envMapIntensity: 1.0,
  }), LENS_X, LENS_Y, 1.9, 'lens-front-element');

  /* a thin retaining ring in front of the glass */
  const retainer = torus(1.15, 0.025, 6, 48);
  addMesh(g, retainer, ringGeoMat.clone(), LENS_X, LENS_Y, 2.0, 'lens-retainer');

  setAnchor(g, LENS_X, LENS_Y, 2.05);
}

/* ---------------------------------------------------------------------------
   03 — FRONT DISPLAY: square 1.4" panel, gloss bezel, glass, FPC harness.
   ------------------------------------------------------------------------- */
function buildFrontScreen(g) {
  /* backing plate closes the opening */
  addMesh(g, rbox(2.44, 2.44, 0.06, 0.12, 2), M.plastic({ color: 0x0a0b0d }), SCREEN_X, SCREEN_Y, 1.73, 'front-lcd-backing');

  /* active panel */
  addMesh(g, new THREE.PlaneGeometry(2.2, 2.2), M.screen(texFrontScreen()), SCREEN_X, SCREEN_Y, 1.792, 'front-lcd');

  /* glossy bezel frame */
  addMesh(
    g,
    plateGeo(frameShape(2.62, 2.62, 2.29, 2.29, 0.34, 0.27), 0.1, { bevel: 0.012, curveSegments: 16 }),
    M.body({ color: 0x17191d, roughness: 0.22, metalness: 0.36, clearcoat: 1, clearcoatRoughness: 0.1 }),
    SCREEN_X, SCREEN_Y, 1.784, 'front-lcd-bezel'
  );

  /* protective glass */
  addMesh(g, new THREE.PlaneGeometry(2.26, 2.26), M.glass({ color: 0x9fd8ff, opacity: 0.16 }), SCREEN_X, SCREEN_Y, 1.815, 'front-lcd-glass');

  /* FPC harness running back into the body */
  const fpc = M.kapton({ color: 0xc99a3a });
  addMesh(g, rbox(0.44, 0.05, 0.5, 0.02, 1), fpc, 2.3, -1.02, 1.47, 'front-fpc-a');
  addMesh(g, rbox(0.44, 0.78, 0.05, 0.02, 1), fpc.clone(), 2.3, -1.42, 1.24, 'front-fpc-b');
  addMesh(g, rbox(0.5, 0.16, 0.1, 0.03, 1), M.plastic({ color: 0x121317 }), 2.3, -1.85, 1.24, 'front-fpc-connector');

  setAnchor(g, SCREEN_X, SCREEN_Y, 1.82);
}

/* ---------------------------------------------------------------------------
   04 — CMOS SENSOR: stiffener, sensor board, ceramic package, die, bracket,
   flex harness towards the mainboard.
   ------------------------------------------------------------------------- */
function buildSensor(g) {
  /* metal stiffener */
  addMesh(g, plateGeo(rrShape(2.15, 1.95, 0.14), 0.06, { bevel: 0.01, curveSegments: 12 }),
    M.darkMetal({ color: 0x2b3037 }), LENS_X, LENS_Y, 0.53, 'sensor-stiffener');

  /* sensor PCB */
  addMesh(g, plateGeo(rrShape(2.0, 1.8, 0.12), 0.07, { bevel: 0.01, curveSegments: 12 }),
    M.plastic({ color: 0x0c3a21, roughness: 0.56, metalness: 0.12 }), LENS_X, LENS_Y, 0.6, 'sensor-pcb');

  /* board artwork */
  const boardArt = addMesh(g, new THREE.PlaneGeometry(1.94, 1.74), M.plastic({
    map: texSensorBoard(), color: 0xffffff, roughness: 0.6, metalness: 0.1,
  }), LENS_X, LENS_Y, 0.638, 'sensor-pcb-art');
  boardArt.rotation.z = Math.PI;

  /* ceramic package */
  addMesh(g, rbox(1.52, 1.32, 0.16, 0.07, 2), M.plastic({ color: 0x191b1f, roughness: 0.5, metalness: 0.25 }),
    LENS_X, LENS_Y, 0.7, 'sensor-package');

  /* die frame + die */
  addMesh(g, plateGeo(frameShape(1.36, 1.16, 1.05, 0.87, 0.05, 0.035), 0.035, { bevel: 0.006, curveSegments: 12 }),
    M.darkMetal({ color: 0x4a5058, roughness: 0.3 }), LENS_X, LENS_Y, 0.772, 'sensor-die-frame');
  addMesh(g, new THREE.PlaneGeometry(1.02, 0.84), new THREE.MeshStandardMaterial({
    map: texSensorDie(), roughness: 0.22, metalness: 0.45, color: 0xffffff,
  }), LENS_X, LENS_Y, 0.782, 'sensor-die');

  /* lens mount bracket */
  const bracket = cyl(1.26, 1.26, 0.12, 40, true);
  bracket.rotateX(Math.PI / 2);
  addMesh(g, bracket, M.darkMetal({ color: 0x33383f }), LENS_X, LENS_Y, 0.79, 'sensor-mount-ring');

  /* FPC connector + harness towards mainboard */
  addMesh(g, rbox(0.46, 0.22, 0.12, 0.03, 1), M.plastic({ color: 0x101216 }), LENS_X, -0.28, 0.66, 'sensor-fpc-connector');
  const fpc = M.kapton({ color: 0xc98f2f });
  addMesh(g, rbox(0.38, 0.52, 0.04, 0.015, 1), fpc, LENS_X, -0.55, 0.66, 'sensor-fpc-a');
  addMesh(g, rbox(0.38, 0.04, 1.02, 0.015, 1), fpc.clone(), LENS_X, -0.8, 0.125, 'sensor-fpc-b');

  /* passives on the sensor board */
  const capGeo = cyl(0.05, 0.05, 0.1, 8);
  capGeo.rotateX(Math.PI / 2);
  addInstanced(g, capGeo, M.darkMetal({ color: 0x6b5b45, roughness: 0.55, metalness: 0.3 }), [
    [-2.35, 1.18, 0.69], [-2.1, 1.18, 0.69], [-0.85, 1.18, 0.69], [-0.72, 1.18, 0.69],
    [-2.35, -0.15, 0.69], [-0.82, -0.15, 0.69],
  ], 'sensor-caps');

  setAnchor(g, LENS_X, LENS_Y, 0.86);
}

/* ---------------------------------------------------------------------------
   05 — MAINBOARD: large green PCB with artwork, SoC / DRAM / PMIC, shield
   cans, microSD cage, passives, board connectors and FPC harnesses.
   ------------------------------------------------------------------------- */
function buildMainboard(g) {
  const bx = -1.05;
  const by = -0.1;
  const bz = -0.45;

  /* substrate */
  addMesh(g, plateGeo(rrShape(4.15, 3.5, 0.16), 0.1, { bevel: 0.01, curveSegments: 14 }),
    M.plastic({ color: 0x0b3a21, roughness: 0.55, metalness: 0.12 }), bx, by, bz, 'mainboard-substrate');

  /* front / back artwork */
  addMesh(g, new THREE.PlaneGeometry(4.05, 3.4), M.plastic({
    map: texMainboard(), color: 0xffffff, roughness: 0.58, metalness: 0.1,
  }), bx, by, bz + 0.055, 'mainboard-art-front');
  const backArt = addMesh(g, new THREE.PlaneGeometry(4.05, 3.4), M.plastic({
    map: texMainboard(), color: 0xffffff, roughness: 0.58, metalness: 0.1,
  }), bx, by, bz - 0.055, 'mainboard-art-back');
  backArt.rotation.y = Math.PI;
  backArt.rotation.z = Math.PI;

  /* DJI processing SoC + label */
  addMesh(g, rbox(1.02, 1.02, 0.14, 0.05, 2), M.plastic({ color: 0x0b0c0e, roughness: 0.42, metalness: 0.3 }),
    -2.35, 0.35, -0.33, 'soc');
  addMesh(g, new THREE.PlaneGeometry(0.82, 0.82), M.plastic({
    map: texChipLabel('DJI', 'OA4-SOC'), color: 0xffffff, roughness: 0.4,
  }), -2.35, 0.35, -0.257, 'soc-label');

  /* LPDDR4X memory */
  addMesh(g, rbox(0.82, 0.66, 0.12, 0.04, 2), M.plastic({ color: 0x0d0e11, roughness: 0.42, metalness: 0.3 }),
    -1.05, 0.35, -0.34, 'dram');
  addMesh(g, new THREE.PlaneGeometry(0.66, 0.5), M.plastic({
    map: texChipLabel('LPDDR4X', '8Gb'), color: 0xffffff, roughness: 0.4,
  }), -1.05, 0.35, -0.279, 'dram-label');

  /* power management IC */
  addMesh(g, rbox(0.62, 0.5, 0.1, 0.03, 2), M.plastic({ color: 0x101114, roughness: 0.45, metalness: 0.3 }),
    -2.75, -0.65, -0.35, 'pmic');

  /* metal shield cans */
  addMesh(g, rbox(1.25, 0.98, 0.24, 0.04, 2), M.metal({ color: 0xa7aeb7, roughness: 0.36, metalness: 0.92 }),
    -0.15, -0.75, -0.28, 'shield-a');
  addMesh(g, rbox(0.95, 0.78, 0.2, 0.04, 2), M.metal({ color: 0x9aa1aa, roughness: 0.4, metalness: 0.9 }),
    0.35, 0.55, -0.3, 'shield-b');

  /* microSD cage */
  addMesh(g, rbox(0.9, 0.72, 0.16, 0.03, 2), M.darkMetal({ color: 0x8b939c, roughness: 0.34, metalness: 0.9 }),
    0.55, -0.45, -0.32, 'sd-cage');
  addMesh(g, rbox(0.06, 0.2, 0.5, 0.015, 1), M.plastic({ color: 0x050607 }), 1.03, -0.45, -0.32, 'sd-slot');

  /* board-to-board connectors */
  for (let i = 0; i < 2; i++) {
    addMesh(g, rbox(0.42, 0.18, 0.12, 0.03, 1), M.plastic({ color: 0x0e0f12, roughness: 0.5 }),
      i === 0 ? 0.6 : -0.6, i === 0 ? 1.25 : 1.3, -0.34, 'b2b-connector');
  }

  /* crystal */
  addMesh(g, rbox(0.34, 0.22, 0.08, 0.02, 1), M.metal({ color: 0xb0b7c0, roughness: 0.22, metalness: 0.95 }),
    -0.65, -0.85, -0.35, 'crystal');

  /* battery connector + wires */
  addMesh(g, rbox(0.44, 0.26, 0.14, 0.03, 1), M.plastic({ color: 0x14161a, roughness: 0.5 }),
    0.95, -1.05, -0.33, 'battery-connector');
  const wireRed = cyl(0.032, 0.032, 0.34, 8);
  wireRed.rotateZ(Math.PI / 2.6);
  addMesh(g, wireRed, M.plastic({ color: 0x8f1b16, roughness: 0.6 }), 1.22, -1.02, -0.33, 'battery-wire-red');
  const wireBlack = cyl(0.032, 0.032, 0.34, 8);
  wireBlack.rotateZ(Math.PI / 2.6);
  addMesh(g, wireBlack, M.plastic({ color: 0x0c0d0f, roughness: 0.6 }), 1.24, -1.1, -0.33, 'battery-wire-black');

  /* passives */
  const capGeo = cyl(0.055, 0.055, 0.13, 8);
  capGeo.rotateX(Math.PI / 2);
  const caps = [];
  const capRnd = [
    [-2.9, 1.15], [-2.72, 1.15], [-1.9, 1.15], [-1.72, 1.15], [-0.35, 1.15],
    [0.15, 1.15], [0.85, 0.28], [0.85, 0.12], [-2.15, -0.18], [0.72, -1.15],
    [-2.9, 0.9], [-1.9, 0.9], [-0.35, 0.9], [-2.8, 0.05], [-0.15, 0.05],
    [0.3, -1.25], [0.9, -1.1], [-1.6, -1.2],
  ];
  for (const [x, y] of capRnd) caps.push([bx + x + 1.05, by + y + 0.1, bz + 0.115]);
  addInstanced(g, capGeo, M.darkMetal({ color: 0x6d5a44, roughness: 0.5, metalness: 0.35 }), caps, 'caps');

  const resGeo = new THREE.BoxGeometry(0.09, 0.05, 0.04);
  const resistors = [];
  const resRnd = [
    [-2.55, 1.0], [-2.3, 1.0], [-2.05, 1.0], [-1.45, 1.0], [-1.2, 1.0],
    [-0.95, 1.0], [-0.7, 1.0], [-0.1, 0.98], [0.15, 0.98], [0.4, 0.98],
    [-2.55, -1.2], [-2.3, -1.2], [-1.05, -1.2], [-0.8, -1.2], [-0.2, -0.5],
    [0.9, 0.0], [0.9, 1.25], [-1.85, -1.2],
  ];
  for (const [x, y] of resRnd) resistors.push([bx + x + 1.05, by + y + 0.1, bz + 0.115]);
  addInstanced(g, resGeo, M.plastic({ color: 0x1a1a1e, roughness: 0.55 }), resistors, 'resistors');

  /* board screws + standoffs */
  const screwGeo = cyl(0.06, 0.06, 0.02, 10);
  screwGeo.rotateX(Math.PI / 2);
  addInstanced(g, screwGeo, M.metal({ color: 0xc7ccd2, roughness: 0.28 }), [
    [bx - 1.85, by + 1.5, bz + 0.06], [bx + 1.85, by + 1.5, bz + 0.06],
    [bx - 1.85, by - 1.55, bz + 0.06], [bx + 1.85, by - 1.55, bz + 0.06],
  ], 'board-screws');

  const standoffGeo = cyl(0.085, 0.085, 0.16, 10);
  standoffGeo.rotateX(Math.PI / 2);
  addInstanced(g, standoffGeo, M.copper({ color: 0x9c7a3a, roughness: 0.4, metalness: 0.75 }), [
    [bx - 1.85, by + 1.5, bz - 0.13], [bx + 1.85, by + 1.5, bz - 0.13],
    [bx - 1.85, by - 1.55, bz - 0.13], [bx + 1.85, by - 1.55, bz - 0.13],
  ], 'board-standoffs');

  /* harness to the sensor */
  const fpc = M.kapton({ color: 0xcd8a2c });
  addMesh(g, rbox(0.4, 0.05, 0.92, 0.015, 1), fpc, -1.55, 0.15, 0.02, 'mb-sensor-fpc');
  addMesh(g, rbox(0.44, 0.14, 0.1, 0.02, 1), M.plastic({ color: 0x121317 }), -1.55, 0.15, 0.48, 'mb-sensor-connector');

  /* harness to the rear display */
  addMesh(g, rbox(0.5, 0.05, 0.44, 0.015, 1), fpc.clone(), 0.3, -1.25, -0.7, 'mb-rear-fpc');
  addMesh(g, rbox(0.52, 0.14, 0.1, 0.02, 1), M.plastic({ color: 0x121317 }), 0.3, -1.25, -0.5, 'mb-rear-connector');
  addMesh(g, rbox(0.5, 0.14, 0.1, 0.02, 1), M.plastic({ color: 0x121317 }), 0.3, -1.25, -0.91, 'mb-rear-connector-2');

  setAnchor(g, -1.05, 0.2, -0.24);
}

/* ---------------------------------------------------------------------------
   06 — REAR DISPLAY: 2.25" landscape panel, bezel, back cover, inner frame,
   ribbon harness and status LED.
   ------------------------------------------------------------------------- */
function buildRearDisplay(g) {
  /* back cover */
  addMesh(g, plateGeo(rrShape(BODY_W, BODY_H, BODY_R), 0.16, { bevel: 0.018, curveSegments: 22 }),
    M.body({ color: 0x0e1013, roughness: 0.46, metalness: 0.26, clearcoat: 0.4 }),
    0, 0, -1.62, 'rear-cover');

  /* inner support frame */
  addMesh(g, plateGeo(frameShape(5.9, 3.76, 5.0, 2.96, 0.4, 0.3), 0.12, { bevel: 0.01, curveSegments: 16 }),
    M.darkMetal({ color: 0x2f343a, roughness: 0.42 }), 0, 0, -1.47, 'rear-inner-frame');

  /* display panel (faces -Z) */
  const panel = addMesh(g, new THREE.PlaneGeometry(4.98, 2.82), M.screen(texRearScreen()), 0, 0, -1.712, 'rear-lcd');
  panel.rotation.y = Math.PI;

  /* outer bezel */
  addMesh(g, plateGeo(frameShape(5.62, 3.42, 5.04, 2.88, 0.36, 0.3), 0.09, { bevel: 0.01, curveSegments: 18 }),
    M.body({ color: 0x191b1f, roughness: 0.26, metalness: 0.34, clearcoat: 1, clearcoatRoughness: 0.12 }),
    0, 0, -1.752, 'rear-bezel');

  /* protective glass */
  const glass = addMesh(g, new THREE.PlaneGeometry(5.0, 2.84), M.glass({ color: 0x9fd8ff, opacity: 0.13 }), 0, 0, -1.762, 'rear-glass');
  glass.rotation.y = Math.PI;

  /* bezel screws */
  const screwGeo = cyl(0.055, 0.055, 0.02, 10);
  screwGeo.rotateX(Math.PI / 2);
  addInstanced(g, screwGeo, M.darkMetal({ color: 0x2b2f35, roughness: 0.3 }), [
    [-2.66, 1.58, -1.79], [2.66, 1.58, -1.79], [-2.66, -1.58, -1.79], [2.66, -1.58, -1.79],
  ], 'rear-screws');

  /* status LED */
  const ledGeo = cyl(0.055, 0.055, 0.02, 12);
  ledGeo.rotateX(Math.PI / 2);
  addMesh(g, ledGeo, new THREE.MeshStandardMaterial({
    color: 0x3a0a08, emissive: new THREE.Color(0xff3b30), emissiveIntensity: 1.4, roughness: 0.4,
  }), 2.42, 1.86, -1.706, 'rear-led');

  /* ribbon to mainboard */
  const fpc = M.kapton({ color: 0xc98a2c });
  addMesh(g, rbox(0.5, 0.05, 0.62, 0.015, 1), fpc, 0.3, -1.25, -1.21, 'rear-fpc');
  addMesh(g, rbox(0.54, 0.16, 0.1, 0.02, 1), M.plastic({ color: 0x121317 }), 0.3, -1.25, -1.5, 'rear-fpc-connector');

  setAnchor(g, 0, 0, -1.8);
}

/* ---------------------------------------------------------------------------
   07 — BATTERY: 1770 mAh LiPo pack with printed label, terminals, latch.
   ------------------------------------------------------------------------- */
function buildBattery(g) {
  /* cell */
  addMesh(g, rbox(1.8, 2.8, 3.0, 0.14, 3), M.plastic({
    color: 0x0f1114, roughness: 0.58, metalness: 0.14,
  }), 1.95, -0.35, 0.0, 'battery-cell');

  /* top cap */
  addMesh(g, rbox(1.7, 0.16, 2.88, 0.06, 2), M.plastic({ color: 0x141619, roughness: 0.5 }), 1.95, 1.12, 0.0, 'battery-top');

  /* printed label facing the side door (+X) */
  const label = addMesh(g, new THREE.PlaneGeometry(2.4, 2.55), new THREE.MeshStandardMaterial({
    map: texBatteryLabel(), roughness: 0.52, metalness: 0.1, color: 0xffffff,
  }), 2.855, -0.35, 0.0, 'battery-label');
  label.rotation.y = Math.PI / 2;

  /* gold terminals */
  const padGeo = new THREE.BoxGeometry(0.18, 0.035, 0.34);
  addInstanced(g, padGeo, M.metal({ color: 0xd8b45a, roughness: 0.24, metalness: 0.95 }), [
    [1.62, 1.205, 0.62], [1.96, 1.205, 0.62], [2.3, 1.205, 0.62],
  ], 'battery-terminals');

  /* connector housing + pigtail */
  addMesh(g, rbox(0.4, 0.22, 0.5, 0.03, 1), M.plastic({ color: 0x101216 }), 1.45, 1.12, 0.15, 'battery-connector');
  const pigtail = cyl(0.03, 0.03, 0.3, 8);
  pigtail.rotateZ(Math.PI / 2.2);
  addMesh(g, pigtail, M.plastic({ color: 0x8f1b16, roughness: 0.6 }), 1.3, 1.25, 0.15, 'battery-wire-a');
  const pigtail2 = cyl(0.03, 0.03, 0.3, 8);
  pigtail2.rotateZ(Math.PI / 2.2);
  addMesh(g, pigtail2, M.plastic({ color: 0x0c0d0f, roughness: 0.6 }), 1.3, 1.19, 0.15, 'battery-wire-b');

  /* latch notch */
  addMesh(g, rbox(0.16, 0.32, 0.5, 0.04, 1), M.plastic({ color: 0x1a1c20, roughness: 0.45 }), 2.86, 0.82, 0.0, 'battery-latch');

  /* small grip tab at the bottom */
  addMesh(g, rbox(0.6, 0.04, 0.36, 0.02, 1), M.plastic({ color: 0x1d2024, roughness: 0.6 }), 2.86, -1.72, 0.35, 'battery-tab');

  setAnchor(g, 2.9, 0.3, 0.5);
}

/* ---------------------------------------------------------------------------
   08 — RECORD BUTTON: seat, red locating ring, silicone cap, REC print.
   ------------------------------------------------------------------------- */
function buildRecordButton(g) {
  /* seat recessed into the top casing */
  addMesh(g, cyl(0.5, 0.5, 0.12, 32), M.rubber({ color: 0x0b0c0e, roughness: 0.88 }), 1.35, 2.17, 0.4, 'record-seat');
  const sealGeo = torus(0.46, 0.024, 6, 32);
  sealGeo.rotateX(Math.PI / 2);
  addMesh(g, sealGeo, M.rubber({ color: 0x060708, roughness: 0.9 }), 1.35, 2.225, 0.4, 'record-seal');
  const ringGeo = torus(0.34, 0.062, 10, 40);
  ringGeo.rotateX(Math.PI / 2);
  addMesh(g, ringGeo, new THREE.MeshStandardMaterial({
    color: 0xd0121c, roughness: 0.34, metalness: 0.35,
    emissive: new THREE.Color(0x3d0206), emissiveIntensity: 0.9,
  }), 1.35, 2.245, 0.4, 'record-ring');

  /* concave silicone cap */
  const profile = [
    new THREE.Vector2(0.295, 0),
    new THREE.Vector2(0.295, 0.055),
    new THREE.Vector2(0.28, 0.1),
    new THREE.Vector2(0.22, 0.135),
    new THREE.Vector2(0.12, 0.152),
    new THREE.Vector2(0, 0.155),
  ];
  const cap = new THREE.LatheGeometry(profile, 40);
  addMesh(g, cap, M.plastic({ color: 0x1a1c20, roughness: 0.52, metalness: 0.15 }), 1.35, 2.245, 0.4, 'record-cap');

  addDecal(g, texRecIcon(), 0.32, 0.32, 1.35, 2.402, 0.4, -Math.PI / 2, 0, 0, 0.72);

  setAnchor(g, 1.35, 2.45, 0.4);
}

/* ---------------------------------------------------------------------------
   09 — SIDE I/O COVER: full-height right side door, seal, latch, hinge and
   the USB-C / microSD I/O module hidden behind it.
   ------------------------------------------------------------------------- */
function buildSideCover(g) {
  /* right side door — it is the whole right surface of the camera */
  addMesh(g, plateGeo(rrShape(3.26, 4.34, 0.7), 0.16, { axis: 'x', bevel: 0.018, curveSegments: 20 }),
    M.body({ color: 0x0d0f12, roughness: 0.4, metalness: 0.3, clearcoat: 0.65 }),
    3.48, 0, 0.02, 'side-door');

  /* rubber seal on the inside face */
  addMesh(g, plateGeo(frameShape(3.04, 4.1, 2.78, 3.84, 0.6, 0.5), 0.04, { axis: 'x', bevel: 0.008, curveSegments: 14 }),
    M.rubber({ color: 0x08090b, roughness: 0.92 }), 3.392, 0, 0.02, 'side-door-seal');

  /* recessed perimeter groove on the outer door face */
  addMesh(g, plateGeo(frameShape(2.98, 4.06, 2.9, 3.98, 0.62, 0.58), 0.008, { axis: 'x', bevel: 0, curveSegments: 16 }),
    M.matte({ color: 0x050607, roughness: 0.9 }), 3.558, 0, 0.02, 'side-door-groove');

  /* latch slider + ridges */
  addMesh(g, rbox(0.07, 0.34, 0.52, 0.02, 1), M.darkMetal({ color: 0x565c64, roughness: 0.34, metalness: 0.85 }),
    3.573, -1.6, 0.52, 'side-latch');
  const ridgeGeo = new THREE.BoxGeometry(0.035, 0.2, 0.045);
  addInstanced(g, ridgeGeo, M.darkMetal({ color: 0x767d86, roughness: 0.3 }), [
    [3.6, -1.6, 0.38], [3.6, -1.6, 0.5], [3.6, -1.6, 0.62],
  ], 'side-latch-ridges');

  /* hinges on the rear edge */
  const hingeGeo = cyl(0.055, 0.055, 0.46, 12);
  addInstanced(g, hingeGeo, M.darkMetal({ color: 0x3a3f46 }), [
    [3.45, 1.08, -1.52], [3.45, -1.08, -1.52],
  ], 'side-hinges');

  /* I/O module block behind the door */
  addMesh(g, rbox(0.36, 2.6, 2.5, 0.08, 2), M.plastic({ color: 0x0a0b0d, roughness: 0.62 }),
    3.17, 0.05, 0.02, 'io-bay');

  /* USB-C receptacle */
  addMesh(g, rbox(0.18, 0.28, 0.9, 0.06, 2), M.darkMetal({ color: 0x7e868f, roughness: 0.32, metalness: 0.92 }),
    3.36, 0.58, 0.42, 'usb-c-shell');
  addMesh(g, rbox(0.12, 0.14, 0.66, 0.03, 1), M.plastic({ color: 0x030405, roughness: 0.8 }),
    3.33, 0.58, 0.42, 'usb-c-inner');

  /* microSD slot */
  addMesh(g, rbox(0.14, 0.22, 0.82, 0.04, 1), M.darkMetal({ color: 0x8b939c, roughness: 0.35, metalness: 0.9 }),
    3.35, -0.38, 0.3, 'sd-slot-frame');
  addMesh(g, rbox(0.08, 0.1, 0.62, 0.02, 1), M.plastic({ color: 0x030405, roughness: 0.8 }),
    3.3, -0.38, 0.3, 'sd-slot-inner');

  /* printed icons */
  addDecal(g, texUsbIcon(), 0.32, 0.32, 3.562, 0.58, 0.42, 0, Math.PI / 2, 0, 0.6);

  setAnchor(g, 3.62, 1.0, 0.6);
}

/* ---------------------------------------------------------------------------
   10 — MAGNETIC MOUNT: aluminium quick-release plate, magnet array, folding
   claws, lock lever and printed marking.
   ------------------------------------------------------------------------- */
function buildMount(g) {
  /* interface plate against the body */
  addMesh(g, rbox(4.75, 0.12, 2.98, 0.05, 2), M.darkMetal({ color: 0x252a30, roughness: 0.42, metalness: 0.82 }),
    0, -2.2, 0.02, 'mount-top-plate');

  /* aluminium base */
  addMesh(g, rbox(4.45, 0.4, 2.8, 0.15, 3), M.metal({ color: 0x585e66, roughness: 0.4, metalness: 0.9 }),
    0, -2.45, 0.02, 'mount-base');

  /* recessed magnet carrier on the bottom face */
  addMesh(g, cyl(0.78, 0.78, 0.04, 30), M.darkMetal({ color: 0x191c20, roughness: 0.5, metalness: 0.6 }),
    0, -2.658, 0.02, 'mount-core');
  const coreRing = torus(0.96, 0.04, 8, 32);
  coreRing.rotateX(Math.PI / 2);
  addMesh(g, coreRing, M.metal({ color: 0x7c838c, roughness: 0.34, metalness: 0.92 }), 0, -2.66, 0.02, 'mount-core-ring');

  /* magnet array on the bottom face */
  const magnetGeo = cyl(0.33, 0.33, 0.07, 20);
  addInstanced(g, magnetGeo, M.darkMetal({ color: 0x1b1e22, roughness: 0.42, metalness: 0.95 }), [
    [-1.2, -2.68, -0.85], [0, -2.68, -0.85], [1.2, -2.68, -0.85],
    [-1.2, -2.68, 0.85], [0, -2.68, 0.85], [1.2, -2.68, 0.85],
  ], 'mount-magnets');

  /* folding claws front / rear */
  const clawMat = M.darkMetal({ color: 0x474d55, roughness: 0.34, metalness: 0.9 });
  addMesh(g, rbox(1.6, 0.16, 0.26, 0.05, 2), clawMat, 0, -2.62, 1.32, 'claw-front');
  addMesh(g, rbox(1.6, 0.16, 0.26, 0.05, 2), clawMat.clone(), 0, -2.62, -1.28, 'claw-rear');

  /* lock lever */
  addMesh(g, rbox(1.25, 0.18, 0.26, 0.06, 2), M.darkMetal({ color: 0x5b626b, roughness: 0.32, metalness: 0.88 }),
    0, -2.44, 1.46, 'lock-lever');
  const leverRidge = new THREE.BoxGeometry(0.06, 0.12, 0.03);
  addInstanced(g, leverRidge, M.metal({ color: 0x9aa3ad, roughness: 0.3 }), [
    [-0.4, -2.44, 1.6], [0, -2.44, 1.6], [0.4, -2.44, 1.6],
  ], 'lever-ridges');

  /* top plate screws */
  const screwGeo = cyl(0.06, 0.06, 0.02, 10);
  addInstanced(g, screwGeo, M.metal({ color: 0x8b929a, roughness: 0.3 }), [
    [-1.9, -2.135, 1.24], [1.9, -2.135, 1.24], [-1.9, -2.135, -1.2], [1.9, -2.135, -1.2],
  ], 'mount-screws');

  /* printed marking on the front edge of the base */
  addDecal(g, texMountText(), 2.5, 0.31, 0, -2.46, 1.432, 0, 0, 0, 0.6);

  setAnchor(g, 0, -2.72, 0.8);
}

/* ============================================================================
   7. Assembly
   ========================================================================== */

const PART_POSITIONS = {
  'front-shell': [0, 0, 1.55],
  lens: [-1.55, 0.5, 1.75],
  'front-screen': [2.0, 0.25, 1.7],
  sensor: [-1.55, 0.5, 0.65],
  mainboard: [0, -0.1, -0.45],
  'rear-screen': [0, 0, -1.72],
  battery: [1.95, -0.35, -0.1],
  'record-button': [1.35, 2.28, 0.4],
  'side-cover': [3.58, 0, -0.2],
  mount: [0, -2.36, 0],
};

const PART_BUILDERS = {
  'front-shell': buildFrontShell,
  lens: buildLens,
  'front-screen': buildFrontScreen,
  sensor: buildSensor,
  mainboard: buildMainboard,
  'rear-screen': buildRearDisplay,
  battery: buildBattery,
  'record-button': buildRecordButton,
  'side-cover': buildSideCover,
  mount: buildMount,
};

/** Tag every mesh with its part id and collect the meshes for raycasting. */
function finalizePart(group, pickables) {
  const id = group.userData.partId;
  group.traverse((obj) => {
    if (obj.isMesh) {
      obj.userData.partId = id;
      obj.castShadow = false;
      obj.receiveShadow = false;
      pickables.push(obj);
    }
  });
}

export function createCameraModel() {
  const root = new THREE.Group();
  root.name = 'OsmoAction4';

  /** @type {Map<string, THREE.Group>} */
  const parts = new Map();
  const pickables = [];

  const order = [
    'front-shell',
    'lens',
    'front-screen',
    'sensor',
    'mainboard',
    'rear-screen',
    'battery',
    'record-button',
    'side-cover',
    'mount',
  ];

  for (const id of order) {
    const group = new THREE.Group();
    group.name = id;
    group.userData.partId = id;

    const pos = PART_POSITIONS[id];
    group.position.set(pos[0], pos[1], pos[2]);

    PART_BUILDERS[id](group);

    if (!group.userData.labelAnchor) {
      group.userData.labelAnchor = new THREE.Vector3(0, 0, 0);
    }

    finalizePart(group, pickables);
    parts.set(id, group);
    root.add(group);
  }

  return { root, parts, pickables };
}
