"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Sobre" },
  { label: "Cinema" },
  { label: "TV" },
  { label: "Projetos" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border">
      <div className="px-16 md:px-20 py-5 md:py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" aria-label="Atama Filmes" className="hover:opacity-80 transition-opacity">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo-colorido-novo.svg`}
            alt="Atama Filmes"
            className="h-24 w-auto md:h-28"
          />
        </Link>

        {/* Direita: nav + CTA */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href="#"
                className="text-[15px] font-semibold text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="#" className={cn(buttonVariants(), "rounded-full font-bold h-auto py-2 px-7 text-[15px]")}>
            Atama Lab
          </Link>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden p-2 text-foreground"
            aria-label="Abrir menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </SheetTrigger>
          <SheetContent side="right" className="w-72 pt-12">
            <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
            <nav aria-label="Menu principal" className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href="#"
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-muted transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                <Link
                  href="#"
                  onClick={() => setOpen(false)}
                  className={cn(buttonVariants(), "w-full justify-center rounded-full")}
                >
                  Reservar vaga
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
