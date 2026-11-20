import * as THREE from 'three';
import { randomRange } from './helpers.js';

export function buildRain(puddles = []) {
  const group = new THREE.Group();
  group.name = 'rain-and-ripples';

  const COUNT = 1150;
  const positions = new Float32Array(COUNT * 2 * 3);
  const drops = [];
  const store = { x0: -10.9, x1: 0.9, z0: -10.9, z1: -0.5 };

  function newDrop(i, initial = false) {
    let x = randomRange(-15, 15);
    let z = randomRange(-15, 15);
    let y = initial ? randomRange(0.4, 17) : randomRange(10, 17);
    if (x > store.x0 && x < store.x1 && z > store.z0 && z < store.z1) {
      y = randomRange(6.5, 16);
    }
    drops[i] = {
      x,
      z,
      y,
      speed: randomRange(11, 19),
      len: randomRange(0.3, 0.88),
      drift: randomRange(-0.05, 0.1),
    };
  }
  for (let i = 0; i < COUNT; i++) newDrop(i, true);

  function writeDrop(i, d) {
    const idx = i * 6;
    positions[idx] = d.x;
    positions[idx + 1] = d.y;
    positions[idx + 2] = d.z;
    positions[idx + 3] = d.x - d.len * 0.09;
    positions[idx + 4] = d.y - d.len;
    positions[idx + 5] = d.z + d.len * 0.035;
  }
  drops.forEach((d, i) => writeDrop(i, d));

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.LineBasicMaterial({
    color: 0xb7d5ff,
    transparent: true,
    opacity: 0.24,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  });
  const rain = new THREE.LineSegments(geo, mat);
  rain.frustumCulled = false;
  rain.renderOrder = 6;
  group.add(rain);

  // second, thinner far layer
  const farCount = 500;
  const farPositions = new Float32Array(farCount * 2 * 3);
  const farDrops = [];
  for (let i = 0; i < farCount; i++) {
    let x = randomRange(-15, 15);
    let z = randomRange(-15, 15);
    let y = randomRange(0, 18);
    if (x > store.x0 && x < store.x1 && z > store.z0 && z < store.z1) y = randomRange(6.5, 18);
    farDrops.push({ x, z, y, speed: randomRange(7, 12), len: randomRange(0.18, 0.5), drift: 0.03 });
  }
  function writeFar(i, d) {
    const idx = i * 6;
    farPositions[idx] = d.x;
    farPositions[idx + 1] = d.y;
    farPositions[idx + 2] = d.z;
    farPositions[idx + 3] = d.x - d.len * 0.08;
    farPositions[idx + 4] = d.y - d.len;
    farPositions[idx + 5] = d.z + d.len * 0.03;
  }
  farDrops.forEach((d, i) => writeFar(i, d));
  const farGeo = new THREE.BufferGeometry();
  farGeo.setAttribute('position', new THREE.BufferAttribute(farPositions, 3));
  const farMat = new THREE.LineBasicMaterial({
    color: 0x96b8e8,
    transparent: true,
    opacity: 0.12,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  });
  const farRain = new THREE.LineSegments(farGeo, farMat);
  farRain.frustumCulled = false;
  farRain.renderOrder = 5;
  group.add(farRain);

  // splash ripples
  const rippleGroup = new THREE.Group();
  group.add(rippleGroup);
  const ripples = [];
  const pool = puddles.length ? puddles : [new THREE.Vector3(0, 0.18, 1.2), new THREE.Vector3(6, 0.03, 7)];
  for (let i = 0; i < 26; i++) {
    const g = new THREE.Group();
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xbfe7ff,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
      toneMapped: false,
    });
    for (let k = 0; k < 2; k++) {
      const ring = new THREE.Mesh(new THREE.RingGeometry(0.072 + k * 0.075, 0.1 + k * 0.09, 22), ringMat);
      ring.rotation.x = -Math.PI / 2;
      g.add(ring);
    }
    const p = pool[(Math.random() * pool.length) | 0];
    g.position.set(p.x + randomRange(-0.4, 0.4), p.y + 0.004, p.z + randomRange(-0.3, 0.3));
    g.scale.setScalar(0.1);
    g.userData = {
      mat: ringMat,
      t: Math.random(),
      speed: randomRange(0.55, 0.95),
      pool,
    };
    rippleGroup.add(g);
    ripples.push(g);
  }

  // low drifting mist
  for (let i = 0; i < 4; i++) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    const gr = ctx.createRadialGradient(128, 64, 3, 128, 64, 120);
    gr.addColorStop(0, 'rgba(146,181,230,0.2)');
    gr.addColorStop(0.5, 'rgba(112,143,205,0.08)');
    gr.addColorStop(1, 'rgba(80,110,175,0)');
    ctx.fillStyle = gr;
    ctx.fillRect(0, 0, 256, 128);
    const tex = new THREE.CanvasTexture(canvas);
    const m = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      opacity: 0.24,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    });
    const sprite = new THREE.Sprite(m);
    sprite.position.set(randomRange(-12, 12), randomRange(0.7, 1.8), randomRange(-11, 10));
    sprite.scale.set(randomRange(7, 12), randomRange(2.2, 3.8), 1);
    group.add(sprite);
  }

  let elapsed = 0;
  function update(dt) {
    elapsed += dt;
    const p = geo.attributes.position.array;
    for (let i = 0; i < COUNT; i++) {
      const d = drops[i];
      d.y -= d.speed * dt;
      d.x += d.drift * dt;
      if (d.y < 0.2) {
        newDrop(i, false);
      }
      // do not let rain fall through the store's roof into the lit interior
      if (d.x > store.x0 && d.x < store.x1 && d.z > store.z0 && d.z < store.z1 && d.y < 6.0) {
        d.x = randomRange(-15, 15);
        d.z = randomRange(-15, 15);
        d.y = randomRange(11, 17);
      }
      writeDrop(i, d);
    }
    geo.attributes.position.needsUpdate = true;

    const fp = farGeo.attributes.position.array;
    for (let i = 0; i < farCount; i++) {
      const d = farDrops[i];
      d.y -= d.speed * dt;
      if (d.y < 0.2) {
        d.x = randomRange(-15, 15);
        d.z = randomRange(-15, 15);
        d.y = randomRange(10, 18);
        if (d.x > store.x0 && d.x < store.x1 && d.z > store.z0 && d.z < store.z1) d.y = randomRange(6.5, 18);
        d.speed = randomRange(7, 12);
      }
      if (d.x > store.x0 && d.x < store.x1 && d.z > store.z0 && d.z < store.z1 && d.y < 6.0) {
        d.x = randomRange(-15, 15);
        d.z = randomRange(-15, 15);
        d.y = randomRange(11, 17);
      }
      writeFar(i, d);
    }
    farGeo.attributes.position.needsUpdate = true;

    for (const r of ripples) {
      const ud = r.userData;
      ud.t += dt * ud.speed;
      if (ud.t >= 1) {
        ud.t = 0;
        const pp = ud.pool[(Math.random() * ud.pool.length) | 0];
        r.position.set(pp.x + randomRange(-0.45, 0.45), pp.y + 0.004, pp.z + randomRange(-0.35, 0.35));
      }
      const s = 0.16 + ud.t * 1.35;
      r.scale.setScalar(s);
      ud.mat.opacity = (1 - ud.t) * 0.42;
    }
  }

  return { group, update };
}
