import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { initMaterials, addGlow } from './helpers.js';
import { buildStreet } from './street.js';
import { buildStore } from './store.js';
import { buildProps } from './props.js';
import { buildRain } from './rain.js';

initMaterials();

const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.36;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x0a1020, 0.0068);

const view = new URLSearchParams(window.location.search);
const camera = new THREE.PerspectiveCamera(
  Number(view.get('fov')) || 38,
  window.innerWidth / window.innerHeight,
  0.1,
  200
);
camera.position.set(
  Number(view.get('cx')) || 27.0,
  Number(view.get('cy')) || 16.2,
  Number(view.get('cz')) || 31.2
);

const controls = new OrbitControls(camera, canvas);
controls.target.set(Number(view.get('tx')) || 0, Number(view.get('ty')) || 1.15, Number(view.get('tz')) || 0);
controls.enableDamping = true;
controls.dampingFactor = 0.065;
controls.enablePan = false;
controls.minDistance = 18;
controls.maxDistance = 120;
controls.minPolarAngle = 0.18;
controls.maxPolarAngle = Math.PI * 0.485;
controls.rotateSpeed = 0.72;
controls.zoomSpeed = 0.82;
controls.update();

let userInteracted = false;
controls.addEventListener('start', () => {
  userInteracted = true;
});

const defaultTarget = new THREE.Vector3(0, 1.15, 0);
const defaultDirection = new THREE.Vector3(27.0, 16.2, 31.2).sub(defaultTarget).normalize();
const hasCustomView = ['cx', 'cy', 'cz', 'tx', 'ty', 'tz'].some((key) => view.has(key));

function frameCamera(force = false) {
  const aspect = window.innerWidth / window.innerHeight;
  let fov = 39;
  let distance = 44.5;
  if (aspect < 0.8) {
    fov = 52;
    distance = 82;
  } else if (aspect < 1.15) {
    fov = 46;
    distance = 57;
  } else if (aspect < 1.5) {
    fov = 42;
    distance = 47;
  }
  camera.fov = fov;
  if (!hasCustomView && (force || !userInteracted)) {
    camera.position.copy(defaultTarget).addScaledVector(defaultDirection, distance);
    controls.target.copy(defaultTarget);
  }
  camera.updateProjectionMatrix();
  controls.update();
}

// ---------- global night lighting ----------
const hemi = new THREE.HemisphereLight(0x7f93c8, 0x1a1426, 1.18);
scene.add(hemi);
const ambient = new THREE.AmbientLight(0x243453, 0.8);
scene.add(ambient);

const moon = new THREE.DirectionalLight(0x839fff, 2.3);
moon.position.set(-19, 28, -17);
moon.castShadow = true;
moon.shadow.mapSize.set(2048, 2048);
moon.shadow.camera.left = -24;
moon.shadow.camera.right = 24;
moon.shadow.camera.top = 24;
moon.shadow.camera.bottom = -24;
moon.shadow.camera.near = 1;
moon.shadow.camera.far = 80;
moon.shadow.bias = -0.0008;
moon.shadow.normalBias = 0.025;
scene.add(moon);
scene.add(moon.target);

const rim = new THREE.DirectionalLight(0x4fc8e8, 0.85);
rim.position.set(18, 12, -22);
scene.add(rim);

const cityBounce = new THREE.DirectionalLight(0xff7eaa, 0.5);
cityBounce.position.set(20, 8, 24);
scene.add(cityBounce);

// ---------- world ----------
const world = new THREE.Group();
world.name = 'rainy-night-corner';
scene.add(world);

const street = buildStreet();
world.add(street.group);

const store = buildStore();
world.add(store);

const props = buildProps();
world.add(props);

const rain = buildRain(street.puddles);
world.add(rain.group);

// small local glows that belong to the overall composition
addGlow(world, { pos: [0.5, 5.3, -4.0], color: 0x66eaff, size: 2.8, opacity: 0.08 });
addGlow(world, { pos: [7.6, 2.4, 11.4], color: 0xff9d62, size: 3.2, opacity: 0.05 });
// soft halos read as rain haze without post-processing
addGlow(world, { pos: [-4.8, 5.6, -11.2], color: 0x58d9ff, size: 20, opacity: 0.035 });
addGlow(world, { pos: [-0.6, 3.8, -10.4], color: 0xff6fa8, size: 12, opacity: 0.03 });



// ---------- interaction polish ----------
let dragging = false;
canvas.addEventListener('pointerdown', () => {
  dragging = true;
  canvas.style.cursor = 'grabbing';
});
window.addEventListener('pointerup', () => {
  dragging = false;
  canvas.style.cursor = 'grab';
});

function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  renderer.setSize(w, h);
  frameCamera(false);
}
window.addEventListener('resize', resize);
resize();
frameCamera(true);

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  rain.update(dt);
  controls.update();
  renderer.render(scene, camera);
}
animate();

// keep default cursor affordance without adding UI
canvas.style.cursor = 'grab';
