import * as THREE from 'three';

const state = { renderer: null, scene: null, camera: null, group: null, raf: null, ro: null, io: null, visible: true };

function cssVar(name, fallback) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}

export function disposeProcessScene() {
  if (state.raf) cancelAnimationFrame(state.raf);
  if (state.ro) state.ro.disconnect();
  if (state.io) state.io.disconnect();
  if (state.scene) {
    state.scene.traverse((obj) => {
      obj.geometry?.dispose?.();
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      mats.forEach((m) => m?.dispose?.());
    });
  }
  if (state.renderer) {
    state.renderer.dispose();
    state.renderer.forceContextLoss?.();
  }
  state.renderer = state.scene = state.camera = state.group = null;
  state.raf = state.ro = state.io = null;
}

// A small wireframe core orbited by three tilted rings, precessing like a
// gyroscope  a different kind of "system in motion" than a single tangled knot.
export function initProcessScene(canvas) {
  disposeProcessScene();
  if (!canvas || !window.WebGLRenderingContext) return;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
  } catch {
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  state.renderer = renderer;

  const scene = new THREE.Scene();
  state.scene = scene;
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0, 0, 8.5);
  state.camera = camera;

  const group = new THREE.Group();
  group.rotation.set(0.3, -0.2, 0);
  scene.add(group);
  state.group = group;

  const accent = cssVar('--accent-strong', '#0455D6');
  const accentSoft = cssVar('--accent', '#004BBA');

  const nucleusGeo = new THREE.IcosahedronGeometry(0.34, 1);
  const nucleusMat = new THREE.MeshBasicMaterial({ color: accent, wireframe: true, transparent: true, opacity: 0.85 });
  const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
  group.add(nucleus);

  const ringGeo = new THREE.TorusGeometry(1.45, 0.02, 8, 100);
  const ringDefs = [
    { color: accent, opacity: 0.6, fan: 0, speed: 0.18 },
    { color: accentSoft, opacity: 0.42, fan: Math.PI / 3, speed: -0.13 },
    { color: accentSoft, opacity: 0.34, fan: (Math.PI * 2) / 3, speed: 0.1 }
  ];
  // Each ring sits on its own orbital plane (fanned around a shared axis, like a
  // gyroscope's gimbals) and slowly precesses around a different axis than its
  // own symmetry axis  the only way a plain ring visibly appears to turn.
  const rings = ringDefs.map((def) => {
    const fan = new THREE.Group();
    fan.rotation.x = def.fan;
    const wobble = new THREE.Group();
    fan.add(wobble);
    const mat = new THREE.MeshBasicMaterial({ color: def.color, wireframe: true, transparent: true, opacity: def.opacity });
    const mesh = new THREE.Mesh(ringGeo, mat);
    wobble.add(mesh);
    group.add(fan);
    return { wobble, def };
  });

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const w = Math.max(1, rect.width);
    const h = Math.max(1, rect.height);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  state.ro = new ResizeObserver(resize);
  state.ro.observe(canvas.parentElement);

  renderer.render(scene, camera);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  state.io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      state.visible = e.isIntersecting;
      if (state.visible && state.raf === null) loop();
    });
  });
  state.io.observe(canvas);

  function loop(t) {
    if (!state.visible || !state.renderer) {
      state.raf = null;
      return;
    }
    const time = (t || 0) * 0.00045;
    group.rotation.y = -0.2 + Math.sin(time * 0.6) * 0.28;
    nucleus.rotation.y = time * 2.2;
    nucleus.rotation.x = time * 1.4;
    rings.forEach(({ wobble, def }) => {
      wobble.rotation.y = time * def.speed * 4;
    });
    state.renderer.render(scene, camera);
    state.raf = requestAnimationFrame(loop);
  }
  loop();
}
