/**
 * Marchio ufficiale Tekno Klima, in SVG inline (nessun asset esterno da
 * caricare, e i singoli tracciati restano animabili da GSAP).
 *
 * - `TkMark`     → solo il simbolo "TK" (intro / favicon-like)
 * - `TkWordmark` → la sola dicitura "TEKNO KLIMA"
 * - `TkLockup`   → simbolo + dicitura affiancati (header, footer)
 *
 * `variant="light"` è la versione in negativo per i fondi scuri: cambia SOLO
 * l'antracite, che diventa bianco per restare leggibile. Il blu resta sempre
 * quello istituzionale — non va mai sostituito con il cyan del sito, è il
 * colore del marchio.
 */

type Variant = "brand" | "light";

/** Antracite del simbolo → bianco sui fondi scuri (unica sostituzione ammessa). */
const ink = (v: Variant) => (v === "light" ? "#ffffff" : "#333A40");
/** Blu istituzionale del simbolo: identico su qualsiasi fondo. */
const blue = () => "#1A50A6";
/** Nella dicitura il "TEKNO" usa un antracite leggermente più freddo. */
const wordInk = (v: Variant) => (v === "light" ? "#ffffff" : "#22262A");
/** Blu istituzionale della dicitura: identico su qualsiasi fondo. */
const wordBlue = () => "#1757AD";

/** Tracciato "K" (chevron blu, entra da destra nell'intro). */
export const MARK_K = "M203,46 L133,51 L99,74 L90,118 L110,110 L139,155 L183,156 L145,82 Z";
/** Tracciato "T" (asta antracite, entra da sinistra nell'intro). */
export const MARK_T =
  "M47,148 L78,127 L102,39 L171,41 L207,13 L24,8 L8,37 L59,39 L39,129 Z";

/** Colori istituzionali, esportati per icone e immagini social. */
export const BRAND = { ink: "#333A40", blue: "#1A50A6", wordInk: "#22262A", wordBlue: "#1757AD" };

export const WORD_TEKNO =
  "M17.6 0.0V-56.1H1.5V-68.8H49.0V-56.1H32.9V0.0Z M55.50000000000001 0.0V-68.8H96.60000000000001V-56.6H70.80000000000001V-40.800000000000004H92.80000000000001V-28.700000000000003H70.80000000000001V-12.200000000000001H96.60000000000001V0.0Z M106.00000000000001 0.0V-68.8H121.30000000000001V-41.0H126.00000000000001L141.4 -68.8H157.60000000000002L138.4 -35.9L157.9 0.0H141.10000000000002L126.00000000000001 -28.8H121.30000000000001V0.0Z M163.8 0.0V-68.8H179.3L198.40000000000003 -31.200000000000003H198.90000000000003V-68.8H213.50000000000003V0.0H199.3L178.90000000000003 -40.7H178.50000000000003V0.0Z M248.8 0.8Q241.7 0.8 237.0 -0.04999999999999999Q232.3 -0.9 229.55 -3.1500000000000004Q226.8 -5.4 225.45 -9.350000000000001Q224.1 -13.3 223.7 -19.450000000000003Q223.3 -25.6 223.3 -34.4Q223.3 -43.2 223.7 -49.35Q224.1 -55.5 225.45 -59.45Q226.8 -63.400000000000006 229.55 -65.65Q232.3 -67.9 237.0 -68.75Q241.7 -69.60000000000001 248.8 -69.60000000000001Q256.0 -69.60000000000001 260.7 -68.75Q265.4 -67.9 268.15 -65.65Q270.9 -63.400000000000006 272.25 -59.45Q273.6 -55.5 274.0 -49.35Q274.4 -43.2 274.4 -34.4Q274.4 -25.6 274.0 -19.450000000000003Q273.6 -13.3 272.25 -9.350000000000001Q270.9 -5.4 268.15 -3.1500000000000004Q265.4 -0.9 260.7 -0.04999999999999999Q256.0 0.8 248.8 0.8ZM248.8 -11.4Q251.8 -11.4 253.7 -11.7Q255.6 -12.0 256.7 -13.100000000000001Q257.8 -14.200000000000001 258.35 -16.650000000000002Q258.9 -19.1 259.0 -23.400000000000002Q259.1 -27.700000000000003 259.1 -34.4Q259.1 -41.1 259.0 -45.400000000000006Q258.9 -49.7 258.35 -52.150000000000006Q257.8 -54.6 256.7 -55.7Q255.6 -56.800000000000004 253.7 -57.10000000000001Q251.8 -57.400000000000006 248.8 -57.400000000000006Q245.9 -57.400000000000006 244.0 -57.10000000000001Q242.1 -56.800000000000004 241.0 -55.7Q239.9 -54.6 239.4 -52.150000000000006Q238.9 -49.7 238.75 -45.400000000000006Q238.6 -41.1 238.6 -34.4Q238.6 -27.700000000000003 238.75 -23.400000000000002Q238.9 -19.1 239.4 -16.650000000000002Q239.9 -14.200000000000001 241.0 -13.100000000000001Q242.1 -12.0 244.0 -11.7Q245.9 -11.4 248.8 -11.4Z";

export const WORD_KLIMA =
  "M305.1 0.0V-68.8H320.40000000000003V-41.0H325.1L340.50000000000006 -68.8H356.70000000000005L337.50000000000006 -35.9L357.00000000000006 0.0H340.20000000000005L325.1 -28.8H320.40000000000003V0.0Z M362.90000000000003 0.0V-68.8H378.20000000000005V-12.700000000000001H400.80000000000007V0.0Z M407.70000000000005 0.0V-68.8H423.00000000000006V0.0Z M434.3 0.0V-68.8H456.0L467.70000000000005 -24.3H468.40000000000003L480.1 -68.8H501.6V0.0H486.90000000000003V-47.7H486.20000000000005L473.6 0.0H461.90000000000003L449.40000000000003 -47.7H448.6V0.0Z M507.40000000000003 0.0 525.8000000000001 -68.8H547.1L565.5 0.0H550.1L546.5 -14.3H526.0L522.5 0.0ZM528.9 -26.200000000000003H543.6L536.5 -55.0H535.9Z";

type MarkProps = {
  variant?: Variant;
  className?: string;
  style?: React.CSSProperties;
  /** Aggiunge `data-tk-t` / `data-tk-k` ai tracciati, per animarli singolarmente. */
  animatable?: boolean;
  title?: string;
};

export function TkMark({
  variant = "brand",
  className = "",
  style,
  animatable = false,
  title,
}: MarkProps) {
  return (
    <svg
      viewBox="0 0 215 164"
      className={className}
      style={style}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <path {...(animatable && { "data-tk-k": "" })} fill={blue()} d={MARK_K} />
      <path {...(animatable && { "data-tk-t": "" })} fill={ink(variant)} d={MARK_T} />
    </svg>
  );
}

type WordmarkProps = {
  variant?: Variant;
  className?: string;
  style?: React.CSSProperties;
  /** Aggiunge `data-tk-tekno` / `data-tk-klima` alle due parole. */
  animatable?: boolean;
  title?: string;
};

export function TkWordmark({
  variant = "brand",
  className = "",
  style,
  animatable = false,
  title,
}: WordmarkProps) {
  return (
    <svg
      /*
       * viewBox stretto sui tracciati (bbox reale: x 1.5→565.5, y -69.6→0.8)
       * invece di quello del file di marchio, che ha 6 unità di margine per
       * lato. Con il margine il box dell'SVG si allinea al testo ma le lettere
       * restano rientrate (~8px a 48rem di larghezza): la "T" non tornava sul
       * filo della label e dell'h1 che sostituisce.
       */
      viewBox="1.5 -69.6 564 70.4"
      className={className}
      style={style}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <path
        {...(animatable && { "data-tk-tekno": "" })}
        fill={wordInk(variant)}
        d={WORD_TEKNO}
      />
      <path
        {...(animatable && { "data-tk-klima": "" })}
        fill={wordBlue()}
        d={WORD_KLIMA}
      />
    </svg>
  );
}

/**
 * Lockup completo (simbolo + dicitura) come SVG unico: proporzioni bloccate,
 * si dimensiona con una sola classe di altezza (es. `className="h-8 w-auto"`).
 * Le due trasformazioni riproducono l'impaginazione del file di marchio
 * (simbolo in un box 120.8×100, dicitura in 559.2×80 a x=142.8).
 */
export function TkLockup({
  variant = "brand",
  className = "",
  title = "Tekno Klima",
}: {
  variant?: Variant;
  className?: string;
  title?: string;
}) {
  return (
    <svg viewBox="0 0 702 100" className={className} role="img" aria-label={title}>
      <title>{title}</title>
      <g transform="translate(0 3.94) scale(0.5619)">
        <path fill={blue()} d={MARK_K} />
        <path fill={ink(variant)} d={MARK_T} />
      </g>
      <g transform="translate(147.17 83.39) scale(0.9708)">
        <path fill={wordInk(variant)} d={WORD_TEKNO} />
        <path fill={wordBlue()} d={WORD_KLIMA} />
      </g>
    </svg>
  );
}
