# Roadmap — Atama Filmes + Atama Lab

**Última atualização:** 2026-05-12
**Responsável:** Nicolas (PM + Design + Tech)
**Deadline V1:** 31 de maio de 2026

---

## Status Atual

| Versão | Período | Status |
|--------|---------|--------|
| **V1** | até 31/05/2026 | 🔴 Em andamento — 19 dias restantes |
| **V2** | junho/julho 2026 | 🟡 Planejado |
| **V3** | agosto+ 2026 | ⚪ Futuro |

---

## V1 — Lançar e Converter (até 31/05)

> **Princípio:** só entra o que move inscrições para junho, viabiliza pagamento ou coloca o site no ar.

### ⛔ Bloqueadores — Resolver esta semana

| Bloqueador | Owner | Prazo | Status |
|------------|-------|-------|--------|
| Definir plataforma de cursos (Hotmart / Kiwify / custom) | Rogério + Rose + Nicolas | 12/05 | 🔴 ATRASADO |
| Definir preço do Curso Carro-Chefe | Rogério + Rose | 13/05 | ⏳ Pendente |
| Confirmar espaço Lab (Casa da Chácara) | Rose + Laura | 13/05 | ⏳ Em negociação |
| Validar fiscal + PIX + nota fiscal | Nicolas + Marcelo | 14/05 | ⏳ Pendente |

> **Atenção:** a decisão de plataforma de cursos trava o setup técnico inteiro. É o bloqueador #1.

---

### Semana 1 — 12/05 a 16/05 · Desbloqueios + Base

**Produto**
- [ ] Decidir plataforma de cursos — reunião Rogério + Rose + Nicolas
- [ ] Definir preço do Curso Carro-Chefe
- [ ] Confirmar espaço Lab com Laura
- [ ] Reunião fiscal com Marcelo (PIX, nota fiscal, Mercado Pago)
- [ ] Setup técnico: repositório, stack, ambiente (Next.js + Vercel ou equivalente)
- [ ] Domínio e DNS configurados

**Marketing**
- [ ] Receber e analisar stats históricos do site (2012–2026) — *aguardando Nicolas*
- [ ] Diagnóstico: fontes de tráfego, páginas top, geo, dispositivo, orgânico
- [ ] Decisão de canal prioritário para pré-lançamento (TikTok vs Instagram vs WhatsApp)
- [ ] Definir link na bio → `/lab` (TikTok + Instagram) — esforço zero, impacto imediato

---

### Semana 2 — 19/05 a 23/05 · Construção Core

**Produto**
- [ ] Wireframes e protótipo aprovados (Home + /lab + checkout)
- [ ] Implementação: Home, /filmes, /sobre, /contato
- [ ] Implementação: /lab (página de conversão)
- [ ] Integração Mercado Pago no checkout (/lab/inscricao)
- [ ] Syllabus do Curso Carro-Chefe finalizado (Rogério + Rose)

**Marketing**
- [ ] Copy de conversão para /lab: headline, subheadline, proof social (Evelyn), CTA, FAQ de objeções
- [ ] SEO técnico: meta tags, Open Graph, Twitter Cards, canonical em todas as páginas
- [ ] JSON-LD `schema.org/Course` implementado em /lab
- [ ] sitemap.xml gerado
- [ ] robots.txt configurado

---

### Semana 3 — 26/05 a 30/05 · Testes + Pré-lançamento

**Produto**
- [ ] /lab/confirmacao implementada (e-mail de boas-vindas + grupo WhatsApp)
- [ ] Testes de ponta a ponta: compra → pagamento → confirmação
- [ ] Responsividade mobile validada (público Lab vem de TikTok/Instagram = mobile-first)
- [ ] Core Web Vitals: LCP < 2,5s, CLS < 0,1 (Vercel Analytics ou PageSpeed)
- [ ] Go-live checklist completo (QA)

**Marketing**
- [ ] Plano de pré-lançamento executado: 5–7 posts de aquecimento TikTok/Instagram
  - Conteúdo: bastidores, case Evelyn, "o que é o Lab", teaser de inscrições
- [ ] Google Search Console configurado e sitemap submetido
- [ ] Teste de rich results (Google Rich Results Test para JSON-LD Course)
- [ ] Link na bio atualizado em todos os canais

---

### 31/05 — Lançamento V1

**Produto**
- [ ] Site V1 no ar
- [ ] Inscrições abertas para turma de junho
- [ ] Pagamento funcional (Mercado Pago)

**Marketing**
- [ ] Post de lançamento TikTok + Instagram + WhatsApp
- [ ] Link na bio → /lab ativo
- [ ] Primeiras inscrições monitoradas (meta: 10+ alunos)

---

## V2 — Crescer Organicamente (junho/julho 2026)

> Com produto validado e turma 1 rodando, ampliamos alcance e polimos o site.

### Produto
- [ ] Site V2 com design completo (motion design: parallax suave, fade-ins, hover states)
- [ ] Objetivo Awwwards — site autoral como cartão de visita para parceiros internacionais
- [ ] Lab melhorado com feedbacks da turma 1
- [ ] Masterclasses mensais (2 dias, 5h) — primeiro produto adicional do Lab
- [ ] Multiidioma Site Atama (PT + EN) para parceiros/distribuidoras internacionais

### Marketing
- [ ] **Análise pós-lançamento:** conversão real V1, abandono de checkout, origem das inscrições
- [ ] **Estratégia de conteúdo TikTok + Instagram:** calendário mensal, formatos, frequência, temas
  - Case da turma 1 como conteúdo principal
  - Rogério + Rose como vozes do canal (autenticidade)
- [ ] **Benchmark TikTok x Cinema** — discovery com Nobre (especialista em mídias)
- [ ] **SEO de conteúdo:** keywords para /lab, /filmes, /sobre — artigos e otimizações
- [ ] **NPS turma 1** — coletar depoimentos para usar como prova social na turma 2
- [ ] **"Leve o Lab para sua região"** — proposta para Rogério + Rose de expansão para interior do RS (editais viabilizando cidades menores)

---

## V3 — Escalar com Sistema (agosto+ 2026)

> Com 2 turmas rodadas e dados de conversão reais, marketing vira sistema, não lançamento.

### Produto
- [ ] Lab evoluído: rodadas de negócio, acompanhamento de projetos (mentorias completas)
- [ ] Cursos gravados sob demanda (conforme demanda confirmada)
- [ ] Site otimizado com internacionalização completa
- [ ] Melhorias contínuas encontradas em produção V1 + V2

### Marketing
- [ ] **Estratégia YouTube/Vimeo:** portfólio da produtora + making-of do Lab (conteúdo longo)
- [ ] **Estratégia Reddit:** presença em comunidades de cinema, produção audiovisual, educação criativa
- [ ] **Automações de marketing:** e-mail pós-inscrição, lembretes de turma, sequência de nutrição
- [ ] **Dashboard de métricas consolidado:** tráfego + conversão + inscrições + NPS em um painel
- [ ] **Internacionalização de conteúdo EN** para parceiros e distribuidoras internacionais

---

## KPIs por Versão

| KPI | V1 Meta | V2 Meta | V3 Meta |
|-----|---------|---------|---------|
| Inscrições no Curso Carro-Chefe | 10+ alunos (turma junho) | 15+ alunos/turma | 20+ alunos/turma recorrente |
| Conversão site → Lab | < 2 cliques | < 2 cliques + A/B copy | Otimizado por dados |
| Pagamento funcional | Mercado Pago operacional | Sem fricção pós-V1 | Multi-opções se necessário |
| Time to launch | 31/05/2026 | Masterclasses até julho | Mentorias até agosto |
| Tráfego orgânico | Preservar domínio de 14 anos | Crescimento via conteúdo | SEO consolidado |
| Social reach | Link bio → /lab ativo | Calendário mensal rodando | Sistema de aquisição |

---

## Dependências entre versões

```
V1 lança
  └── Turma 1 roda (junho)
        └── Case real + NPS gerado
              └── V2: conteúdo autêntico para social + prova social para turma 2
                    └── V3: sistema de aquisição com histórico de dados reais
```

**Regra:** nenhuma entrega de V2 ou V3 deve roubar esforço do V1 enquanto o deadline não for cumprido.

---

*Arquivo gerenciado pelo PM. Atualizar após cada semana ou decisão relevante.*
