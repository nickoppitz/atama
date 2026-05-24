---
name: context-transfer
description: >
  Use quando precisar transferir contexto entre agentes de forma
  estruturada, garantindo que o especialista receptor tenha tudo
  que precisa para trabalhar sem perda de informacao.
---

# Context Transfer

Protocolo para transferir contexto entre agentes sem perda de informacao relevante.

## Quando usar

- PM delegando tarefa complexa a especialista
- Especialista precisando de input de outro especialista (via PM)
- Retorno de especialista que precisa ser repassado a outro agente
- Qualquer handoff onde contexto parcial geraria retrabalho

## Estrutura de transferencia

```
## Contexto para [agente destino]

### Objetivo
[O que precisa ser feito. Uma frase clara.]

### Contexto do problema
[O que ja se sabe. Decisoes ja tomadas. Restricoes conhecidas.
Apenas o que e relevante para esta tarefa — nao o historico inteiro.]

### O que ja foi feito
[Analises anteriores, decisoes ja tomadas, inputs ja recebidos.
Incluir apenas se relevante para evitar retrabalho.]

### O que se espera de volta
[Formato e conteudo esperado do retorno.
Ex: "Conceito de UI com componentes shadcn/ui" ou "Checklist de QA"]

### Restricoes
[Limites de escopo, tempo, tecnologia ou decisoes que nao podem ser alteradas.]

### Informacao adicional
[Dados, links, referencias que o agente precisa consultar.]
```

## Principios

- **Suficiencia**: o receptor deve conseguir trabalhar sem precisar pedir mais contexto
- **Relevancia**: incluir apenas o que importa para esta tarefa especifica
- **Clareza**: o objetivo deve caber em uma frase
- **Economia**: nao transferir todo o historico — apenas o necessario

## Quando NAO usar

- Pedidos simples que cabem em uma frase ("analise o contraste desta tela")
- Retornos diretos que nao serao repassados
- Quando o contexto ja e obvio pelo fluxo da conversa

## Gotchas
- Transferencia sem objetivo claro gera retrabalho
- Contexto demais e tao ruim quanto contexto de menos — filtrar o relevante
- Se o agente receptor precisar perguntar "mas o que exatamente voce quer?", a transferencia falhou
- O custo de uma boa transferencia e muito menor que o custo de refazer trabalho
