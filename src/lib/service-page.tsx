import type { Metadata } from "next";
import { ServicePage } from "@/components/services/ServicePage";
import { getContent, isLocale, locales, defaultLocale, type Content } from "@/content";

type PageProps = { params: Promise<{ locale: string }> };

/**
 * Factory per le 3 route servizio: stessa pagina, slug e meta diversi.
 * `metaKey` seleziona il blocco meta nel dizionario.
 */
export function createServiceRoute(slug: string, metaKey: keyof Content["meta"]) {
  async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const t = getContent(isLocale(locale) ? locale : defaultLocale);
    const meta = t.meta[metaKey];
    return {
      title: meta.title,
      description: meta.description,
      alternates: {
        canonical: `/${locale}/${slug}`,
        languages: Object.fromEntries(locales.map((l) => [l, `/${l}/${slug}`])),
      },
    };
  }

  async function Page({ params }: PageProps) {
    const { locale } = await params;
    if (!isLocale(locale)) return null;
    const t = getContent(locale);
    const service = t.services.find((s) => s.slug === slug)!;
    return <ServicePage locale={locale} t={t} service={service} />;
  }

  return { generateMetadata, Page };
}
