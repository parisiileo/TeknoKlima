"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Campo di flusso d'aria: scie allungate (particelle) che scorrono verso
 * destra seguendo correnti sinusoidali invisibili. Legge come "aria in
 * movimento" senza le linee/streamline esplicite (che risultavano dure).
 */

type Props = {
  /** Numero di scie (particelle allungate). */
  count: number;
  /** Tilt del gruppo verso il mouse (solo desktop). */
  interactive: boolean;
};

/**
 * Altezza della corrente in (x, t): sinusoidi che TRASLANO nel tempo verso
 * +x — è questo che dà la direzione del vento — più una deriva lenta e
 * ampia che fa "respirare" la corrente come una raffica reale.
 */
function flowY(x: number, t: number, band: number, phase: number, amp: number): number {
  return (
    band +
    Math.sin(t * 0.06 + phase * 1.7) * amp * 0.6 +
    Math.sin(x * 0.45 - t * 0.85 + phase) * amp * 0.55 +
    Math.sin(x * 0.16 - t * 0.3 + phase * 2.3) * amp
  );
}

/** Scia orizzontale morbida (ellisse sfumata): i Points la rendono un tratto, non una bolla. */
function makeStreakTexture(): THREE.Texture {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.translate(size / 2, size / 2);
  ctx.scale(1, 0.28); // schiaccia il gradiente: tratto orizzontale
  const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, size / 2);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.4, "rgba(255,255,255,0.55)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(-size / 2, -size / 2, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

const CYAN = new THREE.Color("#0e7bb8");
const CYAN_LIGHT = new THREE.Color("#1fa8dc");
const EMBER = new THREE.Color("#ff7a3d");

/** Parametri di una corrente d'aria: le scie ci si distribuiscono sopra. */
type FlowBand = { band: number; phase: number; amp: number };

export function AirflowField({ count, interactive }: Props) {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  const texture = useMemo(() => makeStreakTexture(), []);

  /* Correnti (solo dati): guidano la distribuzione e il moto delle scie */
  const bands = useMemo<FlowBand[]>(() => {
    const bandCount = count > 1200 ? 14 : 9;
    return Array.from({ length: bandCount }, (_, i) => ({
      band: -3 + (6 * i) / (bandCount - 1) + (Math.random() - 0.5) * 0.5,
      phase: Math.random() * Math.PI * 2,
      amp: 0.3 + Math.random() * 0.55,
    }));
  }, [count]);

  /* Scie: posizione + parametri di corrente per particella */
  const { positions, colors, params } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const params = new Float32Array(count * 4); // band, phase, speed, amp

    for (let i = 0; i < count; i++) {
      // ~60% delle scie viaggia sulla banda di una corrente: rende
      // leggibile che l'aria scorre lungo canali coerenti.
      const onLine = Math.random() < 0.6;
      const b = bands[Math.floor(Math.random() * bands.length)];
      const band = onLine ? b.band + (Math.random() - 0.5) * 0.15 : (Math.random() - 0.5) * 6.5;
      const phase = onLine ? b.phase : Math.random() * Math.PI * 2;
      const amp = onLine ? b.amp : 0.25 + Math.random() * 0.6;
      const speed = 0.5 + Math.random() * 0.7;

      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = band;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3;

      const c = Math.random() < 0.05 ? EMBER : Math.random() < 0.5 ? CYAN : CYAN_LIGHT;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      params[i * 4] = band;
      params[i * 4 + 1] = phase;
      params[i * 4 + 2] = speed;
      params[i * 4 + 3] = amp;
    }
    return { positions, colors, params };
  }, [count, bands]);

  /* La texture creata fuori da JSX va rilasciata a mano al remount */
  useEffect(() => {
    return () => {
      texture.dispose();
    };
  }, [texture]);

  useFrame((state, delta) => {
    const points = pointsRef.current;
    const group = groupRef.current;
    if (!points) return;

    const t = state.clock.elapsedTime;

    // Scie: avanzano col vento e seguono la stessa corrente
    const pos = points.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const band = params[i * 4];
      const phase = params[i * 4 + 1];
      const speed = params[i * 4 + 2];
      const amp = params[i * 4 + 3];

      let x = pos[i * 3] + speed * delta * 1.7;
      if (x > 9.5) x = -9.5;
      pos[i * 3] = x;
      pos[i * 3 + 1] = flowY(x, t, band, phase, amp);
    }
    points.geometry.attributes.position.needsUpdate = true;

    // Tilt sottile verso il mouse
    if (group && interactive) {
      group.rotation.y += (pointer.x * 0.12 - group.rotation.y) * 0.04;
      group.rotation.x += (-pointer.y * 0.08 - group.rotation.x) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          map={texture}
          vertexColors
          transparent
          opacity={0.55}
          size={0.16}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}
