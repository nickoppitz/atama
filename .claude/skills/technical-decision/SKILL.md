---
name: technical-decision
description: >
  Use quando uma decisao tecnica definir ou alterar padroes do
  projeto: escolha de biblioteca, modelagem de dados, design de API,
  arquitetura de componentes ou qualquer decisao com impacto
  sistemico.
---

# Technical Decision (ADR)

Processo para documentar decisoes tecnicas com alternativas, justificativa e trade-offs.

## Quando usar

- Escolha de biblioteca ou dependencia
- Modelagem de dados
- Design de API ou rota
- Padrao de arquitetura de componentes
- Qualquer decisao que afeta multiplos arquivos ou features
- Qualquer decisao que seria dificil de reverter

## Estrutura

```
## ADR-[NNN]: [titulo descritivo]

### Status
[Proposta | Aceita | Substituida por ADR-XXX]

### Contexto
[Que problema ou necessidade motivou esta decisao?
O que ja se sabe? Que restricoes existem?]

### Decisao
[O que decidimos fazer. Descricao clara e objetiva.]

### Alternativas consideradas

#### Alternativa A: [nome]
- Pros: [lista]
- Contras: [lista]

#### Alternativa B: [nome]
- Pros: [lista]
- Contras: [lista]

### Justificativa
[Por que esta alternativa e nao as outras?
Que criterio foi usado para decidir?]

### Impacto no projeto
- Arquivos/rotas afetados: [lista]
- Migracao necessaria: [sim/nao + escopo]
- Performance: [impacto esperado]
- Dependencias adicionadas: [lista]

### Adequacao ao MVP
[Esta e a solucao mais simples que funciona?
O que seria ideal para pos-MVP?
O que estamos adiando conscientemente?]

### Trade-offs
- Ganhamos: [o que]
- Abrimos mao de: [o que]
- Risco: [o que pode dar errado]

### Referencias
[Links, docs, benchmarks consultados]
```

## Principios

- Decisao tecnica sem alternativas consideradas nao e decisao, e impulso
- Documenta "por que", nao "o que" — o codigo mostra o que, a ADR mostra o por que
- Compreensivel por quem nao participou da decisao
- Trade-offs explicitos — toda decisao tem custo
- Adequacao ao MVP: a solucao mais simples que funciona e preferivel

## Onde salvar

Arquivo markdown em `decisions/` na raiz do projeto.
Nomear como: `ADR-NNN-titulo-descritivo.md`

## Gotchas
- Nao documentar decisoes triviais — ADR e para decisoes com impacto sistemico
- "Escolhi porque e o que conhego" nao e justificativa. Comparar com alternativas
- ADR desatualizada e pior que sem ADR — manter status atualizado
- Se a decisao pode ser facilmente revertida, talvez nao precise de ADR
