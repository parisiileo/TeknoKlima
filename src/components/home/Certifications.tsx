import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, StaggerReveal } from "@/components/ui/Reveal";
import { HighlightTitle } from "@/components/ui/HighlightTitle";
import { MitsubishiLogo } from "@/components/ui/MitsubishiLogo";
import type { Content } from "@/content";

/** Certificazioni e partnership ufficiali. */
export function Certifications({ t }: { t: Content }) {
  return (
    <section className="section-y bg-frost">
      <div className="container-tk">
        <div className="mb-12 flex flex-col gap-5">
          <SectionLabel num="03">{t.certifications.label}</SectionLabel>
          <Reveal as="h2" className="font-display max-w-2xl text-[var(--text-h2)] font-semibold leading-[1.05] text-deep">
            <HighlightTitle title={t.certifications.title} />
          </Reveal>
        </div>

        <StaggerReveal className="grid gap-6 md:grid-cols-2" stagger={0.12}>
          {t.certifications.items.map((c) => (
            <article
              key={c.title}
              className="relative overflow-hidden rounded-[var(--radius-card)] bg-deep p-8 text-white lg:p-10"
            >
              <div
                aria-hidden
                className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(31,168,220,0.25),transparent_70%)]"
              />
              {c.title.includes("Mitsubishi") && (
                <div className="mb-6 flex h-14 w-fit items-center rounded-xl bg-white px-4 text-deep">
                  <MitsubishiLogo withWordmark />
                </div>
              )}
              <p className="tech-label text-cyan">{c.subtitle}</p>
              <h3 className="font-display mt-3 text-2xl font-semibold">{c.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">{c.text}</p>
            </article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
