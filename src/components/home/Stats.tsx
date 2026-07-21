import { Counter } from "@/components/ui/Counter";
import { StaggerReveal } from "@/components/ui/Reveal";
import type { Content } from "@/content";

/**
 * Stats con contatori animati.
 * NB: numeri [DA CONFERMARE] col cliente — vedi content/*.ts.
 */
export function Stats({ t }: { t: Content }) {
  return (
    <section className="bg-deep py-20 md:py-24">
      <div className="container-tk">
        <StaggerReveal className="grid grid-cols-2 gap-10 lg:grid-cols-4" stagger={0.1}>
          {t.stats.map((s) => (
            <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} light />
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
