---
name: handover
description: >
  Transfere contexto entre sessões de IA (Claude Code ↔ ChatGPT) via GitHub.
  Lê o histórico recente do Git, resume o que foi feito, atualiza .ai-context.md
  e prepara instruções para a próxima IA continuar o trabalho sem perda de contexto.
  Use ao fim de cada sessão de trabalho significativa antes de commitar.
---

# Handover — Transferência de Contexto entre IAs

> **Objetivo:** Garantir continuidade de trabalho entre Claude Code e ChatGPT (ou qualquer outra IA) via GitHub, usando `.ai-context.md` como contrato de interface.

## Quando usar

- Ao fim de uma sessão de trabalho significativa
- Antes de passar o projeto para o ChatGPT ou outra IA
- Após concluir uma feature, sprint ou conjunto de decisões importantes
- Quando o PM (Nicolas) solicitar

---

## Protocolo de Execução

### Passo 1 — Ler o estado atual

Antes de gerar qualquer output, leia:
1. `.ai-context.md` — estado atual documentado
2. `.claude/knowledge/business-context.md` — deadlines, KPIs, restrições
3. `git log --oneline -15` — últimos commits desta sessão

### Passo 2 — Resumir a sessão

Gere um resumo estruturado da sessão atual com base no git log e no contexto da conversa:

```
## Sessão [DATA]

### O que foi feito
- [item concreto 1]
- [item concreto 2]
...

### Decisões tomadas
- [decisão + justificativa]

### Bloqueios identificados
- [bloqueio + quem deve resolver]

### Estado dos KPIs
- Inscrições Curso Carro-Chefe: [status]
- Conversão site → Lab: [status]
- Pagamento funcional: [status]
- Time to launch: [dias restantes até 31/05]
```

### Passo 3 — Atualizar .ai-context.md

Atualize as seguintes seções do `.ai-context.md`:

1. **Data da última atualização** — data de hoje
2. **Responsável pela última sessão** — qual IA + modelo
3. **O que está funcional** — adicione itens concluídos
4. **O que está em progresso** — atualize ou limpe
5. **Tarefas Pendentes** — remova o que foi feito, adicione o que surgiu
6. **Decisões de Arquitetura** — adicione novas decisões tomadas

### Passo 4 — Preparar bloco ChatGPT (se handover para ChatGPT)

Se o próximo a trabalhar for o ChatGPT, adicione ou atualize o bloco "Para o ChatGPT" com:

```markdown
### Próxima tarefa recomendada
[Qual card do Kanban deve ser atacado a seguir e por quê]

### Contexto crítico para esta tarefa
[O que o ChatGPT precisa saber especificamente para a próxima tarefa]

### Não faça na próxima sessão
[O que está fora de escopo agora]
```

### Passo 5 — Commitar

Após atualizar o `.ai-context.md`, commite o arquivo:

```bash
git add .ai-context.md
git commit -m "chore: atualiza contexto de handover [$(date +%Y-%m-%d)]"
git push
```

---

## Template de Output do Handover

```markdown
# Handover — [DATA]

## Resumo da Sessão
[Resumo em 2-3 frases do que foi feito]

## Itens Concluídos
- ✅ [item]
- ✅ [item]

## Próxima Prioridade
[Card mais importante do backlog + motivo]

## Decisões Críticas Desta Sessão
- [decisão]: [justificativa]

## Bloqueios Abertos
- [bloqueio]: aguardando [quem]

## Dias até deadline V1
[N] dias restantes até 31/05/2026
```

---

## Princípios

- **Continuidade sem fricção**: a IA receptora deve conseguir começar a trabalhar sem perguntas
- **Foco no que move KPI**: o handover deve sempre apontar para a próxima ação que move um KPI
- **Pareto no contexto**: transferir o essencial, não o histórico inteiro
- **Git como fonte da verdade**: o `.ai-context.md` no GitHub é o estado canônico do projeto

## Gotchas

- Se o git log estiver vazio, use o contexto da conversa atual para inferir o que foi feito
- Não duplicar o que já está no Kanban do Notion — apenas referenciar
- O bloco "Para o ChatGPT" deve ser autocontido — o ChatGPT pode não ter contexto nenhum além do que está no arquivo
- Sempre incluir o deadline e dias restantes — é o dado mais crítico do projeto agora
