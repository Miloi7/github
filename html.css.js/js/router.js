/* ==========================================================================
   REFBENCH · router.js
   hash 路由（file:// 下比 History API 稳）：
   #/             门户
   #/all          全部
   #/css          语种
   #/css/layout   分类（分类与条目同名时用 #/css/~layout）
   #/css/display  条目详情（同名条目用 #/js/array/slice）
   #/search?q=居中
   ========================================================================== */
(function (global) {
  'use strict';

  var C = global.CSData;

  function decode(value) {
    try { return decodeURIComponent(value); } catch (err) { return value; }
  }

  function parseQuery(raw) {
    var out = {};
    String(raw || '').split('&').forEach(function (pair) {
      if (!pair) return;
      var at = pair.indexOf('=');
      var key = at < 0 ? pair : pair.slice(0, at);
      var value = at < 0 ? '' : pair.slice(at + 1);
      out[decode(key.replace(/\+/g, ' '))] = decode(value.replace(/\+/g, ' '));
    });
    return out;
  }

  function listParent(lang, cat) {
    if (lang && lang !== 'all') {
      return cat ? C.categoryUrl(lang, cat) : '#/' + lang;
    }
    return '#/all';
  }

  function parse(hash) {
    var raw = String(hash == null ? '' : hash).replace(/^#/, '');
    if (!raw || raw === '/' || raw === '') {
      return { name: 'portal', hash: '#/' };
    }
    if (raw.charAt(0) !== '/') {
      return { name: 'invalid', hash: '#/' + raw };
    }

    var body = raw.slice(1);
    var queryAt = body.indexOf('?');
    var path = queryAt >= 0 ? body.slice(0, queryAt) : body;

    if (path === 'search') {
      var query = parseQuery(queryAt >= 0 ? body.slice(queryAt + 1) : '');
      return {
        name: 'search',
        q: query.q || '',
        lang: 'all',
        cat: '',
        hash: '#/search' + (query.q ? '?q=' + encodeURIComponent(query.q) : '')
      };
    }

    var parts = path.split('/').filter(function (part) { return part !== ''; });
    if (!parts.length) return { name: 'portal', hash: '#/' };

    var lang = parts[0];
    if (lang === 'all') {
      if (parts.length === 1) {
        return { name: 'list', lang: 'all', cat: '', q: '', hash: '#/all' };
      }
      return { name: 'invalid', hash: '#/' + body };
    }
    if (!C.langPriority.hasOwnProperty(lang)) {
      return { name: 'invalid', hash: '#/' + body };
    }

    if (parts.length === 1) {
      return { name: 'list', lang: lang, cat: '', q: '', hash: '#/' + lang };
    }

    /* 3 段：分类 + 条目（处理跨分类同名，如 js/array/slice） */
    if (parts.length >= 3) {
      var catId = decode(parts[1]);
      var entryName = decode(parts.slice(2).join('/'));
      var entry = C.get(lang, entryName, catId);
      if (entry) {
        return {
          name: 'detail',
          lang: lang,
          cat: catId,
          entryName: entryName,
          entry: entry,
          parent: C.categoryUrl(lang, catId),
          hash: '#/' + lang + '/' + catId + '/' + encodeURIComponent(entryName)
        };
      }
      return { name: 'invalid', hash: '#/' + body };
    }

    var seg = decode(parts[1]);

    /* 显式分类：~/layout */
    if (seg.charAt(0) === '~') {
      var forced = seg.slice(1);
      if (C.category(lang, forced)) {
        return { name: 'list', lang: lang, cat: forced, q: '', hash: '#/' + lang + '/~' + forced };
      }
      return { name: 'invalid', hash: '#/' + body };
    }

    /* 条目优先：避免 #/css/color（属性）被分类“颜色与背景”抢走 */
    var byName = C.get(lang, seg, null);
    if (byName) {
      return {
        name: 'detail',
        lang: lang,
        cat: byName.cat,
        entryName: byName.name,
        entry: byName,
        parent: listParent(lang, byName.cat),
        hash: C.urlFor(byName)
      };
    }

    if (C.category(lang, seg)) {
      return { name: 'list', lang: lang, cat: seg, q: '', hash: '#/' + lang + '/' + seg };
    }

    return { name: 'invalid', hash: '#/' + body };
  }

  function current() {
    return parse(global.location.hash);
  }

  function fireHashChange() {
    if (typeof global.dispatchEvent !== 'function') return;
    try {
      global.dispatchEvent(new Event('hashchange'));
    } catch (err) {
      if (typeof global.HashChangeEvent === 'function') {
        global.dispatchEvent(new HashChangeEvent('hashchange'));
      }
    }
  }

  function go(hash, replace) {
    if (!hash) return;
    if (replace) {
      if (global.location.hash === hash) { fireHashChange(); return; }
      global.location.replace(hash);
    } else if (global.location.hash === hash) {
      fireHashChange();
    } else {
      global.location.hash = hash;
    }
  }

  global.CSRouter = {
    parse: parse,
    current: current,
    go: go,
    listParent: listParent,
    searchHash: function (q) {
      return '#/search' + (q ? '?q=' + encodeURIComponent(q) : '');
    }
  };
})(window);
