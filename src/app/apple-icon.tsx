import { ImageResponse } from "next/og";
import { BRAND, MARK_K, MARK_T } from "@/components/ui/TkLogo";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Icona per iOS (180×180). A differenza della favicon deve essere opaca e
 * senza margini trasparenti: iOS applica il proprio ritaglio arrotondato e
 * mette dietro un fondo nero se l'icona è trasparente. Fondo chiaro, marchio
 * nei colori istituzionali.
 */
export default function AppleIcon() {
  const mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215 164" width="215" height="164">
    <path fill="${BRAND.blue}" d="${MARK_K}"/>
    <path fill="${BRAND.ink}" d="${MARK_T}"/>
  </svg>`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f4f8fb",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/svg+xml;base64,${Buffer.from(mark).toString("base64")}`}
          width={128}
          height={98}
          alt=""
        />
      </div>
    ),
    size
  );
}
