import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { HighlightTitle } from "@/components/ui/HighlightTitle";
import type { Content } from "@/content";

/**
 * FAQ in `<details>` nativi.
 *
 * Scelta deliberata rispetto a un accordion in JS: il testo delle risposte è
 * SEMPRE nel DOM anche da chiuso, quindi Google lo indicizza e il markup
 * `FAQPage` descrive contenuto realmente presente in pagina (requisito delle
 * linee guida sui rich result). In più funziona senza JavaScript, è
 * navigabile da tastiera e annunciato dagli screen reader senza una riga di
 * ARIA — `<details>`/`<summary>` fanno già tutto.
 */
export function Faq({ t }: { t: Content }) {
  return (
    <section className="section-y">
      <div className="container-tk">
        <div className="mb-12 flex flex-col gap-5">
          <SectionLabel>{t.faq.label}</SectionLabel>
          <Reveal
            as="h2"
            className="font-display max-w-3xl text-[var(--text-h2)] font-semibold leading-[1.05] text-deep"
          >
            <HighlightTitle title={t.faq.title} />
          </Reveal>
        </div>

        <div className="max-w-[52rem]">
          {t.faq.items.map((item) => (
            <details
              key={item.q}
              className="group border-b border-frost-deep py-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
                <h3 className="font-display text-[1.15rem] font-semibold leading-snug text-deep transition-colors group-hover:text-cyan-deep">
                  {item.q}
                </h3>
                {/* Croce che ruota in "meno" all'apertura: un solo glifo,
                    nessuna icona da caricare. */}
                <span
                  aria-hidden
                  className="relative mt-1 h-4 w-4 shrink-0 text-cyan-deep transition-transform duration-300 group-open:rotate-45"
                >
                  <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 bg-current" />
                  <span className="absolute left-1/2 top-0 h-4 w-0.5 -translate-x-1/2 bg-current" />
                </span>
              </summary>
              <p className="mt-4 max-w-[46rem] leading-relaxed text-steel">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
