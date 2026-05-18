import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos — Atama Filmes",
  description:
    "Portfólio de produções da Atama Filmes: documentários, longas-metragens e séries. Do Amazon Prime ao Nick Jr., do Sul do Brasil para festivais internacionais.",
};

const projetos = [
  {
    titulo: "Comer, Beber e Aprender",
    ano: "2024",
    categoria: "Documentário",
    descricao:
      "Documentário sobre cultura alimentar e saberes populares no Sul do Brasil.",
    plataforma: "Em distribuição",
    destaque: true,
  },
  {
    titulo: "Os Famosos e os Duendes da Morte",
    ano: "2009",
    categoria: "Longa-metragem",
    descricao:
      "Longa de ficção premiado em festivais nacionais e internacionais.",
    plataforma: "Amazon Prime Video",
    destaque: false,
  },
  {
    titulo: "Projeto Nick Jr.",
    ano: "2022",
    categoria: "Série",
    descricao: "Produção para a plataforma infantil Nick Jr.",
    plataforma: "Nick Jr.",
    destaque: false,
  },
  {
    titulo: "Projeto A",
    ano: "2020",
    categoria: "Documentário",
    descricao: "Documentário em desenvolvimento.",
    plataforma: "Em produção",
    destaque: false,
  },
  {
    titulo: "Projeto B",
    ano: "2019",
    categoria: "Curta-metragem",
    descricao: "Curta em circuito de festivais.",
    plataforma: "Festivais",
    destaque: false,
  },
  {
    titulo: "Projeto C",
    ano: "2018",
    categoria: "Documentário",
    descricao: "Documentário sobre tema regional.",
    plataforma: "Exibição nacional",
    destaque: false,
  },
];

export default function ProjetosPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="max-w-2xl mb-12">
        <h1 className="text-[clamp(28px,5vw,42px)] font-bold text-foreground leading-tight">
          Projetos
        </h1>
        <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
          14 anos de produção audiovisual. Do documentário ao longa de ficção,
          do streaming às telas de festival.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((projeto, i) => (
          <div
            key={i}
            className="group flex flex-col border border-border rounded-lg overflow-hidden bg-card hover:border-primary/40 transition-colors"
          >
            {/* Thumbnail placeholder */}
            <div className="aspect-video bg-muted flex items-center justify-center">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                {projeto.categoria}
              </span>
            </div>

            <div className="flex flex-col flex-1 p-5 gap-3">
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-base font-semibold text-foreground leading-snug">
                  {projeto.titulo}
                </h2>
                <span className="text-xs text-muted-foreground shrink-0 mt-0.5">
                  {projeto.ano}
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {projeto.descricao}
              </p>

              <div className="flex items-center gap-2 pt-1">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {projeto.plataforma}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-sm text-muted-foreground text-center">
        Catálogo completo em atualização.{" "}
        <a href="/contato" className="text-primary hover:underline">
          Entre em contato
        </a>{" "}
        para licenciamento ou co-produção.
      </p>
    </div>
  );
}
