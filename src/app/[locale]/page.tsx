import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyUs } from "@/components/home/WhyUs";
import { Certifications } from "@/components/home/Certifications";
import { Reviews } from "@/components/home/Reviews";
import { Faq } from "@/components/home/Faq";
import { ContactStrip } from "@/components/home/ContactStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { getContent, isLocale, defaultLocale } from "@/content";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, buildGraph, faqSchema, webPageSchema } from "@/lib/schema";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const active = isLocale(locale) ? locale : defaultLocale;
  return pageMetadata({
    locale: active,
    path: "/",
    meta: getContent(active).meta.home,
    /* La home non passa dal template "%s | Tekno Klima Bolzano": il titolo
       lo contiene già e uscirebbe raddoppiato. */
    absoluteTitle: true,
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) return null; // il layout gestisce il notFound
  const t = getContent(locale);

  const url = absoluteUrl(locale, "/");
  /* La home non ha breadcrumb (è la radice), ma ha le FAQ. */
  const graph = buildGraph(
    webPageSchema(locale, url, t.meta.home, false),
    faqSchema(url, t.faq.items)
  );

  return (
    <>
      <JsonLd data={graph} />
      <Hero locale={locale} t={t} />
      <ServicesOverview locale={locale} t={t} />
      <WhyUs t={t} />
      <Certifications t={t} />
      <Reviews t={t} />
      <Faq t={t} />
      <ContactStrip locale={locale} t={t} />
    </>
  );
}
