import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/lab", label: "Atama Lab" },
  { href: "/contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-section-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-section-md">
          {/* Marca */}
          <div>
            <p className="font-semibold text-foreground">Atama Filmes</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Produção audiovisual e formação presencial
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-out"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Redes */}
          <div className="flex flex-col gap-2">
            <a
              href="https://instagram.com/atamafilmes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Atama Filmes no Instagram (abre em nova aba)"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-out"
            >
              Instagram
            </a>
            <a
              href="https://vimeo.com/atamafilmes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Atama Filmes no Vimeo (abre em nova aba)"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-out"
            >
              Vimeo
            </a>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Atama Filmes. Porto Alegre, RS.
        </p>
      </div>
    </footer>
  );
}
