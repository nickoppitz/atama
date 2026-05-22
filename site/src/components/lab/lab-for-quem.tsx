import { CheckCircle, XCircle } from "lucide-react";

const paraQuemE = [
  "Você está começando e quer aprender fazendo",
  "Não tem câmera ou experiência prévia — não é requisito",
  "Mora em Porto Alegre ou pode estar presencialmente",
  "Quer descobrir se audiovisual é para você antes de investir em faculdade",
];

const naoParaQuem = [
  "Você já tem experiência sólida em produção",
  "Procura um curso online ou à distância",
  "Quer um certificado de 40h de EAD sem prática de campo",
];

export function LabForQuem() {
  return (
    <section style={{ backgroundColor: "var(--lab-tint)" }} className="py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Para quem é */}
          <div>
            <h2 className="text-[clamp(20px,3vw,24px)] font-bold text-foreground mb-6">
              Para quem é
            </h2>
            <ul className="flex flex-col gap-4">
              {paraQuemE.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    className="shrink-0 mt-0.5 text-primary"
                    size={20}
                  />
                  <span className="text-base text-foreground leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Para quem não é */}
          <div>
            <h2 className="text-[clamp(20px,3vw,24px)] font-bold text-foreground mb-6">
              Para quem não é
            </h2>
            <ul className="flex flex-col gap-4">
              {naoParaQuem.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle
                    className="shrink-0 mt-0.5 text-muted-foreground"
                    size={20}
                  />
                  <span className="text-base text-muted-foreground leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
