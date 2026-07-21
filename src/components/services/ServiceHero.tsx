import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ServiceContent } from "@/content";

/**
 * Hero di pagina servizio: sfondo deep, titolo con mask-reveal, entrata animata.
 *
 * L'entrata è in CSS puro (classi sh-line / sh-fade, vedi globals.css): al
 * cambio pagina React può montare il componente due volte e una timeline GSAP
 * restava a metà lasciando il titolo invisibile. Un'animazione CSS riparte a
 * ogni mount e termina sempre sull'ultimo keyframe → titolo sempre visibile.
 * Niente JS, niente ScrollTrigger: l'hero è già in vista al caricamento.
 */
export function ServiceHero({ service }: { service: ServiceContent }) {
  return (
    <section className="relative overflow-hidden bg-deep pb-20 pt-40 text-white md:pb-28 md:pt-48">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(55%_60%_at_80%_10%,rgba(31,168,220,0.18),transparent),radial-gradient(40%_40%_at_10%_90%,rgba(255,122,61,0.1),transparent)]"
      />
      <div className="container-tk relative">
        <div className="sh-fade sh-fade-1">
          <SectionLabel num={service.num} light>
            {service.title}
          </SectionLabel>
        </div>
        <h1 className="font-display mt-6 max-w-4xl text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[1.05] tracking-tight">
          <span className="block overflow-hidden">
            <span className="sh-line inline-block will-change-transform">{service.heroTitle}</span>
          </span>
        </h1>
        <p className="sh-fade sh-fade-2 mt-7 max-w-2xl text-[var(--text-lead)] leading-relaxed text-white/70">
          {service.heroText}
        </p>
      </div>
    </section>
  );
}
