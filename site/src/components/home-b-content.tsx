"use client";

import Link from "next/link";
import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

const CAROUSEL_HEIGHT = "clamp(320px, calc(100vh - 96px), 640px)";
const AUTOPLAY_DELAY = 7000;

export function HomeBContent() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const scrollToSlide = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: track.offsetWidth * index, behavior: "smooth" });
    setActiveIndex(index);
  }, []);

  const handlePrev = useCallback(() => {
    const prev = activeIndex === 0 ? projetos.length - 1 : activeIndex - 1;
    scrollToSlide(prev);
    setProgressKey((k) => k + 1);
  }, [activeIndex, scrollToSlide]);

  const handleNext = useCallback(() => {
    const next = activeIndex === projetos.length - 1 ? 0 : activeIndex + 1;
    scrollToSlide(next);
    setProgressKey((k) => k + 1);
  }, [activeIndex, scrollToSlide]);

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setActiveIndex(Math.round(track.scrollLeft / track.offsetWidth));
  }, []);

  // Autoplay — 7s por slide, pausa no hover
  useEffect(() => {
    if (isHovered) return;
    const timer = setTimeout(() => {
      const next = activeIndex < projetos.length - 1 ? activeIndex + 1 : 0;
      scrollToSlide(next);
      setProgressKey((k) => k + 1);
    }, AUTOPLAY_DELAY);
    return () => clearTimeout(timer);
  }, [activeIndex, isHovered, scrollToSlide]);

  return (
    <>
      {/* ─── 1. Carousel — hall de entrada, primeira dobra ─── */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            overscrollBehaviorX: "contain",
          }}
        >
          {projetos.map((projeto, index) => (
            <div
              key={projeto.slug}
              className="group relative flex-none w-full snap-start bg-[#111] overflow-hidden"
              style={{ height: CAROUSEL_HEIGHT }}
            >
              <div className="absolute inset-0 bg-[#111]" aria-hidden="true" />
              {projeto.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${projeto.image}`}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  aria-hidden="true"
                />
              )}
              <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
              <div
                className="absolute inset-0"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 45%, transparent 70%)",
                }}
              />

              {/* Info — fundo do slide, ascendente */}
              {/* pb-8 extra para não sobrepor a progressbar */}
              <div className="absolute bottom-0 left-0 right-0 z-10 px-8 md:px-14 pb-14 md:pb-16">
                {/* Categoria — a11y: opacity elevada, peso e tamanho acessíveis */}
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

                {/* Título — Roboto Black, text case normal (headings maiores sem uppercase) */}
                <h2
                  className="text-white leading-[0.93] mb-6"
                  style={{
                    fontFamily: "var(--font-c-sans, sans-serif)",
                    fontSize: "clamp(30px, 5vw, 62px)",
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {projeto.titulo}
                </h2>

                {/* Badges — louros antes de streaming */}
                <div className="flex items-center gap-ui-lg flex-wrap">
                  {/* Louros primeiro */}
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
                  {/* Streaming depois, sem bg colorido */}
                  {projeto.streaming && projeto.streaming.map((platform) => (
                    <StreamingBadge key={platform} platform={platform} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chevron PREV — sempre visível, navegação infinita */}
        <button
          onClick={handlePrev}
          aria-label="Projeto anterior"
          className="group absolute left-0 top-0 bottom-0 z-20 w-24 flex items-center justify-center cursor-pointer"
        >
          <span
            className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-hidden="true"
          />
          <ChevronLeft
            size={36}
            className="relative text-white/60 group-hover:text-white/95 transition-colors duration-200 drop-shadow-lg"
            aria-hidden="true"
          />
        </button>

        {/* Chevron NEXT — sempre visível, navegação infinita */}
        <button
          onClick={handleNext}
          aria-label="Próximo projeto"
          className="group absolute right-0 top-0 bottom-0 z-20 w-24 flex items-center justify-center cursor-pointer"
        >
          <span
            className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-hidden="true"
          />
          <ChevronRight
            size={36}
            className="relative text-white/60 group-hover:text-white/95 transition-colors duration-200 drop-shadow-lg"
            aria-hidden="true"
          />
        </button>

        {/* Pills de navegação com progress timer */}
        <div
          role="tablist"
          aria-label="Slides do portfólio"
          className="absolute bottom-0 left-0 right-0 z-20 flex items-center gap-1.5 px-5 mb-4"
        >
          {projetos.map((p, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Slide ${index + 1}: ${p.titulo}`}
              onClick={() => {
                scrollToSlide(index);
                setProgressKey((k) => k + 1);
              }}
              /* touch target a11y: 44px de altura, pill visível dentro */
              className="group flex-1 flex items-center justify-center py-[20px] cursor-pointer"
            >
              <div className="w-full rounded-full relative overflow-hidden transition-all duration-150"
                style={{
                  height: "3px",
                  backgroundColor: index === activeIndex
                    ? "rgba(255,255,255,0.4)"
                    : "rgba(255,255,255,0.25)",
                }}
              >
                {/* Hover highlight */}
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />

                {/* Slides já vistos — pill cheia */}
                {index < activeIndex && (
                  <span className="absolute inset-0 bg-primary" />
                )}
                {/* Slide ativo — fill animado, pausado via animationPlayState */}
                {index === activeIndex && (
                  <span
                    key={progressKey}
                    className="absolute inset-0 bg-primary origin-left"
                    style={{
                      animation: `carousel-progress ${AUTOPLAY_DELAY}ms linear forwards`,
                      animationPlayState: isHovered ? "paused" : "running",
                    }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ─── 2. Atama Lab — card unificado com vitrine do curso ─── */}
      <div className="border-t border-border bg-background">
        <div className="px-4 sm:px-6 lg:px-section-xl py-section-md md:py-section-lg">
          <div
            className="rounded-container"
            style={{ backgroundColor: "var(--muted)", boxShadow: "0 -16px 48px -8px rgba(0,0,0,0.14), 0 32px 96px -12px rgba(0,0,0,0.22), 0 8px 40px -8px rgba(0,0,0,0.12)" }}
          >
            {/* Cada coluna define seu próprio padding — mesmo valor para igualdade visual */}
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-stretch">

              {/* ── COL ESQUERDA — eyebrow no topo, grupo de texto centralizado no vitrine ── */}
              <div className="lg:col-span-7 flex flex-col px-section-md md:px-section-lg lg:px-section-xl py-section-lg">{/* py-10=40→48px normalizado */}

                {/* Eyebrow fixo no topo */}
                <div className="flex items-center gap-ui-sm mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  <span
                    className="font-bold tracking-[0.22em] uppercase text-primary"
                    style={{ fontFamily: "var(--font-c-mono, monospace)", fontSize: "clamp(10px, 0.9vw, 12px)" }}
                  >
                    Curso presencial · Junho 2026
                  </span>
                </div>

                {/* Grupo de texto — flex-1 + justify-center centraliza verticalmente no restante */}
                <div className="flex flex-col flex-1 justify-center">
                  {/* H2 — heading primário sem uppercase */}
                  <h2
                    className="text-foreground leading-[0.9] mb-7"
                    style={{
                      fontFamily: "var(--font-c-sans, sans-serif)",
                      fontSize: "clamp(36px, 4.8vw, 72px)",
                      fontWeight: 900,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Atama Lab
                  </h2>

                  <p
                    className="text-foreground mb-5"
                    style={{
                      fontFamily: "var(--font-c-sans, sans-serif)",
                      fontSize: "clamp(20px, 2.2vw, 32px)",
                      fontWeight: 600,
                      lineHeight: 1.35,
                    }}
                  >
                    14 anos de projetos e festivais internacionais
                    viram método. Aprenda com quem faz.
                  </p>

                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: "var(--font-c-sans, sans-serif)",
                      fontSize: "clamp(16px, 1.6vw, 22px)",
                      color: "oklch(0.42 0 0)",
                    }}
                  >
                    A Atama Filmes cria sua primeira formação presencial
                    de produção audiovisual, em Porto Alegre.
                  </p>
                </div>

              </div>

              {/* ── COL DIREITA — padding externo ao vitrine, mesma medida da col esquerda ── */}
              <div className="lg:col-span-5 border-t lg:border-t-0 px-section-md md:px-section-lg lg:px-section-xl py-section-lg flex flex-col">{/* py-10=40→48px normalizado */}
                  <div className="rounded-surface overflow-hidden bg-background flex flex-col flex-1" style={{ boxShadow: "0 16px 48px -6px rgba(0,0,0,0.14), 0 4px 20px -4px rgba(0,0,0,0.08)" }}>
                    <div className="aspect-video bg-[#0d0d0d] relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/comer-beber-e-aprender.jpg`}
                        alt="Cena de set de filmagem"
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                      />
                      <div
                        className="absolute inset-0"
                        aria-hidden="true"
                        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)" }}
                      />
                      <div className="absolute bottom-3 left-3">
                        <span
                          className="font-semibold tracking-[0.12em] bg-white/15 backdrop-blur-sm text-white px-2.5 py-1 rounded-full"
                          style={{ fontSize: "clamp(11px, 0.75vw, 13px)" }}
                        >
                          Inicia em 20 de junho de 2026
                        </span>
                      </div>
                    </div>

                    <div className="p-ui-lg">
                      <p
                        className="tracking-[0.22em] uppercase text-primary font-semibold mb-1.5"
                        style={{ fontSize: "clamp(11px, 0.75vw, 13px)" }}
                      >
                        Atama Lab
                      </p>
                      <h4
                        className="font-bold text-foreground leading-snug mb-1"
                        style={{ fontSize: "clamp(16px, 1.2vw, 20px)" }}
                      >
                        Do roteiro à entrega de um projeto real.
                      </h4>
                      <p
                        className="mb-4"
                        style={{ fontSize: "clamp(14px, 1vw, 16px)", color: "oklch(0.42 0 0)" }}
                      >
                        Com Rogério e Rose
                      </p>

                      <div className="border-t border-border py-4 grid grid-cols-2 gap-ui-lg">
                        {[
                          ["Duração", "20 horas"],
                          ["Formato", "Presencial"],
                          ["Local", "Porto Alegre, RS"],
                          ["Turma", "Turma reduzida"],
                        ].map(([label, value]) => (
                          <div key={label}>
                            <p
                              className="tracking-[0.15em] uppercase mb-1"
                              style={{ fontSize: "clamp(11px, 0.75vw, 12px)", color: "oklch(0.48 0 0)" }}
                            >
                              {label}
                            </p>
                            <p
                              className="font-medium text-foreground"
                              style={{ fontSize: "clamp(14px, 1vw, 16px)" }}
                            >
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-border pt-4 space-y-2">
                        <Link
                          href="/lab"
                          className={cn(buttonVariants(), "w-full justify-center rounded-full h-auto py-2 px-4 text-sm lg:py-2.5 lg:px-5 lg:text-[15px] 2xl:py-3 2xl:px-6 2xl:text-base")}
                        >
                          Reservar vaga
                        </Link>
                        <Link
                          href="/lab"
                          className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "w-full justify-center rounded-full text-muted-foreground h-auto py-2 px-4 text-sm lg:py-2.5 lg:px-5 lg:text-[15px] 2xl:py-3 2xl:px-6 2xl:text-base"
                          )}
                        >
                          Saiba mais sobre o curso →
                        </Link>
                      </div>
                    </div>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
