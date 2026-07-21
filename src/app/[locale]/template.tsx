/**
 * Template pass-through: Next monta una NUOVA istanza della pagina a ogni
 * navigazione client. Senza, React riusa lo stesso albero (es. tra le 3
 * pagine servizio) e le animazioni d'ingresso GSAP — legate al mount —
 * non ripartono mai: il testo resta nascosto dallo stato iniziale anti-FOUC.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return children;
}
