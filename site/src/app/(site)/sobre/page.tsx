import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre — Atama Filmes",
  description:
    "Conheça a Atama Filmes: produtora audiovisual fundada em Porto Alegre em 2010 por Rogério Rodrigues e Rose Rodrigues.",
};

export default function SobrePage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      {/* Intro */}
      <div className="max-w-2xl mb-16">
        <h1 className="text-[clamp(28px,5vw,42px)] font-bold text-foreground leading-tight">
          Sobre a Atama
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Fundada em 2010 em Porto Alegre, a Atama Filmes produz documentários,
          ficções e conteúdo para plataformas nacionais e internacionais. 14
          anos revelando histórias do Brasil para o mundo.
        </p>
      </div>

      {/* Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {/* Rogério */}
        <div className="flex flex-col gap-5">
          <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
            <span className="text-sm text-muted-foreground">
              Foto de Rogério Rodrigues
            </span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">
              Rogério Rodrigues
            </h2>
            <p className="text-sm text-primary font-medium mt-0.5">
              Diretor & Co-fundador
            </p>
            <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">
              Diretor com mais de 14 anos de experiência em produções
              documentais e ficção. Assina a direção de longas e séries
              exibidos em festivais nacionais e plataformas como Amazon Prime
              Video. Professor e mentor do Atama Lab.
            </p>
          </div>
        </div>

        {/* Rose */}
        <div className="flex flex-col gap-5">
          <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
            <span className="text-sm text-muted-foreground">
              Foto de Rose Rodrigues
            </span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">
              Rose Rodrigues
            </h2>
            <p className="text-sm text-primary font-medium mt-0.5">
              Produtora & Co-fundadora
            </p>
            <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">
              Produtora executiva responsável pela gestão de projetos, relações
              com parceiros e distribuição. Coordena as operações da Atama
              Filmes e do Atama Lab desde a fundação.
            </p>
          </div>
        </div>
      </div>

      {/* Números */}
      <div className="border-t border-border pt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-8">
          Em números
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { numero: "14+", label: "anos de produção" },
            { numero: "10+", label: "produções realizadas" },
            { numero: "3", label: "plataformas internacionais" },
            { numero: "POA", label: "Porto Alegre, RS" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[clamp(28px,4vw,40px)] font-bold text-foreground">
                {item.numero}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
