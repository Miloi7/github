/* ==========================================================================
   REFBENCH · highlight.js
   自研 tokenizer（无依赖）：CSS / HTML / JS → <span class="tk-*">
   输入永远先转义，输出只含受控标签。
   ========================================================================== */
(function (global) {
  'use strict';

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function span(cls, text) {
    return '<span class="tk-' + cls + '">' + esc(text) + '</span>';
  }

  /* ── CSS ──────────────────────────────────────────────────── */
  var CSS_RULES = [
    { c: 'comment', re: '\\/\\*[\\s\\S]*?\\*\\/' },
    { c: 'string', re: '"(?:[^"\\\\]|\\\\.)*"|\'(?:[^\'\\\\]|\\\\.)*\'' },
    { c: 'keyword', re: '@[-\\w]+' },
    { c: 'number', re: '#[0-9a-fA-F]{3,8}\\b' },
    { c: 'sel', re: '--[\\w-]+(?=\\s*:)' },
    { c: 'sel', re: '[-\\w]+(?=\\s*:)' },
    { c: 'fn', re: '[-\\w]+(?=\\s*\\()' },
    { c: 'number', re: '-?(?:\\d*\\.\\d+|\\d+)(?:%|[a-zA-Z]+)?' },
    { c: 'plain', re: '[-\\w]+' },
    { c: 'punct', re: '[{}();:,>~+*\\/!]' }
  ];

  /* ── JavaScript ───────────────────────────────────────────── */
  var JS_KEYWORDS = 'const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|' +
    'class|extends|new|this|super|import|export|from|default|async|await|yield|try|catch|finally|' +
    'throw|typeof|instanceof|in|of|delete|void|null|undefined|true|false|NaN|static|get|set';

  var JS_RULES = [
    { c: 'comment', re: '\\/\\/[^\\n]*' },
    { c: 'comment', re: '\\/\\*[\\s\\S]*?\\*\\/' },
    { c: 'string', re: '`(?:[^`\\\\]|\\\\.)*`' },
    { c: 'string', re: '"(?:[^"\\\\\\n]|\\\\.)*"|\'(?:[^\'\\\\\\n]|\\\\.)*\'' },
    { c: 'keyword', re: '\\b(?:' + JS_KEYWORDS + ')\\b' },
    { c: 'number', re: '\\b0[xX][0-9a-fA-F]+\\b|\\b\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?\\b' },
    { c: 'fn', re: '[A-Za-z_$][\\w$]*(?=\\s*\\()' },
    { c: 'plain', re: '[A-Za-z_$][\\w$]*' },
    { c: 'punct', re: '[{}()\\[\\];,.?:=+\\-*/%<>!&|^~]' }
  ];

  function build(rules) {
    return new RegExp(rules.map(function (r, i) {
      return '(?<g' + i + '>' + r.re + ')';
    }).join('|'), 'g');
  }

  var CSS_RE = build(CSS_RULES);
  var JS_RE = build(JS_RULES);

  function tokenizeRegex(source, rules, re) {
    var out = '';
    var last = 0;
    var match;
    re.lastIndex = 0;
    while ((match = re.exec(source)) !== null) {
      if (match.index > last) out += esc(source.slice(last, match.index));
      var cls = null;
      for (var i = 0; i < rules.length; i++) {
        if (match.groups['g' + i] !== undefined) { cls = rules[i].c; break; }
      }
      out += cls && cls !== 'plain' ? span(cls, match[0]) : esc(match[0]);
      last = re.lastIndex;
      if (match[0] === '') re.lastIndex++;
    }
    out += esc(source.slice(last));
    return out;
  }

  /* ── HTML：先按标签切块，再逐标签着色 ─────────────────────── */
  var HTML_CHUNK = /<!--[\s\S]*?-->|<![^>]*>|<\/?[a-zA-Z][^>]*>/g;
  var TAG_TOKEN = /<|>|\/|=|"[^"]*"|'[^']*'|[a-zA-Z_:@][\w:.-]*/g;

  function tokenizeTag(chunk) {
    var out = '';
    var last = 0;
    var firstWord = true;
    var match;
    TAG_TOKEN.lastIndex = 0;
    while ((match = TAG_TOKEN.exec(chunk)) !== null) {
      if (match.index > last) out += esc(chunk.slice(last, match.index));
      var token = match[0];
      var first = token.charAt(0);
      if (token === '<' || token === '>' || token === '/' || token === '=') {
        out += span('punct', token);
      } else if (first === '"' || first === "'") {
        out += span('string', token);
      } else if (firstWord) {
        out += span('tag', token);
        firstWord = false;
      } else {
        out += span('attr', token);
      }
      last = TAG_TOKEN.lastIndex;
      if (token === '') TAG_TOKEN.lastIndex++;
    }
    out += esc(chunk.slice(last));
    return out;
  }

  function tokenizeHTML(source) {
    var out = '';
    var last = 0;
    var match;
    HTML_CHUNK.lastIndex = 0;
    while ((match = HTML_CHUNK.exec(source)) !== null) {
      if (match.index > last) out += esc(source.slice(last, match.index));
      var chunk = match[0];
      if (chunk.indexOf('<!--') === 0) out += span('comment', chunk);
      else if (chunk.indexOf('<!') === 0) out += span('keyword', chunk);
      else out += tokenizeTag(chunk);
      last = HTML_CHUNK.lastIndex;
    }
    out += esc(source.slice(last));
    return out;
  }

  global.CodeHL = {
    highlight: function (source, lang) {
      var src = String(source == null ? '' : source);
      if (!src) return '';
      if (lang === 'html') return tokenizeHTML(src);
      if (lang === 'js') return tokenizeRegex(src, JS_RULES, JS_RE);
      return tokenizeRegex(src, CSS_RULES, CSS_RE);
    },
    escape: esc
  };
})(typeof window !== 'undefined' ? window : this);
