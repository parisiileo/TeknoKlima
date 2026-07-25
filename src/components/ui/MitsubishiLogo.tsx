/**
 * Marchio "tre diamanti" di Mitsubishi Heavy Industries, ricostruito in SVG
 * (nessun asset esterno da caricare). Tre rombi a 120° con le punte acute che
 * si incontrano al centro, come nel marchio ufficiale.
 *
 * `withWordmark` affianca la dicitura "MITSUBISHI HEAVY INDUSTRIES": il testo
 * usa currentColor, così si adatta al fondo (bianco su card scura).
 */
export function MitsubishiLogo({
  withWordmark = false,
  className = "",
}: {
  withWordmark?: boolean;
  className?: string;
}) {
  const mark = (
    <svg
      viewBox="30 0 140 116"
      role="img"
      aria-label="Mitsubishi Heavy Industries"
      className="h-full w-auto"
    >
      <g fill="#E60012">
        {/* rombo superiore */}
        <polygon points="100,75 120,40.4 100,5.7 80,40.4" />
        {/* rombo in basso a destra */}
        <polygon points="100,75 120,109.6 160,109.6 140,75" />
        {/* rombo in basso a sinistra */}
        <polygon points="100,75 80,109.6 40,109.6 60,75" />
      </g>
    </svg>
  );

  if (!withWordmark) {
    return <div className={className}>{mark}</div>;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-10 shrink-0">{mark}</div>
      <span className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-wide">MITSUBISHI</span>
        <span className="text-[0.7rem] font-medium tracking-[0.18em] opacity-80">
          HEAVY INDUSTRIES
        </span>
      </span>
    </div>
  );
}
