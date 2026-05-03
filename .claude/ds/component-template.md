# [NomeDoComponente]

> Arquivo: `components/nome-do-componente.tsx`

---

## Sync

```
Paper:    alterado em dd/mm/yy as hh:mm:ss
markdown: atualizado sentido paper > markdown em dd/mm/yy as hh:mm:ss
código:   [atualização pendente sentido markdown > código] dd/mm/yy as hh:mm:ss
```

---

## Props

Lista todos os props do componente exatamente como declarados no código.

**Componentes shadcn (cva):** `variant` e `size` são props enum via `VariantProps<typeof xyzVariants>` — listar todos os valores possíveis.

**Componentes de produto:** não existe prop `variant`. Estados visuais emergem da presença/ausência de props opcionais (callbacks, dados, booleanos) — descrever o efeito visual de cada um.

| Prop | Tipo | Obrigatório | Default | Valores / Efeito visual |
|---|---|---|---|---|
| `variant` | `string` | não | `"default"` | `default` \| `outline` \| `ghost` \| `destructive` \| `secondary` \| `link` — muda cor de fundo, borda e texto |
| `size` | `string` | não | `"default"` | `xs` \| `sm` \| `default` \| `lg` \| `icon` \| `icon-sm` \| `icon-lg` — muda altura e padding |
| `disabled` | `boolean` | não | `false` | `true` → opacidade 50%, cursor not-allowed, pointer-events none |
| `asChild` | `boolean` | não | `false` | `true` → renderiza como elemento filho (Slot) |
| `className` | `string` | não | `—` | override pontual de estilos |
| `onClick` | `() => void` | não | `—` | — |

> Substituir pela interface real do componente. Para componentes de produto, exemplo real:
>
> | Prop | Tipo | Obrigatório | Default | Valores / Efeito visual |
> |---|---|---|---|---|
> | `id` | `string` | sim | — | identificador da entidade |
> | `imageUrl` | `string` | não | — | presente → thumbnail com imagem; ausente → bloco de cor sólida (`color`) |
> | `color` | `string` | sim | — | cor hex de fallback quando `imageUrl` ausente |
> | `onDelete` | `(id) => void` | não | — | presente → modo owner: menu de ações visível; ausente → modo read-only |
> | `onCardClick` | `(id) => void` | não | — | presente → card clicável, exibe contador de comentários; ausente → comentários inline |
> | `showCommentInput` | `boolean` | não | `false` | `true` → formulário de comentário expandido inline |

---

## Estados visuais

Documentação CSS/Paper por estado visual relevante. Estados podem ser definidos por:
- valor de um prop enum (`variant="outline"`) — para primitivos shadcn
- combinação de props presentes/ausentes (`onDelete` presente = owner) — para componentes de produto

Documentar apenas os elementos cujas propriedades **mudam** entre estados. Elementos idênticos em todos os estados não precisam ser repetidos.

---

### Estado: [nome] — ex: `variant="default" size="sm"` / `owner (onDelete presente)`

> Props ativos: descrever combinação.
> Contexto: onde/quando este estado aparece na UI.

#### [nome-do-elemento] — ex: `root`

| Propriedade | Paper Value | Tailwind / CSS |
|---|---|---|
| **Layout** | | |
| display | flex | `flex` |
| height | 28px | `h-7` |
| padding | 0 10px | `px-2.5` |
| gap | 4px | `gap-1` |
| alignItems | center | `items-center` |
| overflow | hidden | `overflow-hidden` |
| **Radius** | | |
| borderRadius | 10px | `rounded-lg` |
| **Blending** | | |
| opacity | 1 | — |
| **Fill** | | |
| backgroundColor | `#242424` | `bg-primary` |
| **Border** | | |
| border | 1px solid transparent | `border border-transparent` |
| **Shadow** | | |
| — | | |
| **Filters** | | |
| — | | |
| **Typography** | | |
| fontFamily | Inter | `font-sans` |
| fontSize | 14px | `text-sm` |
| fontWeight | 500 | `font-medium` |
| color | `#fafafa` | `text-primary-foreground` |
| **SVG** | | |
| width | 16px | `size-4` |
| stroke | currentColor | — |
| strokeWidth | 2 | — |

---

### Estado: [nome] — ex: `variant="outline"` / `read-only (onDelete ausente)`

> Documentar apenas o que muda em relação ao estado anterior.

#### `root`

| Propriedade | Paper Value | Tailwind / CSS |
|---|---|---|
| **Fill** | | |
| backgroundColor | `#181818` | `bg-background` |
| **Border** | | |
| border | `1px solid rgba(255,255,255,0.1)` | `border-border` |
| **Typography** | | |
| color | `#fafafa` | `text-foreground` |

---

## Notas

- Constraints de comportamento não capturáveis em CSS
- Ex: "botão de play só aparece em hover no desktop"
- Ex: `color` da track é prop dinâmico — não é token fixo do DS
- Ex: componente usa `cva` — ver `buttonVariants` em `components/ui/button.tsx`
