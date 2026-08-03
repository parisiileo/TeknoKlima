import { WhatsAppGlyph, WA_GREEN, waLink } from "@/components/ui/WhatsAppGlyph";
import type { Content } from "@/content";

type Props = {
  t: Content;
  /** Link all'informativa nella lingua corrente. */
  privacyPolicy: { href: string; label: string };
};

/**
 * Pannello di contatto via WhatsApp — ha sostituito il modulo email.
 *
 * Per un'attività locale converte molto meglio di un form: si scrive dal
 * telefono in pochi secondi, il numero del cliente resta nella chat e la
 * risposta può contenere foto e note vocali. Sul piano privacy è anche più
 * semplice: sono link in uscita, il sito non tratta né trasmette alcun dato
 * finché l'utente non decide di aprirli.
 *
 * Le scorciatoie per argomento precompilano il messaggio: togliere all'utente
 * il "come inizio a scrivere?" è ciò che alza davvero il tasso di contatto.
 *
 * Telefono ed email restano in evidenza: uffici e aziende spesso non usano
 * WhatsApp, e un canale unico taglierebbe fuori una parte di clientela.
 */
export function WhatsAppPanel({ t, privacyPolicy }: Props) {
  const wa = t.contact.whatsapp;
  const chatUrl = (message?: string) => waLink(t.site.whatsappNumber, message);

  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] border border-frost-deep/60 bg-white/50">
      <div className="relative p-7 sm:p-9">
        {/* Alone verde appena accennato dietro l'icona */}
        <div
          aria-hidden
          className="absolute -left-10 -top-10 h-40 w-40 rounded-full blur-3xl"
          style={{ background: `${WA_GREEN}26` }}
        />

        <div className="relative">
          <div className="flex items-center gap-4">
            <span
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white"
              style={{ background: WA_GREEN }}
            >
              <WhatsAppGlyph className="h-8 w-8" />
            </span>
            <div>
              <p className="tech-label text-steel">{wa.label}</p>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight text-deep">
                {wa.title}
              </h2>
            </div>
          </div>

          <p className="mt-6 max-w-xl leading-relaxed text-steel">{wa.text}</p>

          <a
            href={chatUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex items-center gap-3 rounded-full px-7 py-4 font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            style={{ background: WA_GREEN }}
          >
            <WhatsAppGlyph className="h-5 w-5" />
            {wa.cta}
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          {/* Scorciatoie per argomento */}
          <div className="mt-9 border-t border-frost-deep/60 pt-7">
            <p className="tech-label mb-4 text-steel">{wa.topicsLabel}</p>
            <ul className="flex flex-col gap-2.5">
              {wa.topics.map((topic) => (
                <li key={topic.label}>
                  <a
                    href={chatUrl(topic.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-xl border border-frost-deep bg-white/70 px-5 py-3.5 text-left text-sm font-medium text-deep transition-colors duration-300 hover:border-cyan-deep hover:text-cyan-deep"
                  >
                    {topic.label}
                    <span
                      aria-hidden
                      className="shrink-0 text-steel transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-steel">{wa.note}</p>
          </div>

          {/* Canali alternativi */}
          <div className="mt-7 border-t border-frost-deep/60 pt-6">
            <p className="tech-label mb-3 text-steel">{wa.altLabel}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <a
                href={t.site.phoneHref}
                className="font-medium text-deep transition-colors hover:text-cyan-deep"
              >
                {t.site.phone}
              </a>
              <a
                href={t.site.emailHref}
                className="font-medium text-deep transition-colors hover:text-cyan-deep"
              >
                {t.site.email}
              </a>
            </div>

            {/* L'informativa va resa PRIMA che l'utente scriva, non dopo. */}
            <p className="mt-5 text-xs leading-relaxed text-steel">
              {wa.privacyNote}{" "}
              <a
                href={privacyPolicy.href}
                className="font-medium text-cyan-deep underline underline-offset-2 hover:text-deep"
              >
                {privacyPolicy.label}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
