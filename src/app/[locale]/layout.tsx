import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import { LenisProvider } from "@/lib/lenis";
import { Preloader } from "@/components/layout/Preloader";
import { PageTransition } from "@/components/layout/PageTransition";
import { SkipLink } from "@/components/layout/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/contact/WhatsAppFab";
import { CookieBanner } from "@/components/cookie/CookieBanner";
import { ConsentProvider } from "@/lib/consent";
import { getLegal, legalSlugs } from "@/content/legal";
import { localeHref } from "@/content";
import { JsonLd } from "@/components/seo/JsonLd";
import { rootMetadata } from "@/lib/seo";
import { buildGraph, logoSchema, organizationSchema, websiteSchema } from "@/lib/schema";
import { getContent, isLocale, locales } from "@/content";
import "../globals.css";

const clash = localFont({
  src: "../../fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash",
  display: "swap",
  weight: "200 700",
});

const satoshi = localFont({
  src: [
    { path: "../../fonts/Satoshi-Variable.woff2", weight: "300 900", style: "normal" },
    { path: "../../fonts/Satoshi-VariableItalic.woff2", weight: "300 900", style: "italic" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/** Colore della barra di sistema su mobile: il deep del marchio. */
export const viewport: Viewport = {
  themeColor: "#0b1f33",
  colorScheme: "light",
};

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  /* Solo i metadati validi per l'intero sito. Titolo, descrizione, canonical,
     hreflang, OG e Twitter card sono dichiarati da OGNI pagina tramite
     `pageMetadata`: `openGraph` non si eredita per campi, e lasciarlo qui
     faceva ereditare a tutte le pagine l'og:title della home. */
  return rootMetadata(locale);
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale);
  const legal = getLegal(locale);

  /* Entità globali del grafo: l'azienda e il sito. Ogni pagina vi aggancia
     la propria `WebPage` e il proprio `BreadcrumbList` tramite @id. */
  const graph = buildGraph(
    organizationSchema(locale),
    websiteSchema(locale),
    logoSchema(locale)
  );

  return (
    <html lang={locale} className={`${clash.variable} ${satoshi.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        <JsonLd data={graph} />
        <SkipLink label={t.a11y.skipToContent} />
        {/* Il provider avvolge tutto: banner, footer e mappa devono leggere
            la stessa scelta di consenso. */}
        <ConsentProvider>
          <LenisProvider>
            <Preloader tagline={t.preloaderTagline} />
            <PageTransition>
              <Header locale={locale} t={t} />
              {/* `tabIndex={-1}`: senza, il salto dello skip link non sposta
                  davvero il focus e il Tab successivo riparte dall'header. */}
              <main id="main" tabIndex={-1}>
                {children}
              </main>
              <Footer locale={locale} t={t} />
            </PageTransition>
            {/* Fuori da PageTransition: quell'overlay anima uno `scaleY`, e un
                `transform` su un antenato farebbe collassare il `position:
                fixed` degli elementi sul contenitore invece che sul viewport. */}
            <WhatsAppFab number={t.site.whatsappNumber} label={t.contact.whatsapp.title} />
            <CookieBanner
              c={legal.cookieBanner}
              links={{
                cookie: {
                  href: localeHref(locale, `/${legalSlugs.cookie}`),
                  label: legal.labels.cookie,
                },
                privacy: {
                  href: localeHref(locale, `/${legalSlugs.privacy}`),
                  label: legal.labels.privacy,
                },
              }}
            />
          </LenisProvider>
        </ConsentProvider>
      </body>
    </html>
  );
}
