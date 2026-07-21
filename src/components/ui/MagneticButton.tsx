"use client";

import Link from "next/link";
import { useRef, useCallback } from "react";
import { gsap, prefersReducedMotion } from "@/lib/animations/gsap-config";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost-light";
  className?: string;
};

/**
 * CTA con effetto magnetico: il bottone segue leggermente il cursore.
 * Su touch/reduced-motion resta un normale link.
 */
export function MagneticButton({ href, children, variant = "primary", className = "" }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: x * 0.25, y: y * 0.35, duration: 0.4, ease: "power2.out" });
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  }, []);

  const base =
    "group relative inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[0.95rem] font-medium transition-colors duration-300 will-change-transform";
  const variants = {
    primary: "bg-ember text-white hover:bg-ember-deep",
    outline: "border border-deep/20 text-deep hover:border-cyan-deep hover:text-cyan-deep",
    "ghost-light": "border border-white/25 text-white hover:bg-white/10",
  };

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
