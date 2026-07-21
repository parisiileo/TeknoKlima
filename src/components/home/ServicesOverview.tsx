"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/animations/gsap-config";
import { useIsoLayoutEffect } from "@/lib/animations/hooks";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HighlightTitle } from "@/components/ui/HighlightTitle";
import { localeHref, type Content, type Locale } from "@/content";

type Props = { locale: Locale; t: Content };

/** Icona per servizio: tratto singolo, coerente con lo stile tecnico del sito. */
function ServiceIcon({ slug }: { slug: string }) {
  const common = { strokeWidth: 1.4, stroke: "currentColor", fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (slug === "climatizzazione") {
    return (
      <svg viewBox="0 0 32 32" width="28" height="28" {...common}>
        <path d="M16 3v26M6.5 8l19 16M25.5 8l-19 16M3 16h26" />
        <path d="M16 3l-3 3M16 3l3 3M16 29l-3-3M16 29l3-3" />
      </svg>
    );
  }
  if (slug === "impianti-elettrici") {
    return (
      <svg viewBox="0 0 32 32" width="28" height="28" {...common}>
        <path d="M17.5 3 7 18h8l-1.5 11L25 14h-8l0.5-11Z" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" {...common}>
      <path d="M16 4a9 9 0 0 0-5 16.5c1 .8 1.5 1.7 1.5 2.9V25h7v-1.6c0-1.2.5-2.1 1.5-2.9A9 9 0 0 0 16 4Z" />
      <path d="M13 28.5h6M13.8 25h4.4" />
    </svg>
  );
}

/**
 * Sezione servizi pinnata: su desktop (lg+) il blocco resta fisso a
 * viewport pieno mentre le card scorrono orizzontalmente (scrub), con
 * corsa allungata, snap per card e un chiudi-pista finale a tema
 * contatti — così la scia di scroll ha un inizio, un ritmo e una fine.
 * Su mobile: stack verticale senza pin.
 *
 * NB: il setup/cleanup DEVE stare in un layout effect — il pin di
 * ScrollTrigger ri-parenta la sezione in un pin-spacer e la cleanup
 * deve ripristinare il DOM prima che React lo smonti (altrimenti
 * NotFoundError su removeChild al cambio pagina).
 */
export function ServicesOverview({ locale, t }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const barFillRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const panelCount = t.services.length + 1; // + pannello di chiusura

  useIsoLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || prefersReducedMotion()) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      // Allinea la prima card al testo dell'intestazione: su viewport
      // larghi il titolo è centrato dentro container-tk (max 90rem),
      // quindi la card deve partire con lo stesso inset a sinistra e
      // non a filo gutter. Ricalcolato a ogni refresh (resize).
      const alignTrack = () => {
        const left = headerRef.current?.getBoundingClientRect().left ?? 0;
        track.style.paddingLeft = `${Math.max(0, Math.round(left))}px`;
      };
      alignTrack();
      ScrollTrigger.addEventListener("refreshInit", alignTrack);

      // Distanza reale da percorrere: contenuto che eccede il viewport
      const getDistance = () => Math.max(0, track.scrollWidth - track.clientWidth);
      // Corsa allungata: più scroll fisico per lo stesso spostamento →
      // scrub più lento e leggibile, mai "scattante".
      const RUN_MULTIPLIER = 1.6;

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance() * RUN_MULTIPLIER}`,
          pin: true,
          scrub: 1.1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: (value) => Math.round(value * (panelCount - 1)) / (panelCount - 1),
            duration: { min: 0.2, max: 0.5 },
            ease: "power2.inOut",
          },
          onUpdate: (self) => {
            if (barFillRef.current) barFillRef.current.style.width = `${self.progress * 100}%`;
            const active = Math.round(self.progress * (panelCount - 1));
            dotRefs.current.forEach((dot, i) => {
              if (!dot) return;
              dot.style.opacity = i <= active ? "1" : "0.35";
              dot.style.transform = i === active ? "scale(1.35)" : "scale(1)";
            });
          },
        },
      });
      // mm.revert() (nella cleanup dell'effect) ripristina tween, trigger e pin-spacer
      return () => {
        ScrollTrigger.removeEventListener("refreshInit", alignTrack);
        track.style.paddingLeft = "";
      };
    });

    return () => mm.revert();
  }, [panelCount]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-frost py-20 lg:flex lg:h-svh lg:flex-col lg:justify-center lg:gap-10 lg:py-0"
    >
      {/* Stessa scia dell'hero, molto più tenue: continuità visiva tra le sezioni */}
      <div aria-hidden className="hero-wake pointer-events-none absolute inset-0 opacity-[0.12]" />

      <div className="container-tk relative z-10 mb-10 flex flex-col gap-5 lg:mb-0">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div ref={headerRef} className="flex flex-col gap-5">
            <SectionLabel num="01">{t.servicesSection.label}</SectionLabel>
            <h2 className="font-display max-w-3xl text-[var(--text-h2)] font-semibold leading-[1.05] text-deep">
              <HighlightTitle title={t.servicesSection.title} />
            </h2>
          </div>

          {/* Indicatore di avanzamento: solo dove il pin/scrub è attivo */}
          <div className="hidden shrink-0 flex-col items-end gap-2.5 lg:flex">
            <div className="flex items-center gap-2" aria-hidden>
              {Array.from({ length: panelCount }, (_, i) => (
                <span
                  key={i}
                  ref={(el) => {
                    dotRefs.current[i] = el;
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-cyan-deep transition-[opacity,transform] duration-200"
                  style={{ opacity: i === 0 ? 1 : 0.35 }}
                />
              ))}
            </div>
            <div className="h-px w-40 overflow-hidden bg-frost-deep">
              <div
                ref={barFillRef}
                className="h-full w-0 bg-gradient-to-r from-cyan-deep to-cyan"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Track full-bleed: clientWidth = viewport → distanza corretta */}
      <div
        ref={trackRef}
        className="relative z-10 flex w-full flex-col gap-6 px-[var(--gutter)] will-change-transform lg:flex-row lg:items-stretch lg:gap-8"
      >
        {t.services.map((s) => (
          <article
            key={s.slug}
            className="group relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-[var(--radius-card)] bg-ice p-8 shadow-[0_1px_2px_rgba(11,31,51,0.06)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(11,31,51,0.14)] lg:h-[min(26rem,58svh)] lg:w-[38rem] lg:shrink-0 lg:p-10"
          >
            {/* Numero fantasma: grande, in trasparenza, dà peso editoriale alla card */}
            <span
              aria-hidden
              className="font-display pointer-events-none absolute -right-3 -top-8 select-none text-[9rem] font-semibold leading-none text-deep/[0.04]"
            >
              {s.num}
            </span>
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(31,168,220,0.16),transparent_70%)] transition-transform duration-500 group-hover:scale-150"
            />
            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-deep/10 text-cyan-deep transition-colors duration-300 group-hover:bg-cyan-deep group-hover:text-ice">
                  <ServiceIcon slug={s.slug} />
                </span>
                <p className="tech-label text-cyan-deep">{s.num}</p>
              </div>
              <h3 className="font-display mt-5 text-[var(--text-h3)] font-semibold text-deep">
                {s.title}
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-steel">{s.short}</p>
            </div>
            <Link
              href={localeHref(locale, `/${s.slug}`)}
              className="group/link relative mt-8 inline-flex w-fit items-center gap-2 font-medium text-deep transition-colors hover:text-cyan-deep"
            >
              {t.cta.discover}
              <span aria-hidden className="transition-transform duration-300 group-hover/link:translate-x-1.5">
                →
              </span>
              {/* Estende il click all'intera card */}
              <span className="absolute -inset-x-8 -inset-y-8" aria-hidden />
            </Link>
          </article>
        ))}

        {/* Pannello di chiusura: dà un vero traguardo alla corsa orizzontale */}
        <article className="relative flex min-h-[22rem] shrink-0 flex-col justify-between overflow-hidden rounded-[var(--radius-card)] bg-deep p-8 text-ice lg:h-[min(26rem,58svh)] lg:w-[30rem] lg:p-10">
          <div aria-hidden className="hero-wake absolute inset-0 opacity-30" />
          <div
            aria-hidden
            className="absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(31,168,220,0.35),transparent_70%)]"
          />
          <p className="tech-label relative text-cyan">{t.contactStrip.label}</p>
          <div className="relative">
            <h3 className="font-display text-[var(--text-h3)] font-semibold leading-[1.1]">
              <HighlightTitle title={t.contactStrip.title} />
            </h3>
            <p className="mt-4 max-w-sm leading-relaxed text-ice/70">{t.contactStrip.text}</p>
          </div>
          <Link
            href={localeHref(locale, "/contatti")}
            className="group/link relative mt-8 inline-flex w-fit items-center gap-2 font-medium text-ice transition-colors hover:text-cyan"
          >
            {t.cta.quote}
            <span aria-hidden className="transition-transform duration-300 group-hover/link:translate-x-1.5">
              →
            </span>
            <span className="absolute -inset-x-8 -inset-y-8" aria-hidden />
          </Link>
        </article>

        {/* Spacer finale: respiro a fine corsa */}
        <div aria-hidden className="hidden w-[calc(var(--gutter)*2)] shrink-0 lg:block" />
      </div>
    </section>
  );
}
