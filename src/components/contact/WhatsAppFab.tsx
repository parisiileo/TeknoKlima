"use client";

import { useEffect, useState } from "react";
import { WhatsAppGlyph, WA_GREEN, waLink } from "@/components/ui/WhatsAppGlyph";

type Props = {
  number: string;
  /** Etichetta accessibile e testo della pillola espansa. */
  label: string;
};

/**
 * Pulsante WhatsApp flottante, presente su tutte le pagine.
 *
 * Comparsa ritardata: resta nascosto finché non si è superata la prima
 * schermata. La hero è il momento in cui il sito si presenta, e un pulsante
 * fisso sopra la sua CTA la indebolirebbe; compare quando l'utente ha già
 * cominciato a leggere ed è quindi più vicino a decidere di scrivere.
 *
 * Stratificazione: sta a z-60, cioè SOTTO header (70), menu mobile (72),
 * wipe di transizione (80), lightbox (85) e preloader (90). Così viene
 * coperto da tutto ciò che deve coprirlo senza bisogno di gestirlo a mano
 * per ogni overlay.
 */
export function WhatsAppFab({ number, label }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    /* Soglia legata all'altezza dello schermo, non a un valore in pixel:
       su un telefono la prima schermata finisce molto prima che su un
       monitor, e una soglia fissa comparirebbe troppo presto o troppo tardi. */
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <a
      href={waLink(number)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      /* `inert` quando è nascosto: senza, resterebbe raggiungibile con Tab
         pur essendo invisibile e fuori scala. */
      inert={!visible}
      /* `motion-reduce:transition-none` invece di uno stato React: la
         preferenza è nota già al primo paint, mentre un `useEffect`
         lascerebbe passare un frame animato prima di disattivarla. */
      className={`group fixed z-[60] flex items-center gap-0 overflow-hidden rounded-full text-white shadow-[0_8px_28px_rgba(11,31,51,0.28)] transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      style={{
        background: WA_GREEN,
        /* Safe area: su iPhone la barra gesti mangia il bordo inferiore. */
        right: "max(1.25rem, env(safe-area-inset-right))",
        bottom: "max(1.25rem, env(safe-area-inset-bottom))",
      }}
    >
      {/* L'icona è il bersaglio minimo: 56px, sopra i 44px raccomandati. */}
      <span className="flex h-14 w-14 shrink-0 items-center justify-center">
        <WhatsAppGlyph className="h-7 w-7" />
      </span>

      {/*
       * La pillola si apre al passaggio del mouse e al focus da tastiera.
       * Solo da `sm` in su: sul telefono resta il cerchio, che occupa meno
       * schermo e non copre il contenuto mentre si scorre.
       */}
      <span className="hidden max-w-0 whitespace-nowrap text-sm font-medium transition-[max-width,padding] duration-500 ease-out group-hover:max-w-xs group-hover:pr-6 group-focus-visible:max-w-xs group-focus-visible:pr-6 motion-reduce:transition-none sm:block">
        {label}
      </span>
    </a>
  );
}
