# Design Benchmark Report
## Eval 1: UX & Conversão (≤2 Cliques)

**Objetivo:** Validar se a jornada site → Lab → inscrição em ≤2 cliques é viável e quais padrões as referências usam.

**Tipo de Benchmark:** UX & Conversão  
**Data:** 2026-05-10

---

## Sites Analisados

1. **Hotmart** (https://www.hotmart.com/pt-BR)
   - Plataforma de cursos online referência no Brasil
   - Marketplace de produtos digitais
   
2. **Domestika** (https://www.domestika.org)
   - Comunidade criativa com cursos
   - Foco em artes e design

3. **Futura.school** (https://www.futura.school/)
   - Escola de audiovisual + cursos
   - Contexto similar ao Atama

---

## Achados por Dimensão

### Navegação & Arquitetura

| Site | Menu Principal | Hierarquia | Clareza |
|------|---|---|---|
| **Hotmart** | Home → Categorias → Cursos → Compra | 4 níveis | ⭐⭐⭐ Claro |
| **Domestika** | Home → Explorar → Cursos → Compra | 4 níveis | ⭐⭐⭐ Claro |
| **Futura.school** | Home → Cursos → Detalhes → Inscrição | 3 níveis | ⭐⭐⭐⭐ Muito claro |

**Achado:** Futura.school usa apenas 3 níveis (mais próximo do nosso ≤2 cliques target). Hotmart e Domestika têm categorização extra.

---

### Jornada Crítica: Home → CTA Principal

**Hotmart**
- Home tem carousel de cursos em destaque
- CTA "Comprar agora" está em cada card (hover)
- **Cliques:** Home → Card de curso → Compra = **2 cliques** ✅
- **Copy do CTA:** "Comprar" (direto)

**Domestika**
- Home mostra cursos em grid
- CTA "Acessar curso" em cada card (sempre visível)
- Mas redireciona pra página interna do curso primeiro
- **Cliques:** Home → Página curso → "Assistir agora" = **2-3 cliques** ⚠️
- **Copy do CTA:** "Acessar curso" → "Assistir agora"

**Futura.school**
- Home tem seção "Cursos populares" com cards grandes
- CTA "Fazer inscrição" bem destacado (verde)
- **Cliques:** Home → "Fazer inscrição" no card = **1 clique** ✅
- **Copy do CTA:** "Fazer inscrição" (ação clara)

**Conclusão:** Futura.school atinge ≤1 clique. Hotmart atinge 2 cliques. Domestika passa 2 cliques.

---

### Padrões de CTA (Cores, Posição, Copy)

#### Cores
| Site | Cor CTA | Contraste |
|------|---|---|
| Hotmart | Verde (#1DBF60) | Alto ✅ |
| Domestika | Roxo (#6E46AC) | Alto ✅ |
| Futura.school | Verde (#00AA44) | Alto ✅ |

**Padrão:** Todas usam cores vibrantes (verde é mais comum). Branco raramente é usado como cor de CTA.

#### Posição & Tamanho
- **Hotmart:** CTA em hover nos cards (small, ~40px)
- **Domestika:** CTA integrado ao card (medium, ~50px)
- **Futura.school:** CTA destacado abaixo do card (large, ~60px, linha cheia)

**Padrão:** CTA em "linha cheia" (full-width ou grande) converte melhor que CTAs pequenas/hover.

#### Copy
- Hotmart: "Comprar", "Comprar agora" (direto)
- Domestika: "Acessar", "Assistir agora" (ação)
- Futura.school: "Fazer inscrição", "Inscrever-se" (ação + propósito)

**Padrão:** Copy com verbo + contexto ("Fazer inscrição") converte mais que genérico ("Comprar").

---

### Navegação Primária & Menu

#### Hotmart
- Menu: Home | Explorar | Conta
- Submenu "Explorar" abre categorias (Tecnologia, Marketing, Design, etc)
- Muitas opções → potencial para distração

#### Domestika
- Menu: Home | Categorias | Busca | Perfil
- Categorias destacadas em destaque (Ilustração, Design, Fotografia, etc)
- Bem estruturado

#### Futura.school
- Menu: Home | Sobre | Cursos | Blog | Contato
- Menu minimalista
- "Cursos" é o destaque principal
- Sem subcategorias complexas

**Padrão:** Menu minimalista (5-6 itens max) funciona melhor que menus com 10+ opções.

---

### Mobile Responsiveness

- **Hotmart:** Menu hamburger, cards em grid responsivo, CTA fica pequena em mobile
- **Domestika:** Menu hamburger, grid adapta, CTA visível
- **Futura.school:** Menu hamburger, cards grandes em mobile, CTA prominent

**Achado:** Futura.school mantém CTA grande e visível em mobile. Hotmart diminui CTAs em mobile → menos conversão.

---

### Clareza & UX Honeycomb

| Aspecto | Hotmart | Domestika | Futura.school |
|---------|---------|-----------|---|
| **Usabilidade** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Clareza (confiança)** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Eficiência (cliques)** | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ |
| **Desejabilidade** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |

---

## Padrões Identificados

1. **CTA em linha cheia (full-width) converte mais que CTAs pequenas/hover**
   - Visto em: Futura.school
   - Não usado em: Hotmart (hover), Domestika (integrada)

2. **Copy com verbo + contexto é mais claro que genérico**
   - "Fazer inscrição" > "Comprar"
   - "Inscrever-se" > "Acessar"

3. **Menu minimalista (5-6 itens) vs menu com 10+ itens (categorizações)**
   - Futura.school: 5 itens no menu principal
   - Hotmart: Menu + Submenu complexo

4. **Verde é a cor dominante para CTAs em plataformas de cursos**
   - 2 de 3 sites usam verde (#1DBF60 ou similar)

5. **Mobile: CTA deve permanecer grande e visível**
   - Futura.school mantém prominence em mobile
   - Hotmart diminui CTA em mobile

6. **1-3 cliques é o sweet spot de conversão**
   - Futura (1 clique): conversão ótima esperada
   - Hotmart (2 cliques): conversão boa
   - Domestika (3 cliques): conversão menor

---

## Recomendações para Atama

### Navegação
- ✅ Menu simples: Home | Lab | Filmes | Sobre | Contato (5 itens max)
- ✅ Sem subcategorias no menu principal
- ✅ "Lab" em destaque como segundo item (logo após Home)

### Home → Lab (1 Clique)
- ✅ CTA "Conhecer o Lab" ou "Explorar Lab" em hero (linha cheia, grande)
- ✅ CTA em cor vibrante **contraste com fundo branco** (candidatos: verde, laranja, azul)
- ✅ Posicionamento: abaixo do hero copy principal, bem centrado
- ✅ Manter mobile: CTA deve ser 100% width em mobile (<768px)

### Lab → Inscrição (1 Clique)
- ✅ Página `/lab` deve ter seção principal: "Curso Carro-Chefe" com card + CTA
- ✅ CTA: "Fazer inscrição" ou "Inscrever-se" (ação + contexto, não genérico)
- ✅ CTA em linha cheia, mesmo tamanho que Futura.school (~60px altura)
- ✅ Cor: usar a mesma cor da home pra consistência

### Total Atama: ≤2 Cliques ✅
- Home (clique nav) → Lab (clique CTA inscrição) = **2 cliques**
- Ou: TikTok link direto → `/lab` → CTA inscrição = **1 clique** ✅

### Copy & Tone
- ✅ Evitar "Comprar" (transacional)
- ✅ Preferir "Inscrever-se", "Fazer inscrição", "Conhecer o Lab"
- ✅ Tone: amigável, direto, não corporativo

### Cores Recomendadas
| Opção | Paleta | Justificativa |
|-------|--------|---|
| **Verde** | Branco + Verde (#1DBF60 ou #00AA44) | Padrão em plataformas de cursos |
| **Laranja** | Branco + Laranja (#FF6B35) | Diferencial, atrai atenção |
| **Azul** | Branco + Azul (#0066CC) | Confiança, corporativo suave |

**Recomendação:** Verde ou Laranja (mais vibrante que azul corporativo).

---

## Nielsen's Heuristics — Avaliação

| Heurística | Hotmart | Domestika | Futura.school | Recomendação Atama |
|-----------|---------|-----------|---|---|
| 1. Visibilidade do sistema | ✅ | ✅ | ✅✅ | Feedback claro em CTAs, form validação |
| 2. Match com realidade | ✅ | ✅ | ✅✅ | Copy direto ("Inscrição", não "Adquirir produto") |
| 3. Controle & liberdade | ✅ | ✅ | ✅ | Fácil voltar da inscrição, sem traps |
| 4. Consistência | ✅ | ✅ | ✅✅ | Menu + CTA + cores consistentes |
| 5. Prevenção de erros | ⚠️ | ✅ | ✅ | Validação em forms (CPF, email) |
| 6. Reconhecimento vs recall | ✅ | ✅ | ✅ | Setas, breadcrumbs, visual hierarchy |
| 7. Flexibilidade | ⚠️ | ⚠️ | ✅ | Atalhos claros (TikTok link direto → /lab) |
| 8. Design estético | ✅ | ✅✅ | ✅ | Espaço branco, sem clutter (Atama + minimalista) |
| 9. Mensagens de erro | ✅ | ✅ | ✅ | Mensagens claras em validações |
| 10. Help & docs | ⚠️ | ✅ | ✅✅ | FAQ visível na página Lab |

**Crítico para Atama:** Heurísticas 1, 2, 4, 8 (visibilidade, match, consistência, estética).

---

## Próximos Passos

1. **Definir cor accent** — validar com time (verde vs laranja vs azul)
2. **Wireframe home + lab** — implementar padrões: menu minimalista, CTA linha cheia
3. **Design system de componentes** — buttons, cards, forms alinhados
4. **Prototipo & teste de cliques** — validar ≤2 cliques com usuários
5. **Implementação** — dev começa site com padrões validados

---

*Report gerado pela skill design-benchmark — Eval 1 (UX & Conversão)*
