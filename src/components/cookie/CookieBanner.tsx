"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useConsent } from "@/lib/consent";
import { useFocusTrap } from "@/lib/a11y";
import type { CookieBannerContent } from "@/content/legal";

type Props = {
  c: CookieBannerContent;
  /** Link alle due informative, nella lingua corrente. */
  links: { cookie: { href: string; label: string }; privacy: { href: string; label: string } };
};

/**
 * Banner cookie + pannello preferenze.
 *
 * Scelte dettate dalle Linee guida del Garante (giugno 2021):
 *
 * - "Accetta tutto" e "Solo necessari" hanno lo STESSO peso visivo. Rendere
 *   il rifiuto meno evidente dell'accettazione è il dark pattern più
 *   sanzionato, e il consenso così raccolto non è valido.
 * - Non c'è una X che chiude senza scegliere: chiudere senza esprimersi
 *   equivarrebbe a un rifiuto implicito mal documentato. Le tre azioni sono
 *   esplicite.
 * - Nessuna casella pre-spuntata: nel pannello, i contenuti di terze parti
 *   partono disattivati (art. 7 GDPR).
 * - Lo scroll non vale come consenso: il banner non si chiude da solo.
 * - Il sito resta pienamente utilizzabile mentre il banner è aperto — da qui
 *   `aria-modal="false"` e nessun blocco dello scroll: non è un muro.
 */
export function CookieBanner({ c, links }: Props) {
  const { consent, ready, accept, preferencesOpen, openPreferences, closePreferences } =
    useConsent();
  const [thirdParty, setThirdParty] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  /* Il pannello preferenze è invece modale: è una scelta puntuale che va
     completata, e il focus non deve uscirne. */
  useFocusTrap(panelRef, preferencesOpen);

  /* Riaprendo il pannello, gli interruttori mostrano la scelta in vigore. */
  useEffect(() => {
    if (preferencesOpen) setThirdParty(consent === "all");
  }, [preferencesOpen, consent]);

  useEffect(() => {
    if (!preferencesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreferences();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [preferencesOpen, closePreferences]);

  /* Finché non abbiamo letto il cookie non mostriamo nulla: evita che il
     banner lampeggi a chi ha già scelto. */
  if (!ready) return null;

  const showBanner = consent === null && !preferencesOpen;

  return (
    <>
      {showBanner && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label={c.aria}
          className="fixed inset-x-0 bottom-0 z-[95] p-4 sm:p-5"
          style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
        >
          <div className="container-tk">
            <div className="relative ml-auto max-w-2xl rounded-[var(--radius-card)] border border-frost-deep bg-white p-6 shadow-[0_16px_48px_rgba(11,31,51,0.22)] sm:p-7">
              {/*
               * La X richiesta dal punto 4.1 delle Linee guida: chiude
               * mantenendo le impostazioni predefinite, cioè senza consenso
               * ai contenuti di terze parti. L'aria-label lo dice a chiare
               * lettere invece di limitarsi a "chiudi", così l'effetto della
               * chiusura non è mai implicito.
               */}
              <button
                type="button"
                onClick={() => accept("necessary")}
                aria-label={c.closeBannerAria}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-steel transition-colors hover:bg-frost hover:text-deep"
              >
                <span aria-hidden className="text-lg leading-none">✕</span>
              </button>

              <h2 className="font-display max-w-[85%] text-lg font-semibold text-deep">{c.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-steel">{c.text}</p>

              <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                <Link href={links.cookie.href} className="text-cyan-deep underline underline-offset-2 hover:text-deep">
                  {links.cookie.label}
                </Link>
                <Link href={links.privacy.href} className="text-cyan-deep underline underline-offset-2 hover:text-deep">
                  {links.privacy.label}
                </Link>
              </p>

              {/* Stesso peso visivo per accettare e rifiutare. */}
              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => accept("all")}
                  className="rounded-full bg-deep px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-cyan-deep"
                >
                  {c.acceptAll}
                </button>
                <button
                  type="button"
                  onClick={() => accept("necessary")}
                  className="rounded-full border border-deep px-6 py-3 text-sm font-medium text-deep transition-colors duration-300 hover:border-cyan-deep hover:text-cyan-deep"
                >
                  {c.onlyNecessary}
                </button>
                <button
                  type="button"
                  onClick={openPreferences}
                  className="px-2 py-3 text-sm font-medium text-steel underline underline-offset-2 transition-colors hover:text-deep sm:ml-auto"
                >
                  {c.customise}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {preferencesOpen && (
        <div className="fixed inset-0 z-[96] flex items-end justify-center bg-deep/60 p-4 backdrop-blur-sm sm:items-center">
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-prefs-title"
            className="max-h-[85svh] w-full max-w-xl overflow-y-auto rounded-[var(--radius-card)] bg-white p-6 shadow-2xl sm:p-8"
          >
            <h2 id="cookie-prefs-title" className="font-display text-xl font-semibold text-deep">
              {c.prefsTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-steel">{c.prefsText}</p>

            <div className="mt-7 flex flex-col gap-4">
              {/* Necessari: sempre attivi, quindi mostrati come stato di
                  fatto e non come interruttore disattivato — un checkbox
                  spento e non modificabile confonde e basta. */}
              <div className="rounded-xl border border-frost-deep bg-frost/40 p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display font-semibold text-deep">
                    {c.categories.necessary.name}
                  </h3>
                  <span className="tech-label shrink-0 rounded-full bg-deep px-3 py-1 text-white">
                    {c.alwaysOn}
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-steel">
                  {c.categories.necessary.text}
                </p>
              </div>

              <div className="rounded-xl border border-frost-deep p-5">
                <label htmlFor="consent-third-party" className="flex items-start justify-between gap-4">
                  <h3 className="font-display font-semibold text-deep">
                    {c.categories.thirdParty.name}
                  </h3>
                  <input
                    id="consent-third-party"
                    type="checkbox"
                    checked={thirdParty}
                    onChange={(e) => setThirdParty(e.target.checked)}
                    className="mt-1 h-5 w-5 shrink-0 accent-cyan-deep"
                  />
                </label>
                <p className="mt-2.5 text-sm leading-relaxed text-steel">
                  {c.categories.thirdParty.text}
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
              <button
                type="button"
                onClick={() => accept(thirdParty ? "all" : "necessary")}
                className="rounded-full bg-deep px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-cyan-deep"
              >
                {c.save}
              </button>
              <button
                type="button"
                onClick={closePreferences}
                className="rounded-full border border-frost-deep px-6 py-3 text-sm font-medium text-steel transition-colors duration-300 hover:border-deep hover:text-deep"
              >
                {c.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/** Link nel footer che riapre il pannello: il consenso dev'essere sempre revocabile. */
export function CookiePreferencesLink({ label }: { label: string }) {
  const { openPreferences } = useConsent();
  return (
    <button type="button" onClick={openPreferences} className="w-fit text-left hover:text-white">
      {label}
    </button>
  );
}
