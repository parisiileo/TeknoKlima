import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, StaggerReveal } from "@/components/ui/Reveal";
import { HighlightTitle } from "@/components/ui/HighlightTitle";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ServiceHero } from "./ServiceHero";
import { localeHref, type Content, type Locale, type ServiceContent } from "@/content";
import type { Crumb } from "@/lib/schema";

type Props = { locale: Locale; t: Content; service: ServiceContent; crumbs: Crumb[] };

/** Template completo di pagina servizio, riusato dalle route servizio. */
export function ServicePage({ locale, t, service, crumbs }: Props) {
  const others = t.services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <ServiceHero service={service} locale={locale} t={t} crumbs={crumbs} />

      {/* Cosa comprende */}
      <section className="section-y">
        <div className="container-tk">
          <div className="mb-12 flex flex-col gap-5">
            <SectionLabel num={service.num}>{t.servicePage.includesLabel}</SectionLabel>
            <Reveal as="h2" className="font-display max-w-2xl text-[var(--text-h2)] font-semibold leading-[1.05] text-deep">
              <HighlightTitle title={t.servicePage.includesTitle} />
            </Reveal>
          </div>
          <StaggerReveal className="grid gap-4 md:grid-cols-2" stagger={0.08}>
            {service.features.map((f) => (
              <article
                key={f.title}
                className="rounded-[var(--radius-card)] border border-frost-deep/60 bg-white/50 p-7 transition-colors duration-300 hover:border-cyan/50"
              >
                <h3 className="font-display text-xl font-semibold text-deep">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-steel">{f.text}</p>
              </article>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Processo */}
      <section className="section-y bg-frost">
        <div className="container-tk">
          <div className="mb-12 flex flex-col gap-5">
            <SectionLabel>{t.servicePage.processLabel}</SectionLabel>
            <Reveal as="h2" className="font-display max-w-2xl text-[var(--text-h2)] font-semibold leading-[1.05] text-deep">
              {t.servicePage.processTitle}
            </Reveal>
          </div>
          <StaggerReveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {service.process.map((p, i) => (
              <div key={p.title} className="relative rounded-[var(--radius-card)] bg-ice p-6">
                <p className="font-display text-3xl font-semibold text-cyan/60">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-3 text-lg font-semibold text-deep">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{p.text}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA + altri servizi */}
      <section className="section-y">
        <div
          className={`container-tk grid items-start gap-12 ${
            others.length > 0 ? "lg:grid-cols-2" : ""
          }`}
        >
          <div className="flex flex-col gap-5">
            <SectionLabel>{t.servicePage.ctaLabel}</SectionLabel>
            <Reveal as="h2" className="font-display text-[var(--text-h2)] font-semibold leading-[1.05] text-deep">
              {t.servicePage.ctaTitle}
            </Reveal>
            <Reveal as="p" delay={0.1} className="max-w-md leading-relaxed text-steel">
              {t.servicePage.ctaText}
            </Reveal>
            <Reveal delay={0.15} className="mt-2">
              <MagneticButton href={localeHref(locale, "/contatti")}>{t.cta.quote}</MagneticButton>
            </Reveal>
          </div>

          {others.length > 0 && (
          <StaggerReveal className="flex flex-col gap-4" stagger={0.1}>
            {others.map((o) => (
              <Link
                key={o.slug}
                href={localeHref(locale, `/${o.slug}`)}
                className="group flex items-center justify-between rounded-[var(--radius-card)] border border-frost-deep/60 p-6 transition-colors duration-300 hover:border-cyan/50"
              >
                <div>
                  <p className="tech-label mb-1 text-cyan-deep">{o.num}</p>
                  <p className="font-display text-xl font-semibold text-deep">{o.title}</p>
                </div>
                <span
                  aria-hidden
                  className="text-2xl text-steel transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-cyan-deep"
                >
                  →
                </span>
              </Link>
            ))}
          </StaggerReveal>
          )}
        </div>
      </section>
    </>
  );
}
