"use client";

import dynamic from "next/dynamic";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { localeHref, type Content, type Locale } from "@/content";

const HeroCanvas = dynamic(
  () => import("@/components/canvas/HeroCanvas").then((m) => m.HeroCanvas),
  { ssr: false }
);

type Props = { locale: Locale; t: Content };

/**
 * Home hero. L'entrata è in CSS puro (classi hero-line-anim / hero-fade-anim,
 * vedi globals.css): è robusta ai doppi mount di React durante il cambio
 * pagina (una timeline GSAP restava a metà lasciando il titolo invisibile).
 * L'animazione parte "in pausa" e viene avviata dalla classe `hero-go`
 * (aggiunta dal Preloader): alla prima visita è sincronizzata con la fine del
 * wipe, nelle navigazioni successive parte subito.
 */
export function Hero({ locale, t }: Props) {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Sfondo: gradienti aria + wake CSS + canvas particelle */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_20%,rgba(31,168,220,0.14),transparent),radial-gradient(45%_40%_at_15%_85%,rgba(255,122,61,0.08),transparent)]"
      />
      <div aria-hidden className="hero-wake absolute inset-0 overflow-hidden" />
      <HeroCanvas />

      <div className="container-tk relative z-10 pb-24 pt-36">
        <p className="hero-fade-anim tech-label mb-6 text-steel" style={{ animationDelay: "0.4s" }}>
          <span className="text-cyan-deep">BZ 39100</span> — {t.hero.label}
        </p>

        <h1 className="font-display max-w-5xl text-[clamp(2.9rem,8vw,7rem)] font-semibold leading-[1.02] tracking-tight text-deep">
          <span className="block overflow-hidden">
            <span className="hero-line-anim inline-block will-change-transform" style={{ animationDelay: "0.15s" }}>
              {t.hero.line1}
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line-anim inline-block will-change-transform" style={{ animationDelay: "0.27s" }}>
              {t.hero.line2Pre}
              <span className="text-cyan-deep">{t.hero.line2Highlight}</span>
            </span>
          </span>
        </h1>

        <p
          className="hero-fade-anim mt-7 max-w-xl text-[var(--text-lead)] leading-relaxed text-steel"
          style={{ animationDelay: "0.5s" }}
        >
          {t.hero.lead}
        </p>

        <div
          className="hero-fade-anim mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.6s" }}
        >
          <MagneticButton href={localeHref(locale, "/contatti")}>{t.cta.quote}</MagneticButton>
          <MagneticButton href={localeHref(locale, "/climatizzazione")} variant="outline">
            {t.hero.ctaServices}
          </MagneticButton>
        </div>
      </div>

      {/* Hint scroll — fade solo-opacità per non rompere il centraggio -translate-x-1/2 */}
      <div
        aria-hidden
        className="hero-fadeop-anim absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        style={{ animationDelay: "0.75s" }}
      >
        <span className="tech-label text-steel/70">{t.hero.scroll}</span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-cyan to-transparent" />
      </div>
    </section>
  );
}
