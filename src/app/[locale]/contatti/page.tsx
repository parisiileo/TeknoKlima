import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppPanel } from "@/components/contact/WhatsAppPanel";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { getLegal, legalSlugs } from "@/content/legal";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { getContent, isLocale, defaultLocale, localeHref } from "@/content";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, breadcrumbSchema, buildGraph, crumbsFor, webPageSchema } from "@/lib/schema";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const active = isLocale(locale) ? locale : defaultLocale;
  return pageMetadata({ locale: active, path: "/contatti", meta: getContent(active).meta.contatti });
}

export default async function ContattiPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  const t = getContent(locale);
  const legal = getLegal(locale);
  const privacyHref = localeHref(locale, `/${legalSlugs.privacy}`);
  const cookieHref = localeHref(locale, `/${legalSlugs.cookie}`);

  const url = absoluteUrl(locale, "/contatti");
  const crumbs = crumbsFor(t, "/contatti");
  const graph = buildGraph(
    webPageSchema(locale, url, t.meta.contatti, true),
    breadcrumbSchema(locale, url, crumbs)
  );

  return (
    <section className="section-y pt-40 md:pt-48">
      <JsonLd data={graph} />
      <div className="container-tk">
        <div className="flex flex-col gap-5">
          <Breadcrumbs locale={locale} t={t} crumbs={crumbs} />
          <SectionLabel num="—">{t.contact.heroLabel}</SectionLabel>
          <Reveal as="h1" className="font-display max-w-3xl text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[1.05] tracking-tight text-deep">
            {t.contact.heroTitle}
          </Reveal>
          <Reveal as="p" delay={0.1} className="max-w-xl leading-relaxed text-steel">
            {t.contact.heroText}
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal delay={0.15}>
            <WhatsAppPanel
              t={t}
              privacyPolicy={{ href: privacyHref, label: legal.labels.privacy }}
            />
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex flex-col gap-6">
              <div className="rounded-[var(--radius-card)] border border-frost-deep/60 p-7">
                <p className="tech-label mb-4 text-steel">{t.contact.dataLabel}</p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href={t.site.phoneHref} className="font-display text-xl font-medium text-deep transition-colors hover:text-cyan-deep">
                      {t.site.phone}
                    </a>
                  </li>
                  <li>
                    <a href={t.site.emailHref} className="font-display text-xl font-medium text-deep transition-colors hover:text-cyan-deep">
                      {t.site.email}
                    </a>
                  </li>
                  <li className="text-steel">{t.site.address}</li>
                  <li>
                    <a
                      href={t.site.instagramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-steel transition-colors hover:text-cyan-deep"
                    >
                      Instagram {t.site.instagram}
                    </a>
                  </li>
                </ul>

                {/* `text-steel/70` stava a 3.15:1 sul fondo ice: sotto la
                    soglia AA. Il grigio pieno arriva a 6:1 e la gerarchia
                    resta leggibile grazie al peso, non all'opacità. */}
                <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 border-t border-frost-deep/60 pt-5 text-sm">
                  <dt className="font-medium text-steel">{t.contact.companyLabel}</dt>
                  <dd className="text-steel">{t.site.legalName}</dd>
                  <dt className="font-medium text-steel">{t.contact.vatLabel}</dt>
                  <dd className="text-steel">{t.site.vatNumber}</dd>
                  {t.site.rea && (
                    <>
                      <dt className="font-medium text-steel">{t.contact.reaLabel}</dt>
                      <dd className="text-steel">{t.site.rea}</dd>
                    </>
                  )}
                  {t.site.pec && (
                    <>
                      {/* "PEC" resta invariato: è la denominazione di legge
                          italiana, non si traduce. */}
                      <dt className="font-medium text-steel">PEC</dt>
                      <dd>
                        <a
                          href={`mailto:${t.site.pec}`}
                          className="text-steel transition-colors hover:text-cyan-deep"
                        >
                          {t.site.pec}
                        </a>
                      </dd>
                    </>
                  )}
                </dl>
              </div>

              <MapEmbed t={t} cookiePolicy={{ href: cookieHref, label: legal.labels.cookie }} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
