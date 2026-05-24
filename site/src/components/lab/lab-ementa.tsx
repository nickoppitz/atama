const itens = [
  "Entender linguagem audiovisual: planos, ângulos, luz, som",
  "Escrever e adaptar um roteiro para o campo",
  "Dirigir e operar câmera em situação real",
  "Editar e entregar um projeto finalizado",
  "Sair com um produto no portfólio — feito por você, do começo ao fim",
];

export function LabEmenta() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(22px,4vw,32px)] font-bold text-foreground mb-10">
          Em 2 semanas, você vai:
        </h2>
        <ul className="flex flex-col gap-ui-lg">
          {itens.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span
                className="shrink-0 text-primary font-bold text-lg leading-snug mt-0.5"
                aria-hidden="true"
              >
                →
              </span>
              <span className="text-base md:text-lg text-foreground leading-snug">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
