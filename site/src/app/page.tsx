import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Atama Filmes — Produtora Audiovisual em Porto Alegre",
  description:
    "Produtora audiovisual gaúcha. Do documentário ao longa de ficção, do Amazon Prime ao Nick Jr. 14 anos revelando histórias do Brasil para o mundo.",
};

export default function HomePage() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-[clamp(28px,5vw,48px)] font-bold text-foreground leading-tight max-w-2xl">
        Atama Filmes — Produtora Audiovisual em Porto Alegre
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-xl leading-relaxed">
        14 anos revelando histórias. Do Amazon Prime ao Nick Jr., do Sul do
        Brasil para festivais internacionais.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link href="/projetos" className={cn(buttonVariants({ size: "lg" }))}>
          Ver projetos →
        </Link>
        <Link href="/lab" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
          Conheça o Atama Lab →
        </Link>
      </div>
    </section>
  );
}
