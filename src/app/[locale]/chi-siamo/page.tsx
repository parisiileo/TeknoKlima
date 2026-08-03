import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, StaggerReveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Certifications } from "@/components/home/Certifications";
import { getContent, isLocale, defaultLocale, localeHref } from "@/content";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, breadcrumbSchema, buildGraph, crumbsFor, webPageSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const active = isLocale(locale) ? locale : defaultLocale;
  return pageMetadata({ locale: active, path: "/chi-siamo", meta: getContent(active).meta.chiSiamo });
}

export default async function ChiSiamoPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  const t = getContent(locale);

  const url = absoluteUrl(locale, "/chi-siamo");
  const crumbs = crumbsFor(t, "/chi-siamo");
  const graph = buildGraph(
    webPageSchema(locale, url, t.meta.chiSiamo, true),
    breadcrumbSchema(locale, url, crumbs)
  );

  return (
    <>
      <JsonLd data={graph} />
      {/* Hero + storia */}
      <section className="section-y pt-40 md:pt-48">
        <div className="container-tk">
          <div className="flex flex-col gap-5">
            <Breadcrumbs locale={locale} t={t} crumbs={crumbs} />
            <SectionLabel num="—">{t.about.heroLabel}</SectionLabel>
            <Reveal as="h1" className="font-display max-w-4xl text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[1.05] tracking-tight text-deep">
              {t.about.heroTitle}
            </Reveal>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <StaggerReveal className="flex max-w-2xl flex-col gap-6" stagger={0.12}>
              {t.about.story.map((p) => (
                <p key={p.slice(0, 24)} className="text-[var(--text-lead)] leading-relaxed text-steel">
                  {p}
                </p>
              ))}
            </StaggerReveal>
            <Reveal delay={0.2}>
              <div className="rounded-[var(--radius-card)] bg-deep p-8 text-white">
                <p className="tech-label text-cyan">{t.about.whereLabel}</p>
                <p className="font-display mt-3 text-2xl font-semibold">{t.about.whereTitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/70">{t.about.whereText}</p>
                <div className="mt-6">
                  <MagneticButton href={localeHref(locale, "/contatti")} variant="ghost-light">
                    {t.cta.quote}
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="section-y bg-frost">
        <div className="container-tk">
          <div className="mb-12 flex flex-col gap-5">
            <SectionLabel>{t.about.valuesLabel}</SectionLabel>
            <Reveal as="h2" className="font-display max-w-2xl text-[var(--text-h2)] font-semibold leading-[1.05] text-deep">
              {t.about.valuesTitle}
            </Reveal>
          </div>
          <StaggerReveal as="ul" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {t.about.values.map((v, i) => (
              <li key={v.title} className="rounded-[var(--radius-card)] bg-ice p-7">
                <p className="tech-label mb-3 text-cyan-deep">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-display text-xl font-semibold text-deep">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{v.text}</p>
              </li>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <Certifications t={t} />
    </>
  );
}
