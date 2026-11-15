/* ==========================================================================
   REFBENCH · preview.js
   Shadow DOM 实时预览：CSS 预设舞台 / HTML 消毒渲染 / JS 无预览
   无 iframe、无外部请求；示例里的 * 选择器天然被隔离。
   ========================================================================== */
(function (global) {
  'use strict';

  var PRESET = {
    layout: 'a', flexgrid: 'a', box: 'a', scroll: 'a', fragmentation: 'a', border: 'a',
    typography: 'b', list: 'b', content: 'b',
    color: 'c', effect: 'c', mask: 'c',
    animation: 'd', transform: 'd'
  };

  var STAGE = {
    a: '<div class="rb-stage"><div class="demo">' +
      '<div class="demo__child demo__child--a">A</div>' +
      '<div class="demo__child demo__child--b">a</div>' +
      '<p class="demo__cap">示例盒子 · demo</p>' +
      '</div></div>',
    b: '<div class="rb-stage"><div class="demo demo--text">' +
      '<p>中文排版测试 ABC 123</p>' +
      '<p>The quick brown fox jumps over the lazy dog. <span class="demo__inline">行内元素</span></p>' +
      '<ol><li>第一项</li><li>第二项</li><li>第三项</li></ol>' +
      '</div></div>',
    c: '<div class="rb-stage"><div class="demo demo--color">' +
      '<div class="demo__swatches"><span class="sw sw--a"></span><span class="sw sw--b"></span><span class="sw sw--c"></span></div>' +
      '<p class="demo__cap">颜色与效果示例</p>' +
      '</div></div>',
    d: '<div class="rb-stage"><div class="demo demo--anim">' +
      '<div class="demo__box"></div>' +
      '<p class="demo__cap">48 × 48 · 循环示例</p>' +
      '</div></div>',
    e: '<div class="rb-stage"><div class="demo demo--plain">' +
      '<div class="demo__child demo__child--a">A</div>' +
      '<div class="demo__child demo__child--b">a</div>' +
      '<p class="demo__cap">示例盒子 · demo</p>' +
      '</div></div>'
  };

  var BASE_CSS = [
    ':host{display:block;position:absolute;inset:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Microsoft YaHei",sans-serif;color:var(--pv-fg);--pv-fg:#DDE1E6;--pv-fg2:#A6A49F;--pv-line:#3A414B;--pv-panel:rgba(255,255,255,.04);--pv-acc:#35E0A1;--pv-css:#8AA6FF;--pv-js:#F5C74E;--pv-html:#FF8461}',
    ':host([data-theme="light"]){--pv-fg:#14161A;--pv-fg2:#4C4E52;--pv-line:#BEBAAE;--pv-panel:rgba(0,0,0,.035);--pv-acc:#076B4A;--pv-css:#3A56D4;--pv-js:#8A5A00;--pv-html:#A83707}',
    '*{box-sizing:border-box}',
    '.rb-stage{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;padding:24px;overflow:auto;font-size:13px;line-height:1.65;color:var(--pv-fg)}',
    '.demo{width:min(320px,100%);min-height:96px;padding:12px;border:1px solid var(--pv-line);border-radius:6px;background:var(--pv-panel);color:var(--pv-fg)}',
    '.demo p{margin:0;font-size:12px;line-height:1.6;color:var(--pv-fg2)}',
    '.demo__child{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;margin:2px;border-radius:3px;font:500 11px/1 ui-monospace,Consolas,monospace;color:#04140E}',
    '.demo__child--a{background:var(--pv-acc)}',
    '.demo__child--b{background:var(--pv-css);color:#101215}',
    '.demo__cap{margin-top:8px!important;font-size:11px!important;color:var(--pv-fg2)!important}',
    '.demo--text{width:min(100%,360px);background:transparent;border-style:dashed;padding:14px}',
    '.demo--text p+p{margin-top:8px}',
    '.demo--text ol{margin:8px 0 0;padding-left:20px;color:var(--pv-fg2);font-size:12px}',
    '.demo__inline{background:var(--pv-panel);border:1px solid var(--pv-line);border-radius:2px;padding:0 4px}',
    '.demo__swatches{display:flex;gap:8px;margin-bottom:10px}',
    '.sw{width:52px;height:36px;border-radius:3px;display:block}',
    '.sw--a{background:var(--pv-acc)}.sw--b{background:var(--pv-html)}.sw--c{background:var(--pv-js)}',
    '.demo--anim{display:flex;align-items:center;gap:14px;width:auto;min-width:200px}',
    '.demo__box{width:48px;height:48px;flex:none;background:var(--pv-acc);border-radius:3px;animation:rb-pv-spin 3.6s linear infinite}',
    '.demo--plain{border-style:solid}',
    '.rb-stage--html{padding:20px;align-items:flex-start;justify-content:flex-start}',
    '.rb-pv-content{width:min(100%,420px);color:var(--pv-fg);font-size:13px;line-height:1.65}',
    '.rb-pv-content h1,.rb-pv-content h2,.rb-pv-content h3,.rb-pv-content h4,.rb-pv-content h5,.rb-pv-content h6{margin:0 0 8px;font-weight:600;line-height:1.3}',
    '.rb-pv-content p{margin:0 0 8px}',
    '.rb-pv-content a{color:var(--pv-acc);text-decoration:underline;text-underline-offset:2px}',
    '.rb-pv-content ul,.rb-pv-content ol{margin:0 0 8px;padding-left:20px}',
    '.rb-pv-content ul{list-style:disc}.rb-pv-content ol{list-style:decimal}',
    '.rb-pv-content table{border-collapse:collapse;margin:0 0 8px;font-size:12px}',
    '.rb-pv-content th,.rb-pv-content td{border:1px solid var(--pv-line);padding:4px 8px;text-align:left}',
    '.rb-pv-content th{background:var(--pv-panel);font-weight:600}',
    '.rb-pv-content input,.rb-pv-content select,.rb-pv-content textarea{border:1px solid var(--pv-line);border-radius:3px;padding:3px 6px;background:transparent;color:var(--pv-fg);font:inherit;pointer-events:none}',
    '.rb-pv-content button{border:1px solid var(--pv-line);border-radius:3px;padding:4px 10px;background:var(--pv-panel);color:var(--pv-fg);font:inherit;pointer-events:none}',
    '.rb-pv-content blockquote{margin:0 0 8px;padding-left:10px;border-left:2px solid var(--pv-line);color:var(--pv-fg2)}',
    '.rb-pv-content code,.rb-pv-content pre{font-family:ui-monospace,Consolas,monospace;font-size:12px;background:var(--pv-panel);padding:1px 3px;border-radius:2px}',
    '.rb-pv-content img{max-width:100%}',
    '.rb-pv-note{display:inline-block;padding:2px 6px;border:1px dashed var(--pv-line);border-radius:3px;color:var(--pv-fg2);font-size:11px}',
    '.rb-pv-empty{color:var(--pv-fg2);font-size:12px}',
    '@keyframes rb-pv-spin{to{transform:rotate(360deg)}}',
    '@media (prefers-reduced-motion: reduce){*{animation:none!important;transition:none!important}}'
  ].join('\n');

  function currentTheme() {
    if (typeof document === 'undefined') return 'dark';
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  function sanitizeCSS(css) {
    return String(css == null ? '' : css)
      .replace(/@import[\s\S]*?;/gi, '')
      .replace(/<\/?style/gi, '')
      .replace(/url\(\s*(['"]?)(?:https?:|\/\/|data:)[^)]*\)/gi, 'none')
      .replace(/expression\s*\(/gi, '(')
      .replace(/(^|[\s,{};])html\b/gi, '$1.rb-stage')
      .replace(/(^|[\s,{};])body\b/gi, '$1.rb-stage')
      .replace(/:root\b/g, '.rb-stage');
  }

  function inlineStyle(value) {
    return sanitizeCSS(value)
      .replace(/position\s*:\s*fixed/gi, 'position:static')
      .replace(/url\(\s*['"]?[^)]*\)/gi, 'none');
  }

  function sanitizeHTML(html) {
    var source = String(html == null ? '' : html);
    if (typeof DOMParser === 'undefined') {
      return '<pre class="rb-pv-content">' + global.CodeHL.escape(source) + '</pre>';
    }
    var doc = new DOMParser().parseFromString(source, 'text/html');
    var body = doc.body;
    if (!body) return '';

    var BAD = { SCRIPT: 1, STYLE: 1, LINK: 1, META: 1, BASE: 1, IFRAME: 1, OBJECT: 1, EMBED: 1, FRAME: 1, FRAMESET: 1, TEMPLATE: 1 };
    var MEDIA = { IMG: 1, PICTURE: 1, AUDIO: 1, VIDEO: 1, SOURCE: 1, TRACK: 1, CANVAS: 1 };
    var nodes = body.querySelectorAll('*');
    for (var i = nodes.length - 1; i >= 0; i--) {
      var el = nodes[i];
      var tag = el.tagName;
      if (BAD[tag]) {
        if (el.parentNode) el.parentNode.removeChild(el);
        continue;
      }
      if (MEDIA[tag]) {
        var label = tag === 'IMG' ? '图片示例' : tag === 'PICTURE' ? '图片示例' : tag.toLowerCase() + ' 示例';
        var holder = doc.createElement('span');
        holder.className = 'rb-pv-note';
        holder.textContent = '[' + label + ']';
        if (el.parentNode) el.parentNode.replaceChild(holder, el);
        continue;
      }

      var attrs = Array.prototype.slice.call(el.attributes);
      for (var a = 0; a < attrs.length; a++) {
        var name = attrs[a].name.toLowerCase();
        var value = attrs[a].value;
        if (name.indexOf('on') === 0 || name === 'srcdoc' || name === 'action' || name === 'formaction' ||
          name === 'ping' || name === 'target' || name === 'download') {
          el.removeAttribute(attrs[a].name);
          continue;
        }
        if (name === 'href' || name === 'xlink:href') {
          if (/^\s*(?:javascript:|data:|https?:|\/\/)/i.test(value)) el.setAttribute('href', '#');
          continue;
        }
        if (name === 'src' || name === 'srcset' || name === 'poster' || name === 'background') {
          el.removeAttribute(attrs[a].name);
          continue;
        }
        if (name === 'style') el.setAttribute('style', inlineStyle(value));
      }
      if (/^(A|BUTTON|INPUT|SELECT|TEXTAREA|LABEL|FORM)$/.test(tag)) {
        el.setAttribute('tabindex', '-1');
        if (tag === 'FORM') {
          el.removeAttribute('action');
          el.removeAttribute('method');
        }
      }
    }
    return body.innerHTML.replace(/<a\s/g, '<a rel="noopener noreferrer" ');
  }

  function presetOf(entry) {
    return PRESET[entry.cat] || 'e';
  }

  function render(host, entry) {
    if (!host || !entry) return;
    var shadow = host.shadowRoot;
    if (!shadow) {
      try {
        shadow = host.attachShadow({ mode: 'open' });
      } catch (err) {
        return;
      }
    }
    host.setAttribute('data-theme', currentTheme());

    if (entry.lang === 'js') {
      shadow.innerHTML = '<style>' + BASE_CSS + '</style><div class="rb-stage"><span class="rb-pv-empty">该条目没有实时预览</span></div>';
      return;
    }

    if (entry.lang === 'html') {
      var clean = sanitizeHTML(entry.example || '');
      var htmlStage = '<div class="rb-stage rb-stage--html"><div class="rb-pv-content">' +
        (clean || '<span class="rb-pv-empty">示例为空</span>') +
        '</div></div>';
      shadow.innerHTML = '<style>' + BASE_CSS + '</style>' + htmlStage;
      if (!host._rbNoNav) {
        host._rbNoNav = true;
        shadow.addEventListener('click', function (event) {
          var link = event.target.closest && event.target.closest('a,button,form,input,select,textarea');
          if (link) event.preventDefault();
        });
      }
      return;
    }

    var css = sanitizeCSS(entry.example || '');
    var stage = STAGE[presetOf(entry)] || STAGE.e;
    shadow.innerHTML = '<style>' + BASE_CSS + '\n' + css + '</style>' + stage;
  }

  global.CSPreview = {
    render: render,
    presetOf: presetOf,
    sanitizeCSS: sanitizeCSS,
    sanitizeHTML: sanitizeHTML,
    syncTheme: function () {
      if (typeof document === 'undefined') return;
      var hosts = document.querySelectorAll('.rb-preview__host');
      var theme = currentTheme();
      for (var i = 0; i < hosts.length; i++) hosts[i].setAttribute('data-theme', theme);
    }
  };
})(typeof window !== 'undefined' ? window : this);
