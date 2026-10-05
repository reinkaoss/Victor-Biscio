import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  return reduced;
}

function useCoarsePointer() {
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1023px)');
    const sync = () => setCoarse(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  return coarse;
}

function Dust({ count, reduced }: { count: number; reduced: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 2.1 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.62;
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current && !reduced) ref.current.rotation.y += delta * 0.05;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial color="#d7c9f2" size={0.028} transparent opacity={0.75} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function Sculpture({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);
  const satellites = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const sculpture = group.current;
    if (!sculpture) return;

    const time = state.clock.elapsedTime;
    const leanY = reduced ? 0.4 : state.pointer.x * 0.7 + time * 0.16;
    const leanX = reduced ? 0.15 : state.pointer.y * 0.35;

    sculpture.rotation.y = THREE.MathUtils.damp(sculpture.rotation.y, leanY, 2.6, delta);
    sculpture.rotation.x = THREE.MathUtils.damp(sculpture.rotation.x, leanX, 2.6, delta);

    state.camera.position.x = THREE.MathUtils.damp(
      state.camera.position.x,
      reduced ? 0 : state.pointer.x * 0.35,
      2,
      delta,
    );
    state.camera.position.y = THREE.MathUtils.damp(
      state.camera.position.y,
      reduced ? 0 : state.pointer.y * 0.22,
      2,
      delta,
    );
    state.camera.lookAt(0, 0, 0);

    if (ring.current && !reduced) {
      ring.current.rotation.z += delta * 0.22;
    }
    if (satellites.current && !reduced) {
      satellites.current.rotation.y = time * 0.38;
    }
  });

  const moons = [
    { angle: 0.2, radius: 1.72, size: 0.1, color: '#f3efe8' },
    { angle: 2.2, radius: 2.05, size: 0.065, color: '#7062ab' },
    { angle: 4.1, radius: 1.48, size: 0.08, color: '#e4d8f6' },
  ];

  return (
    <group ref={group}>
      <Float speed={reduced ? 0 : 1.5} rotationIntensity={reduced ? 0 : 0.22} floatIntensity={reduced ? 0 : 0.4}>
        <mesh castShadow>
          <icosahedronGeometry args={[1.02, 1]} />
          <meshStandardMaterial color="#7062ab" metalness={0.72} roughness={0.18} emissive="#2a2144" emissiveIntensity={0.45} />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshBasicMaterial color="#efe8f8" wireframe transparent opacity={0.32} />
        </mesh>
      </Float>

      <mesh ref={ring} rotation={[Math.PI / 2.35, 0.2, 0]}>
        <torusGeometry args={[1.82, 0.011, 12, 96]} />
        <meshBasicMaterial color="#7062ab" transparent opacity={0.9} />
      </mesh>

      <group ref={satellites}>
        {moons.map((moon) => (
          <mesh
            key={moon.angle}
            position={[
              Math.cos(moon.angle) * moon.radius,
              Math.sin(moon.angle) * 0.28,
              Math.sin(moon.angle) * moon.radius,
            ]}
          >
            <sphereGeometry args={[moon.size, 24, 24]} />
            <meshStandardMaterial color={moon.color} metalness={0.35} roughness={0.28} />
          </mesh>
        ))}
      </group>

      <Dust count={reduced ? 40 : 140} reduced={reduced} />
    </group>
  );
}

const Scene = () => {
  const reduced = usePrefersReducedMotion();
  const coarse = useCoarsePointer();

  return (
    <Canvas
      camera={{ position: [0, 0, 4.4], fov: 40 }}
      dpr={coarse ? [1, 1.25] : [1, 1.6]}
      gl={{ antialias: !coarse, alpha: true, powerPreference: 'high-performance' }}
      onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      aria-hidden
    >
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 3.2, 5]} intensity={1.55} color="#f7f2ea" />
      <pointLight position={[-2.4, -0.6, 2.2]} intensity={14} color="#7062ab" distance={9} />
      <Sculpture reduced={reduced} />
    </Canvas>
  );
};

export default Scene;
