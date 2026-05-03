# Definition of Done — Atama MVP

> Vigente a partir do M1. Revisável a cada milestone.
> Time: UX/UI/DS/Frontend. Backend = time externo (auth, persistência, deploy).

---

## Por tipo de card

### Bug

- [ ] Comportamento incorreto corrigido e verificado manualmente
- [ ] Caso de regressão testado (fluxo que quebrava agora funciona)
- [ ] Build TypeScript sem erros
- [ ] PR merged

---

### Ajuste (visual/UX)

- [ ] Mudança aplicada conforme design ou descrição do card
- [ ] Responsivo nos 3 breakpoints: 375px / 768px / 1280px
- [ ] Sem regressão visual nos fluxos adjacentes
- [ ] Dev confirma | PD aprova

---

### Nova Funcionalidade

- [ ] Happy path funciona end-to-end
- [ ] Estados implementados: default, loading*, empty*, error* (*se aplicável ao fluxo)
- [ ] Responsivo nos 3 breakpoints: 375px / 768px / 1280px
- [ ] Sem bugs Critical ou High abertos no escopo da feature
- [ ] Componentes de shadcn/ui usados conforme DS (sem invenção de primitivos novos sem justificativa)
- [ ] PD aprova visual
- [ ] QA valida checklist mínimo (happy path + 1 edge case)
- [ ] Build TypeScript sem erros

---

### Tech

- [ ] Implementação funciona conforme objetivo descrito no card
- [ ] Build TypeScript sem erros
- [ ] Sem regressão nos fluxos existentes
- [ ] Se decisão arquitetural relevante → ADR criada em `decisions/`

---

## Restrições de MVP (M0–M2)

| Critério | Postura MVP |
|---|---|
| Persistência | localStorage/sessionStorage aceito até integração backend (M3) |
| Cross-browser | Chrome obrigatório. Safari desejável. Firefox nice-to-have. |
| Acessibilidade | Navegação por teclado + contraste básico obrigatórios. WCAG AA completo = meta pós-deal. |
| Documentação | ADR só para decisões com impacto sistêmico. Não documentar o óbvio. |
| Design System | Inventory atualizado se componente novo for criado ou estendido. |

---

## Assinaturas por tipo

| Tipo | Dev | PD | QA |
|---|---|---|---|
| Bug | ✅ obrigatório | — | opcional |
| Ajuste | ✅ obrigatório | ✅ obrigatório | — |
| Nova Funcionalidade | ✅ obrigatório | ✅ obrigatório | ✅ obrigatório |
| Tech | ✅ obrigatório | — | — |

---

## Gotchas

- DoD ambicioso demais = nada fica "done". Se travar mais de 1 item por semana, revisar.
- Critérios subjetivos ("bonito", "fluido") não são DoD. Tem que ser verificável (sim/não).
- Se o DoD mudar durante a implementação, justificar e registrar a mudança.
- DoD sem assinatura do responsável = promessa, não garantia.
