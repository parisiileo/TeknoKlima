"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatedLink } from "@/components/ui/AnimatedLink";
import { LangSwitcher } from "./LangSwitcher";
import { TkLockup } from "@/components/ui/TkLogo";
import { gsap, prefersReducedMotion } from "@/lib/animations/gsap-config";
import { useFocusTrap } from "@/lib/a11y";
import { localeHref, type Content, type Locale } from "@/content";

type Props = { locale: Locale; t: Content };

/** Marchio ufficiale; su hero scura o menu aperto passa alla variante chiara. */
function Logo({ locale, light = false, label }: { locale: Locale; light?: boolean; label: string }) {
  return (
    <Link href={`/${locale}`} aria-label={label} className="block">
      <TkLockup
        variant={light ? "light" : "brand"}
        title="Tekno Klima"
        className="h-7 w-auto md:h-8"
      />
    </Link>
  );
}

/** Route con hero su fondo deep: l'header deve passare a testo chiaro. */
const DARK_HERO_ROUTES = /\/climatizzazione\/?$/;

export function Header({ locale, t }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  /* Menu aperto = overlay a tutto schermo: il focus non deve uscirne. */
  useFocusTrap(menuRef, open);

  /* Testo chiaro finché l'header è trasparente sopra una hero scura */
  const onDark = DARK_HERO_ROUTES.test(pathname) && !scrolled;

  /* Sfondo al passaggio oltre la hero */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Chiudi il menu mobile al cambio route */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* Escape chiude il menu: convenzione attesa da qualunque overlay modale */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* Animazione apertura menu mobile */
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    document.body.style.overflow = open ? "hidden" : "";

    if (open && !prefersReducedMotion()) {
      gsap.fromTo(
        menu.querySelectorAll("[data-menu-item]"),
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: "power3.out", delay: 0.15 }
      );
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[70] transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled && !open
          ? "bg-ice/85 shadow-[0_1px_0_0_rgba(11,31,51,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-tk flex h-[4.5rem] items-center justify-between md:h-20">
        <div className={open ? "relative z-[75]" : ""}>
          <Logo locale={locale} light={open || onDark} label={t.a11y.homeLink} />
        </div>

        {/* Nav desktop */}
        <nav aria-label={t.a11y.mainNav} className="hidden items-center gap-6 lg:flex">
          {t.nav.slice(1).map((item) => {
            const href = localeHref(locale, item.href);
            return (
              <AnimatedLink
                key={item.href}
                href={href}
                active={pathname === href}
                className={`text-[0.9rem] font-medium transition-colors duration-300 ${
                  onDark ? "text-white/80 hover:text-white" : "text-deep/80 hover:text-deep"
                }`}
              >
                {item.label}
              </AnimatedLink>
            );
          })}
          <LangSwitcher current={locale} light={onDark} label={t.a11y.langSwitcher} />
          <Link
            href={localeHref(locale, "/contatti")}
            className={`rounded-full px-5 py-2.5 text-[0.85rem] font-medium transition-colors duration-300 ${
              onDark
                ? "bg-white text-deep hover:bg-cyan hover:text-white"
                : "bg-deep text-white hover:bg-cyan-deep"
            }`}
          >
            {t.cta.quote}
          </Link>
        </nav>

        {/* Burger mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
          className={`relative z-[75] flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden ${
            open || onDark ? "text-white" : "text-deep"
          }`}
        >
          <span
            className={`h-0.5 w-6 bg-current transition-transform duration-300 ${
              open ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-current transition-transform duration-300 ${
              open ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu mobile fullscreen */}
      {/*
       * `inert` a menu chiuso: con la sola `opacity-0` il pannello resta nel
       * tab order e su desktop il focus finisce su cinque link invisibili.
       * `inert` li toglie di mezzo per tastiera e screen reader senza
       * smontarli, così la transizione di apertura resta fluida.
       */}
      <div
        ref={menuRef}
        id="mobile-menu"
        inert={!open}
        aria-hidden={!open}
        className={`fixed inset-0 z-[72] flex flex-col justify-between overflow-y-auto bg-deep px-6 pb-10 pt-28 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label={t.a11y.mobileNav} className="flex flex-col gap-2">
          {t.nav.map((item) => {
            const href = localeHref(locale, item.href);
            return (
              <div key={item.href} data-menu-item>
                <Link
                  href={href}
                  className={`font-display block py-1.5 text-[clamp(1.7rem,6.5vw,2.5rem)] font-medium ${
                    pathname === href ? "text-cyan" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </nav>
        <div data-menu-item className="mt-8 flex flex-col gap-5">
          <LangSwitcher current={locale} light label={t.a11y.langSwitcher} />
          <Link
            href={localeHref(locale, "/contatti")}
            className="rounded-full bg-ember px-6 py-4 text-center font-medium text-white"
          >
            {t.cta.quote}
          </Link>
          <div className="flex items-center justify-between text-sm text-white/50">
            <a href={t.site.phoneHref} className="hover:text-white">{t.site.phone}</a>
            <a href={t.site.emailHref} className="hover:text-white">{t.site.email}</a>
          </div>
        </div>
      </div>
    </header>
  );
}
