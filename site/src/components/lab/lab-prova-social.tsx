export function LabProvaSocial() {
  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-section-lg md:gap-section-xl items-center">{/* gap-10=40→48px, gap-16=64px normalizado */}
          {/* Foto placeholder */}
          <div className="aspect-[4/3] rounded-md bg-border overflow-hidden">
            {/* TODO: substituir por Image do next/image com foto da Evelyn */}
            <div className="w-full h-full flex items-center justify-center text-sm text-muted-foreground">
              Foto da Evelyn Fernandes
            </div>
          </div>

          {/* Citação */}
          <blockquote className="relative">
            <span
              className="absolute -top-4 -left-2 text-7xl font-bold leading-none select-none"
              style={{ color: "oklch(0.65 0.19 45 / 0.25)" }}
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="text-[clamp(18px,3vw,22px)] font-bold text-foreground leading-snug pt-6">
              Vim como aluna. Saí como co-realizadora.
            </p>
            <cite className="block mt-4 not-italic text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground font-medium">
                Evelyn Fernandes
              </strong>{" "}
              — participou do Atama Lab e hoje assina como co-realizadora no
              documentário{" "}
              <em>Comer, Beber e Aprender</em>. A trajetória dela é o tipo de
              coisa que o Lab propicia: contato real com profissionais, projeto
              real, e a descoberta de que dá pra fazer.
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
