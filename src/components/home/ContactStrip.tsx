import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, StaggerReveal } from "@/components/ui/Reveal";
import { HighlightTitle } from "@/components/ui/HighlightTitle";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { WhatsAppGlyph, waLink } from "@/components/ui/WhatsAppGlyph";
import { localeHref, type Content, type Locale } from "@/content";

type Props = { locale: Locale; t: Content };

/** CTA finale + accesso rapido ai contatti. */
export function ContactStrip({ locale, t }: Props) {
  const items = [
    { label: t.contactStrip.labels.phone, value: t.site.phone, href: t.site.phoneHref },
    { label: t.contactStrip.labels.email, value: t.site.email, href: t.site.emailHref },
    { label: t.contactStrip.labels.address, value: t.site.address, href: undefined },
  ];

  return (
    <section className="section-y">
      <div className="container-tk">
        <div className="flex flex-col gap-5">
          <SectionLabel num="04">{t.contactStrip.label}</SectionLabel>
          <Reveal as="h2" className="font-display max-w-3xl text-[var(--text-h2)] font-semibold leading-[1.05] text-deep">
            <HighlightTitle title={t.contactStrip.title} color="ember" />
          </Reveal>
          <Reveal as="p" delay={0.1} className="max-w-xl leading-relaxed text-steel">
            {t.contactStrip.text}
          </Reveal>
          <Reveal delay={0.15} className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-4">
            <MagneticButton href={localeHref(locale, "/contatti")}>{t.cta.quote}</MagneticButton>
            {/* Scorciatoia diretta: chi è pronto a scrivere non deve passare
                dalla pagina Contatti. Link in uscita, nessun dato trasmesso
                finché non viene aperto. */}
            <a
              href={waLink(t.site.whatsappNumber)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 font-medium text-deep transition-colors hover:text-cyan-deep"
            >
              <WhatsAppGlyph className="h-5 w-5 text-[#25D366]" />
              {t.contact.whatsapp.title}
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </Reveal>
        </div>

        <StaggerReveal className="mt-14 grid gap-4 md:grid-cols-3" stagger={0.08}>
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-[var(--radius-card)] border border-frost-deep/60 p-6"
            >
              <p className="tech-label mb-2 text-steel">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="font-display text-lg font-medium text-deep transition-colors hover:text-cyan-deep"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-display text-lg font-medium text-deep">{item.value}</p>
              )}
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
