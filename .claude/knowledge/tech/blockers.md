# Bloqueadores Críticos — O que Tranca o V1

> Atualizado em 18/05/2026 após reunião semanal com Rogério e Rose.

---

## 🔴 CRÍTICO: Preço do Curso Lab e Parcelamento

**Status**: Pendente — prazo 22/05
**Impacto**: Bloqueador direto do checkout e da cópia do CTA
**Decisões pendentes**:
- Valor do curso (R$?)
- Número de parcelas (a Atama absorve as taxas)
- Desconto para inscrição antecipada?
**Owner**: Rogério + Rose
**Nota**: Atama absorve taxas de parcelamento (decidido em 18/05)

---

## 🔴 CRÍTICO: Plataforma de Cursos — Confirmar Formalmente

**Status**: Sinalizado mas não confirmado formalmente
**Decisão sinalizada (18/05)**: plataforma própria (Next.js) + Mercado Pago direto — sem Hotmart ou Kiwify
**O que falta**: Rogério/Rose confirmarem por mensagem para Nicolas desbloquear implementação
**Impacto**: Trava implementação do fluxo de inscrição e checkout
**Owner**: Rogério + Rose → Nicolas

---

## 🟡 ALTA: 5 Obras para o Carousel + Links Vimeo

**Status**: Pendente — prazo 22/05
**Impacto**: Nicolas não pode implementar o carousel com vídeos sem os links
**O que precisa**: Rogério + Rose escolhem as 5 obras e enviam links do Vimeo
**Owner**: Rogério + Rose

---

## 🟡 ALTA: Espaço Presencial Lab

**Status**: Em aberto
**Impacto**: Bloqueia JSON-LD `schema.org/Course` (location) e copy da página /lab
**Próximo passo**: Confirmar nome, endereço e data de início com Laura
**Owner**: Rose + Laura

---

## 🟡 ALTA: Data Exata de Início da Turma de Junho

**Status**: Pendente
**Impacto**: Bloqueia JSON-LD, urgência na copy e SEO técnico
**Owner**: Rogério + Rose

---

## 🟢 RESOLVIDO

- ✅ Estrutura de agentes e skills
- ✅ Kanban Produto priorizado e sincronizado
- ✅ Roadmap de versões definido (V1/V2/V3)
- ✅ Hospedagem: KingHost Node.js I — R$14,45/mês (aprovado em 18/05, Nicolas contrata)
- ✅ Gateway de pagamento: Mercado Pago (decidido em 18/05)
- ✅ Boleto descartado
- ✅ Questões fiscais: Marcelo resolve independente do sistema (nota única ou recibo)
- ✅ Site institucional em desenvolvimento (Next.js 15 rodando localmente)
- ✅ Tom de voz: inadequado — varejão de curso barato. Benchmarking Hyper Island priorizado

---

**Ordem de desbloqueio atual:**
1. Rogério/Rose confirmam formalmente "plataforma própria + MP" → Nicolas implementa checkout
2. Rogério/Rose definem preço → Nicolas finaliza CTA e checkout
3. Rogério/Rose enviam 5 obras + links Vimeo → Nicolas implementa carousel com vídeo
4. Laura confirma espaço → Nicolas completa copy e JSON-LD do /lab
