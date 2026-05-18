import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Atama Filmes — Produtora Audiovisual em Porto Alegre",
  description:
    "Produtora audiovisual independente. Documentários, longas e séries — do Sul do Brasil para festivais e plataformas internacionais.",
};

const projetos = [
  {
    slug: "alem-de-nos",
    titulo: "Além de Nós",
    subtitulo: "Beyond Us",
    categoria: "Longa-metragem",
    nota: "Festivais internacionais",
    destaque: true,
  },
  {
    slug: "universo-z",
    titulo: "Universo Z",
    categoria: "Animação",
    nota: "Amazon Prime · Nick Jr.",
  },
  {
    slug: "comer-beber-e-aprender",
    titulo: "Comer, Beber e Aprender",
    categoria: "Documentário",
    nota: "2024",
  },
  {
    slug: "sobreviventes-da-pampa",
    titulo: "Sobreviventes da Pampa",
    categoria: "Documentário",
    nota: "Road movie",
  },
  {
    slug: "nao-esqueca-de-mim",
    titulo: "Não Esqueça de Mim",
    categoria: "Documentário",
    nota: "",
  },
  {
    slug: "a-pampa-e-a-terra",
    titulo: "A Pampa é a Terra",
    categoria: "Documentário",
    nota: "",
  },
];

const [destaque, ...resto] = projetos;

export default function HomePage() {
  return (
    <>
      {/* Projeto em destaque — full width */}
      <Link
        href="/projetos"
        className="group relative flex items-end w-full overflow-hidden bg-[#111]"
        style={{ minHeight: "clamp(360px, 58vw, 720px)" }}
      >
        {/* Placeholder — substituir por <Image> quando assets chegarem */}
        <div className="absolute inset-0 bg-[#111]" />

        {/* Gradiente de leitura */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)",
          }}
        />

        {/* Informações do projeto */}
        <div className="relative z-10 w-full px-6 pb-8 md:px-12 md:pb-12">
          {destaque.subtitulo && (
            <p className="text-[11px] tracking-[0.18em] text-white/40 uppercase mb-1.5">
              {destaque.subtitulo}
            </p>
          )}
          <h1
            className="font-bold text-white leading-none tracking-tight"
            style={{ fontSize: "clamp(28px, 5vw, 56px)" }}
          >
            {destaque.titulo}
          </h1>
          <p className="mt-2 text-[13px] tracking-[0.12em] text-white/50 uppercase">
            {destaque.categoria}
            {destaque.nota ? ` · ${destaque.nota}` : ""}
          </p>
        </div>

        {/* Hover affordance */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-[11px] tracking-widest text-white/60 uppercase">
            Ver projetos →
          </span>
        </div>
      </Link>

      {/* Grid */}
      <div className="px-4 sm:px-6 py-4 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {resto.map((projeto) => (
            <Link
              key={projeto.slug}
              href="/projetos"
              className="group relative block aspect-video overflow-hidden bg-[#111]"
            >
              {/* Placeholder thumbnail */}
              <div className="absolute inset-0 bg-[#1a1a1a] group-hover:brightness-110 transition-all duration-300" />

              {/* Gradiente */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)",
                }}
              />

              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-[9px] tracking-[0.18em] text-white/40 uppercase mb-1">
                  {projeto.categoria}
                  {projeto.nota ? ` · ${projeto.nota}` : ""}
                </p>
                <h2 className="text-[13px] font-medium text-white leading-snug">
                  {projeto.titulo}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-5 flex justify-end">
          <Link
            href="/projetos"
            className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Portfólio completo →
          </Link>
        </div>
      </div>

      {/* Atama Lab — compacto */}
      <div className="border-t border-border mt-6">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 md:py-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-primary mb-1.5">
              Atama Lab
            </p>
            <p className="text-base font-medium text-foreground">
              Curso presencial de produção audiovisual.{" "}
              <span className="text-muted-foreground font-normal">
                Porto Alegre, junho 2026.
              </span>
            </p>
          </div>
          <Link
            href="/lab"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "shrink-0 text-xs tracking-wide"
            )}
          >
            Conhecer o Lab →
          </Link>
        </div>
      </div>
    </>
  );
}
