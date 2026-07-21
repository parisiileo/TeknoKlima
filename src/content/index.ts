import { it } from "./it";
import { de } from "./de";
import { en } from "./en";
import type { Content, Locale } from "./types";

export const locales = ["it", "de", "en"] as const;
export const defaultLocale: Locale = "it";

export const localeNames: Record<Locale, string> = {
  it: "Italiano",
  de: "Deutsch",
  en: "English",
};

const dictionaries: Record<Locale, Content> = { it, de, en };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}

/** Prefissa un href interno (senza locale) col locale corrente. */
export function localeHref(locale: Locale, href: string): string {
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

export type { Content, Locale } from "./types";
export type { ServiceContent, GalleryItem, Highlight, PageMeta } from "./types";
