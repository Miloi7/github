/* ==========================================================================
   REFBENCH · render.js
   全部字符串模板：门户 / 浏览 / 行 / 卡 / 建议 / 抽屉 / popover / sheet
   事件委托由 app.js 统一接管。
   ========================================================================== */
(function (global) {
  'use strict';

  var C = global.CSData;
  var S = global.CSSearch;
  var HL = global.CodeHL;
  var esc = C.esc;

  /* 热门入口只放数据里真实存在的条目 / 可解释的搜索词 */
  var HOT_CHIPS = [
    { q: 'display', label: 'display' },
    { q: 'flex', label: 'flex' },
    { q: 'grid-template-columns', label: 'grid-template-columns' },
    { q: 'map', label: 'map' },
    { q: 'Array.from', label: 'Array.from' },
    { q: 'addEventListener', label: 'addEventListener' },
    { q: 'let', label: 'let' },
    { q: '居中', label: '居中', search: true }
  ];

  var SORT_LABEL = { recommended: '默认', az: 'A–Z', category: '分类', status: '状态' };

  function icon(name, cls) {
    return '<svg class="' + (cls || '') + '" aria-hidden="true" focusable="false"><use href="#i-' + name + '"></use></svg>';
  }

  function pad2(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function langName(lang) {
    return C.langName[lang] || '全部';
  }

  function ext(lang) {
    return lang === 'html' ? 'html' : lang === 'js' ? 'js' : 'css';
  }

  function sameText(a, b) {
    var left = String(a == null ? '' : a).replace(/\s+/g, ' ').trim().toLowerCase();
    var right = String(b == null ? '' : b).replace(/\s+/g, ' ').trim().toLowerCase();
    return !!left && left === right;
  }

  function firstSentence(text) {
    var source = String(text == null ? '' : text).replace(/\s+/g, ' ').trim();
    if (!source) return '';
    var match = source.match(/^[^。！？!?]+[。！？!?]?/);
    return (match ? match[0] : source).trim();
  }

  /* 数据 fallback：JS 的 zh 为空；HTML 仍有 summary === zh 的条目。
     行 / 卡 / 建议面板共用同一套显示字段，避免同一句话占两列。 */
  function displayFields(entry) {
    var name = String(entry.name || '').trim();
    var zh = String(entry.zh || '').trim();
    if (sameText(zh, name)) zh = '';
    var sum = String(entry.summary || '').trim();
    if (!sum || sameText(sum, zh) || sameText(sum, name)) {
      sum = firstSentence(entry.desc);
      if (sameText(sum, zh) || sameText(sum, name)) sum = '';
    }
    return { zh: zh, sum: sum };
  }

  function drawerStatus(entry) {
    if (entry._norm && entry._norm !== 'none') {
      return { label: C.normLabel[entry._norm] || '普通', cls: 'is-' + entry._norm };
    }
    if (entry.statusLabel) {
      return { label: entry.statusLabel, cls: entry._heat === 'hot' ? 'is-hot' : 'is-plain' };
    }
    if (entry._heat === 'hot') return { label: '高频', cls: 'is-hot' };
    if (entry._heat === 'rare') return { label: '少见', cls: 'is-rare' };
    return { label: '普通', cls: 'is-plain' };
  }

  function matchHTML(entry, q, limit) {
    if (!q || !S.matchReason) return '';
    var reason = S.matchReason(entry, q);
    if (!reason) return '';
    var body = reason.token ? S.mark(reason.text, reason.token, limit || 2) : esc(reason.text);
    return '<span class="rb-match"><span class="rb-match__k">匹配：' + esc(reason.label) + '</span> ' + body + '</span>';
  }

  function optCheck(on) {
    return '<span class="rb-opt__check" aria-hidden="true">' + (on ? icon('check') : '') + '</span>';
  }

  /* 只呈现 meta.tags 的 6 个正交标签；不把状态/热度/旧标签伪装成标签 */
  function orthogonalTags(entry) {
    var ids = C.tags.map(function (tag) { return tag.id; });
    return (entry.tags || []).filter(function (tag) { return ids.indexOf(tag) >= 0; });
  }

  /* ── 1. 状态 / 热度 / 语言标记 ─────────────────────────────── */
  function normBadge(entry) {
    var norm = entry._norm;
    /* 产品裁决：standard 沉默；列表 / 卡片 / 详情标签行都不出现「标准」 */
    if (norm === 'none' || norm === 'standard') return '';
    if (norm === 'experimental') {
      return '<span class="rb-badge rb-badge--exp"><span class="rb-badge__dot"></span>实验性</span>';
    }
    if (norm === 'nonstandard') return '<span class="rb-badge rb-badge--nonstd">非标准</span>';
    return '<span class="rb-badge rb-badge--obs">已废弃</span>';
  }

  function heatBadge(entry) {
    return entry._heat === 'hot' ? '<span class="rb-badge rb-badge--hot">高频</span>' : '';
  }

  function heatWord(entry) {
    if (entry._heat === 'hot') return '高频';
    if (entry._heat === 'rare') return '少见';
    return '';
  }

  function rowAria(entry) {
    var d = displayFields(entry);
    return [entry.name, d.zh, d.sum, entry.catName, drawerStatus(entry).label]
      .filter(Boolean).join('，');
  }

  function markCount(html) {
    return (String(html).match(/<mark>/g) || []).length;
  }

  /* 每行命中最多 6 个 mark，按名称 → 中文 → 摘要分配 */
  function markFields(entry, q, budget) {
    var limit = budget || 6;
    var d = displayFields(entry);
    var name = S.mark(entry.name, q, limit);
    var used = markCount(name);
    var zh = S.mark(d.zh, q, Math.max(0, limit - used));
    used += markCount(zh);
    var sum = S.mark(d.sum, q, Math.max(0, limit - used));
    return { name: name, zh: zh, sum: sum, head: used, total: used + markCount(sum), fields: d };
  }

  /* ── 2. 门户 ───────────────────────────────────────────────── */
  function searchBox(opts) {
    var size = opts.size === 'hero' ? ' rb-search--hero' : '';
    var inputId = opts.size === 'hero' ? 'search-hero' : 'search-top';
    var placeholder = opts.placeholder || '搜索属性名 / 中文名 / 标签 / 关键字…';
    return '<div class="rb-search' + size + '" data-search-host="' + opts.size + '">' +
      icon('search', 'rb-search__icon') +
      '<input id="' + inputId + '" class="rb-search__input" type="search" data-search-input="' + opts.size + '"' +
      ' placeholder="' + esc(placeholder) + '" autocomplete="off" spellcheck="false" inputmode="search"' +
      ' role="combobox" aria-expanded="false" aria-controls="suggest" aria-autocomplete="list"' +
      ' aria-label="搜索条目">' +
      '<span class="rb-search__tail">' +
      '<kbd class="rb-kbd" data-kbd>Ctrl K</kbd>' +
      '<button class="rb-search__clear" type="button" data-act="clear-search" aria-label="清除搜索" hidden>' +
      icon('close') + '</button>' +
      '</span></div>';
  }

  function renderPortal(state) {
    var total = C.total;
    var cats = C.totalCategories;
    var standard = C.counts.rawStatus.standard || 0;
    var hot = C.counts.rawStatus.hot || 0;
    var date = C.generatedAt;

    var chips = HOT_CHIPS.map(function (item) {
      return '<button class="rb-chip rb-chip--tag" type="button" data-q="' + esc(item.q) + '">#' + esc(item.label) + '</button>';
    }).join('');

    var langCards = C.languages.map(function (lang) {
      var stat = lang.id === 'html'
        ? '常用 ' + C.langEntries('html').filter(function (e) { return e.status === 'common'; }).length
        : lang.id === 'css'
          ? '实验性 ' + (C.counts.rawStatus.experimental || 0)
          : '高频 ' + (C.counts.rawStatus.hot || 0);
      return '<a class="rb-langcard" data-lang="' + lang.id + '" href="' + C.langUrl(lang.id) + '">' +
        '<span class="rb-langcard__glyph">' + esc(C.langGlyph[lang.id]) + '</span>' +
        '<span class="rb-langcard__head"><span class="rb-langcard__name">' + esc(lang.name) + '</span>' +
        '<span class="rb-langcard__count">' + lang.count + ' 条</span></span>' +
        '<span class="rb-langcard__desc">' + esc(lang.desc) + '</span>' +
        '<span class="rb-langcard__meta">' + lang.categories + ' 分类 · ' + esc(stat) + '</span>' +
        '<span class="rb-langcard__enter">进入 ' + esc(lang.name) + ' 索引 ' + icon('chevron-right') + '</span>' +
        '</a>';
    }).join('');

    var groups = C.langView.map(function (lang) {
      var list = C.categories[lang] || [];
      return '<div class="rb-catgroup">' +
        '<div class="rb-catgroup__head"><span class="rb-catgroup__name">' + esc(langName(lang)) + '</span>' +
        '<span class="rb-catgroup__rule"></span><span class="rb-catgroup__count">' + list.length + ' 个</span></div>' +
        '<div class="rb-catgroup__list">' +
        list.map(function (cat, index) {
          return '<a class="rb-catitem" href="' + C.categoryUrl(lang, cat.id) + '">' +
            '<span class="rb-catitem__no">' + pad2(index + 1) + '</span>' +
            '<span class="rb-catitem__name">' + esc(cat.name) + '</span>' +
            '<span class="rb-catitem__count">' + cat.count + '</span></a>';
        }).join('') +
        '</div></div>';
    }).join('');

    return '<div class="rb-portal">' +
      '<section class="rb-cover" aria-labelledby="portal-title">' +
      '<p class="rb-cover__spec rb-micro">SPEC 00 · FRONTEND CHEATSHEET · ' + total + ' ENTRIES</p>' +
      '<h1 id="portal-title">前端速查大全</h1>' +
      '<p class="rb-cover__sub">把 HTML / CSS / JavaScript 三套速查合成一个索引，双击即用。</p>' +
      '<div class="rb-cover__search">' + searchBox({ size: 'hero' }) + '</div>' +
      '<div class="rb-cover__chips" aria-label="热门入口">' + chips + '</div>' +
      '</section>' +

      '<section class="rb-metrics" aria-label="数据读数">' +
      '<div class="rb-metric rb-metric--lead"><div class="rb-metric__num">' + total + '</div><div class="rb-metric__label">条目总量</div></div>' +
      '<div class="rb-metric"><div class="rb-metric__num">' + cats + '</div><div class="rb-metric__label">分类索引</div></div>' +
      '<div class="rb-metric"><div class="rb-metric__num">3</div><div class="rb-metric__label">HTML / CSS / JS</div></div>' +
      '<div class="rb-metric"><div class="rb-metric__num">' + standard + '</div><div class="rb-metric__label">标准条目</div></div>' +
      '<div class="rb-metric"><div class="rb-metric__num">' + hot + '</div><div class="rb-metric__label">高频标记</div></div>' +
      '<div class="rb-metric"><div class="rb-metric__num rb-metrics__date">' + esc(date) + '</div><div class="rb-metric__label">数据更新</div></div>' +
      '</section>' +

      '<section aria-labelledby="langs-title">' +
      '<h2 id="langs-title" class="sr-only">语种索引</h2>' +
      '<div class="rb-langs">' + langCards + '</div></section>' +

      '<section class="rb-catindex' + (state.catsCollapsed ? ' is-collapsed' : '') + '" aria-labelledby="cats-title">' +
      '<div class="rb-catindex__head">' +
      '<h2 class="rb-catindex__title" id="cats-title">分类索引' +
      '<span class="rb-catindex__sub">跨语言 ' + cats + ' 个分类</span></h2>' +
      '<button class="rb-catindex__toggle" type="button" data-act="toggle-cats" aria-expanded="' + (state.catsCollapsed ? 'false' : 'true') + '">' +
      (state.catsCollapsed ? '展开全部' : '收起全部') + '</button>' +
      '</div>' + groups + '</section>' +
      '</div>';
  }

  /* ── 3. 浏览页骨架 ─────────────────────────────────────────── */
  function tabs(state) {
    var items = [{ id: 'all', label: '全部', count: C.total }].concat(C.languages.map(function (l) {
      return { id: l.id, label: l.name === 'JavaScript' ? 'JS' : l.name, count: l.count };
    }));
    return '<div class="rb-tabs" role="tablist" aria-label="语种">' +
      items.map(function (item) {
        var on = (state.lang || 'all') === item.id;
        return '<button class="rb-tab' + (on ? ' is-active' : '') + '" type="button" role="tab" id="tab-' + item.id + '"' +
          ' aria-selected="' + (on ? 'true' : 'false') + '" aria-controls="panel" tabindex="' + (on ? '0' : '-1') + '"' +
          ' data-lang-tab="' + item.id + '">' + esc(item.label) +
          '<span class="rb-tab__count">' + item.count + '</span></button>';
      }).join('') + '</div>';
  }

  function toolbar(state) {
    var filterCount = (state.filters.status !== 'all' ? 1 : 0) +
      (state.filters.heat !== 'all' ? 1 : 0) + state.filters.tags.length;
    return '<div class="rb-toolbar" id="toolbar">' + tabs(state) +
      '<div class="rb-tools">' +
      '<button class="rb-toolbtn' + (state.filters.status !== 'all' ? ' is-on' : '') + '" type="button" data-pop="status" aria-haspopup="listbox" aria-expanded="false">状态' + icon('chevron-down') + '</button>' +
      '<button class="rb-toolbtn' + (state.filters.heat !== 'all' ? ' is-on' : '') + '" type="button" data-pop="heat" aria-haspopup="listbox" aria-expanded="false">热度' + icon('chevron-down') + '</button>' +
      '<button class="rb-toolbtn' + (state.filters.tags.length ? ' is-on' : '') + '" type="button" data-pop="tag" aria-haspopup="dialog" aria-expanded="false">标签' + icon('chevron-down') + '</button>' +
      '<button class="rb-toolbtn' + (state.sort !== 'recommended' ? ' is-on' : '') + '" type="button" data-pop="sort" aria-haspopup="listbox" aria-expanded="false">排序' + icon('chevron-down') + '</button>' +
      '<div class="rb-seg" role="group" aria-label="视图">' +
      '<button class="rb-iconbtn' + (state.view === 'row' ? ' is-on' : '') + '" type="button" data-act="view" data-view="row" aria-label="行视图" aria-pressed="' + (state.view === 'row') + '">' + icon('rows') + '</button>' +
      '<button class="rb-iconbtn' + (state.view === 'card' ? ' is-on' : '') + '" type="button" data-act="view" data-view="card" aria-label="卡片视图" aria-pressed="' + (state.view === 'card') + '">' + icon('grid') + '</button>' +
      '</div></div></div>' +
      '<span class="sr-only" data-filter-count="' + filterCount + '"></span>';
  }

  function filterChips(state) {
    var chips = [];
    if (state.filters.status !== 'all') {
      var label = C.normLabel[state.filters.status] || state.filters.status;
      chips.push('<button class="rb-chip is-on" type="button" data-act="remove-status" aria-label="移除筛选：' + esc(label) + '">' +
        esc(label) + '<span class="rb-chip__x" aria-hidden="true">' + icon('close') + '</span></button>');
    }
    if (state.filters.heat !== 'all') {
      var heatLabel = state.filters.heat === 'hot' ? '高频' : '少见';
      chips.push('<button class="rb-chip is-on" type="button" data-act="remove-heat" aria-label="移除筛选：' + heatLabel + '">' +
        heatLabel + '<span class="rb-chip__x" aria-hidden="true">' + icon('close') + '</span></button>');
    }
    state.filters.tags.forEach(function (tag) {
      chips.push('<button class="rb-chip is-on" type="button" data-act="remove-tag" data-tag="' + esc(tag) + '" aria-label="移除筛选：' + esc(tag) + '">' +
        esc(tag) + '<span class="rb-chip__x" aria-hidden="true">' + icon('close') + '</span></button>');
    });
    return chips.join('');
  }

  function filterbar(state) {
    var on = state.filters.status !== 'all' || state.filters.heat !== 'all' || state.filters.tags.length > 0;
    return '<div class="rb-filterbar" id="filterbar"' + (on ? '' : ' hidden') + '>' +
      '<span class="rb-filterbar__prefix">已选</span>' + filterChips(state) +
      (on ? '<button class="rb-filterbar__clear" type="button" data-act="clear-filters">清除全部</button>' : '') +
      '</div>';
  }

  function sidebar(state) {
    var groups = C.langView.map(function (lang) {
      var list = C.categories[lang] || [];
      var open = !!(state.groups && state.groups[lang]);
      var activeLang = state.lang === lang && !state.cat;
      return '<div class="rb-group' + (open ? ' is-open' : '') + '" data-group="' + lang + '">' +
        '<div class="rb-group__head">' +
        '<button class="rb-group__toggle" type="button" data-act="toggle-group" data-group="' + lang + '"' +
        ' aria-expanded="' + open + '" aria-controls="grp-' + lang + '" aria-label="展开或收起 ' + esc(langName(lang)) + ' 分类">' +
        icon('chevron-right') + '</button>' +
        '<a class="rb-group__link' + (activeLang ? ' is-active' : '') + '" href="' + C.langUrl(lang) + '">' +
        '<span class="rb-group__name">' + esc(langName(lang)) + '</span>' +
        '<span class="rb-group__count">' + C.counts.byLang[lang] + '</span></a>' +
        '</div>' +
        '<ul class="rb-group__list" id="grp-' + lang + '">' +
        list.map(function (cat, index) {
          var active = state.lang === lang && state.cat === cat.id;
          return '<li><a class="rb-sidebar__item' + (active ? ' is-active' : '') + '" href="' + C.categoryUrl(lang, cat.id) + '"' +
            (active ? ' aria-current="page"' : '') + '>' +
            '<span class="rb-sidebar__no">' + pad2(index + 1) + '</span>' +
            '<span class="rb-sidebar__name">' + esc(cat.name) + '</span>' +
            '<span class="rb-sidebar__count">' + cat.count + '</span></a></li>';
        }).join('') +
        '</ul></div>';
    }).join('');

    return '<nav class="rb-sidebar" aria-label="分类导航">' +
      '<div class="rb-sidebar__head"><span>语种 / 分类</span><b>' + C.totalCategories + '</b></div>' +
      '<a class="rb-sidebar__all' + (state.lang === 'all' && !state.cat ? ' is-active' : '') + '" href="#/all"' +
      (state.lang === 'all' && !state.cat ? ' aria-current="page"' : '') + '>全部<span>' + C.total + '</span></a>' +
      groups + '</nav>';
  }

  function catStrip(state) {
    if (state.cat) {
      var current = C.category(state.lang, state.cat);
      if (current) {
        return '<div class="rb-catstrip" aria-label="分类快速导航">' +
          '<a class="rb-chip rb-chip--sm" href="' + C.langUrl(state.lang) + '">全部 ' + esc(langName(state.lang)) + '</a>' +
          (C.categories[state.lang] || []).map(function (cat) {
            return '<a class="rb-chip rb-chip--sm' + (cat.id === state.cat ? ' is-on' : '') + '" href="' + C.categoryUrl(state.lang, cat.id) + '"' +
              (cat.id === state.cat ? ' aria-current="page"' : '') + '>' + esc(cat.name) + ' <span class="rb-num">' + cat.count + '</span></a>';
          }).join('') + '</div>';
      }
    }
    if (state.lang === 'all') {
      return '<div class="rb-catstrip" aria-label="语种快速导航">' + C.languages.map(function (lang) {
        return '<a class="rb-chip rb-chip--sm" href="' + C.langUrl(lang.id) + '">' + esc(lang.name) + ' <span class="rb-num">' + lang.count + '</span></a>';
      }).join('') + '</div>';
    }
    return '<div class="rb-catstrip" aria-label="分类快速导航">' +
      '<a class="rb-chip rb-chip--sm" href="' + C.langUrl(state.lang) + '">全部 ' + esc(langName(state.lang)) + '</a>' +
      (C.categories[state.lang] || []).map(function (cat) {
        return '<a class="rb-chip rb-chip--sm' + (cat.id === state.cat ? ' is-on' : '') + '" href="' + C.categoryUrl(state.lang, cat.id) + '">' +
          esc(cat.name) + ' <span class="rb-num">' + cat.count + '</span></a>';
      }).join('') + '</div>';
  }

  function scopeTitle(state) {
    if (state.q) return '搜索结果';
    if (state.cat) {
      var cat = C.category(state.lang, state.cat);
      return cat ? cat.name : '分类';
    }
    if (state.lang === 'all') return '全部条目';
    return langName(state.lang) + ' 索引';
  }

  function listHead(state) {
    var meta = [];
    var filterCount = (state.filters.status !== 'all' ? 1 : 0) +
      (state.filters.heat !== 'all' ? 1 : 0) + state.filters.tags.length;
    if (filterCount) meta.push(filterCount + ' 项筛选');
    if (state.q) meta.push('关键词「' + state.q + '」');
    meta.push('排序 ' + (state.q && state.sort === 'recommended' ? '相关度' : (SORT_LABEL[state.sort] || '默认')));
    return '<div class="rb-listhead" id="listhead">' +
      '<span class="rb-listhead__title" id="listTitle">' + esc(scopeTitle(state)) + '</span>' +
      '<span class="rb-listhead__dot" aria-hidden="true">·</span>' +
      '<span class="rb-listhead__count" id="listCount">' + state.list.length + ' 条</span>' +
      '<span class="rb-listhead__meta" id="listMeta">' + esc(meta.join(' · ')) + '</span>' +
      '<span class="rb-listhead__mobiletools">' +
      '<button class="rb-mob-tool' + (filterCount ? ' is-on' : '') + '" type="button" data-act="open-sheet">' + icon('filter') + '筛选</button>' +
      '<button class="rb-mob-tool" type="button" data-act="open-sheet" data-sheet="sort">' + icon('sort') + '排序</button>' +
      '</span></div>';
  }

  /* ── 4. 行 / 卡 / 列表 ─────────────────────────────────────── */
  function row(entry, q) {
    var marks = markFields(entry, q, 6);
    var obsolete = entry._norm === 'obsolete' || entry._norm === 'deprecated';
    var nameHtml = obsolete ? '<span class="rb-strike">' + marks.name + '</span>' : marks.name;
    /* 移动端不显示摘要列，所以只在名称/中文有 mark 时才算「可见命中」 */
    var why = q && !marks.head ? matchHTML(entry, q, 2) : '';
    var cls = 'rb-row' +
      (entry._heat === 'hot' ? ' is-hot' : '') +
      (entry._heat === 'rare' ? ' is-rare' : '') +
      (entry._norm === 'obsolete' || entry._norm === 'deprecated' ? ' is-obsolete' : '') +
      (!marks.fields.zh ? ' no-zh' : '') +
      (!marks.fields.sum ? ' no-sum' : '') +
      (why ? ' has-why' : '');
    return '<li class="' + cls + '" data-id="' + esc(entry.id) + '" data-lang="' + entry.lang + '">' +
      '<a class="rb-row__link" href="' + C.urlFor(entry) + '" data-id="' + esc(entry.id) + '" aria-label="' + esc(rowAria(entry)) + '">' +
      '<span class="rb-row__name" title="' + esc(entry.name) + '">' + nameHtml + '</span>' +
      (marks.fields.zh ? '<span class="rb-row__zh" title="' + esc(marks.fields.zh) + '">' + marks.zh + '</span>' : '') +
      (marks.fields.sum ? '<span class="rb-row__sum" title="' + esc(marks.fields.sum) + '">' + marks.sum + '</span>' : '') +
      (why ? '<span class="rb-row__why">' + why + '</span>' : '') +
      '<span class="rb-row__cat"><span class="rb-dot" aria-hidden="true"></span>' + esc(entry.catName) + '</span>' +
      '<span class="rb-row__status">' + heatBadge(entry) + normBadge(entry) + '</span>' +
      '</a></li>';
  }

  function card(entry, q) {
    var marks = markFields(entry, q, 6);
    var obsolete = entry._norm === 'obsolete' || entry._norm === 'deprecated';
    var nameHtml = obsolete ? '<span class="rb-strike">' + marks.name + '</span>' : marks.name;
    var why = q && !marks.total ? matchHTML(entry, q, 2) : '';
    var cls = 'rb-card' +
      (entry._heat === 'hot' ? ' is-hot' : '') +
      (entry._heat === 'rare' ? ' is-rare' : '') +
      (entry._norm === 'obsolete' || entry._norm === 'deprecated' ? ' is-obsolete' : '');
    return '<div role="listitem"><a class="' + cls + '" data-lang="' + entry.lang + '" href="' + C.urlFor(entry) + '" data-id="' + esc(entry.id) + '" aria-label="' + esc(rowAria(entry)) + '">' +
      '<span class="rb-card__name" title="' + esc(entry.name) + '">' + nameHtml + '</span>' +
      (marks.fields.zh ? '<span class="rb-card__zh" title="' + esc(marks.fields.zh) + '">' + marks.zh + '</span>' : '') +
      (why || marks.fields.sum
        ? '<span class="rb-card__sum' + (why ? ' rb-card__sum--why' : '') + '"' + (why ? '' : ' title="' + esc(marks.fields.sum) + '"') + '>' + (why || marks.sum) + '</span>'
        : '') +
      '<span class="rb-card__meta">' +
      '<span class="rb-langmark">' + esc(C.langMark[entry.lang]) + '</span>' +
      '<span class="rb-card__cat">' + esc(entry.catName) + '</span>' +
      '<span class="rb-card__badges">' + heatBadge(entry) + normBadge(entry) + '</span>' +
      '</span></a></div>';
  }

  function emptyState(kind, state) {
    if (kind === 'data') {
      return '<div class="rb-empty">' +
        '<div class="rb-empty__num">!</div>' +
        '<h2 class="rb-empty__title">数据未加载</h2>' +
        '<p class="rb-empty__desc">请确认 data/ 文件夹与 index.html 在同一目录，然后用 Chrome 或 Edge 打开。</p>' +
        '<ul class="rb-empty__reasons">' +
        '<li>文件被压缩包直接打开，data/ 尚未解压</li>' +
        '<li>分片文件缺失或被重命名，实际 ' + C.load.actual + ' / 预期 ' + C.load.expected + ' 条</li>' +
        '<li>浏览器阻止了本地脚本（请换用 Chrome / Edge）</li></ul>' +
        '<div class="rb-empty__actions">' +
        '<button class="rb-btn rb-btn--primary" type="button" data-act="reload">重新加载</button>' +
        '<button class="rb-btn" type="button" data-act="help">查看帮助</button>' +
        '</div></div>';
    }
    if (kind === 'search') {
      var near = S.near(state.q, C.all(), 3);
      var nearHtml = near.length
        ? '<p class="rb-empty__near">相近条目 ' + near.map(function (e) {
          return '<a href="' + C.urlFor(e) + '">' + esc(e.name) + '</a>';
        }).join('<span class="rb-empty__sep">·</span>') + '</p>'
        : '';
      return '<div class="rb-empty">' +
        '<div class="rb-empty__num">0</div>' +
        '<h2 class="rb-empty__title">没有匹配「' + esc(state.q) + '」的条目</h2>' +
        '<p class="rb-empty__desc">试试：去掉部分字符，或按分类浏览。</p>' +
        '<div class="rb-empty__actions">' +
        '<button class="rb-btn rb-btn--primary" type="button" data-act="clear-all">查看全部 ' + C.total + ' 条</button>' +
        '<button class="rb-btn" type="button" data-act="clear-search">清空搜索</button>' +
        '</div>' + nearHtml + '</div>';
    }
    var hasFilters = state.filters.status !== 'all' || state.filters.heat !== 'all' || state.filters.tags.length > 0;
    return '<div class="rb-empty">' +
      '<div class="rb-empty__num">0</div>' +
      '<h2 class="rb-empty__title">当前筛选没有条目</h2>' +
      '<p class="rb-empty__desc">组合过窄，试试放宽条件。</p>' +
      (hasFilters ? '<div class="rb-empty__actions"><button class="rb-btn rb-btn--primary" type="button" data-act="clear-filters">清除全部筛选</button></div>' : '') +
      (hasFilters ? '<div class="rb-empty__chips">' + filterChips(state) + '</div>' : '') +
      '</div>';
  }

  function renderListInner(state) {
    if (!C.load.complete && !state.list.length) return emptyState('data', state);
    if (!state.list.length) {
      if (state.q) return emptyState('search', state);
      return emptyState('filter', state);
    }
    var body;
    if (state.view === 'card') {
      body = '<div class="rb-cards" role="list">' + state.list.map(function (e) { return card(e, state.q); }).join('') + '</div>';
    } else {
      body = '<ul class="rb-rows" role="list">' + state.list.map(function (e) { return row(e, state.q); }).join('') + '</ul>';
    }
    if (state.truncated) {
      body += '<div class="rb-listnote">已显示前 ' + state.list.length + ' 条，请细化关键词。</div>';
    }
    return body;
  }

  function renderBrowse(state) {
    var isSearch = state.mode === 'search';
    return '<div class="rb-browse">' +
      '<h1 class="sr-only">前端速查大全 · 浏览</h1>' +
      toolbar(state) +
      filterbar(state) +
      '<div class="rb-body' + (isSearch ? ' rb-body--search' : '') + '">' +
      (isSearch ? '' : sidebar(state)) +
      '<section class="rb-content" id="panel" role="tabpanel" aria-labelledby="tab-' + (state.lang || 'all') + '">' +
      (isSearch ? '' : catStrip(state)) +
      listHead(state) +
      '<p class="sr-only" role="status" aria-live="polite" id="resultStatus">' + state.list.length + ' 条结果</p>' +
      '<div class="rb-list" id="list">' + renderListInner(state) + '</div>' +
      '</section></div></div>';
  }

  /* ── 5. 搜索建议 ───────────────────────────────────────────── */
  var HOT_SUGGEST = [
    { id: 'css:display', q: 'display' },
    { id: 'css:flex', q: 'flex' },
    { id: 'css:grid-template-columns', q: 'grid-template-columns' },
    { id: 'js:array:map', q: 'map' },
    { id: 'js:array:Array.from', q: 'Array.from' },
    { id: 'js:dom:addEventListener', q: 'addEventListener' },
    { id: 'js:variables:let', q: 'let' },
    { q: '居中', search: true }
  ];

  function renderSuggest(state) {
    var q = state.q || '';
    var results = state.suggestions || [];
    var total = state.suggestTotal || results.length;
    var active = typeof state.suggestActive === 'number' ? state.suggestActive : -1;

    if (!q) {
      var chips = HOT_SUGGEST.map(function (item) {
        return '<button class="rb-chip rb-chip--sm" type="button" data-q="' + esc(item.q) + '"' +
          (item.search ? ' title="搜索：' + esc(item.q) + '"' : '') + '>' + esc(item.q) + '</button>';
      }).join('');
      var recents = (state.recent || []).slice(0, 5);
      var recentHtml = recents.length ? '<div class="rb-suggest__section">最近搜索</div><div class="rb-suggest__chips">' +
        recents.map(function (value) {
          return '<span class="rb-suggest__recentchip">' +
            '<button class="rb-chip rb-chip--sm rb-chip--ghost" type="button" data-q="' + esc(value) + '">' + esc(value) + '</button>' +
            '<button class="rb-search__clear" type="button" data-act="del-recent" data-value="' + esc(value) + '" aria-label="删除最近搜索：' + esc(value) + '">' + icon('close') + '</button>' +
            '</span>';
        }).join('') + '</div>' : '';
      return '<div class="rb-suggest__head"><span>搜索 ' + C.total + ' 条</span><span>输入即搜</span></div>' +
        '<div class="rb-suggest__list" role="group" aria-label="最近搜索与热门入口">' + recentHtml +
        '<div class="rb-suggest__section">热门入口</div><div class="rb-suggest__chips">' + chips + '</div>' +
        '</div><div class="rb-suggest__foot"><span>↑↓ 选择 · ↵ 打开 · Esc 关闭</span><span>输入关键字开始</span></div>';
    }

    var rows = results.slice(0, 8).map(function (entry, index) {
      var on = index === active;
      var fields = displayFields(entry);
      var nameMark = S.mark(entry.name, q, 4);
      var subRaw = fields.zh || fields.sum || entry.catName;
      var zhMark = S.mark(subRaw, q, 2);
      var visible = markCount(nameMark) + markCount(zhMark);
      if (!visible) {
        var reason = matchHTML(entry, q, 2);
        if (reason) zhMark = reason;
      }
      return '<a class="rb-suggest__row' + (on ? ' is-active' : '') + '" role="option" id="sug-' + index + '"' +
        ' aria-selected="' + (on ? 'true' : 'false') + '" data-id="' + esc(entry.id) + '" data-url="' + C.urlFor(entry) + '"' +
        ' data-lang="' + entry.lang + '">' +
        '<span class="rb-langmark" aria-hidden="true">' + esc(C.langMark[entry.lang]) + '</span>' +
        '<span class="rb-suggest__name" title="' + esc(entry.name) + '">' + nameMark + '</span>' +
        '<span class="rb-suggest__zh" title="' + esc(subRaw) + '">' + zhMark + '</span>' +
        '<span class="rb-suggest__cat">' + esc(entry.catName) + '</span></a>';
    }).join('');

    if (!results.length) {
      rows = '<div class="rb-suggest__empty">没有匹配项 · 试试 display / 居中 / flex</div>';
    }

    var head = total + ' 条结果 · 按相关度';
    return '<div class="rb-suggest__head"><span><b>' + head + '</b></span><span>↑↓ 选择</span></div>' +
      '<div class="rb-suggest__list" role="listbox" aria-label="搜索结果">' + rows + '</div>' +
      '<div class="rb-suggest__foot"><span>↑↓ 移动 · ↵ 打开 · Tab 补全 · Esc 关闭</span>' +
      (results.length ? '<button class="rb-tagbtn" type="button" data-act="suggest-all">查看全部 ' + total + ' 条 →</button>' : '<span>换一个关键词</span>') +
      '</div>';
  }

  /* ── 6. popover / 底部 sheet ───────────────────────────────── */
  function check(on) {
    return '<span class="rb-pop__check" aria-hidden="true">' + (on ? icon('check') : '') + '</span>';
  }

  function renderPopover(kind, state) {
    if (kind === 'status') {
      var norms = [
        { id: 'all', label: '全部', count: C.total },
        { id: 'standard', label: '标准', count: C.counts.byNorm.standard },
        { id: 'experimental', label: '实验性', count: C.counts.byNorm.experimental },
        { id: 'nonstandard', label: '非标准', count: C.counts.byNorm.nonstandard },
        { id: 'obsolete', label: '已废弃', count: (C.counts.byNorm.obsolete || 0) + (C.counts.byNorm.deprecated || 0) }
      ];
      return '<div class="rb-pop__title" role="presentation">规范状态<span>筛选</span></div>' +
        norms.map(function (item) {
          var on = state.filters.status === item.id;
          return '<button class="rb-pop__item' + (on ? ' is-on' : '') + '" type="button" role="option" aria-selected="' + on + '" data-status="' + item.id + '">' +
            check(on) + esc(item.label) + '<span class="rb-pop__count">' + item.count + '</span></button>';
        }).join('');
    }
    if (kind === 'heat') {
      var heats = [
        { id: 'all', label: '全部', count: C.total },
        { id: 'hot', label: '高频', count: C.counts.byHeat.hot },
        { id: 'rare', label: '少见', count: C.counts.byHeat.rare }
      ];
      return '<div class="rb-pop__title" role="presentation">热度<span>筛选</span></div>' +
        '<p class="rb-heatlegend"><span class="rb-heat" aria-hidden="true"></span>高频 <span class="rb-heat rb-heat--rare" aria-hidden="true"></span>少见</p>' +
        heats.map(function (item) {
          var on = state.filters.heat === item.id;
          return '<button class="rb-pop__item' + (on ? ' is-on' : '') + '" type="button" role="option" aria-selected="' + on + '" data-heat="' + item.id + '">' +
            check(on) + esc(item.label) + '<span class="rb-pop__count">' + item.count + '</span></button>';
        }).join('');
    }
    if (kind === 'sort') {
      var sorts = ['recommended', 'az', 'category', 'status'];
      return '<div class="rb-pop__title" role="presentation">排序<span>单选</span></div>' +
        sorts.map(function (id) {
          var on = state.sort === id;
          return '<button class="rb-pop__item' + (on ? ' is-on' : '') + '" type="button" role="option" aria-selected="' + on + '" data-sort="' + id + '">' +
            check(on) + esc(SORT_LABEL[id]) + '</button>';
        }).join('');
    }
    if (kind === 'tag') {
      return '<div class="rb-pop__title" role="presentation">标签<span>' + C.tags.length + ' 种</span></div>' +
        '<div class="rb-pop__grid">' +
        C.tags.map(function (tag) {
          var on = state.filters.tags.indexOf(tag.id) >= 0;
          return '<button class="rb-pop__item' + (on ? ' is-on' : '') + '" type="button" aria-pressed="' + on + '" data-tag="' + esc(tag.id) + '">' +
            check(on) + esc(tag.id) + '<span class="rb-pop__count">' + tag.count + '</span></button>';
        }).join('') + '</div>' +
        '<div class="rb-pop__foot"><button type="button" data-act="clear-tags">清除</button><button type="button" data-act="close-pop">完成</button></div>';
    }
    if (kind === 'data') {
      return '<div class="rb-pop__title" role="presentation">数据说明<span>离线</span></div>' +
        '<div class="rb-datapop">' +
        '<div class="rb-datapop__row"><span>条目</span><b>' + C.total + ' 条 · ' + C.totalCategories + ' 分类 · ' + C.languages.length + ' 语种</b></div>' +
        '<div class="rb-datapop__row"><span>来源</span><b>MDN / W3C · ' + esc(C.generatedAt) + '</b></div>' +
        '<div class="rb-datapop__row"><span>运行</span><b>完全离线 · file:// · 0 外部请求</b></div>' +
        '</div>' +
        '<div class="rb-pop__foot"><span>键盘操作按 ?</span><button type="button" data-act="close-pop">关闭</button></div>';
    }
    return '';
  }

  function renderEntryTags(entry) {
    if (!entry) return '';
    function group(title, list) {
      var chips = (list && list.length)
        ? list.map(function (item) { return '<span class="rb-tagchip">' + esc(item) + '</span>'; }).join('')
        : '<span class="rb-entrytags__empty">—</span>';
      return '<div class="rb-entrytags__group"><div class="rb-entrytags__k">' + esc(title) + '</div>' +
        '<div class="rb-entrytags__list">' + chips + '</div></div>';
    }
    return '<div class="rb-pop__title" role="presentation">条目信息<span>' + esc(entry.name) + '</span></div>' +
      group('标签', orthogonalTags(entry)) +
      group('关键词', entry.keywords) +
      group('别名', entry.aliases) +
      '<div class="rb-pop__foot"><span>Esc 关闭</span><button type="button" data-act="close-pop">关闭</button></div>';
  }

  function renderSheet(state) {
    var pending = state.pending || {
      status: state.filters.status,
      heat: state.filters.heat,
      tags: state.filters.tags.slice(),
      sort: state.sort,
      cat: state.cat
    };
    var statuses = [
      { id: 'all', label: '全部', count: C.total },
      { id: 'standard', label: '标准', count: C.counts.byNorm.standard },
      { id: 'experimental', label: '实验性', count: C.counts.byNorm.experimental },
      { id: 'nonstandard', label: '非标准', count: C.counts.byNorm.nonstandard },
      { id: 'obsolete', label: '已废弃', count: (C.counts.byNorm.obsolete || 0) + (C.counts.byNorm.deprecated || 0) }
    ];
    var statusHtml = '<div class="rb-optgrid rb-optgrid--3">' + statuses.map(function (s) {
      var on = pending.status === s.id;
      return '<button class="rb-opt' + (on ? ' is-on' : '') + '" type="button" data-sheet="status" data-value="' + s.id + '" aria-pressed="' + on + '">' +
        optCheck(on) + esc(s.label) + '<span class="rb-opt__count">' + s.count + '</span></button>';
    }).join('') + '</div>';

    var heats = [
      { id: 'all', label: '全部', count: C.total },
      { id: 'hot', label: '高频', count: C.counts.byHeat.hot },
      { id: 'rare', label: '少见', count: C.counts.byHeat.rare }
    ];
    var heatHtml = '<div class="rb-optgrid rb-optgrid--3">' + heats.map(function (h) {
      var on = pending.heat === h.id;
      return '<button class="rb-opt' + (on ? ' is-on' : '') + '" type="button" data-sheet="heat" data-value="' + h.id + '" aria-pressed="' + on + '">' +
        optCheck(on) + esc(h.label) + '<span class="rb-opt__count">' + h.count + '</span></button>';
    }).join('') + '</div>';

    var tagHtml = '<div class="rb-optgrid">' + C.tags.map(function (tag) {
      var on = pending.tags.indexOf(tag.id) >= 0;
      return '<button class="rb-opt' + (on ? ' is-on' : '') + '" type="button" data-sheet="tag" data-value="' + esc(tag.id) + '" aria-pressed="' + on + '">' +
        optCheck(on) + esc(tag.id) + '<span class="rb-opt__count">' + tag.count + '</span></button>';
    }).join('') + '</div>';

    var catHtml = '';
    if (state.lang && state.lang !== 'all') {
      var cats = C.categories[state.lang] || [];
      catHtml = '<div class="rb-fieldset"><div class="rb-fieldset__title">分类</div><div class="rb-optgrid rb-optgrid--3">' +
        '<button class="rb-opt' + (!pending.cat ? ' is-on' : '') + '" type="button" data-sheet="cat" data-value="" aria-pressed="' + (!pending.cat) + '">' +
        '全部 ' + esc(langName(state.lang)) + '</button>' +
        cats.map(function (cat) {
          var on = pending.cat === cat.id;
          return '<button class="rb-opt' + (on ? ' is-on' : '') + '" type="button" data-sheet="cat" data-value="' + cat.id + '" aria-pressed="' + on + '">' +
            esc(cat.name) + '<span class="rb-opt__count">' + cat.count + '</span></button>';
        }).join('') + '</div></div>';
    }

    var sortHtml = '<div class="rb-optgrid">' + ['recommended', 'az', 'category', 'status'].map(function (id) {
      var on = pending.sort === id;
      return '<button class="rb-opt' + (on ? ' is-on' : '') + '" type="button" data-sheet="sort" data-value="' + id + '" aria-pressed="' + on + '">' +
        esc(SORT_LABEL[id]) + '</button>';
    }).join('') + '</div>';

    return '<div class="rb-sheet__grab" aria-hidden="true"></div>' +
      '<div class="rb-sheet__head"><h2 class="rb-sheet__title" id="sheet-title">筛选</h2>' +
      '<button class="rb-iconbtn rb-iconbtn--sm" type="button" data-act="close-sheet" aria-label="关闭筛选">' + icon('close') + '</button></div>' +
      '<div class="rb-sheet__body">' +
      catHtml +
      '<div class="rb-fieldset"><div class="rb-fieldset__title">规范状态</div>' + statusHtml + '</div>' +
      '<div class="rb-fieldset"><div class="rb-fieldset__title">热度</div>' + heatHtml + '</div>' +
      '<div class="rb-fieldset"><div class="rb-fieldset__title">标签</div>' + tagHtml + '</div>' +
      '<div class="rb-fieldset"><div class="rb-fieldset__title">排序</div>' + sortHtml + '</div>' +
      '</div>' +
      '<div class="rb-sheet__foot">' +
      '<button class="rb-sheet__reset" type="button" data-act="sheet-reset">重置</button>' +
      '<button class="rb-btn rb-btn--primary rb-sheet__apply" type="button" data-act="sheet-apply">应用' +
      (typeof state.sheetCount === 'number' ? ' ' + state.sheetCount + ' 条' : '') + '</button>' +
      '</div>';
  }

  function renderShortcuts() {
    function kbd(text) { return '<kbd class="rb-kbd">' + esc(text) + '</kbd>'; }
    function row(keys, label, note) {
      return '<div class="rb-keys__row"><span>' + esc(label) + (note ? ' <em>' + esc(note) + '</em>' : '') + '</span><span>' + keys + '</span></div>';
    }
    return '<div class="rb-modal__head"><h2 id="help-title">键盘操作</h2>' +
      '<button class="rb-iconbtn rb-iconbtn--sm" type="button" data-act="close-help" aria-label="关闭键盘操作">' + icon('close') + '</button></div>' +
      '<div class="rb-keys">' +
      '<div class="rb-keys__group"><div class="rb-keys__title">全局</div>' +
      row(kbd('/') + kbd('Ctrl K'), '聚焦搜索') +
      row(kbd('1') + kbd('2') + kbd('3'), '切换到 HTML / CSS / JS') +
      row(kbd('0'), '切换到全部') +
      row(kbd('t'), '循环主题') +
      row(kbd('?'), '打开本面板') +
      row(kbd('g') + kbd('h'), '回首页', '1 秒内') +
      row(kbd('Esc'), '逐层关闭面板 / 抽屉 / 搜索') +
      '</div>' +
      '<div class="rb-keys__group"><div class="rb-keys__title">列表</div>' +
      row(kbd('↑') + kbd('↓') + kbd('j') + kbd('k'), '移动虚拟光标') +
      row(kbd('Enter'), '打开详情') +
      row(kbd('Home') + kbd('End'), '列表首 / 尾') +
      row(kbd('PageUp') + kbd('PageDown'), '翻页') +
      '</div>' +
      '<div class="rb-keys__group"><div class="rb-keys__title">搜索框</div>' +
      row(kbd('↑') + kbd('↓'), '移动建议高亮') +
      row(kbd('Enter'), '打开高亮项') +
      row(kbd('Tab'), '补全当前建议') +
      row(kbd('Ctrl Enter'), '查看全部结果') +
      '</div>' +
      '<div class="rb-keys__group"><div class="rb-keys__title">详情抽屉</div>' +
      row(kbd('[') + kbd(']'), '上一条 / 下一条') +
      row(kbd('c'), '复制示例代码') +
      row(kbd('m'), '打开 MDN') +
      row(kbd('Tab'), '焦点在抽屉内循环') +
      '</div></div>';
  }

  /* ── 7. 抽屉 ───────────────────────────────────────────────── */
  function codeBlock(code, lang, label, kind, extra, copyLabel) {
    var lines = String(code).split('\n').length;
    var gutter = '';
    for (var i = 1; i <= lines; i++) gutter += (i > 1 ? '<br>' : '') + i;
    return '<div class="rb-code ' + (extra || '') + '">' +
      '<div class="rb-code__bar">' +
      '<span class="rb-code__file">' + esc(label) + '</span>' +
      '<span class="rb-code__count">' + String(code).length + ' 字符</span>' +
      '<span class="rb-code__hint" aria-hidden="true">↔ 可横滚</span>' +
      '<button class="rb-code__btn" type="button" data-act="copy" data-copy="' + kind + '" aria-label="' + esc(copyLabel) + '">' + icon('copy') + '</button>' +
      '</div>' +
      '<div class="rb-code__scroll" tabindex="0"><div class="rb-code__body">' +
      '<span class="rb-code__gutter" aria-hidden="true">' + gutter + '</span>' +
      '<pre class="rb-code__pre"><code>' + HL.highlight(code, lang) + '</code></pre>' +
      '</div></div><span class="rb-code__fade" aria-hidden="true"></span></div>';
  }

  function valuesHTML(values) {
    return '<div class="rb-values">' + values.map(function (item) {
      return '<div class="rb-value"><span class="rb-value__k">' + esc(item.v) + '</span>' +
        '<span class="rb-value__d">' + esc(item.d) + '</span></div>';
    }).join('') + '</div>';
  }

  function attrsHTML(attrs) {
    return '<div class="rb-values rb-attrs">' + attrs.map(function (item) {
      return '<div class="rb-value"><span class="rb-value__k">' + esc(item.k) + '</span>' +
        '<span class="rb-value__d">' + esc(item.v) + '</span></div>';
    }).join('') + '</div>';
  }

  function supportCell(label, value) {
    var state = 'missing';
    var text = '—';
    var sr = '';
    var raw = value == null ? '' : String(value).trim();
    if (raw && raw !== '—') {
      if (/^(✗|no|false)$/i.test(raw)) { state = 'no'; text = '✗'; sr = '<span class="sr-only">不支持</span>'; }
      else if (/preview|flag|experimental|实验/i.test(raw)) { state = 'flag'; text = 'preview'; sr = '<span class="sr-only">需开启实验标志</span>'; }
      else { state = 'yes'; text = raw; }
    }
    return '<div class="rb-support__cell is-' + state + '"><div class="rb-support__label">' + esc(label) + '</div>' +
      '<div class="rb-support__val is-' + state + '">' + esc(text) + sr + '</div></div>';
  }

  function supportHTML(entry) {
    if (!entry.browser) {
      return '<div class="rb-support__none">暂无该条目的兼容数据' +
        (entry.mdn ? ' · <a class="rb-link" href="' + esc(entry.mdn) + '" target="_blank" rel="noopener noreferrer">查看 MDN ↗</a>' : '') +
        '</div>';
    }
    var browsers = [['chrome', 'Chrome'], ['edge', 'Edge'], ['firefox', 'Firefox'], ['safari', 'Safari']];
    var supported = 0;
    browsers.forEach(function (pair) {
      var raw = entry.browser[pair[0]] == null ? '' : String(entry.browser[pair[0]]).trim();
      if (raw && raw !== '—' && !/^(✗|no|preview|flag)$/i.test(raw)) supported++;
    });
    return '<div class="rb-support__head">' +
      '<span class="rb-support__summary' + (supported === 4 ? ' is-full' : '') + '">支持度 ' + supported + '/4</span>' +
      '<span class="rb-support__note">数字为首个支持版本</span></div>' +
      '<div class="rb-support__grid">' + browsers.map(function (pair) {
        return supportCell(pair[1], entry.browser[pair[0]]);
      }).join('') + '</div>';
  }

  function relatedEntries(entry) {
    var pool = C.catEntries(entry.lang, entry.cat).filter(function (e) { return e.id !== entry.id; });
    var keys = (entry.keywords || []).concat(entry.aliases || []);
    pool.sort(function (a, b) {
      function weight(e) {
        var n = 0;
        for (var i = 0; i < keys.length; i++) {
          if (e.name.indexOf(keys[i]) >= 0 || (e.zh || '').indexOf(keys[i]) >= 0) n++;
        }
        return n;
      }
      return (weight(b) - weight(a)) ||
        (Math.abs((a.order || 0) - (entry.order || 0)) - Math.abs((b.order || 0) - (entry.order || 0))) ||
        ((a.order || 0) - (b.order || 0));
    });
    return pool.slice(0, 3);
  }

  function sectionHTML(index, section) {
    return '<section class="rb-sec" id="sec-' + index + '" data-sec="' + index + '">' +
      '<div class="rb-sec__head"><span class="rb-sec__no">§' + pad2(index) + '</span>' +
      '<h3 class="rb-sec__title">' + section.title + '</h3>' +
      (section.actions ? '<span class="rb-sec__actions">' + section.actions + '</span>' : '') +
      '</div><div class="rb-sec__body">' + section.body + '</div></section>';
  }

  function buildSections(entry) {
    var sections = [];
    var notes = entry.notes && entry.notes.length
      ? '<div class="rb-notes"><p class="rb-notes__title">注意</p><ul>' + entry.notes.map(function (note) {
        return '<li>' + esc(note) + '</li>';
      }).join('') + '</ul></div>'
      : '';

    sections.push({
      title: '说明',
      body: '<div class="rb-prose"><p>' + esc(entry.desc || entry.summary) + '</p></div>' + notes
    });

    if (entry.syntax && String(entry.syntax).trim()) {
      sections.push({
        title: '语法',
        body: codeBlock(entry.syntax, entry.lang, 'syntax.' + ext(entry.lang), 'syntax', 'rb-code--syntax', '复制语法')
      });
    }

    if (entry.lang === 'css' && entry.values && entry.values.length) {
      sections.push({
        title: '取值 <span class="rb-muted">· ' + entry.values.length + '</span>',
        body: valuesHTML(entry.values)
      });
    }

    if (entry.lang === 'html' && entry.attrs && entry.attrs.length) {
      sections.push({
        title: '属性 <span class="rb-muted">· ' + entry.attrs.length + '</span>',
        body: attrsHTML(entry.attrs)
      });
    }

    if (entry.example && String(entry.example).trim()) {
      sections.push({
        title: '示例',
        body: codeBlock(entry.example, entry.lang, 'example.' + ext(entry.lang), 'example',
          'rb-code--example' + (entry.lang === 'js' ? ' rb-code--js' : ''), '复制示例代码')
      });
    }

    if (entry.lang === 'js') {
      sections.push({
        title: '运行提示',
        body: '<div class="rb-nopreview"><div class="rb-nopreview__glyph" aria-hidden="true">{ }</div>' +
          '<div class="rb-nopreview__copy"><strong>该条目没有实时预览</strong>' +
          '<p>示例可在浏览器控制台直接运行。</p></div>' +
          '<button class="rb-btn" type="button" data-act="copy" data-copy="example">复制示例</button></div>'
      });
    } else {
      sections.push({
        title: '实时预览',
        body: '<div class="rb-preview" data-preview>' +
          '<div class="rb-preview__grid" data-grid></div>' +
          '<div class="rb-preview__host" data-preview-host></div>' +
          '<div class="rb-preview__controls">' +
          '<button type="button" data-act="preview-reset">重置</button>' +
          '<button type="button" data-act="preview-grid" aria-pressed="true">网格</button>' +
          '</div></div>' +
          '<p class="rb-preview__note">Shadow DOM 隔离 · 示例只影响预览区</p>'
      });
    }

    if (entry.lang === 'css' && entry.meta) {
      var metaRows = [
        ['初始值', entry.meta.initial],
        ['继承', entry.meta.inherited],
        ['动画', entry.meta.animation],
        ['百分比', entry.meta.percentages],
        ['适用元素', entry.meta.appliesTo],
        ['计算值', entry.meta.computed]
      ];
      sections.push({
        title: '技术细节',
        body: '<div class="rb-meta">' + metaRows.map(function (pair) {
          return '<div class="rb-meta__cell"><div class="rb-meta__k">' + esc(pair[0]) + '</div>' +
            '<div class="rb-meta__v">' + esc(pair[1] || '—') + '</div></div>';
        }).join('') + '</div>'
      });
    }

    if (entry.lang === 'css') {
      sections.push({ title: '浏览器支持', body: supportHTML(entry) });
    }

    var mdnLink = entry.mdn
      ? '<a class="rb-btn" href="' + esc(entry.mdn) + '" target="_blank" rel="noopener noreferrer">在 MDN 查看 ' + icon('arrow-up-right') + '</a>'
      : '';
    var spec = entry.specGroups && entry.specGroups.length
      ? '<p class="rb-spec">规范 <b>' + esc(entry.specGroups.join(' · ')) + '</b></p>'
      : '';
    var related = relatedEntries(entry);
    var relatedHtml = related.length
      ? '<div class="rb-related">' + related.map(function (e) {
        return '<a class="rb-related__link" href="' + C.urlFor(e) + '">' + esc(e.name) + '</a>';
      }).join('') + '</div>'
      : '';
    sections.push({
      title: '相关 / 参考',
      body: spec + relatedHtml +
        (mdnLink ? '<div class="rb-related rb-related--mdn">' + mdnLink + '</div>' : '')
    });

    return sections;
  }

  function renderDrawer(entry, ctx) {
    var sections = buildSections(entry);
    var rail = sections.map(function (section, index) {
      return '<button class="rb-rail__link' + (index === 0 ? ' is-active' : '') + '" type="button" data-act="goto-sec" data-target="sec-' + (index + 1) + '" aria-label="跳到第 ' + (index + 1) + ' 节：' + esc(section.title.replace(/<[^>]+>/g, '')) + '">' + pad2(index + 1) + '</button>';
    }).join('');

    /* 与徽章重复的标签不再重复渲染（例如状态=实验性 + 标签=实验性） */
    var badgeWords = [C.normLabel[entry._norm]];
    if (entry._heat === 'hot') badgeWords.push('高频');
    var tags = orthogonalTags(entry).filter(function (tag) { return badgeWords.indexOf(tag) < 0; });
    var tagChips = tags.slice(0, 4).map(function (tag) {
      return '<span class="rb-tagchip">' + esc(tag) + '</span>';
    }).join('');
    var extraTags = tags.length > 4 ? tags.length - 4 : 0;

    var chapterChips = sections.map(function (section, index) {
      var plain = section.title.replace(/<[^>]+>/g, '');
      return '<button class="rb-chip rb-chip--sm rb-chapter' + (index === 0 ? ' is-active' : '') + '" type="button"' +
        ' data-act="goto-sec" data-target="sec-' + (index + 1) + '">' +
        pad2(index + 1) + ' ' + esc(plain) + '</button>';
    }).join('');

    var hasPrev = ctx && typeof ctx.index === 'number' && ctx.index > 0;
    var hasNext = ctx && typeof ctx.index === 'number' && ctx.index < (ctx.total - 1);
    var fields = displayFields(entry);
    var status = drawerStatus(entry);
    var isObsolete = entry._norm === 'obsolete' || entry._norm === 'deprecated';
    var titleCls = isObsolete ? ' is-obsolete' : '';
    var titleHtml = S.mark(entry.name, ctx && ctx.q);
    if (isObsolete) titleHtml = '<span class="rb-strike">' + titleHtml + '</span>';

    return '<div class="rb-drawer__bar">' +
      '<div class="rb-drawer__lead">' +
      '<button class="rb-iconbtn rb-drawer__back" type="button" data-act="close-drawer" aria-label="返回列表">' + icon('arrow-left') + '</button>' +
      '<span class="rb-drawer__crumb">' +
      '<a href="#/">首页</a><span class="rb-sep">›</span>' +
      '<a href="' + C.langUrl(entry.lang) + '">' + esc(langName(entry.lang)) + '</a>' +
      '<span class="rb-sep">›</span><b>' + esc(entry.catName) + '</b>' +
      '</span></div>' +
      '<span class="rb-drawer__state ' + status.cls + '">' + esc(status.label) + '</span>' +
      '<div class="rb-drawer__nav">' +
      '<button class="rb-iconbtn rb-iconbtn--sm" type="button" data-act="prev"' + (hasPrev ? '' : ' disabled') + ' aria-label="上一条">' + icon('chevron-left') + '</button>' +
      '<button class="rb-iconbtn rb-iconbtn--sm" type="button" data-act="next"' + (hasNext ? '' : ' disabled') + ' aria-label="下一条">' + icon('chevron-right') + '</button>' +
      '<button class="rb-iconbtn rb-iconbtn--sm" type="button" data-act="copy-link" aria-label="复制链接">' + icon('copy') + '</button>' +
      '<button class="rb-iconbtn rb-iconbtn--sm" type="button" data-act="close-drawer" aria-label="关闭详情（Esc）">' + icon('close') + '</button>' +
      '</div></div>' +

      '<div class="rb-drawer__scroll">' +
      '<div class="rb-drawer__hero">' +
      '<h2 class="rb-drawer__title' + titleCls + '" id="drawer-title" tabindex="-1">' + titleHtml + '</h2>' +
      '<div class="rb-drawer__sub">' +
      (fields.zh ? '<span>' + esc(fields.zh) + '</span>' : '') +
      (entry.mdn ? (fields.zh ? '<span class="rb-sep">·</span>' : '') + '<a class="rb-mono-link" href="' + esc(entry.mdn) + '" target="_blank" rel="noopener noreferrer">MDN ' + icon('arrow-up-right') + '</a>' : '') +
      '</div>' +
      '<div class="rb-drawer__tagrow">' + heatBadge(entry) + tagChips +
      '<button class="rb-tagbtn" type="button" data-act="tag-pop" aria-expanded="false">标签' + (extraTags ? ' +' + extraTags : '') + ' ' + icon('chevron-down') + '</button>' +
      '</div></div>' +
      '<nav class="rb-chapters" aria-label="章节">' + chapterChips + '</nav>' +

      '<div class="rb-drawer__main">' +
      '<nav class="rb-rail" aria-label="章节"><div class="rb-rail__list">' + rail + '</div></nav>' +
      '<div class="rb-drawer__content">' +
      sections.map(function (section, index) { return sectionHTML(index + 1, section); }).join('') +
      '</div></div></div>' +
      '<div class="rb-drawer__model">RB-1274 · ' + esc(langName(entry.lang)) + ' · ' + esc(entry.name) + ' · ' + esc(C.generatedAt) + '</div>';
  }

  global.CSView = {
    renderPortal: renderPortal,
    renderBrowse: renderBrowse,
    renderListInner: renderListInner,
    renderSuggest: renderSuggest,
    renderPopover: renderPopover,
    renderEntryTags: renderEntryTags,
    renderSheet: renderSheet,
    renderShortcuts: renderShortcuts,
    renderDrawer: renderDrawer,
    filterbar: filterbar,
    filterChips: filterChips,
    listHead: listHead,
    searchBox: searchBox,
    icons: icon,
    sortLabel: SORT_LABEL
  };
})(window);
