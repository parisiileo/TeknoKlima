import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, StaggerReveal } from "@/components/ui/Reveal";
import { HighlightTitle } from "@/components/ui/HighlightTitle";
import type { Content } from "@/content";

/** Punti di forza + estratto "chi siamo". */
export function WhyUs({ t }: { t: Content }) {
  return (
    <section className="section-y">
      <div className="container-tk">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="flex flex-col gap-6">
            <SectionLabel num="02">{t.whyUs.label}</SectionLabel>
            <Reveal as="h2" className="font-display text-[var(--text-h2)] font-semibold leading-[1.05] text-deep">
              <HighlightTitle title={t.whyUs.title} />
            </Reveal>
            <Reveal as="p" delay={0.1} className="max-w-md leading-relaxed text-steel">
              {t.whyUs.about}
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-2 flex flex-wrap gap-2">
                {t.whyUs.values.map((v) => (
                  <li
                    key={v}
                    className="tech-label rounded-full border border-frost-deep px-4 py-2 text-steel"
                  >
                    {v}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <StaggerReveal as="ul" className="grid gap-4 sm:grid-cols-2" stagger={0.08}>
            {t.whyUs.strengths.map((item, i) => (
              <li
                key={item.title}
                className="rounded-[var(--radius-card)] border border-frost-deep/60 bg-white/50 p-6 transition-colors duration-300 hover:border-cyan/50"
              >
                <p className="tech-label mb-3 text-cyan-deep">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-display text-lg font-semibold text-deep">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{item.text}</p>
              </li>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
