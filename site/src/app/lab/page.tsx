import type { Metadata } from "next";
import { LabHero } from "@/components/lab/lab-hero";
import { LabForQuem } from "@/components/lab/lab-for-quem";
import { LabEmenta } from "@/components/lab/lab-ementa";
import { LabProvaSocial } from "@/components/lab/lab-prova-social";
import { LabDetalhes } from "@/components/lab/lab-detalhes";
import { LabPreco } from "@/components/lab/lab-preco";
import { LabFaq } from "@/components/lab/lab-faq";

export const metadata: Metadata = {
  title: "Atama Lab — Curso Presencial de Produção Audiovisual | Porto Alegre",
  description:
    "20 horas em 2 semanas. Aprenda produção audiovisual com quem produziu para Amazon e Nick Jr. Turma de junho 2026 em Porto Alegre. Vagas limitadas.",
  openGraph: {
    title: "Atama Lab — Curso Presencial de Produção Audiovisual em Porto Alegre",
    description:
      "20 horas em 2 semanas. Aprenda produção audiovisual com quem produziu para Amazon e Nick Jr. Turma de junho 2026 em Porto Alegre. Vagas limitadas.",
    url: "https://atamafilmes.com.br/lab",
    images: [
      {
        url: "/og/lab.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function LabPage() {
  return (
    <>
      <LabHero />
      <LabForQuem />
      <LabEmenta />
      <LabProvaSocial />
      <LabDetalhes />
      <LabPreco />
      <LabFaq />
    </>
  );
}
