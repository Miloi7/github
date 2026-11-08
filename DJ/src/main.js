import * as THREE from '../vendor/three.module.js';
import { OrbitControls } from '../vendor/OrbitControls.js';
import { createEnvironment } from './environment.js';
import { createCameraModel } from './model.js';
import { CAMERA, PARTS, PART_MAP } from './parts-data.js';
import { UI } from './ui.js';

const TAU = Math.PI * 2;
const FOV = 34;
const CAMERA_DIRECTION = new THREE.Vector3(0.522, 0.324, 0.789).normalize();
const BASE_TARGET = new THREE.Vector3(0, 0.18, 0);
let MODEL_WIDTH = 7.4;
let MODEL_HEIGHT = 5.2;

const canvas = document.getElementById('scene-canvas');
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x05070a, 0.008);

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
  powerPreference: 'high-performance'
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;
renderer.setClearColor(0x05070a, 0);

const camera = new THREE.PerspectiveCamera(
  FOV,
  window.innerWidth / window.innerHeight,
  0.1,
  120
);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.065;
controls.enablePan = false;
controls.rotateSpeed = 0.62;
controls.zoomSpeed = 0.85;
controls.minDistance = 7.5;
controls.maxDistance = 40;
controls.minPolarAngle = 0.28;
controls.maxPolarAngle = Math.PI * 0.49;
controls.autoRotateSpeed = 0.65;
controls.target.copy(BASE_TARGET);

const environment = createEnvironment(scene, renderer);

const selectionBox = createSelectionFrame();
const selectionBounds = new THREE.Box3();
const selectionChildBounds = new THREE.Box3();
scene.add(selectionBox);

let modelData;
try {
  modelData = createCameraModel();
} catch (error) {
  showFatalError(error);
  throw error;
}

const partStates = new Map();
const pickables = [];
const glowTexture = createGlowTexture();
const selectionLight = new THREE.PointLight(0x5be7ff, 0, 6.5, 2);
scene.add(selectionLight);

let selectedId = null;
let hoveredId = null;
let allExploded = false;
let labelsVisible = true;
let autoRotate = false;
let introActive = true;
let cameraTween = null;
let homeDistance = 13.5;
let focusDistance = 15;
let explodeDistance = 19;
let lastHoverCheck = 0;
let lastHoverPoint = null;
let labelsFrame = 0;
let telemetryTimer = 0;
let fpsTimer = 0;
let fpsFrames = 0;
let smoothFps = 60;
let hasShownIntroToast = false;
let selectionEffectsEnabled = true;

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const tempWorld = new THREE.Vector3();
const tempProjected = new THREE.Vector3();
const tempBox = new THREE.Box3();
const tempSize = new THREE.Vector3();
const tempCenter = new THREE.Vector3();
const tempLightOffset = new THREE.Vector3(0.4, 0.7, 0.9);

const ui = new UI({
  camera: CAMERA,
  parts: PARTS,
  onSelectPart: (id) => selectPart(id),
  onClosePart: () => clearSelection(),
  onToggleExplodeAll: () => toggleExplodeAll(),
  onResetView: () => resetView(),
  onToggleAutoRotate: () => toggleAutoRotate(),
  onToggleLabels: () => toggleLabels()
});
ui.mount();

setupModel();
setupCamera();
setupUI();
setupEvents();
startLoaderSequence();
exposeDebugApi();

function setupModel() {
  const root = modelData.root;
  root.name = 'DJI Osmo Action 4';
  scene.add(root);

  if (!root.userData.modelRoot) root.userData.modelRoot = true;

  tempBox.setFromObject(root);
  tempBox.getSize(tempSize);
  if (tempSize.x > 0 && tempSize.y > 0) {
    MODEL_WIDTH = Math.max(MODEL_WIDTH, tempSize.x);
    MODEL_HEIGHT = Math.max(MODEL_HEIGHT, tempSize.y);
  }

  const missing = PARTS.filter((part) => !modelData.parts.get(part.id));
  if (missing.length) console.warn('Missing model parts:', missing.map((part) => part.id));

  modelData.parts.forEach((group, id) => {
    group.userData.partId = id;
  });

  root.updateMatrixWorld(true);

  PARTS.forEach((partData, index) => {
    const group = modelData.parts.get(partData.id);
    if (!group) return;

    const basePosition = group.position.clone();
    const explodeOffset = new THREE.Vector3(...(partData.explode || [0, 0, 0]));
    const labelAnchor = (group.userData.labelAnchor && group.userData.labelAnchor.isVector3)
      ? group.userData.labelAnchor.clone()
      : deriveLabelAnchor(group);

    const materials = [];
    const seen = new Set();
    group.traverse((child) => {
      if (!child.isMesh) return;
      child.userData.partId = partData.id;
      if (!pickables.includes(child)) pickables.push(child);

      const childMaterials = Array.isArray(child.material) ? child.material : [child.material];
      childMaterials.forEach((material) => {
        if (!material || seen.has(material)) return;
        seen.add(material);
        const hasEmissive = Boolean(material.emissive && material.emissive.isColor);
        materials.push({
          material,
          hasEmissive,
          baseEmissive: hasEmissive ? material.emissive.clone() : null,
          baseEmissiveIntensity: hasEmissive ? (material.emissiveIntensity ?? 1) : 0,
          protectedByMap: Boolean(material.emissiveMap)
        });
      });
    });

    const glowSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture,
        color: new THREE.Color(partData.accent),
        transparent: true,
        opacity: 0,
        depthTest: false,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        toneMapped: false
      })
    );
    const glowBounds = new THREE.Box3().setFromObject(group);
    glowBounds.getSize(tempSize);
    const maxDimension = Math.max(tempSize.x, tempSize.y, tempSize.z, 0.8);
    glowSprite.scale.setScalar(THREE.MathUtils.clamp(maxDimension * 1.3, 1.6, 8.5));
    glowSprite.position.copy(labelAnchor);
    glowSprite.renderOrder = 4;
    glowSprite.visible = false;
    group.add(glowSprite);

    partStates.set(partData.id, {
      data: partData,
      index,
      group,
      basePosition,
      explodeOffset,
      labelAnchor,
      materials,
      glowSprite,
      progress: 0,
      target: 0,
      glow: 0
    });
  });

  // Make sure pickables are all actual meshes, even if the model builder
  // forgot to expose a child.
  pickables.length = 0;
  partStates.forEach((state) => {
    state.group.traverse((child) => {
      if (child.isMesh) {
        child.userData.partId = state.data.id;
        pickables.push(child);
      }
    });
  });

  root.updateMatrixWorld(true);
}

function deriveLabelAnchor(group) {
  tempBox.setFromObject(group);
  tempBox.getCenter(tempCenter);
  group.worldToLocal(tempCenter);
  if (!Number.isFinite(tempCenter.x)) tempCenter.set(0, 0, 0);
  return tempCenter.clone();
}

function setupCamera() {
  controls.maxDistance = 44;
  recomputeDistances();
  camera.position.copy(CAMERA_DIRECTION).multiplyScalar(homeDistance * 1.55);
  controls.target.copy(BASE_TARGET);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    introActive = false;
    camera.position.copy(CAMERA_DIRECTION).multiplyScalar(homeDistance);
  } else {
    startCameraTween(
      CAMERA_DIRECTION.clone().multiplyScalar(homeDistance),
      BASE_TARGET,
      2.7
    );
  }
  controls.update();
}

function setupUI() {
  const total = PARTS.length;
  ui.setSelected(null);
  ui.setAllExploded(false);
  ui.setAutoRotate(false);
  ui.setLabelsVisible(true);
  ui.updateTelemetry({
    mode: 'OVERVIEW',
    exploded: 0,
    total,
    fps: 60,
    target: 'STANDBY',
    coord: 'X 00.00 / Y 00.00 / Z 00.00'
  });
  ui.setLoaderProgress(0.08, 'BOOTING VISUAL CORE');
}

function startLoaderSequence() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const steps = reduced
    ? [
        [120, 0.65, 'ASSEMBLING MODULES'],
        [420, 1, 'SYSTEM READY']
      ]
    : [
        [220, 0.28, 'MOUNTING 10 MODULES'],
        [560, 0.56, 'CALIBRATING DUAL DISPLAYS'],
        [980, 0.81, 'BUILDING TEARDOWN MAP'],
        [1420, 1, 'SYSTEM READY']
      ];

  steps.forEach(([delay, progress, text]) => {
    window.setTimeout(() => ui.setLoaderProgress(progress, text), delay);
  });

  window.setTimeout(() => {
    ui.hideLoader();
    window.setTimeout(() => {
      if (!hasShownIntroToast) {
        hasShownIntroToast = true;
        ui.showToast('拖拽旋转 · 滚轮缩放 · 点击部件开始拆解', 3200);
      }
    }, 650);
  }, reduced ? 780 : 1780);
}

function setupEvents() {
  controls.addEventListener('start', () => {
    cameraTween = null;
    introActive = false;
    canvas.classList.add('is-dragging');
  });

  controls.addEventListener('end', () => {
    canvas.classList.remove('is-dragging');
    updateHoverFromPoint(lastHoverPoint);
  });

  canvas.addEventListener('pointerdown', onPointerDown);
  canvas.addEventListener('pointerup', onPointerUp);
  canvas.addEventListener('pointercancel', () => {
    lastHoverPoint = null;
    setHoveredPart(null);
  });
  canvas.addEventListener('pointermove', onPointerMove);
  canvas.addEventListener('pointerleave', () => {
    lastHoverPoint = null;
    setHoveredPart(null);
    canvas.style.cursor = 'grab';
  });

  window.addEventListener('resize', onResize);

  window.addEventListener('keydown', (event) => {
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    const key = event.key.toLowerCase();
    if (key === 'e') {
      event.preventDefault();
      toggleExplodeAll();
    } else if (key === 'r') {
      event.preventDefault();
      resetView();
    } else if (key === 'a') {
      event.preventDefault();
      toggleAutoRotate();
    } else if (key === 'l') {
      event.preventDefault();
      toggleLabels();
    } else if (event.key === 'Escape') {
      if (document.getElementById('helpModal')?.classList.contains('is-open')) return;
      if (selectedId) clearSelection();
      else if (allExploded) setAllExplodedMode(false);
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) clock.getDelta();
  });

  updateLabels();
}

function onPointerDown(event) {
  if (event.button !== undefined && event.button !== 0) return;
  lastHoverPoint = { x: event.clientX, y: event.clientY };
  canvas.classList.add('is-pressing');
  canvas.setPointerCapture?.(event.pointerId);
  const now = performance.now();
  canvas.dataset.pressX = String(event.clientX);
  canvas.dataset.pressY = String(event.clientY);
  canvas.dataset.pressTime = String(now);
}

function onPointerUp(event) {
  canvas.classList.remove('is-pressing');
  const pressX = Number(canvas.dataset.pressX || event.clientX);
  const pressY = Number(canvas.dataset.pressY || event.clientY);
  const pressTime = Number(canvas.dataset.pressTime || performance.now());
  const distance = Math.hypot(event.clientX - pressX, event.clientY - pressY);
  const duration = performance.now() - pressTime;
  if (distance < 7 && duration < 520) {
    handleCanvasClick(event.clientX, event.clientY);
  }
  delete canvas.dataset.pressX;
  delete canvas.dataset.pressY;
  delete canvas.dataset.pressTime;
}

function onPointerMove(event) {
  lastHoverPoint = { x: event.clientX, y: event.clientY };
  const now = performance.now();
  if (now - lastHoverCheck < 28) return;
  lastHoverCheck = now;
  updateHoverFromPoint(lastHoverPoint);
}

function updateHoverFromPoint(point) {
  if (!point) {
    setHoveredPart(null);
    return;
  }
  const id = pickPartAt(point.x, point.y);
  setHoveredPart(id, point.x, point.y);
}

function handleCanvasClick(clientX, clientY) {
  const id = pickPartAt(clientX, clientY);
  if (id) {
    selectPart(id);
  } else if (allExploded) {
    setAllExplodedMode(false);
  } else if (selectedId) {
    clearSelection();
  }
}

function pickPartAt(clientX, clientY) {
  const rect = canvas.getBoundingClientRect();
  pointer.x = ((clientX - rect.left) / Math.max(rect.width, 1)) * 2 - 1;
  pointer.y = -((clientY - rect.top) / Math.max(rect.height, 1)) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(pickables, false);
  for (const hit of hits) {
    if (hit.object.visible && hit.object.userData.partId) return hit.object.userData.partId;
  }
  return null;
}

function setHoveredPart(id, x = 0, y = 0) {
  if (hoveredId === id) {
    ui.setHovered(id, x, y);
    return;
  }
  hoveredId = id;
  ui.setHovered(id, x, y);
  canvas.style.cursor = id ? 'pointer' : 'grab';
}

function selectPart(id) {
  if (!id || !PART_MAP.has(id)) return;
  selectedId = id;
  allExploded = false;
  ui.setSelected(id);
  ui.setAllExploded(false);
  updatePartTargets();
  tweenCameraDistance(focusDistance, 0.9);
  const part = PART_MAP.get(id);
  ui.showToast(`${part.no} / ${part.name} · 已拆解`, 1600);
  updateTelemetry(true);
}

function clearSelection() {
  if (!selectedId && !allExploded) return;
  selectedId = null;
  allExploded = false;
  ui.setSelected(null);
  ui.setAllExploded(false);
  updatePartTargets();
  tweenCameraDistance(homeDistance, 0.9);
  environment.clearFocus();
  updateTelemetry(true);
}

function toggleExplodeAll() {
  setAllExplodedMode(!allExploded);
}

function setAllExplodedMode(enabled) {
  allExploded = enabled;
  if (enabled) {
    selectedId = null;
    ui.setSelected(null);
    environment.clearFocus();
    updatePartTargets();
    ui.setAllExploded(true);
    tweenCameraDistance(explodeDistance, 1.15);
    ui.showToast('10 个部件已全部展开 · 拖拽查看内部结构', 2800);
  } else {
    selectedId = null;
    ui.setSelected(null);
    environment.clearFocus();
    updatePartTargets();
    ui.setAllExploded(false);
    tweenCameraDistance(homeDistance, 1.05);
    ui.showToast('所有部件已归位', 1600);
  }
  updateTelemetry(true);
}

function updatePartTargets() {
  partStates.forEach((state) => {
    state.target = allExploded ? 1 : (selectedId === state.data.id ? 1 : 0);
  });
}

function toggleAutoRotate() {
  autoRotate = !autoRotate;
  controls.autoRotate = autoRotate;
  ui.setAutoRotate(autoRotate);
  ui.showToast(autoRotate ? '自动旋转已开启' : '自动旋转已关闭', 1500);
}

function toggleLabels() {
  labelsVisible = !labelsVisible;
  ui.setLabelsVisible(labelsVisible);
  if (!labelsVisible) ui.updateLabels(PARTS.map((part) => ({ id: part.id, visible: false, x: 0, y: 0, exploded: false, selected: false })));
  ui.showToast(labelsVisible ? '部件标注已开启' : '部件标注已关闭', 1500);
}

function resetView() {
  introActive = false;
  reorientHomeCamera(1.0);
  ui.showToast('视角已重置', 1300);
}

function reorientHomeCamera(duration = 0.9) {
  const distance = allExploded ? explodeDistance : (selectedId ? focusDistance : homeDistance);
  const targetPosition = CAMERA_DIRECTION.clone().multiplyScalar(distance).add(BASE_TARGET);
  startCameraTween(targetPosition, BASE_TARGET, duration);
}

function startCameraTween(toPosition, toTarget, duration) {
  cameraTween = {
    from: camera.position.clone(),
    to: toPosition.clone(),
    fromTarget: controls.target.clone(),
    toTarget: toTarget.clone(),
    elapsed: 0,
    duration: Math.max(duration, 0.01)
  };
}

function tweenCameraDistance(distance, duration) {
  const target = controls.target.clone();
  const direction = camera.position.clone().sub(target);
  if (direction.lengthSq() < 0.0001) direction.copy(CAMERA_DIRECTION);
  direction.normalize();
  const to = target.clone().add(direction.multiplyScalar(distance));
  startCameraTween(to, target, duration);
}

function recomputeDistances() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const aspect = Math.max(0.35, width / Math.max(height, 1));
  const tan = Math.tan((FOV * Math.PI) / 360);
  const widthFraction = aspect >= 1.25 ? 0.47 : (aspect >= 0.9 ? 0.6 : 0.84);
  const heightFraction = aspect >= 1.25 ? 0.58 : 0.66;
  const distanceForWidth = (MODEL_WIDTH / (2 * tan * aspect)) / widthFraction;
  const distanceForHeight = (MODEL_HEIGHT / (2 * tan)) / heightFraction;
  homeDistance = Math.max(13.2, distanceForWidth, distanceForHeight);
  focusDistance = Math.min(38, homeDistance * 1.11);
  explodeDistance = Math.min(44, homeDistance * 1.55);
  controls.maxDistance = Math.max(36, explodeDistance * 1.7);
}

function onResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(width, height, false);
  camera.aspect = width / Math.max(height, 1);
  camera.updateProjectionMatrix();
  recomputeDistances();
}

const clock = new THREE.Clock();
let elapsed = 0;
let frameId = null;

function animate() {
  frameId = requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 0.06);
  elapsed += delta;

  if (cameraTween) {
    cameraTween.elapsed += delta;
    const t = Math.min(1, cameraTween.elapsed / cameraTween.duration);
    const eased = easeInOutCubic(t);
    camera.position.lerpVectors(cameraTween.from, cameraTween.to, eased);
    controls.target.lerpVectors(cameraTween.fromTarget, cameraTween.toTarget, eased);
    if (t >= 1) {
      cameraTween = null;
      if (introActive) introActive = false;
    }
  }

  controls.update();

  updateParts(delta, elapsed);
  updateSelectionEffects(delta, elapsed);
  environment.update(elapsed, delta);
  updateLabels();

  renderer.render(scene, camera);
  updateStats(delta);
}

function updateParts(delta, time) {
  const lambda = 1 - Math.exp(-delta * 5.2);
  partStates.forEach((state) => {
    const diff = state.target - state.progress;
    if (Math.abs(diff) > 0.0005) {
      state.progress += diff * lambda;
      if (Math.abs(state.target - state.progress) < 0.001) state.progress = state.target;
    } else {
      state.progress = state.target;
    }

    const eased = easeOutCubic(state.progress);
    state.group.position.copy(state.basePosition).addScaledVector(state.explodeOffset, eased);
    if (state.progress > 0.01) {
      state.group.position.y += Math.sin(time * 1.2 + state.index * 0.9) * 0.017 * eased;
    }
  });
}

function updateSelectionEffects(delta, time) {
  const selected = selectedId ? partStates.get(selectedId) : null;
  const targetWorld = new THREE.Vector3();

  partStates.forEach((state) => {
    const targetGlow = !selectionEffectsEnabled
      ? 0
      : (state.data.id === selectedId
        ? 1
        : (state.data.id === hoveredId ? 0.42 : (allExploded ? 0.06 : 0)));
    state.glow += (targetGlow - state.glow) * (1 - Math.exp(-delta * 9));

    const accent = new THREE.Color(state.data.accent);
    const pulse = state.data.id === selectedId ? 0.72 + 0.28 * Math.sin(time * 3.4) : 0.7;

    state.materials.forEach((entry) => {
      if (!entry.hasEmissive) return;
      if (entry.protectedByMap) {
        entry.material.emissiveIntensity = entry.baseEmissiveIntensity + state.glow * 0.01;
        return;
      }
      entry.material.emissive.copy(entry.baseEmissive).lerp(accent, state.glow * 0.06);
      entry.material.emissiveIntensity = entry.baseEmissiveIntensity + state.glow * 0.015 * pulse;
    });

    const spriteOpacity = state.glow * (state.data.id === selectedId ? 0.3 : 0.16) * pulse;
    state.glowSprite.visible = spriteOpacity > 0.008;
    state.glowSprite.material.opacity = spriteOpacity;
  });

  if (selected) {
    selected.group.updateWorldMatrix(true, false);
    tempWorld.copy(selected.labelAnchor).applyMatrix4(selected.group.matrixWorld);
    environment.setFocus(tempWorld, selected.data.accent);
    selectionLight.color.set(selected.data.accent);
    selectionLight.position.copy(tempWorld).add(tempLightOffset);
    selectionLight.intensity = selectionEffectsEnabled ? 0.1 + Math.sin(time * 3.4) * 0.04 : 0;
    if (selectionEffectsEnabled) {
      updateSelectionFrame(selectionBox, selected.group, selected.data.accent);
      selectionBox.material.opacity = 0.72 + 0.22 * (0.5 + 0.5 * Math.sin(time * 3.4));
    } else {
      selectionBox.visible = false;
    }
    canvas.dataset.selectedAnchor = `${tempWorld.x.toFixed(2)},${tempWorld.y.toFixed(2)},${tempWorld.z.toFixed(2)}`;
  } else {
    environment.clearFocus();
    selectionBox.visible = false;
    selectionLight.intensity *= 0.85;
  }
}

function updateLabels() {
  if (!labelsVisible) return;
  labelsFrame += 1;
  if (labelsFrame % 2 !== 0) return;

  const rect = canvas.getBoundingClientRect();
  const width = rect.width || window.innerWidth;
  const height = rect.height || window.innerHeight;
  const labels = [];
  const selectedLabel = selectedId ? partStates.get(selectedId) : null;

  partStates.forEach((state) => {
    const isSelected = state.data.id === selectedId;
    const visible = state.progress > 0.18 || isSelected;
    if (!visible) {
      labels.push({ id: state.data.id, visible: false, x: 0, y: 0, exploded: false, selected: false });
      return;
    }
    state.group.updateWorldMatrix(true, false);
    tempWorld.copy(state.labelAnchor).applyMatrix4(state.group.matrixWorld);
    tempProjected.copy(tempWorld).project(camera);
    if (tempProjected.z < -1 || tempProjected.z > 1) {
      labels.push({ id: state.data.id, visible: false, x: 0, y: 0, exploded: true, selected: isSelected });
      return;
    }
    const x = (tempProjected.x * 0.5 + 0.5) * width;
    const y = (-tempProjected.y * 0.5 + 0.5) * height;
    const inViewport = x > -120 && x < width + 120 && y > -100 && y < height + 100;
    labels.push({
      id: state.data.id,
      x,
      y,
      visible: inViewport,
      exploded: state.progress > 0.32,
      selected: isSelected,
      priority: isSelected ? 2 : 1
    });
  });

  if (selectedLabel) {
    const item = labels.find((label) => label.id === selectedLabel.data.id);
    if (item && !item.visible) item.visible = false;
  }

  ui.updateLabels(labels);
}

function updateStats(delta) {
  fpsTimer += delta;
  fpsFrames += 1;
  if (fpsTimer >= 0.5) {
    smoothFps = Math.round(fpsFrames / fpsTimer);
    fpsTimer = 0;
    fpsFrames = 0;
  }

  telemetryTimer += delta;
  if (telemetryTimer >= 0.28) {
    telemetryTimer = 0;
    updateTelemetry();
  }
}

function updateTelemetry() {
  const explodedCount = Array.from(partStates.values()).filter((state) => state.progress > 0.45).length;
  const selected = selectedId ? partStates.get(selectedId) : null;
  const mode = allExploded ? 'EXPLODED' : (selectedId ? 'FOCUS' : 'OVERVIEW');
  let target = 'STANDBY';
  let coord = 'X 00.00 / Y 00.00 / Z 00.00';
  if (selected) {
    target = `${selected.data.no} · ${selected.data.en}`;
    const final = selected.basePosition.clone().add(selected.explodeOffset).add(selected.labelAnchor);
    coord = `X ${signed(final.x)} / Y ${signed(final.y)} / Z ${signed(final.z)}`;
  }
  ui.updateTelemetry({
    mode,
    exploded: explodedCount,
    total: PARTS.length,
    fps: smoothFps,
    target,
    coord
  });
}

function signed(value) {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}`;
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function createSelectionFrame() {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(12 * 2 * 3), 3));
  const material = new THREE.LineBasicMaterial({
    color: 0x5be7ff,
    transparent: true,
    opacity: 0.8,
    depthTest: false,
    depthWrite: false,
    toneMapped: false
  });
  const frame = new THREE.LineSegments(geometry, material);
  frame.frustumCulled = false;
  frame.renderOrder = 5;
  frame.visible = false;
  return frame;
}

const SELECTION_EDGES = [
  0, 1, 1, 2, 2, 3, 3, 0,
  4, 5, 5, 6, 6, 7, 7, 4,
  0, 4, 1, 5, 2, 6, 3, 7
];

function updateSelectionFrame(frame, group, color) {
  group.updateWorldMatrix(true, true);
  selectionBounds.makeEmpty();
  group.traverse((object) => {
    if (!object.isMesh || object.isSprite || !object.geometry) return;
    if (!object.geometry.boundingBox) object.geometry.computeBoundingBox();
    if (!object.geometry.boundingBox) return;
    selectionChildBounds.copy(object.geometry.boundingBox).applyMatrix4(object.matrixWorld);
    selectionBounds.union(selectionChildBounds);
  });
  if (selectionBounds.isEmpty()) {
    frame.visible = false;
    return;
  }

  const { min, max } = selectionBounds;
  const corners = [
    [min.x, min.y, min.z],
    [max.x, min.y, min.z],
    [max.x, max.y, min.z],
    [min.x, max.y, min.z],
    [min.x, min.y, max.z],
    [max.x, min.y, max.z],
    [max.x, max.y, max.z],
    [min.x, max.y, max.z]
  ];
  const positions = frame.geometry.attributes.position;
  for (let i = 0; i < SELECTION_EDGES.length; i += 1) {
    const corner = corners[SELECTION_EDGES[i]];
    positions.setXYZ(i, corner[0], corner[1], corner[2]);
  }
  positions.needsUpdate = true;
  frame.geometry.computeBoundingSphere();
  frame.material.color.set(color);
  frame.visible = true;
}

function createGlowTexture() {
  const size = 256;
  const canvasTexture = document.createElement('canvas');
  canvasTexture.width = size;
  canvasTexture.height = size;
  const ctx = canvasTexture.getContext('2d');
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  // A hollow halo instead of a filled bloom. A bright centre would wash out
  // the very materials the highlight is supposed to reveal.
  gradient.addColorStop(0, 'rgba(255,255,255,0)');
  gradient.addColorStop(0.6, 'rgba(120,230,255,0)');
  gradient.addColorStop(0.7, 'rgba(120,230,255,0.2)');
  gradient.addColorStop(0.78, 'rgba(235,253,255,0.96)');
  gradient.addColorStop(0.84, 'rgba(90,215,255,0.42)');
  gradient.addColorStop(0.92, 'rgba(20,120,180,0.1)');
  gradient.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvasTexture);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function exposeDebugApi() {
  const probe = new THREE.Vector3();
  window.__ACTION4__ = {
    scene,
    camera,
    renderer,
    controls,
    ui,
    selectPart,
    clearSelection,
    toggleExplodeAll,
    setAllExplodedMode,
    resetView,
    setSelectionHighlight(enabled) {
      selectionEffectsEnabled = Boolean(enabled);
    },
    getState() {
      return {
        selectedId,
        hoveredId,
        allExploded,
        labelsVisible,
        autoRotate,
        cameraDistance: camera.position.distanceTo(controls.target),
        cameraPosition: camera.position.toArray(),
        homeDistance,
        focusDistance,
        explodeDistance,
        cameraTween: cameraTween ? {
          from: cameraTween.from.toArray(),
          to: cameraTween.to.toArray(),
          elapsed: cameraTween.elapsed,
          duration: cameraTween.duration
        } : null,
        drawCalls: renderer.info.render.calls,
        triangles: renderer.info.render.triangles,
        fps: smoothFps,
        zones: ui?._zones || null,
        parts: Array.from(partStates.values()).map((state) => ({
          id: state.data.id,
          progress: Number(state.progress.toFixed(3)),
          target: state.target,
          base: state.basePosition.toArray(),
          position: state.group.position.toArray(),
          accent: state.data.accent
        }))
      };
    },
    projectPart(id) {
      const state = partStates.get(id);
      if (!state) return null;
      state.group.updateWorldMatrix(true, false);
      probe.copy(state.labelAnchor).applyMatrix4(state.group.matrixWorld);
      const world = probe.clone();
      const projected = probe.clone().project(camera);
      const rect = canvas.getBoundingClientRect();
      return {
        id,
        world: world.toArray(),
        x: (projected.x * 0.5 + 0.5) * rect.width,
        y: (-projected.y * 0.5 + 0.5) * rect.height,
        ndcZ: projected.z
      };
    },
    // Used by automated visual QA to skip throttled rAF interpolation in
    // headless browsers. Normal interaction never calls this.
    settleForQA() {
      cameraTween = null;
      partStates.forEach((state) => {
        state.progress = state.target;
        state.group.position.copy(state.basePosition).addScaledVector(state.explodeOffset, easeOutCubic(state.progress));
      });
      const distance = allExploded ? explodeDistance : (selectedId ? focusDistance : homeDistance);
      camera.position.copy(CAMERA_DIRECTION).multiplyScalar(distance).add(BASE_TARGET);
      controls.target.copy(BASE_TARGET);
      controls.update();
      updateSelectionEffects(1 / 60, elapsed);
      environment.update(elapsed, 1 / 60);
      labelsFrame = 1;
      updateLabels();
      renderer.render(scene, camera);
      updateTelemetry();
      return this.getState();
    }
  };
}

function showFatalError(error) {
  console.error(error);
  const text = document.getElementById('loaderText');
  const percent = document.getElementById('loaderPercent');
  if (text) text.textContent = 'MODEL INITIALIZATION FAILED';
  if (percent) percent.textContent = 'ERR';
  const loader = document.getElementById('loader');
  if (loader) loader.classList.add('is-error');
}

animate();

window.addEventListener('beforeunload', () => {
  if (frameId) cancelAnimationFrame(frameId);
});
