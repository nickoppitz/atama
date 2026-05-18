"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InscricaoModal } from "./inscricao-modal";

export function LabHero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        className="relative min-h-[480px] md:min-h-[560px] flex items-center"
        style={{ backgroundColor: "var(--primary)" }}
      >
        {/* Overlay + conteúdo — fallback sólido laranja até ter imagem real */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="text-[clamp(28px,5vw,48px)] font-bold leading-tight text-white">
              De iniciante a realizador em 2 semanas.{" "}
              <span className="block">Curso presencial em Porto Alegre.</span>
            </h1>
            <p className="mt-4 text-[clamp(16px,2.5vw,18px)] text-white/85 leading-relaxed">
              20 horas de curso intensivo presencial. Do roteiro à entrega de um
              projeto real. Porto Alegre, junho 2026.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="h-14 px-8 text-base bg-white text-primary hover:bg-white/90 font-semibold"
                onClick={() => setModalOpen(true)}
              >
                Garantir minha vaga →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background border-t border-border p-3">
        <Button
          className="w-full h-12 text-base font-semibold"
          onClick={() => setModalOpen(true)}
        >
          Garantir minha vaga →
        </Button>
      </div>

      <InscricaoModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
}
