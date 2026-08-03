import type { Metadata } from "next";
import { ServicePage } from "@/components/services/ServicePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getContent, isLocale, defaultLocale, type Content } from "@/content";
import { pageMetadata } from "@/lib/seo";
import {
  absoluteUrl,
  breadcrumbSchema,
  buildGraph,
  crumbsFor,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema";

type PageProps = { params: Promise<{ locale: string }> };

/**
 * Factory per le route servizio: stessa pagina, slug e meta diversi.
 * `metaKey` seleziona il blocco meta nel dizionario.
 */
export function createServiceRoute(slug: string, metaKey: keyof Content["meta"]) {
  async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const active = isLocale(locale) ? locale : defaultLocale;
    return pageMetadata({
      locale: active,
      path: `/${slug}`,
      meta: getContent(active).meta[metaKey],
    });
  }

  async function Page({ params }: PageProps) {
    const { locale } = await params;
    if (!isLocale(locale)) return null;
    const t = getContent(locale);
    const service = t.services.find((s) => s.slug === slug)!;

    const url = absoluteUrl(locale, `/${slug}`);
    const crumbs = crumbsFor(t, `/${slug}`);
    /* Qui il grafo porta anche il `Service`: è la pagina che descrive la
       prestazione ed è quella che deve competere per le ricerche del tipo
       "installazione climatizzatori Bolzano". */
    const graph = buildGraph(
      webPageSchema(locale, url, t.meta[metaKey], true),
      breadcrumbSchema(locale, url, crumbs),
      serviceSchema(locale, t, service)
    );

    return (
      <>
        <JsonLd data={graph} />
        <ServicePage locale={locale} t={t} service={service} crumbs={crumbs} />
      </>
    );
  }

  return { generateMetadata, Page };
}
