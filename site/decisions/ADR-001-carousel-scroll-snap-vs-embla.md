# ADR-001: Carousel da home com CSS scroll-snap em vez de Embla Carousel

## Status
Aceita

## Contexto

A home precisa de um carousel full-width com todos os 6 projetos no mesmo formato hero.
O shadcn/ui oferece um componente `Carousel` baseado em Embla Carousel (`embla-carousel-react`).
No momento da decisão, `@/components/ui/carousel` não existe no projeto — seria necessário rodar
`npx shadcn add carousel` e adicionar a dependência `embla-carousel-react`.

Requisitos do carousel para V1:
- Swipeable no mobile
- Setas de navegação esquerda/direita
- Dots indicadores
- Sem autoplay
- Sem animações de transição (motion = V2)

## Decisão

Implementar com CSS scroll-snap nativo + React refs para scroll programático via setas.
Sem dependências externas adicionadas.

## Alternativas consideradas

### Alternativa A: Embla Carousel via shadcn/ui
- Pros: API rica, snap suave, acessibilidade embutida, padrão do projeto
- Contras: requer `npx shadcn add carousel` + `embla-carousel-react` como nova dep; overhead para requisitos simples; nenhuma feature exclusiva do Embla é necessária aqui

### Alternativa B: CSS scroll-snap nativo (escolhida)
- Pros: zero deps, SSR-safe, swipe nativo no mobile, código mínimo, fácil de manter
- Contras: sem API de eventos de slide (não necessária), comportamento de snap pode variar entre browsers antigos (aceitável para MVP)

## Justificativa

Os requisitos do V1 são simples: swipe, setas, dots, sem autoplay. CSS scroll-snap + um hook
de ref para `scrollTo` atende tudo sem adicionar dependência. Embla seria overkill e introduz
uma dep externa apenas para o que o browser já faz nativamente.

Se no V2 for necessário autoplay, transições customizadas ou callbacks de slide, migrar para
Embla Carousel via shadcn/ui com `npx shadcn add carousel`.

## Impacto no projeto
- Arquivos afetados: `site/src/app/page.tsx`
- Migração necessária: não (feature nova)
- Performance: positivo — zero JS de terceiro, scroll nativo é GPU-accelerated
- Dependências adicionadas: nenhuma

## Adequação ao MVP

Solução mais simples que funciona. Para pós-MVP (V2), Embla via shadcn/ui seria o ideal
para dar suporte a animações de transição e autoplay conforme motion design V2.

## Trade-offs
- Ganhamos: simplicidade, zero deps, performance
- Abrimos mão de: API rica do Embla, callbacks de slide event
- Risco: comportamento de smooth scroll pode diferir em Safari iOS antigo (< 15) — mitigado com `scroll-behavior: smooth` e `overscroll-behavior-x: contain`

## Referências
- https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type
- https://ui.shadcn.com/docs/components/carousel
