"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { AirflowField } from "./AirflowField";
import { prefersReducedMotion } from "@/lib/animations/gsap-config";

/**
 * Canvas hero con graceful degradation:
 * - desktop: campo di flusso completo + mouse tilt
 * - mobile/touch: meno scie e streamline, niente tilt
 * - prefers-reduced-motion o WebGL assente: nessun canvas (resta il gradiente CSS)
 */
export function HeroCanvas() {
  const [mode, setMode] = useState<"full" | "lite" | "off" | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setMode("off");
      return;
    }
    // WebGL disponibile?
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) {
        setMode("off");
        return;
      }
    } catch {
      setMode("off");
      return;
    }
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const small = window.matchMedia("(max-width: 768px)").matches;
    setMode(coarse || small ? "lite" : "full");
  }, []);

  if (mode === null || mode === "off") return null;

  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 7], fov: 50 }}
      dpr={[1, 1.75]}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      aria-hidden
    >
      <AirflowField count={mode === "full" ? 900 : 380} interactive={mode === "full"} />
    </Canvas>
  );
}
