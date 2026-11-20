import * as THREE from 'three';
import {
  COLORS,
  toon,
  basic,
  makeBox,
  makeCylinder,
  makeSphere,
  makePlane,
  makeTube,
  makeSign,
  addGlow,
  makeGlowPlane,
  canvasTexture,
  randomRange,
  pick,
} from './helpers.js';
import { makeBulletinTexture } from './textures.js';

function makeBicycle() {
  const g = new THREE.Group();
  const tireMat = toon(0x151821);
  const rimMat = toon(0x9da7b0);
  const frameMat = toon(0x2d777a);
  const dark = toon(0x2d323a);

  const wheelPositions = [-0.76, 0.76];
  for (const wx of wheelPositions) {
    const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.41, 0.028, 8, 28), tireMat);
    wheel.position.set(wx, 0.42, 0);
    wheel.castShadow = true;
    g.add(wheel);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.012, 6, 24), rimMat);
    rim.position.set(wx, 0.42, 0);
    rim.castShadow = false;
    g.add(rim);
    for (let i = 0; i < 10; i++) {
      const spoke = makeCylinder({
        rt: 0.006,
        rb: 0.006,
        h: 0.72,
        seg: 4,
        mat: rimMat,
        pos: [wx, 0.42, 0],
        rot: [0, 0, (i / 10) * Math.PI],
        cast: false,
      });
      g.add(spoke);
    }
    const hub = makeCylinder({ rt: 0.055, rb: 0.055, h: 0.11, seg: 8, mat: rimMat, pos: [wx, 0.42, 0], rot: [Math.PI / 2, 0, 0], cast: false });
    g.add(hub);
  }

  const rear = [-0.76, 0.42, 0];
  const front = [0.76, 0.42, 0];
  const seat = [-0.2, 0.92, 0];
  const crank = [-0.02, 0.42, 0];
  const head = [0.56, 0.9, 0];
  const handle = [0.64, 1.04, 0];

  // frame tubes
  const tubes = [
    [rear, seat, 0.026],
    [seat, crank, 0.024],
    [crank, rear, 0.022],
    [crank, head, 0.026],
    [head, seat, 0.024],
    [head, front, 0.022],
    [head, handle, 0.024],
  ];
  for (const [a, b, r] of tubes) {
    g.add(makeTube([a, b], r, frameMat, 12, 6));
  }
  // fork
  g.add(makeTube([[head[0], head[1], 0], [front[0] - 0.02, 0.66, 0], front], 0.018, rimMat, 12, 5));
  // handlebar
  g.add(makeTube([[0.55, 1.05, 0], [0.64, 1.06, 0], [0.7, 1.02, 0.16]], 0.018, dark, 10, 5));
  g.add(makeTube([[0.64, 1.06, 0], [0.7, 1.02, -0.16]], 0.018, dark, 10, 5));
  // saddle
  const saddle = makeBox({ w: 0.3, h: 0.07, d: 0.17, mat: toon(0x3a2520), pos: [-0.2, 0.97, 0], radius: 0.03, outline: 0.005 });
  g.add(saddle);
  // pedals / crank
  g.add(makeCylinder({ rt: 0.06, rb: 0.06, h: 0.12, seg: 10, mat: dark, pos: [crank[0], crank[1], 0], rot: [Math.PI / 2, 0, 0], cast: false }));
  g.add(makeTube([[crank[0], crank[1], 0], [crank[0] + 0.18, 0.3, 0.1]], 0.012, dark, 8, 4));
  g.add(makeBox({ w: 0.15, h: 0.035, d: 0.09, mat: toon(0x2b2e35), pos: [crank[0] + 0.19, 0.28, 0.1], cast: false }));

  // basket
  const basket = new THREE.Group();
  basket.position.set(0.79, 0.93, 0);
  g.add(basket);
  const wireMat = toon(0x5f666e);
  basket.add(makeBox({ w: 0.4, h: 0.3, d: 0.36, mat: toon(0x38434a), pos: [0, 0, 0], radius: 0.03, outline: 0.006, cast: false }));
  for (let i = -2; i <= 2; i++) {
    basket.add(makeBox({ w: 0.02, h: 0.28, d: 0.37, mat: wireMat, pos: [i * 0.08, 0.02, 0], cast: false }));
    basket.add(makeBox({ w: 0.41, h: 0.28, d: 0.02, mat: wireMat, pos: [0, 0.02, i * 0.07], cast: false }));
  }
  // small headlight
  g.add(makeCylinder({ rt: 0.055, rb: 0.07, h: 0.08, seg: 12, mat: toon(0x4e555d), pos: [0.94, 0.8, 0], rot: [0, 0, Math.PI / 2], cast: false }));
  g.add(makeSphere({ r: 0.035, mat: basic(0xffe2a8, { toneMapped: false }), pos: [0.99, 0.8, 0], seg: 8, cast: false }));

  // fenders
  for (const wx of wheelPositions) {
    const fender = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.018, 5, 20, Math.PI * 0.8), rimMat);
    fender.position.set(wx, 0.42, 0);
    fender.rotation.z = Math.PI * 0.1;
    g.add(fender);
  }

  // kickstand
  g.add(makeTube([[-0.1, 0.35, 0.02], [-0.28, 0.02, 0.18], [-0.34, 0.02, 0.28]], 0.012, dark, 10, 4));

  g.rotation.z = -0.07;
  g.rotation.y = -0.08;
  return g;
}

function makeCar() {
  const g = new THREE.Group();
  const bodyMat = toon(0xe8e2d2);
  const bodyShade = toon(0xc7c2b4);
  const trim = toon(0x333941);
  const windowMat = new THREE.MeshPhysicalMaterial({
    color: 0x1b2a3b,
    roughness: 0.12,
    metalness: 0.5,
    transparent: true,
    opacity: 0.92,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  });
  const tireMat = toon(0x11141b);
  const hubMat = toon(0x9aa3ad);

  // lower body
  g.add(
    makeBox({
      w: 1.55,
      h: 0.7,
      d: 3.0,
      mat: bodyMat,
      pos: [0, 0.65, 0],
      radius: 0.14,
      outline: 0.038,
    })
  );
  // upper boxy cabin
  g.add(
    makeBox({
      w: 1.5,
      h: 0.92,
      d: 2.25,
      mat: bodyMat,
      pos: [0, 1.36, -0.02],
      radius: 0.12,
      outline: 0.038,
    })
  );
  // roof
  g.add(
    makeBox({
      w: 1.42,
      h: 0.1,
      d: 2.05,
      mat: bodyShade,
      pos: [0, 1.84, 0.02],
      radius: 0.06,
      outline: 0.012,
    })
  );
  // side window band
  g.add(
    makeBox({
      w: 1.54,
      h: 0.48,
      d: 1.9,
      mat: windowMat,
      pos: [0, 1.42, 0.18],
      radius: 0.06,
      cast: false,
    })
  );
  // window pillars
  for (const x of [-0.79, 0.79]) {
    for (const z of [-0.75, 0.98]) {
      g.add(makeBox({ w: 0.035, h: 0.56, d: 0.09, mat: trim, pos: [x, 1.42, z], cast: false }));
    }
  }
  // rear window
  g.add(
    makeBox({
      w: 1.22,
      h: 0.5,
      d: 0.04,
      mat: windowMat,
      pos: [0, 1.42, 1.15],
      cast: false,
    })
  );
  // front windshield
  g.add(
    makeBox({
      w: 1.28,
      h: 0.52,
      d: 0.04,
      mat: windowMat,
      pos: [0, 1.43, -1.16],
      rot: [0.06, 0, 0],
      cast: false,
    })
  );
  // bumpers
  g.add(makeBox({ w: 1.6, h: 0.16, d: 0.12, mat: trim, pos: [0, 0.35, 1.48], radius: 0.04, cast: false }));
  g.add(makeBox({ w: 1.6, h: 0.16, d: 0.12, mat: trim, pos: [0, 0.35, -1.48], radius: 0.04, cast: false }));
  // headlights
  for (const x of [-0.53, 0.53]) {
    g.add(makeBox({ w: 0.32, h: 0.16, d: 0.05, mat: basic(0xffe4b0, { toneMapped: false }), pos: [x, 0.76, -1.505], cast: false }));
  }
  // tail lights
  for (const x of [-0.62, 0.62]) {
    g.add(makeBox({ w: 0.24, h: 0.34, d: 0.05, mat: basic(0xff4e58, { toneMapped: false }), pos: [x, 0.7, 1.51], cast: false }));
    addGlow(g, { pos: [x, 0.7, 1.58], color: 0xff4056, size: 0.26, opacity: 0.2 });
  }
  // license plate
  const plateTex = canvasTexture(256, 96, (ctx, w, h) => {
    ctx.fillStyle = '#f3f1dc';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#384d47';
    ctx.lineWidth = 5;
    ctx.strokeRect(4, 4, w - 8, h - 8);
    ctx.fillStyle = '#263b36';
    ctx.textAlign = 'center';
    ctx.font = '700 31px "Yu Gothic", sans-serif';
    ctx.fillText('星野 580', w / 2, 46);
    ctx.font = '600 16px "Arial", sans-serif';
    ctx.fillText('HOSHINO', w / 2, 74);
  });
  g.add(makeSign({ w: 0.6, h: 0.22, tex: plateTex, pos: [0, 0.5, 1.55], toneMapped: true }));

  // side logo
  const logoTex = canvasTexture(512, 256, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#1b6370';
    star(ctx, 72, 128, 40, 17);
    ctx.fill();
    ctx.fillStyle = '#1b6370';
    ctx.font = '900 72px "Arial Black", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('HOSHINO', 130, 132);
    ctx.fillStyle = '#c1466f';
    ctx.fillText('MART', 130, 202);
    ctx.font = '600 30px "Yu Gothic", sans-serif';
    ctx.fillStyle = '#40595d';
    ctx.fillText('DELIVERY', 134, 235);
    function star(c, cx, cy, outer, inner) {
      c.beginPath();
      for (let i = 0; i < 10; i++) {
        const a = -Math.PI / 2 + (i * Math.PI) / 5;
        const r = i % 2 === 0 ? outer : inner;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r;
        if (i === 0) c.moveTo(x, y);
        else c.lineTo(x, y);
      }
      c.closePath();
    }
  });
  g.add(makeSign({ w: 1.6, h: 0.8, tex: logoTex, pos: [0.781, 0.88, -0.1], rot: [0, Math.PI / 2, 0], transparent: true, toneMapped: true }));
  g.add(makeSign({ w: 1.6, h: 0.8, tex: logoTex, pos: [-0.781, 0.88, -0.1], rot: [0, -Math.PI / 2, 0], transparent: true, toneMapped: true }));

  // wheels
  for (const x of [-0.79, 0.79]) {
    for (const z of [-0.98, 0.98]) {
      const tire = makeCylinder({
        rt: 0.31,
        rb: 0.31,
        h: 0.2,
        seg: 16,
        mat: tireMat,
        pos: [x, 0.34, z],
        rot: [0, 0, Math.PI / 2],
        outline: 0.012,
      });
      g.add(tire);
      const hub = makeCylinder({
        rt: 0.17,
        rb: 0.17,
        h: 0.215,
        seg: 12,
        mat: hubMat,
        pos: [x, 0.34, z],
        rot: [0, 0, Math.PI / 2],
        cast: false,
      });
      g.add(hub);
      const hubcap = makeCylinder({
        rt: 0.1,
        rb: 0.11,
        h: 0.225,
        seg: 10,
        mat: toon(0x69737d),
        pos: [x, 0.34, z],
        rot: [0, 0, Math.PI / 2],
        cast: false,
      });
      g.add(hubcap);
      // dark arch and bright hub disc make the wheels readable from the side
      for (const side of [-1, 1]) {
        const arch = new THREE.Mesh(new THREE.CircleGeometry(0.33, 20), toon(0x171b22));
        arch.position.set(side * 0.792, 0.34, z);
        arch.rotation.y = side > 0 ? Math.PI / 2 : -Math.PI / 2;
        g.add(arch);
        const cap = new THREE.Mesh(
          new THREE.CircleGeometry(0.13, 16),
          new THREE.MeshBasicMaterial({ color: 0xb8c1ca, toneMapped: true })
        );
        cap.position.set(side * 0.797, 0.34, z);
        cap.rotation.y = side > 0 ? Math.PI / 2 : -Math.PI / 2;
        g.add(cap);
      }
    }
  }
  // mirrors
  for (const x of [-0.83, 0.83]) {
    g.add(makeBox({ w: 0.13, h: 0.1, d: 0.17, mat: trim, pos: [x, 1.22, -0.8], radius: 0.03, cast: false }));
  }
  // sliding door seam
  g.add(makeBox({ w: 0.02, h: 0.58, d: 0.015, mat: trim, pos: [0.785, 0.74, 0.15], cast: false }));
  // little exhaust
  g.add(makeCylinder({ rt: 0.05, rb: 0.05, h: 0.16, seg: 8, mat: toon(0x4b5158), pos: [-0.55, 0.24, 1.56], rot: [Math.PI / 2, 0, 0], cast: false }));

  return g;
}

function makeBulletinBoard() {
  const g = new THREE.Group();
  const wood = toon(0x4b3227);
  const woodLight = toon(0x6e4a35);
  // legs
  for (const x of [-1.04, 1.04]) {
    g.add(makeBox({ w: 0.12, h: 2.32, d: 0.12, mat: wood, pos: [x, 1.16, -0.05], outline: 0.008 }));
  }
  // board body
  g.add(makeBox({ w: 2.3, h: 1.55, d: 0.16, mat: wood, pos: [0, 1.75, 0], radius: 0.02, outline: 0.015 }));
  g.add(
    makeSign({
      w: 2.08,
      h: 1.35,
      tex: makeBulletinTexture(),
      pos: [0, 1.75, 0.086],
      toneMapped: true,
    })
  );
  // top cap and little roof
  g.add(makeBox({ w: 2.5, h: 0.09, d: 0.32, mat: woodLight, pos: [0, 2.57, 0], outline: 0.008 }));
  g.add(
    makeBox({
      w: 2.55,
      h: 0.1,
      d: 0.48,
      mat: woodLight,
      pos: [0, 2.68, -0.02],
      rot: [0.16, 0, 0],
      outline: 0.008,
    })
  );
  // little header lettering
  const headerTex = canvasTexture(512, 96, (ctx, w, h) => {
    ctx.fillStyle = '#4b3227';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#f1ddb7';
    ctx.textAlign = 'center';
    ctx.font = '700 36px "Yu Gothic", serif';
    ctx.fillText('星野町 掲示板', w / 2, 52);
    ctx.font = '600 18px "Arial", sans-serif';
    ctx.fillStyle = '#d4bd91';
    ctx.fillText('HOSHINO COMMUNITY BOARD', w / 2, 78);
  });
  g.add(makeSign({ w: 1.5, h: 0.28, tex: headerTex, pos: [0, 2.43, 0.1], toneMapped: true }));
  // small lamp under the roof
  g.add(makeBox({ w: 0.2, h: 0.06, d: 0.12, mat: basic(0xffd79b, { toneMapped: false }), pos: [0.95, 2.5, 0.2], cast: false }));
  const light = new THREE.PointLight(0xffb268, 7, 3.2, 2);
  light.position.set(0.9, 2.35, 0.5);
  g.add(light);
  addGlow(g, { pos: [0.95, 2.45, 0.3], color: 0xffb56e, size: 1.1, opacity: 0.22 });

  // a couple of flyers stuck to a post
  const flyer = canvasTexture(160, 220, (ctx, w, h) => {
    ctx.fillStyle = '#f6e9c9';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#d85064';
    ctx.fillRect(0, 0, w, 52);
    ctx.fillStyle = '#fff7e6';
    ctx.font = '700 23px "Yu Gothic", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('秋祭り', w / 2, 36);
    ctx.fillStyle = '#394d4a';
    ctx.font = '600 14px "Yu Gothic", sans-serif';
    ctx.fillText('11.22  SAT', w / 2, 88);
    ctx.fillText('星野公園', w / 2, 112);
    ctx.fillStyle = 'rgba(50,60,56,0.35)';
    for (let i = 0; i < 4; i++) ctx.fillRect(22, 136 + i * 16, w - 44, 4);
  });
  g.add(makeSign({ w: 0.38, h: 0.52, tex: flyer, pos: [-1.27, 1.9, 0.06], rot: [0, -0.6, 0], toneMapped: true }));

  g.rotation.y = 0.42;
  return g;
}

function makeTrafficCone() {
  const g = new THREE.Group();
  const orange = toon(0xd36a39, { emissive: 0x271005, emissiveIntensity: 0.2 });
  g.add(makeBox({ w: 0.38, h: 0.05, d: 0.38, mat: toon(0x2f3339), pos: [0, 0.025, 0], radius: 0.01, cast: false }));
  g.add(makeCylinder({ rt: 0.035, rb: 0.16, h: 0.52, seg: 12, mat: orange, pos: [0, 0.29, 0], outline: 0.006 }));
  g.add(makeCylinder({ rt: 0.075, rb: 0.1, h: 0.12, seg: 12, mat: toon(0xe7e1ce), pos: [0, 0.27, 0], cast: false }));
  return g;
}

export function buildProps() {
  const group = new THREE.Group();
  group.name = 'street-props';

  const bike = makeBicycle();
  bike.position.set(-7.4, 0.18, 0.62);
  group.add(bike);

  const car = makeCar();
  car.position.set(13.38, 0.035, 7.2);
  car.rotation.y = 0.015;
  group.add(car);
  // tail light pool on the wet road
  group.add(makeGlowPlane({ w: 2.5, h: 2.0, color: 0xff4a5a, opacity: 0.09, pos: [13.38, 0.04, 9.0] }));
  // soft contact shadow under the van
  const carShadowTex = canvasTexture(256, 256, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 8, w / 2, h / 2, w / 2);
    g.addColorStop(0, 'rgba(0,0,0,0.85)');
    g.addColorStop(0.55, 'rgba(0,0,0,0.46)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });
  const carShadow = makePlane({
    w: 2.7,
    h: 4.2,
    mat: new THREE.MeshBasicMaterial({
      map: carShadowTex,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    }),
    pos: [13.38, 0.045, 7.2],
    rot: [-Math.PI / 2, 0, 0],
  });
  carShadow.renderOrder = 1;
  group.add(carShadow);

  // wheel stop in the empty parking bay
  group.add(
    makeBox({
      w: 1.15,
      h: 0.12,
      d: 0.2,
      mat: toon(0xc9c5b7),
      pos: [13.35, 0.09, 10.65],
      radius: 0.04,
      outline: 0.012,
    })
  );
  for (const x of [12.96, 13.35, 13.74]) {
    group.add(makeBox({ w: 0.1, h: 0.125, d: 0.21, mat: toon(0x3e4650), pos: [x, 0.09, 10.65], cast: false }));
  }

  const board = makeBulletinBoard();
  board.position.set(-12.15, 0.18, -1.55);
  group.add(board);

  const cone1 = makeTrafficCone();
  cone1.position.set(-11.1, 0.18, -2.75);
  group.add(cone1);
  const cone2 = makeTrafficCone();
  cone2.position.set(-11.85, 0.18, -3.15);
  cone2.rotation.y = 0.6;
  group.add(cone2);

  // stacked delivery crates near the alley entrance
  for (let i = 0; i < 3; i++) {
    const crate = makeBox({
      w: 0.52,
      h: 0.3,
      d: 0.4,
      mat: toon(pick([0x74553e, 0x2e6170, 0x8a483d])),
      pos: [-14.25, 0.33 + i * 0.3, 2.1],
      radius: 0.025,
      outline: 0.008,
    });
    group.add(crate);
    group.add(makeBox({ w: 0.43, h: 0.03, d: 0.31, mat: toon(0x29221c), pos: [-14.25, 0.46 + i * 0.3, 2.1], cast: false }));
  }

  // a couple of fallen leaves and wet litter
  for (let i = 0; i < 14; i++) {
    const leaf = makeSphere({
      r: randomRange(0.035, 0.08),
      mat: toon(pick([0x8b5a35, 0x6b4a2d, 0xa46e3c])),
      pos: [randomRange(-6, 10), 0.045, randomRange(1.0, 13.8)],
      scale: [1.7, 0.1, 0.8],
      seg: 5,
      cast: false,
    });
    leaf.rotation.y = Math.random() * Math.PI;
    group.add(leaf);
  }

  return group;
}
