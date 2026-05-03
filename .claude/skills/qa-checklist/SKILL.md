---
name: qa-checklist
description: >
  Use quando precisar validar uma implementacao, definir criterios
  de teste ou gerar checklist estruturado de qualidade para uma
  feature.
---

# QA Checklist

Processo para gerar e executar checklists de qualidade por feature.

## Quando usar

- Antes de marcar uma feature como done
- QA precisa validar uma implementacao
- Definir criterios de aceitacao para nova feature
- Apos fix de bug, validar regressao

## Processo

### 1. Definir escopo
- Que feature/componente esta sendo testado?
- Quais os criterios de aceitacao definidos?
- Que fluxos do usuario sao afetados?

### 2. Testar funcional
- Happy path funciona end-to-end?
- Top 3 cenarios de erro estao tratados?
- Estados intermediarios (loading, empty, error) estao corretos?
- Dados extremos (texto longo, lista vazia, muitos itens) estao tratados?

### 3. Testar visual
- Implementacao conforme design intent do PD?
- Componentes consistentes com o resto do DS?
- Espacamentos, tipografia e cores conforme tokens?

### 4. Testar responsividade
- Mobile (360px-480px): layout adapta corretamente?
- Tablet (768px-1024px): layout adapta corretamente?
- Desktop (1280px+): layout aproveita bem o espaco?

### 5. Testar acessibilidade basica
- Navegacao por teclado funcional (Tab, Shift+Tab, Enter, Escape)?
- Focus states visiveis em todos os elementos interativos?
- Contraste atende WCAG AA (4.5:1 texto normal, 3:1 texto grande, 3:1 componentes UI)?
- Informacao nao transmitida apenas por cor?
- Elementos interativos tem cursor pointer?

### 6. Testar cross-browser
- Chrome (baseline)
- Safari
- Firefox

## Output esperado

```
## QA Checklist: [feature/componente]

### Funcional
- [ ] Happy path funciona end-to-end
- [ ] Cenario de erro 1: [descrever]
- [ ] Cenario de erro 2: [descrever]
- [ ] Cenario de erro 3: [descrever]
- [ ] Loading state correto
- [ ] Empty state correto
- [ ] Error state correto

### Visual
- [ ] Conforme design intent do PD
- [ ] Consistente com DS existente
- [ ] Espacamentos e tipografia corretos

### Responsividade
- [ ] Mobile (360-480px)
- [ ] Tablet (768-1024px)
- [ ] Desktop (1280px+)

### Acessibilidade
- [ ] Navegacao por teclado
- [ ] Focus states visiveis
- [ ] Contraste WCAG AA
- [ ] Cursor pointer em interativos

### Cross-browser
- [ ] Chrome
- [ ] Safari
- [ ] Firefox

### Resultado: [PASS / FAIL]

### Bugs encontrados (se FAIL)
| # | Descricao | Severidade | Como reproduzir |
|---|---|---|---|
| 1 | ... | Critical/High/Medium/Low | ... |
```

## Gotchas
- Checklist sem criterios especificos e teatro de qualidade — ser concreto
- "Funciona" nao e criterio. "Usuario consegue realizar a acao principal e ver o resultado" e criterio
- Testar o que importa primeiro — happy path antes de edge cases
- Se nao testou, nao e "done" — checklist incompleto = feature incompleta
- Screenshot como evidencia quando o problema e visual
