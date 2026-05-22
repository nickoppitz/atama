import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    pergunta: "Preciso ter câmera ou equipamento próprio?",
    resposta:
      "Não. Parte do método é aprender a trabalhar com o que você tem — inclusive o celular.",
  },
  {
    pergunta: "Sou iniciante. Dá pra acompanhar?",
    resposta:
      "Feito para quem está começando. Se você não sabe nada, você está no lugar certo.",
  },
  {
    pergunta: "20 horas em 2 semanas é muito intenso?",
    resposta:
      "É intensivo de propósito. Audiovisual se aprende fazendo, não lendo. A intensidade é parte do método.",
  },
  {
    pergunta: "O que eu entrego no final?",
    resposta:
      "Um projeto real — feito por você, do roteiro à entrega. Você sai com algo no portfólio.",
  },
  {
    pergunta: "E se eu não puder em junho?",
    resposta:
      "As próximas turmas estão sendo planejadas. Deixe seu e-mail e avisamos quando abrir.",
  },
];

export function LabFaq() {
  return (
    <section className="py-16 md:py-20 bg-background pb-32 md:pb-20">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(22px,4vw,32px)] font-bold text-foreground mb-10">
          Dúvidas frequentes
        </h2>
        <Accordion className="flex flex-col gap-0">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-base font-medium text-foreground text-left">
                {faq.pergunta}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] text-muted-foreground leading-relaxed">
                {faq.resposta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
