# Tech Stack — Decisões Técnicas
**Última atualização:** 2026-05-17

---

## Infraestrutura e Hospedagem

### Hospedagem: KingHost (Plano Node.js I)

**Decisão tomada em:** 2026-05-17
**Status:** Aguardando aprovação de custo + contratação do plano Node.js

| Item | Detalhe |
|------|---------|
| **Provedor** | KingHost |
| **Plano** | Hospedagem Node.js I |
| **Custo** | R$ 14,45/mês (trimestral) |
| **RAM** | 256 MB |
| **Espaço em disco** | 1 GB |
| **Aplicações** | 1 (suficiente — site + Lab são 1 app Next.js) |
| **SSL** | Let's Encrypt gratuito, incluído |
| **Deploy** | Git pull + restart via painel |
| **Banco de dados** | MySQL 1 GB + MongoDB 2 GB (inclusos, não usados no V1) |

**Por que KingHost e não Vercel:**
- Time já conhece o serviço (anos de uso com WordPress)
- Suporte em português 24/7
- Custo previsível e baixo
- Processo de deploy conhecido pelo time

**Por que Plano I e não II ou III:**
- 1 aplicação = suficiente (site + Lab são rotas da mesma app Next.js)
- Tráfego esperado MVP: ~500–1.000 visitas/mês — carga muito baixa
- RAM de 256 MB é apertada mas funcional para o tráfego do MVP
- Se houver problemas de memória pós go-live → upgrade direto para Plano III (512 MB)

**Pendência crítica antes do deploy:**
- Confirmar com KingHost se o plano Node.js suporta `next start` como processo permanente (PM2 ou similar)
- Se sim: deploy normal com `next build` + `next start`
- Se não (serverless): precisaria usar `output: 'export'` no Next.js — perde SSR e afeta Mercado Pago

---

## Fluxo de Deploy

```
Desenvolvimento local (Nicolas)
  → git push → GitHub (repositório principal)
    → KingHost: git pull
      → npm run build (next build)
        → Restart do processo Node.js via painel
          → Site atualizado em produção
```

**Ambiente de staging:** não há. Fluxo simplificado para V1:
- Desenvolvimento local com `next dev`
- Validação local antes de cada push
- Deploy direto em produção na KingHost

---

## Framework e Linguagem

| Item | Decisão |
|------|---------|
| **Framework** | Next.js 15 (App Router) |
| **Linguagem** | TypeScript |
| **Estilização** | Tailwind CSS v4 |
| **Componentes** | shadcn/ui |
| **Repositório** | GitHub |

---

## Plataforma de Cursos

**Status:** Decisão pendente (bloqueador crítico)
**Opções em avaliação:** Hotmart, Kiwify, solução custom
**Impacto:** Define checkout, UX de compra, fluxo pós-matrícula

---

## Gateway de Pagamento

**Decisão:** Mercado Pago (preferencial)
**Status:** Aguardando validação fiscal com Marcelo

---

## CMS

**Decisão:** Não há CMS no V1
- Conteúdo estático gerenciado via código
- CMS a avaliar para V2 se necessário (Sanity, Contentlayer)

---

## Domínio e DNS

| Item | Detalhe |
|------|---------|
| **Domínio** | atamafilmes.com.br |
| **Registrado em** | KingHost (já existente) |
| **DNS atual** | Aponta para WordPress (KingHost) |
| **DNS no go-live (31/05)** | Migrar para o novo plano Node.js na KingHost |
| **SSL** | Let's Encrypt — já incluso no novo plano |

**Estratégia de cutover:**
- Desenvolvimento e testes rodam localmente
- No dia 31/05: fazer deploy na KingHost Node.js + migrar DNS
- O WordPress sai do ar no momento da migração

---

## 301 Redirects (obrigatório no go-live)

Domínio de 14 anos com autoridade SEO. Os redirects devem ser configurados no go-live para preservar o ranqueamento:

```
/ (WordPress home) → / (Next.js home)
/lab → /lab
/sobre → /sobre
/contato → /contato
/filmes → /filmes
```

Ver checklist completo em [`../marketing/seo-checklist-v1.md`](../marketing/seo-checklist-v1.md)

---

*Decisões marcadas como "A definir" serão preenchidas nas próximas sessões.*
