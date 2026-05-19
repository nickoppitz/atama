import { cn } from "@/lib/utils";

interface AtamaLogoProps {
  size?: number;
  variant?: "light" | "dark";
  className?: string;
}

/**
 * Logo oficial da Atama Filmes.
 * Símbolo: labirinto de Creta (7 circuitos) em currentColor (herda via Tailwind).
 * Wordmark: "atama" bold + "F I L M E S" small caps com tracking.
 *
 * variant="light" — símbolo herda cor do pai (ex: text-primary = laranja),
 *                   wordmark em --foreground (grafite).
 * variant="dark"  — símbolo e wordmark em branco (para fundos escuros).
 */
export function AtamaLogo({
  size = 36,
  variant = "light",
  className,
}: AtamaLogoProps) {
  const isDark = variant === "dark";

  return (
    <span
      className={cn("inline-flex items-center gap-2.5 select-none", className)}
      aria-label="Atama Filmes"
    >
      {/* Símbolo — labirinto de Creta 7 circuitos */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/* Círculo externo */}
        <circle
          cx="50"
          cy="50"
          r="47"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />

        {/* Anel r=42 — semicírculo ESQUERDO (sweep=0) */}
        <path
          d="M 50,8 A 42,42 0 0,0 50,92"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />

        {/* Anel r=36 — semicírculo DIREITO (sweep=1) */}
        <path
          d="M 50,14 A 36,36 0 0,1 50,86"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />

        {/* Anel r=30 — semicírculo ESQUERDO (sweep=0) */}
        <path
          d="M 50,20 A 30,30 0 0,0 50,80"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />

        {/* Anel r=24 — semicírculo DIREITO (sweep=1) */}
        <path
          d="M 50,26 A 24,24 0 0,1 50,74"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />

        {/* Anel r=18 — semicírculo ESQUERDO (sweep=0) */}
        <path
          d="M 50,32 A 18,18 0 0,0 50,68"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />

        {/* Anel r=12 — semicírculo DIREITO (sweep=1) */}
        <path
          d="M 50,38 A 12,12 0 0,1 50,62"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />

        {/* Anel r=6 — semicírculo ESQUERDO (sweep=0) */}
        <path
          d="M 50,44 A 6,6 0 0,0 50,56"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />

        {/* Linhas de conexão no TOPO */}
        <line x1="50" y1="3" x2="50" y2="8" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="14" x2="50" y2="20" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="26" x2="50" y2="32" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="38" x2="50" y2="44" stroke="currentColor" strokeWidth="2" />

        {/* Linhas de conexão na BASE */}
        <line x1="50" y1="56" x2="50" y2="62" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="62" x2="50" y2="68" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="74" x2="50" y2="80" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="80" x2="50" y2="86" stroke="currentColor" strokeWidth="2" />

        {/* Ponto central */}
        <circle cx="50" cy="50" r="3" fill="currentColor" />
      </svg>

      {/* Wordmark */}
      <span
        className="flex flex-col leading-none"
        style={{
          color: isDark ? "white" : "var(--foreground)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-inter, Inter, sans-serif)",
            fontWeight: 700,
            fontSize: size * 0.44,
            letterSpacing: "-0.01em",
            lineHeight: 1,
          }}
        >
          atama
        </span>
        <span
          style={{
            fontFamily: "var(--font-inter, Inter, sans-serif)",
            fontWeight: 600,
            fontSize: size * 0.22,
            letterSpacing: "0.22em",
            lineHeight: 1,
            marginTop: size * 0.06,
            textTransform: "uppercase",
            opacity: isDark ? 0.75 : 0.55,
          }}
        >
          FILMES
        </span>
      </span>
    </span>
  );
}
