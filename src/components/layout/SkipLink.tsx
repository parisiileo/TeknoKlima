/**
 * "Salta al contenuto" — primo elemento focalizzabile della pagina.
 *
 * Invisibile finché non riceve il focus da tastiera (`sr-only` + `focus:`):
 * senza, chi naviga con Tab deve attraversare header, nav e switcher lingua
 * a ogni cambio pagina prima di arrivare al contenuto (WCAG 2.4.1, livello A).
 *
 * Punta a `#main`, l'id del <main> nel layout.
 */
export function SkipLink({ label }: { label: string }) {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-deep focus:px-6 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
    >
      {label}
    </a>
  );
}
