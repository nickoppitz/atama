# Design Tokens Guideline — Atama

> Tokens primitivos e compostos do DS Atama.
> Fonte de verdade: `site/src/app/globals.css` + `home-c-content.tsx` (variante /c/).
> Atualizado: 2026-05-21

---

## 1. Cor

### 1.1 Paleta primitiva (derivada do logo)

A identidade visual Atama deriva de três cores-base do logo. Todos os tokens semânticos devem ser derivados dessas três, sem exceção.

| Nome | Hex | OKLCH | Uso |
|---|---|---|---|
| **Branco** | `#FFFFFF` | `oklch(1 0 0)` | Base de toda superfície clara |
| **Laranja** | `≈ #E5782A` | `oklch(0.65 0.19 45)` | Accent, CTAs, marcadores |
| **Grafite** | `≈ #3D3D3D` | `oklch(0.28 0 0)` | Texto e elementos de UI escuros |

> **Regra de uso de fundo escuro:** fundos escuros (graphite/dark) devem ser usados em parcimônia e com propósito explícito — evidenciar contraste entre seções informacionais e conceituais (ex: carousel de projetos). Nunca decorativamente.

---

### 1.2 Tokens semânticos (CSS variables / Tailwind)

#### Modo claro `:root`

| Token CSS | Classe Tailwind | OKLCH | Hex aprox. | Intenção |
|---|---|---|---|---|
| `--background` | `bg-background` | `oklch(1 0 0)` | `#FFFFFF` | Fundo da página |
| `--foreground` | `text-foreground` | `oklch(0.28 0 0)` | `#3D3D3D` | Texto principal |
| `--primary` | `bg-primary` / `text-primary` | `oklch(0.65 0.19 45)` | `#E5782A` | Laranja Atama — botão primário, links de ação, marcadores |
| `--primary-foreground` | `text-primary-foreground` | `oklch(1 0 0)` | `#FFFFFF` | Texto sobre laranja |
| `--muted` | `bg-muted` | `oklch(0.96 0 0)` | `#F5F5F5` | Fundo de seções neutras (ice grey) |
| `--muted-foreground` | `text-muted-foreground` | `oklch(0.55 0 0)` | `#737373` | Texto secundário, metadata, captions |
| `--border` | `border-border` | `oklch(0.88 0 0)` | `#E0E0E0` | Divisores, bordas gerais |
| `--input` | `border-input` | `oklch(0.88 0 0)` | `#E0E0E0` | Bordas de inputs |
| `--ring` | `ring-ring` | `oklch(0.65 0.19 45)` | `#E5782A` | Focus ring (laranja) |
| `--card` | `bg-card` | `oklch(1 0 0)` | `#FFFFFF` | Fundo de cards (= background) |
| `--card-foreground` | `text-card-foreground` | `oklch(0.28 0 0)` | `#3D3D3D` | Texto em cards |
| `--secondary` | `bg-secondary` | `oklch(0.96 0 0)` | `#F5F5F5` | Elementos de ação secundários |
| `--secondary-foreground` | `text-secondary-foreground` | `oklch(0.28 0 0)` | `#3D3D3D` | Texto em secundário |
| `--accent` | `bg-accent` | `oklch(0.96 0 0)` | `#F5F5F5` | Hover state de itens de menu |
| `--accent-foreground` | `text-accent-foreground` | `oklch(0.28 0 0)` | `#3D3D3D` | Texto em accent |
| `--destructive` | `text-destructive` | `oklch(0.45 0.22 25)` | `≈ #B52A1A` | Ações destrutivas (vermelho) |

#### Tokens customizados Atama

| Token CSS | Classe Tailwind | OKLCH | Hex aprox. | Intenção |
|---|---|---|---|---|
| `--lab-tint` | `bg-lab-tint` | `oklch(0.97 0.04 45)` | `#FFF0E6` | Fundo de seções Atama Lab (quente, editorial) |

---

### 1.3 Paleta de fundo — regra de uso por tipo de seção

| Tipo de seção | Token de fundo | Racional |
|---|---|---|
| Página base | `--background` (#FFF) | Identidade branca |
| Seção informacional / produto | `--muted` (#F5F5F5) | Diferenciação sutil, sem contraste emocional |
| Seção conceitual / Atama Lab | `--lab-tint` (#FFF0E6) | Calor editorial, remete ao laranja do logo |
| Seção de impacto / showcase | `#111111` (inline) | Escuro estratégico — carousel de projetos, hero dark |

> Não usar fundos escuros para elementos meramente decorativos.

---

## 2. Tipografia

### 2.1 Font families primitivas

| Variável CSS | Família | Pesos disponíveis | Uso |
|---|---|---|---|
| `--font-c-sans` | Roboto | 100–900 | **Fonte principal.** Texto corrido, headings, UI geral. |
| `--font-c-display` | Roboto Condensed | 300–900 | **Display condensado.** Headings de alta hierarquia quando condensação é intencional. |
| `--font-c-mono` | Roboto Mono | 300–700 | **Eyebrows, labels, metadata.** Sempre uppercase + letter-spacing largo. |

> **Nota:** Roboto é a fonte oficial da Atama — a mais próxima da tipografia do logo. Nenhuma fonte serifada deve ser usada em V1.

---

### 2.2 Escala de font-size — variante /c/ (editorial)

Usa `clamp()` para responsividade fluida sem breakpoints.

| Nome | Tailwind equiv. | Valor clamp | Min (mobile) | Max (desktop) | Uso |
|---|---|---|---|---|---|
| **Display XL** | — | `clamp(28px, 4.5vw, 56px)` | 28px | 56px | Título de carousel, hero de projeto |
| **Display L** | — | `clamp(24px, 3.5vw, 48px)` | 24px | 48px | Heading de curso "DE INICIANTE A REALIZADOR." |
| **Display M** | — | `clamp(36px, 4vw, 56px)` | 36px | 56px | Heading editorial principal (ATAMA / LAB) |
| **Body L** | `text-lg` | `clamp(15px, 1.3vw, 18px)` | 15px | 18px | Copy bold / chamada principal |
| **Body M** | `text-sm–text-base` | `clamp(13px, 1.05vw, 15px)` | 13px | 15px | Copy secundário, parágrafos |
| **Label** | `text-xs` | `clamp(11px, 1vw, 13px)` | 11px | 13px | Eyebrow (Roboto Mono) |
| **Micro** | — | `9px` | 9px | 9px | Metadata de card, labels de campo |

---

### 2.3 Font weight semântico

| Peso | Tailwind | Uso canônico |
|---|---|---|
| **900 (Black)** | `font-black` | Display titles — "ALÉM DE NÓS", "ATAMA LAB", "DE INICIANTE A REALIZADOR." |
| **700 (Bold)** | `font-bold` | Subtítulos, copy de ênfase, nome de módulo |
| **600 (Semibold)** | `font-semibold` | Labels de badge, texto em CTA |
| **500 (Medium)** | `font-medium` | Itens de nav, links |
| **400 (Regular)** | `font-normal` | Corpo de texto, parágrafos |

---

### 2.4 Letter-spacing semântico

| Contexto | Tailwind approx. | Valor raw | Uso |
|---|---|---|---|
| Display (Black, uppercase) | `tracking-tight` | `-0.01em` a `-0.02em` | Headings grandes — brutal, comprimido |
| Eyebrow / Mono label | `tracking-widest` | `0.14em` a `0.22em` | Roboto Mono, uppercase — FORMAÇÃO, CURSO PRESENCIAL |
| Badge / CTA | `tracking-wide` | `0.04em` a `0.08em` | Botões, badges inline |
| Corpo | — | `0` (default) | Texto corrido |

---

### 2.5 Estilos compostos de texto (text styles nomeados)

Combinações canônicas prontas para uso em código e Paper/Figma.

| Nome | Família | Size | Weight | Tracking | Line-height | Uso |
|---|---|---|---|---|---|---|
| `display-hero` | Roboto | `clamp(28px, 4.5vw, 56px)` | 900 | `-0.02em` | `1` | Título de slide/carousel, uppercase |
| `display-section` | Roboto | `clamp(24px, 3.5vw, 48px)` | 900 | `-0.02em` | `1.02` | Heading de seção principal, uppercase |
| `display-editorial` | Roboto | `clamp(36px, 4vw, 56px)` | 900 | `-0.02em` | `0.95` | "ATAMA / LAB" — 2 linhas com quebra semântica |
| `eyebrow` | Roboto Mono | `clamp(10px, 0.9vw, 12px)` | 400 | `0.15em` | `1` | Labels de seção, uppercase, cor primary |
| `meta-label` | Roboto Mono | `9px` | 500 | `0.12em` | `1` | DURAÇÃO, FORMATO — uppercase, muted-foreground |
| `copy-lead` | Roboto | `clamp(15px, 1.3vw, 18px)` | 700 | `0` | `1.45` | Chamada principal de seção |
| `copy-body` | Roboto | `clamp(13px, 1.05vw, 15px)` | 400 | `0` | `1.65` | Parágrafos descritivos |
| `nav-link` | Roboto | `14px` | 500 / 400 | `0.02em` | `1` | Links de navegação (500 = ativo, 400 = inativo) |
| `module-title` | Roboto | `15px` | 700 | `0` | `1.3` | Título de módulo de curriculum |
| `module-body` | Roboto | `14px` | 400 | `0` | `1.5` | Descrição de módulo |
| `cta-pill` | Roboto | `14px` | 600 | `0.01em` | `1` | Texto em botões pill |
| `badge-festival` | Roboto | `11px` | 500 | `0.04em` | `1` | Festival/streaming badges, uppercase |

---

## 3. Espaçamento

### 3.1 Escala Tailwind (base: 4px)

| Token Tailwind | px | rem | Uso frequente |
|---|---|---|---|
| `space-1` / `p-1` | 4px | 0.25rem | Gap mínimo, padding de badge |
| `space-2` / `p-2` | 8px | 0.5rem | Gap interno de badges, dot nav |
| `space-3` / `p-3` | 12px | 0.75rem | Padding interno de badges |
| `space-4` / `p-4` | 16px | 1rem | Gap entre elementos de nav |
| `space-5` / `p-5` | 20px | 1.25rem | Padding de input |
| `space-6` / `p-6` | 24px | 1.5rem | Padding de card pequeno, gap de seção |
| `space-8` / `p-8` | 32px | 2rem | Padding de botão CTA |
| `space-10` / `p-10` | 40px | 2.5rem | Nav gap, separador |
| `space-12` / `p-12` | 48px | 3rem | Padding interno de carousel, footer |
| `space-14` / `p-14` | 56px | 3.5rem | Padding interno de course card |
| `space-16` / `p-16` | 64px | 4rem | Gap entre colunas na seção teaser |
| `space-18` | 72px | — | Padding vertical de teaser (custom) |
| `space-20` / `p-20` | 80px | 5rem | **Padding horizontal de página (gutter)** |

### 3.2 Gutter e layout de página

| Contexto | Valor | Aplicação |
|---|---|---|
| **Horizontal gutter** | `80px` | Padding lateral de todas as seções no desktop |
| **Header height** | `72px` | Altura fixa do header |
| **Carousel height** | `clamp(320px, calc(100vh - 96px), 640px)` | Altura responsiva — sempre abaixo da dobra |
| **Section vertical** | `72px–80px` | `padding-top` e `padding-bottom` de seções |
| **Card internal** | `56px` | Padding interno do course card |
| **Column gap** | `60px–64px` | Gap entre colunas no layout 2-col |
| **Module gap** | `22px–24px` | Gap entre módulos de curriculum |

---

## 4. Border Radius

| Token CSS | Classe Tailwind | Valor computado | Figma | Uso |
|---|---|---|---|---|
| `--radius-sm` | `rounded-sm` | `calc(0.25rem * 0.6)` = `2px` | `2px` | Badges pequenos, micro-elementos |
| `--radius-md` | `rounded-md` | `calc(0.25rem * 0.8)` = `3px` | `3px` | Inputs, selects |
| `--radius-lg` | `rounded-lg` | `0.25rem` = `4px` | `4px` | Cards padrão, popovers |
| `--radius-xl` | `rounded-xl` | `calc(0.25rem * 1.4)` = `5px` | `5px` | Modals, drawers |
| `rounded-2xl` | `rounded-2xl` | `12px` | `12px` | — |
| `rounded-3xl` | `rounded-3xl` | `24px` | `24px` | — |
| *(custom)* | — | `16px` | `16px` | Course card container |
| *(custom)* | — | `10px` | `10px` | Sales card — imagem de curso |
| `rounded-full` | `rounded-full` | `9999px` | `9999px` | **Todos os botões pill (obrigatório em /c/)** |

> **Regra pill:** na variante /c/ todos os botões CTA são obrigatoriamente `rounded-full`. Nenhum botão usa `rounded-xl` ou `rounded-lg` como forma principal.

---

## 5. Elevação / Sombra

O DS Atama V1 não usa box-shadow decorativo. Hierarquia é feita por cor de fundo e separador de borda.

| Uso | Implementação | Valor |
|---|---|---|
| Separador de seção | `border-t border-border` | `1px solid #E0E0E0` |
| Focus ring (acessibilidade) | `outline-ring/50` (global) | `0 0 0 2px rgba(229,120,42,0.5)` |
| Backdrop badge (carousel) | `bg-white/15 backdrop-blur-sm` | background overlay inline |
| Overlay gradiente (carousel) | `linear-gradient` inline | `rgba(0,0,0,0.82) → transparent` |

---

## 6. Tokens de superfície — Dark contexts

Usados exclusivamente em seções de fundo escuro (carousel, hero de projeto).

| Contexto | Fundo | Texto principal | Texto secundário | Borda |
|---|---|---|---|---|
| Carousel / dark hero | `#111111` | `#FFFFFF` | `rgba(255,255,255,0.5)` | `rgba(255,255,255,0.35)` |
| Dark card (imagem de curso) | `#1C1C1C` | `#FFFFFF` | — | — |
| Badge "JUNHO 2026" sobre dark | `rgba(0,0,0,0.55)` | `#FFFFFF` | — | — |

---

## 7. Motion (V2)

Motion design é **escopo V2**. Nenhuma animação de parallax, transição de página ou scroll animation deve ser implementada em V1.

Animações permitidas em V1 (utilitárias apenas):

| Classe Tailwind | Uso |
|---|---|
| `animate-pulse` | Skeleton loading |
| `animate-spin` | Ícone de carregamento |
| `transition-colors duration-150` | Hover em links/botões |

---

*Design Tokens Guideline — Atama DS · v1.0 · 2026-05-21*
