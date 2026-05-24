---
name: retrospective
description: >
  Use quando houver aprendizado acumulado suficiente para extrair
  padroes. Tambem use apos concluir feature significativa, enfrentar
  blockers repetidos ou quando o PM solicitar.
---

# Retrospective

Processo para extrair aprendizados e definir acoes de melhoria concretas.

## Quando usar

- Feature significativa foi concluida
- O time enfrentou blockers repetidos
- Ha aprendizado acumulado suficiente para extrair padroes
- PM solicita
- Contexto do chat tem amostragem suficiente de tarefas realizadas

## Processo

### 1. O que foi bem? (preservar)
- Que praticas funcionaram?
- Que decisoes se mostraram corretas?
- Que colaboracoes entre agentes foram produtivas?

### 2. O que nao foi bem? (melhorar)
- Onde houve retrabalho?
- Que decisoes se mostraram erradas ou incompletas?
- Onde o fluxo travou?
- Que premissas estavam erradas?

### 3. O que aprendemos? (insights)
- Que padroes emergiram?
- O que sabemos agora que nao sabiamos antes?
- Que surpresas tivemos?

### 4. O que tentar diferente? (experimentos)
- Max 2 action items — mais que isso e nenhum acontece
- Cada action item deve ser:
  - Especifico (nao "melhorar comunicacao", mas "incluir acceptance criteria antes de implementar")
  - Ter dono (quem e responsavel)
  - Ter prazo ou trigger (quando/como verificar)

### 5. Pareto: maior impacto
- De todos os aprendizados, qual UNICA melhoria teria o maior impacto?
- Essa e a prioridade zero

## Output esperado

```
## Retro: [topico/sprint/feature]

### O que foi bem
- [pratica/decisao + por que funcionou]

### O que nao foi bem
- [problema + impacto]

### Aprendizados
- [insight extraido]

### Action items (max 2)
1. [acao especifica] — Dono: [agente] — Quando: [prazo/trigger]
2. [acao especifica] — Dono: [agente] — Quando: [prazo/trigger]

### Melhoria de maior impacto
[A unica coisa que, se mudarmos, fara a maior diferenca]
```

## Gotchas
- Retro sem action items e sessao de terapia, nao melhoria
- Max 2 action items — disciplina e mais importante que completude
- "Melhorar X" nao e action item. "Fazer Y especifico quando Z acontecer" e
- Nao culpar — focar no processo, nao nas pessoas/agentes
- Retro deve ser proporcional ao que aconteceu — nao forcar retro profunda para sprint trivial
- Aproveitar o contexto do chat da forma mais eficaz possivel
