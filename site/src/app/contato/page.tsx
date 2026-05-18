import type { Metadata } from "next";
import { ContatoForm } from "@/components/contato-form";

export const metadata: Metadata = {
  title: "Contato — Atama Filmes",
  description:
    "Entre em contato com a Atama Filmes para projetos, parcerias, licenciamento ou dúvidas sobre o Atama Lab.",
};

export default function ContatoPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="max-w-xl">
        <h1 className="text-[clamp(28px,5vw,42px)] font-bold text-foreground leading-tight">
          Contato
        </h1>
        <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
          Para projetos, parcerias, licenciamento ou dúvidas sobre o Atama Lab.
        </p>

        <ContatoForm />

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm font-medium text-foreground mb-3">
            Ou entre em contato diretamente:
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:contato@atamafilmes.com.br"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              contato@atamafilmes.com.br
            </a>
            <a
              href="https://instagram.com/atamafilmes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              @atamafilmes no Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
