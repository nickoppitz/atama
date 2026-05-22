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
    backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/laurel-v2.png)`,
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

/**
 * Configuração de logos de streaming.
 * Formato: SVG (vetorial, nativo branco) preferido; PNG quando SVG indisponível.
 * filter: apenas para logos sem versão branca no kit (Netflix).
 */
/**
 * Configuração de logos de streaming.
 * Formato: SVG (vetorial, nativo branco) preferido; PNG quando SVG indisponível.
 * heightClass: altura visual da <img> — diferenciada por legibilidade a11y de cada marca.
 * filter: apenas para logos sem versão branca no kit (Netflix).
 *
 * A11y rationale:
 *  - Prime Video: wordmark longo e fino → h-10 (40px) para legibilidade do texto "Video"
 *  - Nick Jr.: logo redondo com texto pequeno → h-14 (56px) pra ser legível
 *  - Netflix: wordmark bold em bloco → h-9 (36px) suficiente pela espessura das letras
 *  - Globoplay: wordmark compacto já legível → h-8 (32px) mantido
 *  - Canal Futura: wordmark horizontal longo e fino → h-10 (40px)
 */
const platformConfig: Record<StreamingPlatform, {
  src: string;
  label: string;
  width: number;
  height: number;
  heightClass: string;
  filter?: string;
}> = {
  "amazon-prime": { src: "/logo-amazon-prime.svg", label: "Amazon Prime Video", width: 280, height: 84, heightClass: "h-12", filter: "none" },
  "nick-jr":      { src: "/logotype-nickjr-white.svg", label: "Nick Jr.",        width: 1447, height: 403, heightClass: "h-8", filter: "none" },
  "globoplay":    { src: "/logo-globoplay.png",     label: "Globoplay",          width: 220, height: 60,  heightClass: "h-8",  filter: "none" },
  "canal-futura": { src: "/logo-canal-futura.png",  label: "Canal Futura",       width: 240, height: 60,  heightClass: "h-10", filter: "none" },
  "netflix":      { src: "/logo-netflix.png",       label: "Netflix",            width: 216, height: 58,  heightClass: "h-11", filter: "brightness(0) invert(1)" },
};

export function StreamingBadge({ platform, className }: StreamingBadgeProps) {
  const config = platformConfig[platform];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <span
      className={cn("inline-flex items-center justify-center", className)}
      aria-label={config.label}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${basePath}${config.src}`}
        alt=""
        width={config.width}
        height={config.height}
        className={cn("w-auto object-contain", config.heightClass)}
        style={config.filter && config.filter !== "none" ? { filter: config.filter } : undefined}
      />
    </span>
  );
}
