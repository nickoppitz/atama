import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Atama Filmes
          </h1>
          <p className="text-xl text-foreground/70">
            Versões de Design — Escolha uma para visualizar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Versão A */}
          <Link
            href="/a"
            className={cn(
              "group p-8 border-2 border-border rounded-lg hover:border-primary hover:bg-muted transition-all duration-200",
              "flex flex-col items-start justify-start min-h-48"
            )}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 group-hover:bg-primary/20 transition-colors duration-200 ease-out">
              Versão A
            </span>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Design A
            </h2>
            <p className="text-foreground/70 flex-1">
              Exploração inicial de interface e arquitetura visual.
            </p>
            <span className="text-primary font-semibold mt-4 group-hover:translate-x-1 transition-transform duration-200 ease-out">
              Abrir →
            </span>
          </Link>

          {/* Versão B */}
          <Link
            href="/b"
            className={cn(
              "group p-8 border-2 border-border rounded-lg hover:border-primary hover:bg-muted transition-all duration-200",
              "flex flex-col items-start justify-start min-h-48"
            )}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 group-hover:bg-primary/20 transition-colors duration-200 ease-out">
              Versão B
            </span>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Design B (Atual)
            </h2>
            <p className="text-foreground/70 flex-1">
              Carousel com projetos, seção Atama Lab com vitrine do curso, e badges de streaming.
            </p>
            <span className="text-primary font-semibold mt-4 group-hover:translate-x-1 transition-transform duration-200 ease-out">
              Abrir →
            </span>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-foreground/50 text-sm">
            Última atualização: 22 de maio de 2026
          </p>
        </div>
      </div>
    </div>
  );
}
