import { legalIt } from "./it";
import { legalDe } from "./de";
import { legalEn } from "./en";
import type { LegalContent } from "./types";
import type { Content, Locale } from "../types";

const legalDictionaries: Record<Locale, LegalContent> = {
  it: legalIt,
  de: legalDe,
  en: legalEn,
};

export function getLegal(locale: Locale): LegalContent {
  return legalDictionaries[locale];
}

/**
 * Sostituisce i segnaposto dei dati aziendali con i valori reali.
 * I testi legali ripetono ragione sociale, sede e P.IVA in più punti e in tre
 * lingue: tenerli come token evita che una modifica ai dati camerali ne lasci
 * indietro qualcuno.
 */
export function fillLegalTokens(text: string, site: Content["site"]): string {
  const values: Record<string, string> = {
    legalName: site.legalName,
    address: site.address,
    vat: site.vat,
    email: site.email,
    phone: site.phone,
  };
  return text.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}

/** Slug delle due pagine legali, identici in tutte le lingue. */
export const legalSlugs = { privacy: "privacy", cookie: "cookie" } as const;

export type { LegalContent, LegalDoc, LegalSection, CookieBannerContent } from "./types";
