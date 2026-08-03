import Link from "next/link";
import { TkLockup } from "@/components/ui/TkLogo";
import { CookiePreferencesLink } from "@/components/cookie/CookieBanner";
import { getLegal, legalSlugs } from "@/content/legal";
import { localeHref, type Content, type Locale } from "@/content";

type Props = { locale: Locale; t: Content };

export function Footer({ locale, t }: Props) {
  const legal = getLegal(locale);

  return (
    <footer className="bg-deep text-white">
      {/* CTA strip */}
      <div className="container-tk border-b border-white/10 py-16 md:py-20">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="tech-label mb-4 text-cyan">{t.footer.ctaLabel}</p>
            <p className="font-display max-w-2xl text-[clamp(1.8rem,4vw,3.2rem)] font-medium leading-[1.1]">
              {t.footer.ctaTitle}
              <span className="text-white/60"> {t.footer.ctaTitleMuted}</span>
            </p>
          </div>
          <Link
            href={localeHref(locale, "/contatti")}
            className="group inline-flex items-center gap-3 rounded-full bg-ember px-7 py-4 font-medium text-white transition-colors duration-300 hover:bg-ember-deep"
          >
            {t.cta.quote}
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      {/* Colonne */}
      <div className="container-tk grid gap-10 py-14 md:grid-cols-3 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <TkLockup variant="light" title={t.site.name} className="h-9 w-auto" />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">{t.footer.blurb}</p>
        </div>

        <nav aria-label={t.footer.exploreLabel} className="flex flex-col gap-2.5">
          {/* Il colore delle label è /70 e non /40: sul fondo `deep` il 40%
              di bianco sta a 3.75:1, sotto la soglia AA di 4.5:1. */}
          <p className="tech-label mb-2 text-white/70">{t.footer.exploreLabel}</p>
          {t.nav.map((item) => (
            <Link
              key={item.href}
              href={localeHref(locale, item.href)}
              className="w-fit text-sm text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2.5">
          <p className="tech-label mb-2 text-white/70">{t.footer.contactsLabel}</p>
          <a href={t.site.phoneHref} className="w-fit text-sm text-white/80 hover:text-white">
            {t.site.phone}
          </a>
          <a href={t.site.emailHref} className="w-fit text-sm text-white/80 hover:text-white">
            {t.site.email}
          </a>
          <p className="text-sm text-white/80">{t.site.address}</p>
          <a
            href={t.site.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-sm text-white/80 hover:text-white"
          >
            Instagram {t.site.instagram}
          </a>
        </div>
      </div>

      <div className="container-tk flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/70">
        <p className="text-white/80">{t.site.legalName}</p>
        <div className="flex flex-col gap-1.5 md:flex-row md:flex-wrap md:items-center md:gap-x-4">
          <span>{t.site.vat}</span>
          {/* Dati camerali resi solo quando valorizzati (art. 2250 c.c.). */}
          {t.site.rea && (
            <span>
              {t.contact.reaLabel} {t.site.rea}
            </span>
          )}
          <span>{t.site.address}</span>
          {t.site.pec && (
            <span>
              PEC{" "}
              <a href={`mailto:${t.site.pec}`} className="hover:text-white">
                {t.site.pec}
              </a>
            </span>
          )}
        </div>

        <nav
          aria-label={legal.labels.legalNav}
          className="flex flex-col gap-1.5 md:flex-row md:items-center md:gap-x-4"
        >
          <Link href={localeHref(locale, `/${legalSlugs.privacy}`)} className="w-fit hover:text-white">
            {legal.labels.privacy}
          </Link>
          <Link href={localeHref(locale, `/${legalSlugs.cookie}`)} className="w-fit hover:text-white">
            {legal.labels.cookie}
          </Link>
          {/* Il consenso dev'essere revocabile con la stessa facilità con cui
              è stato dato: da qui il pannello si riapre da qualsiasi pagina. */}
          <CookiePreferencesLink label={legal.cookieBanner.footerLink} />
        </nav>

        <p>© {new Date().getFullYear()} {t.site.name}</p>
      </div>
    </footer>
  );
}
