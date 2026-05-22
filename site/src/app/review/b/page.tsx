"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { HomeContent } from "@/components/home-content";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

function TransparentHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="px-16 md:px-20 py-5 md:py-6 flex items-center justify-between">
        {/* Logo branca com filtro CSS */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/logo-color.svg"
            alt="Atama Filmes"
            height={112}
            width={196}
            priority
            className="h-24 w-auto md:h-28 drop-shadow-md"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>

        {/* Nav + CTA — desktop */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/lab"
            className={cn(
              buttonVariants({ size: "sm" }),
              "rounded-xl bg-white text-[#111] hover:bg-white/90 border-0 font-semibold"
            )}
          >
            Atama Lab
          </Link>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden p-2 text-white"
            aria-label="Abrir menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </SheetTrigger>
          <SheetContent side="right" className="w-72 pt-12">
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-muted transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                <Link
                  href="/lab"
                  onClick={() => setOpen(false)}
                  className={cn(buttonVariants(), "w-full justify-center")}
                >
                  Garantir minha vaga →
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default function AtamaBPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 relative">
        <TransparentHeader />
        <HomeContent overlapHeader />
      </main>
      <Footer />
    </div>
  );
}
