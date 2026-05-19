import type React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────────────
   FestivalBadge — louro estilo festival de cinema com texto central
   Posicionar como overlay sobre a imagem do projeto (não abaixo do texto).
───────────────────────────────────────────────────────────────────────────── */

interface FestivalBadgeProps {
  label?: string;
  sublabel?: string;
  header?: string;
  /** Altura dos ramos em px. Default: 72 */
  size?: number;
  className?: string;
  /** @deprecated sem efeito */
  showLabel?: boolean;
}

export function FestivalBadge({
  label = "FESTIVAIS",
  sublabel,
  header,
  size = 56,
  className,
}: FestivalBadgeProps) {
  const leafH = Math.round(size * 0.58);
  const leafW = Math.round(840 * leafH / 496);
  // Corta ~30% da borda interna (transparente) de cada ramo para aproximar do texto
  const halfW = Math.round(leafW / 2 * 0.68);

  const branchStyle = (pos: "left" | "right"): React.CSSProperties => ({
    width: halfW,
    height: size,
    flexShrink: 0,
    backgroundImage: "url(/laurel-v2.png)",
    backgroundSize: `${leafW}px ${leafH}px`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: `${pos} center`,
  });

  return (
    <div
      aria-label="Festivais internacionais"
      className={cn("inline-flex items-center", className)}
    >
      <div style={branchStyle("left")} aria-hidden />

      <div
        className="flex flex-col items-center justify-center text-center"
        style={{ flexShrink: 0, maxWidth: Math.round(size * 1.1) }}
      >
        {header && (
          <span
            style={{
              fontSize: Math.round(size * 0.09),
              fontWeight: 500,
              fontFamily: "Inter, sans-serif",
              color: "white",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              lineHeight: 1,
              opacity: 0.85,
              marginBottom: Math.round(size * 0.03),
              textAlign: "center",
            }}
          >
            {header}
          </span>
        )}
        <span
          style={{
            fontSize: Math.round(size * 0.10),
            fontWeight: 700,
            fontFamily: "Inter, sans-serif",
            color: "white",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            textAlign: "center" as const,
          }}
        >
          {label}
        </span>
        {sublabel && (
          <span
            style={{
              fontSize: Math.round(size * 0.10),
              fontWeight: 400,
              fontFamily: "Inter, sans-serif",
              color: "white",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              lineHeight: 1,
              marginTop: Math.round(size * 0.04),
              opacity: 0.9,
            }}
          >
            {sublabel}
          </span>
        )}
      </div>

      <div style={branchStyle("right")} aria-hidden />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   StreamingBadge — badges de plataformas de streaming com logos reais
   Variantes: amazon-prime | nick-jr | globoplay | netflix | canal-futura
   Posicionar no canto inferior direito do thumbnail.
───────────────────────────────────────────────────────────────────────────── */

type StreamingPlatform = "amazon-prime" | "nick-jr" | "globoplay" | "netflix" | "canal-futura";

interface StreamingBadgeProps {
  platform: StreamingPlatform;
  className?: string;
}

const platformConfig: Record<StreamingPlatform, {
  src: string; label: string; width: number; height: number; bg: string;
}> = {
  "amazon-prime":  { src: "/streaming-prime.png",        label: "Prime",        width: 68,  height: 40,  bg: "#1399FF" },
  "globoplay":     { src: "/streaming-globoplay.png",    label: "Globoplay",    width: 190, height: 40,  bg: "#EB0028" },
  "netflix":       { src: "/streaming-netflix.png",      label: "Netflix",      width: 148, height: 40,  bg: "#E50914" },
  "nick-jr":       { src: "/streaming-nickjr.png",       label: "Nick Jr.",     width: 142, height: 40,  bg: "#F47521" },
  "canal-futura":  { src: "/streaming-canal-futura.png", label: "Canal Futura", width: 101, height: 40,  bg: "#00A651" },
};

export function StreamingBadge({ platform, className }: StreamingBadgeProps) {
  const config = platformConfig[platform];
  return (
    <span
      className={cn("inline-flex items-center justify-center rounded px-2.5 py-1", className)}
      style={{ backgroundColor: config.bg }}
      aria-label={config.label}
    >
      <Image
        src={config.src}
        alt=""
        width={config.width}
        height={config.height}
        className="h-4 w-auto object-contain"
        style={{ filter: "brightness(0) invert(1)" }}
      />
    </span>
  );
}
