---
name: design-benchmark
description: >
  Orquestra análise visual/UX/GUI de sites/produtos de referência conforme o problema específico que PM ou PD está tentando resolver. Use PROATIVAMENTE quando o Product Manager ou Product Designer precisar fazer benchmarking de referências, validar direções visuais/UX, entender padrões da concorrência, ou gerar recomendações de design visual/UX baseadas em análise estruturada. A skill adapta dimensões de análise ao contexto (conversão, visual, UX, credibilidade, etc), orienta o que observar nos sites, e consolida achados em report com recomendações Atama-específicas.
---

# Design Benchmark — Análise Visual/UX de Referências

## Propósito

Esta skill estrutura o processo de benchmarking de referências (sites, produtos, interfaces) e consolida insights em recomendações visuais/UX alignadas à identidade e objetivos do Atama.

Diferente de uma análise genérica, a skill:
- **Adapta ao problema** — entende qual é a questão de produto/design que você quer resolver
- **Orienta a coleta** — te diz exatamente o que observar em cada site
- **Consolida insights** — transforma observações em recomendações acionáveis pra Atama

---

## Fluxo de Uso

### Passo 1: Você descreve o problema + passa referências

```
PM/PD: "Preciso validar se a conversão site → Lab funciona em ≤2 cliques. 
Faça benchmark das 3 produtoras [URLs] pra entender como elas estruturam a navegação."
```

Ou:

```
PD: "Qual visual language as produtoras de audiovisual usam pra construir credibilidade? 
Analisa esses 4 sites [URLs] e me recomenda que estilos visuais Atama deveria adotar."
```

**Você deve incluir:**
- O objetivo/problema (o que você quer resolver)
- Links das referências (3-5 sites)
- Qualquer contexto adicional (público-alvo, KPI, restrição de brand)

### Passo 2: Skill enquadra e orienta

A skill:
1. **Lê o contexto** do seu problema
2. **Decide qual tipo de análise rodar** (visual? UX? conversão? credibilidade?)
3. **Gera um checklist** — lista exatamente o que você deve observar em cada site
4. **Orienta como coletar** — diz se você deve tirar prints, anotar fluxos, etc

### Passo 3: Você navega e coleta evidências

Você abre cada site e observa o que a skill pediu. Pode:
- Descrever o que viu em palavras-chave
- Tirar prints e passar pra skill consolidar
- Anotar padrões, cores, tipografia, fluxos

### Passo 4: Skill consolida em report

Você volta com suas observações e a skill:
1. **Organiza achados** por site e por dimensão (visual, UX, padrões)
2. **Identifica padrões** — o que as referências têm em comum
3. **Gera recomendações** — o que Atama deveria fazer baseado nos achados
4. **Propõe próximos passos** — como usar essas recomendações

**Saída:** Report estruturado com:
- Resumo do problema
- Tipo de benchmark executado
- Achados comparativos por site
- Padrões identificados
- Recomendações visuais/UX pra Atama
- Próximos passos

---

## Tipos de Benchmark (conforme problema)

### A. Benchmark de UX & Conversão
**Quando:** Você quer validar fluxos de usuário, clareza de navegação, eficiência de checkout

**Foco:**
- Navegação (site map, clarity, hierarquia)
- Jornada crítica (entrada → CTA → conversão)
- Análise heurística (Nielsen's 10 usability heuristics)
- Padrões de UI (buttons, forms, confirmations)

**Output:** Recomendações pra otimizar jornada do usuário

---

### B. Benchmark de Visual Design & Credibilidade
**Quando:** Você quer entender visual language, construção de trust, padrões estéticos

**Foco:**
- Paleta de cores e uso de branco/espaço
- Tipografia (fontes, hierarquia, readability)
- Imagery & estilo fotográfico
- Espaçamento e grid
- Elementos que constroem credibilidade (testimonials, awards, team, portfolio)

**Output:** Recomendações de visual identity pra Atama

---

### C. Benchmark de GUI & Padrões
**Quando:** Você quer mapear componentes, padrões de UI, design system patterns

**Foco:**
- Atomização de componentes (buttons, cards, modals, dropdowns)
- Padrões de estado (hover, active, disabled, loading)
- Consistência visual
- Padrões de layout (hero, feature sections, testimonials, CTAs)

**Output:** Recomendações de componentes/padrões pra design system

---

### D. Benchmark Competitivo Integral
**Quando:** Você quer diferenciação visual + UX + positioning

**Foco:**
- Visual design + UX + GUI + mensageria
- Análise competitiva (o que cada site faz bem, o que falta)
- Posicionamento visual (como se diferenciar)
- Recomendações de niche único pra Atama

**Output:** Roadmap visual + UX pra se destacar

---

## Dimensões de Análise (sempre estruturadas assim)

Para cada site analisado, estruture os achados nessas dimensões:

### Visual Design
- **Cores:** Paleta principal, uso de branco/espaço, contraste
- **Tipografia:** Fonte(s), tamanhos, hierarchy, readability
- **Imagery:** Estilo foto/video, filtros, proporções
- **Espaçamento:** Padding, margins, grid, breathing room
- **Estilo visual geral:** Minimalista? Corporativo? Criativo? Moderno?

### GUI & Padrões
- **Componentes primários:** Buttons, cards, inputs, modals
- **Estados:** Hover, active, disabled, loading
- **Padrões de layout:** Hero, sections, CTAs, testimonials, footers
- **Iconografia:** Style, size, usage
- **Consistência:** Seguem um sistema coerente?

### UX & Navegação
- **Arquitetura:** Site map, hierarquia de páginas
- **Navegação primária:** Menu, breadcrumbs, footer links
- **Jornada crítica:** Passos pra atingir objetivo
- **CTAs:** Clareza, posicionamento, copy
- **Fluxo de formulários:** Inputs, validação, feedback
- **Mobile responsiveness:** Como adapta pra mobile

### Análise Heurística (Nielsen's 10)
1. **Visibilidade do sistema:** Feedback claro ao usuário?
2. **Match realidade:** Linguagem do usuário? Convenções seguidas?
3. **Controle & liberdade:** Fácil voltar? Desfazer ações?
4. **Consistência & padrões:** Visual e interaction patterns consistentes?
5. **Prevenção de erros:** Validações, confirmações?
6. **Reconhecimento vs recall:** Fácil encontrar coisas?
7. **Flexibilidade & eficiência:** Shortcuts, atalhos?
8. **Design estético & minimalista:** Sem clutter? Foco no essencial?
9. **Mensagens de erro:** Claras, úteis, sem jargão?
10. **Help & documentação:** FAQ, docs, suporte?

### Credibilidade & Desejabilidade
- **Elementos de confiança:** Testimonials, awards, team, portfolio, case studies
- **Emoção & design:** Conexão emocional? Inspiração?
- **Autenticidade:** Sensação de marca genuína?
- **Profissionalismo:** Detalhes polidos? Sem erros?

---

## Orientações para Coleta (o que você deve fazer)

### 1. Navegação & Observação
- Abra cada site em desktop + mobile
- Explore a navegação principal — quais são as seções?
- Vá pra página mais importante (ex: página de inscrição, portfolio)
- Observe o fluxo — quantos cliques pra atingir CTA principal?

### 2. Screenshots & Anotações
- Se a skill pediu visual design, tire screenshots do hero, cards, componentes
- Anote cores (se tiver color picker, use), fontes, espaçamentos observados
- Se pediu UX, anote fluxos (ex: "Home → Lab → Inscrição em 2 cliques ✅")
- Se pediu GUI, liste os componentes principais que viu

### 3. Padrões Identificados
- Enquanto navega, anote o que vê repetir (ex: "todos usam cards brancos com sombra")
- Anote diferenciais (ex: "esse site usa vídeo em hero, outros usam imagem estática")
- Anote o que falta (ex: "nenhum deles tem testimonials visíveis")

---

## Como Usar Esta Skill: Exemplos

### Exemplo 1: Benchmark de Conversão
```
PM: "Validar se site + lab em ≤2 cliques é viável.
Benchmark: [URL 1], [URL 2], [URL 3]
Contexto: Estamos redesenhando a navegação home → lab."

Skill:
- Enquadra: Benchmark de UX & Conversão
- Orienta: "Observe navegação, conte cliques pro CTA, veja padrões de CTAs"
- Você coleta: prints da navegação, fluxo de cliques
- Skill consolida: "Sites X e Y ficam em 2 cliques, site Z fica em 3. 
  Padrão: todos destacam CTA principal em cor. 
  Recomendação Atama: simplificar menu, destaque CTA Lab em hero."
```

### Exemplo 2: Benchmark de Visual
```
PD: "Qual visual language construir credibilidade em audiovisual?
Benchmark: [URL 1], [URL 2], [URL 3], [URL 4]
Contexto: Site Atama deve projetar expertise, modernidade."

Skill:
- Enquadra: Benchmark de Visual Design & Credibilidade
- Orienta: "Observe paleta de cores, tipografia, imagery, elementos de confiança"
- Você coleta: screenshots de hero, testimonials, portfolio, cores/fonts
- Skill consolida: "Padrão: fundo branco + preto + cor accent (vermelho/azul). 
  Tipografia: sans-serif moderna + serif pra destaque. 
  Imagery: fotos de filmes reais, não stock.
  Recomendação Atama: adota branco + cinza + accent em laranja/vermelho, 
  sans-serif Inter, showcase de filmes reais Atama."
```

---

## Formato de Report Final

O report consolidado deve seguir esta estrutura:

```markdown
# Design Benchmark Report
## [Título do Problema]

### Contexto & Objetivo
[Resumo do problema que você quer resolver]

### Tipo de Benchmark Executado
[Qual análise foi feita: UX? Visual? GUI? Competitivo?]

### Sites Analisados
- Site 1: [URL] — [1 frase de contexto]
- Site 2: [URL] — [1 frase de contexto]
- Site 3: [URL] — [1 frase de contexto]

### Achados por Dimensão

#### Visual Design
[Tabela comparativa de cores, tipografia, estilo]

#### GUI & Padrões
[Padrões observados em componentes, layouts]

#### UX & Navegação
[Clareza, fluxos, conversão]

#### Análise Heurística
[Pontos fortes/fracos em cada dimensão de Nielsen]

### Padrões Identificados
- Padrão 1: [descrição + sites que seguem]
- Padrão 2: [descrição + sites que seguem]
- [...]

### Recomendações para Atama

#### Visual Design
- [Recomendação 1]
- [Recomendação 2]
- [...]

#### UX & Navegação
- [Recomendação 1]
- [Recomendação 2]
- [...]

#### GUI & Padrões
- [Recomendação 1]
- [Recomendação 2]
- [...]

### Próximos Passos
1. [Ação 1 — o que fazer com essas recomendações]
2. [Ação 2]
3. [Ação 3]

---
*Benchmark executado pelo Design Team — [Data]*
```

---

## Restrições & Considerações Atama

Ao gerar recomendações, sempre considere:

- **Identidade Atama:** Fundo branco, minimalista, moderno, confiável
- **Público:** Produtores iniciantes (Lab) + coproductores/distribuidores (site)
- **V1 sem motion design:** Recomendações devem ser puras (estrutura, cor, typography, padrões). Motion vem em V2.
- **Single domain:** Site + Lab no mesmo domínio, navegação unificada
- **Deadline:** Recomendações realistas pra implementar até 31/05/2026
- **Tecnologia:** Tech stack simples, ferramentas gratuitas/baixo custo

---

## Próximas Etapas (depois do report)

1. **Wireframes & Protótipo:** Usar achados do benchmark pra criar wireframes
2. **Design System:** Codificar padrões visuais/UI em componentes
3. **Implementação:** Dev implementa usando recomendações
4. **Validação:** Rodar teste de UX pra confirmar conversão ≤2 cliques

---

*Skill desenvolvida para o Atama — análise visual/UX estruturada adaptada ao problema.*
