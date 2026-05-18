"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContatoForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");

    // TODO: integrar com Formspree ou similar
    await new Promise((r) => setTimeout(r, 1000));

    setState("success");
  }

  if (state === "success") {
    return (
      <div className="mt-10 p-6 bg-muted rounded-lg">
        <p className="font-semibold text-foreground">Mensagem enviada!</p>
        <p className="text-sm text-muted-foreground mt-1">
          Retornamos em até 2 dias úteis.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="nome" className="text-sm font-medium text-foreground">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          placeholder="Seu nome"
          className="h-11 px-3 rounded-md border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="seu@email.com"
          className="h-11 px-3 rounded-md border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="assunto" className="text-sm font-medium text-foreground">
          Assunto
        </label>
        <select
          id="assunto"
          name="assunto"
          required
          className="h-11 px-3 rounded-md border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">Selecione...</option>
          <option value="parceria">Parceria ou co-produção</option>
          <option value="licenciamento">Licenciamento</option>
          <option value="lab">Atama Lab</option>
          <option value="imprensa">Imprensa</option>
          <option value="outro">Outro</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="mensagem" className="text-sm font-medium text-foreground">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          placeholder="Descreva seu projeto ou dúvida..."
          className="px-3 py-2.5 rounded-md border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
        />
      </div>

      {state === "error" && (
        <p className="text-sm text-destructive">
          Erro ao enviar. Tente novamente ou escreva para{" "}
          <a href="mailto:contato@atamafilmes.com.br" className="underline">
            contato@atamafilmes.com.br
          </a>
          .
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="h-12 text-base"
        disabled={state === "loading"}
      >
        {state === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar mensagem"
        )}
      </Button>
    </form>
  );
}
