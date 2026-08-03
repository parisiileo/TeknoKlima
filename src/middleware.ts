import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["it", "de", "en"] as const;
const DEFAULT_LOCALE = "it";
const COOKIE = "tk-locale";

/** Sceglie la lingua: cookie (scelta esplicita) → Accept-Language → it. */
function detectLocale(request: NextRequest): string {
  const cookie = request.cookies.get(COOKIE)?.value;
  if (cookie && (LOCALES as readonly string[]).includes(cookie)) return cookie;

  const header = request.headers.get("accept-language") ?? "";
  for (const part of header.split(",")) {
    const code = part.split(";")[0].trim().slice(0, 2).toLowerCase();
    if ((LOCALES as readonly string[]).includes(code)) return code;
  }
  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  // Già prefissato: memorizza la scelta e prosegui
  if ((LOCALES as readonly string[]).includes(first)) {
    const response = NextResponse.next();
    response.cookies.set(COOKIE, first, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return response;
  }

  // Senza prefisso: redirect alla lingua rilevata
  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  /*
   * Escludi asset, API e file statici (quelli con estensione).
   *
   * `apple-icon` va escluso a mano: è una route di metadati generata da Next
   * e, non avendo estensione, cadeva nel matcher e veniva redirezionata a
   * `/it/apple-icon` — cioè su un 404. Stesso motivo per `opengraph-image`
   * e `icon`, che pur essendo oggi sotto `/[locale]` o con estensione
   * potrebbero cambiare forma.
   */
  matcher: ["/((?!_next|api|apple-icon|icon|opengraph-image|manifest|.*\\..*).*)"],
};
