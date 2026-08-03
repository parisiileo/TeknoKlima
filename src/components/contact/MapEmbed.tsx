"use client";

import { useState } from "react";
import { useConsent } from "@/lib/consent";
import type { Content } from "@/content";

/**
 * Mappa a caricamento su richiesta ("click to load").
 *
 * L'iframe di Google Maps installa cookie di terze parti (fra cui NID) e
 * comunica l'IP del visitatore appena viene montato: caricarlo all'apertura
 * della pagina significherebbe trattare quei dati senza consenso preventivo.
 * Finché non si preme il pulsante non parte NESSUNA richiesta verso Google —
 * il segnaposto è disegnato in CSS, non è una tile scaricata.
 *
 * Con questa scelta il sito non ha bisogno di un banner cookie: l'unico
 * cookie che resta è `tk-locale`, tecnico e quindi esente.
 */
type Props = {
  t: Content;
  /** Link alla cookie policy nella lingua corrente. */
  cookiePolicy: { href: string; label: string };
};

export function MapEmbed({ t, cookiePolicy }: Props) {
  const { thirdPartyAllowed } = useConsent();
  const [loadedOnce, setLoadedOnce] = useState(false);

  /*
   * Due strade per arrivare all'iframe, entrambe volute dall'utente:
   * il consenso salvato nelle preferenze (la mappa parte da sola a ogni
   * visita) oppure il pulsante qui sotto, che vale solo per questa volta e
   * non scrive nulla. Chi ha rifiutato non si vede sovvertita la scelta:
   * deve premere il pulsante ogni volta, ed è corretto che sia così.
   */
  const loaded = thirdPartyAllowed || loadedOnce;

  if (loaded) {
    return (
      <div className="overflow-hidden rounded-[var(--radius-card)] border border-frost-deep/60">
        <iframe
          src={t.contact.mapsEmbed}
          title={t.contact.map.frameTitle}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="h-[22rem] w-full border-0"
        />
      </div>
    );
  }

  return (
    <div className="relative flex h-[22rem] flex-col justify-end overflow-hidden rounded-[var(--radius-card)] border border-frost-deep/60 bg-deep">
      {/* Sfondo decorativo: reticolo + alone, nessun asset esterno. */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/25 blur-3xl"
      />
      {/* Segnaposto "pin" al centro */}
      <div aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[140%]">
        <svg viewBox="0 0 24 24" className="h-10 w-10 fill-cyan drop-shadow">
          <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
        </svg>
      </div>

      <div className="relative flex flex-col gap-3 bg-gradient-to-t from-deep via-deep/95 to-transparent p-6 pt-12">
        <p className="tech-label text-cyan">{t.contact.map.title}</p>
        <p className="text-sm leading-relaxed text-white/80">
          {t.contact.map.notice}{" "}
          <a
            href={cookiePolicy.href}
            className="font-medium text-cyan underline underline-offset-2 hover:text-white"
          >
            {cookiePolicy.label}
          </a>
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-2">
          <button
            type="button"
            onClick={() => setLoadedOnce(true)}
            className="rounded-full bg-cyan px-5 py-2.5 text-sm font-medium text-deep transition-colors duration-300 hover:bg-white"
          >
            {t.contact.map.load}
          </button>
          <a
            href={t.contact.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/80 underline underline-offset-2 hover:text-white"
          >
            {t.contact.map.openExternal}
          </a>
        </div>
      </div>
    </div>
  );
}
