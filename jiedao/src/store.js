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
import {
  makeMainSignTexture,
  makeSideSignTexture,
  makeBladeSignTexture,
  makeWindowDecal,
  makeDoorDecal,
  makeVendingTexture,
  makePosterTexture,
  makeBinLabel,
  makeMatTexture,
  makeRegisterTexture,
  makeCoffeeMenuTexture,
  makeVentTexture,
  makeAwningStripeTexture,
} from './textures.js';

const S = {
  x0: -10.6,
  x1: 0.6,
  z0: -10.6,
  z1: -0.7,
  cx: -5.0,
  cz: -5.65,
  width: 11.2,
  depth: 9.9,
  floor: 0.24,
  glassBottom: 0.46,
  glassTop: 3.62,
  fasciaTop: 4.25,
  signTop: 5.52,
  roof: 5.72,
};

function glassMaterial(opacity = 0.13) {
  return new THREE.MeshPhysicalMaterial({
    color: 0x9ae6ff,
    roughness: 0.05,
    metalness: 0.1,
    transparent: true,
    opacity,
    side: THREE.DoubleSide,
    depthWrite: false,
    clearcoat: 1,
    clearcoatRoughness: 0.04,
  });
}

function addFrameBox(group, w, h, d, x, y, z, mat, outline = 0) {
  const m = makeBox({ w, h, d, mat, pos: [x, y, z], outline, cast: false, receive: true });
  group.add(m);
  return m;
}

function shelfProducts(group, opts) {
  const { x0, x1, z, levels, perLevel, mat } = opts;
  const total = levels.length * perLevel * 2;
  const geo = new THREE.BoxGeometry(0.17, 0.3, 0.15);
  const inst = new THREE.InstancedMesh(geo, mat, total);
  const dummy = new THREE.Object3D();
  const palette = [
    0xffb84d, 0xf06b7e, 0x5ed3e0, 0xf4e4c3, 0x7acb94, 0xb983e8,
    0xff9b6e, 0x7da8ec, 0xffd75e, 0xe8e2d2, 0x4fc1a5, 0xf77eb0,
  ];
  const color = new THREE.Color();
  let idx = 0;
  for (const level of levels) {
    for (let row = 0; row < 2; row++) {
      for (let i = 0; i < perLevel; i++) {
        const t = perLevel === 1 ? 0.5 : i / (perLevel - 1);
        const x = x0 + (x1 - x0) * t + randomRange(-0.02, 0.02);
        const zz = z + (row === 0 ? -0.1 : 0.1);
        const scale = randomRange(0.78, 1.12);
        dummy.position.set(x, level + 0.17 * scale, zz);
        dummy.rotation.set(0, randomRange(-0.08, 0.08), 0);
        dummy.scale.set(randomRange(0.85, 1.12), scale, randomRange(0.8, 1.1));
        dummy.updateMatrix();
        inst.setMatrixAt(idx, dummy.matrix);
        inst.setColorAt(idx, color.setHex(pick(palette)));
        idx++;
      }
    }
  }
  inst.instanceMatrix.needsUpdate = true;
  if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
  inst.castShadow = false;
  inst.receiveShadow = false;
  group.add(inst);
  return inst;
}

function makeUmbrellaStand() {
  const g = new THREE.Group();
  const metal = toon(0x7d8792);
  g.add(makeCylinder({ rt: 0.24, rb: 0.26, h: 0.52, seg: 14, mat: metal, pos: [0, 0.26, 0], outline: 0.008 }));
  g.add(makeCylinder({ rt: 0.22, rb: 0.22, h: 0.04, seg: 14, mat: toon(0x2c333d), pos: [0, 0.025, 0], cast: false }));
  const umbrellaColors = [0x2b9ca6, 0xe5e8de, 0xf0648f, 0xe7b64a];
  umbrellaColors.forEach((col, i) => {
    const a = (i / umbrellaColors.length) * Math.PI * 2 + 0.5;
    const px = Math.cos(a) * 0.1;
    const pz = Math.sin(a) * 0.1;
    const tiltX = Math.cos(a) * 0.12;
    const tiltZ = Math.sin(a) * 0.12;
    const shaft = makeCylinder({
      rt: 0.018,
      rb: 0.018,
      h: 1.03,
      seg: 6,
      mat: toon(0x3a3d43),
      pos: [px, 0.72, pz],
      rot: [tiltX, 0, tiltZ],
      cast: false,
    });
    g.add(shaft);
    const canopy = makeCylinder({
      rt: 0.015,
      rb: 0.085,
      h: 0.62,
      seg: 8,
      mat: toon(col),
      pos: [px + Math.sin(tiltZ) * 0.06, 1.06, pz - Math.sin(tiltX) * 0.06],
      rot: [tiltX, 0, tiltZ],
      outline: 0.004,
    });
    g.add(canopy);
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.014, 6, 10, Math.PI), toon(0x3a2b25));
    handle.position.set(px - Math.sin(tiltZ) * 0.05, 0.21, pz + Math.sin(tiltX) * 0.05);
    handle.rotation.set(Math.PI / 2, 0, a);
    g.add(handle);
  });
  return g;
}

function makePottedPlant(scaleFactor = 1, leafColor = 0x3c7f5d) {
  const g = new THREE.Group();
  const pot = makeCylinder({
    rt: 0.22 * scaleFactor,
    rb: 0.16 * scaleFactor,
    h: 0.32 * scaleFactor,
    seg: 10,
    mat: toon(0x6d4b3a),
    pos: [0, 0.16 * scaleFactor, 0],
    outline: 0.008,
  });
  g.add(pot);
  g.add(
    makeCylinder({
      rt: 0.19 * scaleFactor,
      rb: 0.19 * scaleFactor,
      h: 0.04 * scaleFactor,
      seg: 10,
      mat: toon(0x2d2018),
      pos: [0, 0.31 * scaleFactor, 0],
      cast: false,
    })
  );
  const stemMat = toon(0x3a5e42);
  g.add(makeCylinder({ rt: 0.018, rb: 0.026, h: 0.95 * scaleFactor, seg: 6, mat: stemMat, pos: [0, 0.78 * scaleFactor, 0], cast: false }));
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2 + 0.3;
    const r = (0.18 + (i % 2) * 0.1) * scaleFactor;
    const leaf = makeSphere({
      r: 0.22 * scaleFactor,
      mat: toon(leafColor, { flatShading: true }),
      pos: [Math.cos(a) * r, (0.95 + (i % 3) * 0.18) * scaleFactor, Math.sin(a) * r],
      scale: [1.1, 0.58, 0.75],
      seg: 7,
      outline: 0.007,
    });
    leaf.rotation.y = a;
    leaf.rotation.z = randomRange(-0.35, 0.35);
    g.add(leaf);
  }
  return g;
}

function makeCat() {
  const g = new THREE.Group();
  const black = toon(0x171a23, { emissive: 0x05060b, emissiveIntensity: 0.3 });
  const body = makeSphere({ r: 0.19, mat: black, pos: [0, 0.2, 0], scale: [0.78, 1.0, 1.15], seg: 12, outline: 0.007 });
  g.add(body);
  const head = makeSphere({ r: 0.14, mat: black, pos: [0, 0.43, 0.03], scale: [1.0, 0.9, 0.92], seg: 12, outline: 0.006 });
  g.add(head);
  for (const sx of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.11, 4), black);
    ear.position.set(sx * 0.075, 0.55, 0.02);
    ear.rotation.z = sx * 0.18;
    g.add(ear);
  }
  const eyeMat = basic(0xbfffc8, { toneMapped: false });
  for (const sx of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.017, 6, 4), eyeMat);
    eye.position.set(sx * 0.05, 0.445, 0.145);
    g.add(eye);
  }
  const tail = makeTube(
    [
      [0.1, 0.19, -0.08],
      [0.22, 0.16, -0.2],
      [0.25, 0.32, -0.3],
      [0.19, 0.4, -0.32],
    ],
    0.023,
    black,
    18,
    4
  );
  g.add(tail);
  return g;
}

export function buildStore() {
  const group = new THREE.Group();
  group.name = 'hoshino-mart';
  const exterior = toon(0x56636c);
  const rearWallMat = toon(0x3c4952);
  const westWallMat = toon(0x44525c);
  const exteriorDark = toon(0x203c45);
  const frameMat = toon(0x0d2a32);
  const frameLight = toon(0x0e4b56);
  const corrTex = canvasTexture(
    256,
    256,
    (ctx, w, h) => {
      ctx.fillStyle = '#2d373e';
      ctx.fillRect(0, 0, w, h);
      for (let x = 0; x < w; x += 16) {
        const grad = ctx.createLinearGradient(x, 0, x + 16, 0);
        grad.addColorStop(0, '#1e272d');
        grad.addColorStop(0.35, '#48555e');
        grad.addColorStop(0.55, '#39454d');
        grad.addColorStop(1, '#222c32');
        ctx.fillStyle = grad;
        ctx.fillRect(x, 0, 15, h);
      }
      ctx.strokeStyle = 'rgba(15,20,24,0.5)';
      ctx.lineWidth = 2;
      for (let y = 0; y < h; y += 42) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      ctx.fillStyle = 'rgba(150,165,175,0.06)';
      for (let i = 0; i < 120; i++) ctx.fillRect(Math.random() * w, Math.random() * h, Math.random() * 2, Math.random() * 2);
    },
    { repeat: [2, 1] }
  );
  const corrMat = toon(0xffffff, { map: corrTex });
  const creamMat = toon(0xf7e4bd, { emissive: 0xffb96b, emissiveIntensity: 0.26 });
  const interiorCream = toon(0xf2dcb4, { emissive: 0xffa657, emissiveIntensity: 0.5 });
  const shelfMat = toon(0x4b5660);
  const shelfEdge = toon(0x0e4d59);
  const roofMat = toon(0x2c333d);
  const darkMetal = toon(0x3d4550);
  const glass = glassMaterial(0.09);
  const warmLightMat = basic(0xffdfb1, { toneMapped: false });
  const cyanLightMat = basic(0x6ef6ff, { toneMapped: false });

  // foundation and floor
  group.add(
    makeBox({
      w: S.width + 0.24,
      h: 0.36,
      d: S.depth + 0.24,
      mat: toon(0x333c45),
      pos: [S.cx, 0.36, S.cz],
      radius: 0.04,
      outline: 0.02,
    })
  );
  const floorMat = new THREE.MeshPhysicalMaterial({
    color: 0x8c7b63,
    roughness: 0.24,
    metalness: 0.05,
    clearcoat: 0.6,
    clearcoatRoughness: 0.2,
  });
  group.add(makeBox({ w: S.width, h: 0.06, d: S.depth, mat: floorMat, pos: [S.cx, 0.26, S.cz], receive: true, cast: false }));

  // ---------- shell ----------
  // back wall
  addFrameBox(group, S.width, 4.15, 0.26, S.cx, 2.32, S.z0 + 0.13, rearWallMat);
  group.add(makeBox({ w: S.width - 0.3, h: 3.8, d: 0.04, mat: interiorCream, pos: [S.cx, 2.18, S.z0 + 0.28], cast: false, receive: false }));
  // warm backlit panel behind the shelves, the classic convenience-store glow
  group.add(
    makePlane({
      w: 9.6,
      h: 3.5,
      mat: new THREE.MeshBasicMaterial({
        color: 0xffd49a,
        transparent: true,
        opacity: 0.32,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: true,
      }),
      pos: [S.cx, 2.2, S.z0 + 0.31],
    })
  );
  // west wall
  addFrameBox(group, 0.26, 4.15, S.depth, S.x0 + 0.13, 2.32, S.cz, westWallMat);
  group.add(makeBox({ w: 0.03, h: 3.8, d: S.depth - 0.3, mat: toon(0xd9c8a8, { emissive: 0x24170a, emissiveIntensity: 0.2 }), pos: [S.x0 + 0.28, 2.18, S.cz], cast: false }));
  // seal the service sides above the shopfront line; the sign band only wraps the public corner
  addFrameBox(group, S.width, 1.35, 0.3, S.cx, 4.88, S.z0 + 0.15, rearWallMat, 0.02);
  addFrameBox(group, 0.3, 1.35, S.depth, S.x0 + 0.15, 4.88, S.cz, westWallMat, 0.02);

  // east wall : solid piers and header, glass between
  addFrameBox(group, 0.22, 4.15, 0.85, S.x1 - 0.11, 2.32, S.z0 + 0.42, exterior);
  addFrameBox(group, 0.22, 4.15, 0.8, S.x1 - 0.11, 2.32, S.z1 - 0.4, exterior);
  addFrameBox(group, 0.22, 0.62, S.depth - 1.5, S.x1 - 0.11, 3.9, S.cz, exterior);
  // front header and corner piers
  addFrameBox(group, S.width - 0.4, 0.62, 0.22, S.cx, 3.9, S.z1 - 0.11, exterior);
  addFrameBox(group, 0.5, 4.15, 0.24, S.x0 + 0.45, 2.32, S.z1 - 0.12, exterior);
  addFrameBox(group, 0.3, 4.15, 0.24, S.x1 - 0.15, 2.32, S.z1 - 0.12, exterior);
  // skirting / kick plate
  addFrameBox(group, S.width, 0.36, 0.22, S.cx, 0.36, S.z1 - 0.08, exteriorDark);
  addFrameBox(group, 0.22, 0.36, S.depth, S.x1 - 0.08, 0.36, S.cz, exteriorDark);

  // glass front
  group.add(makeBox({ w: 7.9, h: 3.1, d: 0.035, mat: glass, pos: [-6.3, 2.05, S.z1 - 0.01], cast: false, receive: false }));
  group.add(makeBox({ w: 2.6, h: 0.52, d: 0.035, mat: glass, pos: [-1.0, 3.32, S.z1 - 0.01], cast: false, receive: false }));
  // glass east side
  group.add(makeBox({ w: 0.035, h: 3.1, d: 8.2, mat: glass, pos: [S.x1 - 0.01, 2.05, -5.45], cast: false, receive: false }));

  // window frames
  const frameDepth = 0.13;
  for (const x of [-10.25, -8.0, -5.7, -3.4, -2.3, 0.35]) {
    addFrameBox(group, 0.075, 3.18, frameDepth, x, 2.04, S.z1 - 0.01, frameMat, 0.006);
  }
  addFrameBox(group, S.width - 0.45, 0.09, frameDepth, S.cx, S.glassBottom, S.z1 - 0.01, frameMat);
  addFrameBox(group, S.width - 0.6, 0.1, frameDepth, S.cx, S.glassTop, S.z1 - 0.01, frameMat);
  for (const z of [-9.7, -7.1, -4.5, -1.85]) {
    addFrameBox(group, frameDepth, 3.18, 0.075, S.x1 - 0.01, 2.04, z, frameMat, 0.006);
  }
  addFrameBox(group, frameDepth, 0.09, 8.4, S.x1 - 0.01, S.glassBottom, -5.45, frameMat);
  addFrameBox(group, frameDepth, 0.1, 8.4, S.x1 - 0.01, S.glassTop, -5.45, frameMat);

  // automatic sliding doors
  const doorY = 1.77;
  const doorH = 2.56;
  addFrameBox(group, 2.52, 0.12, 0.23, -1.05, 3.0, S.z1 - 0.01, frameLight, 0.008);
  addFrameBox(group, 0.11, 2.75, 0.24, -2.31, 1.62, S.z1 - 0.01, frameLight, 0.007);
  addFrameBox(group, 0.11, 2.75, 0.24, 0.21, 1.62, S.z1 - 0.01, frameLight, 0.007);
  for (const x of [-1.66, -0.46]) {
    addFrameBox(group, 1.1, doorH, 0.045, x, doorY, S.z1 + 0.02, glass, 0);
    addFrameBox(group, 1.16, 0.065, 0.1, x, 0.56, S.z1 + 0.03, darkMetal);
    addFrameBox(group, 1.16, 0.065, 0.1, x, 2.98, S.z1 + 0.03, darkMetal);
    addFrameBox(group, 0.045, doorH, 0.1, x - 0.58, doorY, S.z1 + 0.03, darkMetal);
    addFrameBox(group, 0.045, doorH, 0.1, x + 0.58, doorY, S.z1 + 0.03, darkMetal);
    addFrameBox(group, 0.045, 0.85, 0.06, x + 0.49, 1.36, S.z1 + 0.11, toon(0xa7b3bb));
  }
  // door sensor + thin light
  addFrameBox(group, 0.52, 0.11, 0.2, -1.05, 3.1, S.z1 + 0.08, darkMetal, 0.005);
  group.add(makeBox({ w: 0.14, h: 0.03, d: 0.02, mat: basic(0x58f4a0, { toneMapped: false }), pos: [-1.16, 3.1, S.z1 + 0.19], cast: false }));
  group.add(makeBox({ w: 0.14, h: 0.03, d: 0.02, mat: basic(0xff6b73, { toneMapped: false }), pos: [-0.94, 3.1, S.z1 + 0.19], cast: false }));
  // door decal
  group.add(
    makeSign({
      w: 1.65,
      h: 0.83,
      tex: makeDoorDecal(),
      pos: [-1.05, 2.38, S.z1 + 0.095],
      transparent: true,
      opacity: 0.92,
    })
  );

  // ---------- interior ----------
  const interior = new THREE.Group();
  interior.name = 'store-interior';
  group.add(interior);

  // ceiling + light bars
  interior.add(makeBox({ w: S.width - 0.4, h: 0.12, d: S.depth - 0.4, mat: creamMat, pos: [S.cx, 4.04, S.cz], cast: false, receive: false }));
  for (const x of [-8.3, -5.45, -2.6]) {
    interior.add(makeBox({ w: 0.17, h: 0.035, d: 8.7, mat: warmLightMat, pos: [x, 3.96, S.cz], cast: false }));
    addGlow(interior, { pos: [x, 3.88, -2.0], color: 0xffd9a0, size: 1.4, opacity: 0.16, depthTest: false });
  }

  // back wall product shelving
  const shelfX0 = -9.85;
  const shelfX1 = -1.15;
  const shelfZ = -10.08;
  const shelfLevels = [0.85, 1.55, 2.25, 2.95];
  for (const y of shelfLevels) {
    interior.add(makeBox({ w: shelfX1 - shelfX0, h: 0.07, d: 0.52, mat: shelfMat, pos: [(shelfX0 + shelfX1) / 2, y, shelfZ], cast: false, receive: true }));
    interior.add(makeBox({ w: shelfX1 - shelfX0, h: 0.035, d: 0.04, mat: shelfEdge, pos: [(shelfX0 + shelfX1) / 2, y + 0.03, shelfZ + 0.27], cast: false }));
  }
  for (const x of [shelfX0, -7.0, -4.15, -1.15]) {
    interior.add(makeBox({ w: 0.09, h: 3.0, d: 0.56, mat: shelfMat, pos: [x, 2.1, shelfZ], cast: false }));
  }
  const productPaletteMat = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: true });
  for (let bay = 0; bay < 3; bay++) {
    const bx0 = shelfX0 + 0.2 + bay * 2.75;
    const bx1 = bx0 + 2.45;
    shelfProducts(interior, {
      x0: bx0,
      x1: bx1,
      z: shelfZ,
      levels: shelfLevels.slice(1),
      perLevel: 8,
      mat: productPaletteMat,
    });
  }
  // shelf point lights
  const inLight1 = new THREE.PointLight(0xffd9a6, 105, 9.5, 2);
  inLight1.position.set(-6.3, 3.45, -7.2);
  interior.add(inLight1);
  const inLight2 = new THREE.PointLight(0xffd29a, 90, 8.5, 2);
  inLight2.position.set(-2.2, 3.4, -3.8);
  interior.add(inLight2);
  const inLight3 = new THREE.PointLight(0xffe7c3, 65, 7.5, 2);
  inLight3.position.set(-9.0, 3.2, -3.3);
  interior.add(inLight3);
  const inLight4 = new THREE.PointLight(0xffc37e, 45, 6, 2);
  inLight4.position.set(-0.8, 2.9, -8.4);
  interior.add(inLight4);

  // center gondola shelf
  const gondolaX = -6.9;
  const gondolaZ = -5.2;
  interior.add(makeBox({ w: 0.65, h: 1.55, d: 4.4, mat: shelfMat, pos: [gondolaX, 0.99, gondolaZ], outline: 0.01, cast: false }));
  for (const side of [-1, 1]) {
    interior.add(makeBox({ w: 0.05, h: 0.06, d: 4.15, mat: shelfEdge, pos: [gondolaX + side * 0.34, 1.72, gondolaZ], cast: false }));
    for (let i = 0; i < 14; i++) {
      const p = makeBox({
        w: 0.08,
        h: randomRange(0.18, 0.3),
        d: randomRange(0.2, 0.35),
        mat: toon(pick([0xffb04a, 0xef6b7a, 0x5ed5dc, 0xf2e4c2, 0x7ec896, 0xb986e4])),
        pos: [gondolaX + side * 0.36, 1.82, gondolaZ - 1.9 + i * 0.29],
        cast: false,
      });
      interior.add(p);
    }
  }
  // small hanging aisle signs
  const signSmall = canvasTexture(512, 192, (ctx, w, h) => {
    ctx.fillStyle = '#083540';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#6ff4ff';
    ctx.lineWidth = 5;
    ctx.strokeRect(8, 8, w - 16, h - 16);
    ctx.fillStyle = '#f5ffff';
    ctx.textAlign = 'center';
    ctx.font = '700 60px "Yu Gothic", sans-serif';
    ctx.fillText('おにぎり・パン', w / 2, 88);
    ctx.font = '600 28px "Arial", sans-serif';
    ctx.fillStyle = '#92efff';
    ctx.fillText('RICE BALLS & BREAD', w / 2, 143);
  });
  for (const x of [-7.5, -3.2]) {
    interior.add(makeSign({ w: 1.7, h: 0.64, tex: signSmall, pos: [x, 3.25, -4.2], transparent: false, toneMapped: false }));
    interior.add(makeBox({ w: 1.74, h: 0.68, d: 0.04, mat: frameMat, pos: [x, 3.25, -4.23], cast: false }));
  }

  // magazine rack near front-left
  const rack = new THREE.Group();
  rack.position.set(-8.7, 0.29, -1.75);
  interior.add(rack);
  rack.add(makeBox({ w: 2.8, h: 1.15, d: 0.56, mat: shelfMat, pos: [0, 0.56, 0], outline: 0.008, cast: false }));
  for (let row = 0; row < 2; row++) {
    for (let i = 0; i < 7; i++) {
      const cover = canvasTexture(128, 176, (ctx, w, h) => {
        const col = pick(['#ef6f88', '#f4c95d', '#61c9d8', '#9c80df', '#f2efe0']);
        ctx.fillStyle = col;
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fillRect(10, 10, w - 20, 60);
        ctx.fillStyle = 'rgba(20,30,42,0.7)';
        ctx.fillRect(14, 18, w - 28, 15);
        ctx.font = '700 17px "Yu Gothic", sans-serif';
        ctx.fillText(pick(['COMIC', '月刊', '旅', 'CITY']), 16, 31);
        ctx.fillStyle = 'rgba(20,30,42,0.25)';
        for (let k = 0; k < 5; k++) ctx.fillRect(14, 85 + k * 16, w - 28, 4);
        ctx.fillStyle = '#fff';
        ctx.font = '700 11px "Arial", sans-serif';
        ctx.fillText('HOSHINO', 15, h - 12);
      });
      const magazine = makeSign({
        w: 0.3,
        h: 0.42,
        tex: cover,
        pos: [rack.position.x - 1.15 + i * 0.38, 0.72 + row * 0.43, -1.44 + row * 0.04],
        rot: [-0.22, 0, 0],
        toneMapped: true,
      });
      interior.add(magazine);
    }
  }

  // counter
  const counterX = -1.1;
  const counterZ = -4.5;
  interior.add(makeBox({ w: 1.85, h: 0.98, d: 1.7, mat: toon(0x2b6a73), pos: [counterX, 0.77, counterZ], outline: 0.012, cast: false }));
  interior.add(makeBox({ w: 1.95, h: 0.08, d: 1.8, mat: creamMat, pos: [counterX, 1.29, counterZ], radius: 0.02, cast: false }));
  interior.add(makeBox({ w: 1.8, h: 0.08, d: 1.62, mat: toon(0x123a41), pos: [counterX, 0.3, counterZ], cast: false }));
  // register
  const reg = new THREE.Group();
  reg.position.set(counterX + 0.28, 1.34, counterZ + 0.38);
  interior.add(reg);
  reg.add(makeBox({ w: 0.38, h: 0.25, d: 0.3, mat: toon(0x2b3038), pos: [0, 0.13, 0], outline: 0.006, cast: false }));
  const screen = makeSign({
    w: 0.32,
    h: 0.24,
    tex: makeRegisterTexture(),
    pos: [0, 0.31, 0.04],
    rot: [-0.18, 0, 0],
    toneMapped: false,
  });
  reg.add(screen);
  reg.add(makeBox({ w: 0.35, h: 0.02, d: 0.27, mat: toon(0x171b21), pos: [0, 0.265, 0], cast: false }));
  // hot snack warmer
  const warmer = new THREE.Group();
  warmer.position.set(counterX - 0.4, 1.34, counterZ + 0.35);
  interior.add(warmer);
  warmer.add(makeBox({ w: 0.58, h: 0.08, d: 0.52, mat: darkMetal, pos: [0, 0.04, 0], cast: false }));
  const warmerGlass = new THREE.MeshPhysicalMaterial({ color: 0xffd49a, transparent: true, opacity: 0.22, roughness: 0.08, metalness: 0.1 });
  warmer.add(makeBox({ w: 0.52, h: 0.38, d: 0.44, mat: warmerGlass, pos: [0, 0.27, 0], cast: false }));
  for (let i = 0; i < 4; i++) {
    warmer.add(makeSphere({ r: 0.065, mat: toon(i % 2 ? 0xd99d45 : 0xa8652d), pos: [-0.16 + i * 0.1, 0.16, randomRange(-0.1, 0.1)], scale: [1.25, 0.75, 1], seg: 8 }));
  }
  const warmerLight = new THREE.PointLight(0xffbd72, 8, 2.4, 2);
  warmerLight.position.set(counterX - 0.4, 1.56, counterZ + 0.35);
  interior.add(warmerLight);
  // coffee machine on back counter
  interior.add(makeBox({ w: 0.42, h: 0.62, d: 0.36, mat: toon(0x242b33), pos: [-2.0, 1.64, -5.5], outline: 0.007, cast: false }));
  interior.add(makeBox({ w: 0.24, h: 0.28, d: 0.02, mat: basic(0x6fe8ff, { toneMapped: false }), pos: [-2.0, 1.7, -5.31], cast: false }));

  // clerk
  const clerk = new THREE.Group();
  clerk.position.set(-0.75, 0.3, -5.95);
  clerk.rotation.y = 0.15;
  interior.add(clerk);
  const uniform = toon(0x14525c);
  clerk.add(makeCylinder({ rt: 0.2, rb: 0.27, h: 0.74, seg: 10, mat: uniform, pos: [0, 0.38, 0], outline: 0.008 }));
  clerk.add(makeSphere({ r: 0.23, mat: uniform, pos: [0, 0.8, 0], scale: [1, 0.78, 0.72], seg: 10, outline: 0.006 }));
  clerk.add(makeCylinder({ rt: 0.1, rb: 0.1, h: 0.16, seg: 8, mat: toon(0xe4b48f), pos: [0, 0.98, 0], cast: false }));
  clerk.add(makeSphere({ r: 0.145, mat: toon(0xe9c09d), pos: [0, 1.1, 0], scale: [0.88, 1.03, 0.9], seg: 10, outline: 0.006 }));
  clerk.add(makeSphere({ r: 0.15, mat: toon(0x201a1c), pos: [0, 1.14, -0.015], scale: [0.94, 0.75, 0.92], seg: 10 }));
  clerk.add(makeBox({ w: 0.24, h: 0.06, d: 0.2, mat: basic(0x1e1a1e), pos: [0, 1.23, 0], cast: false }));

  // ATM kiosk by the east glass
  const atm = new THREE.Group();
  atm.position.set(-0.35, 0.29, -8.45);
  interior.add(atm);
  atm.add(makeBox({ w: 0.82, h: 1.72, d: 0.66, mat: toon(0x284d63), pos: [0, 0.86, 0], radius: 0.05, outline: 0.01, cast: false }));
  const atmScreen = canvasTexture(256, 192, (ctx, w, h) => {
    ctx.fillStyle = '#0a2230';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#4ce5e8';
    ctx.font = '900 44px "Arial Black", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('ATM', w / 2, 58);
    ctx.font = '600 18px "Yu Gothic", sans-serif';
    ctx.fillStyle = '#d7fdff';
    ctx.fillText('24時間 ご利用ください', w / 2, 96);
    ctx.fillStyle = '#58cbd2';
    for (let i = 0; i < 4; i++) {
      ctx.fillRect(28, 118 + i * 15, w - 56, 4);
      ctx.fillRect(28 + ((i * 41) % 80), 118 + i * 15, 34, 4);
    }
    ctx.strokeStyle = 'rgba(117,247,255,0.4)';
    ctx.strokeRect(12, 12, w - 24, h - 24);
  });
  atm.add(makeSign({ w: 0.64, h: 0.48, tex: atmScreen, pos: [0, 1.36, 0.34], toneMapped: false }));
  atm.add(makeBox({ w: 0.5, h: 0.08, d: 0.03, mat: basic(0x83f7ff, { toneMapped: false }), pos: [0, 1.08, 0.34], cast: false }));
  atm.add(makeBox({ w: 0.6, h: 0.1, d: 0.05, mat: toon(0x1b2730), pos: [0, 0.68, 0.34], cast: false }));

  // baskets by door
  for (let i = 0; i < 3; i++) {
    interior.add(makeBox({ w: 0.55, h: 0.22, d: 0.4, mat: toon(i === 0 ? 0xd6b04f : 0x6fb8c5), pos: [-2.8 + i * 0.04, 0.36 + i * 0.22, -1.25], cast: false }));
  }

  // floor mat just inside door
  interior.add(
    makeBox({
      w: 2.2,
      h: 0.022,
      d: 1.1,
      mat: toon(0x1a3d45),
      pos: [-1.05, 0.295, -1.35],
      cast: false,
    })
  );

  // interior neon wall stickers
  interior.add(
    makeSign({
      w: 1.15,
      h: 0.55,
      tex: makeWindowDecal('OPEN', '#ff7cae', '24 HOURS'),
      pos: [-4.3, 3.3, S.z0 + 0.31],
      transparent: true,
      opacity: 0.95,
    })
  );
  group.add(
    makeSign({
      w: 1.25,
      h: 0.58,
      tex: makeWindowDecal('OPEN', '#ff7cae', 'HOSHINO MART'),
      pos: [-1.05, 2.55, S.z1 - 0.28],
      transparent: true,
      opacity: 0.82,
    })
  );

  // ---------- signage and fascia ----------
  const fascia = makeBox({
    w: S.width,
    h: 1.3,
    d: 0.46,
    mat: frameMat,
    pos: [S.cx, 4.88, S.z1 - 0.16],
    radius: 0.02,
    outline: 0.04,
  });
  group.add(fascia);
  // front sign
  group.add(
    makeSign({
      w: S.width - 0.28,
      h: 1.18,
      tex: makeMainSignTexture(),
      pos: [S.cx, 4.88, S.z1 + 0.075],
      toneMapped: false,
    })
  );
  // side sign band
  group.add(
    makeBox({
      w: 0.46,
      h: 1.3,
      d: S.depth,
      mat: frameMat,
      pos: [S.x1 + 0.02, 4.88, S.cz],
      radius: 0.02,
      outline: 0.04,
    })
  );
  group.add(
    makeSign({
      w: S.depth - 0.28,
      h: 1.18,
      tex: makeSideSignTexture(),
      pos: [S.x1 + 0.255, 4.88, S.cz],
      rot: [0, Math.PI / 2, 0],
      toneMapped: false,
    })
  );
  // sign edge neon
  for (const y of [4.27, 5.49]) {
    group.add(makeBox({ w: S.width - 0.1, h: 0.035, d: 0.03, mat: cyanLightMat, pos: [S.cx, y, S.z1 + 0.08], cast: false }));
    group.add(makeBox({ w: 0.03, h: 0.035, d: S.depth - 0.1, mat: cyanLightMat, pos: [S.x1 + 0.27, y, S.cz], cast: false }));
  }
  addGlow(group, { pos: [-7.3, 4.9, -0.2], color: 0x5eeaff, size: 10, opacity: 0.11 });
  addGlow(group, { pos: [-2.2, 4.9, -0.2], color: 0xff609f, size: 6.5, opacity: 0.08 });
  addGlow(group, { pos: [0.5, 4.9, -5.5], color: 0x5eeaff, size: 6, opacity: 0.07 });

  // roof slab and parapet
  group.add(makeBox({ w: S.width + 0.35, h: 0.22, d: S.depth + 0.35, mat: roofMat, pos: [S.cx, 5.62, S.cz], radius: 0.02, outline: 0.035 }));
  for (const [w, d, x, z] of [
    [S.width + 0.5, 0.16, S.cx, S.z0 - 0.22],
    [S.width + 0.5, 0.16, S.cx, S.z1 + 0.1],
    [0.16, S.depth + 0.4, S.x0 - 0.16, S.cz],
    [0.16, S.depth + 0.4, S.x1 + 0.16, S.cz],
  ]) {
    group.add(makeBox({ w, h: 0.32, d, mat: toon(0x3b444f), pos: [x, 5.82, z], radius: 0.03, outline: 0.012 }));
  }

  // ---------- canopy ----------
  const canopyMat = toon(0x113b43, { map: makeAwningStripeTexture() });
  const canopyFront = makeBox({
    w: S.width + 0.15,
    h: 0.13,
    d: 1.35,
    mat: canopyMat,
    pos: [S.cx, 3.73, S.z1 + 0.47],
    radius: 0.02,
    outline: 0.015,
  });
  group.add(canopyFront);
  const canopySide = makeBox({
    w: 1.35,
    h: 0.13,
    d: S.depth + 0.15,
    mat: canopyMat,
    pos: [S.x1 + 0.62, 3.73, S.cz],
    radius: 0.02,
    outline: 0.015,
  });
  group.add(canopySide);
  group.add(
    makeBox({
      w: 0.16,
      h: 0.055,
      d: S.depth + 0.1,
      mat: basic(0x53e9e9, { toneMapped: false }),
      pos: [S.x1 + 1.28, 3.68, S.cz],
      cast: false,
    })
  );
  group.add(
    makeBox({
      w: S.width + 0.1,
      h: 0.055,
      d: 0.16,
      mat: basic(0x53e9e9, { toneMapped: false }),
      pos: [S.cx, 3.68, S.z1 + 1.12],
      cast: false,
    })
  );
  for (const z of [-8.7, -5.9, -3.1]) {
    group.add(makeTube([[S.x1 - 0.03, 4.1, z], [S.x1 + 0.7, 3.9, z], [S.x1 + 1.15, 3.8, z]], 0.022, toon(0x35434b), 16, 5));
  }
  // canopy support rods
  for (const x of [-9.6, -6.7, -3.8, -0.9]) {
    group.add(makeTube([[x, 4.1, S.z1 - 0.05], [x, 3.84, S.z1 + 0.45], [x, 3.78, S.z1 + 0.9]], 0.022, toon(0x35434b), 16, 5));
  }
  // downlights under canopy
  for (const x of [-9.2, -7.0, -4.8, -2.6, -0.4]) {
    group.add(makeCylinder({ rt: 0.1, rb: 0.08, h: 0.04, seg: 10, mat: basic(0xffe1ae, { toneMapped: false }), pos: [x, 3.65, S.z1 + 0.55], cast: false }));
  }
  for (const z of [-8.7, -6.2, -3.7, -1.3]) {
    group.add(makeCylinder({ rt: 0.09, rb: 0.07, h: 0.04, seg: 10, mat: basic(0xffe1ae, { toneMapped: false }), pos: [S.x1 + 0.55, 3.65, z], cast: false }));
  }
  const doorWash = new THREE.PointLight(0xffc07d, 58, 9, 2);
  doorWash.position.set(-1.05, 3.25, 0.65);
  const entryGlow = new THREE.PointLight(0xffd9a9, 26, 4.5, 2);
  entryGlow.position.set(-1.05, 2.1, -1.1);
  group.add(entryGlow);
  for (const x of [-7.4, -3.9]) {
    const canopyLamp = new THREE.PointLight(0xffc88e, 24, 5.8, 2);
    canopyLamp.position.set(x, 3.32, 0.1);
    group.add(canopyLamp);
  }
  const sideCanopyLamp = new THREE.PointLight(0xffc489, 21, 5.0, 2);
  sideCanopyLamp.position.set(1.55, 3.3, -5.4);
  group.add(sideCanopyLamp);
  doorWash.castShadow = true;
  doorWash.shadow.mapSize.set(512, 512);
  doorWash.shadow.bias = -0.002;
  group.add(doorWash);
  addGlow(group, { pos: [-1.05, 3.6, 0.75], color: 0xffc887, size: 2.2, opacity: 0.22 });

  // entrance mat
  group.add(
    makeBox({
      w: 2.7,
      h: 0.035,
      d: 1.25,
      mat: toon(0x182e34),
      pos: [-1.05, 0.2, 0.45],
      cast: false,
    })
  );
  const matMap = makeMatTexture();
  group.add(
    makeSign({
      w: 2.55,
      h: 1.1,
      tex: matMap,
      pos: [-1.05, 0.222, 0.45],
      rot: [-Math.PI / 2, 0, 0],
      toneMapped: true,
    })
  );

  // ---------- glass decals ----------
  group.add(
    makeSign({
      w: 1.9,
      h: 0.9,
      tex: makeWindowDecal('COFFEE', '#ffcf7a', 'HOT & ICED  ¥120'),
      pos: [-7.5, 2.55, S.z1 + 0.04],
      transparent: true,
      opacity: 0.88,
    })
  );
  group.add(
    makeSign({
      w: 1.55,
      h: 0.72,
      tex: makeWindowDecal('HOT SNACK', '#ff8bad', 'からあげ ・ 肉まん'),
      pos: [-5.0, 2.2, S.z1 + 0.04],
      transparent: true,
      opacity: 0.86,
    })
  );
  group.add(
    makeSign({
      w: 1.2,
      h: 0.55,
      tex: makeWindowDecal('Wi-Fi', '#72f2ff', 'FREE'),
      pos: [0.46, 2.38, S.z1 + 0.04],
      rot: [0, 0, 0],
      transparent: true,
      opacity: 0.8,
    })
  );
  // side window neon
  group.add(
    makeSign({
      w: 1.3,
      h: 0.62,
      tex: makeWindowDecal('ATM', '#6ff4ff', '24 HOURS'),
      pos: [S.x1 + 0.04, 2.85, -6.5],
      rot: [0, Math.PI / 2, 0],
      transparent: true,
      opacity: 0.9,
    })
  );

  // ---------- blade sign ----------
  const blade = new THREE.Group();
  blade.position.set(1.18, 5.0, -3.05);
  group.add(blade);
  blade.add(makeBox({ w: 0.98, h: 2.2, d: 0.16, mat: toon(0x160f26), pos: [0, 0, 0], radius: 0.02, outline: 0.02 }));
  blade.add(makeSign({ w: 0.9, h: 2.08, tex: makeBladeSignTexture(), pos: [0, 0, 0.085], toneMapped: true }));
  const backTex = makeBladeSignTexture();
  blade.add(makeSign({ w: 0.9, h: 2.08, tex: backTex, pos: [0, 0, -0.085], rot: [0, Math.PI, 0], toneMapped: true }));
  for (const y of [-0.9, 0.9]) {
    blade.add(makeBox({ w: 0.55, h: 0.07, d: 0.07, mat: toon(0x343b44), pos: [-0.73, y, 0], cast: false }));
  }
  addGlow(group, { pos: [1.2, 5.0, -2.8], color: 0xff5f9e, size: 4.6, opacity: 0.1 });
  addGlow(group, { pos: [1.6, 3.9, -3.05], color: 0x6ff4ff, size: 2.2, opacity: 0.1 });

  // ---------- exterior props ----------
  // vending machines
  function vendingMachine(scheme, z) {
    const g = new THREE.Group();
    const isRed = scheme === 'red';
    const bodyCol = isRed ? 0xb83242 : 0xd8dde0;
    const bodyMat = toon(bodyCol);
    const body = makeBox({
      w: 0.8,
      h: 1.86,
      d: 1.0,
      mat: bodyMat,
      pos: [1.2, 0.18 + 0.93, z],
      radius: 0.03,
      outline: 0.028,
    });
    g.add(body);
    g.add(makeBox({ w: 0.83, h: 0.17, d: 1.03, mat: toon(isRed ? 0x7e1424 : 0x2e5c7c), pos: [1.2, 2.12, z], radius: 0.02, outline: 0.01 }));
    const frontTex = makeVendingTexture(scheme);
    const front = makeSign({
      w: 0.96,
      h: 1.72,
      tex: frontTex,
      pos: [1.611, 1.12, z],
      rot: [0, Math.PI / 2, 0],
      toneMapped: true,
    });
    g.add(front);
    g.add(makeBox({ w: 0.04, h: 0.1, d: 1.02, mat: basic(0xffe6a7, { toneMapped: false }), pos: [1.605, 2.01, z], cast: false }));
    g.add(makeBox({ w: 0.04, h: 0.22, d: 0.95, mat: toon(0x252a31), pos: [1.605, 0.3, z], cast: false }));
    g.add(makeBox({ w: 0.04, h: 0.1, d: 0.95, mat: toon(0x343941), pos: [1.605, 0.36, z], cast: false }));
    const light = new THREE.PointLight(isRed ? 0xff6a88 : 0x7ceeff, 7, 3.2, 2);
    light.position.set(1.95, 1.3, z);
    g.add(light);
    addGlow(g, { pos: [1.7, 1.6, z], color: isRed ? 0xff5477 : 0x7bf4ff, size: 2.4, opacity: 0.16 });
    addGlow(g, { pos: [1.7, 1.15, z], color: isRed ? 0xffd3da : 0xd7fcff, size: 3.6, opacity: 0.08 });
    return g;
  }
  group.add(vendingMachine('red', -3.7));
  group.add(vendingMachine('blue', -4.85));

  // recycling bins near the entrance corner
  const binGroup = new THREE.Group();
  binGroup.position.set(1.25, 0.18, -1.7);
  group.add(binGroup);
  const binDefs = [
    { color: 0x3b8ca6, label: 'かん', z: 0.0 },
    { color: 0xb8873e, label: 'ペット', z: 0.56 },
    { color: 0x4b515d, label: 'もえる', z: 1.12 },
  ];
  for (const b of binDefs) {
    binGroup.add(makeBox({ w: 0.48, h: 0.7, d: 0.48, mat: toon(b.color), pos: [0, 0.36, b.z], radius: 0.05, outline: 0.01 }));
    binGroup.add(makeBox({ w: 0.52, h: 0.06, d: 0.52, mat: toon(0x272b33), pos: [0, 0.72, b.z], radius: 0.02, cast: true }));
    binGroup.add(
      makeSign({
        w: 0.3,
        h: 0.3,
        tex: makeBinLabel(b.label, `#${new THREE.Color(b.color).getHexString()}`),
        pos: [0.245, 0.42, b.z],
        rot: [0, Math.PI / 2, 0],
        transparent: true,
        opacity: 0.92,
      })
    );
  }

  // umbrella stand near the door
  const umbrellas = makeUmbrellaStand();
  umbrellas.position.set(0.23, 0.18, 0.28);
  group.add(umbrellas);

  // potted plants
  const plant1 = makePottedPlant(0.85, 0x3b7c5f);
  plant1.position.set(-9.85, 0.18, 0.6);
  group.add(plant1);
  const plant2 = makePottedPlant(0.72, 0x4d8866);
  plant2.position.set(0.64, 0.18, -9.2);
  group.add(plant2);

  // cat by the side window
  const cat = makeCat();
  cat.position.set(2.9, 0.18, -1.55);
  cat.rotation.y = -1.6;
  group.add(cat);

  // posters on the east glass, lit boxes
  for (const [z, variant] of [
    [-7.25, 0],
    [-8.75, 2],
  ]) {
    const frame = makeBox({
      w: 0.055,
      h: 1.45,
      d: 1.04,
      mat: toon(0x27323b),
      pos: [S.x1 + 0.13, 2.42, z],
      outline: 0.008,
      cast: false,
    });
    group.add(frame);
    group.add(
      makeSign({
        w: 0.92,
        h: 1.32,
        tex: makePosterTexture(variant),
        pos: [S.x1 + 0.365, 2.42, z],
        rot: [0, Math.PI / 2, 0],
        toneMapped: false,
      })
    );
    group.add(makeBox({ w: 0.04, h: 0.035, d: 0.92, mat: basic(0xfff1cf, { toneMapped: false }), pos: [S.x1 + 0.38, 3.11, z], cast: false }));
  }

  // AC units and wall services on the east wall
  function acUnit(x, y, z, scale = 1, face = 1) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    const body = makeBox({
      w: 0.38 * scale,
      h: 0.62 * scale,
      d: 0.96 * scale,
      mat: toon(0x8d979e),
      pos: [0, 0, 0],
      radius: 0.04,
      outline: 0.012,
    });
    g.add(body);
    const grille = new THREE.Mesh(
      new THREE.CircleGeometry(0.22 * scale, 24),
      new THREE.MeshStandardMaterial({ map: makeVentTexture(), color: 0x74818b, roughness: 0.5, metalness: 0.5 })
    );
    grille.rotation.y = face * (Math.PI / 2);
    grille.position.set(face * 0.195 * scale, 0, 0);
    g.add(grille);
    g.add(makeCylinder({ rt: 0.07 * scale, rb: 0.08 * scale, h: 0.09 * scale, seg: 10, mat: toon(0x545b65), pos: [face * 0.22 * scale, 0, 0], rot: [0, 0, Math.PI / 2], cast: false }));
    for (const dz of [-0.36, 0.36]) {
      g.add(makeBox({ w: 0.12 * scale, h: 0.05 * scale, d: 0.06 * scale, mat: toon(0x3f444b), pos: [0, -0.36 * scale, dz * scale], cast: false }));
    }
    return g;
  }
  group.add(acUnit(0.86, 3.0, -8.6, 1.0, 1));
  const acGround = acUnit(-11.25, 0.68, -8.9, 1.15, 1);
  acGround.rotation.y = Math.PI;
  group.add(acGround);
  // pipes down the wall
  group.add(makeTube([[0.8, 2.7, -9.1], [0.78, 1.7, -9.15], [0.78, 0.4, -9.15]], 0.035, toon(0x8c8d88), 24, 5));
  group.add(makeTube([[0.8, 2.7, -8.1], [0.78, 1.6, -8.05], [0.78, 0.4, -8.0]], 0.032, toon(0x8c8d88), 24, 5));
  // wall vents and electrical boxes
  group.add(makeBox({ w: 0.18, h: 0.52, d: 0.38, mat: toon(0x757c83), pos: [0.82, 2.35, -7.1], radius: 0.02, outline: 0.006 }));
  group.add(makeBox({ w: 0.08, h: 0.32, d: 0.25, mat: toon(0x4b525b), pos: [0.77, 1.4, -2.8], outline: 0.005 }));

  // downspout at the front-left corner
  group.add(makeTube([[-10.25, 5.7, -0.78], [-10.28, 4.0, -0.84], [-10.3, 1.1, -0.84], [-10.3, 0.2, -0.84]], 0.055, toon(0x5f6a70), 30, 6));
  for (const y of [2.0, 4.2]) {
    group.add(makeBox({ w: 0.15, h: 0.04, d: 0.15, mat: toon(0x3c444a), pos: [-10.2, y, -0.8], cast: false }));
  }

  // staff door on the west wall
  group.add(makeBox({ w: 0.06, h: 2.25, d: 1.15, mat: toon(0x29464e), pos: [S.x0 - 0.06, 1.35, -7.2], outline: 0.01 }));
  group.add(makeBox({ w: 0.025, h: 0.5, d: 0.5, mat: toon(0xd8b56f, { emissive: 0x352003, emissiveIntensity: 0.4 }), pos: [S.x0 - 0.1, 1.93, -7.24], cast: false }));
  group.add(makeBox({ w: 0.03, h: 0.04, d: 0.14, mat: basic(0x4d5058), pos: [S.x0 - 0.11, 1.18, -6.83], cast: false }));
  const alleyLamp = new THREE.PointLight(0xffb56e, 13, 5, 2);
  alleyLamp.position.set(S.x0 - 0.5, 2.6, -7.2);
  group.add(alleyLamp);
  addGlow(group, { pos: [S.x0 - 0.35, 2.72, -7.2], color: 0xffb76e, size: 1.3, opacity: 0.35 });
  group.add(makeBox({ w: 0.16, h: 0.05, d: 0.05, mat: basic(0xffc074, { toneMapped: false }), pos: [S.x0 - 0.25, 2.66, -7.2], cast: false }));

  // posters on the west wall (visible when orbiting to the alley)
  for (const [z, variant] of [
    [-3.8, 1],
    [-2.3, 2],
  ]) {
    group.add(
      makeBox({
        w: 0.06,
        h: 1.3,
        d: 0.9,
        mat: toon(0x2f353c),
        pos: [S.x0 - 0.1, 2.04, z],
        cast: false,
        outline: 0.006,
      })
    );
    group.add(
      makeSign({
        w: 0.84,
        h: 1.22,
        tex: makePosterTexture(variant),
        pos: [S.x0 - 0.14, 2.04, z],
        rot: [0, -Math.PI / 2, 0],
        toneMapped: false,
      })
    );
  }
  // wall pipes and cable box on west wall
  group.add(makeTube([[-10.68, 4.5, -1.3], [-10.66, 2.1, -1.35], [-10.66, 0.25, -1.35]], 0.045, toon(0x636b70), 20, 5));
  group.add(makeBox({ w: 0.22, h: 0.4, d: 0.5, mat: toon(0x70777d), pos: [-10.72, 1.7, -4.9], outline: 0.006 }));

  // ---------- service side: the back of a konbini has a life of its own ----------
  // corrugated metal panels on the rear and west walls
  group.add(
    makePlane({
      w: 9.6,
      h: 2.55,
      mat: corrMat,
      pos: [S.cx, 1.9, S.z0 - 0.045],
      rot: [0, Math.PI, 0],
      receive: true,
    })
  );
  group.add(
    makePlane({
      w: 8.7,
      h: 2.3,
      mat: corrMat,
      pos: [S.x0 - 0.045, 1.8, S.cz],
      rot: [0, -Math.PI / 2, 0],
      receive: true,
    })
  );
  // dark metal base bands
  group.add(makeBox({ w: S.width, h: 0.55, d: 0.05, mat: toon(0x253139), pos: [S.cx, 0.48, S.z0 - 0.06], cast: false }));
  group.add(makeBox({ w: 0.05, h: 0.55, d: S.depth - 0.2, mat: toon(0x253139), pos: [S.x0 - 0.06, 0.48, S.cz], cast: false }));
  group.add(makeBox({ w: 9.7, h: 0.06, d: 0.08, mat: toon(0x66737c), pos: [S.cx, 3.21, S.z0 - 0.08], cast: false }));
  group.add(makeBox({ w: 0.08, h: 0.06, d: 8.8, mat: toon(0x66737c), pos: [S.x0 - 0.08, 3.05, S.cz], cast: false }));

  // rear staff door
  const rearDoorMat = toon(0x244a53, { emissive: 0x071417, emissiveIntensity: 0.2 });
  group.add(makeBox({ w: 1.2, h: 2.3, d: 0.07, mat: rearDoorMat, pos: [-8.55, 1.4, S.z0 - 0.1], outline: 0.012 }));
  group.add(makeBox({ w: 1.36, h: 0.08, d: 0.11, mat: toon(0x1a2d33), pos: [-8.55, 2.57, S.z0 - 0.12], cast: false }));
  group.add(makeBox({ w: 0.08, h: 2.38, d: 0.11, mat: toon(0x1a2d33), pos: [-9.18, 1.38, S.z0 - 0.12], cast: false }));
  group.add(makeBox({ w: 0.08, h: 2.38, d: 0.11, mat: toon(0x1a2d33), pos: [-7.92, 1.38, S.z0 - 0.12], cast: false }));
  group.add(makeBox({ w: 0.48, h: 0.5, d: 0.03, mat: toon(0x9fb9b1, { emissive: 0x20352e, emissiveIntensity: 0.5 }), pos: [-8.55, 1.91, S.z0 - 0.14], cast: false }));
  for (let i = 0; i < 3; i++) {
    group.add(makeBox({ w: 0.7, h: 0.02, d: 0.015, mat: toon(0x27393a), pos: [-8.55, 1.74 + i * 0.15, S.z0 - 0.16], cast: false }));
  }
  group.add(makeBox({ w: 0.05, h: 0.22, d: 0.05, mat: toon(0x1a2428), pos: [-7.99, 1.22, S.z0 - 0.15], cast: false }));
  // hazard stripes at the foot of the door
  for (let i = 0; i < 4; i++) {
    group.add(
      makeBox({
        w: 0.19,
        h: 0.1,
        d: 0.02,
        mat: basic(i % 2 ? 0xe0b747 : 0x2c3338, { toneMapped: true }),
        pos: [-9.03 + i * 0.24, 0.36, S.z0 - 0.145],
        rot: [0, 0, 0.18],
        cast: false,
      })
    );
  }
  // little canopy over the staff door
  group.add(makeBox({ w: 3.2, h: 0.1, d: 1.12, mat: toon(0x2e3c43), pos: [-8.55, 2.92, S.z0 - 0.63], radius: 0.02, outline: 0.012 }));
  group.add(makeBox({ w: 3.24, h: 0.05, d: 0.08, mat: toon(0x69737a), pos: [-8.55, 2.9, S.z0 - 1.18], cast: false }));
  for (const x of [-9.6, -7.5]) {
    group.add(makeTube([[x, 3.8, S.z0 - 0.1], [x, 3.15, S.z0 - 0.55], [x, 2.98, S.z0 - 1.08]], 0.02, toon(0x4e5a62), 14, 5));
  }
  // staff entrance lightbox
  const staffTex = canvasTexture(512, 128, (ctx, w, h) => {
    ctx.fillStyle = '#082b35';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#5ce8f0';
    ctx.lineWidth = 4;
    ctx.strokeRect(6, 6, w - 12, h - 12);
    ctx.fillStyle = '#e9ffff';
    ctx.textAlign = 'center';
    ctx.font = '700 43px "Arial Black", "Yu Gothic", sans-serif';
    ctx.fillText('STAFF ENTRANCE', w / 2, 58);
    ctx.fillStyle = '#90e9ef';
    ctx.font = '600 23px "Yu Gothic", sans-serif';
    ctx.fillText('関係者以外立入禁止', w / 2, 96);
  });
  group.add(makeBox({ w: 3.0, h: 0.65, d: 0.08, mat: toon(0x182b31), pos: [-8.55, 3.6, S.z0 - 0.13], radius: 0.02, outline: 0.008 }));
  group.add(
    makeSign({
      w: 2.86,
      h: 0.56,
      tex: staffTex,
      pos: [-8.55, 3.6, S.z0 - 0.18],
      rot: [0, Math.PI, 0],
      toneMapped: true,
    })
  );
  const backDoorLight = new THREE.PointLight(0xffc27c, 12, 4.2, 2);
  backDoorLight.position.set(-8.55, 2.72, S.z0 - 0.95);
  group.add(backDoorLight);
  group.add(makeBox({ w: 0.42, h: 0.06, d: 0.16, mat: basic(0xffd193, { toneMapped: false }), pos: [-8.55, 2.82, S.z0 - 1.02], cast: false }));
  addGlow(group, { pos: [-8.55, 2.78, S.z0 - 1.02], color: 0xffb56d, size: 1.2, opacity: 0.3 });
  // wall vent and pipework on the back
  group.add(makeBox({ w: 1.22, h: 0.74, d: 0.09, mat: toon(0x59636b), pos: [-4.1, 3.15, S.z0 - 0.11], radius: 0.02, outline: 0.008 }));
  group.add(
    makePlane({
      w: 1.06,
      h: 0.58,
      mat: new THREE.MeshStandardMaterial({ map: makeVentTexture(), color: 0x96a2ac, roughness: 0.6, metalness: 0.4 }),
      pos: [-4.1, 3.15, S.z0 - 0.165],
      rot: [0, Math.PI, 0],
    })
  );
  for (const [x, z] of [
    [-2.1, -10.68],
    [-1.75, -10.7],
  ]) {
    group.add(makeTube([[x, 4.05, z], [x, 2.5, z - 0.02], [x, 0.28, z - 0.02]], 0.034, toon(0x6d767a), 22, 5));
  }
  group.add(makeTube([[-9.9, 4.0, -10.7], [-5.8, 3.94, -10.7], [-2.0, 4.0, -10.7]], 0.032, toon(0x6d767a), 22, 5));
  for (let i = 0; i < 5; i++) {
    group.add(makeBox({ w: 0.12, h: 0.045, d: 0.07, mat: toon(0x3d464c), pos: [-9.5 + i * 1.8, 4.0, S.z0 - 0.15], cast: false }));
  }
  // roof access ladder
  for (const x of [-10.02, -9.63]) {
    group.add(makeBox({ w: 0.035, h: 3.9, d: 0.035, mat: toon(0x515c64), pos: [x, 2.25, S.z0 - 0.2], cast: false }));
  }
  for (let i = 0; i < 9; i++) {
    group.add(makeBox({ w: 0.42, h: 0.028, d: 0.035, mat: toon(0x515c64), pos: [-9.825, 0.62 + i * 0.4, S.z0 - 0.2], cast: false }));
  }
  // back window, dark stockroom glass
  group.add(makeBox({ w: 1.1, h: 0.78, d: 0.05, mat: toon(0x1b2c36, { emissive: 0x0b141c, emissiveIntensity: 0.4 }), pos: [-2.75, 3.25, S.z0 - 0.08], cast: false }));
  for (let i = 0; i < 4; i++) {
    group.add(makeBox({ w: 0.03, h: 0.85, d: 0.03, mat: toon(0x5d666c), pos: [-3.12 + i * 0.25, 3.25, S.z0 - 0.115], cast: false }));
  }
  group.add(makeBox({ w: 1.2, h: 0.05, d: 0.07, mat: toon(0x5d666c), pos: [-2.75, 3.67, S.z0 - 0.1], cast: false }));

  // rear service clutter
  group.add(makeBox({ w: 1.65, h: 1.0, d: 0.9, mat: toon(0x2e4b44), pos: [-1.7, 0.56, -11.95], radius: 0.05, outline: 0.014 }));
  group.add(makeBox({ w: 1.7, h: 0.1, d: 0.94, mat: toon(0x223d38), pos: [-1.7, 1.08, -11.95], radius: 0.04, cast: true }));
  group.add(makeBox({ w: 0.5, h: 0.04, d: 0.06, mat: basic(0x8fd1c0, { toneMapped: true }), pos: [-1.7, 1.03, -12.4], cast: false }));
  for (const x of [-2.32, -1.08]) {
    group.add(
      makeCylinder({
        rt: 0.14,
        rb: 0.14,
        h: 0.08,
        seg: 10,
        mat: toon(0x171b1f),
        pos: [x, 0.14, -12.3],
        rot: [Math.PI / 2, 0, 0],
        cast: false,
      })
    );
  }
  for (let i = 0; i < 3; i++) {
    group.add(
      makeBox({
        w: 0.58,
        h: 0.33,
        d: 0.42,
        mat: toon([0x8a493d, 0x3e6570, 0x765f3c][i]),
        pos: [-7.2 + (i % 2) * 0.05, 0.34 + i * 0.31, -11.45],
        radius: 0.03,
        outline: 0.008,
      })
    );
    group.add(makeBox({ w: 0.47, h: 0.035, d: 0.3, mat: toon(0x22201c), pos: [-7.2 + (i % 2) * 0.05, 0.47 + i * 0.31, -11.45], cast: false }));
  }

  // west service wall: high barred window, vent, painted star and more conduit
  group.add(makeBox({ w: 0.06, h: 0.72, d: 1.2, mat: toon(0x1b2b35, { emissive: 0x09141a, emissiveIntensity: 0.35 }), pos: [S.x0 - 0.09, 3.22, -9.45], cast: false }));
  for (let i = 0; i < 4; i++) {
    group.add(makeBox({ w: 0.035, h: 0.8, d: 0.03, mat: toon(0x59636b), pos: [S.x0 - 0.12, 3.22, -9.98 + i * 0.35], cast: false }));
  }
  group.add(makeBox({ w: 0.07, h: 0.05, d: 1.28, mat: toon(0x59636b), pos: [S.x0 - 0.1, 3.58, -9.45], cast: false }));
  group.add(makeBox({ w: 0.07, h: 0.8, d: 0.08, mat: toon(0x59636b), pos: [S.x0 - 0.12, 3.22, -3.95], cast: false }));
  group.add(
    makePlane({
      w: 1.05,
      h: 0.66,
      mat: new THREE.MeshStandardMaterial({ map: makeVentTexture(), color: 0x8f9ba5, roughness: 0.6, metalness: 0.4 }),
      pos: [S.x0 - 0.13, 3.12, -3.95],
      rot: [0, -Math.PI / 2, 0],
    })
  );
  const starDecalTex = canvasTexture(256, 256, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.shadowColor = '#61edf5';
    ctx.shadowBlur = 18;
    ctx.strokeStyle = 'rgba(118,238,247,0.8)';
    ctx.lineWidth = 9;
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + (i * Math.PI) / 5;
      const r = i % 2 === 0 ? 96 : 40;
      const x = Math.cos(a) * r;
      const y = Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  });
  group.add(
    makeSign({
      w: 1.35,
      h: 1.35,
      tex: starDecalTex,
      pos: [S.x0 - 0.1, 3.25, -6.35],
      rot: [0, -Math.PI / 2, 0],
      transparent: true,
      opacity: 0.7,
      toneMapped: true,
    })
  );
  group.add(makeTube([[S.x0 - 0.1, 4.05, -2.1], [S.x0 - 0.1, 2.2, -2.08], [S.x0 - 0.1, 0.3, -2.08]], 0.036, toon(0x6d767a), 18, 5));
  group.add(makeTube([[S.x0 - 0.1, 4.05, -9.9], [S.x0 - 0.1, 2.2, -9.88], [S.x0 - 0.1, 0.3, -9.88]], 0.036, toon(0x6d767a), 18, 5));
  group.add(makeBox({ w: 0.12, h: 0.55, d: 0.4, mat: toon(0x9f3d39), pos: [S.x0 - 0.11, 1.2, -1.55], radius: 0.02, outline: 0.006 }));
  group.add(makeBox({ w: 0.03, h: 0.09, d: 0.28, mat: basic(0xffce73, { toneMapped: true }), pos: [S.x0 - 0.18, 1.31, -1.55], cast: false }));

  // rooftop equipment
  const roofY = 5.75;
  group.add(acUnit(-8.2, roofY + 0.46, -8.5, 1.25, 1));
  group.add(acUnit(-5.0, roofY + 0.4, -9.1, 0.95, 1));
  // roof hatch and cable tray
  group.add(makeBox({ w: 1.25, h: 0.2, d: 1.25, mat: toon(0x4b555e), pos: [-3.15, roofY + 0.1, -6.2], radius: 0.02, outline: 0.012 }));
  group.add(makeBox({ w: 1.6, h: 0.05, d: 0.8, mat: toon(0x222b32), pos: [-1.9, roofY + 0.03, -7.5], cast: false }));
  group.add(makeTube([[-1.9, roofY + 0.15, -7.5], [-3.0, roofY + 0.15, -8.2], [-4.3, roofY + 0.15, -8.25]], 0.045, toon(0x4c5963), 20, 5));
  group.add(makeTube([[-7.0, roofY + 0.15, -7.5], [-7.4, roofY + 0.15, -8.3]], 0.045, toon(0x4c5963), 12, 5));
  // vent stacks
  for (const [x, z, r] of [
    [-2.8, -8.6, 0.14],
    [-7.1, -9.4, 0.1],
    [-3.8, -3.1, 0.08],
  ]) {
    group.add(makeCylinder({ rt: r, rb: r * 1.05, h: 0.9, seg: 8, mat: toon(0x5d666e), pos: [x, roofY + 0.45, z], outline: 0.007 }));
    group.add(makeCylinder({ rt: r * 1.45, rb: r * 1.45, h: 0.07, seg: 8, mat: toon(0x3e454e), pos: [x, roofY + 0.91, z], cast: false }));
  }
  // antenna
  group.add(makeCylinder({ rt: 0.025, rb: 0.035, h: 2.1, seg: 6, mat: toon(0x6a717a), pos: [-9.5, roofY + 1.1, -4.2], cast: false }));
  for (let i = 0; i < 3; i++) {
    group.add(makeBox({ w: 0.55, h: 0.018, d: 0.018, mat: toon(0x6a717a), pos: [-9.5, roofY + 1.2 + i * 0.25, -4.2], rot: [0, 0, 0.15 * (i % 2 ? 1 : -1)], cast: false }));
  }
  // safety rail at the back of the roof
  const railMetal = toon(0x3f4853);
  for (let i = 0; i < 5; i++) {
    const x = -10.2 + i * 2.6;
    group.add(makeCylinder({ rt: 0.025, rb: 0.025, h: 0.65, seg: 5, mat: railMetal, pos: [x, roofY + 0.34, -10.35], cast: false }));
  }
  for (const railY of [0.44, 0.65]) {
    group.add(makeCylinder({ rt: 0.02, rb: 0.02, h: 10.1, seg: 5, mat: railMetal, pos: [-5.0, roofY + railY, -10.35], rot: [0, 0, Math.PI / 2], cast: false }));
  }
  // cool rim along the parapet catches the night sky
  const rimMat = toon(0x71879a, { emissive: 0x1a2c3d, emissiveIntensity: 0.32 });
  group.add(makeBox({ w: S.width + 0.54, h: 0.022, d: 0.03, mat: rimMat, pos: [S.cx, 5.99, S.z1 + 0.19], cast: false }));
  group.add(makeBox({ w: S.width + 0.54, h: 0.022, d: 0.03, mat: rimMat, pos: [S.cx, 5.99, S.z0 - 0.19], cast: false }));
  group.add(makeBox({ w: 0.03, h: 0.022, d: S.depth + 0.44, mat: rimMat, pos: [S.x0 - 0.19, 5.99, S.cz], cast: false }));
  group.add(makeBox({ w: 0.03, h: 0.022, d: S.depth + 0.44, mat: rimMat, pos: [S.x1 + 0.19, 5.99, S.cz], cast: false }));

  // alley clutter: crates
  for (let i = 0; i < 3; i++) {
    const crate = makeBox({
      w: 0.58,
      h: 0.32,
      d: 0.42,
      mat: toon(i % 2 ? 0x9b5a3f : 0x4f6a72),
      pos: [-12.0 + (i % 2) * 0.1, 0.32 + i * 0.32, -4.0 + i * 0.05],
      radius: 0.03,
      outline: 0.008,
    });
    group.add(crate);
    group.add(makeBox({ w: 0.48, h: 0.04, d: 0.34, mat: toon(0x27201b), pos: [-12.0 + (i % 2) * 0.1, 0.49 + i * 0.32, -4.0 + i * 0.05], cast: false }));
  }

  // small light at the side service area
  const sideWash = new THREE.PointLight(0xffb66d, 12, 5, 2);
  sideWash.position.set(1.7, 2.9, -6.6);
  group.add(sideWash);
  addGlow(group, { pos: [1.5, 2.9, -6.6], color: 0xffb76d, size: 1.6, opacity: 0.18 });

  return group;
}
