import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { fillLegalTokens, type LegalDoc } from "@/content/legal";
import { localeHref, type Content, type Locale } from "@/content";
import type { Crumb } from "@/lib/schema";

type Props = {
  locale: Locale;
  t: Content;
  doc: LegalDoc;
  label: string;
  /** Link all'altro documento legale, in fondo alla pagina. */
  other: { href: string; label: string };
  backToSite: string;
  crumbs: Crumb[];
};

/**
 * Impaginazione condivisa dei documenti legali: colonna di lettura stretta,
 * niente animazioni oltre il reveal d'ingresso. Sono pagine che si leggono,
 * non che si guardano.
 */
export function LegalPage({ locale, t, doc, label, other, backToSite, crumbs }: Props) {
  const fill = (s: string) => fillLegalTokens(s, t.site);

  return (
    <section className="section-y pt-40 md:pt-48">
      <div className="container-tk">
        <div className="flex flex-col gap-5">
          <Breadcrumbs locale={locale} t={t} crumbs={crumbs} />
          <SectionLabel num="—">{label}</SectionLabel>
          <Reveal
            as="h1"
            className="font-display max-w-3xl text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-tight text-deep"
          >
            {doc.title}
          </Reveal>
          <p className="tech-label text-steel">{doc.updated}</p>
        </div>

        <div className="mt-12 max-w-[46rem]">
          {doc.intro.map((p, i) => (
            <p key={i} className="mb-4 text-[1.05rem] leading-relaxed text-steel">
              {fill(p)}
            </p>
          ))}

          {doc.sections.map((section) => (
            <section key={section.heading} className="mt-12">
              <h2 className="font-display mb-4 text-[clamp(1.25rem,2.2vw,1.6rem)] font-semibold leading-snug text-deep">
                {section.heading}
              </h2>

              {section.body?.map((p, i) => (
                <p key={i} className="mb-4 leading-relaxed text-steel">
                  {fill(p)}
                </p>
              ))}

              {section.list && (
                <ul className="mb-4 flex flex-col gap-2.5">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed text-steel">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-deep" />
                      <span>{fill(item)}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.table && (
                /* La tabella scorre da sola sui telefoni: la pagina non deve
                   mai guadagnare uno scroll orizzontale a causa sua. */
                <div className="mt-5 overflow-x-auto rounded-[var(--radius-card)] border border-frost-deep">
                  <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
                    <thead>
                      <tr className="bg-frost">
                        {section.table.head.map((h) => (
                          <th key={h} scope="col" className="px-5 py-3.5 font-semibold text-deep">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, i) => (
                        <tr key={i} className="border-t border-frost-deep">
                          {row.map((cell, j) => (
                            <td key={j} className="px-5 py-4 align-top leading-relaxed text-steel">
                              {j === 0 ? <code className="font-mono text-deep">{cell}</code> : fill(cell)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-frost-deep pt-8 text-sm">
            <Link href={other.href} className="font-medium text-cyan-deep hover:text-deep">
              {other.label}
            </Link>
            <Link href={localeHref(locale, "/")} className="text-steel hover:text-deep">
              {backToSite}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
