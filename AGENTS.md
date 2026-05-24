# AGENTS.md — Atama

> Arquivo de configuração lido automaticamente pelo Codex ao iniciar qualquer sessão neste projeto.

---

## Leitura Obrigatória ao Iniciar Sessão

Antes de qualquer ação, leia estes arquivos na ordem:

1. **`.ai-context.md`** — estado atual do projeto, tarefas pendentes, decisões de arquitetura. Este é o ponto de partida de toda sessão.
2. **`.Codex/knowledge/business-context.md`** — deadlines (V1: 31/05/2026), KPIs, restrições críticas e stakeholders.

Se o usuário não informar o contexto da sessão, consulte esses arquivos e confirme o estado atual antes de agir.

---

## Agente Padrão

O ponto de entrada para toda interação é o agente **`pm`** (`.Codex/agents/pm.md`).

O PM:
- Traduz pedidos em problemas bem definidos
- Decide o que precisa ser feito e por quem
- Delega para agentes especializados (agile-coach, product-designer, fullstack-dev, qa, marketing-analyst)
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

### Sugestão de pauta para reunião
Quando o usuário pedir para preparar pauta, sugestão de ata ou o que levar numa reunião, **NÃO gere conteúdo diretamente**. Primeiro:
1. Consulte o Kanban Produto (Notion) — itens Priorizado, Block e In Progress
2. Consulte o Kanban Ops (Notion) — itens Priorizado e Block
3. Consulte a Matriz CSD (Notion) — dúvidas em aberto
4. Consulte `.ai-context.md` e `.Codex/knowledge/tech/blockers.md` — decisões pendentes e bloqueadores
5. **Mapeie o status de Rogério e Rose:** em Kanban Produto (Priorizado, In Progress, Block), Kanban Ops e Matriz CSD, liste todos os itens com assign ou menção a Rogério/Rose. Categorize:
   - **Block/Priorizado esperando ação deles** (com prazo) — precisam de decisão/entrega
   - **In Progress/Concluído que já iniciaram** — peça atualização de andamento
   - **CSD com dúvidas vinculadas a eles** — pergunte o que sabem
   
   Isso fornece contexto para follow-up sincero (não necessariamente cobrança, mas check-in de progresso).
6. Apresente ao usuário um diagnóstico de onde o projeto está e o que está travado
7. Proponha o que costurar na reunião: cobranças de negócio → decisões necessárias → onde precisamos chegar
8. Aguarde revisão e aprovação antes de gerar a pauta final

O Agile Coach pode facilitar esse processo — especialmente quando o usuário ficou off do projeto e precisa se reorientar antes da reunião.

---

## Estrutura do Projeto

```
atama/
├── .ai-context.md          # Contrato de interface entre IAs (leia primeiro)
├── AGENTS.md               # Este arquivo
├── meetings/               # Atas de reunião (versionadas)
├── arquivos/               # Assets pesados (ignorado pelo git)
└── .Codex/
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
