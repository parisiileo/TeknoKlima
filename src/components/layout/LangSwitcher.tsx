"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, type Locale } from "@/content";

type Props = {
  current: Locale;
  light?: boolean;
  className?: string;
};

/** Switcher IT / DE / EN: sostituisce il prefisso locale del path corrente. */
export function LangSwitcher({ current, light = false, className = "" }: Props) {
  const pathname = usePathname();
  // path senza prefisso locale ("/it/galleria" → "/galleria")
  const rest = pathname.replace(/^\/(it|de|en)(?=\/|$)/, "") || "";

  return (
    <div
      role="group"
      aria-label="Lingua / Sprache / Language"
      className={`tech-label flex items-center gap-0.5 ${className}`}
    >
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 && (
            <span aria-hidden className={light ? "text-white/25" : "text-steel/40"}>
              /
            </span>
          )}
          <Link
            href={`/${locale}${rest}`}
            hrefLang={locale}
            aria-label={localeNames[locale]}
            aria-current={locale === current ? "true" : undefined}
            className={`px-1.5 py-1 uppercase transition-colors duration-300 ${
              locale === current
                ? light
                  ? "text-cyan"
                  : "text-cyan-deep"
                : light
                  ? "text-white/50 hover:text-white"
                  : "text-steel hover:text-deep"
            }`}
          >
            {locale}
          </Link>
        </span>
      ))}
    </div>
  );
}
