import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export const COLORS = {
  ink: 0x10121c,
  outline: 0x0b0d16,
  asphalt: 0x171b29,
  sidewalk: 0x565969,
  curb: 0x747889,
  tealDeep: 0x0a3742,
  teal: 0x116170,
  tealBright: 0x49d8e8,
  cyan: 0x6fefff,
  pink: 0xff5f9e,
  magenta: 0xff3f86,
  warm: 0xffd59a,
  warmDeep: 0xff9f57,
  cream: 0xfff1cf,
  white: 0xf4f1e8,
  red: 0xd63b4a,
  yellow: 0xf2c45d,
  leaf: 0x2f6b54,
  leafDark: 0x1d4a3d,
  metal: 0x8f98a9,
  darkMetal: 0x303744,
  wood: 0x3a2822,
};

let RAMP = null;
let OUTLINE_MAT = null;
let GLOW_TEX = null;

export function initMaterials() {
  const steps = new Uint8Array([
    34, 34, 38, 255,
    112, 112, 122, 255,
    196, 196, 205, 255,
    255, 255, 255, 255,
  ]);
  RAMP = new THREE.DataTexture(steps, 4, 1, THREE.RGBAFormat);
  RAMP.minFilter = THREE.NearestFilter;
  RAMP.magFilter = THREE.NearestFilter;
  RAMP.generateMipmaps = false;
  RAMP.needsUpdate = true;

  OUTLINE_MAT = new THREE.MeshBasicMaterial({
    color: COLORS.outline,
    side: THREE.BackSide,
  });
  OUTLINE_MAT.name = 'ink outline';

  GLOW_TEX = makeRadialTexture();
}

export function toon(color, opts = {}) {
  const mat = new THREE.MeshToonMaterial({
    color,
    gradientMap: RAMP,
    ...opts,
  });
  return mat;
}

export function basic(color, opts = {}) {
  return new THREE.MeshBasicMaterial({ color, ...opts });
}

export function makeBox({
  w = 1,
  h = 1,
  d = 1,
  mat,
  pos = [0, 0, 0],
  rot = [0, 0, 0],
  radius = 0,
  segments = 2,
  outline = 0,
  cast = true,
  receive = true,
  name = '',
} = {}) {
  const geo =
    radius > 0
      ? new RoundedBoxGeometry(w, h, d, segments, Math.min(radius, Math.min(w, h, d) * 0.49))
      : new THREE.BoxGeometry(w, h, d);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(...pos);
  mesh.rotation.set(...rot);
  mesh.castShadow = cast;
  mesh.receiveShadow = receive;
  if (name) mesh.name = name;
  if (outline > 0) addOutline(mesh, outline);
  return mesh;
}

export function addOutline(mesh, thickness = 0.018) {
  if (!mesh.geometry || !mesh.geometry.attributes.position) return;
  mesh.geometry.computeBoundingBox();
  const size = new THREE.Vector3();
  mesh.geometry.boundingBox.getSize(size);
  const outline = new THREE.Mesh(mesh.geometry, OUTLINE_MAT);
  outline.scale.set(
    1 + (thickness * 2) / Math.max(size.x, 0.001),
    1 + (thickness * 2) / Math.max(size.y, 0.001),
    1 + (thickness * 2) / Math.max(size.z, 0.001)
  );
  outline.castShadow = false;
  outline.receiveShadow = false;
  outline.renderOrder = -1;
  outline.name = 'outline';
  mesh.add(outline);
  return outline;
}

export function makeCylinder({
  rt = 1,
  rb = 1,
  h = 1,
  seg = 16,
  mat,
  pos = [0, 0, 0],
  rot = [0, 0, 0],
  outline = 0,
  cast = true,
  receive = true,
  open = false,
}) {
  const geo = new THREE.CylinderGeometry(rt, rb, h, seg, 1, open);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(...pos);
  mesh.rotation.set(...rot);
  mesh.castShadow = cast;
  mesh.receiveShadow = receive;
  if (outline > 0) addOutline(mesh, outline);
  return mesh;
}

export function makeSphere({
  r = 1,
  mat,
  pos = [0, 0, 0],
  scale = [1, 1, 1],
  seg = 16,
  outline = 0,
  cast = true,
  receive = true,
}) {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, seg, Math.max(8, seg / 2)), mat);
  mesh.position.set(...pos);
  mesh.scale.set(...scale);
  mesh.castShadow = cast;
  mesh.receiveShadow = receive;
  if (outline > 0) addOutline(mesh, outline);
  return mesh;
}

export function makePlane({
  w = 1,
  h = 1,
  mat,
  pos = [0, 0, 0],
  rot = [0, 0, 0],
  receive = false,
  cast = false,
}) {
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  mesh.position.set(...pos);
  mesh.rotation.set(...rot);
  mesh.receiveShadow = receive;
  mesh.castShadow = cast;
  return mesh;
}

export function makeTube(points, radius, mat, tubularSegments = 64, radialSegments = 5) {
  const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)), false, 'catmullrom', 0.45);
  const geo = new THREE.TubeGeometry(curve, tubularSegments, radius, radialSegments, false);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = false;
  return mesh;
}

export function sagWire(a, b, sag = 0.5, radius = 0.016) {
  const mid = new THREE.Vector3((a[0] + b[0]) / 2, (a[1] + b[1]) / 2 - sag, (a[2] + b[2]) / 2);
  const curve = new THREE.CatmullRomCurve3(
    [new THREE.Vector3(...a), mid, new THREE.Vector3(...b)],
    false,
    'catmullrom',
    0.5
  );
  const geo = new THREE.TubeGeometry(curve, 30, radius, 4, false);
  const mesh = new THREE.Mesh(geo, wireMat);
  mesh.castShadow = false;
  return mesh;
}

let wireMat = null;
export function setWireMaterial(mat) {
  wireMat = mat;
}

export function makeCanvas(w, h) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  return canvas;
}

export function canvasTexture(w, h, draw, { srgb = true, repeat = null } = {}) {
  const canvas = makeCanvas(w, h);
  const ctx = canvas.getContext('2d');
  draw(ctx, w, h);
  const tex = new THREE.CanvasTexture(canvas);
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  if (repeat) {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(repeat[0], repeat[1]);
  }
  return tex;
}

export function makeRadialTexture() {
  const canvas = makeCanvas(256, 256);
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(128, 128, 2, 128, 128, 128);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.18, 'rgba(255,255,255,0.8)');
  grad.addColorStop(0.46, 'rgba(255,255,255,0.28)');
  grad.addColorStop(0.72, 'rgba(255,255,255,0.07)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 256);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function addGlow(group, { pos, color = 0xffffff, size = 2, opacity = 0.55, depthTest = true }) {
  const mat = new THREE.SpriteMaterial({
    map: GLOW_TEX,
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest,
    toneMapped: false,
  });
  const sprite = new THREE.Sprite(mat);
  sprite.position.set(...pos);
  sprite.scale.set(size, size, 1);
  sprite.renderOrder = 4;
  group.add(sprite);
  return sprite;
}

export function makeGlowPlane({ w, h, color, opacity = 0.4, pos, rot = [-Math.PI / 2, 0, 0] }) {
  const mat = new THREE.MeshBasicMaterial({
    map: GLOW_TEX,
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
    toneMapped: false,
  });
  const mesh = makePlane({ w, h, mat, pos, rot });
  mesh.renderOrder = 3;
  return mesh;
}

export function makeSign({
  w,
  h,
  tex,
  pos = [0, 0, 0],
  rot = [0, 0, 0],
  toneMapped = true,
  transparent = false,
  opacity = 1,
}) {
  const mat = new THREE.MeshBasicMaterial({
    map: tex,
    transparent,
    opacity,
    toneMapped,
    side: THREE.FrontSide,
  });
  const mesh = makePlane({ w, h, mat, pos, rot });
  mesh.renderOrder = 2;
  return mesh;
}

export function shadowed(mesh, cast = true, receive = true) {
  mesh.castShadow = cast;
  mesh.receiveShadow = receive;
  return mesh;
}

export function randomRange(min, max) {
  return min + Math.random() * (max - min);
}

export function pick(arr) {
  return arr[(Math.random() * arr.length) | 0];
}

export function smoothstep(edge0, edge1, x) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

export function hexToRgba(hex, alpha) {
  const c = new THREE.Color(hex);
  return `rgba(${Math.round(c.r * 255)},${Math.round(c.g * 255)},${Math.round(c.b * 255)},${alpha})`;
}
