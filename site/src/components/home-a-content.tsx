"use client";

export function HomeAContent() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-6 text-foreground">
          Atama Filmes
        </h1>
        <p className="text-xl text-foreground/70 mb-12 max-w-2xl">
          Versão A — Design exploration
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Sobre</h2>
            <p className="text-foreground/70">
              Conheça a história e a missão da Atama Filmes.
            </p>
          </div>
          <div className="p-8 border border-border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Projetos</h2>
            <p className="text-foreground/70">
              Explore nosso portfólio de produções audiovisuais.
            </p>
          </div>
          <div className="p-8 border border-border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Lab</h2>
            <p className="text-foreground/70">
              Formação presencial em produção audiovisual.
            </p>
          </div>
          <div className="p-8 border border-border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contato</h2>
            <p className="text-foreground/70">
              Entre em contato conosco para parcerias e informações.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
