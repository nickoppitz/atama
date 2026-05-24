# Princípios de Design System — Atama

> Camada conceitual **acima** dos tokens. Define as regras que orientam como
> qualquer grandeza visual deve escalar. Tokens são a *aplicação* destes princípios.
>
> Fonte de verdade dos valores: `site/src/app/globals.css`
> Especificação tabular: `design-tokens-guideline.md`
> Atualizado: 2026-05-22

---

## 1. Contenção visual (concentric scaling)

**Toda grandeza que cria contenção visual escala junto com o nível de aninhamento.
O container sempre fica um nível acima do filho na escala.**

A "contenção" acontece sempre que um elemento envolve outro. Quanto mais externo
o elemento, maior o valor da grandeza — para preservar a hierarquia e o paralelismo
visual entre as camadas.

Aplica-se a:

| Grandeza | Como escala | Onde vive a regra |
|---|---|---|
| **Spacing** | Container respira 1 step a mais que o gap interno do conteúdo | token (`globals.css`) |
| **Border radius** | `radius do container = radius do filho + inset do container` | token via `calc()` |
| **Elevação / sombra** | Container tem elevação perceptualmente maior que filhos | no olho (V1 não usa shadow) |
| **Font size** | Container/título acima do conteúdo na escala tipográfica | no olho |
| **Border width** | Elemento em foco mais espesso que a borda padrão do container | no olho |

> Apenas **spacing** e **radius** são automatizados via token. As demais grandezas
> seguem a regra "no olho" — aplicadas por julgamento, documentadas aqui como guia.

---

## 2. Regra do radius concêntrico

Quando um elemento de raio `R` está dentro de um container com inset (padding) `P`,
o container deve ter raio `R + P`. Isso mantém os cantos **concêntricos** (paralelos);
do contrário o filho parece "colado por fora".

```
radius do container = radius do filho + inset do container
                      ↓ arredondar para o step mais próximo da escala
```

Implementação (`globals.css`):

```css
--radius-card:      calc(var(--radius) + var(--spacing-ui-xs));        /*  4 + 4 =  8px */
--radius-surface:   calc(var(--radius-card) + var(--spacing-ui-sm));   /*  8 + 8 = 16px */
--radius-container: calc(var(--radius-surface) + var(--spacing-ui-sm)); /* 16 + 8 = 24px */
```

**Trade-off assumido:** priorizamos *escala limpa* sobre *pureza matemática*. Quando a
soma cair fora de um step redondo, arredonda-se para o step mais próximo — não se
aceita valor "quebrado" (ex: 28px) só para manter a soma exata.

---

## 3. Spacing por escopo (Component vs Layout)

O espaço carrega intenção pelo **escopo de uso**, não pelo valor cru:

- **`--spacing-ui-*`** — espaço *dentro* de componentes (padding, gap interno).
- **`--spacing-section-*`** — espaço *entre* blocos de página (gap de seção, gutter).

Mesma grandeza, dois escopos. A separação impede erros de escala (ninguém usa
64px dentro de um chip, ninguém usa 4px entre seções).

---

## 4. Escala de spacing — regra dos 25%

**Nenhum par de valores adjacentes na escala deve ficar mais próximo que ~25%.**

Escala linear (4, 8, 12, 16, **20**, 24, 28…) gera *decision fatigue*: escolher
entre 16, 20 e 24 vira opinião pessoal e o sistema perde consistência. A escala
deve ser não-linear, com saltos sempre ≥ 25%.

Escala do Atama (base 4, não-linear):

```
4 → 8 → 12 → 16 → 24 → 32 → 48 → 64
  +100  +50  +33  +50  +33  +50  +33   (todos ≥ 25%)
```

**Não adicionar steps que violem os 25%.** Ex: 20px entre 16 e 24 cria salto de
apenas 20% (16→20→24) — proibido. Valores fora da escala (20, 6, 40, 56px…)
devem ser **normalizados** para o step mais próximo, decidindo por intenção
(interno compacto → menor; respiro/separação → maior), nunca adicionados como token.

> Referências: Nathan Curtis (EightShapes, "Space in Design Systems") e
> Refactoring UI (Wathan/Schoger) — "nunca tenha dois valores mais próximos que ~25%".

---

## Como evoluir

- **Novo token de container:** derive do filho via `calc()` seguindo §2.
- **Nova grandeza de contenção:** registre na tabela de §1 antes de aplicar.
- **Mudança sistêmica:** vale uma ADR e averiguação com os agentes do time
  (ver `CLAUDE.md`).

---

*DS Principles — Atama · v1.0 · 2026-05-22*
