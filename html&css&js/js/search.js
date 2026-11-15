/* ==========================================================================
   REFBENCH · search.js
   纯逻辑：索引 / 评分 / 子序列 / 1 次编辑距离容错 / 命中高亮
   不访问 DOM，可在 Node 中直接验证。
   ========================================================================== */
(function (global) {
  'use strict';

  var CS = global.CSData;
  var MAX_MARKS_PER_LINE = 6;
  var built = false;

  function fold(value) {
    return String(value == null ? '' : value)
      .toLowerCase()
      .replace(/\u3000/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function escapeHTML(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function isSubsequence(needle, haystack) {
    var n = 0;
    for (var i = 0; i < haystack.length && n < needle.length; i++) {
      if (haystack.charAt(i) === needle.charAt(n)) n++;
    }
    return n === needle.length;
  }

  function wordStart(text, token) {
    var i = text.indexOf(token);
    while (i >= 0) {
      if (i === 0) return true;
      if (/[\s._\-\/:,(){}[\]<>|~+*'"]/.test(text.charAt(i - 1))) return true;
      i = text.indexOf(token, i + 1);
    }
    return false;
  }

  /* 相邻换位（dispaly → display）按 1 次编辑处理 */
  function isAdjacentSwap(a, b) {
    if (a.length !== b.length || a === b) return false;
    var diffs = [];
    for (var i = 0; i < a.length; i++) {
      if (a.charAt(i) !== b.charAt(i)) {
        diffs.push(i);
        if (diffs.length > 2) return false;
      }
    }
    return diffs.length === 2 && diffs[1] === diffs[0] + 1 &&
      a.charAt(diffs[0]) === b.charAt(diffs[1]) &&
      a.charAt(diffs[1]) === b.charAt(diffs[0]);
  }

  /* 有界编辑距离：只关心 <= max，避免全量 DP 的浪费 */
  function levenshtein(a, b, max) {
    max = max == null ? 1 : max;
    if (a === b) return 0;
    if (Math.abs(a.length - b.length) > max) return max + 1;
    var prev = new Array(b.length + 1);
    var curr = new Array(b.length + 1);
    var i, j;
    for (j = 0; j <= b.length; j++) prev[j] = j;
    for (i = 1; i <= a.length; i++) {
      curr[0] = i;
      var rowMin = curr[0];
      for (j = 1; j <= b.length; j++) {
        var cost = a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1;
        curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
        if (curr[j] < rowMin) rowMin = curr[j];
      }
      if (rowMin > max) return max + 1;
      var swap = prev;
      prev = curr;
      curr = swap;
    }
    return prev[b.length];
  }

  /* ── 索引 ─────────────────────────────────────────────────── */
  function buildIndex() {
    if (built || !CS) return;
    var list = CS.all();
    var tagIds = (CS.tags || []).map(function (t) { return t.id; });
    for (var i = 0; i < list.length; i++) {
      var e = list[i];
      var aliases = e.aliases || [];
      var keywords = e.keywords || [];
      var tags = (e.tags || []).filter(function (t) { return tagIds.indexOf(t) >= 0; });
      var summary = String(e.summary || '').slice(0, 60);
      var desc = String(e.desc || '').slice(0, 160);
      var syntax = String(e.syntax || '');
      e._q = {
        name: String(e.name || '').toLowerCase(),
        zh: String(e.zh || '').toLowerCase(),
        cat: String(e.catName || '').toLowerCase(),
        summary: summary.toLowerCase(),
        desc: desc.toLowerCase(),
        syntax: syntax.toLowerCase(),
        keywords: aliases.concat(keywords).map(function (v) { return String(v).toLowerCase(); }).filter(Boolean),
        tags: tags.map(function (v) { return String(v).toLowerCase(); }),
        values: (e.values || []).map(function (v) { return String(v.v || '') + ' ' + String(v.d || ''); }).join(' ').toLowerCase(),
        attrs: (e.attrs || []).map(function (v) { return String(v.k || '') + ' ' + String(v.v || ''); }).join(' ').toLowerCase(),
        haystack: [
          e.name, e.zh, aliases.join(' '), keywords.join(' '),
          e.catName, tags.join(' '), summary
        ].join(' ').toLowerCase()
      };
      e._q.nameWords = e._q.name.split(/[\s._\-\/:,(){}[\]<>|~+*'"]+/).filter(Boolean);
    }
    built = true;
  }

  /* ── 单 token 评分（规格 §8.4） ───────────────────────────── */
  function scoreToken(e, token) {
    var q = e._q;
    var name = q.name;

    if (name === token) return 100;
    if (name.indexOf(token) === 0) return 80;
    if (wordStart(name, token)) return 60;
    if (name.indexOf(token) >= 0) return 40;

    if (q.zh === token) return 90;
    if (q.zh.indexOf(token) === 0) return 75;
    if (q.zh.indexOf(token) >= 0) return 55;

    var best = 0;
    var i;
    for (i = 0; i < q.keywords.length; i++) {
      var w = q.keywords[i];
      if (w === token) return 70;
      if (w.indexOf(token) === 0 && best < 60) best = 60;
      else if (w.indexOf(token) >= 0 && best < 45) best = 45;
    }
    if (best) return best;

    for (i = 0; i < q.tags.length; i++) {
      var t = q.tags[i];
      if (t === token) return 60;
      if (t.indexOf(token) >= 0 && best < 50) best = 50;
    }
    if (best) return best;

    if (q.cat === token) return 60;
    if (q.cat.indexOf(token) >= 0) return 50;

    if (q.summary.indexOf(token) >= 0) return 40;
    if (q.syntax.indexOf(token) >= 0) return 30;
    if (q.attrs.indexOf(token) >= 0) return 25;
    if (q.values.indexOf(token) >= 0) return 25;
    if (q.desc.indexOf(token) >= 0) return 20;

    /* 单字符子序列：bgc → background-color；越紧凑、越靠前得分越高 */
    if (token.length >= 2 && isSubsequence(token, name)) {
      var pos = -1;
      var first = -1;
      var last = -1;
      for (var k = 0; k < token.length; k++) {
        pos = name.indexOf(token.charAt(k), pos + 1);
        if (first < 0) first = pos;
        last = pos;
      }
      var span = Math.max(1, last - first + 1);
      return 25 + Math.round(6 * (token.length / span)) + (first === 0 ? 4 : 0);
    }

    /* 仅 1 次编辑距离：dispaly → display（含相邻换位） */
    if (token.length >= 4) {
      if (levenshtein(token, name, 1) <= 1 || isAdjacentSwap(token, name)) return 30;
      for (i = 0; i < q.nameWords.length; i++) {
        if (q.nameWords[i].length >= 4 &&
          (levenshtein(token, q.nameWords[i], 1) <= 1 || isAdjacentSwap(token, q.nameWords[i]))) return 30;
      }
    }
    return 0;
  }

  function tokenize(query) {
    return fold(query).split(' ').filter(Boolean).slice(0, 6);
  }

  function scoreEntry(e, tokens) {
    if (!e._q) return 0;
    var total = 0;
    for (var i = 0; i < tokens.length; i++) {
      var s = scoreToken(e, tokens[i]);
      if (!s) return 0;
      total += s;
    }
    return total;
  }

  /* ── 检索：AND 语义 + 相关度排序 ─────────────────────────── */
  function searchDetailed(query, scope) {
    var tokens = typeof query === 'string' ? tokenize(query) : query;
    if (!tokens || !tokens.length || !CS) return [];
    if (!built) buildIndex();
    var source = scope || CS.all();
    var hay = fold(tokens.join(' '));
    var out = [];
    for (var i = 0; i < source.length; i++) {
      var e = source[i];
      var total = scoreEntry(e, tokens);
      if (!total) continue;
      var bonus = 0;
      if (e._q.name === hay) bonus += 20;
      if (e.hot) bonus += 3;
      out.push({ entry: e, score: total + bonus });
    }
    out.sort(function (a, b) {
      return (b.score - a.score) ||
        ((b.entry.hot ? 1 : 0) - (a.entry.hot ? 1 : 0)) ||
        (a.entry._langIdx - b.entry._langIdx) ||
        ((a.entry.order || 0) - (b.entry.order || 0)) ||
        (a.entry._i - b.entry._i);
    });
    return out;
  }

  function search(query, scope) {
    return searchDetailed(query, scope).map(function (item) { return item.entry; });
  }

  /* 名称 / 中文 / 摘要里能直接看到 <mark> 的命中 */
  function hasFieldMatch(e, query) {
    if (!built) buildIndex();
    if (!e || !e._q) return false;
    var tokens = typeof query === 'string' ? tokenize(query) : (query || []);
    if (!tokens.length) return false;
    var fields = [e._q.name, e._q.zh, e._q.summary];
    for (var i = 0; i < tokens.length; i++) {
      for (var j = 0; j < fields.length; j++) {
        if (fields[j].indexOf(tokens[i]) >= 0) return true;
      }
    }
    return false;
  }

  function snippetAround(text, token) {
    var source = String(text == null ? '' : text).replace(/\s+/g, ' ').trim();
    if (!source) return '';
    var lower = source.toLowerCase();
    var at = lower.indexOf(token);
    if (at < 0) return source.slice(0, 36);
    var start = Math.max(0, at - 10);
    var end = Math.min(source.length, at + token.length + 18);
    return (start > 0 ? '…' : '') + source.slice(start, end).trim() + (end < source.length ? '…' : '');
  }

  /* 命中理由：只在名称/中文/摘要没有可见 <mark> 时使用，保证每条结果可解释 */
  function matchReason(e, query) {
    if (!built) buildIndex();
    if (!e || !e._q) return null;
    var tokens = typeof query === 'string' ? tokenize(query) : (query || []);
    if (!tokens.length) return null;
    var i, j, token, list;
    var tagIds = (CS.tags || []).map(function (t) { return t.id; });

    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];

      list = e.values || [];
      for (j = 0; j < list.length; j++) {
        var value = String(list[j].v || '');
        var valueDesc = String(list[j].d || '');
        if (value.toLowerCase().indexOf(token) >= 0) {
          return { label: '取值', text: value, token: token };
        }
        if (valueDesc.toLowerCase().indexOf(token) >= 0) {
          return { label: '取值', text: value ? value + ' · ' + snippetAround(valueDesc, token) : snippetAround(valueDesc, token), token: token };
        }
      }

      list = e.attrs || [];
      for (j = 0; j < list.length; j++) {
        var attrKey = String(list[j].k || '');
        var attrValue = String(list[j].v || '');
        if (attrKey.toLowerCase().indexOf(token) >= 0) {
          return { label: '属性', text: attrKey, token: token };
        }
        if (attrValue.toLowerCase().indexOf(token) >= 0) {
          return { label: '属性', text: attrKey ? attrKey + ' · ' + snippetAround(attrValue, token) : snippetAround(attrValue, token), token: token };
        }
      }

      list = (e.aliases || []).concat(e.keywords || []);
      for (j = 0; j < list.length; j++) {
        if (String(list[j] || '').toLowerCase().indexOf(token) >= 0) {
          return { label: '关键词', text: String(list[j]), token: token };
        }
      }

      list = (e.tags || []).filter(function (tag) { return tagIds.indexOf(tag) >= 0; });
      for (j = 0; j < list.length; j++) {
        if (String(list[j] || '').toLowerCase().indexOf(token) >= 0) {
          return { label: '标签', text: String(list[j]), token: token };
        }
      }

      if (String(e.catName || '').toLowerCase().indexOf(token) >= 0) {
        return { label: '分类', text: String(e.catName), token: token };
      }
      if (String(e.desc || '').toLowerCase().indexOf(token) >= 0) {
        return { label: '描述', text: snippetAround(e.desc, token), token: token };
      }
      if (String(e.syntax || '').toLowerCase().indexOf(token) >= 0) {
        return { label: '语法', text: snippetAround(e.syntax, token), token: token };
      }
      if (String(e.summary || '').toLowerCase().indexOf(token) >= 0) {
        return { label: '摘要', text: String(e.summary), token: token };
      }
      if (String(e.name || '').toLowerCase().indexOf(token) >= 0) {
        return { label: '名称', text: String(e.name), token: token };
      }
    }

    /* 精确/近似名称命中（拼写容错）也要有可见理由 */
    var name = String(e.name || '');
    var lowerName = name.toLowerCase();
    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];
      if (token.length >= 4 && (levenshtein(token, lowerName, 1) <= 1 || isAdjacentSwap(token, lowerName))) {
        return { label: '名称近似', text: name, token: '' };
      }
      for (j = 0; j < (e._q.nameWords || []).length; j++) {
        var word = e._q.nameWords[j];
        if (word.length >= 4 && (levenshtein(token, word, 1) <= 1 || isAdjacentSwap(token, word))) {
          return { label: '名称近似', text: name, token: '' };
        }
      }
    }
    return { label: '相关度', text: name, token: '' };
  }

  /* ── 命中高亮：不改字号 / 行高，最多 6 个 mark ─────────────── */
  function mark(text, query, limit) {
    var source = String(text == null ? '' : text);
    var tokens = typeof query === 'string' ? tokenize(query) : (query || []);
    var maxMarks = typeof limit === 'number' ? limit : MAX_MARKS_PER_LINE;
    if (!source || !tokens.length || maxMarks <= 0) return escapeHTML(source);

    var lower = source.toLowerCase();
    var flags = new Array(source.length);
    var i, k;

    for (i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var from = 0;
      var idx = lower.indexOf(token, from);
      var found = false;
      while (idx >= 0) {
        found = true;
        for (k = idx; k < idx + token.length; k++) flags[k] = true;
        from = idx + token.length;
        idx = lower.indexOf(token, from);
      }
      /* 子序列降级命中：逐字标记 */
      if (!found && token.length >= 2 && isSubsequence(token, lower)) {
        var pos = -1;
        for (k = 0; k < token.length; k++) {
          pos = lower.indexOf(token.charAt(k), pos + 1);
          if (pos < 0) break;
          flags[pos] = true;
        }
      }
    }

    /* 组装连续命中，并限制 6 组 */
    var html = '';
    var plain = '';
    var groups = 0;
    var marking = false;
    for (i = 0; i < source.length; i++) {
      var on = !!flags[i] && groups < maxMarks;
      if (on && !marking) {
        if (plain) { html += escapeHTML(plain); plain = ''; }
        html += '<mark>';
        marking = true;
        groups++;
      } else if (!on && marking) {
        html += '</mark>';
        marking = false;
      }
      if (marking) html += escapeHTML(source.charAt(i));
      else plain += source.charAt(i);
    }
    if (marking) html += '</mark>';
    html += escapeHTML(plain);
    return html;
  }

  /* ── 近似条目：编辑距离 ≤2 的 3 条 ─────────────────────────── */
  function near(query, scope, limit) {
    var q = fold(query);
    if (q.length < 3 || !CS) return [];
    var source = scope || CS.all();
    var scored = [];
    var cap = limit || 3;
    for (var i = 0; i < source.length; i++) {
      var e = source[i];
      var name = String(e.name || '').toLowerCase();
      if (!name) continue;
      var d = levenshtein(q, name, 2);
      if (d <= 2 && name !== q) scored.push({ entry: e, d: d, len: Math.abs(name.length - q.length) });
    }
    scored.sort(function (a, b) {
      return (a.d - b.d) || (a.len - b.len) || ((a.entry.order || 0) - (b.entry.order || 0));
    });
    return scored.slice(0, cap).map(function (item) { return item.entry; });
  }

  global.CSSearch = {
    buildIndex: buildIndex,
    isBuilt: function () { return built; },
    tokenize: tokenize,
    search: search,
    searchDetailed: searchDetailed,
    hasFieldMatch: hasFieldMatch,
    matchReason: matchReason,
    scoreToken: scoreToken,
    scoreEntry: scoreEntry,
    mark: mark,
    near: near,
    fold: fold,
    isSubsequence: isSubsequence,
    levenshtein: levenshtein
  };
})(typeof window !== 'undefined' ? window : this);
