import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { getContent, isLocale, locales, defaultLocale } from "@/content";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent(isLocale(locale) ? locale : defaultLocale);
  return {
    title: t.meta.contatti.title,
    description: t.meta.contatti.description,
    alternates: {
      canonical: `/${locale}/contatti`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/contatti`])),
    },
  };
}

export default async function ContattiPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  const t = getContent(locale);

  return (
    <section className="section-y pt-40 md:pt-48">
      <div className="container-tk">
        <div className="flex flex-col gap-5">
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
            <ContactForm t={t} />
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
              </div>

              <div className="overflow-hidden rounded-[var(--radius-card)] border border-frost-deep/60">
                <iframe
                  src={t.contact.mapsEmbed}
                  title={`${t.site.name} — ${t.site.address}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="h-[22rem] w-full border-0"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
