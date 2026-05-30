import type { Metadata } from "next";
import { FestivalBadge, StreamingBadge } from "@/components/project-badges";

export const metadata: Metadata = {
  title: "Projetos — Atama Filmes",
  description:
    "Portfólio de produções da Atama Filmes: documentários, longas e animações. Amazon Prime, Nick Jr. e festivais internacionais.",
};

const projetos = [
  {
    titulo: "Além de Nós",
    subtitulo: "Beyond Us",
    ano: "2023",
    categoria: "Longa-metragem",
    descricao:
      "Road movie de ficção. Thiago Lacerda em 5.000km de estradas, 27 diárias. Festivais internacionais.",
    plataforma: "Festivais internacionais",
  },
  {
    titulo: "Universo Z",
    subtitulo: null,
    ano: "2022",
    categoria: "Animação",
    descricao: "Série de animação infantil exibida em plataformas internacionais.",
    plataforma: "Amazon Prime · Nick Jr.",
  },
  {
    titulo: "Comer, Beber e Aprender",
    subtitulo: null,
    ano: "2024",
    categoria: "Documentário",
    descricao: "Documentário sobre cultura alimentar e saberes populares no Sul do Brasil.",
    plataforma: "Em distribuição",
  },
  {
    titulo: "Sobreviventes da Pampa",
    subtitulo: null,
    ano: "2019",
    categoria: "Documentário",
    descricao: "Road movie documental sobre identidade gaúcha e os limites do pampa.",
    plataforma: "Circuito nacional",
  },
  {
    titulo: "Não Esqueça de Mim",
    subtitulo: null,
    ano: "2017",
    categoria: "Documentário",
    descricao: "Documentário sobre memória e pertencimento.",
    plataforma: "Exibição nacional",
  },
  {
    titulo: "A Pampa é a Terra. O Pampa Somos Nós.",
    subtitulo: null,
    ano: "2016",
    categoria: "Documentário",
    descricao: "Documentário sobre o bioma pampa e as comunidades que o habitam.",
    plataforma: "Exibição nacional",
  },
];

export default function ProjetosPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="max-w-xl mb-14">
        <h1 className="text-[clamp(26px,4vw,40px)] font-bold text-foreground leading-tight tracking-tight">
          Projetos
        </h1>
        <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">
          14 anos de produção independente. Documentários, ficção e animação
          — do Sul do Brasil para festivais e plataformas internacionais.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {projetos.map((projeto, i) => (
          <div key={i} className="group bg-background p-6 hover:bg-muted/40 transition-colors duration-200 ease-out">
            {/* Thumbnail placeholder */}
            <div className="aspect-video bg-[#111] rounded mb-5 overflow-hidden relative">
              <div className="absolute inset-0 bg-[#1a1a1a]" />

              {/* Badge festival — canto superior esquerdo */}
              {projeto.plataforma === "Festivais internacionais" && (
                <div className="absolute top-3 left-3 z-10">
                  <FestivalBadge size={60} />
                </div>
              )}

              {/* Badges streaming — canto inferior direito */}
              {projeto.plataforma === "Amazon Prime · Nick Jr." && (
                <div className="absolute bottom-2 right-2 z-10 flex gap-1">
                  <StreamingBadge platform="amazon-prime" />
                  <StreamingBadge platform="nick-jr" />
                </div>
              )}

              <div className="absolute bottom-3 left-3">
                <span className="text-[9px] tracking-[0.18em] text-white/40 uppercase">
                  {projeto.categoria}
                </span>
              </div>
            </div>

            <div className="flex items-start justify-between gap-2 mb-2">
              <h2 className="text-[15px] font-semibold text-foreground leading-snug">
                {projeto.titulo}
              </h2>
              <span className="text-xs text-muted-foreground shrink-0 mt-0.5 tabular-nums">
                {projeto.ano}
              </span>
            </div>

            {projeto.subtitulo && (
              <p className="text-[11px] tracking-[0.12em] text-muted-foreground/60 uppercase mb-2">
                {projeto.subtitulo}
              </p>
            )}

            <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">
              {projeto.descricao}
            </p>

            {/* Plataforma */}
            {projeto.plataforma === "Amazon Prime · Nick Jr." ? (
              <div className="flex gap-1.5 items-center">
                <StreamingBadge platform="amazon-prime" />
                <StreamingBadge platform="nick-jr" />
              </div>
            ) : projeto.plataforma !== "Festivais internacionais" ? (
              <span className="text-[11px] tracking-[0.08em] text-primary/80 uppercase">
                {projeto.plataforma}
              </span>
            ) : null}
          </div>
        ))}
      </div>

      <p className="mt-10 text-[13px] text-muted-foreground">
        Catálogo em atualização.{" "}
        <a href="/contato" className="text-foreground hover:text-primary underline underline-offset-2 transition-colors duration-200 ease-out">
          Entre em contato
        </a>{" "}
        para licenciamento ou co-produção.
      </p>
    </div>
  );
}
