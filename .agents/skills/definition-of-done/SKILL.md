---
name: definition-of-done
description: >
  Use quando precisar estabelecer o que "pronto" significa para
  uma feature ou tarefa. Tambem use quando QA e Dev precisam
  alinhar criterios de completude.
---

# Definition of Done

Processo para definir criterios claros de completude para features e tarefas.

## Quando usar

- Nova feature vai ser implementada — definir DoD ANTES
- QA e Dev precisam alinhar o que "pronto" significa
- PM quer clareza sobre o que sera entregue
- Feature "quase pronta" que ninguem sabe quando fica pronta de verdade

## Processo

### 1. Definir criterios funcionais
- Que fluxos do usuario devem funcionar?
- Que estados devem estar implementados? (default, loading, empty, error)
- Que dados devem ser persistidos/exibidos?

### 2. Definir criterios visuais
- Design conforme conceito do PD?
- Componentes de shadcn/ui usados corretamente?
- Responsivo nos breakpoints definidos?

### 3. Definir criterios de qualidade
- QA checklist passou?
- Sem bugs Critical ou High abertos?
- Cross-browser validado (Chrome, Safari, Firefox)?

### 4. Definir criterios de acessibilidade
- Navegavel por teclado?
- Focus states visiveis?
- Contraste WCAG AA?

### 5. Definir criterios de documentacao
- Decisao tecnica relevante documentada em `decisions/`?
- Componente novo adicionado ao inventario do DS?

## Output esperado

```
## Definition of Done: [feature/tarefa]

### Funcional
- [ ] [fluxo 1 funciona end-to-end]
- [ ] [fluxo 2 funciona end-to-end]
- [ ] [estados loading/empty/error implementados]

### Visual
- [ ] Conforme design do PD
- [ ] Responsivo: mobile, tablet, desktop
- [ ] Componentes de shadcn/ui usados conforme DS

### Qualidade
- [ ] QA checklist passou
- [ ] Sem bugs Critical/High abertos
- [ ] Chrome, Safari, Firefox validados

### Acessibilidade
- [ ] Navegacao por teclado
- [ ] Focus states visiveis
- [ ] Contraste WCAG AA

### Documentacao (se aplicavel)
- [ ] ADR criada para decisoes tecnicas relevantes
- [ ] DS inventory atualizado se componente novo

### Assinaturas
- [ ] Dev confirma implementacao completa
- [ ] PD confirma visual conforme design
- [ ] QA confirma checklist passou
```

## Gotchas
- DoD definido DEPOIS da implementacao e retrospectiva, nao planejamento
- Criterios subjetivos ("bonito", "rapido") nao sao DoD. Ser verificavel (sim/nao)
- DoD ambiciosa demais = nada fica "done". Ser realista para MVP
- Se o DoD muda durante a implementacao, registrar a mudanca e justificar
- DoD sem assinatura do QA e promessa, nao garantia
