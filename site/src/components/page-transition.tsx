"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

// ─── Timing ──────────────────────────────────────────────────────────────────
const COVER_MS  = 480;  // cortina cobre (direita → esquerda) — saída
const NAV_DELAY = 80;   // ms após cobrir antes de navegar

// Entrada: controlada por CSS via classe .page-entering no <html>
// Ver globals.css: @keyframes page-header-entry + page-content-entry

type CurtainPhase = "idle" | "covering" | "covered";

/**
 * Transições de página:
 *
 * SAÍDA — ao clicar em link interno:
 *   1. Cortina branca entra da direita → cobre tela (COVER_MS, ease-in-out)
 *   2. router.push() navega. Cortina some instantaneamente.
 *
 * ENTRADA — ao montar nova página:
 *   1. Página branca (body bg)
 *   2. Classe `.page-entering` no <html> dispara CSS animations:
 *      - <main>: fade-in + translateY(20px → 0)
 *      - <header>: slide de cima → posição natural (translateY(-110% → 0))
 *      com delay para o header aparecer depois do conteúdo começar
 */
// Injeta os keyframes de entrada no <head> uma única vez
function injectKeyframes() {
  if (document.getElementById("page-transition-keyframes")) return;
  const style = document.createElement("style");
  style.id = "page-transition-keyframes";
  style.textContent = `
    @keyframes page-content-entry {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes page-header-entry {
      from { transform: translateY(-110%); }
      to   { transform: translateY(0); }
    }
    @keyframes page-header-fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router   = useRouter();

  const [curtain, setCurtain] = useState<CurtainPhase>("idle");
  const curtainRef = useRef<CurtainPhase>("idle");
  curtainRef.current = curtain;

  // ── Entrada: remove cortina e anima header + content ─────────────────────
  useEffect(() => {
    // Remove cortina instantaneamente (nova página já montada)
    setCurtain("idle");

    // Bloqueia scroll durante animação — libera ao final
    document.body.style.overflowY = "hidden";

    // Garante keyframes disponíveis antes de animar
    injectKeyframes();

    const main   = document.querySelector("main") as HTMLElement | null;
    const header = document.querySelector("header") as HTMLElement | null;

    if (main) {
      main.style.animation = "none";
      void main.offsetHeight;
      main.style.animation = "page-content-entry 1800ms 250ms cubic-bezier(0.16,1,0.3,1) both";
    }

    if (header) {
      const isFixed = window.getComputedStyle(header).position === "fixed";
      header.style.animation = "none";
      void header.offsetHeight;
      if (isFixed) {
        header.style.animation = "page-header-entry 600ms 900ms cubic-bezier(0.16,1,0.3,1) both";
      } else {
        header.style.animation = "page-header-fadein 900ms 1100ms cubic-bezier(0.16,1,0.3,1) both";
      }
    }

    // header termina em 1100 + 900 = 2000ms
    const t = setTimeout(() => {
      if (main)   main.style.animation = "";
      if (header) header.style.animation = "";
      document.body.style.overflowY = "auto";
    }, 2100);

    return () => {
      clearTimeout(t);
      document.body.style.overflowY = "auto";
    };
  }, [pathname]);

  // ── Interceptor global de clicks ─────────────────────────────────────────
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("/")) return;
      if (anchor.target === "_blank") return;

      if (curtainRef.current === "covering" || curtainRef.current === "covered") {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      // Remove page-entering para garantir que animações de entrada não conflitem
      document.documentElement.classList.remove("page-entering");

      setCurtain("covering");

      const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
      const dest = basePath && href.startsWith(basePath) ? href.slice(basePath.length) || "/" : href;

      setTimeout(() => {
        setCurtain("covered");
        router.push(dest);
        // Cortina permanece coberta — será removida no useEffect de pathname
        // quando a nova página estiver montada
      }, COVER_MS + NAV_DELAY);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [router]);

  // ── Posição da cortina ────────────────────────────────────────────────────
  // idle = fora da tela à direita | covering/covered = cobrindo a tela
  const curtainTransform = curtain === "idle"
    ? "translateX(100%)"
    : "translateX(0%)";

  const curtainTransition = curtain === "covering"
    ? `transform ${COVER_MS}ms cubic-bezier(0.4,0,0.2,1)`
    : "none";

  return (
    <>
      {/* Cortina de saída — só usada ao navegar para fora */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
          backgroundColor: "white",
          willChange: "transform",
          transform: curtainTransform,
          transition: curtainTransition,
        }}
      />

      <div className="flex flex-col flex-1">
        {children}
      </div>
    </>
  );
}
