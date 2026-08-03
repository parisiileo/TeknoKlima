/**
 * TEKNO KLIMA — Tipi dei documenti legali (privacy e cookie policy).
 * Tenuti fuori da `Content` perché sono testi lunghi e a sé stanti: il
 * dizionario principale resta leggibile e queste pagine si aggiornano
 * senza toccarlo.
 */

import type { PageMeta } from "../types";

/** Tabella semplice (usata per l'elenco dei cookie). */
export type LegalTable = { head: string[]; rows: string[][] };

export type LegalSection = {
  heading: string;
  /** Paragrafi di testo. */
  body?: string[];
  /** Elenco puntato, reso dopo i paragrafi. */
  list?: string[];
  table?: LegalTable;
};

export type LegalDoc = {
  title: string;
  /** Es. "Ultimo aggiornamento: 2 agosto 2026" */
  updated: string;
  intro: string[];
  sections: LegalSection[];
  meta: PageMeta;
};

/**
 * Testi del banner e del pannello preferenze.
 *
 * Le due azioni principali hanno lo stesso peso visivo: le Linee guida del
 * Garante vietano di rendere "accetta" più evidente di "rifiuta", ed è per
 * questo che `acceptAll` e `onlyNecessary` sono trattate come pari grado
 * anche nei testi (nessun "continua senza accettare" in caratteri piccoli).
 */
export type CookieBannerContent = {
  /** Titolo del banner */
  title: string;
  /** Informativa breve */
  text: string;
  acceptAll: string;
  onlyNecessary: string;
  customise: string;
  /** aria-label del banner */
  aria: string;
  /**
   * aria-label della X. Le Linee guida (punto 4.1) chiedono un comando di
   * chiusura che mantenga le impostazioni predefinite: qui equivale a
   * "solo necessari", e l'etichetta lo dice esplicitamente invece di
   * limitarsi a "chiudi".
   */
  closeBannerAria: string;

  /** Pannello preferenze */
  prefsTitle: string;
  prefsText: string;
  save: string;
  close: string;
  /** Link nel footer che riapre il pannello */
  footerLink: string;
  /** Stato mostrato accanto alle categorie sempre attive */
  alwaysOn: string;

  categories: {
    necessary: { name: string; text: string };
    thirdParty: { name: string; text: string };
  };
};

export type LegalContent = {
  cookieBanner: CookieBannerContent;
  /** Etichette dei link (footer, rimandi incrociati). */
  labels: {
    privacy: string;
    cookie: string;
    backToSite: string;
    /** Nome del gruppo di link legali nel footer (per screen reader). */
    legalNav: string;
  };
  privacy: LegalDoc;
  cookie: LegalDoc;
};
