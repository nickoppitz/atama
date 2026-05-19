# Bloqueadores Críticos — O que Tranca o V1

Dependências críticas que precisam ser resolvidas para desbloquear o desenvolvimento.

## 🔴 CRÍTICO: Plataforma de Cursos

**Status**: Decisão pendente
**Impacto**: Trava TODO o backlog técnico de Lab
**Opções**:
- **Hotmart** — plataforma pronta, bom para Brasil, fácil integração
- **Kiwify** — alternativa brasileira, integração direta
- **Solução custom** — mais flexibilidade, mas mais tempo de dev

**Próximo passo**: Reunião com Rogério + Rose até 12/05 para decidir
**Owner**: Rogério + Rose (decisão comercial) + Nicolas (viabilidade técnica)

---

## 🟡 ALTA: Preço do Curso Carro-Chefe

**Status**: Pendente
**Impacto**: Define a checkout page (validação de preço, impostos)
**Próximo passo**: Reunião com Rogério + Rose até 13/05
**Owner**: Rogério + Rose

---

## 🟡 ALTA: Espaço Presencial Lab

**Status**: Em negociação (Casa da Chakra)
**Impacto**: Define go-live da plataforma
**Próximo passo**: Confirmar com Laura
**Owner**: Rose + Laura

---

## 🟡 ALTA: Questões Fiscais

**Status**: Reunião agendada
**Impacto**: Validar PIX, notas fiscais, impostos
**Próximo passo**: Reunião com Marcelo (segunda-feira)
**Owner**: Marcelo + Nicolas

---

## 🟡 ALTA: Upgrade de plano KingHost (PHP → Node.js)

**Status**: Aguardando aprovação de custo (pauta reunião 18/05)
**Impacto**: Bloqueador direto para o deploy do site Next.js em produção
**Decisão tomada**: Hospedagem KingHost, Plano Node.js I — R$14,45/mês
**O que precisa ser feito**:
1. Rogério/Rose aprovam custo (R$14,45/mês) na reunião de 18/05
2. Nicolas contrata Plano Node.js I na KingHost
3. Nicolas confirma com KingHost se `next start` roda como processo permanente (PM2)
4. Nicolas configura Git no novo plano e faz deploy de teste
**Owner**: Nicolas (contato técnico + contratação) + Rogério/Rose (aprovação de custo)
**Notion**: [Validação] Upgrade plano KingHost: PHP → Node.js

---

## 🟢 RESOLVIDO

- ✅ Estrutura de agentes e skills
- ✅ Kanban Produto priorizado
- ✅ Roadmap de versões definido
- ✅ Hospedagem: KingHost (decisão 17/05 — manter serviço conhecido, sem Vercel)

---

**Desbloquear em ordem: plataforma de cursos → preço → fiscal → upgrade KingHost Node.js → espaço presencial → dev inicia**
