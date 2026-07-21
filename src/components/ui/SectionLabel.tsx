type Props = {
  num?: string;
  children: React.ReactNode;
  light?: boolean;
  className?: string;
};

/** Etichetta tecnica mono uppercase, es. [ 01 — Climatizzazione ]. */
export function SectionLabel({ num, children, light = false, className = "" }: Props) {
  return (
    <p
      className={`tech-label flex items-center gap-3 ${
        light ? "text-white/60" : "text-steel"
      } ${className}`}
    >
      <span aria-hidden className={`h-px w-8 ${light ? "bg-white/40" : "bg-cyan"}`} />
      {num && <span className={light ? "text-cyan" : "text-cyan-deep"}>{num}</span>}
      <span>{children}</span>
    </p>
  );
}
