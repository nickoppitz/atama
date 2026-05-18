"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InscricaoModal } from "./inscricao-modal";

export function LabPreco() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section style={{ backgroundColor: "var(--lab-tint)" }} className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            {/* Preço — placeholder até decisão de Rogério/Rose */}
            <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-2">
              Investimento
            </p>
            <p className="text-[clamp(36px,6vw,52px)] font-bold text-foreground">
              R$ —
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {/* TODO: parcelamento após decisão */}
              Pagamento via Mercado Pago — Pix, cartão ou boleto.
            </p>

            <p className="mt-4 text-sm text-muted-foreground">
              Turma de junho 2026 — vagas limitadas.
            </p>

            <Button
              size="lg"
              className="mt-8 h-14 w-full sm:w-auto px-10 text-base font-semibold"
              onClick={() => setModalOpen(true)}
            >
              Garantir minha vaga →
            </Button>

            <p className="mt-3 text-xs text-muted-foreground">
              Pagamento seguro via Mercado Pago.
            </p>
          </div>
        </div>
      </section>

      <InscricaoModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
}
