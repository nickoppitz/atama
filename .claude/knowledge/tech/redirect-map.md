# Mapa de Redirects — Migração WordPress → Next.js
**Última atualização:** 2026-05-17
**Fonte:** `site:atamafilmes.com.br` + AWStats 2025–2026

---

## URLs indexadas no Google hoje

### Home
- `http://atamafilmes.com.br/` ✅ mantida como `/`

### Contato
- `http://atamafilmes.com.br/contato/` → redirecionar para `/contato`

### Projetos individuais (WordPress slugs encontrados)
- `/projetos/sobreviventes-do-pampa/`
- `/projetos/leitura-de-roteiro/`
- `/projetos/e-resta-duvida/`
- `/projetos/nova-realizacao-a-caminho/`
- `/projetos/arquitetura-do-tempo-no-tempo-presente/`
- `/projetos/arquitetura-do-tempo-no-tempo-presente/attachment/nathali/` ← attachment de imagem
- `/projetos/massa-criativa/`
- `/projetos/um-pedido-incomum/`
- `/projetos/alem-de-nos-em-pos-producao/`
- `/projetos/nervos-de-aco/`
- `/projetos/documentario-cesmar-a-educacao-como-meio-de-transformacao-social/`
- `/projetos/universo-z-na-amazon/`

### Notícias (WordPress — não existirão no novo site)
- `/noticias/o-nosso-universo-aos-olhos-do-mundo/`
- `/noticias/universo-z-estreia-na-tv-aberta-tv-brasil-e-tve-rs/`
- `/noticias/vem-ai-universo-z-terceira-temporada/`
- `/noticias/luini-sempre-uma-estrela/`

### Páginas não encontradas indexadas
- `/sobre/` — não indexada (provavelmente não existe no WordPress atual)
- `/quem-somos/` — não indexada

---

## Mapeamento de Redirects (next.config.js)

### Decisões de arquitetura assumidas
- Portfólio mantém `/projetos/` (não `/filmes/`) — decisão de 17/05
- Padrão www: **non-www** → configurar no servidor KingHost, não no Next.js
- Padrão trailing slash: **sem** trailing slash (Next.js padrão)
- Projetos individuais: **⚠️ DECISÃO PENDENTE** — ver seção abaixo

### Redirects definidos

```js
// next.config.js — redirects
async redirects() {
  return [
    // Trailing slash → sem trailing slash (todas as páginas)
    {
      source: '/contato/',
      destination: '/contato',
      permanent: true,
    },
    {
      source: '/projetos/',
      destination: '/projetos',
      permanent: true,
    },

    // Notícias → home (não existirão no novo site)
    {
      source: '/noticias/:slug',
      destination: '/',
      permanent: true,
    },
    {
      source: '/noticias/',
      destination: '/',
      permanent: true,
    },
    {
      source: '/noticias',
      destination: '/',
      permanent: true,
    },

    // Attachments → projeto pai (WordPress cria URLs de attachment)
    {
      source: '/projetos/:slug/attachment/:attachment',
      destination: '/projetos/:slug',
      permanent: true,
    },
    {
      source: '/projetos/:slug/attachment/:attachment/',
      destination: '/projetos/:slug',
      permanent: true,
    },

    // HTTP → HTTPS (feito no servidor KingHost, mas redundância no Next.js)
    // Não configurar aqui — o KingHost gerencia SSL/HTTPS

    // ⚠️ PENDENTE: /projetos/[slug]/ — ver seção abaixo
  ]
}
```

---

## ⚠️ Decisão Pendente: Páginas Individuais de Projetos

O WordPress tem 12+ páginas de projeto indexadas (`/projetos/[slug]/`). O escopo V1 do Next.js definiu apenas `/projetos/` como listagem.

**Três opções:**

### Opção A — Sem páginas individuais no V1
Redirect: `/projetos/:slug` → `/projetos`

```js
{
  source: '/projetos/:slug',
  destination: '/projetos',
  permanent: true,
},
{
  source: '/projetos/:slug/',
  destination: '/projetos',
  permanent: true,
},
```

- Prós: mais simples, menos código, dentro do prazo
- Contras: perde autoridade de páginas individuais com backlinks (ex: `/projetos/nao-esqueca-de-mim/`)

### Opção B — Páginas individuais de projetos no V1
Cada projeto ganha rota `/projetos/[slug]` no Next.js (dado estático hardcoded no V1)

- Prós: preserva autoridade por URL, melhor para parceiros que acessam projeto específico
- Contras: mais código, mais conteúdo a redigir, pode atrasar o prazo
- Recomendação PD/MA: avaliar quais projetos têm mais backlinks antes de decidir

### Opção C — Páginas individuais só para projetos com backlinks confirmados
Criar rota dinâmica `/projetos/[slug]` mas com apenas os projetos mais importantes hardcoded

**Recomendação PM:** Opção A para V1 se o prazo apertar. Opção C se Nicolas confirmar que consegue codar as páginas de projeto em 1 dia.

---

## Wikipedia — URL referenciada

A pesquisa com `site:wikipedia.org atamafilmes.com.br` precisa ser rodada separadamente para identificar se alguma URL específica é linkada pelo Wikipedia. Se houver, ela tem prioridade máxima de redirect.

**Status:** ⏳ Ainda não rodado.

---

## Padrão www vs non-www

**Decisão:** non-www (atamafilmes.com.br sem www)

Configurar no servidor KingHost:
- `www.atamafilmes.com.br` → redirect 301 para `atamafilmes.com.br`
- Isso é feito no painel KingHost, não no `next.config.js`

---

## Checklist de validação pré-go-live

- [ ] Rodar `site:atamafilmes.com.br` novamente 1 semana antes do go-live (31/05) para capturar URLs novas
- [ ] Rodar `site:wikipedia.org atamafilmes.com.br` — identificar se há URL linkada pelo Wikipedia
- [ ] Testar todos os redirects com `curl -I [URL]` após deploy
- [ ] Verificar no Google Search Console se aparecem erros 404 após migração
- [ ] Confirmar SSL ativo (`https://` sem alerta no browser)
- [ ] Confirmar `www` → `non-www` funcionando
