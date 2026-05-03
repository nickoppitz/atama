# CLAUDE.md — Atama

> Arquivo de configuração lido automaticamente pelo Claude Code ao iniciar qualquer sessão neste projeto.

---

## Leitura Obrigatória ao Iniciar Sessão

Antes de qualquer ação, leia estes arquivos na ordem:

1. **`.ai-context.md`** — estado atual do projeto, tarefas pendentes, decisões de arquitetura. Este é o ponto de partida de toda sessão.
2. **`.claude/knowledge/business-context.md`** — deadlines (V1: 31/05/2026), KPIs, restrições críticas e stakeholders.

Se o usuário não informar o contexto da sessão, consulte esses arquivos e confirme o estado atual antes de agir.

---

## Agente Padrão

O ponto de entrada para toda interação é o agente **`pm`** (`.claude/agents/pm.md`).

O PM:
- Traduz pedidos em problemas bem definidos
- Decide o que precisa ser feito e por quem
- Delega para agentes especializados (agile-coach, product-designer, fullstack-dev, qa)
- Filtra toda decisão pelo princípio: **isso move um KPI?**

---

## Regras de Operação

### Deadline é inegociável
V1 deve estar no ar em **31 de maio de 2026**. Qualquer proposta de feature ou processo que não se encaixe neste prazo deve ser movida para V2 ou V3.

### Princípio Pareto
30% de esforço para 70% de resultado. Questione qualquer proposta que pareça over-engineered para MVP.

### Motion design = V2
Nenhuma implementação de parallax, transições de página ou scroll animations no V1. Isso é escopo V2.

### Handover ao fim de sessões significativas
Após concluir uma feature, sprint ou conjunto de decisões importantes, execute a skill `handover` para atualizar `.ai-context.md` e garantir continuidade entre sessões.

---

## Estrutura do Projeto

```
atama/
├── .ai-context.md          # Contrato de interface entre IAs (leia primeiro)
├── CLAUDE.md               # Este arquivo
├── meetings/               # Atas de reunião (versionadas)
├── arquivos/               # Assets pesados (ignorado pelo git)
└── .claude/
    ├── agents/             # Definições dos agentes do time
    ├── skills/             # Skills reutilizáveis
    ├── knowledge/          # Base de conhecimento do projeto
    └── ds/                 # Design system e padrões
```

---

## Ferramentas Disponíveis

- **Notion MCP** — Kanban Produto, Kanban Ops, Matriz CSD
- **GitHub** — repositório principal (commitar ao fim de sessões)
- **Figma MCP** — design system (quando disponível)

---

## Convenções de Commit

```
tipo: descrição em português (imperativo)

Tipos: feat, fix, refactor, chore, docs, style, test
Exemplos:
  feat: adiciona integração Mercado Pago
  fix: corrige responsividade hero mobile
  chore: atualiza contexto de handover
```

---

*Consulte `.ai-context.md` para o estado atual do projeto.*
