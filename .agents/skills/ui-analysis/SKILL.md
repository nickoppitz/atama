---
name: ui-analysis
description: >
  Use quando precisar avaliar uma interface de forma estruturada,
  identificando problemas e oportunidades de melhoria com
  recomendacoes acionaveis.
---

# UI Analysis

Processo para avaliar interfaces de forma estruturada e produzir recomendacoes acionaveis.

## Quando usar

- Avaliar uma interface existente
- Comparar alternativas de UI
- Identificar problemas de usabilidade
- Validar se uma proposta de interface funciona

## Processo

### 1. Entender o contexto
- Quem usa esta interface? (perfil, frequencia, expertise)
- Qual o objetivo principal do usuario nesta tela?
- Em que dispositivo/contexto e usado?
- Que restricoes existem? (tecnologicas, de sistema, de marca)

### 2. Avaliar por dimensao

**Hierarquia visual**
- O elemento mais importante e o mais proeminente?
- A ordem de leitura esta clara?
- Ha competicao visual entre elementos?

**Clareza e affordance**
- O usuario entende o que fazer sem instrucao?
- Acoes primarias se distinguem de secundarias?
- Elementos interativos parecem interativos?

**Densidade informacional**
- A quantidade de informacao e adequada ao contexto?
- Ha excesso de elementos competindo por atencao?
- A informacao esta agrupada de forma logica?

**Consistencia**
- Os padroes visuais sao coerentes com o resto do produto?
- Componentes similares se comportam de forma similar?
- A linguagem visual e uniforme?

**Acessibilidade visual**
- Contraste atende WCAG AA minimo (4.5:1 para texto, 3:1 para elementos grandes)?
- Tamanhos de toque/clique sao adequados (minimo 44px)?
- A interface funciona sem cor como unico diferenciador?

**Edge cases**
- Empty state: o que aparece quando nao ha dados?
- Loading: como o usuario sabe que algo esta carregando?
- Erro: a mensagem de erro ajuda a resolver o problema?
- Overflow: o que acontece com texto longo ou muitos itens?

### 3. Classificar problemas

| Severidade | Criterio |
|---|---|
| **Critico** | Impede o usuario de completar a tarefa |
| **Alto** | Causa confusao significativa ou erro frequente |
| **Medio** | Prejudica eficiencia mas nao impede uso |
| **Baixo** | Melhoria estetica ou de polish |

### 4. Formular recomendacoes

Cada recomendacao deve ser:
- **Especifica** — nao "melhore o contraste", mas "aumente o contraste do texto #999 sobre fundo #FFF de 2.8:1 para 4.5:1"
- **Justificada** — conectada ao problema identificado
- **Acionavel** — possivel de implementar com a informacao dada

## Output esperado

```
## Analise de UI: [nome da tela/componente]

### Contexto
[Quem usa, para que, onde]

### O que funciona
- [ponto forte + por que]

### Problemas identificados

#### [Problema 1] — Severidade: [critico/alto/medio/baixo]
- O que: [descricao objetiva]
- Por que importa: [impacto no usuario]
- Recomendacao: [o que fazer, especificamente]

#### [Problema 2] — Severidade: [critico/alto/medio/baixo]
- O que: [descricao objetiva]
- Por que importa: [impacto no usuario]
- Recomendacao: [o que fazer, especificamente]

### Impacto no DS Atama (shadcn/ui)
[Se alguma recomendacao afeta o DS, listar aqui]

### Resumo de prioridades
1. [acao mais urgente]
2. [segunda prioridade]
3. [terceira prioridade]
```

## Gotchas
- Analise sem contexto de uso e achismo. Se nao sabe quem usa, perguntar primeiro
- "Ficaria melhor assim" nao e analise. Justificar sempre
- Nao listar 20 problemas sem priorizar — o time precisa saber por onde comecar
- Se a mudanca impacta o DS, sinalizar — mudanca local pode ter efeito sistemico
