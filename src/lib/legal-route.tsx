import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { getLegal, legalSlugs } from "@/content/legal";
import { JsonLd } from "@/components/seo/JsonLd";
import { getContent, isLocale, defaultLocale, localeHref } from "@/content";
import { pageMetadata } from "@/lib/seo";
import {
  absoluteUrl,
  breadcrumbSchema,
  buildGraph,
  crumbsFor,
  webPageSchema,
} from "@/lib/schema";

type PageProps = { params: Promise<{ locale: string }> };
type DocKey = "privacy" | "cookie";

/** L'altro documento: le due pagine si rimandano a vicenda in fondo. */
const otherKey: Record<DocKey, DocKey> = { privacy: "cookie", cookie: "privacy" };

/**
 * Factory per le due route legali: stessa impaginazione, documento diverso.
 * Speculare a `createServiceRoute` per le pagine servizio.
 */
export function createLegalRoute(key: DocKey) {
  const slug = legalSlugs[key];

  async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const active = isLocale(locale) ? locale : defaultLocale;
    return pageMetadata({
      locale: active,
      path: `/${slug}`,
      meta: getLegal(active)[key].meta,
      /* Pagine di servizio: utili all'utente, inutili in SERP. */
      noIndex: true,
    });
  }

  async function Page({ params }: PageProps) {
    const { locale } = await params;
    if (!isLocale(locale)) return null;
    const t = getContent(locale);
    const legal = getLegal(locale);
    const other = otherKey[key];

    const url = absoluteUrl(locale, `/${slug}`);
    const crumbs = crumbsFor(t, `/${slug}`, legal.labels[key]);
    /* Il grafo si dichiara anche sulle pagine noindex: Google le scansiona
       comunque e il breadcrumb aiuta a capire la struttura del sito. */
    const graph = buildGraph(
      webPageSchema(locale, url, legal[key].meta, true),
      breadcrumbSchema(locale, url, crumbs)
    );

    return (
      <>
        <JsonLd data={graph} />
        <LegalPage
          locale={locale}
          t={t}
          doc={legal[key]}
          label={legal.labels[key]}
          backToSite={legal.labels.backToSite}
          crumbs={crumbs}
          other={{
            href: localeHref(locale, `/${legalSlugs[other]}`),
            label: legal.labels[other],
          }}
        />
      </>
    );
  }

  return { generateMetadata, Page };
}
