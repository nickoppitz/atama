# Knowledge Base — Índice

Base de conhecimento estruturada por setor do Atama. Leia este índice quando precisar consultar informações.

---

## 📊 Business — Contexto Comercial

Start here para entender o negócio, deadlines, KPIs e stakeholders.

- **[`business/README.md`](business/README.md)** — Guia do setor
- **[`business/context.md`](business/context.md)** — Visão, roadmap, restrições, KPIs completos
- **[`business/kpis.md`](business/kpis.md)** — Métricas de sucesso do MVP
- **[`business/stakeholders.md`](business/stakeholders.md)** — Quem é quem, responsabilidades, decisões

**⚠️ Deadline crítico: 31/05/2026 (21 dias)**

---

## 🎨 Design — Identidade e UX

Para designers e product designers: referências visuais, design system, análises de benchmark.

- **[`design/README.md`](design/README.md)** — Guia do setor
- **[`design/benchmarks/`](design/benchmarks/)** — Benchmarks visuais/UX de referências (capturas + análises)
- **[`design/logo_atamafilmes.png`](design/logo_atamafilmes.png)** — Logo de referência

**Design System (canônico) — `.claude/ds/` (fora de knowledge):**
- **[`../ds/principles.md`](../ds/principles.md)** — Princípios conceituais (contenção visual, escala concêntrica)
- **[`../ds/design-tokens-guideline.md`](../ds/design-tokens-guideline.md)** — Tokens: cor, tipografia, spacing, radius
- **[`../ds/README.md`](../ds/README.md)** — Protocolo de sync Figma ↔ markdown ↔ código

**Regra de ouro**: Fundo branco é identidade. Motion design é V2+, zero para V1.

---

## 🎯 Product — Visão e Roadmap

Para PMs e product designers: fluxogramas, roadmap, personas, escopo de versões.

- **[`product/README.md`](product/README.md)** — Guia do setor
- **[`product/fluxograma.md`](product/fluxograma.md)** — Estrutura inicial do projeto
- **[`product/roadmap.md`](product/roadmap.md)** — Versões V1/V2/V3 escopo e prazos (produto + marketing integrados)
- **[`product/personas.md`](product/personas.md)** — Personas Lab + site — A CRIAR

---

## 💻 Tech — Stack e Decisões Técnicas

Para devs e arquitetos: decisões técnicas, stack, bloqueadores, integrações.

- **[`tech/README.md`](tech/README.md)** — Guia do setor
- **[`tech/blockers.md`](tech/blockers.md)** — 🔴 CRÍTICO: bloqueadores que trancam o V1
- **[`tech/stack.md`](tech/stack.md)** — Tech stack decision log — A CRIAR
- **[`tech/integrations.md`](tech/integrations.md)** — Notas: Mercado Pago, plataforma cursos — A CRIAR

**Bloqueador crítico**: Decisão sobre plataforma de cursos (Hotmart, Kiwify, custom).

---

## ♿ A11y — Acessibilidade

Padrões, guias e validações de acessibilidade.

- **[`a11y/README.md`](atama/.claude/knowledge/a11y/README.md)** — Guia de acessibilidade
- **[`a11y/regras-wcag.md`](a11y/regras-wcag.md)** — WCAG 2.1 AA compliance
- **[`a11y/color-contrast-guide.md`](a11y/color-contrast-guide.md)** — Contraste de cores
- **[`a11y/screen-reader-mobile.md`](a11y/screen-reader-mobile.md)** — Mobile screen reader
- **[`a11y/touch-target-guide.md`](a11y/touch-target-guide.md)** — Touch target sizes

---

## 📣 Marketing — Growth, CRO e Canais

Para o Marketing Analyst: análise de audiência, estratégia de canais, CRO, SEO e plano de lançamento.

- **[`marketing/README.md`](marketing/README.md)** — Guia do setor + princípios do MA
- **[`marketing/analise-stats-site.md`](marketing/analise-stats-site.md)** — AWStats 2025–2026 (bot vs humano) + análise do site atual + StatCounter Brasil: device, OS, browser, social, search
- **[`marketing/estrategia-canais.md`](marketing/estrategia-canais.md)** — Canal primário por persona: TikTok/Instagram (Lab) vs busca/LinkedIn (Parceiro)
- **[`marketing/plano-pre-lancamento.md`](marketing/plano-pre-lancamento.md)** — Calendário de aquecimento 12–31/05: 7 posts sequenciados + ativação direta
- **[`marketing/copy-lab.md`](marketing/copy-lab.md)** — Copy de conversão para /lab: headline, subheadline, prova social, FAQ de objeções, CTA
- **[`marketing/seo-checklist-v1.md`](marketing/seo-checklist-v1.md)** — SEO técnico obrigatório antes do go-live: 301 redirects, meta tags, OG, JSON-LD, sitemap, Search Console, Plausible

**Insight crítico:** tráfego real estimado em ~500–1.000 humanos/mês (AWStats inflado por bots WordPress). Canal primário de aquisição Lab: TikTok/Instagram outbound + ativação direta via WhatsApp.

---

## ⚙️ Process — Processos e Templates

Workflows, templates, definições de done.

- **[`process/definition-of-done.md`](process/definition-of-done.md)** — Checklist: o que significa "pronto"
- **[`process/template-sprint-retrospective.md`](process/template-sprint-retrospective.md)** — Template para retro

---

## Como Usar Este Knowledge

1. **Para decidi sobre features**: consulte [`business/context.md`](business/context.md) → KPI passa? Entra no scope?
2. **Para design visual**: comece por [`design/benchmarks/`](design/benchmarks/) → tokens em [`../ds/`](../ds/)
3. **Para tech decisions**: leia [`tech/blockers.md`](tech/blockers.md) primeiro, depois stack decisions
4. **Para entender roadmap**: [`product/fluxograma.md`](product/fluxograma.md) + [`product/roadmap.md`](product/roadmap.md)
5. **Para acessibilidade**: revise [`a11y/regras-wcag.md`](a11y/regras-wcag.md) antes de implementar

---

**Arquivos marcados com "A CRIAR" devem ser preenchidos nas próximas sessões.**

*Última atualização: 2026-05-22 — Seção Design corrigida (trilha stale removida) + DS canônico (.claude/ds/) indexado*
