---
name: meeting-minutes
description: >
  Use sempre que houver uma transcricao de reuniao disponivel.
  Gera ata estruturada no padrao PM + Agile Coach a partir do texto
  transcrito, extraindo decisoes, riscos, action items e proximos passos.
---

# Meeting Minutes

Processo para gerar atas de reuniao estruturadas a partir de transcricoes.

## Quando usar

- Sempre que uma transcricao de reuniao for fornecida
- Antes de iniciar qualquer trabalho derivado de uma reuniao
- Quando o usuario pedir uma ata, resumo ou registro de reuniao

## Processo

### 1. Ler a transcricao completa
- Identificar os participantes pelo contexto da fala
- Mapear os topicos discutidos cronologicamente
- Extrair: decisoes tomadas, duvidas levantadas, tarefas mencionadas

### 2. Estruturar a ata

```
# ATA DE REUNIÃO — [TITULO]

**Data:** [data]
**Local:** [presencial / remoto]
**Duracao:** estimada
**Facilitador:** [nome]

---

## PARTICIPANTES
- [Nome] — [papel/funcao]

---

## CONTEXTO & OBJETIVOS
[1-3 paragrafos descrevendo o objetivo da reuniao]

---

## DECISOES TOMADAS
[Numeradas, com contexto de por que foi decidido]

---

## RISCOS IDENTIFICADOS
| Risco | Impacto | Mitigacao |
|-------|---------|-----------|

---

## DUVIDAS EM ABERTO
[Numeradas — o que ficou sem resposta]

---

## ACTION ITEMS
| # | Task | Responsavel | Prazo | Status |
|---|------|-------------|-------|--------|

---

## PROXIMOS PASSOS
### Curto prazo (esta semana)
### Medio prazo (proximas 2 semanas)

---

## MATRIZ SSD
### CERTEZAS
### SUPOSICOES
### DUVIDAS
```

### 3. Regras de assign

- **Nicolas** = tudo que for execucao tecnica, design, orquestracao
- **Rogerio / Rose** = decisoes de negocio, conteudo de cursos, parcerias, espacos

### 4. Qualidade da ata

- Ata deve ser util para quem NAO estava na reuniao
- Decisoes com contexto de por que (nao so o que)
- Action items especificos, verificaveis, com responsavel e prazo
- Matriz SSD para capturar o estado do conhecimento do time

## Gotchas

- Transcricao de voz tem ruido — interpretar o sentido, nao transcrever literalmente erros
- Se um participante nao for identificado, usar "Participante nao identificado"
- Nao inventar decisoes — se nao ficou claro na transcricao, colocar como duvida em aberto
- Sempre salvar como `ata_[descricao]_[YYYY-MM-DD].md` na raiz do projeto
