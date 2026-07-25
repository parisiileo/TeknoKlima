import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { HighlightTitle } from "@/components/ui/HighlightTitle";
import type { Content } from "@/content";

/** Cinque stelle piene. */
function Stars({ aria }: { aria: string }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={aria}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" aria-hidden className="h-4 w-4 fill-[#fbbc05]">
          <path d="M10 1.5l2.47 5.26 5.78.77-4.25 3.98 1.08 5.73L10 14.7l-5.08 2.54 1.08-5.73L1.75 7.53l5.78-.77z" />
        </svg>
      ))}
    </div>
  );
}

/** Iniziale su avatar colorato, in stile Google. */
function Avatar({ name }: { name: string }) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan/15 font-display text-lg font-semibold text-cyan-deep">
      {initial}
    </span>
  );
}

/** Recensioni reali Google — tutte 5 stelle. */
export function Reviews({ t }: { t: Content }) {
  return (
    <section className="section-y bg-frost">
      <div className="container-tk">
        <div className="mb-12 flex flex-col gap-5">
          <SectionLabel num="04">{t.reviews.label}</SectionLabel>
          <Reveal
            as="h2"
            className="font-display max-w-2xl text-[var(--text-h2)] font-semibold leading-[1.05] text-deep"
          >
            <HighlightTitle title={t.reviews.title} />
          </Reveal>
        </div>
      </div>

      {/*
       * Riga unica: le card escono dal container e arrivano ai bordi dello
       * schermo, dove sfumano (vedi .reviews-row in globals.css). Nessuno
       * scorrimento automatico — le recensioni sono poche e un carosello in
       * movimento continuo girerebbe a vuoto; qui si scorre solo a mano.
       * tabIndex/role: una regione che scorre deve essere raggiungibile da
       * tastiera, altrimenti le ultime card restano fuori portata.
       */}
      <div
        className="reviews-row"
        tabIndex={0}
        role="group"
        aria-label={t.reviews.label}
      >
        {/* Nessun reveal a cascata: le card sono lì da subito, ferme. */}
        <ul className="flex w-max items-stretch gap-4">
          {t.reviews.items.map((r) => (
            <li
              key={r.name}
              className="flex w-[min(80vw,20rem)] flex-none flex-col rounded-[var(--radius-card)] border border-frost-deep/60 bg-white p-6 transition-colors duration-300 hover:border-cyan/50"
            >
              <div className="flex items-center gap-3">
                <Avatar name={r.name} />
                <div className="min-w-0">
                  <p className="font-display font-semibold text-deep">{r.name}</p>
                  <p className="text-xs text-steel">
                    {t.reviews.source} · {r.date}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Stars aria={t.reviews.ratingAria} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-steel">{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
