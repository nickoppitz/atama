# DS — Protocolo de Documentação

Este diretório é a **interface canônica** entre Figma (hifi), este markdown (especificação) e o código (implementação).

Toda alteração em qualquer dos três lados deve ser refletida aqui.

---

## Regra de sincronização

| Evento | Ação obrigatória |
|---|---|
| Componente alterado no Figma | Atualizar o bloco do componente neste markdown (sentido Figma → markdown) e marcar código como pendente se houver diferença |
| Componente alterado no código | Atualizar o bloco do componente neste markdown (sentido código → markdown) e marcar Figma como pendente se houver diferença |
| Token alterado no código (`globals.css`) | Atualizar `tokens.md` (sentido código → markdown) e marcar Figma como pendente |
| Token alterado no Figma | Atualizar `tokens.md` (sentido Figma → markdown) e marcar código como pendente |
| Markdown atualizado em qualquer sentido | Registrar data/hora no campo correspondente do cabeçalho de sync |

---

## Formato do cabeçalho de sync (componentes e tokens)

```
Figma:  alterado em dd/mm/yy as hh:mm:ss
markdown: atualizado sentido Figma > markdown em dd/mm/yy as hh:mm:ss
código:   [atualização pendente sentido markdown > código] dd/mm/yy as hh:mm:ss
```

Quando um lado está em dia, omitir o label `[atualização pendente]`. Quando está pendente, mantê-lo explícito.

**Fuso horário:** sempre registrar no fuso horário do projeto (ajuste conforme necessário).

---

## Propriedades cobertas por seção

Cada elemento de um componente deve ser documentado nas seções abaixo, sempre que a propriedade for aplicável. Propriedades não usadas podem ser omitidas, mas a seção deve existir como referência.

### Layout
- `width`, `height`, `minWidth`, `minHeight`, `maxWidth`, `maxHeight`
- `display`: apenas `flex` ou `block` — **nunca `grid` ou `inline`**
- `flexDirection`, `flexWrap`, `justifyContent`, `alignItems`, `alignSelf`, `flex`, `flexGrow`, `flexShrink`
- `gap`, `padding`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`
- `position`, `top`, `right`, `bottom`, `left`, `zIndex`
- `overflow`, `overflowX`, `overflowY`
- `aspectRatio`
- `cursor`
- `whiteSpace`
- **`margin` deve ser evitado** — preferir `gap` e `padding`
- **`box-sizing: border-box` é implícito** — não documentar

### Radius
- `borderRadius` (valor único ou por canto: `borderTopLeftRadius`, etc.)

### Blending
- `opacity`
- `mixBlendMode`: normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity

### Fill
- `background` ou `backgroundColor`
- Formatos aceitos: `hex`, `rgb()`, `rgba()`, `hsl()`, `hsla()`, `oklch()`, `oklab()`
- Gradientes: `linear-gradient()`, `radial-gradient()`
- Imagens: `url()`

### Border
- `border` (shorthand) ou `borderWidth`, `borderStyle`, `borderColor` por lado
- `outline`, `outlineOffset`

### Shadow
- `boxShadow` — múltiplas sombras separadas por vírgula
- `inset` é suportado: `inset 0 0 0 2px rgba(...)`
- `textShadow`

### Filters
- `filter`: blur | brightness | contrast | grayscale | hue-rotate | invert | opacity | saturate | sepia | drop-shadow
- `backdropFilter`: blur | brightness | contrast | saturate

### Typography
- `fontFamily`, `fontSize` (sempre **px**), `fontWeight`, `fontStyle`
- `letterSpacing` (preferir **em**), `lineHeight` (preferir **px**)
- `textAlign`, `textDecoration`, `textTransform`
- `color`
- Truncação: `overflow: hidden`, `textOverflow: ellipsis`, `whiteSpace: nowrap`

### SVG
- `fill`, `stroke`, `strokeWidth`
- `viewBox`, `width`, `height` no `<svg>`

---

## Convenções globais

- **box-sizing**: `border-box` implícito em todos os elementos Figma — não declarar
- **Cores**: usar `OKLCH()` para tokens do design system; `rgba()` para transparências; `hex` para valores fixos
- **Tipografia**: `fontSize` sempre em `px`; `letterSpacing` em `em`; `lineHeight` em `px`
- **Layout**: nunca `display: grid`, nunca `display: inline` — usar `flex` ou `block`
- **Espaçamento**: evitar `margin` — usar `gap` no container ou `padding` no elemento

---

## Arquivo de componentes

Cada componente do DS tem seu próprio arquivo neste diretório:

```
.claude/ds/
├── README.md              ← este arquivo (protocolo)
├── tokens.md              ← todos os tokens: cores, radius, tipografia, ícones, sombras, animações
├── component-template.md  ← template mínimo de bloco
└── components/
    └── [component-name].md  ← documentação do componente
    └── ...
```
