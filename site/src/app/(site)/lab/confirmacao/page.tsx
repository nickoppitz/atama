import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Inscrição confirmada — Atama Lab",
  description: "Sua inscrição no Atama Lab foi recebida com sucesso.",
  robots: { index: false },
};

export default function ConfirmacaoPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">
      <CheckCircle className="text-primary mb-6" size={48} strokeWidth={1.5} />

      <h1 className="text-[clamp(24px,4vw,36px)] font-bold text-foreground">
        Inscrição confirmada!
      </h1>

      <p className="mt-4 text-lg text-muted-foreground max-w-md leading-relaxed">
        Recebemos seu pagamento e sua vaga está garantida no Atama Lab. Em
        breve você receberá um e-mail com as informações do curso.
      </p>

      <div className="mt-8 bg-muted rounded-lg p-6 max-w-sm w-full text-left">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
          Próximos passos
        </h2>
        <ul className="flex flex-col gap-2 text-sm text-foreground">
          <li>✓ Verifique sua caixa de entrada (e o spam)</li>
          <li>✓ Salve a data: junho 2026, Porto Alegre</li>
          <li>✓ Dúvidas? Escreva para{" "}
            <a
              href="mailto:contato@atamafilmes.com.br"
              className="text-primary hover:underline"
            >
              contato@atamafilmes.com.br
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link href="/lab" className={cn(buttonVariants({ variant: "outline" }))}>
          Voltar ao Lab
        </Link>
        <Link href="/" className={cn(buttonVariants())}>
          Ver projetos da Atama →
        </Link>
      </div>
    </div>
  );
}
