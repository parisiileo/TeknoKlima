import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, StaggerReveal } from "@/components/ui/Reveal";
import { HighlightTitle } from "@/components/ui/HighlightTitle";
import { MagneticButton } from "@/components/ui/MagneticButton";
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
          <Reveal delay={0.15} className="mt-2">
            <MagneticButton href={localeHref(locale, "/contatti")}>{t.cta.quote}</MagneticButton>
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
