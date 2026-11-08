import * as THREE from '../vendor/three.module.js';

const TAU = Math.PI * 2;

function makeCanvasTexture(width, height, draw, { repeat = null, srgb = true } = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  draw(ctx, width, height);
  const texture = new THREE.CanvasTexture(canvas);
  if (srgb) texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  if (repeat) {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(repeat[0], repeat[1]);
  }
  return texture;
}

function makeEnvironmentMap(renderer) {
  const texture = makeCanvasTexture(1024, 512, (ctx, width, height) => {
    const sky = ctx.createLinearGradient(0, 0, 0, height);
    sky.addColorStop(0, '#010306');
    sky.addColorStop(0.42, '#050e16');
    sky.addColorStop(0.58, '#0c202d');
    sky.addColorStop(0.72, '#071018');
    sky.addColorStop(1, '#010204');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, width, height);

    const cyan = ctx.createRadialGradient(width * 0.2, height * 0.56, 8, width * 0.2, height * 0.56, width * 0.33);
    cyan.addColorStop(0, 'rgba(50, 215, 255, 0.82)');
    cyan.addColorStop(0.22, 'rgba(23, 137, 186, 0.42)');
    cyan.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = cyan;
    ctx.fillRect(0, 0, width, height);

    const amber = ctx.createRadialGradient(width * 0.82, height * 0.52, 6, width * 0.82, height * 0.52, width * 0.24);
    amber.addColorStop(0, 'rgba(255, 117, 55, 0.7)');
    amber.addColorStop(0.26, 'rgba(170, 64, 25, 0.3)');
    amber.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = amber;
    ctx.fillRect(0, 0, width, height);

    const top = ctx.createLinearGradient(0, height * 0.22, 0, height * 0.4);
    top.addColorStop(0, 'rgba(210, 247, 255, 0)');
    top.addColorStop(0.52, 'rgba(202, 246, 255, 0.2)');
    top.addColorStop(1, 'rgba(210, 247, 255, 0)');
    ctx.fillStyle = top;
    ctx.fillRect(width * 0.06, height * 0.16, width * 0.6, height * 0.3);

    for (let i = 0; i < 6; i += 1) {
      const x = width * (0.1 + i * 0.17);
      const beam = ctx.createLinearGradient(x, 0, x + 12, 0);
      beam.addColorStop(0, 'rgba(255,255,255,0)');
      beam.addColorStop(0.5, i % 2 ? 'rgba(103, 223, 255, 0.12)' : 'rgba(255, 255, 255, 0.08)');
      beam.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = beam;
      ctx.fillRect(x, height * 0.18, 12, height * 0.5);
    }

    ctx.strokeStyle = 'rgba(117, 232, 255, 0.18)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let i = 0; i < 9; i += 1) {
      const y = height * (0.34 + i * 0.045);
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();
  });
  texture.mapping = THREE.EquirectangularReflectionMapping;

  const pmrem = new THREE.PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();
  const target = pmrem.fromEquirectangular(texture);
  texture.dispose();
  pmrem.dispose();
  return target.texture;
}

function createRadialTexture(inner, outer, mid = null) {
  return makeCanvasTexture(512, 512, (ctx, width, height) => {
    const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width / 2);
    gradient.addColorStop(0, inner);
    if (mid) gradient.addColorStop(0.38, mid);
    gradient.addColorStop(1, outer);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  });
}

function createContactShadowTexture() {
  return makeCanvasTexture(512, 256, (ctx, width, height) => {
    ctx.clearRect(0, 0, width, height);
    const gradient = ctx.createRadialGradient(width / 2, height / 2, 4, width / 2, height / 2, width * 0.48);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0.82)');
    gradient.addColorStop(0.4, 'rgba(0, 0, 0, 0.46)');
    gradient.addColorStop(0.72, 'rgba(0, 0, 0, 0.14)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.save();
    ctx.translate(width / 2, height / 2);
    ctx.scale(1, height / width);
    ctx.translate(-width / 2, -width / 2);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, width);
    ctx.restore();
  });
}

function buildStars(count, radiusMin, radiusMax, palette, size, opacity) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const color = new THREE.Color();
  for (let i = 0; i < count; i += 1) {
    const radius = radiusMin + Math.random() * (radiusMax - radiusMin);
    const theta = Math.random() * TAU;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.cos(phi) * 0.72 + 2.2;
    positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    color.set(palette[Math.floor(Math.random() * palette.length)]);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const material = new THREE.PointsMaterial({
    size,
    transparent: true,
    opacity,
    vertexColors: true,
    depthWrite: false,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending
  });
  return new THREE.Points(geometry, material);
}

export function createEnvironment(scene, renderer) {
  const group = new THREE.Group();
  group.name = 'environment';
  scene.add(group);

  const environmentMap = makeEnvironmentMap(renderer);
  scene.environment = environmentMap;
  scene.environmentIntensity = 0.72;

  const hemi = new THREE.HemisphereLight(0x8edfff, 0x04070b, 1.45);
  scene.add(hemi);

  const key = new THREE.DirectionalLight(0xf4fbff, 2.7);
  key.position.set(6.5, 8.5, 7.5);
  scene.add(key);

  const cyanRim = new THREE.DirectionalLight(0x4bdcff, 3.1);
  cyanRim.position.set(-7.5, 3.2, 4.8);
  scene.add(cyanRim);

  const amberRim = new THREE.DirectionalLight(0xff7537, 2.2);
  amberRim.position.set(6.2, 1.1, -8.2);
  scene.add(amberRim);

  const backRim = new THREE.DirectionalLight(0x759cff, 1.6);
  backRim.position.set(-3.5, 5.5, -7.6);
  scene.add(backRim);

  const floorCyan = new THREE.PointLight(0x3ed8ff, 8, 13, 2);
  floorCyan.position.set(-4.2, -1.8, 2.8);
  scene.add(floorCyan);

  const floorAmber = new THREE.PointLight(0xff7a3c, 5, 10, 2);
  floorAmber.position.set(4.5, -2.0, -2.6);
  scene.add(floorAmber);

  // Ground grid — hand-written shader, no external textures.
  const gridMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color('#4bdcff') },
      uFade: { value: 1 }
    },
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      varying vec3 vWorld;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorld = worldPosition.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uColor;
      varying vec3 vWorld;

      float gridLine(vec2 coord, float scale, float width) {
        vec2 grid = abs(fract(coord * scale - 0.5) - 0.5) / max(fwidth(coord * scale), vec2(0.0001));
        float line = min(grid.x, grid.y);
        return 1.0 - smoothstep(0.0, width, line);
      }

      void main() {
        float radius = length(vWorld.xz);
        float fade = 1.0 - smoothstep(2.0, 14.5, radius);
        float coarse = gridLine(vWorld.xz, 1.0, 1.3);
        float fine = gridLine(vWorld.xz, 0.25, 1.0);
        float pulse = 0.62 + 0.38 * sin(uTime * 0.72 - radius * 1.15);

        float alpha = (coarse * 0.28 + fine * 0.075) * fade * pulse;
        alpha += (1.0 - smoothstep(0.0, 0.024, abs(radius - 4.72))) * fade * 0.17;
        alpha += (1.0 - smoothstep(0.0, 0.018, abs(radius - 6.38))) * fade * 0.1;
        alpha += (1.0 - smoothstep(0.0, 0.55, abs(radius - 3.35))) * fade * 0.035;

        vec3 color = mix(uColor, vec3(0.9, 0.98, 1.0), coarse * 0.2);
        gl_FragColor = vec4(color, clamp(alpha, 0.0, 0.62));
      }
    `
  });

  const grid = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), gridMaterial);
  grid.rotation.x = -Math.PI / 2;
  grid.position.y = -2.94;
  group.add(grid);

  const floorGlowTexture = createRadialTexture(
    'rgba(81, 224, 255, 0.52)',
    'rgba(0, 0, 0, 0)',
    'rgba(30, 115, 158, 0.22)'
  );
  const floorGlow = new THREE.Mesh(
    new THREE.PlaneGeometry(17, 17),
    new THREE.MeshBasicMaterial({
      map: floorGlowTexture,
      transparent: true,
      opacity: 0.52,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
  );
  floorGlow.rotation.x = -Math.PI / 2;
  floorGlow.position.y = -2.935;
  group.add(floorGlow);

  const contactShadow = new THREE.Mesh(
    new THREE.PlaneGeometry(7.8, 5.2),
    new THREE.MeshBasicMaterial({
      map: createContactShadowTexture(),
      transparent: true,
      opacity: 0.8,
      depthWrite: false
    })
  );
  contactShadow.rotation.x = -Math.PI / 2;
  contactShadow.position.set(0.2, -2.912, -0.2);
  group.add(contactShadow);

  // Flat HUD rings + ticks.
  const hud = new THREE.Group();
  hud.position.y = -2.885;
  hud.rotation.x = -Math.PI / 2;
  group.add(hud);

  const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0x4bdcff,
    transparent: true,
    opacity: 0.23,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide
  });
  const outerRing = new THREE.Mesh(new THREE.RingGeometry(4.9, 4.925, 160), ringMaterial.clone());
  outerRing.material.opacity = 0.2;
  hud.add(outerRing);

  const innerRing = new THREE.Mesh(new THREE.RingGeometry(3.38, 3.395, 160), ringMaterial.clone());
  innerRing.material.opacity = 0.11;
  hud.add(innerRing);

  const scanArc = new THREE.Mesh(
    new THREE.RingGeometry(4.2, 4.235, 128, 1, 0, 0.42),
    new THREE.MeshBasicMaterial({
      color: 0xaef3ff,
      transparent: true,
      opacity: 0.52,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    })
  );
  hud.add(scanArc);

  const tickPositions = [];
  const tickCount = 96;
  for (let i = 0; i < tickCount; i += 1) {
    const angle = (i / tickCount) * TAU;
    const inner = i % 8 === 0 ? 5.48 : 5.56;
    const outer = 5.72;
    tickPositions.push(Math.cos(angle) * inner, Math.sin(angle) * inner, 0);
    tickPositions.push(Math.cos(angle) * outer, Math.sin(angle) * outer, 0);
  }
  const tickGeometry = new THREE.BufferGeometry();
  tickGeometry.setAttribute('position', new THREE.Float32BufferAttribute(tickPositions, 3));
  const ticks = new THREE.LineSegments(
    tickGeometry,
    new THREE.LineBasicMaterial({
      color: 0x65e4ff,
      transparent: true,
      opacity: 0.3,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
  );
  hud.add(ticks);

  const dashedPoints = [];
  for (let i = 0; i < 180; i += 1) {
    const angle = (i / 180) * TAU;
    dashedPoints.push(new THREE.Vector3(Math.cos(angle) * 6.42, Math.sin(angle) * 6.42, 0));
  }
  const dashedGeometry = new THREE.BufferGeometry().setFromPoints(dashedPoints);
  const dashed = new THREE.LineLoop(
    dashedGeometry,
    new THREE.LineDashedMaterial({
      color: 0x3ccde8,
      transparent: true,
      opacity: 0.35,
      dashSize: 0.09,
      gapSize: 0.15,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
  );
  dashed.computeLineDistances();
  hud.add(dashed);

  // Focus ring under the selected part.
  const focusRing = new THREE.Mesh(
    new THREE.RingGeometry(0.72, 0.79, 72),
    new THREE.MeshBasicMaterial({
      color: 0x5be7ff,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    })
  );
  focusRing.rotation.x = -Math.PI / 2;
  focusRing.position.set(0, -2.88, 0);
  focusRing.visible = false;
  group.add(focusRing);

  const focusHaloTexture = createRadialTexture(
    'rgba(103, 234, 255, 0.5)',
    'rgba(0, 0, 0, 0)',
    'rgba(64, 164, 202, 0.14)'
  );
  const focusHalo = new THREE.Mesh(
    new THREE.PlaneGeometry(4.2, 4.2),
    new THREE.MeshBasicMaterial({
      map: focusHaloTexture,
      color: 0x5be7ff,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
  );
  focusHalo.rotation.x = -Math.PI / 2;
  focusHalo.position.set(0, -2.89, 0);
  focusHalo.visible = false;
  group.add(focusHalo);

  const stars = buildStars(420, 10, 28, ['#9ceeff', '#d5f8ff', '#80a9ff'], 0.055, 0.52);
  group.add(stars);
  const embers = buildStars(90, 9, 21, ['#ff9c62', '#ff6b4e', '#ffd089'], 0.085, 0.38);
  group.add(embers);

  const nearDust = buildStars(120, 3.5, 10, ['#bff4ff', '#5be7ff'], 0.038, 0.34);
  group.add(nearDust);

  let focusStrength = 0;
  let focusColor = new THREE.Color('#5be7ff');

  function setFocus(worldPosition, color) {
    if (!worldPosition) {
      focusRing.visible = false;
      focusHalo.visible = false;
      focusStrength = 0;
      return;
    }
    focusColor.set(color || '#5be7ff');
    focusRing.material.color.copy(focusColor);
    focusHalo.material.color.copy(focusColor);
    focusRing.position.x = worldPosition.x;
    focusRing.position.z = worldPosition.z;
    focusHalo.position.x = worldPosition.x;
    focusHalo.position.z = worldPosition.z;
    focusRing.visible = true;
    focusHalo.visible = true;
    focusStrength = 1;
  }

  function clearFocus() {
    focusStrength = 0;
    focusRing.visible = false;
    focusHalo.visible = false;
  }

  function update(elapsed, delta) {
    gridMaterial.uniforms.uTime.value = elapsed;

    outerRing.rotation.z = elapsed * 0.035;
    tickGroupRotate(elapsed);
    scanArc.rotation.z = -elapsed * 0.32;
    dashed.rotation.z = elapsed * 0.018;

    stars.rotation.y = elapsed * 0.006;
    embers.rotation.y = -elapsed * 0.009;
    nearDust.rotation.y = elapsed * 0.014;
    nearDust.position.y = Math.sin(elapsed * 0.35) * 0.06;

    if (focusStrength > 0) {
      const pulse = 0.5 + 0.5 * Math.sin(elapsed * 3.6);
      const strength = focusStrength;
      const scale = 1 + pulse * 0.12;
      focusRing.scale.setScalar(scale);
      focusRing.material.opacity = (0.2 + pulse * 0.26) * strength;
      focusHalo.material.opacity = (0.08 + pulse * 0.08) * strength;
    } else {
      focusRing.visible = false;
      focusHalo.visible = false;
    }
  }

  function tickGroupRotate(elapsed) {
    ticks.rotation.z = elapsed * 0.025;
  }

  function dispose() {
    environmentMap.dispose();
    group.traverse((object) => {
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material) => {
          if (material.map) material.map.dispose();
          material.dispose();
        });
      }
    });
  }

  return {
    group,
    setFocus,
    clearFocus,
    update,
    dispose
  };
}
