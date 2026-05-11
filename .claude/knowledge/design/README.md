# Design — Identidade Visual e UX

Base de conhecimento de design: referências visuais, guidelines, padrões e análises.

---

## 📁 Estrutura

```
design/
├── README.md                      ← Você está aqui
├── INDEX.md                       ← Navegação da base de conhecimento
├── guidelines.md                  ← Guia visual (fundo branco, cores, tipografia) [TO-DO]
└── benchmarks/                    ← Análises comparativas consolidadas
    ├── INDEX.md                   ← Navegação de benchmarks
    └── 10-05-2026 - Design Referências Audiovisual/
        ├── benchmark.md           ← Consolidação de 3 evals (completa, sem sumarização)
        └── screenshots/           ← 15 capturas de sites analisados
```

---

## 🚀 Comece Por Aqui

### Para Designers/PD
1. Leia **[`benchmarks/10-05-2026 - Design Referências Audiovisual/benchmark.md`](benchmarks/10-05-2026%20-%20Design%20Referências%20Audiovisual/benchmark.md)** — Consolidação completa
   - Eval 1: UX & Conversão (Hotmart, Domestika)
   - Eval 3: GUI & Design System (Coursera, Udemy, Skillshare)
   - Eval 4: Referências Audiovisual (9 sites: A24, Hyperisland, Vulcana, Barco, O2, Landia, Cimarron, Beham, Yutopia)
2. Abra **[`benchmarks/10-05-2026 - Design Referências Audiovisual/screenshots/`](benchmarks/10-05-2026%20-%20Design%20Referências%20Audiovisual/screenshots/)** para referência rápida
3. Consulte **[`guidelines.md`](guidelines.md)** (quando preenchido)

### Para Devs
1. Consulte **Eval 3: GUI & Padrões** em **[`benchmark.md`](benchmarks/10-05-2026%20-%20Design%20Referências%20Audiovisual/benchmark.md)** para padrões UI e componentes
2. Use **Consolidação: Recomendações por Contexto** (seção final) para tokens (cores, spacing, tipografia)
3. Implemente design system conforme Design System Recomendado em Eval 3

### Para PM
1. Leia **Eval 1: UX & Conversão** em **[`benchmark.md`](benchmarks/10-05-2026%20-%20Design%20Referências%20Audiovisual/benchmark.md)** para KPIs de conversão e jornada ≤2 cliques
2. Consulte **Consolidação: Recomendações por Contexto** para síntese de recomendações

---

## 📋 Checklist Design V1

Antes de começar os wireframes:

- [ ] Ler **`benchmarks/10-05-2026 - Design Referências Audiovisual/benchmark.md`** completo (ou navegue por seção)
- [ ] Alinhamento sobre paleta: Verde (#1DBF60) + Laranja (#FF6B35) confirmado
- [ ] Decisão sobre tipografia: Inter ou Montserrat (sans-serif pura)
- [ ] Definir menu principal: [Home] [Sobre] [Filmes/Cursos] [Lab] [Contato] (5 itens max)
- [ ] Decidir site strategy: Branco + Minimal (O2 style) vs Branco + Visual (Hyperisland/Vulcana style)
- [ ] Validar jornada de conversão: Home → Lab → Inscrição (≤2 cliques)

---

## 🎨 Princípios de Design Atama

✅ **Fundo branco** é identidade central (padrão audiovisual)  
✅ **Accent vibrante** (verde ou laranja) diferencia marca  
✅ **Minimalista, mas visual** — não deixar vazio  
✅ **CTA em linha cheia** — ~60px altura, 100% width em mobile  
✅ **Portfolio em destaque** — credibilidade > stock photos  
❌ **Motion design é V2+** — zero parallax/transições no V1  
❌ **Dark mode é V2+** — manter V1 simples e branco  
❌ **Múltiplas tipografias** — máximo 2 families (Inter + maybe serif em V2)  

---

## 📚 Conteúdo Consolidado

**Benchmark 10-05-2026** consolida:

| Eval | Sites Analisados | Foco |
|------|------------------|------|
| **UX & Conversão** | Hotmart, Domestika | Navegação, jornada crítica, CTA patterns, Nielsen |
| **GUI & Padrões** | Coursera, Udemy, Skillshare | Componentes, layout, responsividade, accessibility |
| **Referências Audiovisual** | A24, Hyperisland, Vulcana, Barco, O2, Landia, Cimarron, Beham, Yutopia | Padrões visuais, análise de relevância |

**Toda organizada por contexto:** Site Atama Filmes, Atama Lab, Ambos

---

*Base de conhecimento atualizada: 2026-05-10*
