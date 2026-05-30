"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Sobre", href: "/sobre" },
  { label: "Cinema", href: "#" },
  { label: "TV", href: "#" },
  { label: "Projetos", href: "/projetos" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border">
      <div className="px-section-xl md:px-20 py-ui-lg md:py-section-sm flex items-center justify-between">{/* md:px-20=80px excede escala */}
        {/* Logo */}
        <Link href="/" aria-label="Atama Filmes" className="hover:opacity-80 transition-opacity duration-200 ease-out">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo-colorido-novo.svg`}
            alt="Atama Filmes"
            className="h-24 w-auto md:h-28"
          />
        </Link>

        {/* Direita: nav + CTA */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative inline-block px-2 py-3 rounded-sm text-[15px] font-semibold text-foreground transition-colors duration-200 ease-out hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-current after:transition-[width] after:duration-300 after:ease-out hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/lab" className={cn(buttonVariants(), "rounded-full font-bold h-auto py-3 px-7 text-[15px] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]")}>
            Atama Lab
          </Link>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden p-3 text-foreground transition-opacity duration-200 ease-out hover:opacity-70"
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
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-muted transition-colors duration-200 ease-out"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                <Link
                  href="/lab"
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
