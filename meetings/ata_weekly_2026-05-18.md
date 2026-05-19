# ATA DE REUNIÃO — ATAMA WEEKLY

**Data:** 18 de maio de 2026  
**Local:** _a preencher_  
**Duração:** _a preencher_  
**Facilitador:** Nicolas  
**Registrador:** Nicolas  

---

## PARTICIPANTES

- **Rogério** — Roteirista, Co-criador do Projeto Atama
- **Rose** — Produtora Audiovisual, Co-criadora
- **Nicolas** — Product Designer / PM / Tech Lead

---

## CONTEXTO DA REUNIÃO

Reunião semanal de alinhamento. Foco: desbloquear itens críticos para o go-live de 31/05.  
**14 dias restantes para o lançamento do V1.**

---

## DECISÕES TOMADAS

### 1. Hospedagem — KingHost Plano Node.js I

**Status:** ⏳ Aguardando aprovação

**Contexto:** O novo site (Next.js) requer plano Node.js. Plano atual é PHP e não suporta o framework.

**Proposta:**
- Plano: KingHost Hospedagem Node.js I
- Custo: R$ 14,45/mês (cobrança trimestral: R$ 43,36)
- Inclui: 1 aplicação, 256 MB RAM, 1 GB disco, SSL gratuito, deploy via Git
- Suficiente para o tráfego estimado do MVP (~500–1.000 visitas/mês)

| Pergunta | Resposta |
|----------|----------|
| Rogério/Rose aprovam R$ 14,45/mês? | |
| Nicolas pode contratar ainda essa semana? | |

**Decisão:**

---

### 2. Preço do Curso Lab

**Status:** ⏳ Aguardando definição

**Contexto:** Sem preço definido não é possível finalizar a página `/lab` nem configurar o checkout (Mercado Pago). Bloqueador para o desenvolvimento.

| Pergunta | Resposta |
|----------|----------|
| Valor do curso: R$ ___? | |
| Haverá parcelamento? Quantas vezes? | |
| Desconto para inscrição antecipada? | |
| Data limite para inscrição? | |

**Decisão:**

---

### 3. Plataforma de Cursos

**Status:** ⏳ Bloqueador crítico

**Contexto:** Essa decisão trava todo o backlog técnico do Lab. Sem ela, Nicolas não consegue iniciar a implementação da área de cursos.

**Opções:**

| Opção | Prós | Contras |
|-------|------|---------|
| **Hotmart** | Plataforma pronta, conhecida no Brasil, integração simples | Taxa por venda, menos controle |
| **Kiwify** | Alternativa brasileira, integração direta, custo baixo | Menos nome no mercado |
| **Solução própria** | Controle total, sem taxas externas | Mais tempo de desenvolvimento |

| Pergunta | Resposta |
|----------|----------|
| Qual plataforma para o V1? | |
| Se Hotmart/Kiwify: aceita abrir conta ainda essa semana? | |

**Decisão:**

---

### 4. Espaço Presencial Lab

**Status:** ⏳ Em negociação

**Contexto:** A data de início do curso impacta diretamente o prazo de lançamento e o conteúdo da página `/lab`.

| Pergunta | Resposta |
|----------|----------|
| Status com a Casa da Chácara (Laura)? | |
| Data confirmada de início do curso em junho? | |
| Endereço definitivo do espaço? | |
| Número máximo de vagas? | |

**Decisão:**

---

### 5. Questões Fiscais (Marcelo)

**Status:** ⏳ Aguardando resultado da reunião com contador

| Pergunta | Resposta |
|----------|----------|
| Mercado Pago aprovado fiscalmente? | |
| PIX para inscrições: precisa emitir nota? | |
| Modelo fiscal para cursos (R$ 400–900): como emitir? | |

**Decisão:**

---

## DÚVIDAS EM ABERTO

_Preencher durante a reunião_

1. 
2. 
3. 

---

## ACTION ITEMS

| # | Task | Responsável | Prazo | Status |
|---|------|-------------|-------|--------|
| 1 | Contratar KingHost Plano Node.js I | Nicolas | 19/05 | ⏳ |
| 2 | Confirmar com KingHost: next start via PM2? | Nicolas | 20/05 | ⏳ |
| 3 | Criar repositório GitHub do projeto | Nicolas | 19/05 | ⏳ |
| 4 | Definir preço do Lab e parcelamento | Rogério + Rose | 18/05 | ⏳ |
| 5 | Abrir conta na plataforma de cursos escolhida | Rogério ou Rose | 20/05 | ⏳ |
| 6 | Confirmar espaço presencial + data junho | Rose + Laura | 19/05 | ⏳ |
| 7 | Repassar resultado reunião fiscal | Rogério/Rose | 18/05 | ⏳ |

---

## PRÓXIMOS PASSOS

### Esta semana (18–23/05)
- Nicolas: contratar KingHost + setup técnico inicial (GitHub + primeiro deploy)
- Rogério/Rose: definir preço + plataforma de cursos
- Rose: fechar espaço presencial

### Semana seguinte (25–31/05) — Sprint final
- Nicolas: implementação do site + /lab
- Nicolas: integração Mercado Pago + checkout
- Nicolas: 301 redirects + SEO técnico + Plausible
- **31/05: go-live**

---

## OBSERVAÇÕES

_Preencher durante a reunião_

---

*Ata elaborada por Nicolas — PM/Tech Lead  
18 de maio de 2026*
