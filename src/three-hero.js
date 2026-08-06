import * as THREE from 'three';

const state = { renderer: null, scene: null, camera: null, group: null, raf: null, ro: null, io: null, onScroll: null, visible: true };

function cssVar(name, fallback) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}

export function disposeHeroScene() {
  if (state.raf) cancelAnimationFrame(state.raf);
  if (state.ro) state.ro.disconnect();
  if (state.io) state.io.disconnect();
  if (state.onScroll) window.removeEventListener('scroll', state.onScroll);
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
  state.raf = state.ro = state.io = state.onScroll = null;
}

// Abstract "systems + connections" centerpiece for the hero: a wireframe core
// (the product) orbited by small nodes (agents/data) linked by thin lines.
export function initHeroScene(canvas) {
  disposeHeroScene();
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
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 7.5);
  state.camera = camera;

  const group = new THREE.Group();
  // Sit the object above hero-content center so it reads as a backdrop behind the
  // heading rather than sprawling down into the CTA row / lede paragraph.
  group.position.y = 0.6;
  scene.add(group);
  state.group = group;

  const accent = new THREE.Color(cssVar('--accent-strong', '#0455D6'));
  const accentSoft = new THREE.Color(cssVar('--accent', '#004BBA'));

  group.add(
    new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.05, 1),
      new THREE.MeshBasicMaterial({ color: accent, wireframe: true, transparent: true, opacity: 0.5 })
    )
  );

  const nodeGeo = new THREE.SphereGeometry(0.03, 8, 8);
  const nodeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const nodePositions = [];
  for (let i = 0; i < 22; i++) {
    const r = 1.85 + Math.random() * 0.4;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    const p = new THREE.Vector3(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi)
    );
    nodePositions.push(p);
    const node = new THREE.Mesh(nodeGeo, nodeMat);
    node.position.copy(p);
    group.add(node);
  }

  const lineMat = new THREE.LineBasicMaterial({ color: accentSoft, transparent: true, opacity: 0.25 });
  nodePositions.forEach((p, i) => {
    let nearest = null;
    let nearestDist = Infinity;
    nodePositions.forEach((q, j) => {
      if (i === j) return;
      const d = p.distanceTo(q);
      if (d < nearestDist) {
        nearestDist = d;
        nearest = q;
      }
    });
    if (nearest) {
      const geo = new THREE.BufferGeometry().setFromPoints([p, nearest]);
      group.add(new THREE.Line(geo, lineMat));
    }
  });

  const key = new THREE.DirectionalLight(0xffffff, 1.1);
  key.position.set(3, 4, 5);
  scene.add(key);
  const rim = new THREE.DirectionalLight(accent, 0.6);
  rim.position.set(-4, -2, -3);
  scene.add(rim);
  scene.add(new THREE.AmbientLight(0xffffff, 0.35));

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

  // scroll-linked camera dolly
  state.onScroll = () => {
    const rect = canvas.parentElement.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = THREE.MathUtils.clamp(1 - rect.bottom / (vh + rect.height), 0, 1);
    camera.position.z = 7 - progress * 1.6;
    camera.position.y = progress * 0.6;
    camera.lookAt(0, 0, 0);
  };
  window.addEventListener('scroll', state.onScroll, { passive: true });
  state.onScroll();

  renderer.render(scene, camera);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  state.io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      state.visible = e.isIntersecting;
      if (state.visible && state.raf === null) loop();
    });
  });
  state.io.observe(canvas);

  function loop() {
    if (!state.visible || !state.renderer) {
      state.raf = null;
      return;
    }
    group.rotation.y += 0.0016;
    group.rotation.x += 0.0006;
    state.renderer.render(scene, camera);
    state.raf = requestAnimationFrame(loop);
  }
  loop();
}
