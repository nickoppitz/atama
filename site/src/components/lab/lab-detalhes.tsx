import { Calendar, MapPin, Clock, Users } from "lucide-react";

const detalhes = [
  {
    icon: Calendar,
    label: "Quando",
    valor: "Junho 2026", // TODO: confirmar datas exatas com Rogério/Rose
  },
  {
    icon: MapPin,
    label: "Onde",
    valor: "Porto Alegre, RS", // TODO: confirmar endereço exato (Casa da Chácara?)
  },
  {
    icon: Clock,
    label: "Duração",
    valor: "20 horas",
  },
  {
    icon: Users,
    label: "Vagas",
    valor: "Turma reduzida", // TODO: confirmar número de vagas com Rogério/Rose
  },
];

export function LabDetalhes() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(22px,4vw,32px)] font-bold text-foreground mb-10">
          Detalhes do curso
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {detalhes.map(({ icon: Icon, label, valor }) => (
            <div key={label} className="flex flex-col gap-2">
              <Icon className="text-primary" size={24} />
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {label}
              </p>
              <p className="text-lg font-bold text-foreground">{valor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
