"use client";

import { useCounter } from "@/lib/animations/hooks";

type Props = {
  value: number;
  suffix?: string;
  label: string;
  light?: boolean;
};

/** Statistica con contatore animato on-scroll. */
export function Counter({ value, suffix = "", label, light = false }: Props) {
  const ref = useCounter<HTMLSpanElement>(value);

  return (
    <div className="flex flex-col gap-2">
      <p
        className={`font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-none ${
          light ? "text-white" : "text-deep"
        }`}
      >
        <span ref={ref}>0</span>
        <span className="text-ember">{suffix}</span>
      </p>
      <p className={`text-sm ${light ? "text-white/60" : "text-steel"}`}>{label}</p>
    </div>
  );
}
