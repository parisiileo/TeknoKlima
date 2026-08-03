"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TkWordmark } from "@/components/ui/TkLogo";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/animations/gsap-config";
import { localeHref, type Content, type Locale } from "@/content";

const HeroCanvas = dynamic(
  () => import("@/components/canvas/HeroCanvas").then((m) => m.HeroCanvas),
  { ssr: false }
);

type Props = { locale: Locale; t: Content };

/**
 * Home hero: una sola impaginazione, con il titolo in due tempi.
 *
 * Label, lead, CTA e hint di scroll sono fissi; a cambiare è soltanto il
 * titolo, che all'apertura è il marchio "TEKNO KLIMA" (raccoglie l'intro) e
 * scorrendo diventa il titolo di campagna. I due titoli stanno nella stessa
 * cella di griglia, così lo slot mantiene l'altezza del titolo di campagna e
 * il resto della hero non si sposta di un pixel durante la conversione.
 *
 * La sezione è alta più di uno schermo (`.hero-runway`) e il contenuto è
 * `sticky`: nei primi centimetri di scroll un ScrollTrigger in scrub esegue la
 * conversione, poi la hero si sblocca e la pagina prosegue.
 *
 * L'entrata è in CSS puro (classi hero-line-anim / hero-fade-anim, vedi
 * globals.css): è robusta ai doppi mount di React durante il cambio pagina
 * (una timeline GSAP restava a metà lasciando il titolo invisibile). Parte "in
 * pausa" e viene avviata dalla classe `hero-go` (aggiunta dal Preloader) alla
 * fine del wipe dell'intro. GSAP anima i contenitori dei due titoli, il CSS le
 * righe interne: agiscono su elementi diversi e non si pestano i piedi.
 *
 * Senza JS, con prefers-reduced-motion o su schermi bassi il marchio non viene
 * mostrato e la hero è quella classica, a tutta altezza (vedi globals.css).
 */
export function Hero({ locale, t }: Props) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const brand = section.querySelector("[data-title-brand]");
      const copy = section.querySelector("[data-title-copy]");
      if (!brand || !copy) return;

      /*
       * Sotto i 640px di altezza (schermi piccoli, telefoni in orizzontale) la
       * hero non ci sta in uno schermo: essendo `sticky` dentro una corsa di
       * altezza fissa, l'eccedenza verrebbe ritagliata e nessuno scroll
       * potrebbe recuperarla. Lì si rinuncia al pinning e resta la hero
       * classica — stessa via d'uscita di prefers-reduced-motion.
       * La soglia è replicata in globals.css per la parte di layout.
       */
      const mm = gsap.matchMedia();
      mm.add("(min-height: 640px)", () => {
        const tl = gsap.timeline();
        // Sovrapposizione corta: il marchio è quasi sparito quando entra il
        // titolo, così i due non si leggono mai insieme.
        tl.to(brand, { opacity: 0, yPercent: -18, scale: 0.96, duration: 0.4, ease: "power2.in" }, 0)
          .fromTo(
            copy,
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
            0.32
          )
          // Coda ferma: dopo la conversione la hero resta un attimo leggibile
          // prima di scorrere via.
          .to({}, { duration: 0.45 });

        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.4,
          animation: tl,
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hero-runway relative">
      <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden">
        {/* Sfondo: gradienti aria + wake CSS + canvas particelle */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_20%,rgba(31,168,220,0.14),transparent),radial-gradient(45%_40%_at_15%_85%,rgba(255,122,61,0.08),transparent)]"
        />
        <div aria-hidden className="hero-wake absolute inset-0 overflow-hidden" />
        <HeroCanvas />

        {/*
         * Padding ridotto sotto md: la hero è sticky dentro una corsa di
         * altezza fissa, quindi ciò che sborda da 100svh verrebbe ritagliato e
         * non più raggiungibile con lo scroll.
         */}
        <div className="container-tk relative z-10 w-full pb-16 pt-28 md:pb-24 md:pt-36">
          <p className="hero-fade-anim tech-label mb-6 text-steel" style={{ animationDelay: "0.4s" }}>
            {t.hero.label}
          </p>

          {/*
           * Slot del titolo: i due titoli condividono la cella, quindi la sua
           * altezza è quella (maggiore) del titolo di campagna e la conversione
           * non muove nulla di ciò che sta sotto. Il marchio è centrato nella
           * fascia perché occupa una riga sola contro le due dell'h1.
           */}
          <div className="grid">
            <div
              data-title-brand
              className="hero-title-brand pointer-events-none col-start-1 row-start-1 self-center"
            >
              <span className="block overflow-hidden">
                <TkWordmark
                  className="hero-line-anim block w-[min(100%,48rem)] will-change-transform"
                  style={{ animationDelay: "0.15s" }}
                />
              </span>
            </div>

            <h1
              data-title-copy
              className="hero-title-copy font-display col-start-1 row-start-1 max-w-5xl text-[clamp(2.9rem,8vw,7rem)] font-semibold leading-[1.02] tracking-tight text-deep"
            >
              <span className="block overflow-hidden">
                <span
                  className="hero-line-anim inline-block will-change-transform"
                  style={{ animationDelay: "0.15s" }}
                >
                  {t.hero.line1}
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="hero-line-anim inline-block will-change-transform"
                  style={{ animationDelay: "0.27s" }}
                >
                  {t.hero.line2Pre}
                  <span className="text-cyan-deep">{t.hero.line2Highlight}</span>
                </span>
              </span>
            </h1>
          </div>

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
          <span className="tech-label text-steel">{t.hero.scroll}</span>
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-cyan to-transparent" />
        </div>
      </div>
    </section>
  );
}
