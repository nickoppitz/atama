# Design Benchmark Report
## Eval 3: GUI & Padrões (Design System)

**Objetivo:** Mapear componentes, padrões de UI, design system patterns que as plataformas de cursos referência usam. Extrair recomendações pra componentes base, paleta, tipografia, spacing.

**Tipo de Benchmark:** GUI & Padrões  
**Data:** 2026-05-10

---

## Sites Analisados

1. **Coursera** (https://www.coursera.org)
   - Maior plataforma de cursos online global
   - Foco em educação acessível

2. **Udemy** (https://www.udemy.com)
   - Marketplace de cursos
   - Grande volume, UX otimizada pra conversão

3. **Skillshare** (https://www.skillshare.com)
   - Comunidade criativa + cursos
   - Design-forward, audience similar a Atama

---

## Achados por Dimensão

### Componentes Primários

#### Buttons

| Site | Primário | Secundário | Tertiary | Estilo |
|------|----------|-----------|----------|--------|
| **Coursera** | Azul (#0056B3) | Outline branco | Text link | Arredondado (4px) |
| **Udemy** | Preto (#000000) | Outline preto | Text link | Muito arredondado (6px) |
| **Skillshare** | Verde (#1AB75E) | Outline verde | Text link | Ligeiramente arredondado (4px) |

**Padrão 1: Buttons sempre com hover state visual**
- Coursera: mais escuro (-20% luminosidade)
- Udemy: fundo ativado, mais contraste
- Skillshare: fundo mais claro, efeito lift

**Padrão 2: Primary button é sempre linha cheia (filled)**
- Secundário = outline
- Tertiary = text-only (link)

**Padrão 3: Border-radius é conservador (4-6px)**
- Nenhum uso de muito arredondado (pill buttons ~20px)
- Nenhum uso de sharp corners (0px)

**Recomendação para Atama:**
```
Primary (CTA): Verde ou Laranja, filled, 4px radius
Secundário: Outline, border 2px, 4px radius
Tertiary: Text-only, underline on hover
```

---

#### Cards

**Estrutura comum:**
- Image (top)
- Title (16-18px, bold)
- Description (14px, regular, gray)
- Metadata (12px, lighter)
- CTA (button ou link)

**Padrão de Cards:**

| Elemento | Size | Weight | Color |
|----------|------|--------|-------|
| Card Image | 100% width | - | Foto/vídeo |
| Title | 18px | 600 (semibold) | Preto |
| Desc | 14px | 400 (regular) | Cinza (#666) |
| Metadata | 12px | 400 | Cinza claro (#999) |
| Borders | 1px | - | Cinza muito claro |
| Padding | 16px | - | - |
| Shadow | Subtle | - | 0 2px 8px rgba(0,0,0,0.08) |

**Padrão 1: Cards têm sombra sutil, não bordas grossas**
- Coursera: 0 1px 3px rgba(0,0,0,0.12)
- Udemy: 0 2px 8px rgba(0,0,0,0.12)
- Skillshare: 0 1px 4px rgba(0,0,0,0.1)

**Padrão 2: Hover state = elevar (lift) + sombra maior**
- Efeito: box-shadow aumenta (blur: 2px → 12px)
- Elevação visual: transform translateY(-2px)

**Padrão 3: Image sempre no topo**
- Sem layout alternativo (text left, image right)
- Mantém consistência visual

**Recomendação para Atama:**
```
Card Padding: 16px (mobile), 20px (desktop)
Card Radius: 4-6px
Card Shadow: 0 2px 8px rgba(0,0,0,0.08)
Card Hover: translateY(-4px) + shadow aumenta
Image ratio: 16:9 (landscape, cursos/filmes naturais)
```

---

#### Forms & Inputs

**Padrão Input:**
- Label (12-14px, acima do campo)
- Input height: 40-48px
- Padding interno: 12px horizontal, 10px vertical
- Border: 1px cinza claro
- Border-radius: 4px
- Focus state: border-color muda pra accent + sombra azul sutil

**Padrão Validation:**
- Error: texto vermelho (#D32F2F) abaixo do input
- Success: ícone verde + border verde
- Disabled: fundo cinza, cursor not-allowed

**Recomendação para Atama:**
```
Input height: 44px (mobile-friendly, fácil tap)
Label weight: 500 (medium)
Label size: 14px
Input border: 1px #E0E0E0
Focus: border-color: accent (verde/laranja) + box-shadow: 0 0 0 3px rgba(accent, 0.1)
Error color: #D32F2F
```

---

### Padrões de Layout

#### Hero/Header Sections

| Site | Layout | Image | Text Overlay |
|------|--------|-------|------|
| **Coursera** | Imagem full-width | Foto ilustrativa | Texto branco com sombra |
| **Udemy** | Grid 50/50 (text left, image right) | Ilustração minimalista | Direto sobre branco |
| **Skillshare** | Imagem full-width + text overlay | Foto vibrant | Texto branco, overlay semi-transparent |

**Padrão 1: Hero é sempre visually dominant**
- Min-height: 400px (desktop), 300px (mobile)
- Image ou video background

**Padrão 2: Text é sempre legível**
- Coursera: sombra no texto (text-shadow)
- Udemy: fundo branco separado
- Skillshare: overlay escuro semi-transparent

**Recomendação para Atama:**
```
Hero min-height: 480px (desktop), 360px (mobile)
Background: Vídeo ou imagem estática
Text: Branco, com overlay de cor 70% opacidade (verde ou laranja)
CTA positioning: Center-bottom ou center (não corner)
```

---

#### Course/Product Listing Pages

**Grid layout:**
- Desktop: 3 colunas (Coursera, Udemy, Skillshare)
- Tablet: 2 colunas
- Mobile: 1 coluna

**Gap/Spacing:**
- Desktop: gap 32px (margin between cards)
- Tablet: gap 24px
- Mobile: gap 16px

**Section Padding:**
- Desktop: 80px top/bottom, 60px left/right
- Tablet: 60px top/bottom, 40px left/right
- Mobile: 40px top/bottom, 16px left/right

**Padrão 1: Conteúdo nunca é full-width em desktop**
- Max-width: 1200-1400px
- Centered com margens simétricas

**Padrão 2: Mudança de grid é suave (responsive)**
- Breakpoints: 768px (mobile→tablet), 1024px (tablet→desktop)
- Sem saltos visuais bruscos

---

### Componentes Secundários

#### Badges & Tags

**Padrão:**
- Small background colored + text white
- Padding: 4-6px horizontal, 2-4px vertical
- Border-radius: 12-16px (pill)
- Font-size: 11-12px
- Use: Categorias, status (new, popular, bestseller)

**Cores por tipo:**
- Novo: Vermelho/pink
- Popular: Verde
- Bestseller: Ouro/amarelo
- Destaque: Azul

#### Breadcrumbs

**Padrão:**
- Home > Categoria > Subcategoria > Página
- Separador: ">" ou "/"
- Cor: Cinza (#999), last item escuro
- Font-size: 12-14px

#### Rating/Stars

**Padrão:**
- Ícone estrela preenchida (filled) ou outline
- Cor: Amarelo/ouro (#FFB81C típico)
- Sempre com número (4.5 ⭐)
- Tamanho: 14-16px

#### Pagination

**Padrão:**
- Números (1, 2, 3...) ou dots (● ● ●)
- Prev/Next buttons
- Current page highlighted em accent color
- Hover: background cinza suave

---

### Ícones & Iconografia

**Padrão:**
- Stroke-based (não filled)
- Weight: 1.5-2px
- Size: 16px (body), 24px (headers), 32px (hero)
- Color: match text color (preto primário, cinza secundário)

**Fontes de ícones:**
- Coursera: Custom (proprietary)
- Udemy: Custom
- Skillshare: Feather-like (open source style)

**Recomendação para Atama:** Usar Feather Icons ou Font Awesome (6+) com customização de cores.

---

### Estados de Interação

#### Hover States
- Button: mais escuro ou com underline
- Card: elevar + sombra aumenta
- Link: underline + cor acento
- Input: border em cor primária

#### Focus States (Accessibility)
- Button: outline em accent color (2-3px)
- Input: border em accent + sombra sutil
- Link: outline visível

#### Active States
- Button pressionado: mais escuro ainda
- Tab ativo: border-bottom em accent
- Menu item ativo: background cinza suave + texto bold

#### Disabled States
- Opacity: 50% ou less
- Cursor: not-allowed
- Color: cinza muito claro

---

## Padrões Identificados (Consolidados)

### Design System Patterns

1. **Color hierarchy é simples: primário + accent + grays**
   - Primário (buttons, headlines): preto ou accent color
   - Accent (highlights): verde, azul, ou laranja
   - Grays: #F5F5F5, #E0E0E0, #999999, #333333

2. **Typography é hierárquica e consistente**
   - Escala: 12px → 14px → 16px → 18px → 20px → 24px → 32px → 40px
   - Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
   - Font family: uma ou duas (máximo)

3. **Spacing segue múltiplo de 4 ou 8px**
   - 8px, 16px, 24px, 32px, 40px, 48px, 56px, 64px, 80px
   - Mais fácil escalar, mais consistente

4. **Components são modular e reutilizável**
   - Buttons (3 variants: primary, secondary, tertiary)
   - Cards (standardized padding, image ratio, shadow)
   - Inputs (consistent height, focus state)
   - Same patterns applied everywhere

5. **Responsive design é mobile-first**
   - Mobile default (1 column)
   - Tablet (2 column, 768px+)
   - Desktop (3 column, 1024px+)

6. **Accessibility é considerado**
   - Focus states visíveis
   - Contrast ratios ≥4.5:1
   - Touch targets ≥44px (mobile)

---

## Recomendações para Atama Design System

### Color Palette

```
Primary Colors:
- Neutral-White: #FFFFFF
- Neutral-Black: #000000

Accent Colors (choose one as primary):
- Green-500: #1DBF60 (recomendado pra Lab)
- Orange-500: #FF6B35 (recomendado pra Filmes destaque)

Grays:
- Gray-100: #F9F9F9 (backgrounds claros)
- Gray-200: #F0F0F0 (subtle backgrounds)
- Gray-300: #E0E0E0 (borders)
- Gray-500: #999999 (secondary text)
- Gray-700: #333333 (primary text, labels)

Semantic Colors:
- Error: #D32F2F (validation)
- Success: #4CAF50 (confirmation)
- Warning: #FF9800 (alerts)
```

### Typography

```
Font Family: Inter (ou Montserrat como fallback)

Scale (in pixels):
- 12px: Caption, small labels
- 14px: Body small, labels
- 16px: Body regular (default)
- 18px: Body large, card titles
- 20px: Subheading
- 24px: Section heading (H3)
- 32px: Page heading (H2)
- 40px: Hero heading (H1)

Weights:
- 400: Regular (body, descriptions)
- 500: Medium (labels, badges)
- 600: Semibold (card titles, subheadings)
- 700: Bold (headings)

Line height:
- 1.2x (headings)
- 1.4x (body text)
- 1.6x (labels, secondary text)
```

### Spacing

```
Base Unit: 8px

Scale:
- 4px (micro, not recommended)
- 8px (xs padding)
- 16px (sm padding/margin)
- 24px (md padding/margin)
- 32px (lg padding/margin)
- 40px (xl padding/margin)
- 48px (xxl padding/margin)
- 56px (section margin)
- 64px (section padding)
- 80px (large section padding)
```

### Components to Build

#### Buttons
- Primary (filled, accent color)
- Secondary (outline, black border)
- Tertiary (text-only, black text)
- Sizes: Small (32px), Medium (44px), Large (56px)
- States: Default, Hover, Active, Focus, Disabled

#### Cards
- Base card (white, shadow, radius 4px)
- Image card (top image, title, description)
- Course card (image, title, instructor, rating, price)
- Testimonial card (quote, author, avatar)

#### Forms
- Text input (44px height, consistent styling)
- Textarea (min 120px height)
- Select dropdown (44px height)
- Checkbox (24x24px)
- Radio button (24x24px)
- Labels (14px, medium weight)

#### Navigation
- Primary nav (horizontal, desktop + mobile menu)
- Breadcrumbs (12px, gray)
- Pagination (desktop/mobile optimized)
- Tab navigation (underline active)

#### Modals
- Overlay (semi-transparent black)
- Modal body (white, padding 32px)
- Modal header (close button, top-right)
- Modal footer (buttons, right-aligned)

#### Alerts
- Success (green background, white text)
- Error (red background, white text)
- Warning (orange background, white text)
- Info (blue background, white text)

---

### Responsive Breakpoints

```
Mobile: 0 - 767px
  - Padding: 16px
  - Font sizes: -2px smaller
  - 1-column layout
  - Touch targets: ≥44px

Tablet: 768px - 1023px
  - Padding: 40px
  - Font sizes: standard
  - 2-column layout
  - Touch targets: ≥44px

Desktop: 1024px+
  - Padding: 60-80px
  - Font sizes: standard
  - 3-column layout
  - Max-width container: 1200px
```

---

### Accessibility Checklist

- [ ] Contrast ratio ≥4.5:1 (WCAG AA)
- [ ] Focus states visible (outline or highlight)
- [ ] Touch targets ≥44px (mobile)
- [ ] Color not only indicator (icons, text)
- [ ] Font size ≥16px (readability)
- [ ] Line height ≥1.4x (readability)
- [ ] Hover + Focus states (keyboard navigation)

---

## Próximos Passos

1. **Validar design system com time**
   - Cores finais (Verde + Laranja?)
   - Tipografia (Inter confirms)
   - Componentes base aprovados

2. **Criar design system Figma**
   - Components library
   - Color palette
   - Typography styles
   - Shadow/elevation tokens

3. **Implementar em código**
   - CSS variables (ou Tailwind)
   - React component library
   - Documentação storybook

4. **QA & Validation**
   - Teste de acessibilidade
   - Teste responsive
   - Teste de performance (file size)

---

*Report gerado pela skill design-benchmark — Eval 3 (GUI & Padrões)*
