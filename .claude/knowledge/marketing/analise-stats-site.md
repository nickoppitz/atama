# Análise de Tráfego — atamafilmes.com.br
**Fonte:** AWStats (servidor)
**Período analisado:** Janeiro 2025 — Maio 2026
**Data da análise:** 2026-05-12
**Analista:** Marketing Analyst (MA)

---

## ⚠️ ALERTA METODOLÓGICO — Leia antes dos números

**Os números brutos do AWStats são enganosos.** O site é WordPress e está sob ataque constante de bots. A análise real exige separar o tráfego humano do tráfego automatizado.

**Evidências de bot dominance:**
- Uma única página `/projetos/universo-z-na-nick-jr/comment-page-1/` concentra **86.519 de 93.002 pageviews (93%)** em abril/2026 — spam bot em comment-page
- `/wp-login.php` recebe **1.284 hits/mês** — brute force attack no WordPress
- `/xmlrpc.php` recebe **299 hits/mês** — XML-RPC attack
- **79.1% das visitas duram 0-30 segundos** — bots não leem conteúdo
- **Distribuição horária completamente flat** (mesma quantidade às 4h e às 16h) — humanos têm pico em horário comercial, bots não têm horário
- **96.2% Windows + 97.3% Chrome** — fingerprint típico de crawler

**Estimativa de tráfego humano real:** ~500–1.000 visitas/mês (20–40% do número reportado pelo AWStats)

---

## Histórico de Tráfego (números brutos AWStats)

### 2025 — Ano completo

| Mês | Visitantes únicos | Visitas | Pageviews |
|-----|-------------------|---------|-----------|
| Jan 2025 | 2.520 | 8.152 | 18.815 |
| Fev 2025 | 2.538 | 8.281 | 22.313 |
| Mar 2025 | 2.374 | 9.683 | 29.647 |
| Abr 2025 | 2.137 | 9.523 | 27.481 |
| Mai 2025 | 2.656 | 11.357 | 30.283 |
| Jun 2025 | 2.350 | 12.414 | 32.285 |
| Jul 2025 | 2.907 | 15.447 | 41.851 |
| Ago 2025 | 2.940 | 17.331 | 48.645 |
| Set 2025 | 2.214 | 16.063 | 49.762 |
| Out 2025 | 3.303 | 20.730 | 62.579 |
| Nov 2025 | 2.808 | 19.960 | 60.877 |
| Dez 2025 | 2.899 | 18.245 | 57.009 |

**Crescimento 2025:** Visitas cresceram de 8.152 (jan) para 18.245 (dez) — **+124% em 12 meses**. Mas este crescimento é predominantemente bot — o crescimento em pageviews (+203%) é maior que em visitantes únicos, o que indica crawling crescente, não audiência humana crescendo.

### 2026 — Janeiro a Maio (parcial)

| Mês | Visitantes únicos | Visitas | Pageviews |
|-----|-------------------|---------|-----------|
| Jan 2026 | 3.080 | 18.873 | 57.644 |
| Fev 2026 | 2.591 | 19.716 | 65.223 |
| Mar 2026 | 2.436 | 24.723 | 92.652 |
| Abr 2026 | 2.497 | 24.486 | 93.002 |
| Mai 2026* | 1.259 | 9.695 | 35.105 |

*Maio parcial — dados até 12/05. Projeção: ~3.200 visitantes únicos / ~25.000 visitas se o mês completo.

---

## Origens de Tráfego (Abril 2026 — mês mais completo disponível)

| Origem | Pageviews | % |
|--------|-----------|---|
| **Direto / Bookmark / Email** | 3.071 | **95.4%** |
| **Busca orgânica (Google + outros)** | 114 | **3.5%** |
| **Sites externos (social + outros)** | 19 | **0.5%** |
| Origem desconhecida | 15 | 0.4% |

### Detalhamento busca orgânica:
- Google.com: **105 páginas** (dominante)
- Bing: 6
- DuckDuckGo: 2
- Yandex: 1

### Detalhamento sites externos (referrers):
- **pt.wikipedia.org: 5 páginas** ← link de autoridade
- l.instagram.com: **2 páginas**
- m.facebook.com: **2 páginas**
- lm.facebook.com: **2 páginas**
- www.reddit.com: **1 página**
- register.latamcontentmeeting.com: **1 página** ← evento profissional AV
- www.linkedin.com: **1 página**

---

## Páginas Mais Acessadas (Abril 2026)

| URL | Pageviews | Entradas | Observação |
|-----|-----------|----------|------------|
| /projetos/universo-z-na-nick-jr/comment-page-1/ | 86.519 | 21.911 | **BOT — eliminar no novo site** |
| / (Home) | 1.356 | **869** | Tráfego humano real |
| /wp-login.php | 1.284 | 88 | **ATAQUE WordPress** |
| /projetos/nao-esqueca-de-mim/comment-page-1/ | 1.123 | 532 | Bot/spam |
| /projetos/nao-esqueca-de-mim/ | 457 | **426** | Tráfego humano real |
| /xmlrpc.php | 299 | 12 | **ATAQUE WordPress** |
| /contato/ | 200 | **88** | Tráfego humano real |

**Páginas com tráfego humano confirmado:** Home (869 entradas), /projetos/nao-esqueca-de-mim/ (426 entradas), /contato/ (88 entradas).

---

## Dispositivos (Abril 2026)

| SO | Pageviews | % | Interpretação |
|----|-----------|---|---------------|
| Windows | 89.560 | 96.2% | Predominantemente bots |
| Linux | 1.318 | 1.4% | Servidores/bots |
| Macintosh | 1.190 | 1.2% | Mix humano/crawler |
| **iOS** | **548** | **0.5%** | Humanos reais (mobile Apple) |
| **Android** | **327** | **0.3%** | Humanos reais (mobile Android) |

**Mobile total: ~0.8%** — este número é artificial (puxado para baixo pelo bot traffic). O tráfego humano real provavelmente tem proporção mobile muito maior, especialmente para o público-alvo do Lab (TikTok/Instagram = mobile-first).

---

## Duração das Visitas (Abril 2026 — 24.486 visitas)

| Duração | Visitas | % | Interpretação |
|---------|---------|---|---------------|
| 0s – 30s | 19.390 | **79.1%** | Bots e ataques |
| 30s – 2min | 1.927 | 7.8% | Visitas rápidas (bots lentos ou bounces) |
| 2min – 5min | 1.781 | 7.2% | **Humanos engajados** |
| 5min – 15min | 713 | 2.9% | **Humanos muito engajados** |
| 15min – 30min | 108 | 0.4% | Humanos lendo muito |
| 30min – 1h | 96 | 0.3% | Humanos explorando |
| 1h+ | 471 | 1.9% | Bots lentos ou fans/parceiros |

**Tempo médio:** 136 segundos (2min 16s) — puxado para cima pelos bots lentos de 1h+.

**Estimativa de humanos reais:** ~2.500 a 3.000 visitas/mês (segmentos 2min-15min = ~2.500 visitas em abril).

---

## Robots Identificados (Abril 2026)

| Bot | Hits |
|-----|------|
| Unknown bot | 1.443 |
| Googlebot | **1.347** |
| MSIE 6 (Rogue Robot) | 1.146 |
| PetalBot | 406 |
| wordpress | 396 |
| Bytespider | 215 |
| facebookexternalhit | **126** |
| nbot | 223 |

**Googlebot ativo** — o domínio está sendo indexado ativamente. Isso é positivo para a migração: a autoridade de indexação existe.

**facebookexternalhit** — Facebook está rastreando o site (para prévia de links compartilhados). Alguém está compartilhando links de atamafilmes.com.br no Facebook.

---

## 10 Insights para o V1

### 1. Tráfego real é ~500–1.000 humanos/mês, não 2.500

O número bruto é inflado por bots. A boa notícia: o novo site em Next.js eliminará 90%+ do bot traffic (sem wp-login.php, sem xmlrpc.php, sem comment-pages). O site novo vai parecer ter "menos tráfego" mas terá dados muito mais limpos.

**Ação V1:** instalar Plausible Analytics antes do go-live para medir tráfego humano real desde o dia 1.

### 2. 95.4% do tráfego é direto — o público já conhece a marca

Quem acessa atamafilmes.com.br já sabe quem é a Atama. Isso significa que o site não está gerando descoberta — está servindo a um público pré-existente de parceiros, imprensa e contatos do Rogério e da Rose.

**Implicação para V1:** as primeiras inscrições do Lab NÃO virão do site de forma orgânica. Virão de ativação direta: WhatsApp, DMs, rede de contatos, anúncio nas redes do Rogério e Rose.

### 3. Social media é zero no site atual — mas isso não é obstáculo, é oportunidade

Instagram: 2 páginas. Facebook: 2. Reddit: 1. LinkedIn: 1. O site nunca teve uma estratégia de social ativa. Para o Lab, as redes sociais serão canais de aquisição construídos do zero — não há base comparativa, mas também não há vícios antigos.

**Ação V1:** construir presença ativa no TikTok/Instagram especificamente para o Lab, com link na bio apontando para /lab desde o primeiro post.

### 4. Google indexa o domínio — proteger essa autoridade na migração

Googlebot fez 1.347 hits em abril/2026. O domínio de 14 anos tem autoridade de indexação real. Uma migração errada pode destruir isso.

**Ação V1 crítica:** implementar 301 redirects para todas as URLs existentes que têm tráfego real:
- `/` → `/` (home, manter)
- `/projetos/nao-esqueca-de-mim/` → manter ou redirecionar para equivalente no novo site
- `/contato/` → `/contato` (atenção ao trailing slash)
- Verificar qual artigo da Wikipedia linka para o site e preservar aquela URL

### 5. Wikipedia linka para o site — ativo valioso

pt.wikipedia.org enviou 5 páginas de referral em abril. Backlinks do Wikipedia têm altíssima autoridade de domínio (DA 95+). Esse link não pode ser quebrado na migração.

**Ação:** encontrar qual artigo da Wikipedia menciona Atama e qual URL é linkada. Garantir 301 redirect se necessário.

### 6. Mobile está subestimado nos dados — o novo site deve ser mobile-first

A aparente dominância desktop (98%+) é artefato do bot traffic. O público real do Lab (usuários de TikTok, Instagram, WhatsApp) é mobile-first. O benchmarks de referência confirmaram isso.

**Ação V1:** todo o design e desenvolvimento deve priorizar mobile. Testar em mobile antes de testar em desktop.

### 7. /contato/ recebe tráfego humano real — parceiros chegando

88 entradas humanas/mês na página de contato indica que a Atama está sendo pesquisada por parceiros, imprensa ou produtoras. Para o site institucional (persona Parceiro), isso é o KPI secundário — a página de contato deve estar impecável.

### 8. "Não Esqueça de Mim" é o projeto com mais tráfego orgânico

426 entradas humanas/mês em `/projetos/nao-esqueca-de-mim/` — este projeto específico traz tráfego real. Provavelmente rankeado no Google para o nome do projeto. No novo site, manter essa URL (ou fazer redirect 301) é obrigatório.

### 9. O crescimento de visitas em 2025 (+124%) é em bot traffic, não em audiência

O crescimento dos números não representa crescimento de audiência humana. Significa que o site se tornou alvo de mais bots ao longo do tempo. Isso é um problema a ser resolvido com a migração para Next.js/Vercel, que tem proteções nativas contra esse tipo de tráfego.

### 10. O site atual não tem capacidade de converter — e nunca teve

Não há landing page de curso, não há CTA de inscrição, não há funil. O site existe como portfólio/vitrine. Todo o trabalho de conversão para o Lab é construção do zero.

**Oportunidade:** não há benchmark de conversão anterior para bater. Qualquer resultado positivo em junho será um marco histórico para a Atama.

---

## Recomendações Priorizadas por Versão

### V1 — Antes do go-live (31/05)

| Prioridade | Ação | Impacto |
|------------|------|---------|
| 🔴 Crítica | 301 redirects para URLs com tráfego real | Preservar SEO de 14 anos |
| 🔴 Crítica | Instalar Plausible Analytics no novo site | Medir tráfego real desde dia 1 |
| 🔴 Crítica | Google Search Console — vincular domínio + sitemap | Indexação do novo site |
| 🟡 Alta | Encontrar e preservar URL linkada pelo Wikipedia | Backlink de DA 95+ |
| 🟡 Alta | Design mobile-first (não desktop-first) | Público Lab é mobile |
| 🟡 Alta | Link na bio TikTok/Instagram → /lab | Canal primário de aquisição |

### V2 — Pós-lançamento (junho/julho)

| Ação | Por quê |
|------|---------|
| Analisar primeiros dados do Plausible | Tráfego humano real pela primeira vez |
| Criar conteúdo ativo TikTok/Instagram | Construir canal de aquisição recorrente |
| SEO de conteúdo para /lab | Keywords de curso presencial audiovisual RS |

### V3 — Escala (agosto+)

| Ação | Por quê |
|------|---------|
| Estratégia YouTube/Vimeo | Portfólio + making-of Lab com audiência construída |
| Análise de conversão por canal | Dados de 2+ meses pós-lançamento para otimizar |

---

---

## Análise do Site Atual — atamafilmes.com.br

**Fonte:** Inspeção direta (navegação completa pelo MA em 12/05/2026)
**Escopo:** Todas as páginas públicas + teste de responsividade mobile (390px)

---

### Estrutura de Navegação Atual

| Página | URL | Status | Observação |
|--------|-----|--------|------------|
| Home | `/` | ✅ Ativo | Blog de notícias — não é landing page |
| Quem Somos | `/quem-somos/` | ✅ Ativo | Manifesto da produtora |
| Equipe | `/equipe/` | ⚠️ Em construção | Página vazia — link morto há anos |
| Colaboradores | `/colaboradores/` | ⚠️ Em construção | Página vazia — link morto há anos |
| Projetos | `/projetos/` | ✅ Ativo | Grid de thumbnails com todos os projetos |
| Contato | `/contato/` | ✅ Ativo | Endereço, telefone e email |

**Conclusão:** 2 de 6 páginas do menu estão em construção. Para um visitante de primeira viagem, isso comunica abandono.

---

### Portfólio Identificado — Projetos

| Projeto | Tipo | Destaque | Status no site |
|---------|------|----------|----------------|
| **"Além de Nós" (Beyond Us)** | Longa-metragem ficção | Thiago Lacerda, road movie, 5.000km de estradas, 27 diárias | "Em pós-produção" — desatualizado (já circulou em festivais internacionais) |
| **Sobreviventes da Pampa** | Doc longa-metragem | Road movie sobre identidade gaúcha | Ativo |
| **A Pampa é a Terra. O Pampa Somos Nós.** | Documentário | — | Ativo |
| **Universo Z na Amazon / Nick Jr.** | Animação infantil | Veiculada em Prime Video e Nick Jr. | Ativo — **maior tráfego orgânico do site** |
| **Vem Aí: "Proib..."** | A identificar | — | Parcial |
| **Leitura de Roteiro** | A identificar | — | Parcial |
| **Não Esqueça de Mim** | A identificar | Projeto com mais tráfego humano (426 visitas/mês) | Ativo |

**Dado estratégico:** Universo Z (Amazon + Nick Jr.) é o ativo de maior alcance popular do portfólio. "Além de Nós" é o ativo de maior prestígio internacional. Ambos são prova de competência que precisa estar em destaque no novo site.

---

### Identidade e Conteúdo Reutilizável

**Tagline:** "revelando inspirações" — forte, concisa, pode ser preservada ou evoluída no V1.

**Definição de ATAMA (sidebar):**
> "ATAMA é uma expressão de origem japonesa que significa Inteligência, mente ou cabeça. Novas ideias se unem e NOVOS PROJETOS começam a surgir."

**Manifesto (Quem Somos) — conteúdo de alta qualidade:**
> "Buscamos uma linguagem audiovisual mais ampla, com novas idéias, que nos façam pensar. Buscamos nos aproximar do público através de novas formas de narrativas, imprimindo e oferecendo conteúdo diferenciado a cada projeto."

**Dados de contato confirmados:**
- Endereço: Rua General João Telles, 524 / 407 — Porto Alegre, CEP 90035-120
- Telefone: (51) 3072 42 52
- Email: contato@atamafilmes.com.br

**Redes sociais identificadas:**
- @ATAMAFILMES no Twitter/X (embed no sidebar — provavelmente quebrado)
- Vimeo: embed de 2:36 visível no sidebar (conteúdo de portfólio)

---

### Problemas Técnicos e de UX Críticos

#### 🔴 Erros expostos publicamente (segurança)

O sidebar exibe erros PHP ao vivo para qualquer visitante:

```
Warning: simplexml_load_file(http://www.ancine.gov.br/rss/):
failed to open stream: HTTP request failed! HTTP/1.1 404 Not Found
in /home/atamafilmes/www/wp-content/themes/atama_theme/sidebar.php on line 13
```

**Impacto duplo:**
1. Expõe o path completo do servidor (`/home/atamafilmes/www/`) — risco de segurança
2. Comunica descuido técnico a qualquer parceiro ou imprensa que visite o site

O erro ocorre porque o sidebar tenta carregar um RSS feed da ANCINE que retornou 404 permanentemente. Provavelmente quebrado há anos.

#### 🔴 Zero responsividade mobile

Testado em 390px (iPhone 14 equivalente):
- Logo cortado na borda esquerda da tela
- Menu de navegação horizontal transbordando (itens "projetos" e "contato" invisíveis)
- Sem hamburger menu — sem nenhum mecanismo de acesso ao menu em mobile
- Texto overflow além da viewport
- Grande área branca no hero sem conteúdo útil

**Veredicto:** o site é **inutilizável em mobile**. Para o público primário do Lab (TikTok/Instagram, ~100% mobile), o site atual é uma barreira, não uma porta de entrada.

#### 🟡 Arquitetura de informação inadequada para 2026

- **Home é um blog** com posts datados de 2021 e 2025 — não é uma landing page de produto
- Visitante novo não consegue entender o que a Atama faz em menos de 5 segundos
- Nenhum CTA visível em nenhuma página — sem botão, sem call-to-action, sem próximo passo
- Nenhuma menção ao Lab ou a cursos — o novo produto não existe no site atual
- Páginas "Em Construção" no menu principal comunicam abandono

#### 🟡 Conteúdo desatualizado

- "Além de Nós" ainda descrito como "em pós-produção" (foi lançado e circulou em festivais internacionais)
- Último post do blog: junho 2025 — 11 meses sem atualização
- Status de festivais/premiações não documentado no site (ativo importante para parceiros internacionais)

#### ⚪ Dependências externas quebradas

- RSS feed ANCINE → 404 permanente
- Twitter/X embed no sidebar → provavelmente não carrega (plataforma mudou API em 2023)
- Vimeo embed → aparentemente funcional (2:36 visível)

---

### Análise Mobile vs. Site Institucional — Duas Lentes Estratégicas

O usuário confirmou: **site institucional serve contexto brasileiro E internacional** (parceiros, festivais, distribuidoras, imprensa). **Lab serve exclusivamente contexto regional** (RS/Brasil, alunos).

| Dimensão | Site Institucional (Atama Filmes) | Lab (Atama Lab) |
|----------|----------------------------------|-----------------|
| Público | BR + Internacional | RS/Brasil (regional) |
| Idioma | PT + EN (V2) | PT-BR exclusivo |
| Dispositivo prioritário | Desktop (parceiros) + Mobile (BR) | Mobile-first absoluto |
| Canal de entrada | Busca, LinkedIn, festivais, imprensa | TikTok, Instagram, WhatsApp |
| CTA principal | Contato / portfólio | Inscrição no curso |
| Métrica de sucesso | Qualidade do contato gerado | Inscrições na turma |

**Para o design V1:** mesmo domínio, uma única nav — mas `/lab` deve ser projetada 100% mobile-first e `/filmes`, `/sobre` devem ser projetadas com qualidade desktop premium (parceiros internacionais acessam em desktop em ambiente profissional).

---

### O Que Migrar — Inventário de Conteúdo

| Conteúdo | Migrar? | Observação |
|----------|---------|------------|
| Tagline "revelando inspirações" | ✅ Sim | Preservar ou evoluir |
| Definição de ATAMA (japonês) | ✅ Sim | Usar na página /sobre |
| Manifesto Quem Somos | ✅ Sim | Base da página /sobre |
| Dados de contato (endereço, tel, email) | ✅ Sim | Verificar se atualizados com Rogério/Rose |
| Thumbnails dos projetos | ✅ Sim | Solicitar originais em alta resolução a Rogério |
| Descrições dos projetos | ✅ Sim (com revisão) | Atualizar status de "Além de Nós" |
| Post "Dois primeiros longas..." | 🟡 Talvez | Útil como prova social de trajetória |
| Páginas Equipe e Colaboradores | ❌ Não | Em construção há anos — eliminar do menu V1 |
| Blog de notícias | ❌ Não (V1) | Fora do escopo MVP — retomar em V2 se relevante |
| Embed Twitter/X | ❌ Não | Quebrado e desatualizado |

---

### Decisões para o V1 derivadas desta análise

1. **Eliminar `/equipe/` e `/colaboradores/` do menu** — não colocar links para páginas em construção
2. **Substituir blog-home por landing page** com hero, identidade, CTAs para Filmes e Lab
3. **Implementar mobile-first obrigatoriamente** — o site atual é inutilizável em mobile
4. **Corrigir erro PHP** antes do go-live (ou ele some automaticamente com a migração para Next.js)
5. **Atualizar status de "Além de Nós"** — o projeto foi lançado, circulou em festivais internacionais, isso é um ativo de credibilidade que precisa estar correto
6. **Solicitar assets em alta resolução** a Rogério antes de iniciar design — as thumbnails do site atual são pequenas e provavelmente não têm resolução adequada para o novo site
7. **301 redirects obrigatórios** para `/projetos/nao-esqueca-de-mim/` e `/contato/` — páginas com tráfego humano real confirmado

---

---

## Dados de Mercado Brasil — StatCounter GlobalStats

**Fonte:** StatCounter GlobalStats (gs.statcounter.com)
**Período:** Abril 2025 – Abril 2026
**Data da coleta:** 2026-05-13
**Analista:** Marketing Analyst (MA)

> StatCounter mede o comportamento real de navegadores em sites que usam o script StatCounter. Cobre milhões de pageviews no Brasil. Dados são de *todos os dispositivos* salvo quando indicado como "mobile".

---

### 1. Plataforma — Desktop vs Mobile vs Tablet (Brasil, Abril 2026)

| Plataforma | Share |
|------------|-------|
| **Desktop** | **60.68%** |
| **Mobile** | **38.68%** |
| Tablet | 0.58% |
| Console | 0.06% |

**Interpretação estratégica:**
O Brasil é um país de maioria desktop quando se fala em *acesso geral à web*. Mas esse número é enganoso para o público do Lab. A persona Lab (TikTok/Instagram, 18–30 anos, audiovisual) é mobile em ~90%+ — porque ela chega via app, não via browser. O dado de 38.68% mobile reflete o Brasil inteiro, incluindo empresas e escritórios.

**Regra de design derivada:**
- `/lab` → **mobile-first absoluto** (persona chega do TikTok/Instagram via celular)
- `/filmes`, `/sobre`, `/contato` → **desktop premium** (parceiros internacionais acessam em ambiente profissional)

---

### 2. Browser Market Share (Brasil, Abril 2026 — todos os dispositivos)

| Browser | Share |
|---------|-------|
| **Chrome** | **78.96%** |
| Edge | 7.19% |
| Safari | 6.62% |
| Opera | 3.29% |
| Firefox | 1.82% |
| Samsung Internet | 1.1% |

**Interpretação:** Chrome domina de forma absoluta. Não há decisão de cross-browser testing crítica para V1 — foco total em Chrome. Safari (iOS) em 6.62% é o único browser alternativo com relevância real.

---

### 3. Mobile Browser Market Share (Brasil, Abril 2026 — mobile only)

| Browser | Share mobile |
|---------|-------------|
| **Chrome** | **81.23%** |
| Safari | 15.02% |
| Samsung Internet | 2.12% |
| Opera | 0.47% |
| Brave | 0.33% |
| Firefox | 0.32% |

**Interpretação:** No celular, Chrome domina ainda mais (81.23%). Safari com 15.02% representa os usuários de iPhone (iOS). **Implicação crítica:** ao testar o site mobile, testar obrigatoriamente no Safari iOS além do Chrome Android — comportamentos de CSS e scroll diferem, especialmente em safe-area para iPhone com notch.

---

### 4. Operating System (Brasil, Abril 2026 — todos os dispositivos)

| OS | Share |
|----|-------|
| **Windows** | **51.39%** |
| **Android** | **31.4%** |
| iOS | 7.83% |
| Unknown | 4.84% |
| Linux | 1.74% |
| OS X (macOS) | 1.26% |

**Derivadas:**
- Mobile total = Android (31.4%) + iOS (7.83%) = **39.23%** → alinhado com o dado de plataforma (38.68% mobile)
- Android vs iOS no mobile: ~80% Android / ~20% iOS
- Windows domina o desktop (51.39% de todos os acessos = praticamente todo o desktop)
- macOS é apenas 1.26% — o usuário brasileiro típico não tem Mac

**Implicação para design:** o usuário mobile do Lab é majoritariamente Android/Chrome. Telas pequenas (360–412px), sem notch em muitos casos. Mas iPhone (iOS/Safari) merece atenção por ter padrões de comportamento diferentes (scroll momentum, safe-area, etc.).

---

### 5. Screen Resolution (Brasil, Abril 2026)

| Resolução | Share | Tipo |
|-----------|-------|------|
| 1920×1080 | 15.68% | Desktop Full HD |
| 1366×768 | 8.84% | Desktop HD (notebook básico) |
| 1280×1200 | 7.86% | Desktop |
| 1536×864 | 7.05% | Desktop (notebook médio) |
| 384×832 | 4.3% | **Mobile Android** |
| 412×915 | 3.52% | **Mobile Android (Samsung Galaxy)** |

**Interpretação:**
- O desktop brasileiro é diverso: 1920×1080 lidera mas 1366×768 ainda é significativo — notebooks de entrada ainda têm muita presença
- As resoluções mobile mais comuns (~384–412px de largura) confirmam que **o breakpoint crítico para /lab é ~390px** — iPhone 14 e Samsung Galaxy A/S series
- Design deve funcionar de 360px (mínimo Android antigo) a 430px (iPhone 14 Pro Max)

---

### 6. Social Media Referrals (Brasil, Abril 2026)

> **Atenção metodológica:** StatCounter Social Media mede *referral traffic de redes sociais para sites*. Não mede uso das plataformas. TikTok tem enorme uso no Brasil mas quase zero referral para sites externos — porque mantém usuários dentro do app.

| Plataforma | Share de referrals |
|------------|-------------------|
| **Facebook** | **39.59%** |
| Instagram | 19.57% |
| Pinterest | 19.38% |
| YouTube | 11.27% |
| Twitter/X | 5.78% |
| Reddit | 3.21% |
| **TikTok** | **< 1% (não aparece no top 6)** |

**Insight crítico:** TikTok é invisível em dados de referral web. Isso **confirma** a estratégia: o TikTok só converte se o perfil tiver um link na bio claro. A jornada é:
```
TikTok app → vídeo → clica no perfil → clica no link na bio → /lab
```
Não existe "clica no link do vídeo → /lab". O link na bio é o único ponto de conversão do TikTok.

**Facebook 39.59%:** relevante para o site institucional (parceiros, divulgação de projetos). Não é canal primário do Lab mas pode ser ativado para alcançar a rede de contatos profissionais de Rogério/Rose.

---

### 7. Search Engine (Brasil, Abril 2026)

| Buscador | Share |
|----------|-------|
| **Google** | **85.88%** |
| Bing | 10.76% |
| Yahoo! | 2.87% |
| YANDEX | 0.23% |
| DuckDuckGo | 0.22% |

**Interpretação:** Google é o único buscador que importa no Brasil (85.88%). Todo SEO = Google SEO. Não há necessidade de otimizar para Bing ou Yahoo. Search Console do Google é a única ferramenta de monitoramento de busca necessária.

---

### Síntese — 5 Insights Críticos para o Produto

**1. O Lab precisa funcionar em Android/Chrome de entrada**
O usuário mobile brasileiro é Android/Chrome (~81% dos acessos mobile). Telas na faixa 360–412px. Testes de /lab devem começar por Chrome Android antes de qualquer outro device.

**2. Safari iOS é obrigatório de testar, mesmo sendo minoria**
15% dos usuários mobile usam Safari (iPhone). Safari tem comportamentos CSS diferentes: scroll momentum, safe-area-inset, position: fixed com teclado aberto. Uma /lab quebrada no iPhone é inaceitável.

**3. Desktop brasileiro ainda é Windows/1366px — parceiros internacionais são exceção**
O parceiro internacional que acessa `/filmes` provavelmente usa Mac + Safari ou Windows + Chrome. Mas o brasileiro médio que acessa o site usa Windows 11 + Chrome + 1920×1080 ou notebook 1366×768. O design de /filmes precisa funcionar impecavelmente em 1366px — não apenas em 1920px.

**4. TikTok não gera referral web — link na bio é obrigatório**
TikTok está invisível nos dados de social referral. A estratégia de "postar e esperar tráfego" não funciona. O link na bio → /lab é o único caminho. Sem ele, nenhum post gera conversão.

**5. Google é soberano — SEO = Google SEO**
85.88% de share. Nenhuma ação para Bing ou Yahoo vale o esforço. Search Console + sitemap + rich results (JSON-LD Course) são as três ações de SEO que mais importam para V1.

---

*Seção adicionada em 2026-05-13 pelo MA. Fonte: StatCounter GlobalStats — dados de abril 2026.*

*Seção adicionada pelo Marketing Analyst (MA) em 2026-05-12. Fonte: Inspeção direta do site atamafilmes.com.br — varredura completa de todas as páginas públicas + teste mobile 390px.*
