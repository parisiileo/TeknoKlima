"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getContent, isLocale, defaultLocale, localeHref } from "@/content";
import "./globals.css";

/**
 * 404 globale, nella lingua della sezione in cui l'utente si trovava.
 *
 * Sta in root e non sotto `[locale]`: per un indirizzo che non corrisponde a
 * nessuna route, Next risale sempre al boundary di root — quello dentro il
 * segmento dinamico non viene mai raggiunto, e si finiva sulla 404 di
 * default, in inglese.
 *
 * Essendo il boundary di root non eredita il layout del sito: niente header
 * né footer, quindi la pagina porta i propri rimandi alla home e ai contatti.
 * La lingua si ricava dal path, l'unico dato disponibile qui.
 */
export default function NotFound() {
  const pathname = usePathname();
  const first = pathname.split("/")[1] ?? "";
  const locale = isLocale(first) ? first : defaultLocale;
  const t = getContent(locale);

  return (
    <main className="flex min-h-svh items-center bg-ice py-24">
      <div className="container-tk">
        <div className="flex max-w-2xl flex-col gap-5">
          <p className="tech-label text-cyan-deep">{t.notFound.label}</p>
          <h1 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-deep">
            {t.notFound.title}
          </h1>
          <p className="max-w-lg leading-relaxed text-steel">{t.notFound.text}</p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href={localeHref(locale, "/")}
              className="rounded-full bg-deep px-7 py-3.5 font-medium text-white transition-colors duration-300 hover:bg-cyan-deep"
            >
              {t.notFound.cta}
            </Link>
            <Link
              href={localeHref(locale, "/contatti")}
              className="rounded-full border border-frost-deep px-7 py-3.5 font-medium text-deep transition-colors duration-300 hover:border-cyan-deep hover:text-cyan-deep"
            >
              {t.cta.quote}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
