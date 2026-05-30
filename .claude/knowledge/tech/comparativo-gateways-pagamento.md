# Comparativo de Gateways de Pagamento — Mercado Pago vs Asaas

> **Data:** 2026-05-28
> **Fonte:** Research web nas páginas oficiais (taxas vigentes em 2026)
> **Status:** Decisão **em aberto** — este documento informa, não crava o gateway.
> **Contexto:** Subsidia a tarefa de discovery "Validar serviço de pagamento" (Nicolas + Marcelo).

---

## Tabela comparativa de taxas (2026)

| Forma de pagamento | **Mercado Pago** | **Asaas** |
|---|---|---|
| **Pix** | **0,99%** sobre o valor (sem teto) | **R$ 1,99 fixo** por transação (R$ 0,99 nos 3 primeiros meses) — 100 primeiras grátis/mês via QR estático |
| **Cartão à vista** (receb. 30 dias) | a partir de **3,99%** | **R$ 0,49 + 2,99%** (R$ 0,49 + 1,99% nos 3 primeiros meses) |
| **Cartão 2–6x** | sobe conforme nº de parcelas | **R$ 0,49 + 3,49%** |
| **Cartão 7–12x** | ~13,79% total se vendedor absorve 12x | **R$ 0,49 + 3,99%** |
| **Cartão 13–21x** | só até 12x | **R$ 0,49 + 4,29%** (parcela até **21x**) |
| **Boleto** | varia | **R$ 1,99** (R$ 0,99 nos 3 primeiros meses) |
| **Débito** | — | **R$ 0,35 + 1,89%** |

> Ambos permitem repassar os juros do parcelamento ao cliente ("parcelado comprador") ou o vendedor absorver ("parcelado vendedor").

---

## Insight central — o que muda tudo para a Atama

O **Pix do Mercado Pago é percentual (0,99%)**, enquanto o **Pix do Asaas é fixo (R$ 1,99)**.

Como o Curso Carro-Chefe é **ticket alto**, esse detalhe pesa muito: quanto maior o valor da venda, maior a vantagem do Pix fixo do Asaas.

### Simulação de economia no Pix por faixa de preço

| Preço do curso | Pix MP (0,99%) | Pix Asaas (R$ 1,99 fixo) | Economia Asaas |
|---|---|---|---|
| R$ 1.500 | R$ 14,85 | R$ 1,99 | **R$ 12,86** |
| R$ 2.500 | R$ 24,75 | R$ 1,99 | **R$ 22,76** |
| R$ 3.500 | R$ 34,65 | R$ 1,99 | **R$ 32,66** |

No **cartão**, o Asaas também sai na frente em quase todas as faixas (à vista 2,99% vs 3,99%; parcelado mais barato).

---

## Veredito

- **Para a Atama (vendedor):** **Asaas** é mais barato em praticamente tudo — especialmente Pix em ticket alto. Parcela em até **21x** (vs 12x do MP).
- **Para o cliente:** experiência equivalente — ambos oferecem Pix, cartão parcelado e boleto. O **Mercado Pago tem mais reconhecimento de marca** no checkout (selo pode reduzir fricção/abandono); o Asaas é menos conhecido pelo consumidor final.

**Trade-off central:** Asaas economiza dinheiro; Mercado Pago tem mais reconhecimento no checkout (pode reduzir abandono).

---

## Pendências antes de cravar a decisão

1. **Preço do curso ainda indefinido** (tarefa de discovery com Rogério/Rose) — define o quanto a economia do Pix Asaas realmente importa.
2. **Validar com Marcelo (contador)** — nota fiscal, repasse, compliance fiscal.

---

## Fontes

- [Asaas — Preços e taxas](https://www.asaas.com/precos-e-taxas)
- [Calculadora de Taxas — Mercado Pago 2026](https://www.calculadoradetaxas.com.br/mercado-pago)
- [Taxa de Pix Mercado Pago 2026](https://esteeolugar.com.br/artigos/taxa-pix-mercado-pago/)
- [Mercado Pago — Taxas e juros do cartão de crédito](https://www.mercadopago.com.br/blog/taxas-cartao-de-credito)
- [Blog Asaas — Taxas Asaas](https://blog.asaas.com/taxas-asaas/)
