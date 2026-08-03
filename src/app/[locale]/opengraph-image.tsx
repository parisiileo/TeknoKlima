import { ImageResponse } from "next/og";
import { BRAND, MARK_K, MARK_T, WORD_KLIMA, WORD_TEKNO } from "@/components/ui/TkLogo";
import { getContent, isLocale, defaultLocale, locales } from "@/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Tekno Klima — Climatizzazione a Bolzano / Bozen";

/** Una immagine per lingua: il payoff sotto il marchio è localizzato. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Card social (1200×630) generata a build time dal marchio ufficiale.
 *
 * Il lockup è passato a satori come `<img>` con data URI: è la via più
 * solida per rendere tracciati SVG complessi: satori supporta l'SVG inline
 * solo in parte, mentre un'immagine la rasterizza per intero. In negativo,
 * quindi antracite → bianco, il blu istituzionale resta.
 */
export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getContent(isLocale(locale) ? locale : defaultLocale);

  const lockup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 702 100" width="702" height="100">
    <g transform="translate(0 3.94) scale(0.5619)">
      <path fill="${BRAND.blue}" d="${MARK_K}"/>
      <path fill="#ffffff" d="${MARK_T}"/>
    </g>
    <g transform="translate(147.17 83.39) scale(0.9708)">
      <path fill="#ffffff" d="${WORD_TEKNO}"/>
      <path fill="${BRAND.wordBlue}" d="${WORD_KLIMA}"/>
    </g>
  </svg>`;

  const lockupSrc = `data:image/svg+xml;base64,${Buffer.from(lockup).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0b1f33 0%, #10293f 55%, #0e7bb8 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Marchio */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={lockupSrc} width={520} height={74} alt="" />

        {/* Payoff */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 62, fontWeight: 700, color: "#ffffff", lineHeight: 1.1 }}>
            {t.site.payoffPrimary}
          </div>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,0.75)" }}>
            {t.hero.label}
          </div>
        </div>

        {/* Riga tecnica in basso */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 64, height: 4, background: "#ff7a3d" }} />
          <div style={{ fontSize: 24, letterSpacing: 2, color: "rgba(255,255,255,0.7)" }}>
            {t.site.address.toUpperCase()}
          </div>
        </div>
      </div>
    ),
    size
  );
}
