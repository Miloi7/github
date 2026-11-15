/* ==========================================================================
   REFBENCH · data.js
   window.CS_DATA 聚合 → 运行时计数 / 分类索引 / 排序 / URL
   必须最先加载（在 search.js 之前）。不依赖 DOM。
   ========================================================================== */
(function (global) {
  'use strict';

  var RAW = Array.isArray(global.CS_DATA) ? global.CS_DATA : [];
  var META = global.CS_META || {};
  var SHARDS = global.CS_SHARDS || {};

  var LANG_PRIORITY = { css: 0, html: 1, js: 2 };
  var LANG_VIEW = ['html', 'css', 'js'];          // 界面呈现顺序
  var LANG_NAME = { html: 'HTML', css: 'CSS', js: 'JavaScript' };
  var LANG_SHORT = { html: 'HTML', css: 'CSS', js: 'JS' };
  var LANG_MARK = { html: 'H', css: 'C', js: 'J' };
  var LANG_GLYPH = { html: '< >', css: '{ }', js: '( )' };

  var NORM_LABEL = {
    standard: '标准',
    experimental: '实验性',
    nonstandard: '非标准',
    obsolete: '已废弃',
    deprecated: '已废弃',
    none: ''
  };
  var NORM_ORDER = ['standard', 'experimental', 'nonstandard', 'obsolete', 'deprecated'];
  var NORM_RANK = { standard: 0, experimental: 1, nonstandard: 2, obsolete: 3, deprecated: 3, none: 4 };

  function normOf(entry) {
    var s = entry.status;
    if (s === 'standard' || s === 'experimental' || s === 'nonstandard' || s === 'obsolete' || s === 'deprecated') return s;
    /* common / hot / rare 属于热度轴，规范状态未标注，不臆造为“标准” */
    return 'none';
  }

  /* 热度轴只认 status 字段里的 hot / rare / deprecated：与规格书 91 高频一致 */
  function heatOf(entry) {
    if (entry.status === 'hot') return 'hot';
    if (entry.status === 'rare') return 'rare';
    if (entry.status === 'deprecated') return 'deprecated';
    return 'normal';
  }

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /* ── 1. 聚合与计数 ─────────────────────────────────────────── */
  var counts = {
    total: RAW.length,
    byLang: { html: 0, css: 0, js: 0 },
    byCat: { html: {}, css: {}, js: {} },
    byNorm: { standard: 0, experimental: 0, nonstandard: 0, obsolete: 0, deprecated: 0, none: 0 },
    byHeat: { hot: 0, common: 0, rare: 0, normal: 0, deprecated: 0 },
    rawStatus: {},
    byTag: {}
  };

  var byId = Object.create(null);
  var byName = { html: Object.create(null), css: Object.create(null), js: Object.create(null) };

  RAW.forEach(function (entry, i) {
    if (!entry || !entry.lang) return;
    entry._i = i;
    entry._norm = normOf(entry);
    entry._heat = heatOf(entry);
    entry._langIdx = LANG_PRIORITY[entry.lang] == null ? 9 : LANG_PRIORITY[entry.lang];
    entry._catOrder = typeof entry.catOrder === 'number' ? entry.catOrder : 999;
    entry._nameLc = String(entry.name || '').toLowerCase();
    entry._zhLc = String(entry.zh || '').toLowerCase();

    counts.byLang[entry.lang] = (counts.byLang[entry.lang] || 0) + 1;
    counts.byCat[entry.lang] = counts.byCat[entry.lang] || {};
    counts.byCat[entry.lang][entry.cat] = (counts.byCat[entry.lang][entry.cat] || 0) + 1;
    counts.byNorm[entry._norm] = (counts.byNorm[entry._norm] || 0) + 1;
    counts.byHeat[entry._heat] = (counts.byHeat[entry._heat] || 0) + 1;
    counts.rawStatus[entry.status] = (counts.rawStatus[entry.status] || 0) + 1;

    (entry.tags || []).forEach(function (tag) {
      counts.byTag[tag] = (counts.byTag[tag] || 0) + 1;
    });

    if (entry.id && !byId[entry.id]) byId[entry.id] = entry;
    if (byName[entry.lang]) {
      (byName[entry.lang][entry.name] = byName[entry.lang][entry.name] || []).push(entry);
    }
  });

  /* ── 2. 分类：运行时计数（HTML count 在 meta 里全为 0） ─────── */
  var categories = { html: [], css: [], js: [] };
  LANG_VIEW.forEach(function (lang) {
    var src = (META.categories && META.categories[lang]) || [];
    var seen = {};
    var list = [];
    src.forEach(function (cat, index) {
      var id = cat.id;
      if (!id || seen[id]) return;
      seen[id] = true;
      list.push({
        id: id,
        name: cat.name || id,
        en: cat.en || '',
        desc: cat.desc || '',
        order: typeof cat.order === 'number' ? cat.order : index,
        count: counts.byCat[lang][id] || 0
      });
    });
    /* 若 meta 缺分类，退化为从条目推导，保证界面不空白 */
    Object.keys(counts.byCat[lang] || {}).forEach(function (id) {
      if (seen[id]) return;
      var found = null;
      for (var i = 0; i < RAW.length; i++) {
        if (RAW[i].lang === lang && RAW[i].cat === id) { found = RAW[i]; break; }
      }
      list.push({
        id: id,
        name: found ? found.catName || id : id,
        en: found ? found.catEn || '' : '',
        desc: '',
        order: found && typeof found.catOrder === 'number' ? found.catOrder : 999,
        count: counts.byCat[lang][id] || 0
      });
    });
    list.sort(function (a, b) { return a.order - b.order || a.name.localeCompare(b.name, 'zh'); });
    categories[lang] = list;
  });

  var categoryById = { html: {}, css: {}, js: {} };
  LANG_VIEW.forEach(function (lang) {
    categories[lang].forEach(function (cat) { categoryById[lang][cat.id] = cat; });
  });

  var languages = LANG_VIEW.map(function (lang) {
    var src = (META.languages || []).filter(function (l) { return l.id === lang; })[0] || {};
    return {
      id: lang,
      name: src.name || LANG_NAME[lang],
      en: src.en || '',
      desc: src.desc || '',
      count: counts.byLang[lang] || 0,
      categories: categories[lang].length
    };
  });

  /* 标签筛选只认 meta.tags 里的正交标签；条目上的其他标签仍保留在详情中 */
  var tags = ((META.tags || []).map(function (t) {
    return { id: t.id, count: counts.byTag[t.id] || 0 };
  })).filter(function (t) { return t.count > 0; });

  var totalCategories = categories.html.length + categories.css.length + categories.js.length;

  /* ── 3. 分片完整性 ─────────────────────────────────────────── */
  var expected = 0;
  var shardLang = { html: 0, css: 0, js: 0 };
  LANG_VIEW.forEach(function (lang) {
    (SHARDS[lang] || []).forEach(function (shard) {
      expected += shard.count || 0;
      shardLang[lang] += shard.count || 0;
    });
  });
  var missing = [];
  LANG_VIEW.forEach(function (lang) {
    if (shardLang[lang] && shardLang[lang] !== counts.byLang[lang]) missing.push(lang);
  });
  var load = {
    expected: expected || META.total || RAW.length,
    actual: RAW.length,
    shards: (SHARDS.html || []).length + (SHARDS.css || []).length + (SHARDS.js || []).length,
    complete: (expected ? RAW.length === expected : RAW.length > 0),
    missingLangs: missing,
    hasMeta: !!META.total
  };

  /* ── 4. 查询辅助 ───────────────────────────────────────────── */
  function all() { return RAW; }

  function langEntries(lang) {
    if (!lang || lang === 'all') return RAW;
    return RAW.filter(function (e) { return e.lang === lang; });
  }

  function catEntries(lang, cat) {
    return RAW.filter(function (e) { return e.lang === lang && e.cat === cat; });
  }

  function getEntry(lang, name, cat) {
    var list = byName[lang] && byName[lang][name];
    if (!list || !list.length) return null;
    if (cat) {
      for (var i = 0; i < list.length; i++) if (list[i].cat === cat) return list[i];
      return null;
    }
    return list[0];
  }

  function getById(id) { return byId[id] || null; }

  function duplicateName(lang, name) {
    return !!(byName[lang] && byName[lang][name] && byName[lang][name].length > 1);
  }

  function category(lang, cat) {
    return (categoryById[lang] && categoryById[lang][cat]) || null;
  }

  function categoryCollides(lang, cat) {
    return !!(byName[lang] && byName[lang][cat]);
  }

  function urlFor(entry) {
    if (!entry) return '#/';
    var base = '#/' + entry.lang + '/';
    if (duplicateName(entry.lang, entry.name)) base += entry.cat + '/';
    return base + encodeURIComponent(entry.name);
  }

  function categoryUrl(lang, cat) {
    return '#/' + lang + '/' + (categoryCollides(lang, cat) ? '~' : '') + cat;
  }

  function langUrl(lang) { return lang && lang !== 'all' ? '#/' + lang : '#/all'; }

  /* ── 5. 排序 ───────────────────────────────────────────────── */
  function compareName(a, b) {
    return String(a.name).localeCompare(String(b.name), 'en', { sensitivity: 'base' }) || (a._i - b._i);
  }
  function compareRecommended(a, b) {
    return (a._langIdx - b._langIdx) ||
      (a._catOrder - b._catOrder) ||
      ((a.order || 0) - (b.order || 0)) ||
      compareName(a, b);
  }
  function compareCategory(a, b) {
    return (a._langIdx - b._langIdx) ||
      (a._catOrder - b._catOrder) ||
      compareName(a, b);
  }
  function compareStatus(a, b) {
    return ((NORM_RANK[a._norm] == null ? 9 : NORM_RANK[a._norm]) -
      (NORM_RANK[b._norm] == null ? 9 : NORM_RANK[b._norm])) ||
      (a._langIdx - b._langIdx) ||
      (a._catOrder - b._catOrder) ||
      ((a.order || 0) - (b.order || 0)) ||
      compareName(a, b);
  }

  function sortList(list, sort) {
    var out = list.slice();
    if (sort === 'az') out.sort(compareName);
    else if (sort === 'category') out.sort(compareCategory);
    else if (sort === 'status') out.sort(compareStatus);
    else out.sort(compareRecommended);
    return out;
  }

  /* ── 6. 对外接口 ───────────────────────────────────────────── */
  global.CSData = {
    all: all,
    get: getEntry,
    getById: getById,
    langEntries: langEntries,
    catEntries: catEntries,
    categories: categories,
    category: category,
    categoryById: categoryById,
    languages: languages,
    tags: tags,
    counts: counts,
    load: load,
    meta: META,
    generatedAt: META.generatedAt || '2026-11-13',
    total: RAW.length,
    totalCategories: totalCategories,
    langName: LANG_NAME,
    langShort: LANG_SHORT,
    langMark: LANG_MARK,
    langGlyph: LANG_GLYPH,
    langPriority: LANG_PRIORITY,
    langView: LANG_VIEW,
    normLabel: NORM_LABEL,
    normOrder: NORM_ORDER,
    normOf: normOf,
    heatOf: heatOf,
    urlFor: urlFor,
    categoryUrl: categoryUrl,
    langUrl: langUrl,
    duplicateName: duplicateName,
    categoryCollides: categoryCollides,
    sortList: sortList,
    esc: esc
  };
})(window);
