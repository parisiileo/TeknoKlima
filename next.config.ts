import type { NextConfig } from "next";
import path from "path";

/**
 * Header di sicurezza. Vercel non ne aggiunge nessuno di suo: senza questo
 * blocco il sito parte con headers vuoti.
 *
 * Sulla CSP: `script-src` deve ammettere 'unsafe-inline' perché Next inietta
 * gli script di bootstrap e i dati di flight inline, e 'unsafe-eval' perché
 * GSAP costruisce funzioni a runtime. `frame-src` è ristretto a Google Maps —
 * l'unico iframe del sito, e solo dopo il consenso esplicito dell'utente.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://*.googleapis.com https://*.gstatic.com https://maps.google.com",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src https://www.google.com https://maps.google.com",
  "form-action 'self'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  /* 2 anni, sottodomini inclusi: valore richiesto per la preload list. */
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  /* Ridondante con frame-ancestors, ma copre i browser più vecchi. */
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  /* Il sito non usa nessuna di queste API: negarle tutte in blocco. */
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
];

const nextConfig: NextConfig = {
  // Evita che Next inferisca una root sbagliata (lockfile in ~ dell'utente)
  outputFileTracingRoot: path.join(__dirname),

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
