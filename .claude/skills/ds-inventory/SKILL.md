---
name: ds-inventory
description: >
  Use quando precisar mapear componentes do Design System,
  identificar gaps, inconsistencias ou verificar o estado
  atual da biblioteca de componentes.
---

# DS Inventory

Processo para mapear e manter o inventario do Design System Atama.

## Quando usar

- Adicionar ou modificar componentes de shadcn/ui
- PD, Dev ou QA precisam entender que componentes existem
- Verificar consistencia entre design e implementacao
- Identificar gaps na biblioteca de componentes
- Antes de criar componente custom, verificar se shadcn/ui ja resolve

## Processo

### 1. Scanear componentes da biblioteca instalados
- Listar todos os arquivos em `components/ui/`
- Para cada um: nome, variants disponiveis, onde e usado no app

### 2. Scanear componentes custom
- Listar todos os arquivos em `components/`
- Para cada um: nome, proposito, dependencias de componentes de shadcn/ui

### 3. Mapear uso
- Onde cada componente e usado (que paginas/features)
- Componentes instalados mas nao usados
- Componentes usados com variants inconsistentes

### 4. Identificar gaps
- Componentes que o produto precisa mas nao existem ainda
- Funcionalidades que shadcn/ui oferece mas nao foram instaladas
- Padroes repetidos que deveriam virar componente

### 5. Verificar consistencia
- Componentes implementados respeitam convencoes de shadcn/ui?
- Custom components seguem mesmos patterns (variants, composition)?
- Design tokens estao sendo usados consistentemente?

## Output esperado

```
## DS Inventory — Atama

### Componentes shadcn/ui instalados
| Componente | Variants usados | Usado em |
|---|---|---|
| Button | default, outline, ghost | [onde e usado] |
| ... | ... | ... |

### Componentes custom
| Componente | Proposito | Dependencias shadcn/ui |
|---|---|---|
| [nome] | [proposito] | [dependencias] |
| ... | ... | ... |

### Gaps identificados
- [componente necessario mas ausente]

### Inconsistencias
- [problema encontrado]

### Recomendacoes
- [acao sugerida]
```

## Gotchas
- Inventario desatualizado e pior que nao ter inventario — mantenha atualizado
- Antes de criar custom, sempre verificar se shadcn/ui resolve
- Componente instalado e nao usado e lixo — remover ou justificar
- Consistencia e mais importante que completude — melhor 10 componentes consistentes que 30 inconsistentes
