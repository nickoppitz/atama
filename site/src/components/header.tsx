"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-semibold text-lg tracking-tight text-foreground">
          Atama Filmes
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex">
          <Link href="/lab" className={cn(buttonVariants({ size: "sm" }))}>
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
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-3 py-3 rounded-md text-base font-medium transition-colors",
                    pathname === link.href
                      ? "text-primary bg-[var(--lab-tint)]"
                      : "text-foreground hover:bg-muted"
                  )}
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
