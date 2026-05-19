# SEO Checklist V1 — atamafilmes.com.br
**Antes do go-live em 31/05/2026**
**Responsável:** Nicolas (Dev) + Marketing Analyst (validação)
**Prioridade:** tudo aqui é obrigatório antes do lançamento

---

## Por que isso importa

O domínio `atamafilmes.com.br` tem 14 anos de idade, backlinks reais (incluindo Wikipedia) e é ativo no Googlebot. Uma migração mal feita para Next.js pode destruir essa autoridade em dias. O objetivo desta checklist é preservar o que existe e criar base para crescer.

---

## 0. Pré-requisitos (resolver antes de qualquer coisa)

- [ ] Confirmar que o novo site está em produção em `atamafilmes.com.br` (não em subdomínio ou preview URL)
- [ ] DNS apontando para Vercel (ou hosting definitivo) — sem período de "site em construção" pública
- [ ] SSL/HTTPS ativo e forçando redirect HTTP → HTTPS
- [ ] `www` redirecionando para `non-www` (ou vice-versa) — escolher um e redirecionar o outro com 301

---

## 1. 301 Redirects Obrigatórios

> Qualquer URL com tráfego real ou backlink confirmado precisa de redirect. Sem 301, o SEO acumulado nessas URLs se perde.

### URLs prioritárias (tráfego humano confirmado via AWStats)

| URL antiga (WordPress) | URL nova (Next.js) | Justificativa |
|------------------------|-------------------|---------------|
| `/contato/` | `/contato` | 2ª página mais visitada por humanos |
| `/projetos/nao-esqueca-de-mim/` | `/projetos/nao-esqueca-de-mim` | 426 visitas/mês humanas — rankeado no Google |
| `/quem-somos/` | `/sobre` (ou `/quem-somos`) | Manter slug ou redirecionar |
| `/projetos/` | `/filmes` (ou `/projetos`) | Seção de portfólio |

### URLs a investigar antes do lançamento

- [ ] Descobrir qual URL está linkada pelo Wikipedia (rodar `site:atamafilmes.com.br` no Google + buscar referências no Wikipedia) — essa URL deve receber redirect 301 especial
- [ ] Verificar quais URLs do portfólio rankeiam no Google (`site:atamafilmes.com.br` mostra resultados indexados)
- [ ] Identificar se `/projetos/universo-z-na-amazon/` ou similar existe e está indexada — Universo Z tem maior tráfego orgânico

### Implementação Next.js

```javascript
// next.config.js
const redirects = async () => [
  { source: '/contato/', destination: '/contato', permanent: true },
  { source: '/quem-somos/', destination: '/sobre', permanent: true },
  { source: '/projetos/', destination: '/filmes', permanent: true },
  { source: '/projetos/nao-esqueca-de-mim/', destination: '/projetos/nao-esqueca-de-mim', permanent: true },
  // Adicionar demais URLs após investigação
];

module.exports = { async redirects() { return redirects(); } };
```

---

## 2. Meta Tags — Por Página

> Cada página precisa de `<title>` e `<meta name="description">` únicos. Duplicatas prejudicam ranking.

### Formato recomendado

- **Title:** `[Título da Página] — Atama Filmes` (máx. 60 caracteres)
- **Description:** 1 frase clara, 120–155 caracteres, com a keyword principal

### Por página

| Página | Title | Meta Description |
|--------|-------|-----------------|
| `/` (Home) | `Atama Filmes — Produtora Audiovisual em Porto Alegre` | "Produtora audiovisual gaúcha. Do documentário ao longa de ficção, do Amazon Prime ao Nick Jr. 14 anos revelando inspirações." |
| `/sobre` | `Quem Somos — Atama Filmes` | "Conheça a Atama: produtora audiovisual fundada em Porto Alegre com mais de uma década de projetos nacionais e internacionais." |
| `/filmes` | `Projetos — Atama Filmes` | "Portfólio da Atama Filmes: longas, documentários e animações para Amazon Prime Video, Nick Jr. e festivais internacionais." |
| `/lab` | `Atama Lab — Curso Presencial de Produção Audiovisual em Porto Alegre` | "20 horas em 2 semanas. Aprenda produção audiovisual com quem produziu para Amazon e Nick Jr. Turma junho 2026, Porto Alegre." |
| `/contato` | `Contato — Atama Filmes` | "Entre em contato com a produtora Atama Filmes. Estamos em Porto Alegre, RS." |

---

## 3. Open Graph (OG) — Para Compartilhamento Social

> OG tags controlam como o link aparece quando compartilhado no WhatsApp, Facebook, Twitter/X, LinkedIn.

### Tags obrigatórias por página

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Atama Filmes" />
<meta property="og:locale" content="pt_BR" />
<meta property="og:title" content="[título da página]" />
<meta property="og:description" content="[descrição da página]" />
<meta property="og:url" content="https://atamafilmes.com.br/[slug]" />
<meta property="og:image" content="https://atamafilmes.com.br/og/[pagina].jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

### Imagem OG para /lab (crítica para WhatsApp)

- Dimensão: **1200 × 630px** (obrigatório — menor distorce no WhatsApp)
- Conteúdo: Logo Atama + "Atama Lab" + data da turma + Porto Alegre
- Fundo: branco (identidade) com tipografia impactante
- Formato: JPEG, < 300KB

### Verificação

Após go-live, testar com: `https://developers.facebook.com/tools/debug/`

---

## 4. Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[título]" />
<meta name="twitter:description" content="[descrição]" />
<meta name="twitter:image" content="https://atamafilmes.com.br/og/[pagina].jpg" />
```

---

## 5. JSON-LD — Dados Estruturados

### /lab — Schema Course (Google Rich Results)

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Atama Lab — Curso de Produção Audiovisual",
  "description": "Curso presencial intensivo de produção audiovisual em Porto Alegre. 20 horas em 2 semanas, do roteiro à entrega de um projeto real.",
  "provider": {
    "@type": "Organization",
    "name": "Atama Filmes",
    "url": "https://atamafilmes.com.br"
  },
  "courseMode": "In-Person",
  "location": {
    "@type": "Place",
    "name": "Porto Alegre, RS",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Porto Alegre",
      "addressRegion": "RS",
      "addressCountry": "BR"
    }
  },
  "startDate": "2026-06-01",
  "duration": "P2W",
  "offers": {
    "@type": "Offer",
    "url": "https://atamafilmes.com.br/lab",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "BRL"
  },
  "inLanguage": "pt-BR"
}
```

> **Atenção:** preencher `startDate` e `offers.price` após decisões de data e preço serem confirmadas com Rogério/Rose.

### / (Home) — Schema Organization

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Atama Filmes",
  "url": "https://atamafilmes.com.br",
  "logo": "https://atamafilmes.com.br/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-51-3072-4252",
    "contactType": "customer service",
    "areaServed": "BR",
    "availableLanguage": "Portuguese"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua General João Telles, 524/407",
    "addressLocality": "Porto Alegre",
    "addressRegion": "RS",
    "postalCode": "90035-120",
    "addressCountry": "BR"
  },
  "sameAs": [
    "https://vimeo.com/atamafilmes"
  ]
}
```

### Testar rich results

Após go-live: `https://search.google.com/test/rich-results`

---

## 6. Canonical Tags

> Previne conteúdo duplicado quando a mesma página pode ser acessada por múltiplas URLs.

```html
<!-- Em todas as páginas, no <head> -->
<link rel="canonical" href="https://atamafilmes.com.br/[slug-da-pagina]" />
```

**Regras:**
- Sempre usar URL sem trailing slash (ou sempre com — escolher um padrão)
- Sempre HTTPS
- Sempre sem parâmetros de query na canonical (ex: `?ref=instagram`)

---

## 7. sitemap.xml

### Gerar automaticamente com Next.js

```javascript
// app/sitemap.ts (Next.js App Router)
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://atamafilmes.com.br',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://atamafilmes.com.br/filmes',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://atamafilmes.com.br/sobre',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://atamafilmes.com.br/lab',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://atamafilmes.com.br/contato',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
```

**Após go-live:** submeter em `https://search.google.com/search-console`

---

## 8. robots.txt

```
User-agent: *
Allow: /

Sitemap: https://atamafilmes.com.br/sitemap.xml
```

> **Não bloquear** nada do site público. WordPress tinha diretivas desnecessárias que podem ter prejudicado indexação.

---

## 9. Google Search Console

- [ ] Verificar propriedade `atamafilmes.com.br` (DNS TXT record ou HTML file)
- [ ] Verificar também `www.atamafilmes.com.br` (propriedade separada)
- [ ] Submeter sitemap.xml após go-live
- [ ] Aguardar 48–72h para indexação aparecer
- [ ] Verificar erros de cobertura após primeira semana

---

## 10. Plausible Analytics

> AWStats mede bots. Plausible mede humanos. Não lançar sem Plausible instalado.

- [ ] Criar conta em `plausible.io` (plano Starter — USD 9/mês)
- [ ] Configurar domínio `atamafilmes.com.br`
- [ ] Adicionar script no `<head>` de todas as páginas:

```html
<script defer data-domain="atamafilmes.com.br" src="https://plausible.io/js/script.js"></script>
```

Em Next.js com App Router:

```typescript
// app/layout.tsx
import Script from 'next/script'

// No <head> do layout raiz:
<Script
  defer
  data-domain="atamafilmes.com.br"
  src="https://plausible.io/js/script.js"
  strategy="afterInteractive"
/>
```

- [ ] Configurar goal de conversão: evento "lab_inscription_click" (click no CTA de inscrição em /lab)
- [ ] Confirmar que dados aparecem no dashboard antes de lançar

---

## 11. Core Web Vitals

> Afeta ranking no Google e experiência do usuário. Medir antes e depois do go-live.

| Métrica | Meta | Como medir |
|---------|------|-----------|
| LCP (Largest Contentful Paint) | < 2,5s | PageSpeed Insights |
| CLS (Cumulative Layout Shift) | < 0,1 | PageSpeed Insights |
| FID/INP (Input responsiveness) | < 200ms | PageSpeed Insights |

**Ferramentas:** `https://pagespeed.web.dev/` — testar Home e /lab separadamente, em mobile E desktop.

**Principais riscos de CLS:** imagens sem `width` e `height` definidos, fontes carregando depois do texto.

---

## 12. Checklist Final — Go-Live

Execute nesta ordem no dia 31/05:

```
[ ] SSL ativo (HTTPS no browser)
[ ] www → non-www redirect funcionando
[ ] robots.txt acessível em /robots.txt
[ ] sitemap.xml acessível em /sitemap.xml
[ ] Todos os 301 redirects testados (abrir URL antiga, confirmar redirect)
[ ] Meta tags presentes em todas as páginas (inspecionar source code)
[ ] OG tags testadas no Facebook Debugger
[ ] JSON-LD /lab testado no Rich Results Test
[ ] Canonical correto em todas as páginas
[ ] Plausible recebendo dados (abrir /lab, verificar no dashboard em tempo real)
[ ] Search Console: sitemap submetido
[ ] PageSpeed Insights: LCP < 2,5s em mobile
```

---

*Criado em 2026-05-12 pelo MA. Responsabilidade de execução: Nicolas (Dev). Validação pós-go-live: MA.*
