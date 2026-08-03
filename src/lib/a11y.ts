"use client";

import { useEffect, type RefObject } from "react";

/** Elementi che possono ricevere il focus da tastiera. */
const FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "iframe",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

function focusableIn(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
    // `offsetParent` nullo = elemento non renderizzato (display:none o simili):
    // includerlo farebbe atterrare il focus su qualcosa di invisibile.
    (el) => el.offsetParent !== null || el === document.activeElement
  );
}

/**
 * Confina il focus dentro `containerRef` finché `active` è true e lo
 * restituisce all'elemento che l'aveva prima, alla chiusura.
 *
 * Serve a menu fullscreen e lightbox: senza, premendo Tab il focus scivola
 * sul contenuto che sta sotto l'overlay — che l'utente vedente non vede e
 * l'utente da tastiera non riesce a raggiungere (WCAG 2.1.2 e 2.4.3).
 */
export function useFocusTrap(containerRef: RefObject<HTMLElement | null>, active: boolean) {
  useEffect(() => {
    const container = containerRef.current;
    if (!active || !container) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const items = focusableIn(container);
      if (items.length === 0) {
        e.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const current = document.activeElement;

      // Ciclo chiuso: dall'ultimo si torna al primo e viceversa.
      if (e.shiftKey && (current === first || !container.contains(current))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (current === last || !container.contains(current))) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      // Il focus torna da dove era partito: chi naviga da tastiera riprende
      // dal punto in cui si trovava, non dall'inizio della pagina.
      previouslyFocused?.focus?.();
    };
  }, [containerRef, active]);
}

export { focusableIn };
