"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

/**
 * Gestione del consenso ai cookie e ai contenuti di terze parti.
 *
 * Due sole categorie, perché due sono quelle realmente presenti. Non esistono
 * voci "statistica" o "marketing": il sito non ha analytics né pixel, e
 * dichiarare categorie vuote per far sembrare il banner più completo sarebbe
 * un'informazione falsa resa all'utente.
 *
 * - `necessary`  cookie tecnici, sempre attivi, esenti da consenso
 * - `thirdParty` contenuti esterni incorporati (oggi solo la mappa Google)
 *
 * La scelta vive in un cookie e non in localStorage: è la forma che il
 * Garante considera propria del consenso (documentabile, con una scadenza
 * esplicita) ed è leggibile anche lato server, se un domani servisse.
 */

export const CONSENT_COOKIE = "tk-consent";
/** Sei mesi: oltre, il consenso va richiesto di nuovo. */
export const CONSENT_MAX_AGE_DAYS = 180;

export type ConsentValue = "necessary" | "all";

/** `null` = scelta non ancora espressa: il banner deve comparire. */
export type ConsentState = ConsentValue | null;

type ConsentContext = {
  consent: ConsentState;
  /** True quando i contenuti di terze parti possono essere caricati. */
  thirdPartyAllowed: boolean;
  accept: (value: ConsentValue) => void;
  /** Riapre il pannello preferenze (link nel footer). */
  openPreferences: () => void;
  preferencesOpen: boolean;
  closePreferences: () => void;
  /** False finché non abbiamo letto il cookie: evita di mostrare il banner
   *  a chi ha già scelto, per una frazione di secondo, al primo paint. */
  ready: boolean;
};

const Ctx = createContext<ConsentContext | null>(null);

function readConsent(): ConsentState {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)tk-consent=([^;]*)/);
  const value = match?.[1];
  return value === "all" || value === "necessary" ? value : null;
}

function writeConsent(value: ConsentValue) {
  const maxAge = CONSENT_MAX_AGE_DAYS * 24 * 60 * 60;
  /* `SameSite=Lax` è sufficiente: il cookie non serve in contesti cross-site.
     `Secure` solo in HTTPS, altrimenti in sviluppo su http non verrebbe
     scritto affatto. */
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${value}; path=/; max-age=${maxAge}; SameSite=Lax${secure}`;
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [ready, setReady] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
    setReady(true);
  }, []);

  const accept = useCallback((value: ConsentValue) => {
    writeConsent(value);
    setConsent(value);
    setPreferencesOpen(false);
  }, []);

  const value = useMemo<ConsentContext>(
    () => ({
      consent,
      thirdPartyAllowed: consent === "all",
      accept,
      openPreferences: () => setPreferencesOpen(true),
      preferencesOpen,
      closePreferences: () => setPreferencesOpen(false),
      ready,
    }),
    [consent, accept, preferencesOpen, ready]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useConsent(): ConsentContext {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useConsent va usato dentro <ConsentProvider>");
  return ctx;
}
