# Tokens do Design System — Atama

> De-para canônico entre código (CSS variables / Tailwind CSS v4) e Figma (valores absolutos).
> Fonte de verdade: `app/globals.css` + config do Tailwind CSS v4.

---

## Sync

```
Figma:  [atualização pendente sentido markdown > Figma] 2026-05-02 00:00:00
markdown: atualizado sentido código > markdown em 2026-05-02 00:00:00
código:   atualizado em 2026-05-02 00:00:00
```

---

## 1. Cores

O DS usa `OKLCH` no código. Para Figma, usar o valor hex/rgba equivalente listado abaixo.

### 1.1 Modo claro (`:root`)

| Token CSS | Tailwind class | OKLCH (código) | Hex Figma | Uso principal |
|---|---|---|---|---|
| `--background` | `bg-background` | `{{BRAND_BACKGROUND_LIGHT}}` | `{{BRAND_BACKGROUND_LIGHT_HEX}}` | Fundo da página |
| `--foreground` | `text-foreground` | `{{BRAND_FOREGROUND_LIGHT}}` | `{{BRAND_FOREGROUND_LIGHT_HEX}}` | Texto principal |
| `--card` | `bg-card` | `{{BRAND_CARD_LIGHT}}` | `{{BRAND_CARD_LIGHT_HEX}}` | Fundo de cards |
| `--card-foreground` | `text-card-foreground` | `{{BRAND_CARD_FOREGROUND_LIGHT}}` | `{{BRAND_CARD_FOREGROUND_LIGHT_HEX}}` | Texto em cards |
| `--popover` | `bg-popover` | `{{BRAND_POPOVER_LIGHT}}` | `{{BRAND_POPOVER_LIGHT_HEX}}` | Fundo de popovers/dropdowns |
| `--popover-foreground` | `text-popover-foreground` | `{{BRAND_POPOVER_FOREGROUND_LIGHT}}` | `{{BRAND_POPOVER_FOREGROUND_LIGHT_HEX}}` | Texto em popovers |
| `--primary` | `bg-primary` | `{{BRAND_PRIMARY}}` | `{{BRAND_PRIMARY_HEX}}` | Botão primário (fundo) |
| `--primary-foreground` | `text-primary-foreground` | `{{BRAND_PRIMARY_FOREGROUND}}` | `{{BRAND_PRIMARY_FOREGROUND_HEX}}` | Texto em botão primário |
| `--secondary` | `bg-secondary` | `{{BRAND_SECONDARY}}` | `{{BRAND_SECONDARY_HEX}}` | Botão/badge secundário |
| `--secondary-foreground` | `text-secondary-foreground` | `{{BRAND_SECONDARY_FOREGROUND}}` | `{{BRAND_SECONDARY_FOREGROUND_HEX}}` | Texto em secundário |
| `--muted` | `bg-muted` | `{{BRAND_MUTED}}` | `{{BRAND_MUTED_HEX}}` | Fundo de elementos desabilitados/sutis |
| `--muted-foreground` | `text-muted-foreground` | `{{BRAND_MUTED_FOREGROUND}}` | `{{BRAND_MUTED_FOREGROUND_HEX}}` | Texto secundário/placeholder |
| `--accent` | `bg-accent` | `{{BRAND_ACCENT}}` | `{{BRAND_ACCENT_HEX}}` | Hover state em itens de menu |
| `--accent-foreground` | `text-accent-foreground` | `{{BRAND_ACCENT_FOREGROUND}}` | `{{BRAND_ACCENT_FOREGROUND_HEX}}` | Texto em accent |
| `--destructive` | `text-destructive` / `bg-destructive` | `{{BRAND_DESTRUCTIVE}}` | `{{BRAND_DESTRUCTIVE_HEX}}` | Ações destrutivas (vermelho) |
| `--border` | `border-border` | `{{BRAND_BORDER_LIGHT}}` | `{{BRAND_BORDER_LIGHT_HEX}}` | Bordas gerais |
| `--input` | `border-input` | `{{BRAND_INPUT_LIGHT}}` | `{{BRAND_INPUT_LIGHT_HEX}}` | Borda de inputs |
| `--ring` | `ring-ring` | `{{BRAND_RING_LIGHT}}` | `{{BRAND_RING_LIGHT_HEX}}` | Focus ring |

### 1.2 Modo escuro (`.dark`)

| Token CSS | Tailwind class | OKLCH (código) | Hex Figma (verificado) | Uso principal |
|---|---|---|---|---|
| `--background` | `bg-background` | `{{BRAND_BACKGROUND_DARK}}` | `{{BRAND_BACKGROUND_DARK_HEX}}` | Fundo da página |
| `--foreground` | `text-foreground` | `{{BRAND_FOREGROUND_DARK}}` | `{{BRAND_FOREGROUND_DARK_HEX}}` | Texto principal |
| `--card` | `bg-card` | `{{BRAND_CARD_DARK}}` | `{{BRAND_CARD_DARK_HEX}}` | Fundo de cards |
| `--card-foreground` | `text-card-foreground` | `{{BRAND_CARD_FOREGROUND_DARK}}` | `{{BRAND_CARD_FOREGROUND_DARK_HEX}}` | Texto em cards |
| `--popover` | `bg-popover` | `{{BRAND_POPOVER_DARK}}` | `{{BRAND_POPOVER_DARK_HEX}}` | Fundo de popovers/dropdowns |
| `--popover-foreground` | `text-popover-foreground` | `{{BRAND_POPOVER_FOREGROUND_DARK}}` | `{{BRAND_POPOVER_FOREGROUND_DARK_HEX}}` | Texto em popovers |
| `--primary` | `bg-primary` | `{{BRAND_PRIMARY_DARK}}` | `{{BRAND_PRIMARY_DARK_HEX}}` | Botão primário (fundo) |
| `--primary-foreground` | `text-primary-foreground` | `{{BRAND_PRIMARY_FOREGROUND_DARK}}` | `{{BRAND_PRIMARY_FOREGROUND_DARK_HEX}}` | Texto em botão primário |
| `--secondary` | `bg-secondary` | `{{BRAND_SECONDARY_DARK}}` | `{{BRAND_SECONDARY_DARK_HEX}}` | Botão/badge secundário |
| `--secondary-foreground` | `text-secondary-foreground` | `{{BRAND_SECONDARY_FOREGROUND_DARK}}` | `{{BRAND_SECONDARY_FOREGROUND_DARK_HEX}}` | Texto em secundário |
| `--muted` | `bg-muted` | `{{BRAND_MUTED_DARK}}` | `{{BRAND_MUTED_DARK_HEX}}` | Fundo de elementos sutis |
| `--muted-foreground` | `text-muted-foreground` | `{{BRAND_MUTED_FOREGROUND_DARK}}` | `{{BRAND_MUTED_FOREGROUND_DARK_HEX}}` | Texto secundário/placeholder |
| `--accent` | `bg-accent` | `{{BRAND_ACCENT_DARK}}` | `{{BRAND_ACCENT_DARK_HEX}}` | Hover state em itens de menu |
| `--accent-foreground` | `text-accent-foreground` | `{{BRAND_ACCENT_FOREGROUND_DARK}}` | `{{BRAND_ACCENT_FOREGROUND_DARK_HEX}}` | Texto em accent |
| `--destructive` | `text-destructive` / `bg-destructive` | `{{BRAND_DESTRUCTIVE_DARK}}` | `{{BRAND_DESTRUCTIVE_DARK_HEX}}` | Ações destrutivas |
| `--border` | `border-border` | `{{BRAND_BORDER_DARK}}` | `{{BRAND_BORDER_DARK_HEX}}` | Bordas gerais |
| `--input` | `border-input` | `{{BRAND_INPUT_DARK}}` | `{{BRAND_INPUT_DARK_HEX}}` | Borda de inputs |
| `--ring` | `ring-ring` | `{{BRAND_RING_DARK}}` | `{{BRAND_RING_DARK_HEX}}` | Focus ring |

### 1.3 Escala de cinzas (referência)

Usada para gradientes manuais e tokens `--chart-*`.

| OKLCH (código) | Hex Figma |
|---|---|
| `{{GRAY_1}}` | `{{GRAY_1_HEX}}` |
| `{{GRAY_2}}` | `{{GRAY_2_HEX}}` |
| `{{GRAY_3}}` | `{{GRAY_3_HEX}}` |
| `{{GRAY_4}}` | `{{GRAY_4_HEX}}` |
| `{{GRAY_5}}` | `{{GRAY_5_HEX}}` |

---

## 2. Radius

Todos derivados de `--radius` (base do projeto).

| Token CSS | Tailwind class | Valor computado | Figma value |
|---|---|---|---|
| `--radius-sm` | `rounded-sm` | `{{RADIUS_SM}}` | `{{RADIUS_SM_PX}}` |
| `--radius-md` | `rounded-md` | `{{RADIUS_MD}}` | `{{RADIUS_MD_PX}}` |
| `--radius-lg` / `--radius` | `rounded-lg` | `{{RADIUS_LG}}` | `{{RADIUS_LG_PX}}` |
| `--radius-xl` | `rounded-xl` | `{{RADIUS_XL}}` | `{{RADIUS_XL_PX}}` |
| `--radius-2xl` | `rounded-2xl` | `{{RADIUS_2XL}}` | `{{RADIUS_2XL_PX}}` |
| `--radius-3xl` | `rounded-3xl` | `{{RADIUS_3XL}}` | `{{RADIUS_3XL_PX}}` |
| `rounded-full` | `rounded-full` | `9999px` | `9999px` |

---

## 3. Tipografia

### 3.1 Font families

| Token CSS | Tailwind class | Figma value |
|---|---|---|
| `--font-sans` | `font-sans` | `font-family: Inter` |
| `--font-mono` | `font-mono` | `font-family: JetBrains Mono` |

### 3.2 Tailwind text scale → Figma

| Tailwind class | font-size Figma | line-height Figma |
|---|---|---|
| `text-xs` | `12px` | `16px` |
| `text-sm` | `14px` | `20px` |
| `text-base` | `16px` | `24px` |
| `text-lg` | `18px` | `28px` |
| `text-xl` | `20px` | `28px` |
| `text-2xl` | `24px` | `32px` |
| `text-3xl` | `30px` | `36px` |

### 3.3 Font weight

| Tailwind class | font-weight Figma |
|---|---|
| `font-normal` | `400` |
| `font-medium` | `500` |
| `font-semibold` | `600` |
| `font-bold` | `700` |

### 3.4 Estilos de texto usados no DS (compostos)

> Substituir pelos estilos específicos do seu produto.

| Nome de uso | Tailwind | Figma equivalente |
|---|---|---|
| Page title | `text-xl font-semibold tracking-tight` | Inter, 20px, 600, letterSpacing: -0.02em, lineHeight: 28px |
| Card title | `text-sm font-medium` | Inter, 14px, 500, lineHeight: 20px |
| Card subtitle | `text-xs text-muted-foreground` | Inter, 12px, 400, color: muted-foreground |
| Badge label | `text-xs` | Inter, 12px, 400, lineHeight: 16px |
| Button sm | `text-sm font-medium` | Inter, 14px, 500, lineHeight: 20px |
| Breadcrumb | `text-sm text-muted-foreground` | Inter, 14px, 400, color: muted-foreground |

---

## 4. Ícones (lucide-react)

Todos os ícones são do pacote `lucide-react`. No Figma, inserir como SVG inline com:
- `viewBox="0 0 24 24"`, `width` e `height` conforme necessidade
- `fill="none"`, `stroke="currentColor"`, `strokeWidth="2"`, `strokeLinecap="round"`, `strokeLinejoin="round"`

> Substitua esta lista pelos ícones específicos do seu projeto.

| Ícone (código) | Import | SVG path(s) para Figma |
|---|---|---|
| `<Plus />` | `lucide-react` | `<path d="M5 12h14"/><path d="M12 5v14"/>` |
| `<X />` | `lucide-react` | `<path d="M18 6 6 18"/><path d="m6 6 12 12"/>` |
| `<Check />` | `lucide-react` | `<path d="M20 6 9 17l-5-5"/>` |
| `<Search />` | `lucide-react` | `<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>` |
| `<User />` | `lucide-react` | `<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>` |
| `<LogOut />` | `lucide-react` | `<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>` |
| `<Copy />` | `lucide-react` | `<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>` |
| `<Link />` | `lucide-react` | `<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>` |
| `<Loader2 />` | `lucide-react` | `<path d="M21 12a9 9 0 1 1-6.219-8.56"/>` — animado com `animation: spin 1s linear infinite` |
| `{{ICON_1}}` | `lucide-react` | `{{ICON_1_SVG_PATH}}` |
| `{{ICON_2}}` | `lucide-react` | `{{ICON_2_SVG_PATH}}` |

### Tamanhos de ícone usados no DS

| Tailwind | Figma value | Uso |
|---|---|---|
| `h-3.5 w-3.5` | `14×14px` | Ícone inline em botão ghost pequeno |
| `h-4 w-4` | `16×16px` | Padrão — maioria dos ícones em botões, menus, toolbars |
| `h-5 w-5` | `20×20px` | Empty state icons dentro de container |

---

## 5. Sombras e sobreposições recorrentes

> Substitua pelos valores específicos do seu projeto.

| Nome de uso | Código (boxShadow) | Figma value |
|---|---|---|
| Card border dark | `ring-1 ring-white/10` via Tailwind | `0 0 0 1px rgba(255,255,255,0.1)` |
| Focus ring | `outline-ring/50` (global) | `0 0 0 2px rgba(163,163,163,0.5)` |
| {{SHADOW_1_NAME}} | `{{SHADOW_1_CODE}}` | `{{SHADOW_1_PAPER}}` |

---

## 6. Animações utilitárias

| Classe Tailwind | Figma equivalente | Uso |
|---|---|---|
| `animate-shimmer` | Simular com retângulo sobre fundo | Skeleton loading |
| `animate-pulse` | `opacity` alternando 1 → 0.5 → 1, duração 2s | Estado de loading/processamento |
| `animate-spin` | `rotation` 0° → 360°, duração 1s, linear, loop | Ícone de carregamento |
| `animate-ping` | Scale 1 → 2 + opacity 1 → 0, duração 1s, loop | Dot indicador de status |
