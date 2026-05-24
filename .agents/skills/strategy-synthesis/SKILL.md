---
name: strategy-synthesis
description: >
  Use quando precisar consolidar inputs de multiplos especialistas
  ou multiplas dimensoes em uma recomendacao coerente com
  trade-offs explicitos.
---

# Strategy Synthesis

Processo para consolidar multiplos inputs em uma recomendacao unificada.

## Quando usar

- PM recebeu outputs de 2+ especialistas sobre o mesmo tema
- Ha recomendacoes parcialmente conflitantes que precisam de arbitragem
- Problema multidimensional que precisa de posicao integrada
- Fechamento de um ciclo de investigacao com recomendacao final

## Processo

### 1. Mapear inputs recebidos
- De quem veio cada input? (PD, Dev, QA, Agile Coach)
- Que pergunta cada um responde?
- Onde convergem?
- Onde divergem?

### 2. Identificar tensoes
- Ha conflito entre design ideal e viabilidade tecnica?
- Ha trade-off entre qualidade e velocidade de entrega?
- Ha gap entre o que seria ideal e o que e viavel no MVP?
- Listar cada tensao explicitamente

### 3. Filtro MVP
Para cada tensao identificada:
- Qual resolucao e mais simples e entrega mais valor?
- O que pode ser adiado para pos-MVP sem comprometer o core?
- Aplicar Pareto: 30% esforco para 70% resultado

### 4. Resolver ou explicitar

Para cada tensao:
- Se tem criterio claro para resolver → resolver e justificar
- Se depende de contexto que o usuario tem → apresentar as opcoes com trade-offs
- Se e genuinamente ambigua → dizer que e ambigua e por que

### 5. Formular recomendacao integrada

A recomendacao final deve:
- Incorporar o melhor de cada input
- Resolver ou explicitar conflitos
- Ser acionavel (o que fazer agora)
- Indicar o que fica em aberto

## Output esperado

```
## Sintese: [tema]

### Inputs consolidados
- Product Designer: [resumo da posicao]
- Full Stack Dev: [resumo da posicao]
- QA: [resumo da posicao]
- Agile Coach: [resumo da posicao]

### Convergencias
- [onde todos concordam]

### Tensoes identificadas
- [tensao 1: descricao + posicoes conflitantes]
- [tensao 2: descricao + posicoes conflitantes]

### Recomendacao
[Posicao integrada com justificativa]

### Versao Pareto (se aplicavel)
[Versao simplificada que entrega 70% do valor]

### Trade-offs desta recomendacao
- Ganhamos: [o que]
- Abrimos mao de: [o que]
- Risco: [o que pode dar errado]

### Proximos passos
1. [acao imediata]
2. [acao seguinte]

### Em aberto
- [o que precisa de mais investigacao ou decisao posterior]
```

## Gotchas
- Sintese nao e resumo. E posicao integrada com decisao
- Nao esconder conflitos — explicita-los e o valor da sintese
- Se todos concordam, a sintese e simples. Se divergem, e onde seu trabalho importa
- "Depende" sem explicar de que depende nao e sintese
- Sempre aplicar filtro MVP — a sintese deve ser acionavel no contexto atual
