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

const navLinks = [
  { label: "Sobre", href: "/sobre" },
  { label: "Cinema", href: "#" },
  { label: "TV", href: "#" },
  { label: "Projetos", href: "/projetos" },
];

export function HomeDContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);
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

    setTimeout(() => {
      setActiveIndex(index);
      setContentVisible(true);
    }, TRANSITION_MS * 0.35); // swap slide at 35% of fade-out

    setTimeout(() => {
      isTransitioning.current = false;
    }, COOLDOWN_MS);
  }, []);

  const goNext = useCallback(() => goToSlide(activeIndex + 1), [activeIndex, goToSlide]);
  const goPrev = useCallback(() => goToSlide(activeIndex - 1), [activeIndex, goToSlide]);

  // Wheel with delta accumulation for the premium "resistance" feel
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
        if (dir > 0) goNext();
        else goPrev();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [goNext, goPrev]);

  // Touch swipe
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

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") goNext();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") goPrev();
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
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-section-xl"
        style={{ paddingTop: "clamp(16px, 2vw, 28px)", paddingBottom: "clamp(16px, 2vw, 28px)" }}
      >
        <Link href="/" aria-label="Atama Filmes" className="opacity-90 hover:opacity-100 transition-opacity">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo-black.svg`}
            alt="Atama Filmes"
            className="h-20 w-auto md:h-24"
            style={{
              filter: isLabSlide ? "none" : "brightness(0) invert(1)",
              transition: `filter ${TRANSITION_MS}ms`,
            }}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] font-semibold transition-colors duration-300"
                style={{ color: isLabSlide ? "var(--foreground)" : "rgba(255,255,255,0.9)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/lab"
            className={cn(
              "rounded-full font-bold h-auto py-2 px-7 text-[15px] border transition-colors duration-200",
              isLabSlide
                ? cn(buttonVariants(), "border-transparent")
                : "border-white text-white bg-transparent hover:bg-orange-500 hover:border-orange-500"
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

            {/* Content — staggered fade-in on enter */}
            <div
              className="absolute bottom-0 left-0 right-0 px-8 md:px-14 pb-16 md:pb-24"
              style={{
                opacity: contentVisible && activeIndex === index ? 1 : 0,
                transform: contentVisible && activeIndex === index ? "translateY(0)" : "translateY(20px)",
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
              transform: contentVisible && isLabSlide ? "translateY(0)" : "translateY(20px)",
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

            <div className="flex gap-ui-md justify-center">
              <Link
                href="/lab"
                className={cn(
                  buttonVariants(),
                  "rounded-full h-auto py-3 px-8 text-base font-bold"
                )}
              >
                Reservar vaga
              </Link>
              <Link
                href="/lab"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "rounded-full text-muted-foreground h-auto py-3 px-8 text-base"
                )}
              >
                Saiba mais →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Vertical dash navigation — bottom-to-top (flex-col-reverse) ── */}
      <nav
        aria-label="Navegação de slides"
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col-reverse gap-3"
      >
        {[...projetos, { slug: "lab" }].map((_, index) => {
          const isActive = index === activeIndex;
          const dashColor = isLabSlide
            ? isActive
              ? "var(--foreground)"
              : "rgba(0,0,0,0.22)"
            : isActive
            ? "rgba(255,255,255,1)"
            : "rgba(255,255,255,0.35)";

          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
              className="flex items-center justify-center group"
              style={{ padding: "6px 0", cursor: "pointer" }}
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

      {/* Slide counter — bottom left, cinematic */}
      <div
        className="fixed bottom-6 left-8 md:left-14 z-50 flex items-baseline gap-1.5"
        style={{
          opacity: contentVisible ? 1 : 0,
          transition: `opacity 400ms`,
          transitionDelay: contentVisible ? "300ms" : "0ms",
        }}
      >
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
      </div>
    </div>
  );
}
