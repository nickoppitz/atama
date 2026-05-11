# Benchmarks — Design Knowledge Base

**Organização:** Benchmarks consolidados por data e contexto

---

## Benchmarks Disponíveis

### 📅 10-05-2026 — Design Referências Audiovisual

**Localização:** `10-05-2026 - Design Referências Audiovisual/`

**Conteúdo:**
- `benchmark.md` — Consolidação completa de 3 evals, organizado por contexto de produto (Site / Lab / Ambos)
- `screenshots/` — Capturas de tela de todos os sites analisados (28 referências)

**Evals inclusos:**
1. **Eval 1: UX & Conversão** (≤2 cliques)
   - Sites: Hotmart, Domestika, e outros
   - Foco: Navegação, jornada crítica, CTA patterns, copy

2. **Eval 3: GUI & Padrões (Design System)**
   - Sites: Coursera, Udemy, Skillshare
   - Foco: Componentes, layout, responsividade, accessibility

3. **Eval 4: Referências Audiovisual (9 Sites)**
   - Sites: A24, Hyperisland, Vulcana, Barco, O2, Landia, Cimarron, Beham, Yutopia
   - Foco: Padrões visuais, navegação, recomendações contextualizadas

---

## Como Usar

1. **Para entender padrões UX** → Leia Eval 1 (section: "Para Atama Lab" ou "Para Ambos")
2. **Para implementar design system** → Leia Eval 3 (componentes, spacing, accessibility)
3. **Para escolher referências visuais** → Leia Eval 4 (análise por relevância + padrões)
4. **Para síntese de recomendações** → Leia final section "Consolidação: Recomendações por Contexto"

---

## Arquitetura de Padrão

Futuros benchmarks devem seguir este padrão:

```
benchmarks/
├── README.md                                                (este arquivo)
├── DD-MM-YYYY - Contexto do Benchmarking/
│   ├── benchmark.md                                       (arquivo único consolidado)
│   └── screenshots/                                       (capturas de tela)
│       ├── site1.png
│       ├── site2.png
│       └── ...
```

**Cada benchmark.md deve:**
- Consolidar múltiplos evals em um único arquivo
- Organizar conteúdo por contexto de produto (Site / Lab / Ambos), não por eval type
- Preservar TODOS os achados, padrões e recomendações (sem sumarização)
- Incluir índice navegável

---

*Última atualização: 2026-05-10*
