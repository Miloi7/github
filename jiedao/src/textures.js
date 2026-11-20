import * as THREE from 'three';
import { canvasTexture, makeCanvas, randomRange, hexToRgba } from './helpers.js';

function noise(ctx, w, h, count, colors, alphaRange = [0.02, 0.1], sizeRange = [0.4, 2.2]) {
  for (let i = 0; i < count; i++) {
    ctx.globalAlpha = randomRange(alphaRange[0], alphaRange[1]);
    ctx.fillStyle = colors[(Math.random() * colors.length) | 0];
    const s = randomRange(sizeRange[0], sizeRange[1]);
    ctx.fillRect(Math.random() * w, Math.random() * h, s, s);
  }
  ctx.globalAlpha = 1;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
}

function starPath(ctx, cx, cy, outer, inner, points = 5) {
  ctx.beginPath();
  for (let i = 0; i < points * 2; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / points;
    const r = i % 2 === 0 ? outer : inner;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
}

function neonText(ctx, text, x, y, font, color, blur = 18, align = 'left') {
  ctx.save();
  ctx.font = font;
  ctx.textAlign = align;
  ctx.textBaseline = 'middle';
  ctx.shadowColor = color;
  ctx.shadowBlur = blur;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
  ctx.shadowBlur = blur * 0.5;
  ctx.fillStyle = '#ffffff';
  ctx.globalAlpha = 0.85;
  ctx.fillText(text, x, y);
  ctx.restore();
}

export function makeAsphaltTexture() {
  return canvasTexture(
    512,
    512,
    (ctx, w, h) => {
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, '#1a1e2b');
      g.addColorStop(0.55, '#141823');
      g.addColorStop(1, '#1d2130');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      noise(ctx, w, h, 18000, ['#8d96ad', '#05060b', '#5c6378', '#b6bfce'], [0.015, 0.1], [0.4, 1.8]);
      // subtle tar seams
      ctx.strokeStyle = 'rgba(7,8,14,0.5)';
      ctx.lineWidth = 3;
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        let x = Math.random() * w;
        let y = Math.random() * h;
        ctx.moveTo(x, y);
        for (let j = 0; j < 4; j++) {
          x += randomRange(-45, 50);
          y += randomRange(15, 60);
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.strokeStyle = 'rgba(80,89,108,0.08)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 90; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + randomRange(-14, 14), y + randomRange(-9, 9));
        ctx.stroke();
      }
      // wet sheen patches
      for (let i = 0; i < 9; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const r = randomRange(18, 80);
        const rg = ctx.createRadialGradient(x, y, 0, x, y, r);
        rg.addColorStop(0, 'rgba(100,120,160,0.055)');
        rg.addColorStop(1, 'rgba(100,120,160,0)');
        ctx.fillStyle = rg;
        ctx.fillRect(x - r, y - r, r * 2, r * 2);
      }
    },
    { repeat: [4, 4] }
  );
}

export function makeSidewalkTexture() {
  return canvasTexture(
    512,
    512,
    (ctx, w, h) => {
      ctx.fillStyle = '#555966';
      ctx.fillRect(0, 0, w, h);
      const tile = 128;
      for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
          const shade = 78 + Math.random() * 16;
          ctx.fillStyle = `rgb(${shade},${shade + 2},${shade + 9})`;
          ctx.fillRect(x * tile + 3, y * tile + 3, tile - 6, tile - 6);
          ctx.fillStyle = 'rgba(220,225,235,0.035)';
          ctx.fillRect(x * tile + 7, y * tile + 7, tile - 14, 2);
        }
      }
      ctx.strokeStyle = 'rgba(30,32,43,0.75)';
      ctx.lineWidth = 5;
      for (let i = 0; i <= 4; i++) {
        ctx.beginPath();
        ctx.moveTo(i * tile, 0);
        ctx.lineTo(i * tile, h);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * tile);
        ctx.lineTo(w, i * tile);
        ctx.stroke();
      }
      noise(ctx, w, h, 7000, ['#aab1c0', '#252836', '#737888'], [0.02, 0.09], [0.5, 2]);
      for (let i = 0; i < 10; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const r = randomRange(20, 90);
        const rg = ctx.createRadialGradient(x, y, 0, x, y, r);
        rg.addColorStop(0, 'rgba(15,20,34,0.18)');
        rg.addColorStop(1, 'rgba(15,20,34,0)');
        ctx.fillStyle = rg;
        ctx.fillRect(x - r, y - r, r * 2, r * 2);
      }
    },
    { repeat: [0.45, 0.45] }
  );
}

export function makeWoodTexture() {
  return canvasTexture(
    512,
    256,
    (ctx, w, h) => {
      ctx.fillStyle = '#34241f';
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 130; i++) {
        ctx.strokeStyle = `rgba(${randomRange(90, 150)},${randomRange(58, 95)},${randomRange(36, 65)},${randomRange(0.05, 0.22)})`;
        ctx.lineWidth = randomRange(0.5, 2.2);
        const y = Math.random() * h;
        ctx.beginPath();
        ctx.moveTo(0, y);
        for (let x = 0; x < w; x += 24) {
          ctx.lineTo(x, y + Math.sin(x * 0.025 + i) * 2.2 + randomRange(-1, 1));
        }
        ctx.stroke();
      }
      ctx.fillStyle = 'rgba(10,7,8,0.25)';
      for (let i = 0; i < 12; i++) ctx.fillRect(0, Math.random() * h, w, randomRange(1, 3));
    },
    { repeat: [2, 1] }
  );
}

export function makeTactileTexture() {
  return canvasTexture(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#bf9e36';
    ctx.fillRect(0, 0, w, h);
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        const cx = 32 + x * 64;
        const cy = 32 + y * 64;
        const g = ctx.createRadialGradient(cx - 5, cy - 6, 2, cx, cy, 22);
        g.addColorStop(0, '#f5dc7f');
        g.addColorStop(0.6, '#d9b94e');
        g.addColorStop(1, '#927224');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, 19, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.strokeStyle = 'rgba(72,52,12,0.32)';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, w, h);
  });
}

export function makeMainSignTexture() {
  return canvasTexture(2048, 256, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#0c4d5a');
    g.addColorStop(0.5, '#073743');
    g.addColorStop(1, '#05242d');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    // panel light bloom
    const bloom = ctx.createRadialGradient(w * 0.36, h * 0.4, 30, w * 0.36, h * 0.4, w * 0.6);
    bloom.addColorStop(0, 'rgba(96,238,255,0.18)');
    bloom.addColorStop(1, 'rgba(96,238,255,0)');
    ctx.fillStyle = bloom;
    ctx.fillRect(0, 0, w, h);
    // border
    ctx.strokeStyle = 'rgba(117,245,255,0.9)';
    ctx.lineWidth = 5;
    ctx.strokeRect(12, 12, w - 24, h - 24);
    ctx.strokeStyle = 'rgba(255,255,255,0.11)';
    ctx.lineWidth = 2;
    ctx.strokeRect(27, 27, w - 54, h - 54);

    // star mark
    ctx.save();
    ctx.shadowColor = '#64f1ff';
    ctx.shadowBlur = 32;
    ctx.fillStyle = '#6ff4ff';
    starPath(ctx, 128, 122, 70, 30, 5);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(255,255,255,0.92)';
    starPath(ctx, 128, 122, 35, 15, 5);
    ctx.fill();
    ctx.restore();

    // HOSHINO
    ctx.save();
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.font = '900 128px "Arial Black", "Yu Gothic", "Meiryo", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(107,239,255,0.85)';
    ctx.shadowBlur = 20;
    ctx.fillText('HOSHINO', 245, 162);
    const hw = ctx.measureText('HOSHINO').width;
    ctx.fillStyle = '#ff6ba4';
    ctx.shadowColor = 'rgba(255,80,145,0.8)';
    ctx.fillText('MART', 245 + hw + 28, 162);
    ctx.font = '600 34px "Yu Gothic", "Meiryo", sans-serif';
    ctx.fillStyle = '#bdf7ff';
    ctx.shadowColor = 'rgba(95,238,255,0.6)';
    ctx.shadowBlur = 10;
    ctx.fillText('ほしのマート  ／  HOSHINO MART', 250, 217);
    ctx.restore();

    // right-side 24h block
    ctx.save();
    ctx.textAlign = 'right';
    ctx.font = '900 76px "Arial Black", "Yu Gothic", sans-serif';
    ctx.fillStyle = '#f8ffff';
    ctx.shadowColor = '#5feaff';
    ctx.shadowBlur = 22;
    ctx.fillText('24', w - 160, 132);
    ctx.fillStyle = '#ff77ab';
    ctx.font = '900 62px "Arial Black", "Yu Gothic", sans-serif';
    ctx.fillText('H', w - 88, 132);
    ctx.font = '600 27px "Yu Gothic", "Meiryo", sans-serif';
    ctx.fillStyle = '#b6f8ff';
    ctx.shadowBlur = 8;
    ctx.fillText('OPEN 24 HOURS', w - 88, 183);
    ctx.restore();

    // little glowing divider
    ctx.strokeStyle = 'rgba(127,246,255,0.28)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w - 305, 53);
    ctx.lineTo(w - 305, h - 53);
    ctx.stroke();
  });
}

export function makeSideSignTexture() {
  return canvasTexture(1024, 256, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#0b4350');
    g.addColorStop(1, '#05232b');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(111,241,255,0.85)';
    ctx.lineWidth = 5;
    ctx.strokeRect(10, 10, w - 20, h - 20);
    ctx.save();
    ctx.translate(72, 122);
    ctx.rotate(-Math.PI / 2);
    ctx.font = '900 24px "Arial", sans-serif';
    ctx.fillStyle = '#9df6ff';
    ctx.textAlign = 'center';
    ctx.fillText('HOSHINO MART', 0, 0);
    ctx.restore();
    ctx.save();
    ctx.font = '900 94px "Arial Black", "Yu Gothic", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#71efff';
    ctx.shadowBlur = 18;
    ctx.fillText('HOSHINO', 140, 142);
    ctx.fillStyle = '#ff6ea8';
    ctx.fillText('MART', 640, 142);
    ctx.font = '600 25px "Yu Gothic", sans-serif';
    ctx.fillStyle = '#b9f8ff';
    ctx.shadowBlur = 6;
    ctx.fillText('ほしのマート  ・  OPEN 24 HOURS', 143, 193);
    ctx.restore();
    ctx.save();
    ctx.translate(w - 82, 128);
    ctx.fillStyle = '#6ff4ff';
    ctx.shadowColor = '#6ff4ff';
    ctx.shadowBlur = 22;
    starPath(ctx, 0, 0, 42, 18, 5);
    ctx.fill();
    ctx.restore();
  });
}

export function makeBladeSignTexture() {
  return canvasTexture(256, 1024, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#b31c53');
    g.addColorStop(0.4, '#5f1036');
    g.addColorStop(0.7, '#1a1640');
    g.addColorStop(1, '#0b2133');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(255,134,181,0.95)';
    ctx.lineWidth = 5;
    ctx.strokeRect(10, 10, w - 20, h - 20);
    ctx.strokeStyle = 'rgba(135,245,255,0.6)';
    ctx.lineWidth = 2;
    ctx.strokeRect(22, 22, w - 44, h - 44);

    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '900 144px "Arial Black", "Yu Gothic", sans-serif';
    ctx.shadowColor = '#ff77b0';
    ctx.shadowBlur = 26;
    ctx.fillStyle = '#ffffff';
    ctx.fillText('24', w / 2, 180);
    ctx.fillText('H', w / 2, 338);
    ctx.shadowColor = '#6df5ff';
    ctx.shadowBlur = 22;
    ctx.fillStyle = '#6df5ff';
    starPath(ctx, w / 2, 480, 52, 22, 5);
    ctx.fill();
    ctx.font = '700 34px "Yu Gothic", sans-serif';
    ctx.fillStyle = '#ffd2e3';
    ctx.fillText('OPEN', w / 2, 590);
    ctx.font = '900 52px "Arial Black", sans-serif';
    ctx.fillText('MART', w / 2, 667);
    ctx.font = '600 22px "Yu Gothic", sans-serif';
    ctx.fillStyle = '#b8f5ff';
    ctx.fillText('ほしの', w / 2, 748);
    ctx.fillText('まーと', w / 2, 784);
    ctx.font = '600 18px "Arial", sans-serif';
    ctx.fillStyle = 'rgba(200,250,255,0.75)';
    ctx.fillText('DRINKS ・ FOOD ・ ATM', w / 2, 874);
    ctx.restore();

    ctx.fillStyle = 'rgba(255,255,255,0.2)';
    for (let y = 920; y < 990; y += 12) ctx.fillRect(34, y, w - 68, 3);
  });
}

export function makeWindowDecal(text, color = '#69f4ff', sub = '') {
  return canvasTexture(512, 256, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    neonText(ctx, text, w / 2, h * 0.47, '700 74px "Arial Black", "Yu Gothic", sans-serif', color, 24, 'center');
    if (sub) neonText(ctx, sub, w / 2, h * 0.75, '600 30px "Yu Gothic", sans-serif', '#d5fbff', 10, 'center');
    ctx.strokeStyle = hexToRgba(color, 0.6);
    ctx.lineWidth = 3;
    roundRect(ctx, 24, 24, w - 48, h - 48, 16);
    ctx.stroke();
  });
}

export function makeDoorDecal() {
  return canvasTexture(512, 256, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    neonText(ctx, 'WELCOME', w / 2, 90, '700 56px "Arial Black", sans-serif', '#aef9ff', 16, 'center');
    neonText(ctx, '自動ドア', w / 2, 165, '600 42px "Yu Gothic", sans-serif', '#ffffff', 12, 'center');
    ctx.fillStyle = 'rgba(122,246,255,0.6)';
    ctx.fillRect(150, 206, w - 300, 3);
  });
}

export function makeVendingTexture(scheme = 'red') {
  const palettes = {
    red: { body: '#d72d3f', dark: '#6d0d19', accent: '#fff6e8', glow: '#ffb4bf' },
    blue: { body: '#e8eef0', dark: '#294872', accent: '#29b9d4', glow: '#b9f6ff' },
  };
  const c = palettes[scheme] || palettes.red;
  return canvasTexture(512, 1024, (ctx, w, h) => {
    ctx.fillStyle = c.body;
    ctx.fillRect(0, 0, w, h);
    // body shading
    const side = ctx.createLinearGradient(0, 0, w, 0);
    side.addColorStop(0, 'rgba(0,0,0,0.22)');
    side.addColorStop(0.18, 'rgba(255,255,255,0.08)');
    side.addColorStop(0.8, 'rgba(255,255,255,0.03)');
    side.addColorStop(1, 'rgba(0,0,0,0.3)');
    ctx.fillStyle = side;
    ctx.fillRect(0, 0, w, h);

    // top brand plate
    ctx.fillStyle = c.dark;
    ctx.fillRect(24, 28, w - 48, 78);
    ctx.fillStyle = '#f8ffff';
    ctx.font = '900 46px "Arial Black", "Yu Gothic", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('DRINK', 48, 83);
    ctx.font = '600 23px "Yu Gothic", sans-serif';
    ctx.textAlign = 'right';
    ctx.fillStyle = c.glow;
    ctx.fillText('つめた〜い', w - 48, 77);

    // lit display window
    ctx.save();
    ctx.shadowColor = c.glow;
    ctx.shadowBlur = 34;
    ctx.fillStyle = '#f2fdff';
    ctx.fillRect(30, 128, w - 60, 500);
    ctx.restore();

    const canColors = ['#f4c542', '#e84f5f', '#3bb9d8', '#e9e7d9', '#5ec28f', '#a96ce0', '#f08a4b', '#69d5e8'];
    const rows = 3;
    const cols = 6;
    for (let r = 0; r < rows; r++) {
      ctx.fillStyle = 'rgba(28,42,56,0.22)';
      ctx.fillRect(42, 144 + r * 162, w - 84, 5);
      for (let i = 0; i < cols; i++) {
        const x = 58 + i * 66;
        const y = 162 + r * 162;
        ctx.fillStyle = 'rgba(18,31,48,0.25)';
        ctx.fillRect(x - 3, y + 112, 59, 10);
        const col = canColors[(r * cols + i + (scheme === 'blue' ? 2 : 0)) % canColors.length];
        ctx.fillStyle = col;
        roundRect(ctx, x, y, 54, 112, 8);
        ctx.fill();
        const sheen = ctx.createLinearGradient(x, y, x + 54, y);
        sheen.addColorStop(0, 'rgba(255,255,255,0.5)');
        sheen.addColorStop(0.25, 'rgba(255,255,255,0.06)');
        sheen.addColorStop(1, 'rgba(0,0,0,0.14)');
        ctx.fillStyle = sheen;
        roundRect(ctx, x, y, 54, 112, 8);
        ctx.fill();
        ctx.fillStyle = 'rgba(20,24,34,0.72)';
        ctx.fillRect(x, y + 52, 54, 22);
        ctx.fillStyle = '#ffffff';
        ctx.font = '700 11px "Arial", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Café', x + 27, y + 67);
        ctx.fillStyle = '#ffec9b';
        ctx.beginPath();
        ctx.arc(x + 44, y + 18, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    // display glass reflections
    ctx.save();
    ctx.globalAlpha = 0.16;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(0, 140);
    ctx.lineTo(230, 140);
    ctx.lineTo(80, 640);
    ctx.lineTo(0, 640);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(330, 140);
    ctx.lineTo(390, 140);
    ctx.lineTo(240, 640);
    ctx.lineTo(180, 640);
    ctx.fill();
    ctx.restore();

    // selection buttons
    for (let r = 0; r < 3; r++) {
      for (let i = 0; i < 6; i++) {
        ctx.fillStyle = '#e7f7ff';
        ctx.beginPath();
        ctx.arc(91 + i * 66, 657 + r * 22, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.beginPath();
        ctx.arc(91 + i * 66, 657 + r * 22, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // price / coin area
    ctx.fillStyle = c.dark;
    ctx.fillRect(30, 712, w - 60, 110);
    ctx.fillStyle = '#ffe89b';
    ctx.font = '700 52px "Arial Black", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('¥130', 50, 782);
    ctx.fillStyle = '#f7feff';
    ctx.font = '600 23px "Yu Gothic", sans-serif';
    ctx.fillText('つめたい / あたたかい', 50, 810);
    ctx.fillStyle = '#20252d';
    roundRect(ctx, 352, 728, 58, 30, 4);
    ctx.fill();
    ctx.fillStyle = '#c9d3dd';
    ctx.fillRect(362, 738, 38, 4);
    ctx.fillStyle = '#d8e4ee';
    roundRect(ctx, 428, 728, 48, 30, 5);
    ctx.fill();

    // lower delivery flap
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    roundRect(ctx, 62, 862, w - 124, 110, 8);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.28)';
    ctx.lineWidth = 3;
    roundRect(ctx, 70, 870, w - 140, 94, 6);
    ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.2)';
    ctx.fillRect(146, 910, 220, 5);
    ctx.fillStyle = c.accent;
    ctx.font = '600 24px "Yu Gothic", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('HOSHINO DRINK', w / 2, 992);
  });
}

export function makePosterTexture(variant = 0) {
  const sets = [
    { sky: ['#251449', '#d04e7b', '#f8a75f'], accent: '#fbe7b2', title: '星空の約束', sub: 'STARLIGHT PROMISE' },
    { sky: ['#062838', '#0d6b74', '#7ad9c8'], accent: '#ffd5a4', title: '雨あがり', sub: 'AFTER THE RAIN' },
    { sky: ['#22142e', '#6c255d', '#e15c86'], accent: '#b7f6ff', title: '夏の終わり', sub: 'LAST DAYS OF SUMMER' },
  ];
  const s = sets[variant % sets.length];
  return canvasTexture(512, 768, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, s.sky[0]);
    g.addColorStop(0.55, s.sky[1]);
    g.addColorStop(1, s.sky[2]);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    // stars
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    for (let i = 0; i < 80; i++) {
      const a = Math.random() * 0.8 + 0.2;
      ctx.globalAlpha = a;
      const r = Math.random() * 1.8 + 0.4;
      ctx.beginPath();
      ctx.arc(Math.random() * w, Math.random() * h * 0.55, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    // moon
    ctx.save();
    ctx.shadowColor = s.accent;
    ctx.shadowBlur = 50;
    ctx.fillStyle = s.accent;
    ctx.beginPath();
    ctx.arc(w * 0.67, h * 0.28, 60, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    // cloud bands
    ctx.fillStyle = 'rgba(255,255,255,0.09)';
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.ellipse(w * (0.25 + i * 0.15), h * (0.22 + i * 0.03), 150, 16, -0.08, 0, Math.PI * 2);
      ctx.fill();
    }
    // distant city silhouette
    ctx.fillStyle = 'rgba(12,13,30,0.72)';
    let x = 0;
    while (x < w) {
      const bw = randomRange(18, 54);
      const bh = randomRange(40, 170);
      ctx.fillRect(x, h - 200 - bh, bw, bh + 50);
      ctx.fillStyle = 'rgba(255,216,130,0.5)';
      for (let wy = h - 200 - bh + 14; wy < h - 210; wy += 22) {
        for (let wx = x + 7; wx < x + bw - 8; wx += 15) {
          if (Math.random() > 0.55) ctx.fillRect(wx, wy, 4, 6);
        }
      }
      ctx.fillStyle = 'rgba(12,13,30,0.72)';
      x += bw + randomRange(5, 13);
    }
    // figure silhouette with umbrella
    ctx.fillStyle = 'rgba(14,12,27,0.92)';
    ctx.beginPath();
    ctx.ellipse(w * 0.39, h * 0.61, 58, 19, 0, 0, Math.PI * 2);
    ctx.fill();
    roundRect(ctx, w * 0.39 - 19, h * 0.61, 38, 84, 14);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(w * 0.39, h * 0.58, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(14,12,27,0.92)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.39 + 3, h * 0.64);
    ctx.lineTo(w * 0.46, h * 0.74);
    ctx.stroke();
    // umbrella
    ctx.fillStyle = 'rgba(14,12,27,0.94)';
    ctx.beginPath();
    ctx.arc(w * 0.39, h * 0.55, 78, Math.PI, 0);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = 'rgba(14,12,27,0.94)';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.39, h * 0.55);
    ctx.lineTo(w * 0.39, h * 0.69);
    ctx.stroke();
    // foreground
    const fg = ctx.createLinearGradient(0, h * 0.75, 0, h);
    fg.addColorStop(0, 'rgba(8,10,22,0)');
    fg.addColorStop(1, 'rgba(8,10,22,0.95)');
    ctx.fillStyle = fg;
    ctx.fillRect(0, h * 0.7, w, h * 0.3);
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    for (let i = 0; i < 4; i++) ctx.fillRect(0, h * 0.72 + i * 10, w, 1);
    // title
    ctx.save();
    ctx.textAlign = 'center';
    ctx.font = '700 58px "Yu Mincho", "Hiragino Mincho ProN", serif';
    ctx.fillStyle = '#fff8ec';
    ctx.shadowColor = '#130d30';
    ctx.shadowBlur = 16;
    ctx.fillText(s.title, w / 2, h - 98);
    ctx.font = '600 21px "Arial", sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.fillText(s.sub, w / 2, h - 58);
    ctx.font = '600 15px "Arial", sans-serif';
    ctx.fillText('HOSHINO MART  SHORT FILM', w / 2, h - 27);
    ctx.restore();
    // frame
    ctx.strokeStyle = 'rgba(255,255,255,0.5)';
    ctx.lineWidth = 4;
    ctx.strokeRect(9, 9, w - 18, h - 18);
  });
}

export function makeBulletinTexture() {
  return canvasTexture(512, 384, (ctx, w, h) => {
    ctx.fillStyle = '#785137';
    ctx.fillRect(0, 0, w, h);
    noise(ctx, w, h, 5000, ['#c79a6c', '#41291e', '#a8784f'], [0.03, 0.14], [0.5, 2.5]);
    const papers = [
      { x: 30, y: 40, w: 130, h: 180, c: '#f4e7c4', t: '町内会', sub: '秋祭りのお知らせ' },
      { x: 185, y: 30, w: 150, h: 105, c: '#f0c8d8', t: '防災訓練', sub: '11月23日 10:00' },
      { x: 190, y: 160, w: 125, h: 150, c: '#cde6df', t: '落とし物', sub: '黒い傘を預かっています' },
      { x: 335, y: 45, w: 140, h: 190, c: '#f4d58a', t: 'HOSHINO', sub: 'アルバイト募集' },
      { x: 350, y: 258, w: 130, h: 88, c: '#e9eef4', t: '回覧板', sub: '次は 2丁目へ' },
    ];
    for (const p of papers) {
      ctx.save();
      ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
      ctx.rotate(randomRange(-0.06, 0.06));
      ctx.shadowColor = 'rgba(0,0,0,0.4)';
      ctx.shadowBlur = 5;
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#2b2620';
      ctx.font = `700 ${Math.min(23, p.w / 6)}px "Yu Gothic", sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText(p.t, 0, -p.h / 2 + 34);
      ctx.font = '500 12px "Yu Gothic", sans-serif';
      ctx.fillStyle = 'rgba(35,30,25,0.8)';
      const lines = p.sub.match(/.{1,10}/g) || [];
      lines.forEach((line, i) => ctx.fillText(line, 0, -p.h / 2 + 56 + i * 17));
      ctx.strokeStyle = 'rgba(50,42,35,0.35)';
      ctx.lineWidth = 1;
      for (let y = -p.h / 2 + 72; y < p.h / 2 - 8; y += 14) {
        ctx.beginPath();
        ctx.moveTo(-p.w / 2 + 12, y + (p.sub ? 30 : 0));
        ctx.lineTo(p.w / 2 - 12, y + (p.sub ? 30 : 0));
        ctx.stroke();
      }
      // pin
      ctx.fillStyle = ['#d94b58', '#4c8ad9', '#e6b63f'][(Math.random() * 3) | 0];
      ctx.beginPath();
      ctx.arc(0, -p.h / 2 + 10, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    // frame shadow
    ctx.strokeStyle = 'rgba(38,20,10,0.85)';
    ctx.lineWidth = 14;
    ctx.strokeRect(7, 7, w - 14, h - 14);
  });
}

export function makePlaqueTexture() {
  return canvasTexture(1024, 220, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#b98b47');
    g.addColorStop(0.5, '#e4c27c');
    g.addColorStop(1, '#8e6431');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#4f3518';
    ctx.lineWidth = 10;
    ctx.strokeRect(8, 8, w - 16, h - 16);
    ctx.strokeStyle = 'rgba(255,247,214,0.7)';
    ctx.lineWidth = 2;
    ctx.strokeRect(23, 23, w - 46, h - 46);
    ctx.fillStyle = '#332110';
    ctx.textAlign = 'center';
    ctx.font = '900 55px "Arial Black", "Yu Gothic", sans-serif';
    ctx.fillText('HOSHINO MART', w / 2, 92);
    ctx.font = '600 28px "Yu Mincho", "Yu Gothic", serif';
    ctx.fillText('雨夜の街角  ／  RAINY NIGHT CORNER', w / 2, 138);
    ctx.font = '600 18px "Arial", sans-serif';
    ctx.fillStyle = 'rgba(40,25,8,0.8)';
    ctx.fillText('1 : 64  COLLECTIBLE DIORAMA', w / 2, 176);
    ctx.fillStyle = 'rgba(60,38,12,0.6)';
    ctx.beginPath();
    ctx.arc(64, 110, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(w - 64, 110, 25, 0, Math.PI * 2);
    ctx.fill();
  });
}

export function makeManholeTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.translate(w / 2, h / 2);
    const g = ctx.createRadialGradient(-50, -60, 20, 0, 0, 250);
    g.addColorStop(0, '#6d7482');
    g.addColorStop(0.6, '#3b414d');
    g.addColorStop(1, '#222731');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(0, 0, 246, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#8d95a5';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(0, 0, 236, 0, Math.PI * 2);
    ctx.stroke();
    ctx.lineWidth = 3;
    for (let r = 50; r < 220; r += 27) {
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(20,24,32,0.65)';
    ctx.lineWidth = 9;
    for (let i = 0; i < 18; i++) {
      const a = (i / 18) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * 58, Math.sin(a) * 58);
      ctx.lineTo(Math.cos(a) * 218, Math.sin(a) * 218);
      ctx.stroke();
    }
    ctx.fillStyle = 'rgba(197,207,224,0.65)';
    ctx.font = '700 34px "Yu Gothic", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('星野市 下水道', 0, 0);
    ctx.font = '600 18px "Arial", sans-serif';
    ctx.fillText('HOSHINO CITY', 0, 34);
    ctx.restore();
  });
}

export function makeBinLabel(text, color = '#62d8e4') {
  return canvasTexture(256, 256, (ctx, w, h) => {
    ctx.fillStyle = 'rgba(12,22,32,0.9)';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.strokeRect(8, 8, w - 16, h - 16);
    // simple recycling glyph
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(w / 2, 102, 52, -0.3, Math.PI * 1.35);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(w / 2 + 62, 80);
    ctx.lineTo(w / 2 + 54, 120);
    ctx.lineTo(w / 2 + 28, 96);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#eafcff';
    ctx.font = '700 39px "Yu Gothic", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(text, w / 2, 207);
    ctx.font = '600 20px "Arial", sans-serif';
    ctx.fillStyle = color;
    ctx.fillText('RECYCLE', w / 2, 237);
  });
}

export function makeStopTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.shadowColor = 'rgba(0,0,0,0.45)';
    ctx.shadowBlur = 20;
    ctx.fillStyle = '#d9434f';
    ctx.beginPath();
    ctx.moveTo(0, -225);
    ctx.lineTo(222, 170);
    ctx.lineTo(-222, 170);
    ctx.closePath();
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = '#fff4e3';
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.moveTo(0, -178);
    ctx.lineTo(175, 138);
    ctx.lineTo(-175, 138);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = '#fff9ee';
    ctx.font = '900 98px "Yu Gothic", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('止', 0, -30);
    ctx.fillText('ま', 0, 65);
    ctx.fillText('れ', 0, 150);
    ctx.restore();
  });
}

export function makeParkingSignTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    ctx.fillStyle = '#16468c';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#f2f7ff';
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#f6fbff');
    g.addColorStop(1, '#c9d9ec');
    ctx.fillStyle = g;
    ctx.fillRect(20, 20, w - 40, h - 40);
    ctx.fillStyle = '#16468c';
    ctx.font = '900 250px "Arial Black", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('P', w / 2, 235);
    ctx.font = '700 38px "Yu Gothic", sans-serif';
    ctx.fillText('24H', w / 2, 406);
    ctx.font = '600 22px "Arial", sans-serif';
    ctx.fillText('HOSHINO MART', w / 2, 448);
    ctx.strokeStyle = '#16468c';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, w - 40, h - 40);
  });
}

export function makeStreetNameTexture() {
  return canvasTexture(1024, 256, (ctx, w, h) => {
    ctx.fillStyle = '#eef5f4';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#1d6f5e';
    ctx.fillRect(0, 0, w, 22);
    ctx.fillRect(0, h - 22, w, 22);
    ctx.strokeStyle = '#1d6f5e';
    ctx.lineWidth = 6;
    ctx.strokeRect(14, 14, w - 28, h - 28);
    ctx.fillStyle = '#15342f';
    ctx.textAlign = 'center';
    ctx.font = '700 78px "Yu Gothic", "Meiryo", sans-serif';
    ctx.fillText('星野町 一丁目', w / 2, 120);
    ctx.fillStyle = '#2f5f57';
    ctx.font = '600 34px "Arial", sans-serif';
    ctx.fillText('HOSHINO 1-CHOME', w / 2, 178);
    ctx.fillStyle = '#1d6f5e';
    ctx.font = '600 19px "Arial", sans-serif';
    ctx.fillText('HOSHINO CITY  ·  NIGHT DISTRICT', w / 2, 215);
  });
}

export function makeRoadTextTexture(text = '止まれ') {
  return canvasTexture(512, 512, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.font = '900 150px "Yu Gothic", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(238,239,230,0.82)';
    ctx.shadowColor = 'rgba(255,255,255,0.3)';
    ctx.shadowBlur = 5;
    [...text].forEach((ch, i) => ctx.fillText(ch, 0, -330 + i * 170));
    ctx.restore();
  });
}

export function makeMatTexture() {
  return canvasTexture(512, 256, (ctx, w, h) => {
    ctx.fillStyle = '#12262e';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(111,244,255,0.42)';
    ctx.lineWidth = 8;
    ctx.strokeRect(10, 10, w - 20, h - 20);
    ctx.fillStyle = 'rgba(111,244,255,0.14)';
    for (let x = 22; x < w; x += 26) ctx.fillRect(x, 22, 2, h - 44);
    ctx.fillStyle = '#d8fbff';
    ctx.textAlign = 'center';
    ctx.font = '900 46px "Arial Black", "Yu Gothic", sans-serif';
    ctx.fillText('HOSHINO MART', w / 2, 112);
    ctx.font = '600 26px "Yu Gothic", sans-serif';
    ctx.fillStyle = '#85e9f2';
    ctx.fillText('WELCOME  ·  いらっしゃいませ', w / 2, 158);
    ctx.fillStyle = '#ff6ea8';
    starPath(ctx, 78, 74, 22, 9, 5);
    ctx.fill();
    starPath(ctx, w - 78, 74, 22, 9, 5);
    ctx.fill();
  });
}

export function makeRegisterTexture() {
  return canvasTexture(256, 192, (ctx, w, h) => {
    ctx.fillStyle = '#0a1a24';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#42d4d8';
    ctx.fillRect(0, 0, w, 23);
    ctx.fillStyle = '#0a1a24';
    ctx.font = '700 13px "Arial", sans-serif';
    ctx.fillText('HOSHINO POS', 10, 16);
    ctx.fillStyle = '#b7f8ff';
    ctx.font = '600 14px monospace';
    const lines = ['TOTAL     ¥ 780', 'COFFEE    ¥ 130', 'ONIGIRI   ¥ 150', 'HOT SNACK ¥ 220', '----------------', 'THANK YOU!'];
    lines.forEach((l, i) => ctx.fillText(l, 14, 48 + i * 21));
    ctx.fillStyle = 'rgba(73,218,227,0.2)';
    ctx.fillRect(170, 34, 70, 110);
    ctx.fillStyle = '#6ff4ff';
    ctx.font = '700 30px "Arial", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('24', 205, 70);
    ctx.font = '600 12px "Arial", sans-serif';
    ctx.fillText('HOURS', 205, 86);
    starPath(ctx, 205, 112, 18, 8, 5);
    ctx.fill();
  });
}

export function makeCoffeeMenuTexture() {
  return canvasTexture(512, 640, (ctx, w, h) => {
    ctx.fillStyle = '#f6efdf';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#173e3d';
    ctx.fillRect(0, 0, w, 104);
    ctx.fillStyle = '#f8f3e5';
    ctx.textAlign = 'center';
    ctx.font = '900 50px "Arial Black", "Yu Gothic", sans-serif';
    ctx.fillText('HOSHINO CAFÉ', w / 2, 66);
    ctx.fillStyle = '#245b54';
    ctx.font = '700 31px "Yu Gothic", sans-serif';
    ctx.textAlign = 'left';
    const items = [['ブレンド', '¥120'], ['カフェラテ', '¥180'], ['抹茶ラテ', '¥190'], ['ホットスナック', '¥220'], ['おでん', '¥90〜']];
    items.forEach(([name, price], i) => {
      const y = 180 + i * 76;
      ctx.fillStyle = '#2a3a37';
      ctx.fillText(name, 54, y);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#a44a32';
      ctx.fillText(price, w - 54, y);
      ctx.textAlign = 'left';
      ctx.strokeStyle = 'rgba(43,55,50,0.25)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(54, y + 20);
      ctx.lineTo(w - 54, y + 20);
      ctx.stroke();
    });
    ctx.fillStyle = '#173e3d';
    ctx.font = '600 22px "Yu Gothic", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('いつでも、あったかい。', w / 2, h - 52);
  });
}

export function makeVentTexture() {
  return canvasTexture(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#626b79';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(20,24,31,0.8)';
    ctx.lineWidth = 6;
    for (let y = 18; y < h; y += 20) {
      ctx.beginPath();
      ctx.moveTo(16, y);
      ctx.lineTo(w - 16, y);
      ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.lineWidth = 2;
    for (let y = 20; y < h; y += 20) {
      ctx.beginPath();
      ctx.moveTo(16, y);
      ctx.lineTo(w - 16, y);
      ctx.stroke();
    }
  });
}

export function makeAwningStripeTexture() {
  return canvasTexture(512, 256, (ctx, w, h) => {
    ctx.fillStyle = '#0d3b43';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(86,223,231,0.14)';
    for (let x = 0; x < w; x += 68) ctx.fillRect(x, 0, 34, h);
    ctx.fillStyle = 'rgba(255,255,255,0.09)';
    for (let x = 34; x < w; x += 68) ctx.fillRect(x, 0, 2, h);
    ctx.strokeStyle = 'rgba(120,250,255,0.35)';
    ctx.lineWidth = 4;
    ctx.strokeRect(0, 2, w, h - 4);
  });
}
