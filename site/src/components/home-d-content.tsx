"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { buttonVariants } from "@/components/ui/button";
import { FestivalBadge, StreamingBadge } from "@/components/project-badges";
import { cn } from "@/lib/utils";

type Festival = { label: string; sublabel?: string; header?: string };

const projetos = [
  {
    slug: "alem-de-nos",
    titulo: "Além de Nós",
    categoria: "Longa-metragem",
    image: "/alem-de-nos.jpg",
    festivais: [
      { label: "FESTIVAL DE CINEMA DE TRANCOSO" },
      { label: "46ª MOSTRA INT'L DE CINEMA" },
      { label: "SAN FRANCISCO LATINO FILM FESTIVAL" },
      { label: "FESTIVAL DEL CINEMA PORRETTA" },
    ] as Festival[],
    streaming: ["amazon-prime"] as const,
  },
  {
    slug: "universo-z",
    titulo: "Universo Z",
    categoria: "Animação",
    image: "/universo-z.jpg",
    festivais: [
      { label: "ANNECY" },
      { label: "KIDSCREEN" },
    ] as Festival[],
    streaming: ["amazon-prime", "nick-jr"] as const,
  },
  {
    slug: "comer-beber-e-aprender",
    titulo: "Comer, Beber e Aprender",
    categoria: "Documentário",
    image: "/comer-beber-e-aprender.jpg",
    festivais: [{ label: "CINÉLATINO" }] as Festival[],
    streaming: ["canal-futura", "globoplay"] as const,
  },
  {
    slug: "sobreviventes-da-pampa",
    titulo: "Sobreviventes do Pampa",
    categoria: "Documentário",
    image: "/sobreviventes-do-pampa.webp",
    festivais: [
      { label: "BAFICI" },
      { label: "MoMA DOC" },
    ] as Festival[],
    streaming: ["netflix"] as const,
  },
  {
    slug: "nao-esqueca-de-mim",
    titulo: "Não Esqueça de Mim",
    categoria: "Documentário",
    image: "/nao-esqueca-de-mim.jpg",
    festivais: [{ label: "OLHAR DE CINEMA" }] as Festival[],
    streaming: ["canal-futura"] as const,
  },
];

const TOTAL_SLIDES = projetos.length + 1; // +1 for Labs slide
const TRANSITION_MS = 700;
const COOLDOWN_MS = 900;
const DELTA_THRESHOLD = 40;
const AUTOPLAY_MS = 7000;

const navLinks = [
  { label: "Sobre", href: "/sobre" },
  { label: "Cinema", href: "#" },
  { label: "TV", href: "#" },
  { label: "Projetos", href: "/projetos" },
];

export function HomeDContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);
  const [progressKey, setProgressKey] = useState(0);
  const isTransitioning = useRef(false);
  const accDelta = useRef(0);
  const deltaResetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartY = useRef(0);

  const isLabSlide = activeIndex === projetos.length;

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning.current) return;
    if (index < 0 || index >= TOTAL_SLIDES) return;

    isTransitioning.current = true;
    setContentVisible(false);
    setProgressKey((k) => k + 1);

    setTimeout(() => {
      setActiveIndex(index);
      setContentVisible(true);
    }, TRANSITION_MS * 0.35);

    setTimeout(() => {
      isTransitioning.current = false;
    }, COOLDOWN_MS);
  }, []);

  // Scroll UP = next slide (dot moves up), scroll DOWN = prev slide (dot moves down)
  const goNext = useCallback(() => goToSlide(activeIndex + 1), [activeIndex, goToSlide]);
  const goPrev = useCallback(() => goToSlide(activeIndex - 1), [activeIndex, goToSlide]);

  // Autoplay — 7s por slide
  useEffect(() => {
    const timer = setTimeout(() => {
      const next = activeIndex < TOTAL_SLIDES - 1 ? activeIndex + 1 : 0;
      goToSlide(next);
    }, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [activeIndex, goToSlide]);

  // Wheel: deltaY > 0 (roda pra baixo) = goPrev; deltaY < 0 (roda pra cima) = goNext
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isTransitioning.current) return;

      accDelta.current += e.deltaY;

      if (deltaResetTimer.current) clearTimeout(deltaResetTimer.current);
      deltaResetTimer.current = setTimeout(() => {
        accDelta.current = 0;
      }, 200);

      if (Math.abs(accDelta.current) >= DELTA_THRESHOLD) {
        const dir = accDelta.current > 0 ? 1 : -1;
        accDelta.current = 0;
        // Inverted: roda pra baixo = slide anterior, roda pra cima = próximo
        if (dir > 0) goPrev();
        else goNext();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [goNext, goPrev]);

  // Touch swipe: dedo pra cima = goNext (avanço), dedo pra baixo = goPrev
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    const delta = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(delta) > 50) {
      if (delta > 0) goNext();
      else goPrev();
    }
  }, [goNext, goPrev]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") goNext();
      if (e.key === "ArrowDown" || e.key === "ArrowRight") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  return (
    <div
      className="relative w-full h-full"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── Overlay Header ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-section-xl"
        style={{ paddingTop: "clamp(16px, 2vw, 28px)", paddingBottom: "clamp(16px, 2vw, 28px)" }}
      >
        {/* Logo: Colorido_Negativo (branco) nos slides de filme, Colorido (cor) no Labs */}
        <Link href="/" aria-label="Atama Filmes" className="opacity-90 hover:opacity-100 transition-opacity shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/${isLabSlide ? "logo-colorido.svg" : "logo-colorido-negativo.svg"}`}
            alt="Atama Filmes"
            className="h-24 w-auto md:h-28"
            style={{ transition: `opacity ${TRANSITION_MS}ms` }}
          />
        </Link>

        {/* Nav desktop */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                // a11y: área de toque maior com padding
                className="px-4 py-3 text-[15px] font-semibold transition-colors duration-300"
                style={{ color: isLabSlide ? "var(--foreground)" : "rgba(255,255,255,0.9)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA: sempre laranja (primary) */}
          <Link
            href="/lab"
            className={cn(
              buttonVariants(),
              "rounded-full font-bold h-auto py-2 px-7 text-[15px]"
            )}
          >
            Atama Lab
          </Link>
        </div>
      </header>

      {/* ── Slides ── */}
      <div className="absolute inset-0">
        {/* Project slides */}
        {projetos.map((projeto, index) => (
          <div
            key={projeto.slug}
            className="absolute inset-0"
            aria-hidden={activeIndex !== index}
            style={{
              opacity: activeIndex === index ? 1 : 0,
              transition: `opacity ${TRANSITION_MS}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
              pointerEvents: activeIndex === index ? "auto" : "none",
            }}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-[#0d0d0d]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${projeto.image}`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/15" aria-hidden="true" />
              <div
                className="absolute inset-0"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.28) 48%, transparent 72%)",
                }}
              />
            </div>

            {/* Conteúdo com fade + stagger */}
            <div
              className="absolute bottom-0 left-0 right-0 px-8 md:px-14 pb-20 md:pb-28"
              style={{
                opacity: contentVisible && activeIndex === index ? 1 : 0,
                transform:
                  contentVisible && activeIndex === index ? "translateY(0)" : "translateY(20px)",
                transition: `opacity ${TRANSITION_MS * 0.8}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform ${TRANSITION_MS * 0.8}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                transitionDelay: contentVisible && activeIndex === index ? "180ms" : "0ms",
              }}
            >
              <p
                className="text-white/75 uppercase mb-3"
                style={{
                  fontFamily: "var(--font-c-mono, monospace)",
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  fontWeight: 500,
                }}
              >
                {projeto.categoria}
              </p>

              <h2
                className="text-white leading-[0.93] mb-6"
                style={{
                  fontFamily: "var(--font-c-sans, sans-serif)",
                  fontSize: "clamp(32px, 5.5vw, 72px)",
                  fontWeight: 900,
                  letterSpacing: "-0.025em",
                }}
              >
                {projeto.titulo}
              </h2>

              <div className="flex items-center gap-ui-lg flex-wrap">
                {projeto.festivais.length > 0 && (
                  <div className="flex gap-ui-md flex-wrap" aria-label="Festivais">
                    {projeto.festivais.map((f) => (
                      <FestivalBadge
                        key={f.label}
                        size={96}
                        label={f.label}
                        sublabel={f.sublabel}
                        header={f.header}
                      />
                    ))}
                  </div>
                )}
                {projeto.streaming?.map((platform) => (
                  <StreamingBadge key={platform} platform={platform} heightClass="h-10" />
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Labs slide */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden={!isLabSlide}
          style={{
            backgroundColor: "var(--muted)",
            opacity: isLabSlide ? 1 : 0,
            transition: `opacity ${TRANSITION_MS}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
            pointerEvents: isLabSlide ? "auto" : "none",
          }}
        >
          <div
            className="text-center px-section-md"
            style={{
              maxWidth: "640px",
              opacity: contentVisible && isLabSlide ? 1 : 0,
              transform:
                contentVisible && isLabSlide ? "translateY(0)" : "translateY(20px)",
              transition: `opacity ${TRANSITION_MS * 0.8}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform ${TRANSITION_MS * 0.8}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
              transitionDelay: contentVisible && isLabSlide ? "180ms" : "0ms",
            }}
          >
            <p
              className="text-primary font-bold tracking-[0.22em] uppercase mb-8"
              style={{ fontFamily: "var(--font-c-mono, monospace)", fontSize: "11px" }}
            >
              ● Curso presencial · Junho 2026
            </p>

            <h2
              className="text-foreground leading-[0.88] mb-6"
              style={{
                fontFamily: "var(--font-c-sans, sans-serif)",
                fontSize: "clamp(56px, 8vw, 104px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
              }}
            >
              Atama Lab
            </h2>

            <p
              className="text-foreground mb-3"
              style={{
                fontSize: "clamp(18px, 2.2vw, 28px)",
                fontWeight: 600,
                lineHeight: 1.3,
              }}
            >
              14 anos de projetos e festivais internacionais viram método.
            </p>

            <p
              className="mb-10"
              style={{
                fontSize: "clamp(14px, 1.4vw, 18px)",
                color: "oklch(0.42 0 0)",
                lineHeight: 1.6,
              }}
            >
              Formação presencial de produção audiovisual em Porto Alegre.
              <br />
              Turma reduzida · 20 horas · Junho 2026
            </p>

            {/* Botões: secundário (outline) à esquerda, primário à direita */}
            <div className="flex gap-ui-md justify-center">
              <Link
                href="/lab"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-full h-auto py-3 px-8 text-base"
                )}
              >
                Saiba mais
              </Link>
              <Link
                href="/lab"
                className={cn(
                  buttonVariants(),
                  "rounded-full h-auto py-3 px-8 text-base font-bold"
                )}
              >
                Reservar vaga
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Dot Navigation vertical — flex-col-reverse: índice 0 no baixo, Labs no topo ── */}
      <nav
        aria-label="Navegação de slides"
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col"
      >
        {[...projetos, { slug: "lab" }].map((_, index) => {
          const isActive = index === activeIndex;
          // Active: laranja. Inactive: branco/cinza conforme slide
          const dashColor = isActive
            ? "var(--primary)"
            : isLabSlide
            ? "rgba(0,0,0,0.2)"
            : "rgba(255,255,255,0.35)";

          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
              className="flex items-center justify-center"
              // a11y: área de toque mínima 44x44px para fat finger / mouse impreciso
              style={{ padding: "11px 12px", cursor: "pointer" }}
            >
              <span
                style={{
                  display: "block",
                  height: "2px",
                  width: isActive ? "28px" : "10px",
                  backgroundColor: dashColor,
                  borderRadius: "1px",
                  transition: `width 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color ${TRANSITION_MS}ms`,
                }}
              />
            </button>
          );
        })}
      </nav>

      {/* ── Counter + Progress bar — bottom left ── */}
      <div
        className="fixed bottom-6 left-8 md:left-14 z-50 flex items-center gap-3"
        style={{
          opacity: contentVisible ? 1 : 0,
          transition: `opacity 400ms`,
          transitionDelay: contentVisible ? "300ms" : "0ms",
        }}
      >
        {/* NN / NN */}
        <span
          style={{
            fontFamily: "var(--font-c-mono, monospace)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            color: isLabSlide ? "oklch(0.42 0 0)" : "rgba(255,255,255,0.6)",
            transition: `color ${TRANSITION_MS}ms`,
          }}
        >
          {String(activeIndex + 1).padStart(2, "0")} / {String(TOTAL_SLIDES).padStart(2, "0")}
        </span>

        {/* Progress bar — 7s por slide */}
        <div
          className="relative overflow-hidden rounded-full"
          style={{
            width: "48px",
            height: "2px",
            backgroundColor: isLabSlide ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.2)",
            transition: `background-color ${TRANSITION_MS}ms`,
          }}
        >
          <span
            key={progressKey}
            className="absolute inset-0 origin-left rounded-full"
            style={{
              backgroundColor: isLabSlide ? "var(--primary)" : "rgba(255,255,255,0.8)",
              animation: `carousel-progress ${AUTOPLAY_MS}ms linear forwards`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
