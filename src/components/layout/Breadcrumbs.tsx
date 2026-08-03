import Link from "next/link";
import { localeHref, type Content, type Locale } from "@/content";
import type { Crumb } from "@/lib/schema";

type Props = {
  locale: Locale;
  t: Content;
  crumbs: Crumb[];
  /** Variante per le hero su fondo scuro (pagine servizio). */
  light?: boolean;
};

/**
 * Percorso di navigazione visibile.
 *
 * Serve tanto all'utente quanto a Google: il `BreadcrumbList` in JSON-LD non
 * va dichiarato se il percorso non esiste anche in pagina — le linee guida
 * chiedono che il markup descriva contenuto realmente visibile. È inoltre il
 * markup che sostituisce l'URL grezzo con "Tekno Klima › Climatizzazione"
 * sotto il titolo nei risultati di ricerca.
 *
 * L'ultima tappa è la pagina corrente: niente link, `aria-current="page"`.
 */
export function Breadcrumbs({ locale, t, crumbs, light = false }: Props) {
  /* Contrasti verificati su entrambi i fondi: white/70 su deep e steel su
     ice stanno sopra 4.5:1, la soglia AA per il testo piccolo. */
  const base = light ? "text-white/70" : "text-steel";
  const current = light ? "text-white" : "text-deep";
  const hover = light ? "hover:text-white" : "hover:text-cyan-deep";

  return (
    <nav aria-label={t.a11y.breadcrumb}>
      <ol className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs ${base}`}>
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>›</span>}
              {isLast ? (
                <span aria-current="page" className={`font-medium ${current}`}>
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={localeHref(locale, crumb.path)}
                  className={`transition-colors ${hover}`}
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
