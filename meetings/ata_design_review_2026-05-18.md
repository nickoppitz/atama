# ATA DE REUNIÃO — DESIGN REVIEW SEÇÃO ATAMA LAB

**Data:** 18 de maio de 2026  
**Local:** Sessão remota — Claude Code + PM/PD  
**Duração:** ~2h (iterativo)  
**Facilitador:** Nicolas (PM/Tech Lead)  
**Participante(s):** Nicolas (PM/PD/Dev)  

---

## CONTEXTO DA REUNIÃO

Refinamento visual da seção **Atama Lab** na homepage (site/src/app/page.tsx). Objetivo: transformar a apresentação da iniciativa de um tom varejão/apelativo para **institucional, minimalista, elegante e premium** — alinhado com a identidade da marca.

**Bloqueador resolvido:** A seção estava muito fraca visualmente, sem destaque suficiente para a iniciativa.

---

## DECISÕES TOMADAS

### 1. Redesign Editorial da Seção Atama Lab

**Status:** ✅ IMPLEMENTADO

**Conceito aprovado:**
- Grid 12 colunas (7/5 split) com divisor vertical sutil
- Editorial tipográfico (manifesto) na coluna esquerda
- Card estilo "vitrine" (Udemy/Coursera) na coluna direita com imagem, duração, local, botões

**Fundamentação:**
- Contraste extremo entre linha leve ("Uma escola") + heading forte ("Produtora.") cria tensão visual desejada
- Decorativo "01" com opacity mínima reforça indexação editorial sem poluir
- Declaração "Cinema se aprende fazendo." em itálico com linhas laterais é o coração
- 4 módulos numerados (01–04) enumeram o currículo de forma clara e escaneável

**Arquivos alterados:**
- `site/src/app/page.tsx` — seção Atama Lab (linhas 225–411)

---

### 2. Redução de "PRODUTORA." — de Grotesco para Premium

**Status:** ✅ IMPLEMENTADO

**Problema identificado:** 
`font-black` (900) em 96px com `uppercase` + negative tracking (`-0.03em`) resultava em pôster de supermercado, agressivo demais.

**Decisão de ajuste:**
- ❌ Remover: `font-black` + `uppercase` + `clamp(52px, 7vw, 96px)`
- ✅ Adotar: `font-extrabold` (800) + sentence case `Produtora.` + `clamp(42px, 5.2vw, 72px)`
- ✅ Ajustar: leading de `0.88` para `0.9`, tracking de `-0.03em` para `-0.01em`

**Resultado:** Palavra mantém peso e presença, mas lê como decisão editorial intencional. Não pareça propaganda.

**Código:**
```jsx
<h2
  className="font-extrabold text-foreground leading-[0.9] tracking-[-0.01em]"
  style={{ fontSize: "clamp(42px, 5.2vw, 72px)" }}
>
  Produtora.
</h2>
```

---

### 3. Ampliar Destaque "ATAMA LAB" — Eyebrow Invisível

**Status:** ✅ IMPLEMENTADO

**Problema identificado:**
Eyebrow "ATAMA LAB" em `text-[9px]` era praticamente invisível, não funcionava como ancoragem visual.

**Decisão:**
- ❌ Remover: `text-[9px]` fixo
- ✅ Adotar: `clamp(18px, 2.2vw, 28px)` — eyebrow agora é presença real
- ✅ Aumentar gap de 4 para 5 (mais respiro)
- ✅ Manter cor primary, uppercase, bold, letter-spacing `0.2em`

**Resultado:** "ATAMA LAB" agora é o âncora visual que abre a seção, não um detalhe esquecido.

**Código:**
```jsx
<span
  className="font-bold tracking-[0.2em] uppercase text-primary shrink-0 leading-none"
  style={{ fontSize: "clamp(18px, 2.2vw, 28px)" }}
>
  Atama Lab
</span>
```

---

### 4. Remover Travessões — Tom Menos IA

**Status:** ✅ IMPLEMENTADO

**Problema identificado:**
Travessões em dois locais davam tom robótico, "conteúdo gerado":
1. Copy institucional: "...independente — uma produtora..."
2. Módulo 01: "...audiovisual — planos, ângulos..."

**Decisão:**
- ❌ Remover: travessões
- ✅ Substituir por: ponto final ou dois-pontos conforme contexto

**Alterações:**
- Copy: "O Atama Lab nasce de 14 anos de produção audiovisual independente. Uma produtora que abre seu método para quem quer começar a fazer."
- Módulo 01: "Linguagem audiovisual: planos, ângulos, luz, som"

**Resultado:** Leitura natural, sem artificialismo.

---

## ESTADO FINAL (SCREENSHOT)

A seção Atama Lab agora apresenta:

1. **Eyebrow visível** — "ATAMA LAB" em 18–28px (escala responsiva)
2. **Manifesto visual** — "Uma escola / dentro de uma / **Produtora.**" com peso controlado
3. **Declaração clara** — "Cinema se aprende fazendo." em itálico com linhas laterais
4. **Copy institucional** — 14 anos independência, tom premium, sem IA-speak
5. **Módulos estruturados** — 01–04 com descrições limpas (dois-pontos, sem travessões)
6. **Card vitrine** — imagem + duração + local + vagas + CTAs (lado direito)
7. **Testimunho** — seção Evelyn com quote mark gigante, background tint, layout assimétrico

---

## DÚVIDAS EM ABERTO

_Nenhuma no momento. Seção aprovada visualmente._

---

## ACTION ITEMS

| # | Task | Responsável | Prazo | Status |
|---|------|-------------|-------|--------|
| 1 | ✅ Redesign Atama Lab (grid 7/5) | Nicolas | 18/05 | ✅ CONCLUÍDO |
| 2 | ✅ Reduzir "PRODUTORA." para premium | Nicolas | 18/05 | ✅ CONCLUÍDO |
| 3 | ✅ Ampliar eyebrow "ATAMA LAB" | Nicolas | 18/05 | ✅ CONCLUÍDO |
| 4 | ✅ Remover travessões (IA-speak) | Nicolas | 18/05 | ✅ CONCLUÍDO |
| 5 | Validar responsividade mobile (sm/md/lg) | Nicolas | 19/05 | ⏳ |
| 6 | Atualizar `.ai-context.md` com handover | Nicolas | 19/05 | ⏳ |

---

## PRÓXIMOS PASSOS

### Hoje (18/05 — noite)
- ✅ Seção Atama Lab visualmente finalizada
- Aguardar feedback de stakeholders (Rogério/Rose)

### Semana (19–23/05)
- Testes responsividade mobile
- Integração preço do curso (bloqueador: decisão sobre valor em R$)
- Integração Mercado Pago checkout
- 301 redirects + SEO técnico (tags, schema, meta descriptions)

### Sprint final (25–31/05)
- Implementação `/lab` (formulário cadastro)
- Plausible Analytics
- **31/05: go-live**

---

## OBSERVAÇÕES

**Relacionado à ata anterior (ata_weekly_2026-05-18.md):**
- Seção Atama Lab é bloqueada pela definição do preço do curso (Rogério/Rose)
- Card vitrine está pronto, mas preço/parcelamento/data faltam
- Mockup de dados está em place, basta substituir por valores reais quando aprovado

**Resumo de mudanças CSS:**
- `font-black` → `font-extrabold`
- `PRODUTORA.` (uppercase) → `Produtora.` (sentence case)
- Eyebrow: `text-[9px]` → `clamp(18px, 2.2vw, 28px)`
- Manifesto size: `clamp(52px, 7vw, 96px)` → `clamp(42px, 5.2vw, 72px)`
- Tracking: `-0.03em` → `-0.01em` (menos tenso)

---

*Ata elaborada por Nicolas — PM/PD/Tech Lead*  
*18 de maio de 2026*
