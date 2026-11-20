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
  sagWire,
  setWireMaterial,
  canvasTexture,
  makeSign,
  addGlow,
  makeGlowPlane,
  randomRange,
  pick,
} from './helpers.js';
import {
  makeAsphaltTexture,
  makeSidewalkTexture,
  makeWoodTexture,
  makeTactileTexture,
  makePlaqueTexture,
  makeManholeTexture,
  makeStreetNameTexture,
  makeParkingSignTexture,
  makeStopTexture,
  makeRoadTextTexture,
} from './textures.js';

const BASE = 30;
const SIDEWALK_Y = 0.18;

function radialShadowTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 20, w / 2, h / 2, w / 2);
    g.addColorStop(0, 'rgba(0,0,0,0.72)');
    g.addColorStop(0.45, 'rgba(0,0,0,0.34)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });
}

function reflectionTexture() {
  return canvasTexture(128, 512, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const broad = ctx.createLinearGradient(0, 0, w, 0);
    broad.addColorStop(0, 'rgba(255,255,255,0)');
    broad.addColorStop(0.22, 'rgba(255,255,255,0.25)');
    broad.addColorStop(0.48, 'rgba(255,255,255,0.8)');
    broad.addColorStop(0.62, 'rgba(255,255,255,0.2)');
    broad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = broad;
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'destination-in';
    const fade = ctx.createLinearGradient(0, 0, 0, h);
    fade.addColorStop(0, 'rgba(255,255,255,0)');
    fade.addColorStop(0.1, 'rgba(255,255,255,0.55)');
    fade.addColorStop(0.38, 'rgba(255,255,255,1)');
    fade.addColorStop(0.7, 'rgba(255,255,255,0.4)');
    fade.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = fade;
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'source-over';
    // broken shimmer bands
    ctx.globalCompositeOperation = 'destination-out';
    for (let i = 0; i < 42; i++) {
      ctx.globalAlpha = randomRange(0.05, 0.38);
      ctx.fillStyle = '#000';
      ctx.fillRect(randomRange(0, w), randomRange(0, h), randomRange(6, 70), randomRange(1, 4));
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  });
}

function puddleGlowTexture() {
  return canvasTexture(512, 256, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const mask = ctx.createRadialGradient(w / 2, h / 2, 8, w / 2, h / 2, w / 2);
    mask.addColorStop(0, 'rgba(255,255,255,0.9)');
    mask.addColorStop(0.55, 'rgba(255,255,255,0.55)');
    mask.addColorStop(0.85, 'rgba(255,255,255,0.14)');
    mask.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = mask;
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'source-in';
    const base = ctx.createLinearGradient(0, 0, 0, h);
    base.addColorStop(0, 'rgba(104,229,255,0.26)');
    base.addColorStop(0.45, 'rgba(69,111,180,0.12)');
    base.addColorStop(1, 'rgba(255,128,177,0.2)');
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';
    const colors = ['rgba(122,245,255,0.55)', 'rgba(255,132,178,0.38)', 'rgba(255,199,121,0.3)', 'rgba(147,183,255,0.22)'];
    for (let i = 0; i < 15; i++) {
      const x = randomRange(30, w - 30);
      const ww = randomRange(3, 22);
      const g = ctx.createLinearGradient(x, 0, x + ww, 0);
      g.addColorStop(0, 'rgba(255,255,255,0)');
      g.addColorStop(0.5, colors[i % colors.length]);
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x, randomRange(8, 40), ww, randomRange(h * 0.35, h * 0.9));
    }
    // horizontal ripple bands break up the vertical smears
    ctx.globalCompositeOperation = 'destination-out';
    for (let i = 0; i < 18; i++) {
      ctx.globalAlpha = randomRange(0.08, 0.35);
      ctx.fillStyle = '#000';
      ctx.fillRect(0, randomRange(0, h), w, randomRange(1, 3));
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  });
}

export function buildStreet() {
  const group = new THREE.Group();
  group.name = 'street-and-base';
  const puddles = [];

  const asphaltTex = makeAsphaltTexture();
  const sidewalkTex = makeSidewalkTexture();
  const woodTex = makeWoodTexture();
  const tactileTex = makeTactileTexture();
  const reflectionTex = reflectionTexture();
  const puddleGlowTex = puddleGlowTexture();

  const roadMat = new THREE.MeshPhysicalMaterial({
    map: asphaltTex,
    color: 0xffffff,
    roughness: 0.27,
    metalness: 0.12,
    clearcoat: 0.65,
    clearcoatRoughness: 0.25,
  });
  const sidewalkMat = new THREE.MeshStandardMaterial({
    map: sidewalkTex,
    color: 0xffffff,
    roughness: 0.42,
    metalness: 0.08,
    side: THREE.DoubleSide,
  });
  const curbMat = toon(0x686c7a);
  const stoneSideMat = toon(0x333543);
  const woodMat = toon(0x6a4a3a, { map: woodTex });
  const darkStoneMat = toon(0x20232f);
  const brassMat = toon(0xb98a47, { emissive: 0x2c1805, emissiveIntensity: 0.3 });
  const paintMat = new THREE.MeshStandardMaterial({
    color: 0xdadbcf,
    roughness: 0.28,
    metalness: 0.08,
    transparent: true,
    opacity: 0.9,
    polygonOffset: true,
    polygonOffsetFactor: -1,
  });
  const paintYellow = new THREE.MeshStandardMaterial({
    color: 0xd7bd66,
    roughness: 0.34,
    metalness: 0.05,
    transparent: true,
    opacity: 0.9,
  });
  const wireMat = toon(0x14151f);
  setWireMaterial(wireMat);

  // ---------- collectible base ----------
  const shadow = makePlane({
    w: 48,
    h: 48,
    mat: new THREE.MeshBasicMaterial({
      map: radialShadowTexture(),
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    }),
    pos: [0, -1.6, 0],
    rot: [-Math.PI / 2, 0, 0],
  });
  shadow.renderOrder = -2;
  group.add(shadow);

  // bottom wooden plinth
  group.add(
    makeBox({
      w: BASE + 0.7,
      h: 0.5,
      d: BASE + 0.7,
      mat: woodMat,
      pos: [0, -1.3, 0],
      radius: 0.06,
      outline: 0.025,
    })
  );
  // brass trim
  group.add(
    makeBox({
      w: BASE + 0.74,
      h: 0.055,
      d: BASE + 0.74,
      mat: brassMat,
      pos: [0, -1.03, 0],
      radius: 0.02,
      cast: false,
    })
  );
  // mid layer
  group.add(
    makeBox({
      w: BASE + 0.38,
      h: 0.55,
      d: BASE + 0.38,
      mat: stoneSideMat,
      pos: [0, -0.75, 0],
      radius: 0.04,
    })
  );
  group.add(
    makeBox({
      w: BASE + 0.42,
      h: 0.045,
      d: BASE + 0.42,
      mat: brassMat,
      pos: [0, -0.465, 0],
      radius: 0.01,
      cast: false,
    })
  );
  // road slab
  const slabGeo = new THREE.BoxGeometry(BASE, 0.44, BASE);
  const slabMats = [stoneSideMat, stoneSideMat, roadMat, darkStoneMat, stoneSideMat, stoneSideMat];
  const slab = new THREE.Mesh(slabGeo, slabMats);
  slab.position.set(0, -0.22, 0);
  slab.receiveShadow = true;
  slab.castShadow = true;
  group.add(slab);

  // brass corner caps on the base
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      group.add(
        makeBox({
          w: 0.22,
          h: 1.0,
          d: 0.22,
          mat: brassMat,
          pos: [sx * (BASE / 2 + 0.02), -0.7, sz * (BASE / 2 + 0.02)],
          radius: 0.02,
          cast: false,
        })
      );
    }
  }

  // plaque on the front face
  const plaqueBacking = makeBox({
    w: 8.6,
    h: 1.12,
    d: 0.08,
    mat: toon(0x6f4b22),
    pos: [0, -0.78, BASE / 2 + 0.22],
    radius: 0.03,
    outline: 0.02,
  });
  group.add(plaqueBacking);
  group.add(
    makeSign({
      w: 8.3,
      h: 0.98,
      tex: makePlaqueTexture(),
      pos: [0, -0.78, BASE / 2 + 0.265],
      toneMapped: true,
    })
  );

  // ---------- sidewalk : rounded L ----------
  const shape = new THREE.Shape();
  shape.moveTo(-15, -0.7);
  shape.lineTo(-15, 2.65);
  shape.lineTo(2.15, 2.65);
  shape.absarc(2.15, 1.2, 1.45, Math.PI / 2, 0, true);
  shape.lineTo(3.6, -15);
  shape.lineTo(0.5, -15);
  shape.lineTo(0.5, -0.7);
  shape.closePath();

  const sidewalkGeo = new THREE.ExtrudeGeometry(shape, {
    depth: 0.19,
    bevelEnabled: false,
    steps: 1,
  });
  const sidewalk = new THREE.Mesh(sidewalkGeo, [sidewalkMat, curbMat]);
  sidewalk.rotation.x = Math.PI / 2;
  sidewalk.position.y = SIDEWALK_Y;
  sidewalk.receiveShadow = true;
  sidewalk.castShadow = true;
  group.add(sidewalk);

  // pale curb highlight following the outer edge and the rounded corner
  const curbPoints = [];
  for (let x = -15; x <= 2.15; x += 0.5) curbPoints.push([x, SIDEWALK_Y + 0.006, 2.65]);
  for (let i = 0; i <= 16; i++) {
    const a = (i / 16) * (Math.PI / 2);
    curbPoints.push([2.15 + Math.sin(a) * 1.45, SIDEWALK_Y + 0.006, 2.65 - (1 - Math.cos(a)) * 1.45]);
  }
  for (let z = 1.2; z >= -15; z -= 0.5) curbPoints.push([3.6, SIDEWALK_Y + 0.006, z]);
  group.add(makeTube(curbPoints, 0.032, toon(0x858995), 160, 4));

  // back service strip and alley floor
  const serviceMat = new THREE.MeshStandardMaterial({ color: 0x3a3d49, roughness: 0.5, metalness: 0.06 });
  group.add(
    makeBox({
      w: 11.2,
      h: 0.12,
      d: 4.4,
      mat: serviceMat,
      pos: [-5, 0.06, -12.8],
      receive: true,
      cast: false,
    })
  );
  group.add(
    makeBox({
      w: 4.4,
      h: 0.14,
      d: 14.3,
      mat: serviceMat,
      pos: [-12.8, 0.07, -7.85],
      receive: true,
      cast: false,
    })
  );
  // alley gutter
  group.add(
    makeBox({
      w: 0.42,
      h: 0.02,
      d: 12.8,
      mat: new THREE.MeshStandardMaterial({ color: 0x171c26, roughness: 0.2, metalness: 0.2 }),
      pos: [-10.7, 0.145, -7.1],
      cast: false,
    })
  );

  // ---------- tactile paving ----------
  const tactileMat = new THREE.MeshToonMaterial({ color: 0xffffff, map: tactileTex, gradientMap: null });
  const tactileSegments = [
    { w: 5.2, d: 0.34, x: 0.4, z: 2.3 },
    { w: 0.34, d: 4.2, x: 3.34, z: 0.1 },
    { w: 0.6, d: 0.6, x: 3.3, z: 2.3 },
  ];
  for (const t of tactileSegments) {
    group.add(makeBox({ w: t.w, h: 0.025, d: t.d, mat: tactileMat, pos: [t.x, SIDEWALK_Y + 0.006, t.z], cast: false }));
  }

  // ---------- road paint ----------
  const stripeGeo = new THREE.PlaneGeometry(1, 1);
  function stripe(w, d, x, z, mat = paintMat, rot = 0, y = 0.028) {
    const mesh = new THREE.Mesh(stripeGeo, mat);
    mesh.scale.set(w, d, 1);
    mesh.rotation.set(-Math.PI / 2, 0, rot);
    mesh.position.set(x, y, z);
    mesh.receiveShadow = true;
    group.add(mesh);
    return mesh;
  }

  // front crosswalk (runs north-south across the front road)
  for (let z = 3.15; z < 14.3; z += 1.0) {
    stripe(4.2, 0.54, 0.0, z, paintMat, 0, 0.03);
  }
  // side crosswalk (runs east-west across the side road)
  for (let x = 4.15; x < 14.4; x += 0.95) {
    stripe(0.5, 1.65, x, -2.05, paintMat, 0, 0.03);
  }
  // center dashes of front road
  for (let x = -14.3; x < -3.2; x += 3.1) stripe(1.55, 0.12, x, 8.55, paintMat, 0, 0.031);
  for (let x = 3.5; x < 14.2; x += 3.1) stripe(1.55, 0.12, x, 8.55, paintMat, 0, 0.031);
  // center dashes of side road
  for (let z = -14.2; z < -3.4; z += 3.1) stripe(0.12, 1.55, 9.15, z, paintMat, 0, 0.031);
  for (let z = 3.6; z < 14.2; z += 3.1) stripe(0.12, 1.55, 9.15, z, paintMat, 0, 0.031);
  // edge lines
  stripe(28.8, 0.1, 0, 14.45, paintMat, 0, 0.029);
  stripe(0.1, 28.8, 14.45, 0, paintMat, 0, 0.029);
  // stop lines
  stripe(5.0, 0.34, 6.65, 1.7, paintMat, 0, 0.032);
  stripe(0.34, 8.5, -3.25, 8.6, paintMat, 0, 0.032);
  // parking bays along the east curb
  stripe(0.09, 6.5, 12.25, 8.0, paintMat, 0, 0.032);
  for (const z of [4.75, 8.0, 11.25]) stripe(2.2, 0.09, 13.35, z, paintMat, 0, 0.032);

  // road lettering
  group.add(
    makeSign({
      w: 2.4,
      h: 2.4,
      tex: makeRoadTextTexture('止まれ'),
      pos: [6.7, 0.034, -5.5],
      rot: [-Math.PI / 2, 0, 0],
      transparent: true,
      toneMapped: true,
    })
  );
  // parking P painted on the bay
  const pTex = makeParkingSignTexture();
  const pMark = makeSign({
    w: 0.8,
    h: 0.8,
    tex: pTex,
    pos: [13.4, 0.035, 5.35],
    rot: [-Math.PI / 2, 0, 0],
    toneMapped: true,
  });
  pMark.material.transparent = true;
  pMark.material.opacity = 0.8;
  group.add(pMark);

  // ---------- manholes & drains ----------
  const manholeMat = new THREE.MeshStandardMaterial({
    map: makeManholeTexture(),
    transparent: true,
    roughness: 0.3,
    metalness: 0.5,
    polygonOffset: true,
    polygonOffsetFactor: -2,
  });
  for (const [x, z, r] of [
    [7.8, 6.3, 0.58],
    [1.7, 11.8, 0.45],
    [-5.2, 6.7, 0.38],
  ]) {
    const m = new THREE.Mesh(new THREE.CircleGeometry(r, 32), manholeMat);
    m.rotation.x = -Math.PI / 2;
    m.position.set(x, 0.035, z);
    m.receiveShadow = true;
    group.add(m);
  }

  const grateTex = canvasTexture(256, 128, (ctx, w, h) => {
    ctx.fillStyle = '#262b35';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#090c12';
    for (let x = 12; x < w - 8; x += 14) ctx.fillRect(x, 12, 7, h - 24);
    ctx.strokeStyle = 'rgba(170,178,192,0.35)';
    ctx.lineWidth = 3;
    ctx.strokeRect(5, 5, w - 10, h - 10);
  });
  const grateMat = new THREE.MeshStandardMaterial({ map: grateTex, roughness: 0.25, metalness: 0.7 });
  for (const [x, z, rot] of [
    [-8.9, 2.85, 0],
    [-2.8, 2.85, 0],
    [3.78, -3.6, Math.PI / 2],
    [3.78, -8.2, Math.PI / 2],
  ]) {
    const grate = new THREE.Mesh(new THREE.PlaneGeometry(1.05, 0.38), grateMat);
    grate.rotation.set(-Math.PI / 2, 0, rot);
    grate.position.set(x, 0.038, z);
    group.add(grate);
  }

  // dark gutter seam along the curb
  const gutterMat = new THREE.MeshStandardMaterial({ color: 0x11151e, roughness: 0.2, metalness: 0.25 });
  group.add(makeBox({ w: 17.4, h: 0.015, d: 0.27, mat: gutterMat, pos: [-6.3, 0.026, 2.8], cast: false }));
  group.add(makeBox({ w: 0.27, h: 0.015, d: 16.8, mat: gutterMat, pos: [3.75, 0.026, -6.4], cast: false }));

  // ---------- wet reflections ----------
  function reflection(x, z, w, l, color, opacity, y = 0.035) {
    const mat = new THREE.MeshBasicMaterial({
      map: reflectionTex,
      color,
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
      toneMapped: false,
    });
    const mesh = makePlane({ w, h: l, mat, pos: [x, y, z], rot: [-Math.PI / 2, 0, 0] });
    mesh.renderOrder = 2;
    group.add(mesh);
    return mesh;
  }
  // store sign light falling on the sidewalk and road
  reflection(-3.0, 1.15, 4.8, 3.2, 0x5be9ff, 0.28, 0.188);
  reflection(-4.2, 5.4, 2.2, 6.0, 0x54dcef, 0.25, 0.037);
  reflection(-0.7, 7.0, 1.4, 8.4, 0x6ff4ff, 0.25, 0.038);
  reflection(-1.0, 5.9, 0.85, 6.2, 0xff5b9d, 0.24, 0.038);
  reflection(-7.3, 1.4, 2.8, 3.0, 0xffae65, 0.28, 0.188);
  reflection(-5.0, 4.2, 2.6, 4.4, 0xffb066, 0.12, 0.037);
  reflection(5.0, 5.8, 1.6, 8.2, 0xffb168, 0.32, 0.039);
  reflection(8.7, 9.0, 1.4, 4.4, 0xff9c58, 0.18, 0.039);
  reflection(2.5, -3.6, 0.55, 4.2, 0x6ff4ff, 0.22, 0.189);
  reflection(1.6, -1.6, 0.8, 2.0, 0xff5a9b, 0.24, 0.189);
  reflection(13.2, 8.8, 1.1, 2.6, 0xff4d65, 0.08, 0.04);

  // soft pools of light
  group.add(makeGlowPlane({ w: 11.5, h: 3.9, color: 0xffae69, opacity: 0.18, pos: [-4.2, 0.187, 0.95] }));
  group.add(makeGlowPlane({ w: 7.5, h: 7.5, color: 0xff9b55, opacity: 0.12, pos: [5.0, 0.04, 5.8] }));
  group.add(makeGlowPlane({ w: 4.6, h: 3.2, color: 0x61efff, opacity: 0.1, pos: [2.7, 0.188, -3.3] }));

  // ---------- puddles ----------
  const puddleMat = new THREE.MeshPhysicalMaterial({
    color: 0x4b77a1,
    roughness: 0.025,
    metalness: 0.72,
    clearcoat: 1,
    clearcoatRoughness: 0.015,
    transparent: true,
    opacity: 0.46,
    side: THREE.DoubleSide,
    polygonOffset: true,
    polygonOffsetFactor: -1,
  });
  function addPuddle(cx, cz, rx, rz, y, seed = Math.random()) {
    const shape = new THREE.Shape();
    const points = [];
    const n = 18;
    for (let i = 0; i <= n; i++) {
      const a = (i / n) * Math.PI * 2;
      const wobble = 1 + Math.sin(a * 3 + seed * 9) * 0.09 + Math.sin(a * 5 + seed * 17) * 0.05;
      const x = cx + Math.cos(a) * rx * wobble;
      const z = cz + Math.sin(a) * rz * wobble;
      points.push([x, z]);
      if (i === 0) shape.moveTo(x, z);
      else shape.lineTo(x, z);
    }
    const geo = new THREE.ShapeGeometry(shape);
    const mesh = new THREE.Mesh(geo, puddleMat);
    mesh.rotation.x = Math.PI / 2;
    mesh.position.y = y;
    mesh.receiveShadow = true;
    group.add(mesh);
    puddles.push(new THREE.Vector3(cx, y, cz));
    const rimGeo = new THREE.BufferGeometry().setFromPoints(
      points.map((p) => new THREE.Vector3(p[0], y + 0.006, p[1]))
    );
    const rim = new THREE.LineLoop(
      rimGeo,
      new THREE.LineBasicMaterial({
        color: 0x9ac8e8,
        transparent: true,
        opacity: 0.22,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      })
    );
    group.add(rim);
    group.add(
      makeGlowPlane({
        w: rx * 2.2,
        h: rz * 2.2,
        color: 0x6b9bd0,
        opacity: 0.24,
        pos: [cx, y + 0.002, cz],
      })
    );
    const neonPatch = new THREE.MeshBasicMaterial({
      map: puddleGlowTex,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
      toneMapped: false,
    });
    const patch = makePlane({
      w: rx * 2.08,
      h: rz * 2.08,
      mat: neonPatch,
      pos: [cx, y + 0.005, cz],
      rot: [-Math.PI / 2, 0, 0],
    });
    patch.renderOrder = 2;
    group.add(patch);
    const spark = pick([0x6ff4ff, 0xffbd7a, 0xff7fb1]);
    const streakMat = new THREE.MeshBasicMaterial({
      map: reflectionTex,
      color: spark,
      transparent: true,
      opacity: 0.42,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
      toneMapped: false,
    });
    const streak = makePlane({
      w: rx * 0.5,
      h: rz * 3.7,
      mat: streakMat,
      pos: [cx + randomRange(-rx * 0.25, rx * 0.25), y + 0.008, cz],
      rot: [-Math.PI / 2, 0, 0],
    });
    streak.renderOrder = 2;
    group.add(streak);
  }
  addPuddle(2.35, 1.45, 1.0, 0.55, 0.187, 0.2);
  addPuddle(-4.0, 1.45, 1.5, 0.65, 0.187, 0.8);
  addPuddle(-8.2, 0.1, 1.2, 0.52, 0.187, 0.45);
  addPuddle(3.9, 7.1, 1.4, 0.7, 0.034, 0.6);
  addPuddle(6.4, 11.3, 1.25, 0.65, 0.034, 0.9);
  addPuddle(-3.5, 10.6, 2.0, 0.8, 0.034, 0.3);
  addPuddle(10.9, 4.2, 1.2, 0.5, 0.034, 0.7);
  addPuddle(9.9, 0.7, 1.1, 0.45, 0.034, 0.12);
  addPuddle(-12.6, -4.8, 1.4, 0.8, 0.145, 0.5);

  // ---------- streetlight ----------
  const metalMat = toon(0x353d4a);
  const lampMat = new THREE.MeshBasicMaterial({ color: 0xffd39a, toneMapped: false });
  const pole = makeCylinder({
    rt: 0.09,
    rb: 0.13,
    h: 7.8,
    seg: 12,
    mat: metalMat,
    pos: [3.12, SIDEWALK_Y + 3.9, 1.05],
    outline: 0.012,
  });
  group.add(pole);
  group.add(
    makeCylinder({
      rt: 0.2,
      rb: 0.24,
      h: 0.32,
      seg: 12,
      mat: metalMat,
      pos: [3.12, SIDEWALK_Y + 0.16, 1.05],
      outline: 0.01,
    })
  );
  const armPoints = [
    [3.12, 7.55, 1.05],
    [3.2, 7.9, 1.4],
    [3.65, 8.12, 2.25],
    [4.45, 8.05, 3.15],
    [4.95, 7.95, 3.55],
  ];
  group.add(makeTube(armPoints, 0.055, metalMat, 32, 6));
  const lampHead = makeBox({
    w: 0.95,
    h: 0.24,
    d: 0.42,
    mat: toon(0x3a414f),
    pos: [5.1, 7.91, 3.65],
    rot: [0, -0.22, 0],
    radius: 0.08,
    outline: 0.015,
  });
  group.add(lampHead);
  group.add(
    makeBox({
      w: 0.72,
      h: 0.06,
      d: 0.3,
      mat: lampMat,
      pos: [5.1, 7.77, 3.65],
      rot: [0, -0.22, 0],
      cast: false,
    })
  );
  group.add(makeSphere({ r: 0.085, mat: basic(0xffe2b0, { toneMapped: false }), pos: [5.1, 7.72, 3.65], seg: 10, cast: false }));
  addGlow(group, { pos: [5.1, 7.72, 3.65], color: 0xffd09a, size: 1.9, opacity: 0.5 });
  const streetLight = new THREE.SpotLight(0xffb065, 700, 24, 0.5, 0.72, 2);
  streetLight.position.set(5.1, 7.65, 3.65);
  streetLight.target.position.set(5.1, 0.02, 3.65);
  streetLight.castShadow = true;
  streetLight.shadow.mapSize.set(1024, 1024);
  streetLight.shadow.bias = -0.0012;
  streetLight.shadow.camera.near = 0.5;
  streetLight.shadow.camera.far = 22;
  group.add(streetLight);
  group.add(streetLight.target);
  addGlow(group, { pos: [5.1, 7.72, 3.65], color: 0xffb56e, size: 4.8, opacity: 0.42 });
  addGlow(group, { pos: [5.1, 7.72, 3.65], color: 0xffd9a2, size: 9, opacity: 0.13 });

  // soft volumetric rain-light cone
  const beamGeo = new THREE.CylinderGeometry(0.32, 3.75, 7.55, 36, 1, true);
  const beamMat = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(0xffb168) },
      uOpacity: { value: 0.27 },
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main() {
        vUv = uv;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPos = worldPos.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      uniform float uOpacity;
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main() {
        vec3 viewDir = normalize(cameraPosition - vWorldPos);
        float fresnel = pow(1.0 - abs(dot(normalize(vWorldNormal), viewDir)), 1.8);
        float fade = smoothstep(0.0, 0.14, vUv.y) * smoothstep(1.0, 0.68, vUv.y);
        float alpha = fresnel * fade * uOpacity;
        gl_FragColor = vec4(uColor, alpha);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
    toneMapped: false,
  });
  const beam = new THREE.Mesh(beamGeo, beamMat);
  beam.position.set(5.1, 3.85, 3.65);
  beam.renderOrder = 3;
  group.add(beam);

  // street name plate on the lamp pole
  group.add(
    makeSign({
      w: 1.1,
      h: 0.28,
      tex: makeStreetNameTexture(),
      pos: [3.02, 5.6, 1.15],
      rot: [0, 0.02, 0],
      toneMapped: true,
    })
  );
  group.add(makeBox({ w: 1.14, h: 0.31, d: 0.04, mat: toon(0x303741), pos: [3.02, 5.6, 1.12], radius: 0.02 }));

  // ---------- utility poles & wires ----------
  const concreteMat = toon(0x70717b);
  const cableMat = toon(0x1a1c25);
  function utilityPole(x, z, h, thin = false) {
    const g = new THREE.Group();
    const r = thin ? 0.09 : 0.14;
    g.add(makeCylinder({ rt: r * 0.82, rb: r, h, seg: 10, mat: concreteMat, pos: [x, SIDEWALK_Y + h / 2, z], outline: 0.01 }));
    const bandCount = Math.ceil(h / 2);
    for (let i = 1; i < bandCount; i++) {
      g.add(
        makeCylinder({
          rt: r * 0.905,
          rb: r * 0.92,
          h: 0.06,
          seg: 10,
          mat: toon(0x565763),
          pos: [x, SIDEWALK_Y + (i / bandCount) * h, z],
          cast: false,
        })
      );
    }
    if (!thin) {
      // crossarms
      for (const [yy, ww] of [
        [h - 0.9, 2.4],
        [h - 1.6, 1.9],
      ]) {
        g.add(
          makeBox({
            w: ww,
            h: 0.12,
            d: 0.14,
            mat: toon(0x454752),
            pos: [x, SIDEWALK_Y + yy, z],
            outline: 0.008,
          })
        );
        for (let k = -1; k <= 1; k += 1) {
          g.add(
            makeCylinder({
              rt: 0.06,
              rb: 0.075,
              h: 0.18,
              seg: 8,
              mat: toon(0x9fa7ad),
              pos: [x + k * (ww * 0.4), SIDEWALK_Y + yy + 0.14, z],
              cast: false,
            })
          );
        }
      }
      // transformer
      g.add(
        makeCylinder({
          rt: 0.34,
          rb: 0.34,
          h: 1.05,
          seg: 14,
          mat: toon(0x5c626d),
          pos: [x + 0.4, SIDEWALK_Y + h - 2.5, z + 0.02],
          outline: 0.015,
        })
      );
      g.add(
        makeCylinder({
          rt: 0.36,
          rb: 0.36,
          h: 0.08,
          seg: 14,
          mat: toon(0x3d424c),
          pos: [x + 0.4, SIDEWALK_Y + h - 2.0, z],
          cast: false,
        })
      );
      // junction box + meter
      g.add(makeBox({ w: 0.38, h: 0.55, d: 0.26, mat: toon(0x5a606d), pos: [x + 0.18, SIDEWALK_Y + 4.7, z + 0.05], outline: 0.012 }));
      g.add(makeBox({ w: 0.32, h: 0.5, d: 0.18, mat: toon(0x454a56), pos: [x - 0.2, SIDEWALK_Y + 3.6, z + 0.02], outline: 0.01 }));
      // ladder rungs
      for (let i = 0; i < 6; i++) {
        g.add(
          makeBox({
            w: 0.36,
            h: 0.035,
            d: 0.05,
            mat: toon(0x3c3e48),
            pos: [x, SIDEWALK_Y + 2.2 + i * 0.38, z + 0.12],
            cast: false,
          })
        );
      }
      // caution band
      g.add(
        makeCylinder({
          rt: r * 0.98,
          rb: r * 1.02,
          h: 0.5,
          seg: 10,
          mat: toon(0xcab04c),
          pos: [x, SIDEWALK_Y + 1.35, z],
          cast: false,
        })
      );
      // small sign
      g.add(makeBox({ w: 0.44, h: 0.3, d: 0.04, mat: toon(0xe9e4d3), pos: [x, SIDEWALK_Y + 2.7, z + 0.15], cast: false }));
    }
    return g;
  }

  const poleMain = utilityPole(-13.7, 1.8, 9.2, false);
  const poleFront = utilityPole(-14.15, 13.7, 8.7, true);
  const poleBack = utilityPole(12.0, -13.7, 8.9, true);
  group.add(poleMain, poleFront, poleBack);

  // sagging overhead wires
  const wireSets = [];
  for (let i = 0; i < 6; i++) {
    const dx = randomRange(-0.55, 0.55);
    const dz = randomRange(-0.45, 0.45);
    wireSets.push([
      [-13.7 + dx, SIDEWALK_Y + 8.25 + i * 0.13, 1.8 + dz],
      [12.0 + dx, SIDEWALK_Y + 8.0 + i * 0.12, -13.7 + dz],
    ]);
  }
  for (let i = 0; i < 5; i++) {
    const dx = randomRange(-0.4, 0.4);
    const dz = randomRange(-0.3, 0.3);
    wireSets.push([
      [-13.7 + dx, SIDEWALK_Y + 8.3 + i * 0.14, 1.8 + dz],
      [-14.15 + dx, SIDEWALK_Y + 8.05 + i * 0.12, 13.7 + dz],
    ]);
  }
  wireSets.forEach(([a, b], i) => {
    group.add(sagWire(a, b, 0.55 + (i % 3) * 0.23, 0.014));
  });
  // short service drop to the store
  group.add(sagWire([-13.7, SIDEWALK_Y + 7.2, 1.8], [-10.7, 5.55, 0.15], 0.25, 0.012));

  // ---------- traffic mirror ----------
  const mirrorPoleMat = toon(0xd27b39, { emissive: 0x2b1202, emissiveIntensity: 0.25 });
  const mirrorPole = makeCylinder({
    rt: 0.045,
    rb: 0.06,
    h: 2.8,
    seg: 10,
    mat: mirrorPoleMat,
    pos: [2.95, SIDEWALK_Y + 1.4, 2.2],
    outline: 0.01,
  });
  group.add(mirrorPole);
  const mirrorTex = canvasTexture(256, 256, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w * 0.35, h * 0.28, 10, w / 2, h / 2, w / 2);
    g.addColorStop(0, '#bcd9e9');
    g.addColorStop(0.4, '#6b879e');
    g.addColorStop(0.75, '#2a3d55');
    g.addColorStop(1, '#10192b');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, w / 2 - 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,190,110,0.75)';
    ctx.beginPath();
    ctx.ellipse(w * 0.34, h * 0.33, 17, 8, -0.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(104,235,255,0.55)';
    ctx.beginPath();
    ctx.ellipse(w * 0.6, h * 0.58, 34, 9, 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.28)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, w / 2 - 10, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = 'rgba(230,245,255,0.75)';
    ctx.beginPath();
    ctx.moveTo(w * 0.52, h * 0.8);
    ctx.lineTo(w * 0.38, h * 0.62);
    ctx.lineTo(w * 0.46, h * 0.62);
    ctx.lineTo(w * 0.46, h * 0.48);
    ctx.lineTo(w * 0.58, h * 0.48);
    ctx.lineTo(w * 0.58, h * 0.62);
    ctx.lineTo(w * 0.66, h * 0.62);
    ctx.closePath();
    ctx.fill();
  });
  const mirror = new THREE.Group();
  const mirrorDisc = new THREE.Mesh(
    new THREE.CircleGeometry(0.47, 32),
    new THREE.MeshBasicMaterial({ map: mirrorTex, toneMapped: false, side: THREE.DoubleSide })
  );
  mirrorDisc.position.set(0, 0, 0.02);
  mirror.add(mirrorDisc);
  const mirrorRim = new THREE.Mesh(new THREE.TorusGeometry(0.49, 0.045, 10, 32), mirrorPoleMat);
  mirror.add(mirrorRim);
  const mirrorBack = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.08, 32), toon(0x57331d));
  mirrorBack.rotation.x = Math.PI / 2;
  mirrorBack.position.z = -0.035;
  mirror.add(mirrorBack);
  mirror.position.set(2.95, SIDEWALK_Y + 2.78, 2.22);
  mirror.rotation.y = -0.28;
  group.add(mirror);

  // ---------- road signs ----------
  function signPost(x, z, h = 2.5) {
    const g = new THREE.Group();
    g.add(makeCylinder({ rt: 0.035, rb: 0.045, h, seg: 8, mat: toon(0x87909d), pos: [x, SIDEWALK_Y + h / 2, z], outline: 0.007 }));
    return g;
  }
  // parking sign next to the bay
  const parkSignGroup = signPost(14.1, 3.85, 2.6);
  parkSignGroup.add(
    makeSign({
      w: 0.68,
      h: 0.68,
      tex: makeParkingSignTexture(),
      pos: [14.1, SIDEWALK_Y + 2.35, 3.9],
      toneMapped: true,
    })
  );
  parkSignGroup.add(
    makeBox({ w: 0.72, h: 0.72, d: 0.05, mat: toon(0x59616d), pos: [14.1, SIDEWALK_Y + 2.35, 3.86], radius: 0.02 })
  );
  group.add(parkSignGroup);

  // stop sign at the side crosswalk
  const stopGroup = signPost(3.15, -3.75, 2.45);
  const stopMat = new THREE.MeshBasicMaterial({
    map: makeStopTexture(),
    transparent: true,
    side: THREE.DoubleSide,
    toneMapped: false,
  });
  const stopSign = new THREE.Mesh(new THREE.PlaneGeometry(0.85, 0.85), stopMat);
  stopSign.position.set(3.15, SIDEWALK_Y + 2.25, -3.72);
  stopSign.rotation.y = 0.1;
  stopGroup.add(stopSign);
  group.add(stopGroup);

  // ---------- white guardrail ----------
  const railMat = toon(0xd9d7c8);
  const railDark = toon(0x565d66);
  function guardrailAlongX(x0, x1, z) {
    const g = new THREE.Group();
    const len = Math.abs(x1 - x0);
    const n = Math.max(2, Math.floor(len / 2));
    for (let i = 0; i <= n; i++) {
      const x = x0 + ((x1 - x0) * i) / n;
      g.add(makeCylinder({ rt: 0.045, rb: 0.05, h: 0.78, seg: 8, mat: railMat, pos: [x, 0.39, z], outline: 0.006 }));
      g.add(makeSphere({ r: 0.06, mat: railMat, pos: [x, 0.79, z], seg: 10 }));
    }
    for (const yy of [0.35, 0.64]) {
      g.add(makeCylinder({ rt: 0.04, rb: 0.04, h: len, seg: 8, mat: railMat, pos: [(x0 + x1) / 2, yy, z], rot: [0, 0, Math.PI / 2], outline: 0.005 }));
    }
    for (let i = 0; i < n; i++) {
      const x = x0 + ((x1 - x0) * (i + 0.5)) / n;
      g.add(
        makeBox({
          w: 0.12,
          h: 0.1,
          d: 0.02,
          mat: basic(0xffce5f, { toneMapped: false }),
          pos: [x, 0.64, z + 0.055],
          cast: false,
        })
      );
    }
    return g;
  }
  function guardrailAlongZ(z0, z1, x) {
    const g = new THREE.Group();
    const len = Math.abs(z1 - z0);
    const n = Math.max(2, Math.floor(len / 2));
    for (let i = 0; i <= n; i++) {
      const z = z0 + ((z1 - z0) * i) / n;
      g.add(makeCylinder({ rt: 0.045, rb: 0.05, h: 0.78, seg: 8, mat: railMat, pos: [x, 0.39, z], outline: 0.006 }));
      g.add(makeSphere({ r: 0.06, mat: railMat, pos: [x, 0.79, z], seg: 10 }));
    }
    for (const yy of [0.35, 0.64]) {
      g.add(makeCylinder({ rt: 0.04, rb: 0.04, h: len, seg: 8, mat: railMat, pos: [x, yy, (z0 + z1) / 2], rot: [Math.PI / 2, 0, 0], outline: 0.005 }));
    }
    for (let i = 0; i < n; i++) {
      const z = z0 + ((z1 - z0) * (i + 0.5)) / n;
      g.add(
        makeBox({
          w: 0.02,
          h: 0.1,
          d: 0.12,
          mat: basic(0xffce5f, { toneMapped: false }),
          pos: [x + 0.055, 0.64, z],
          cast: false,
        })
      );
    }
    return g;
  }
  group.add(guardrailAlongX(3.8, 14.2, 14.35));
  group.add(guardrailAlongZ(-2.9, 3.5, 14.35));

  // ---------- street tree ----------
  const tree = new THREE.Group();
  const planter = makeBox({
    w: 1.45,
    h: 0.55,
    d: 1.45,
    mat: toon(0x4c4a4c),
    pos: [12.5, 0.275, -12.3],
    radius: 0.05,
    outline: 0.02,
  });
  tree.add(planter);
  tree.add(makeBox({ w: 1.22, h: 0.06, d: 1.22, mat: toon(0x27231f), pos: [12.5, 0.57, -12.3], cast: false }));
  const trunkMat = toon(0x5c4030);
  const trunk = makeCylinder({
    rt: 0.12,
    rb: 0.19,
    h: 3.1,
    seg: 9,
    mat: trunkMat,
    pos: [12.5, 2.1, -12.3],
    outline: 0.015,
  });
  trunk.rotation.z = 0.06;
  tree.add(trunk);
  const leafMats = [toon(0x24523f, { flatShading: true }), toon(0x2d624b, { flatShading: true }), toon(0x1b4236, { flatShading: true })];
  const foliage = [
    [-0.65, 3.55, 0.15, 0.95, 0.7, 0.8],
    [0.55, 3.8, -0.2, 0.9, 0.65, 0.8],
    [0.05, 4.25, 0.2, 0.82, 0.65, 0.7],
    [-0.2, 3.35, -0.55, 0.72, 0.5, 0.65],
    [0.75, 3.1, 0.4, 0.65, 0.5, 0.6],
    [-0.95, 3.05, -0.25, 0.58, 0.4, 0.6],
    [0.25, 2.85, -0.8, 0.52, 0.36, 0.55],
    [1.0, 3.55, -0.65, 0.56, 0.4, 0.5],
  ];
  foliage.forEach((f, i) => {
    const mesh = makeSphere({
      r: f[3],
      mat: leafMats[i % leafMats.length],
      pos: [12.5 + f[0], f[1] + 0.55, -12.3 + f[2]],
      scale: [1, f[4] / f[3], f[5] / f[3]],
      seg: 9,
      outline: 0.018,
    });
    tree.add(mesh);
  });
  // small trunk branches
  tree.add(makeTube([[12.5, 3.1, -12.3], [11.95, 3.8, -12.15], [11.7, 4.1, -12.1]], 0.055, trunkMat, 12, 5));
  tree.add(makeTube([[12.5, 3.1, -12.3], [13.1, 3.7, -12.4], [13.35, 4.0, -12.2]], 0.045, trunkMat, 12, 5));
  tree.position.y = 0.02;
  group.add(tree);
  // small tree uplight
  const treeLight = new THREE.PointLight(0x6fcfae, 5.5, 4.5, 2);
  treeLight.position.set(12.5, 0.8, -11.5);
  group.add(treeLight);

  // a bit of foliage against the alley wall
  for (let i = 0; i < 4; i++) {
    group.add(
      makeSphere({
        r: randomRange(0.2, 0.35),
        mat: leafMats[i % 3],
        pos: [-14.5 + randomRange(-0.2, 0.2), 0.5 + i * 0.22, -12.2 + i * 0.25],
        scale: [1, 0.75, 1],
        seg: 8,
        outline: 0.01,
      })
    );
  }

  // ---------- extra night atmosphere ----------
  // little fog glows at ground level
  addGlow(group, { pos: [-10.0, 0.7, -2.7], color: 0xffb367, size: 2.4, opacity: 0.12 });
  addGlow(group, { pos: [7.5, 0.5, 11.8], color: 0x5b8fd6, size: 4.5, opacity: 0.04 });

  return { group, puddles };
}
