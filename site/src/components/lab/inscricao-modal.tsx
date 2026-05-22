"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface InscricaoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InscricaoModal({ open, onOpenChange }: InscricaoModalProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    // TODO: substituir pelo endpoint Formspree ou similar
    await new Promise((r) => setTimeout(r, 1000));

    setLoading(false);
    setSubmitted(true);

    // Redirecionar para Mercado Pago após 1.5s
    setTimeout(() => {
      window.location.href = "https://mercadopago.com.br"; // TODO: URL real do checkout
    }, 1500);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Reservar sua vaga</DialogTitle>
          <p className="text-sm text-muted-foreground">
            Seus dados ficam aqui. O pagamento é na próxima etapa.
          </p>
        </DialogHeader>

        {submitted ? (
          <div className="py-6 text-center">
            <p className="text-foreground font-medium">Pronto.</p>
            <p className="text-sm text-muted-foreground mt-1">
              Indo para o pagamento agora.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="nome" className="text-sm font-medium">
                Nome completo
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                placeholder="Maria Silva"
                className="h-11 px-3 rounded-md border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium">
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
              <label htmlFor="whatsapp" className="text-sm font-medium">
                WhatsApp
              </label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                required
                placeholder="(51) 99999-9999"
                className="h-11 px-3 rounded-md border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <Button type="submit" className="h-12 text-base mt-2" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Ir para o pagamento"
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Pix, cartão ou boleto.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
