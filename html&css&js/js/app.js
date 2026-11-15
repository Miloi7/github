/* ==========================================================================
   REFBENCH · app.js
   状态机 / 路由 / 主题 / 键盘 / 抽屉 / 搜索 / 筛选 / toast
   ========================================================================== */
(function (global) {
  'use strict';

  var C = global.CSData;
  var S = global.CSSearch;
  var V = global.CSView;
  var R = global.CSRouter;
  var P = global.CSPreview;
  var doc = document;

  var STORE = { theme: 'rb-theme', view: 'rb-view', groups: 'rb-groups', recent: 'rb-recent' };
  var reduceMotion = !!(global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var themeMedia = global.matchMedia ? global.matchMedia('(prefers-color-scheme: light)') : null;

  var state = {
    route: null,
    mode: 'browse',
    lang: 'all',
    cat: '',
    q: '',
    filters: { status: 'all', heat: 'all', tags: [] },
    sort: 'recommended',
    view: 'row',
    list: [],
    totalMatches: 0,
    truncated: false,
    renderedKey: '',
    lastListHash: '#/all',
    cursor: -1,
    groups: { css: true },
    recent: [],
    catsCollapsed: false,
    suggestions: [],
    suggestTotal: 0,
    suggestActive: -1,
    activeSearchInput: null,
    drawer: null,
    drawerReturnFocus: null,
    popover: null,
    sheetOpen: false,
    sheetCount: 0,
    pending: null,
    helpOpen: false,
    helpReturnFocus: null,
    sheetReturnFocus: null,
    mobileSearchOpen: false,
    mobileReturnFocus: null,
    themeMode: 'system',
    theme: 'dark'
  };

  var el = {};
  var searchTimer = null;
  var sectionObserver = null;
  var lastSectionTarget = null;
  var pageLocked = false;
  var lockPad = '';
  var lastScrollY = 0;
  var scrollTicking = false;
  var gPressedAt = 0;
  var totopVisible = false;

  /* ── 工具 ─────────────────────────────────────────────────── */
  function $(id) { return doc.getElementById(id); }
  function $$(selector, root) { return Array.prototype.slice.call((root || doc).querySelectorAll(selector)); }
  function readJSON(key, fallback) {
    try {
      var raw = global.localStorage.getItem(key);
      return raw == null ? fallback : JSON.parse(raw);
    } catch (err) { return fallback; }
  }
  function writeJSON(key, value) {
    try { global.localStorage.setItem(key, JSON.stringify(value)); } catch (err) { /* 私密模式忽略 */ }
  }
  function readRaw(key, fallback) {
    try { var raw = global.localStorage.getItem(key); return raw == null ? fallback : raw; } catch (err) { return fallback; }
  }
  function writeRaw(key, value) {
    try { global.localStorage.setItem(key, value); } catch (err) { /* ignore */ }
  }
  function isMac() {
    return /Mac|iPhone|iPad|iPod/.test(global.navigator.platform || '') ||
      /Mac OS X/.test(global.navigator.userAgent || '');
  }
  function focusSearch() {
    if (global.innerWidth < 768) { openMobileSearch(state.q); return; }
    var input = $('search-top');
    if (input) { input.focus(); input.select(); }
  }
  function focusSearchFallback() {
    var input = $('search-top');
    if (input && input.offsetParent !== null) { input.focus(); return; }
    var main = $('main');
    if (main) main.focus({ preventScroll: true });
  }
  function announce(text) {
    var status = $('copyStatus');
    if (!status) return;
    status.textContent = '';
    global.setTimeout(function () { status.textContent = text; }, 30);
  }

  /* ── 主题 ─────────────────────────────────────────────────── */
  function applyTheme(mode, announceChange) {
    var resolved = mode === 'system'
      ? (themeMedia && themeMedia.matches ? 'light' : 'dark')
      : mode;
    state.themeMode = mode;
    state.theme = resolved;
    doc.documentElement.setAttribute('data-theme', resolved);
    doc.documentElement.setAttribute('data-theme-mode', mode);
    writeRaw(STORE.theme, mode);

    var btn = $('theme-btn');
    if (btn) {
      var use = btn.querySelector('use');
      if (use) use.setAttribute('href', '#i-' + (mode === 'system' ? 'monitor' : mode === 'light' ? 'sun' : 'moon'));
      var label = mode === 'system' ? '跟随系统' : mode === 'light' ? '浅色' : '深色';
      btn.setAttribute('aria-label', '主题：' + label + '（点击切换）');
      btn.setAttribute('title', '主题：' + label);
    }
    if (P && P.syncTheme) P.syncTheme();
    if (announceChange) toast('主题：' + (mode === 'system' ? '跟随系统' : mode === 'light' ? '浅色' : '深色'));
  }
  function cycleTheme() {
    var next = state.themeMode === 'system' ? 'light' : state.themeMode === 'light' ? 'dark' : 'system';
    applyTheme(next, true);
  }

  /* ── KBD / 计数 ───────────────────────────────────────────── */
  function updateKbd() {
    var hint = isMac() ? '⌘K' : 'Ctrl K';
    $$('[data-kbd]').forEach(function (node) { node.textContent = hint; });
    var top = $('search-top');
    if (top) top.placeholder = '搜索 ' + C.total + ' 条 · ' + hint;
    var mobile = $('search-mobile');
    if (mobile) mobile.placeholder = '搜索属性名 / 中文名 / 标签 / 关键字…';
  }
  function updateChrome() {
    $$('[data-total]').forEach(function (node) { node.textContent = C.total; });
    updateSearchChrome();
  }
  function updateSearchChrome() {
    $$('.rb-search').forEach(function (host) {
      var input = host.querySelector('[data-search-input]');
      if (!input) return;
      var has = !!input.value;
      var kbd = host.querySelector('[data-kbd]');
      var clear = host.querySelector('[data-act="clear-search"]');
      if (kbd) kbd.hidden = has;
      if (clear) clear.hidden = !has;
    });
  }
  function setSearchValue(value) {
    $$('[data-search-input]').forEach(function (input) {
      if (input.value !== value) input.value = value;
    });
    updateSearchChrome();
  }
  function syncSearchInputs(value) { setSearchValue(value); }

  /* ── 数据 / 列表计算 ─────────────────────────────────────── */
  function filterEntries(list, filters) {
    var status = filters.status;
    var heat = filters.heat || 'all';
    var tags = filters.tags;
    if (status === 'all' && heat === 'all' && (!tags || !tags.length)) return list;
    return list.filter(function (entry) {
      if (status !== 'all') {
        if (status === 'obsolete') {
          if (entry._norm !== 'obsolete' && entry._norm !== 'deprecated') return false;
        } else if (entry._norm !== status) return false;
      }
      if (heat !== 'all' && entry._heat !== heat) return false;
      if (tags && tags.length) {
        var hit = false;
        for (var i = 0; i < tags.length; i++) {
          if ((entry.tags || []).indexOf(tags[i]) >= 0) { hit = true; break; }
        }
        if (!hit) return false;
      }
      return true;
    });
  }

  function baseEntries() {
    if (state.mode === 'search' || state.lang === 'all') return C.all();
    if (state.cat) return C.catEntries(state.lang, state.cat);
    return C.langEntries(state.lang);
  }

  function computeList() {
    var base = baseEntries();
    var q = (state.q || '').trim();
    var list;
    if (q) {
      list = S.search(q, base);
      if (state.sort !== 'recommended') list = C.sortList(list, state.sort);
    } else {
      list = C.sortList(base, state.sort);
    }
    list = filterEntries(list, state.filters);
    state.totalMatches = list.length;
    state.truncated = !!(q && list.length > 500);
    state.list = q ? list.slice(0, 500) : list;
    if (state.cursor >= state.list.length) state.cursor = -1;
  }

  function renderedKey() {
    if (state.mode === 'portal') return 'portal';
    if (state.mode === 'search') return 'search|' + state.q;
    return 'browse|' + state.lang + '|' + state.cat;
  }

  function vmState(extra) {
    var vm = {
      lang: state.lang,
      cat: state.cat,
      q: state.q,
      mode: state.mode,
      filters: state.filters,
      sort: state.sort,
      view: state.view,
      groups: state.groups,
      list: state.list,
      truncated: state.truncated,
      catsCollapsed: state.catsCollapsed,
      recent: state.recent
    };
    if (extra) Object.keys(extra).forEach(function (k) { vm[k] = extra[k]; });
    return vm;
  }

  function syncBodyClasses() {
    var hasFilter = state.mode !== 'portal' &&
      (state.filters.status !== 'all' || state.filters.heat !== 'all' || state.filters.tags.length > 0);
    doc.body.classList.toggle('has-filter', hasFilter);
    if (state.mode === 'portal') doc.body.classList.remove('is-toolbar-hidden');
  }

  function syncToolbar() {
    var statusBtn = doc.querySelector('[data-pop="status"]');
    var heatBtn = doc.querySelector('[data-pop="heat"]');
    var tagBtn = doc.querySelector('[data-pop="tag"]');
    var sortBtn = doc.querySelector('[data-pop="sort"]');
    if (statusBtn) statusBtn.classList.toggle('is-on', state.filters.status !== 'all');
    if (heatBtn) heatBtn.classList.toggle('is-on', state.filters.heat !== 'all');
    if (tagBtn) tagBtn.classList.toggle('is-on', state.filters.tags.length > 0);
    if (sortBtn) sortBtn.classList.toggle('is-on', state.sort !== 'recommended');
    $$('[data-act="view"]').forEach(function (btn) {
      var on = btn.getAttribute('data-view') === state.view;
      btn.classList.toggle('is-on', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function paintBrowse(opts) {
    computeList();
    state.renderedKey = renderedKey();
    el.view.innerHTML = V.renderBrowse(vmState());
    syncBodyClasses();
    updateChrome();
    if (!opts || opts.scroll !== false) global.scrollTo(0, 0);
  }

  function refreshList(focusAfter) {
    computeList();
    var listEl = $('list');
    if (!listEl) { paintBrowse(); return; }
    listEl.innerHTML = V.renderListInner(vmState());
    var head = $('listhead');
    if (head) head.outerHTML = V.listHead(vmState());
    var bar = $('filterbar');
    if (bar) bar.outerHTML = V.filterbar(vmState());
    var status = $('resultStatus');
    if (status) status.textContent = state.list.length + ' 条结果';
    syncToolbar();
    syncBodyClasses();
    updateChrome();
    state.renderedKey = renderedKey();
    if (focusAfter === 'filter') {
      var chip = doc.querySelector('#filterbar .rb-chip') || doc.querySelector('[data-act="clear-filters"]');
      if (chip) chip.focus({ preventScroll: true });
      else focusSearchFallback();
    }
  }

  /* ── 路由 ─────────────────────────────────────────────────── */
  function expandGroup(lang) {
    if (!lang || lang === 'all') return;
    state.groups[lang] = true;
    writeJSON(STORE.groups, state.groups);
  }

  function applyRoute(route, opts) {
    if (!route) route = R.current();
    if (state.mobileSearchOpen) closeMobileSearch(false);
    if (state.sheetOpen) closeSheet(false);
    if (state.helpOpen) closeHelp();
    if (route.name === 'invalid') {
      toast('链接里的条目不存在，已返回全部列表', 'warn');
      if (global.location.hash === '#/all') {
        state.mode = 'browse'; state.lang = 'all'; state.cat = ''; state.q = '';
        paintBrowse();
      } else {
        R.go('#/all', true);
      }
      return;
    }

    var prev = state.route;
    state.route = route;
    var fromDetail = !!(prev && prev.name === 'detail');

    if (route.name === 'portal') {
      if (state.drawer) closeDrawer();
      closeSuggestions();
      closePopover(false);
      state.mode = 'portal';
      state.lang = 'all';
      state.cat = '';
      state.q = '';
      state.list = [];
      state.renderedKey = 'portal';
      setSearchValue('');
      el.view.innerHTML = V.renderPortal(vmState());
      syncBodyClasses();
      updateChrome();
      if (!fromDetail) global.scrollTo(0, 0);
      return;
    }

    if (route.name === 'search' || route.name === 'list') {
      if (state.drawer) closeDrawer();
      closePopover(false);
      closeSuggestions();
      if (route.name === 'search') {
        state.mode = 'search';
        state.lang = 'all';
        state.cat = '';
        state.q = route.q || '';
        state.lastListHash = route.hash || R.searchHash(state.q);
      } else {
        state.mode = 'browse';
        state.lang = route.lang;
        state.cat = route.cat || '';
        /* 从详情返回时保留浏览页里输入的即时查询 */
        state.q = fromDetail ? state.q : '';
        state.lastListHash = route.hash || R.listParent(route.lang, route.cat);
        expandGroup(route.lang);
      }
      setSearchValue(state.q);
      var key = renderedKey();
      if (fromDetail && state.renderedKey === key) {
        updateChrome();
        return;
      }
      paintBrowse({ scroll: !fromDetail });
      return;
    }

    if (route.name === 'detail') {
      var entry = route.entry;
      if (!entry) { toast('链接里的条目不存在，已返回全部列表', 'warn'); R.go('#/all', true); return; }
      closePopover(false);
      if (state.mode === 'portal') {
        /* 门户上打开建议：保留门户作为背景 */
      } else if (state.mode === 'search') {
        /* 保留搜索结果作为背景；关闭时回到当前查询 */
      } else {
        var inList = state.list && state.list.some(function (item) { return item.id === entry.id; });
        if (!inList) {
          state.mode = 'browse';
          state.lang = entry.lang;
          state.cat = route.cat || entry.cat;
          state.q = '';
          setSearchValue('');
          state.lastListHash = route.cat ? C.categoryUrl(entry.lang, route.cat) : '#/' + entry.lang;
          expandGroup(entry.lang);
          paintBrowse();
        }
      }
      openDrawer(entry, !prev);
      return;
    }
  }

  /* ── 抽屉 ─────────────────────────────────────────────────── */
  function focusSections() {
    return $$('.rb-sec', el.drawer);
  }

  function updateCodeFade(scroller) {
    var box = scroller && scroller.closest ? scroller.closest('.rb-code') : null;
    if (!box) return;
    var atEnd = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 2;
    box.classList.toggle('is-at-end', atEnd);
  }

  function syncCodeOverflow(root) {
    $$('.rb-code', root || el.drawer).forEach(function (box) {
      var scroller = box.querySelector('.rb-code__scroll');
      if (!scroller) return;
      var overflow = scroller.scrollWidth > scroller.clientWidth + 1;
      box.classList.toggle('has-overflow', overflow);
      if (!overflow) box.classList.remove('is-at-end');
      else updateCodeFade(scroller);
    });
  }

  function centerChapter(target) {
    var chip = el.drawer.querySelector('.rb-chapter[data-target="' + target + '"]');
    var scroller = chip && chip.closest ? chip.closest('.rb-chapters') : null;
    if (!chip || !scroller) return;
    var chipRect = chip.getBoundingClientRect();
    var boxRect = scroller.getBoundingClientRect();
    var left = scroller.scrollLeft + (chipRect.left - boxRect.left) - (scroller.clientWidth - chipRect.width) / 2;
    scroller.scrollTo({ left: Math.max(0, left), behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  function setActiveSection(target) {
    var links = $$('.rb-rail__link, .rb-chapter', el.drawer);
    links.forEach(function (link) {
      link.classList.toggle('is-active', link.getAttribute('data-target') === target);
    });
    if (target !== lastSectionTarget) {
      lastSectionTarget = target;
      centerChapter(target);
    }
  }

  function observeSections() {
    if (sectionObserver) { sectionObserver.disconnect(); sectionObserver = null; }
    if (!('IntersectionObserver' in global)) return;
    var scrollEl = el.drawer.querySelector('.rb-drawer__scroll');
    if (!scrollEl) return;
    var links = $$('.rb-rail__link, .rb-chapter', el.drawer);
    if (!links.length) return;
    sectionObserver = new IntersectionObserver(function (entries) {
      var visible = entries.filter(function (item) { return item.isIntersecting; })
        .sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });
      if (!visible.length) return;
      var target = 'sec-' + visible[0].target.getAttribute('data-sec');
      setActiveSection(target);
    }, { root: scrollEl, rootMargin: '0px 0px -60% 0px', threshold: 0 });
    focusSections().forEach(function (sec) { sectionObserver.observe(sec); });
  }

  function markOpenRow(id) {
    $$('.rb-row.is-open, .rb-card.is-open', el.view).forEach(function (node) { node.classList.remove('is-open'); });
    var anchors = $$('[data-id]', el.view);
    for (var i = 0; i < anchors.length; i++) {
      if (anchors[i].getAttribute('data-id') === id) {
        var row = anchors[i].closest('.rb-row');
        if (row) row.classList.add('is-open');
        else if (anchors[i].classList.contains('rb-card')) anchors[i].classList.add('is-open');
        break;
      }
    }
  }

  function renderPreview(entry) {
    var host = el.drawer.querySelector('[data-preview-host]');
    if (host) P.render(host, entry);
  }

  function openDrawer(entry, centerRow) {
    var inList = state.list && state.list.some(function (item) { return item.id === entry.id; });
    var ctxList = inList ? state.list : C.sortList(C.langEntries(entry.lang), 'recommended');
    var index = -1;
    for (var i = 0; i < ctxList.length; i++) {
      if (ctxList[i].id === entry.id) { index = i; break; }
    }
    var closeHash;
    if (state.mode === 'search' && state.q) closeHash = R.searchHash(state.q);
    else if (state.mode === 'portal') closeHash = '#/';
    else closeHash = state.lastListHash || C.langUrl(entry.lang);

    var wasOpen = !el.drawer.hidden && el.drawer.classList.contains('is-open');
    if (!wasOpen && !state.drawerReturnFocus) {
      state.drawerReturnFocus = doc.activeElement && doc.activeElement !== doc.body ? doc.activeElement : null;
    }
    state.drawer = { entry: entry, list: ctxList, index: index, closeHash: closeHash };
    lastSectionTarget = null;
    el.drawer.innerHTML = V.renderDrawer(entry, { index: index, total: ctxList.length, q: state.q });
    el.drawer.setAttribute('aria-label', entry.name + ' 详情');

    if (!wasOpen) {
      el.drawer.classList.remove('is-closing');
      el.drawer.hidden = false;
      el.scrim.hidden = false;
      global.requestAnimationFrame(function () {
        el.scrim.classList.add('is-open');
        el.drawer.classList.add('is-open');
      });
    }
    syncLock();
    renderPreview(entry);
    observeSections();
    global.requestAnimationFrame(function () { syncCodeOverflow(el.drawer); });
    global.setTimeout(function () { if (state.drawer) syncCodeOverflow(el.drawer); }, 80);
    markOpenRow(entry.id);
    if (centerRow) {
      global.requestAnimationFrame(function () {
        var anchors = $$('[data-id]', el.view);
        for (var i = 0; i < anchors.length; i++) {
          if (anchors[i].getAttribute('data-id') === entry.id) {
            anchors[i].scrollIntoView({ block: 'center' });
            break;
          }
        }
      });
    }
    global.setTimeout(function () {
      var title = $('drawer-title');
      if (title && state.drawer) title.focus({ preventScroll: true });
    }, 20);
  }

  function closeDrawer(opts) {
    if (!state.drawer) return;
    state.drawer = null;
    lastSectionTarget = null;
    el.drawer.classList.remove('is-open');
    el.drawer.classList.add('is-closing');
    el.scrim.classList.remove('is-open');
    if (sectionObserver) { sectionObserver.disconnect(); sectionObserver = null; }
    $$('.rb-row.is-open, .rb-card.is-open', el.view).forEach(function (node) { node.classList.remove('is-open'); });
    syncLock();

    var delay = reduceMotion ? 0 : 200;
    global.setTimeout(function () {
      if (state.drawer) return;
      el.drawer.hidden = true;
      el.scrim.hidden = true;
      el.drawer.classList.remove('is-closing');
      el.drawer.innerHTML = '';
    }, delay);

    if (!opts || opts.focus !== false) {
      var target = state.drawerReturnFocus;
      state.drawerReturnFocus = null;
      global.setTimeout(function () {
        if (target && target.isConnected && (target.offsetWidth || target.offsetHeight)) {
          try { target.focus({ preventScroll: true }); return; } catch (err) { /* fall through */ }
        }
        focusSearchFallback();
      }, 0);
    }
  }

  function requestCloseDrawer() {
    if (!state.drawer) return;
    var hash = state.drawer.closeHash || '#/all';
    if (global.location.hash === hash) closeDrawer();
    else R.go(hash, true);
  }

  function navigateDrawer(delta) {
    if (!state.drawer) return;
    var target = state.drawer.index + delta;
    if (target < 0 || target >= state.drawer.list.length) return;
    R.go(C.urlFor(state.drawer.list[target]));
  }

  function openMDN() {
    var entry = state.drawer && state.drawer.entry;
    if (!entry || !entry.mdn) { toast('该条目没有 MDN 链接', 'warn'); return; }
    global.open(entry.mdn, '_blank', 'noopener,noreferrer');
  }

  /* ── 剪贴板 / toast ──────────────────────────────────────── */
  function copyText(text) {
    if (global.navigator.clipboard && global.navigator.clipboard.writeText) {
      return global.navigator.clipboard.writeText(text).then(function () { return true; }, function () { return legacyCopy(text); });
    }
    return Promise.resolve(legacyCopy(text));
  }
  function legacyCopy(text) {
    var area = doc.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.top = '-1000px';
    area.style.opacity = '0';
    doc.body.appendChild(area);
    var ok = false;
    try { area.select(); ok = doc.execCommand('copy'); } catch (err) { ok = false; }
    doc.body.removeChild(area);
    return ok;
  }
  function flashCopied(button) {
    var previous = button.innerHTML;
    var previousLabel = button.getAttribute('aria-label');
    button.classList.add('is-done');
    if (button.classList.contains('rb-code__btn')) button.innerHTML = V.icons('check');
    else button.textContent = '已复制';
    button.setAttribute('aria-label', '已复制');
    global.setTimeout(function () {
      if (!button.isConnected) return;
      button.classList.remove('is-done');
      button.innerHTML = previous;
      if (previousLabel) button.setAttribute('aria-label', previousLabel);
    }, 1200);
  }
  function copyEntry(kind) {
    var entry = state.drawer && state.drawer.entry;
    if (!entry) return;
    var text = kind === 'syntax' ? entry.syntax : entry.example;
    if (!text) { toast('没有可复制的内容', 'warn'); return; }
    copyText(text).then(function (ok) {
      if (!ok) { toast('复制失败，请手动选择代码', 'error'); return; }
      announce(kind === 'syntax' ? '已复制语法' : '已复制示例代码');
      var button = el.drawer.querySelector('[data-act="copy"][data-copy="' + kind + '"]');
      if (button) flashCopied(button);
    });
  }
  function copyLink() {
    copyText(global.location.href).then(function (ok) {
      if (ok) toast('链接已复制');
      else toast('复制失败，请手动复制地址栏', 'error');
    });
  }
  function toast(message, type) {
    if (!el.toasts) return;
    var node = doc.createElement('div');
    node.className = 'rb-toast' + (type ? ' rb-toast--' + type : '');
    node.setAttribute('role', type === 'error' ? 'alert' : 'status');
    node.textContent = message;
    el.toasts.appendChild(node);
    while (el.toasts.children.length > 3) el.toasts.removeChild(el.toasts.firstChild);
    var timer;
    function dismiss() {
      node.classList.add('is-leaving');
      global.setTimeout(function () { if (node.parentNode) node.parentNode.removeChild(node); }, 140);
    }
    timer = global.setTimeout(dismiss, 2400);
    node.addEventListener('mouseenter', function () { global.clearTimeout(timer); });
    node.addEventListener('mouseleave', function () { timer = global.setTimeout(dismiss, 1600); });
  }

  /* ── 页面锁 / inert ──────────────────────────────────────── */
  function setBackgroundInert(on) {
    ['topbar', 'main', 'footer'].forEach(function (id) {
      var node = $(id);
      if (!node) return;
      if (on) { node.setAttribute('inert', ''); node.setAttribute('aria-hidden', 'true'); }
      else { node.removeAttribute('inert'); node.removeAttribute('aria-hidden'); }
    });
    var skip = doc.querySelector('.rb-skip');
    if (skip) {
      if (on) { skip.setAttribute('inert', ''); skip.setAttribute('aria-hidden', 'true'); }
      else { skip.removeAttribute('inert'); skip.removeAttribute('aria-hidden'); }
    }
  }
  function syncLock() {
    var needed = !!state.drawer || state.sheetOpen || state.helpOpen || state.mobileSearchOpen;
    if (needed === pageLocked) return;
    pageLocked = needed;
    if (needed) {
      var width = global.innerWidth - doc.documentElement.clientWidth;
      lockPad = doc.body.style.paddingRight;
      doc.body.style.overflow = 'hidden';
      if (width > 0) doc.body.style.paddingRight = width + 'px';
      setBackgroundInert(true);
    } else {
      doc.body.style.overflow = '';
      doc.body.style.paddingRight = lockPad || '';
      setBackgroundInert(false);
    }
  }
  function trapFocus(container, event) {
    var nodes = $$('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])', container)
      .filter(function (node) { return node.offsetWidth || node.offsetHeight || node.getClientRects().length; });
    if (!nodes.length) { event.preventDefault(); return; }
    var first = nodes[0];
    var last = nodes[nodes.length - 1];
    if (event.shiftKey) {
      if (doc.activeElement === first || !container.contains(doc.activeElement)) {
        event.preventDefault();
        last.focus();
      }
    } else if (doc.activeElement === last || !container.contains(doc.activeElement)) {
      event.preventDefault();
      first.focus();
    }
  }

  /* ── 搜索建议 ─────────────────────────────────────────────── */
  function renderSuggestions(input) {
    if (!input) return;
    var q = input.value.trim();
    var all = q ? S.searchDetailed(q, C.all()) : [];
    /* 强匹配优先：名称/中文/摘要可见命中，或分数在头部结果附近。
       弱匹配不挤占前 8 条，但仍可通过「查看全部」进入完整结果页。 */
    var top = all.length ? all[0].score : 0;
    var threshold = top >= 50 ? Math.max(50, top * 0.8) : top * 0.7;
    var strong = all.filter(function (item) {
      return item.score >= threshold || S.hasFieldMatch(item.entry, q);
    });
    if (!strong.length) strong = all.slice(0, 8);
    state.suggestions = strong.slice(0, 8).map(function (item) { return item.entry; });
    state.suggestTotal = all.length;
    state.suggestQuery = q;
    if (state.suggestActive >= state.suggestions.length) state.suggestActive = -1;
    el.suggest.innerHTML = V.renderSuggest({
      q: q,
      suggestions: state.suggestions,
      suggestTotal: all.length,
      suggestActive: state.suggestActive,
      recent: state.recent
    });
    el.suggest.hidden = false;
    positionSuggest(input);
    if (!el.suggest.classList.contains('is-open')) {
      global.requestAnimationFrame(function () { el.suggest.classList.add('is-open'); });
    }
    input.setAttribute('aria-expanded', 'true');
  }

  function openSuggest(input) {
    state.activeSearchInput = input;
    renderSuggestions(input);
  }

  function closeSuggestions() {
    var active = state.activeSearchInput;
    el.suggest.classList.remove('is-open');
    if (active) {
      active.setAttribute('aria-expanded', 'false');
      active.removeAttribute('aria-activedescendant');
    }
    state.suggestActive = -1;
    global.setTimeout(function () {
      if (!el.suggest.classList.contains('is-open')) el.suggest.hidden = true;
    }, 90);
  }

  function positionSuggest(input) {
    if (!input || el.suggest.hidden) return;
    if (state.mobileSearchOpen) {
      el.suggest.classList.add('is-mobile');
      el.suggest.style.left = '';
      el.suggest.style.top = '';
      el.suggest.style.bottom = '';
      el.suggest.style.width = '';
      el.suggest.style.maxHeight = '';
      return;
    }
    el.suggest.classList.remove('is-mobile');
    var host = input.closest('.rb-search') || input;
    var rect = host.getBoundingClientRect();
    var width = Math.max(320, rect.width);
    width = Math.min(width, global.innerWidth - 16);
    var left = Math.min(Math.max(8, rect.left), global.innerWidth - width - 8);
    el.suggest.style.width = width + 'px';
    el.suggest.style.left = left + 'px';
    var below = global.innerHeight - rect.bottom - 12;
    if (below < 320 && rect.top > below) {
      el.suggest.style.top = 'auto';
      el.suggest.style.bottom = (global.innerHeight - rect.top + 8) + 'px';
      el.suggest.style.maxHeight = Math.max(180, Math.min(424, rect.top - 16)) + 'px';
    } else {
      el.suggest.style.top = (rect.bottom + 8) + 'px';
      el.suggest.style.bottom = 'auto';
      el.suggest.style.maxHeight = Math.max(160, Math.min(424, below)) + 'px';
    }
  }

  function updateSuggestActive(input) {
    var rows = $$('.rb-suggest__row', el.suggest);
    rows.forEach(function (row, index) {
      var on = index === state.suggestActive;
      row.classList.toggle('is-active', on);
      row.setAttribute('aria-selected', on ? 'true' : 'false');
      if (on) row.scrollIntoView({ block: 'nearest' });
    });
    if (input) {
      if (state.suggestActive >= 0) input.setAttribute('aria-activedescendant', 'sug-' + state.suggestActive);
      else input.removeAttribute('aria-activedescendant');
    }
  }

  function moveSuggest(delta) {
    var count = state.suggestions.length;
    if (!count) return;
    if (state.suggestActive < 0) state.suggestActive = delta > 0 ? 0 : count - 1;
    else state.suggestActive = (state.suggestActive + delta + count) % count;
    updateSuggestActive(state.activeSearchInput);
  }

  function getActiveSuggestion() {
    if (state.suggestActive >= 0 && state.suggestActive < state.suggestions.length) {
      return state.suggestions[state.suggestActive];
    }
    return null;
  }

  function rememberRecent(value) {
    var text = String(value == null ? '' : value).trim();
    if (!text) return;
    state.recent = [text].concat(state.recent.filter(function (item) { return item !== text; })).slice(0, 5);
    writeJSON(STORE.recent, state.recent);
  }

  function triggerQuery(value) {
    var q = String(value == null ? '' : value).trim();
    if (!q) return;
    setSearchValue(q);
    state.q = q;
    var input = state.activeSearchInput || $('search-mobile');
    var open = !el.suggest.hidden && el.suggest.classList.contains('is-open');
    if (open && input) {
      input.focus();
      state.suggestActive = -1;
      renderSuggestions(input);
      return;
    }
    rememberRecent(q);
    if (state.mode === 'search') {
      if (global.location.hash === R.searchHash(q)) paintBrowse();
      else R.go(R.searchHash(q), true);
    } else {
      R.go(R.searchHash(q));
    }
  }

  function navigateToEntry(entry) {
    if (!entry) return;
    rememberRecent(state.q);
    closeSuggestions();
    if (state.mobileSearchOpen) closeMobileSearch(false);
    R.go(C.urlFor(entry));
  }

  function handleSearchKey(event) {
    var input = event.target;
    if (!input.matches || !input.matches('[data-search-input]')) return false;
    var key = event.key;
    var panelOpen = !el.suggest.hidden && el.suggest.classList.contains('is-open');

    if (key === 'ArrowDown' || key === 'ArrowUp') {
      event.preventDefault();
      if (!panelOpen) openSuggest(input);
      moveSuggest(key === 'ArrowDown' ? 1 : -1);
      return true;
    }
    if (key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      var value = input.value.trim();
      if (!value) return true;
      rememberRecent(value);
      closeSuggestions();
      if (state.mobileSearchOpen) closeMobileSearch(false);
      if (global.location.hash === R.searchHash(value)) paintBrowse();
      else R.go(R.searchHash(value));
      return true;
    }
    if (key === 'Enter') {
      event.preventDefault();
      var q = input.value.trim();
      if (q && q !== state.suggestQuery) {
        state.suggestActive = -1;
        renderSuggestions(input);
      }
      var target = getActiveSuggestion() || state.suggestions[0];
      if (q) rememberRecent(q);
      if (target) navigateToEntry(target);
      else if (q) {
        closeSuggestions();
        if (state.mobileSearchOpen) closeMobileSearch(false);
        if (global.location.hash === R.searchHash(q)) paintBrowse();
        else R.go(R.searchHash(q));
      }
      return true;
    }
    if (key === 'Tab') {
      if (input.value.trim() !== state.suggestQuery) {
        state.suggestActive = -1;
        renderSuggestions(input);
      }
      var pick = getActiveSuggestion() || state.suggestions[0];
      if (pick) {
        event.preventDefault();
        input.value = pick.name;
        syncSearchInputs(pick.name);
        state.q = pick.name;
        if (state.mode === 'browse' || state.mode === 'search') refreshList();
        state.suggestActive = -1;
        renderSuggestions(input);
      }
      return true;
    }
    if (key === 'Escape') {
      event.preventDefault();
      if (panelOpen) { closeSuggestions(); return true; }
      if (input.value) {
        input.value = '';
        syncSearchInputs('');
        state.q = '';
        if (state.mode === 'browse' || state.mode === 'search') refreshList();
        return true;
      }
      input.blur();
      return true;
    }
    return false;
  }

  /* ── popover ─────────────────────────────────────────────── */
  function openPopover(kind, trigger) {
    if (state.popover && state.popover.kind === kind && state.popover.trigger === trigger) {
      closePopover(true);
      return;
    }
    closePopover(false);
    var wide = kind === 'tag' || kind === 'entry-tags' || kind === 'data';
    el.pop.className = 'rb-pop' + (wide ? ' rb-pop--wide' : '') + (state.drawer ? ' is-over-drawer' : '');
    el.pop.setAttribute('role', kind === 'entry-tags' || kind === 'tag' || kind === 'data' ? 'dialog' : 'listbox');
    el.pop.setAttribute('aria-label', kind === 'entry-tags' ? '条目标签与关键词'
      : kind === 'tag' ? '标签筛选'
        : kind === 'sort' ? '排序'
          : kind === 'heat' ? '热度筛选'
            : kind === 'data' ? '数据说明'
              : '规范状态');
    el.pop.innerHTML = kind === 'entry-tags'
      ? V.renderEntryTags(state.drawer && state.drawer.entry)
      : V.renderPopover(kind, vmState());
    el.pop.hidden = false;
    state.popover = { kind: kind, trigger: trigger };
    trigger.setAttribute('aria-expanded', 'true');
    var width = wide ? 280 : 240;
    el.pop.style.width = width + 'px';
    var rect = trigger.getBoundingClientRect();
    var height = el.pop.offsetHeight;
    var left = Math.min(Math.max(8, rect.right - width), global.innerWidth - width - 8);
    if (state.drawer) {
      var bounds = el.drawer.getBoundingClientRect();
      left = Math.max(bounds.left + 8, Math.min(left, bounds.right - width - 8));
    }
    var top = rect.bottom + 6;
    if (top + height > global.innerHeight - 8) top = Math.max(8, rect.top - height - 6);
    el.pop.style.left = left + 'px';
    el.pop.style.top = top + 'px';
    var first = el.pop.querySelector('button');
    if (first) first.focus({ preventScroll: true });
  }

  function closePopover(focusTrigger) {
    if (!state.popover) return;
    var pop = state.popover;
    state.popover = null;
    if (pop.trigger) pop.trigger.setAttribute('aria-expanded', 'false');
    el.pop.hidden = true;
    el.pop.innerHTML = '';
    if (focusTrigger && pop.trigger && pop.trigger.isConnected) pop.trigger.focus({ preventScroll: true });
  }

  function movePopoverFocus(delta) {
    if (!state.popover) return;
    var items = $$('button', el.pop);
    if (!items.length) return;
    var index = items.indexOf(doc.activeElement);
    if (index < 0) index = 0;
    index = (index + delta + items.length) % items.length;
    items[index].focus();
  }

  /* ── 移动端筛选 sheet ────────────────────────────────────── */
  function pendingCount() {
    var base;
    if (state.mode === 'search' || state.lang === 'all') base = C.all();
    else if (state.pending && state.pending.cat) base = C.catEntries(state.lang, state.pending.cat);
    else base = C.langEntries(state.lang);
    var list = state.q ? S.search(state.q, base) : base;
    return filterEntries(list, {
      status: state.pending.status,
      heat: state.pending.heat,
      tags: state.pending.tags
    }).length;
  }

  function openSheet() {
    if (state.sheetOpen) return;
    closePopover(false);
    state.pending = {
      status: state.filters.status,
      heat: state.filters.heat,
      tags: state.filters.tags.slice(),
      sort: state.sort,
      cat: state.cat
    };
    state.sheetCount = pendingCount();
    el.sheet.innerHTML = V.renderSheet(vmState({ pending: state.pending, sheetCount: state.sheetCount }));
    el.sheet.hidden = false;
    el.sheet.classList.remove('is-open');
    el.scrim.hidden = false;
    global.requestAnimationFrame(function () {
      el.sheet.classList.add('is-open');
      el.scrim.classList.add('is-open');
    });
    state.sheetOpen = true;
    state.sheetReturnFocus = doc.activeElement;
    syncLock();
    global.setTimeout(function () {
      var first = el.sheet.querySelector('.rb-sheet__body button');
      if (first) first.focus({ preventScroll: true });
    }, 30);
  }

  function closeSheet(focusTrigger) {
    if (!state.sheetOpen) return;
    state.sheetOpen = false;
    el.sheet.classList.remove('is-open');
    el.scrim.classList.remove('is-open');
    syncLock();
    var delay = reduceMotion ? 0 : 300;
    global.setTimeout(function () {
      if (state.sheetOpen) return;
      el.sheet.hidden = true;
      el.scrim.hidden = true;
      el.sheet.innerHTML = '';
    }, delay);
    var target = state.sheetReturnFocus;
    state.sheetReturnFocus = null;
    if (focusTrigger) {
      global.setTimeout(function () {
        if (target && target.isConnected && (target.offsetWidth || target.offsetHeight)) target.focus({ preventScroll: true });
        else focusSearchFallback();
      }, 0);
    }
  }

  function sheetCountText() {
    var apply = el.sheet.querySelector('[data-act="sheet-apply"]');
    if (apply) apply.textContent = '应用 ' + state.sheetCount + ' 条';
  }

  function applySheet() {
    var pending = state.pending;
    if (!pending) return;
    state.filters = { status: pending.status, heat: pending.heat, tags: pending.tags.slice() };
    state.sort = pending.sort;
    state.sheetCount = pendingCount();
    var targetCat = state.lang === 'all' ? state.cat : pending.cat;
    var catChanged = targetCat !== state.cat;
    closeSheet(false);
    if (catChanged) {
      var hash = targetCat ? C.categoryUrl(state.lang, targetCat) : C.langUrl(state.lang);
      if (global.location.hash === hash) paintBrowse();
      else R.go(hash);
    } else {
      refreshList();
      syncToolbar();
      global.setTimeout(focusSearchFallback, 0);
    }
  }

  function resetSheet() {
    if (!state.pending) return;
    state.pending = { status: 'all', heat: 'all', tags: [], sort: 'recommended', cat: state.cat };
    state.sheetCount = pendingCount();
    el.sheet.innerHTML = V.renderSheet(vmState({ pending: state.pending, sheetCount: state.sheetCount }));
    var reset = el.sheet.querySelector('[data-act="sheet-reset"]');
    if (reset) reset.focus({ preventScroll: true });
  }

  function handleSheetItem(button) {
    var type = button.getAttribute('data-sheet');
    var value = button.getAttribute('data-value') || '';
    var pending = state.pending;
    if (!pending) return;
    if (type === 'tag') {
      var at = pending.tags.indexOf(value);
      if (at >= 0) pending.tags.splice(at, 1);
      else pending.tags.push(value);
      var on = pending.tags.indexOf(value) >= 0;
      button.classList.toggle('is-on', on);
      button.setAttribute('aria-pressed', on ? 'true' : 'false');
      var tagCheck = button.querySelector('.rb-opt__check');
      if (tagCheck) tagCheck.innerHTML = on ? V.icons('check') : '';
    } else if (type === 'heat') {
      pending.heat = value;
      $$('[data-sheet="heat"]', el.sheet).forEach(function (node) {
        var active = node === button;
        node.classList.toggle('is-on', active);
        node.setAttribute('aria-pressed', active ? 'true' : 'false');
        var heatCheck = node.querySelector('.rb-opt__check');
        if (heatCheck) heatCheck.innerHTML = active ? V.icons('check') : '';
      });
    } else if (type === 'status') {
      pending.status = value;
      $$('[data-sheet="status"]', el.sheet).forEach(function (node) {
        var active = node === button;
        node.classList.toggle('is-on', active);
        node.setAttribute('aria-pressed', active ? 'true' : 'false');
        var statusCheck = node.querySelector('.rb-opt__check');
        if (statusCheck) statusCheck.innerHTML = active ? V.icons('check') : '';
      });
    } else if (type === 'sort') {
      pending.sort = value;
      $$('[data-sheet="sort"]', el.sheet).forEach(function (node) {
        var active = node === button;
        node.classList.toggle('is-on', active);
        node.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    } else if (type === 'cat') {
      pending.cat = value;
      $$('[data-sheet="cat"]', el.sheet).forEach(function (node) {
        var active = node === button;
        node.classList.toggle('is-on', active);
        node.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    }
    state.sheetCount = pendingCount();
    sheetCountText();
  }

  /* ── 帮助 / 移动端搜索 ──────────────────────────────────── */
  function openHelp() {
    if (state.helpOpen) return;
    closePopover(false);
    if (state.sheetOpen) closeSheet(false);
    closeSuggestions();
    state.helpOpen = true;
    state.helpReturnFocus = doc.activeElement;
    el.help.innerHTML = '<div class="rb-modal__panel" role="dialog" aria-modal="true" aria-labelledby="help-title" tabindex="-1">' +
      V.renderShortcuts() + '</div>';
    el.help.hidden = false;
    syncLock();
    global.setTimeout(function () {
      var panel = el.help.querySelector('.rb-modal__panel');
      if (panel) panel.focus({ preventScroll: true });
    }, 20);
  }

  function closeHelp() {
    if (!state.helpOpen) return;
    state.helpOpen = false;
    el.help.hidden = true;
    el.help.innerHTML = '';
    syncLock();
    var target = state.helpReturnFocus;
    state.helpReturnFocus = null;
    if (target && target.isConnected && (target.offsetWidth || target.offsetHeight)) target.focus({ preventScroll: true });
    else focusSearchFallback();
  }

  function openMobileSearch(value) {
    if (state.mobileSearchOpen) {
      var existing = $('search-mobile');
      if (existing) existing.focus();
      return;
    }
    state.mobileSearchOpen = true;
    state.mobileReturnFocus = doc.activeElement;
    if (value != null) setSearchValue(value);
    el.msearch.hidden = false;
    syncLock();
    var input = $('search-mobile');
    if (input) {
      global.setTimeout(function () {
        input.focus();
        openSuggest(input);
      }, 20);
    }
  }

  function closeMobileSearch(focusTrigger) {
    if (!state.mobileSearchOpen) return;
    state.mobileSearchOpen = false;
    closeSuggestions();
    el.msearch.hidden = true;
    syncLock();
    var target = state.mobileReturnFocus;
    state.mobileReturnFocus = null;
    if (focusTrigger) {
      global.setTimeout(function () {
        if (target && target.isConnected && (target.offsetWidth || target.offsetHeight)) target.focus({ preventScroll: true });
        else {
          var btn = doc.querySelector('[data-act="open-msearch"]');
          if (btn) btn.focus();
        }
      }, 0);
    }
  }

  /* ── 筛选辅助 ─────────────────────────────────────────────── */
  function clearFilters() {
    state.filters = { status: 'all', heat: 'all', tags: [] };
    refreshList();
    syncToolbar();
    focusSearchFallback();
  }
  function clearAll() {
    state.q = '';
    state.filters = { status: 'all', heat: 'all', tags: [] };
    setSearchValue('');
    closeSuggestions();
    if (state.mode === 'search') {
      R.go('#/all');
    } else if (state.mode === 'browse' && (state.lang !== 'all' || state.cat)) {
      R.go('#/all');
    } else if (state.mode === 'browse') {
      refreshList();
      syncToolbar();
    }
  }
  function clearSearchOnly() {
    state.q = '';
    setSearchValue('');
    closeSuggestions();
    if (state.mode === 'search') R.go('#/all', true);
    else if (state.mode === 'browse') refreshList();
    focusSearchFallback();
  }

  /* ── 列表虚拟光标 ─────────────────────────────────────────── */
  function rows() { return $$('.rb-row, .rb-card', el.view); }
  function setCursor(index, scroll) {
    var nodes = rows();
    if (!nodes.length) { state.cursor = -1; return; }
    index = Math.max(0, Math.min(index, nodes.length - 1));
    nodes.forEach(function (node, i) {
      var anchor = node.classList.contains('rb-row') ? node.querySelector('.rb-row__link') : node;
      if (i === index) {
        node.classList.add('is-cursor');
        if (anchor) anchor.setAttribute('aria-current', 'true');
      } else {
        node.classList.remove('is-cursor');
        if (anchor) anchor.removeAttribute('aria-current');
      }
    });
    state.cursor = index;
    if (scroll) nodes[index].scrollIntoView({ block: 'nearest' });
  }
  function moveCursor(delta, scroll) {
    var nodes = rows();
    if (!nodes.length) return;
    var next = state.cursor < 0 ? (delta > 0 ? 0 : nodes.length - 1) : state.cursor + delta;
    setCursor(next, scroll !== false);
  }
  function openCursor() {
    var nodes = rows();
    if (state.cursor < 0 || state.cursor >= nodes.length) return;
    var node = nodes[state.cursor];
    var url = node.matches('a[href]') ? node : node.querySelector('a[href]');
    if (url) {
      state.drawerReturnFocus = url;
      global.location.hash = url.getAttribute('href');
    } else {
      var entry = C.getById(node.getAttribute('data-id'));
      if (entry) {
        state.drawerReturnFocus = node;
        R.go(C.urlFor(entry));
      }
    }
  }

  /* ── 事件：点击 ───────────────────────────────────────────── */
  function handleAction(action, node, event) {
    switch (action) {
      case 'theme':
        cycleTheme();
        break;
      case 'clear-search':
        clearSearchOnly();
        break;
      case 'view':
        state.view = node.getAttribute('data-view') === 'card' ? 'card' : 'row';
        writeRaw(STORE.view, state.view);
        refreshList();
        break;
      case 'toggle-group': {
        var lang = node.getAttribute('data-group');
        var group = doc.querySelector('.rb-group[data-group="' + lang + '"]');
        if (!group) break;
        var open = !group.classList.contains('is-open');
        group.classList.toggle('is-open', open);
        node.setAttribute('aria-expanded', open ? 'true' : 'false');
        state.groups[lang] = open;
        writeJSON(STORE.groups, state.groups);
        break;
      }
      case 'toggle-cats': {
        state.catsCollapsed = !state.catsCollapsed;
        var catindex = el.view.querySelector('.rb-catindex');
        if (catindex) catindex.classList.toggle('is-collapsed', state.catsCollapsed);
        node.setAttribute('aria-expanded', state.catsCollapsed ? 'false' : 'true');
        node.textContent = state.catsCollapsed ? '展开全部' : '收起全部';
        break;
      }
      case 'clear-filters':
        clearFilters();
        break;
      case 'clear-all':
        clearAll();
        break;
      case 'clear-tags':
        state.filters.tags = [];
        refreshList();
        if (state.popover && state.popover.kind === 'tag') {
          $$('[data-tag]', el.pop).forEach(function (btn) {
            btn.classList.remove('is-on');
            btn.setAttribute('aria-pressed', 'false');
            var check = btn.querySelector('.rb-pop__check');
            if (check) check.innerHTML = '';
          });
        }
        break;
      case 'remove-status':
        state.filters.status = 'all';
        refreshList('filter');
        syncToolbar();
        break;
      case 'remove-heat':
        state.filters.heat = 'all';
        refreshList('filter');
        syncToolbar();
        break;
      case 'remove-tag': {
        var tag = node.getAttribute('data-tag');
        state.filters.tags = state.filters.tags.filter(function (item) { return item !== tag; });
        refreshList('filter');
        syncToolbar();
        break;
      }
      case 'open-sheet':
        openSheet();
        break;
      case 'close-sheet':
        closeSheet(true);
        break;
      case 'sheet-reset':
        resetSheet();
        break;
      case 'sheet-apply':
        applySheet();
        break;
      case 'reload':
        global.location.reload();
        break;
      case 'help':
        openHelp();
        break;
      case 'close-help':
        closeHelp();
        break;
      case 'close-drawer':
        requestCloseDrawer();
        break;
      case 'prev':
        navigateDrawer(-1);
        break;
      case 'next':
        navigateDrawer(1);
        break;
      case 'copy-link':
        copyLink();
        break;
      case 'copy':
        copyEntry(node.getAttribute('data-copy') || 'example');
        break;
      case 'tag-pop':
        openPopover('entry-tags', node);
        break;
      case 'close-pop':
        closePopover(true);
        break;
      case 'goto-sec': {
        var targetId = node.getAttribute('data-target');
        var sec = $(targetId);
        if (sec) {
          sec.scrollIntoView({ block: 'start', behavior: reduceMotion ? 'auto' : 'smooth' });
          setActiveSection(targetId);
        }
        break;
      }
      case 'preview-reset': {
        if (state.drawer) renderPreview(state.drawer.entry);
        break;
      }
      case 'preview-grid': {
        var grid = el.drawer.querySelector('[data-grid]');
        if (grid) {
          var off = grid.classList.toggle('is-off');
          node.setAttribute('aria-pressed', off ? 'false' : 'true');
        }
        break;
      }
      case 'open-msearch':
        openMobileSearch(state.q);
        break;
      case 'close-msearch':
        closeMobileSearch(true);
        break;
      case 'suggest-all': {
        var value = (state.activeSearchInput && state.activeSearchInput.value.trim()) || state.q;
        if (!value) break;
        rememberRecent(value);
        closeSuggestions();
        if (state.mobileSearchOpen) closeMobileSearch(false);
        if (global.location.hash === R.searchHash(value)) paintBrowse();
        else R.go(R.searchHash(value));
        break;
      }
      case 'del-recent': {
        var val = node.getAttribute('data-value');
        state.recent = state.recent.filter(function (item) { return item !== val; });
        writeJSON(STORE.recent, state.recent);
        if (state.activeSearchInput) {
          renderSuggestions(state.activeSearchInput);
          state.activeSearchInput.focus({ preventScroll: true });
        }
        break;
      }
      case 'to-top':
        global.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
        break;
      default:
        break;
    }
  }

  function onClick(event) {
    var target = event.target;
    if (!target || !target.closest) return;

    if (state.popover && !target.closest('.rb-pop') && !target.closest('[data-pop]')) closePopover(false);
    if (!el.suggest.hidden && el.suggest.classList.contains('is-open') &&
      !target.closest('#suggest') && !target.closest('.rb-search') && !target.closest('#msearch')) {
      closeSuggestions();
    }

    var popTrigger = target.closest('[data-pop]');
    if (popTrigger) {
      event.preventDefault();
      openPopover(popTrigger.getAttribute('data-pop'), popTrigger);
      return;
    }

    var actionNode = target.closest('[data-act]');
    if (actionNode && !actionNode.disabled) {
      event.preventDefault();
      handleAction(actionNode.getAttribute('data-act'), actionNode, event);
      return;
    }

    var statusNode = target.closest('[data-status]');
    if (statusNode && state.popover) {
      state.filters.status = statusNode.getAttribute('data-status');
      closePopover(true);
      refreshList();
      syncToolbar();
      return;
    }
    var heatNode = target.closest('[data-heat]');
    if (heatNode && state.popover) {
      state.filters.heat = heatNode.getAttribute('data-heat');
      closePopover(true);
      refreshList();
      syncToolbar();
      return;
    }
    var sortNode = target.closest('[data-sort]');
    if (sortNode && state.popover) {
      state.sort = sortNode.getAttribute('data-sort');
      closePopover(true);
      refreshList();
      syncToolbar();
      return;
    }
    var tagNode = target.closest('[data-tag]');
    if (tagNode && state.popover && state.popover.kind === 'tag') {
      var value = tagNode.getAttribute('data-tag');
      var at = state.filters.tags.indexOf(value);
      if (at >= 0) state.filters.tags.splice(at, 1);
      else state.filters.tags.push(value);
      var on = state.filters.tags.indexOf(value) >= 0;
      tagNode.classList.toggle('is-on', on);
      tagNode.setAttribute('aria-pressed', on ? 'true' : 'false');
      var check = tagNode.querySelector('.rb-pop__check');
      if (check) check.innerHTML = on ? V.icons('check') : '';
      refreshList();
      return;
    }

    var sheetNode = target.closest('[data-sheet]');
    if (sheetNode && state.sheetOpen) {
      handleSheetItem(sheetNode);
      return;
    }

    var qNode = target.closest('[data-q]');
    if (qNode) {
      event.preventDefault();
      triggerQuery(qNode.getAttribute('data-q'));
      return;
    }

    var langTab = target.closest('[data-lang-tab]');
    if (langTab) {
      var lang = langTab.getAttribute('data-lang-tab');
      var hash = lang === 'all' ? '#/all' : '#/' + lang;
      if (global.location.hash === hash) paintBrowse();
      else R.go(hash);
      return;
    }

    var suggestOption = target.closest('[data-url]');
    if (suggestOption && target.closest('#suggest')) {
      rememberRecent((state.activeSearchInput && state.activeSearchInput.value.trim()) || state.q);
      closeSuggestions();
      if (state.mobileSearchOpen) closeMobileSearch(false);
      return;
    }

    if (target === el.scrim) {
      if (state.sheetOpen) closeSheet(true);
      else if (state.drawer) requestCloseDrawer();
      return;
    }
    if (target === el.help && state.helpOpen) {
      closeHelp();
      return;
    }

    var dataId = target.closest('[data-id]');
    if (dataId && (dataId.classList.contains('rb-row__link') || dataId.classList.contains('rb-card'))) {
      state.drawerReturnFocus = dataId;
      closeSuggestions();
      closePopover(false);
    }
  }

  /* ── 事件：输入 / 焦点 ───────────────────────────────────── */
  function onInput(event) {
    var input = event.target;
    if (!input.matches || !input.matches('[data-search-input]')) return;
    syncSearchInputs(input.value);
    state.q = input.value.trim();
    global.clearTimeout(searchTimer);
    searchTimer = global.setTimeout(function () {
      if (state.mode === 'browse' || state.mode === 'search') refreshList();
      if (document.activeElement === input) renderSuggestions(input);
    }, 90);
  }

  function onFocusIn(event) {
    var input = event.target.closest ? event.target.closest('[data-search-input]') : null;
    if (!input) return;
    if (global.innerWidth < 768 && !input.closest('#msearch')) {
      openMobileSearch(input.value);
      return;
    }
    openSuggest(input);
  }

  /* ── 键盘 ─────────────────────────────────────────────────── */
  function isEditable(target) {
    if (!target) return false;
    var tag = (target.tagName || '').toLowerCase();
    return tag === 'input' || tag === 'textarea' || tag === 'select' || target.isContentEditable;
  }

  function onKeyDown(event) {
    var key = event.key;
    var target = event.target;
    var drawerOpen = !!state.drawer;

    if (state.helpOpen) {
      if (key === 'Escape') { event.preventDefault(); closeHelp(); return; }
      if (key === 'Tab') { trapFocus(el.help, event); return; }
      return;
    }

    if (key === 'Escape') {
      if (state.popover) { event.preventDefault(); closePopover(true); return; }
      if (state.sheetOpen) { event.preventDefault(); closeSheet(true); return; }
      if (!el.suggest.hidden && el.suggest.classList.contains('is-open')) {
        event.preventDefault(); closeSuggestions(); return;
      }
      if (drawerOpen) { event.preventDefault(); requestCloseDrawer(); return; }
      if (state.mobileSearchOpen) { event.preventDefault(); closeMobileSearch(true); return; }
      if (isEditable(target)) {
        if (target.value) {
          event.preventDefault();
          target.value = '';
          syncSearchInputs('');
          state.q = '';
          if (state.mode === 'browse' || state.mode === 'search') refreshList();
        }
        return;
      }
      if (state.filters.status !== 'all' || state.filters.heat !== 'all' || state.filters.tags.length) {
        event.preventDefault();
        clearFilters();
      }
      return;
    }

    if (handleSearchKey(event)) return;

    if (state.sheetOpen) {
      if (key === 'Tab') trapFocus(el.sheet, event);
      return;
    }

    if (state.popover) {
      if (key === 'ArrowDown' || key === 'ArrowUp') {
        event.preventDefault();
        movePopoverFocus(key === 'ArrowDown' ? 1 : -1);
        return;
      }
    }

    if (drawerOpen) {
      if (key === '[') { event.preventDefault(); navigateDrawer(-1); return; }
      if (key === ']') { event.preventDefault(); navigateDrawer(1); return; }
      if (!isEditable(target) && (key === 'c' || key === 'C')) { event.preventDefault(); copyEntry('example'); return; }
      if (!isEditable(target) && (key === 'm' || key === 'M')) { event.preventDefault(); openMDN(); return; }
      if (!isEditable(target) && (key === 't' || key === 'T')) { event.preventDefault(); cycleTheme(); return; }
      if (key === 'Tab') { trapFocus(el.drawer, event); return; }
      return;
    }

    if ((event.ctrlKey || event.metaKey) && (key === 'k' || key === 'K')) {
      event.preventDefault();
      focusSearch();
      return;
    }

    var tab = target.closest ? target.closest('[data-lang-tab]') : null;
    if (tab && (key === 'ArrowLeft' || key === 'ArrowRight' || key === 'Home' || key === 'End')) {
      event.preventDefault();
      var tabList = $$('[data-lang-tab]');
      var tabIndex = tabList.indexOf(tab);
      if (key === 'Home') tabIndex = 0;
      else if (key === 'End') tabIndex = tabList.length - 1;
      else tabIndex = (tabIndex + (key === 'ArrowRight' ? 1 : -1) + tabList.length) % tabList.length;
      var nextLang = tabList[tabIndex].getAttribute('data-lang-tab');
      var nextHash = nextLang === 'all' ? '#/all' : '#/' + nextLang;
      if (global.location.hash === nextHash) paintBrowse();
      else R.go(nextHash);
      global.setTimeout(function () {
        var button = doc.querySelector('[data-lang-tab="' + nextLang + '"]');
        if (button) button.focus();
      }, 60);
      return;
    }

    if (isEditable(target)) return;

    if (key === '/') {
      event.preventDefault();
      focusSearch();
      return;
    }
    if (key === '?') {
      event.preventDefault();
      openHelp();
      return;
    }
    if (key === 't' || key === 'T') {
      event.preventDefault();
      cycleTheme();
      return;
    }
    if (key === '1') { event.preventDefault(); R.go('#/html'); return; }
    if (key === '2') { event.preventDefault(); R.go('#/css'); return; }
    if (key === '3') { event.preventDefault(); R.go('#/js'); return; }
    if (key === '0') { event.preventDefault(); R.go('#/all'); return; }
    if (key === 'g' || key === 'G') { gPressedAt = Date.now(); return; }
    if ((key === 'h' || key === 'H') && Date.now() - gPressedAt < 1000) {
      event.preventDefault();
      gPressedAt = 0;
      if (global.location.hash === '#/' || !global.location.hash) applyRoute(R.parse('#/'));
      else R.go('#/');
      return;
    }

    if (state.mode === 'browse' || state.mode === 'search') {
      var ctx = target === doc.body || target === $('main') || target === el.view ||
        (target.closest && target.closest('.rb-row,.rb-card,.rb-listhead,.rb-content'));
      if (!ctx) return;
      if (key === 'ArrowDown' || key === 'j' || key === 'J') {
        event.preventDefault(); moveCursor(1); return;
      }
      if (key === 'ArrowUp' || key === 'k' || key === 'K') {
        event.preventDefault(); moveCursor(-1); return;
      }
      if (key === 'Home') { event.preventDefault(); setCursor(0, true); return; }
      if (key === 'End') { event.preventDefault(); setCursor(rows().length - 1, true); return; }
      if (key === 'PageDown' || key === 'PageUp') {
        event.preventDefault();
        var perPage = Math.max(1, Math.floor(global.innerHeight / 52) - 1);
        moveCursor(key === 'PageDown' ? perPage : -perPage);
        return;
      }
      if (key === 'Enter') {
        if (state.cursor >= 0) { event.preventDefault(); openCursor(); }
      }
    }
  }

  /* ── 滚动 ─────────────────────────────────────────────────── */
  function onScroll() {
    scrollTicking = false;
    var y = global.scrollY || global.pageYOffset || 0;
    el.topbar.classList.toggle('is-scrolled', y > 0);
    var max = Math.max(1, doc.documentElement.scrollHeight - global.innerHeight);
    var progress = Math.min(1, Math.max(0, y / max));
    var circle = el.totop.querySelector('.rb-totop__prog');
    if (circle) {
      var circumference = 2 * Math.PI * 18;
      circle.style.strokeDashoffset = String(circumference * (1 - progress));
    }
    if (y > 480 && !totopVisible) {
      totopVisible = true;
      el.totop.hidden = false;
      el.totop.tabIndex = 0;
      global.requestAnimationFrame(function () { el.totop.classList.add('is-visible'); });
    } else if (y <= 480 && totopVisible) {
      totopVisible = false;
      el.totop.classList.remove('is-visible');
      el.totop.tabIndex = -1;
      global.setTimeout(function () { if (!totopVisible) el.totop.hidden = true; }, 200);
    }

    if (y > 120 && y > lastScrollY + 8) doc.body.classList.add('is-toolbar-hidden');
    else if (y < lastScrollY - 8 || y <= 120) doc.body.classList.remove('is-toolbar-hidden');
    lastScrollY = y;

    if (state.popover) closePopover(false);
    if (!el.suggest.hidden && el.suggest.classList.contains('is-open') && state.activeSearchInput) {
      positionSuggest(state.activeSearchInput);
    }
  }
  function requestScroll() {
    if (scrollTicking) return;
    scrollTicking = true;
    global.requestAnimationFrame(onScroll);
  }

  /* ── 初始化 ───────────────────────────────────────────────── */
  function bindEvents() {
    doc.addEventListener('click', onClick);
    doc.addEventListener('input', onInput);
    doc.addEventListener('focusin', onFocusIn);
    doc.addEventListener('keydown', onKeyDown);
    el.drawer.addEventListener('scroll', function (event) {
      var target = event.target;
      if (target && target.classList && target.classList.contains('rb-code__scroll')) updateCodeFade(target);
    }, true);
    el.pop.addEventListener('focusout', function (event) {
      if (!state.popover) return;
      var next = event.relatedTarget;
      if (!next || el.pop.contains(next) || next === state.popover.trigger) return;
      closePopover(false);
    });
    global.addEventListener('hashchange', function () { applyRoute(R.current()); });
    global.addEventListener('scroll', requestScroll, { passive: true });
    global.addEventListener('resize', function () {
      if (global.innerWidth >= 768) {
        if (state.mobileSearchOpen) closeMobileSearch(false);
        if (state.sheetOpen) closeSheet(false);
      }
      if (state.popover) closePopover(false);
      if (state.activeSearchInput && !el.suggest.hidden) positionSuggest(state.activeSearchInput);
      if (state.drawer) syncCodeOverflow(el.drawer);
    });
    if (themeMedia) {
      var onChange = function () {
        if (state.themeMode === 'system') applyTheme('system', false);
      };
      if (themeMedia.addEventListener) themeMedia.addEventListener('change', onChange);
      else if (themeMedia.addListener) themeMedia.addListener(onChange);
    }
  }

  function init() {
    el.topbar = $('topbar');
    el.view = $('view');
    el.suggest = $('suggest');
    el.scrim = $('scrim');
    el.drawer = $('drawer');
    el.sheet = $('sheet');
    el.toasts = $('toasts');
    el.totop = $('to-top');
    el.help = $('help');
    el.msearch = $('msearch');
    el.pop = $('popover');

    if (!C || typeof C.total !== 'number') {
      if (el.view) {
        el.view.innerHTML = '<div class="rb-empty"><div class="rb-empty__num">!</div>' +
          '<h2 class="rb-empty__title">数据未加载</h2>' +
          '<p class="rb-empty__desc">请确认 data/ 文件夹与 index.html 在同一目录，然后用 Chrome 或 Edge 打开。</p></div>';
      }
      return;
    }

    state.view = readRaw(STORE.view) === 'card' ? 'card' : 'row';
    state.recent = readJSON(STORE.recent, []);
    if (!Array.isArray(state.recent)) state.recent = [];
    var groups = readJSON(STORE.groups, null);
    state.groups = groups && typeof groups === 'object' ? groups : { css: true };

    applyTheme(readRaw(STORE.theme, 'system'), false);
    S.buildIndex();
    updateKbd();
    updateChrome();
    bindEvents();
    if (!C.load.complete) {
      toast('数据分片不完整，已加载 ' + C.load.actual + ' / ' + C.load.expected + ' 条', 'warn');
    }
    applyRoute(R.current(), { initial: true });
  }

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', init);
  else init();
})(window);
