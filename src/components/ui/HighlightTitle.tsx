import type { Highlight } from "@/content";

type Props = {
  title: Highlight;
  /** Colore della parola evidenziata (default ciano) */
  color?: "cyan" | "ember";
};

/** Renderizza un titolo con parola evidenziata: pre <span>highlight</span> post */
export function HighlightTitle({ title, color = "cyan" }: Props) {
  const colorCls = color === "ember" ? "text-ember" : "text-cyan-deep";
  return (
    <>
      {title.pre}
      {title.highlight && <span className={colorCls}>{title.highlight}</span>}
      {title.post}
    </>
  );
}
