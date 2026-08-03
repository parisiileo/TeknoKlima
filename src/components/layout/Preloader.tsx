"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/animations/gsap-config";
import { TkMark } from "@/components/ui/TkLogo";

/**
 * Intro rapida (~1.2s): il simbolo "TK" si compone — l'asta antracite entra da
 * sinistra, il chevron blu da destra — poi il pannello sale scoprendo la hero,
 * che riprende il discorso mostrando la dicitura "TEKNO KLIMA" per intero.
 *
 * - parte una volta per sessione: alla decima pagina aperta nella stessa
 *   visita l'intro non aggiunge nulla e ritarda solo il primo contenuto utile
 * - renderizzata anche lato server: niente lampo di contenuto prima dell'intro
 * - skippabile con click o tasto; saltata con prefers-reduced-motion
 * - senza JS il pannello è nascosto dal <noscript> in fondo al file
 */
const SESSION_KEY = "tk-intro-seen";

export function Preloader({ tagline }: { tagline: string }) {
  // Visibile già al primo paint (anche in SSR): l'unico modo per non far
  // vedere la pagina prima dell'intro.
  const [show, setShow] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  /**
   * Solo la home ha la hero in due tempi con cui l'intro si raccorda. Letto
   * dalla location (non da usePathname) perché conta la pagina di atterraggio
   * e il valore deve restare fisso per tutta la vita del componente.
   */
  const [isHome] = useState(
    () => typeof window !== "undefined" && /^\/[a-z]{2}\/?$/.test(window.location.pathname)
  );

  useEffect(() => {
    const done = () => {
      setShow(false);
      // Via libera all'entrata della hero (in pausa in CSS, vedi globals.css)...
      document.documentElement.classList.add("hero-go");
      // ...e ricalcolo delle soglie dei ScrollTrigger creati sotto il pannello.
      window.dispatchEvent(new Event("tk:preloader-done"));
    };

    /*
     * Già vista in questa sessione (o movimento ridotto): via il pannello
     * subito, senza timeline. `sessionStorage` e non `localStorage`: chi
     * torna il giorno dopo rivede l'intro, chi sta navigando il sito no.
     * In lettura difensiva perché in navigazione privata Safari può alzare
     * un'eccezione sul solo accesso.
     */
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      /* storage non disponibile: l'intro parte, è il comportamento di prima */
    }

    if (seen || prefersReducedMotion()) {
      done();
      return;
    }

    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* niente da fare: al massimo l'intro riparte */
    }

    // In home l'intro consegna il testimone allo stage 1 della hero: se il
    // browser rimettesse lo scroll dov'era, il wipe scoprirebbe la pagina già
    // a metà conversione. Sulle altre pagine la posizione va invece rispettata.
    if (isHome) {
      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }

    const root = rootRef.current;
    if (!root) return;

    const tl = gsap.timeline({ onComplete: done });
    tl.fromTo(
      root.querySelector("[data-mark]"),
      { scale: 0.88, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" },
      0
    )
      .fromTo(
        root.querySelector("[data-tk-t]"),
        { xPercent: -26, yPercent: 8, opacity: 0 },
        { xPercent: 0, yPercent: 0, opacity: 1, duration: 0.55, ease: "power3.out" },
        0
      )
      .fromTo(
        root.querySelector("[data-tk-k]"),
        { xPercent: 26, yPercent: -8, opacity: 0 },
        { xPercent: 0, yPercent: 0, opacity: 1, duration: 0.55, ease: "power3.out" },
        0.07
      )
      .fromTo(
        root.querySelector("[data-tagline]"),
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        0.32
      )
      .to(root, { yPercent: -100, duration: 0.55, ease: "power4.inOut" }, "+=0.16");

    // Skip: click o qualunque tasto → salta alla fine
    const skip = () => tl.progress(1);
    root.addEventListener("click", skip);
    window.addEventListener("keydown", skip);

    return () => {
      root.removeEventListener("click", skip);
      window.removeEventListener("keydown", skip);
      tl.kill();
    };
    // `isHome` viene da uno useState senza setter: è costante, l'effetto resta
    // a esecuzione singola.
  }, [isHome]);

  /*
   * Scroll bloccato finché il pannello copre la home: senza, si potrebbe
   * arrivare al wipe già a metà conversione della hero. Sulle pagine interne
   * niente lock — `overflow: hidden` azzera lo scroll e vanificherebbe il
   * ripristino della posizione al reload.
   */
  useEffect(() => {
    if (!show || !isHome) return;
    document.documentElement.classList.add("tk-locked");
    return () => document.documentElement.classList.remove("tk-locked");
  }, [show, isHome]);

  if (!show) return null;

  return (
    <>
      <div
        ref={rootRef}
        role="presentation"
        aria-hidden
        className="tk-preloader fixed inset-0 z-[90] flex cursor-pointer flex-col items-center justify-center gap-7 bg-white"
      >
        {/* Fondo chiaro: il marchio va mostrato nei suoi colori ufficiali,
            non in negativo — è il momento in cui si presenta. */}
        <div data-mark className="h-[clamp(4.5rem,14vw,8.5rem)]">
          <TkMark animatable className="h-full w-auto overflow-visible" />
        </div>
        <p data-tagline className="tech-label text-steel">
          {tagline}
        </p>
      </div>
      {/* Senza JS la timeline non parte mai: il pannello non deve esistere. */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: "<style>.tk-preloader{display:none!important}</style>",
        }}
      />
    </>
  );
}
