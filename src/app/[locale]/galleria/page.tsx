import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { HighlightTitle } from "@/components/ui/HighlightTitle";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { getContent, isLocale, locales, defaultLocale } from "@/content";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent(isLocale(locale) ? locale : defaultLocale);
  return {
    title: t.meta.galleria.title,
    description: t.meta.galleria.description,
    alternates: {
      canonical: `/${locale}/galleria`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/galleria`])),
    },
  };
}

export default async function GalleriaPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  const t = getContent(locale);

  return (
    <section className="section-y pt-40 md:pt-48">
      <div className="container-tk">
        <div className="mb-12 flex flex-col gap-5">
          <SectionLabel num="—">{t.gallery.heroLabel}</SectionLabel>
          <Reveal as="h1" className="font-display max-w-3xl text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[1.05] tracking-tight text-deep">
            <HighlightTitle title={t.gallery.heroTitle} />
          </Reveal>
          <Reveal as="p" delay={0.1} className="max-w-xl leading-relaxed text-steel">
            {t.gallery.heroText}
          </Reveal>
        </div>
        <GalleryGrid t={t} />
      </div>
    </section>
  );
}
