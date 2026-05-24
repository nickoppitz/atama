"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useCallback } from "react";
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
    festivais: [
      { label: "CINÉLATINO" },
    ] as Festival[],
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
    festivais: [
      { label: "OLHAR DE CINEMA" },
    ] as Festival[],
    streaming: ["canal-futura"] as const,
  },
];

interface HomeContentProps {
  /** Carousel ocupa 100svh — header transparente flutua sobre ele */
  overlapHeader?: boolean;
}

export function HomeAContent({ overlapHeader = false }: HomeContentProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSlide = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slideWidth = track.offsetWidth;
    track.scrollTo({ left: slideWidth * index, behavior: "smooth" });
    setActiveIndex(index);
  }, []);

  const handlePrev = useCallback(() => {
    scrollToSlide(Math.max(0, activeIndex - 1));
  }, [activeIndex, scrollToSlide]);

  const handleNext = useCallback(() => {
    scrollToSlide(Math.min(projetos.length - 1, activeIndex + 1));
  }, [activeIndex, scrollToSlide]);

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const slideWidth = track.offsetWidth;
    const index = Math.round(track.scrollLeft / slideWidth);
    setActiveIndex(index);
  }, []);

  const carouselHeight = overlapHeader
    ? "calc(100svh - 120px)"
    : "clamp(320px, calc(100vh - 96px), 640px)";

  return (
    <>
      {/* Carousel — full width */}
      <div className="relative w-full overflow-hidden">
        {/* Track */}
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
            <Link
              key={projeto.slug}
              href="/projetos"
              className="group relative flex-none w-full snap-start bg-[#111] overflow-hidden"
              style={{ height: carouselHeight }}
            >
              <div className="absolute inset-0 bg-[#111]" />
              {projeto.image && (
                <Image
                  src={projeto.image}
                  alt={projeto.titulo}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              )}

              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Gradiente de leitura */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 45%, transparent 70%)",
                }}
              />

              {/* Informações do projeto */}
              <div className="absolute top-1/2 left-0 right-0 z-10 px-16 md:px-20 -translate-y-1/2">
                {projeto.festivais.length > 0 && (
                  <div className="flex gap-3 mb-4">
                    {projeto.festivais.map((f) => (
                      <FestivalBadge key={f.label} size={88} label={f.label} sublabel={f.sublabel} header={f.header} />
                    ))}
                  </div>
                )}
                <div>
                  <p className="text-[11px] tracking-[0.18em] text-white/50 uppercase mb-1.5">
                    {projeto.categoria}
                  </p>
                  <h1
                    className="font-bold text-white leading-none tracking-tight"
                    style={{ fontSize: "clamp(28px, 5vw, 56px)" }}
                  >
                    {projeto.titulo}
                  </h1>
                  {projeto.streaming && (
                    <div className="flex items-center gap-4 mt-4">
                      {projeto.streaming.map((platform) => (
                        <StreamingBadge key={platform} platform={platform} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Seta esquerda */}
        {activeIndex > 0 && (
          <button
            onClick={handlePrev}
            aria-label="Projeto anterior"
            className="group absolute left-0 top-0 bottom-0 z-20 w-20 flex items-center justify-center cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <ChevronLeft size={24} className="relative text-white/0 group-hover:text-white/90 transition-colors duration-300 drop-shadow-lg" />
          </button>
        )}

        {/* Seta direita */}
        {activeIndex < projetos.length - 1 && (
          <button
            onClick={handleNext}
            aria-label="Próximo projeto"
            className="group absolute right-0 top-0 bottom-0 z-20 w-20 flex items-center justify-center cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <ChevronRight size={24} className="relative text-white/0 group-hover:text-white/90 transition-colors duration-300 drop-shadow-lg" />
          </button>
        )}

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
          {projetos.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
              className={cn(
                "rounded-full transition-all",
                index === activeIndex
                  ? "w-4 h-1.5 bg-white"
                  : "w-1.5 h-1.5 bg-white/40 hover:bg-white/60"
              )}
            />
          ))}
        </div>
      </div>

      {/* Atama Lab */}
      <div className="border-t border-border">

        {/* Bloco 1 — Manifesto tipográfico + Card */}
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:divide-x lg:divide-border">

            {/* Coluna editorial — 7/12 */}
            <div className="col-span-7 px-4 sm:px-6 lg:px-section-xl py-section-xl lg:py-24">{/* py-24=96px excede escala; pendente extensão sistêmica */}

              {/* Eyebrow com linha */}
              <div className="flex items-center gap-ui-lg mb-section-xl lg:mb-20">{/* mb-20=80px excede escala */}
                <span
                  className="font-bold tracking-[0.2em] uppercase text-primary shrink-0 leading-none"
                  style={{ fontSize: "clamp(18px, 2.2vw, 28px)" }}
                >
                  Atama Lab
                </span>
                <span className="flex-1 h-px bg-primary/30" />
              </div>

              {/* Número decorativo */}
              <div className="relative mb-5">
                <span
                  aria-hidden="true"
                  className="absolute -top-6 -left-1 font-black text-foreground/[0.04] leading-none select-none pointer-events-none"
                  style={{ fontSize: "clamp(80px, 11vw, 152px)" }}
                >
                  01
                </span>
                <p className="relative text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                  Iniciativa Atama Filmes
                </p>
              </div>

              {/* Manifesto tipográfico */}
              <div className="mb-10">
                <p className="font-light text-foreground/45 leading-tight tracking-wide" style={{ fontSize: "clamp(15px,1.5vw,20px)" }}>
                  Uma escola
                </p>
                <p className="font-light text-foreground/45 leading-tight tracking-wide mb-1" style={{ fontSize: "clamp(15px,1.5vw,20px)" }}>
                  dentro de uma
                </p>
                <h2
                  className="font-extrabold text-foreground leading-[0.9] tracking-[-0.01em]"
                  style={{ fontSize: "clamp(42px, 5.2vw, 72px)" }}
                >
                  Produtora.
                </h2>
              </div>

              {/* Declaração */}
              <div className="flex items-center gap-5 mb-9">
                <span className="w-6 h-px bg-foreground/20 shrink-0" />
                <p className="text-[clamp(13px,1.1vw,15px)] font-medium text-foreground italic tracking-wide">
                  Cinema se aprende fazendo.
                </p>
                <span className="flex-1 h-px bg-foreground/10" />
              </div>

              {/* Copy institucional */}
              <p className="text-[13px] text-muted-foreground leading-relaxed max-w-sm mb-10">
                O Atama Lab nasce de 14 anos de produção audiovisual independente. Uma produtora que abre seu método para quem quer começar a fazer.
              </p>

              {/* Módulos numerados */}
              <div className="space-y-ui-lg">
                {[
                  ["01", "Linguagem audiovisual: planos, ângulos, luz, som"],
                  ["02", "Roteiro e narrativa aplicados ao campo"],
                  ["03", "Direção e câmera em situação real"],
                  ["04", "Edição e entrega de projeto finalizado"],
                ].map(([n, text]) => (
                  <div key={n} className="flex items-baseline gap-ui-lg">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-primary/60 shrink-0 w-6">
                      {n}
                    </span>
                    <span className="text-[12px] text-muted-foreground leading-snug">
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA mobile only */}
              <div className="mt-10 lg:hidden">
                <Link href="/lab" className={cn(buttonVariants(), "w-full justify-center rounded-full")}>
                  Reservar minha vaga
                </Link>
              </div>

            </div>

            {/* Coluna card — 5/12 */}
            <div className="col-span-5 px-4 sm:px-6 lg:px-section-lg py-section-xl lg:py-24 flex flex-col justify-center">{/* px-10=40→48px normalizado; py-24=96px excede escala */}
              <div className="border border-border rounded-surface overflow-hidden bg-background">
                <div className="aspect-video bg-[#0d0d0d] relative overflow-hidden">
                  <Image
                    src="/comer-beber-e-aprender.jpg"
                    alt="Comer, Beber e Aprender"
                    fill
                    className="object-cover opacity-50"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)" }}
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[9px] font-semibold tracking-[0.18em] uppercase bg-white/15 backdrop-blur-sm text-white px-2.5 py-1 rounded-full">
                      Junho 2026
                    </span>
                  </div>
                </div>

                <div className="p-ui-lg">
                  <p className="text-[9px] tracking-[0.22em] uppercase text-primary font-semibold mb-1.5">
                    Atama Lab
                  </p>
                  <h3 className="text-[15px] font-bold text-foreground leading-snug mb-1">
                    Do roteiro à entrega de um projeto real.
                  </h3>
                  <p className="text-[12px] text-muted-foreground mb-4">
                    Com Rogério e Rose
                  </p>

                  <div className="border-t border-border py-4 grid grid-cols-2 gap-y-3 gap-x-3">
                    {[
                      ["Duração", "20 horas"],
                      ["Formato", "Presencial"],
                      ["Local", "Porto Alegre, RS"],
                      ["Turma", "Turma reduzida"],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <p className="text-[9px] tracking-[0.15em] uppercase text-muted-foreground/60 mb-0.5">
                          {label}
                        </p>
                        <p className="text-[12px] font-medium text-foreground">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 space-y-2">
                    <Link href="/lab" className={cn(buttonVariants(), "w-full justify-center rounded-full")}>
                      Reservar minha vaga
                    </Link>
                    <Link href="/lab" className={cn(buttonVariants({ variant: "ghost" }), "w-full justify-center text-[12px] text-muted-foreground")}>
                      Ver o Lab →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bloco 2 — Prova social Evelyn */}
        <div style={{ backgroundColor: "var(--lab-tint)" }} className="border-t border-primary/10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-section-xl py-section-lg lg:py-20">{/* py-14=56→48px normalizado; py-20=80px excede escala */}
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-center">

              <div className="col-span-8">
                <blockquote>
                  <p
                    className="font-bold text-foreground leading-[1.05] tracking-tight mb-6"
                    style={{ fontSize: "clamp(22px, 3.2vw, 42px)" }}
                  >
                    Vim como aluna.<br />
                    Saí como co-realizadora.
                  </p>
                  <cite className="not-italic flex items-center gap-4">
                    <span className="w-5 h-px bg-foreground/25 shrink-0" />
                    <div>
                      <span className="block text-[13px] font-semibold text-foreground">
                        Evelyn Fernandes
                      </span>
                      <span className="block text-[11px] text-muted-foreground mt-0.5">
                        Co-realizadora · <em className="italic">Comer, Beber e Aprender</em>
                      </span>
                      <span className="block text-[9px] tracking-[0.2em] uppercase text-muted-foreground/50 mt-1">
                        Canal Futura · Cinélatino
                      </span>
                    </div>
                  </cite>
                </blockquote>
              </div>

              <div className="hidden lg:flex col-span-4 justify-center" aria-hidden="true">
                <span
                  className="font-black text-primary/15 leading-none select-none"
                  style={{ fontSize: "clamp(120px, 16vw, 200px)" }}
                >
                  "
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}
