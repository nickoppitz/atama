---
name: problem-framing
description: >
  Use quando um pedido novo, ambiguo ou complexo precisar ser
  decomposto antes de qualquer solucao. Tambem use quando o
  usuario pular direto para solucao sem definir o problema.
---

# Problem Framing

Processo para transformar um pedido bruto em um problema bem definido antes de buscar solucao.

## Quando usar

- Pedido novo que ainda nao foi enquadrado
- Pedido ambiguo com multiplas interpretacoes possiveis
- Usuario pedindo solucao sem ter definido o problema
- Problema complexo com multiplas dimensoes

## Processo

### 1. Separar problema de sintoma
- O que o usuario disse? (pedido literal)
- O que provavelmente esta por tras? (problema real)
- Existe gap entre os dois? Se sim, questionar

### 2. Mapear restricoes
- Tecnicas (tecnologia, plataforma, sistema existente)
- De negocio (prazos, budget, prioridades estrategicas)
- De escopo (o que esta dentro e fora)
- De contexto (maturidade do time, historico, decisoes ja tomadas)
- De viabilidade MVP (o que e fundamental vs. o que e sofisticado)

### 3. Identificar quem e afetado
- Usuarios finais (produtores e profissionais AV iniciantes do RS (público do Lab), coprodutores, distribuidores e players de mercado (público do site), hosters de espaços presenciais — ex: Laura (Casa da Chakra))
- Time de produto (PM, PD, Dev, QA)
- Stakeholders de negocio
- Outros sistemas ou produtos dependentes

### 4. Definir criterios de sucesso
- Como saber se resolvemos o problema?
- O que muda se der certo?
- O que e aceitavel vs. ideal?
- Que KPI do MVP isso impacta?

### 5. Formular HMWs
- Gerar 3-5 "How Might We" que abram espaco para solucoes
- Priorizar por impacto e viabilidade

### 6. Filtro Pareto
Para cada HMW priorizado:
- Qual a versao mais simples que entrega 70% do valor?
- O que podemos NÃO fazer e ainda resolver o problema?
- Existe uma abordagem de 30% de esforco que funciona?

## Output esperado

```
## Problem Statement
[Maximo 2 frases descrevendo o problema real]

## Restricoes identificadas
- [lista concisa, incluindo restricoes de MVP]

## Criterios de sucesso
- [o que define "resolvido"]
- [que KPI impacta]

## HMWs priorizados
1. Como podemos...
2. Como podemos...
3. Como podemos...

## Versao Pareto (30/70)
[Para o HMW #1: qual a versao mais simples que entrega valor?]

## Premissas a validar
- [o que assumimos mas nao confirmamos]

## Proximo passo recomendado
[o que fazer agora: pesquisar? prototipar? consultar especialista?]
```

## Gotchas
- NUNCA pular para solucao antes de completar o framing
- Se o problema for muito amplo, dividir em sub-problemas antes de prosseguir
- Questionar o pedido original e parte do processo, nao insubordinacao
- HMWs genericos demais ("Como podemos melhorar a experiencia?") sao inuteis — ser especifico
- Sempre incluir o filtro Pareto — sem ele o framing tende ao ideal, nao ao viavel
