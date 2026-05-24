---
name: sprint-planning
description: >
  Use quando precisar planejar uma iteracao, priorizar backlog,
  definir sprint goal ou alinhar o time sobre o que construir
  a seguir.
---

# Sprint Planning

Processo para planejar uma iteracao com itens priorizados, criterios claros e dependencias mapeadas.

## Quando usar

- Inicio de nova iteracao/sprint
- PM e Agile Coach alinhando prioridades
- Time precisa de clareza sobre o que construir a seguir
- Backlog precisa ser priorizado

## Processo

### 1. Revisar estado atual
- O que esta em progresso? (doing)
- O que esta bloqueado? (blocked)
- O que foi concluido desde a ultima revisao? (done)
- Ha debt tecnica ou bugs pendentes?

### 2. Priorizar backlog

Usar matriz Value/Effort:

| | Baixo esforco | Alto esforco |
|---|---|---|
| **Alto valor** | FAZER PRIMEIRO | Planejar com cuidado |
| **Baixo valor** | Fazer se sobrar tempo | NAO FAZER |

Para cada item candidato:
- **Value**: Que KPI impacta? Quanto? (1-5)
- **Effort**: Quanto trabalho do time? (1-5)
- **Score**: Value / Effort

### 3. Aplicar filtro Pareto
Para cada item priorizado:
- Existe versao mais simples que entrega 70% do valor?
- Pode ser dividido em entrega menor?

### 4. Definir sprint goal
Uma frase que responde: "Ao final desta sprint, o que teremos alcancado?"

### 5. Mapear dependencias
- Item A depende de Item B?
- Algum item depende de decisao externa?
- Algum item depende de outro agente?

### 6. Definir acceptance criteria
Para cada item, envolvendo QA:
- O que define "pronto" para este item?
- Criterios verificaveis (sim/nao)

### 7. Definir WIP limits
- Max 2 itens em progresso por agente
- Se algo bloquear, resolver blocker antes de puxar novo item

## Output esperado

```
## Sprint [N] Plan

### Goal
[Uma frase: o que esta sprint alcanca?]

### Itens priorizados

| # | Item | Owner | Effort | Value | Score | Acceptance criteria |
|---|---|---|---|---|---|---|
| 1 | ... | PD/Dev/QA | 1-5 | 1-5 | V/E | ... |
| 2 | ... | ... | ... | ... | ... | ... |

### Dependencias
- [Item X depende de Item Y]
- [Item Z depende de decisao do usuario]

### Riscos/Blockers
- [risco identificado + mitigacao]

### WIP Limits
- Max 2 itens em progresso por agente

### Definition of Done para esta sprint
- [ ] Todos os itens com acceptance criteria atendidos
- [ ] QA checklist passou para itens entregues
- [ ] Sem bugs Critical/High abertos
```

## Gotchas
- Sprint sem goal claro e lista de tarefas, nao sprint
- Muitos itens = nenhum entregue. Preferir menos itens bem feitos
- Se tudo e prioridade, nada e prioridade — forcar ranking
- Acceptance criteria definidos ANTES da implementacao, nao depois
- WIP limits existem para serem respeitados, nao ignorados
