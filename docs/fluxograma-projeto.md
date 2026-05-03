# Fluxograma — Estrutura Inicial do Projeto Atama

**Responsável:** Nicolas (PM + Design)
**Versão:** V1
**KPI validado:** Conversão site → Lab em menos de 2 cliques

---

## Premissas

- **Duas personas distintas** com jornadas diferentes no mesmo site
- **KPI crítico:** usuário chega ao checkout em ≤ 2 cliques a partir de qualquer ponto de entrada
- **Único domínio:** site institucional e Lab integrados
- **V1 sem motion design** — estrutura e conteúdo, não efeitos visuais

---

## Personas

| Persona | Quem é | Objetivo no site | Canal de entrada |
|---------|--------|-----------------|-----------------|
| **Parceiro** | Distribuidor, coprodutor, festival, imprensa | Conhecer a produtora, ver projetos, estabelecer contato | Busca, indicação profissional, LinkedIn |
| **Aluno Potencial** | Produtor iniciante do RS/Brasil, pós-LPG, sem formação formal | Entender o Lab, inscrever no Curso Carro-Chefe | TikTok, Instagram, WhatsApp, boca a boca |

---

## Fluxograma Principal

```mermaid
flowchart TD
    %% ENTRADAS
    A1([TikTok / Instagram]) --> HOME
    A2([WhatsApp / Boca a Boca]) --> HOME
    A3([Busca / LinkedIn]) --> HOME
    A4([QR Code / Divulgação]) --> LAB

    %% HOME
    HOME["🏠 Home\n━━━━━━━━━━━\nHero: identidade visual\nAtama Filmes + Lab\n\n• CTA → Lab  ← 1 CLIQUE KPI\n• CTA → Filmes\nNav: Filmes | Sobre | Lab"]

    %% DECISÃO NO HOME
    HOME --> D1{O que o usuário\nquer?}
    D1 -->|"Parceiro: conhecer\na produtora"| FILMES
    D1 -->|"Aluno: aprender\naudiovisual"| LAB

    %% JORNADA PARCEIRO
    FILMES["🎬 Filmes\n━━━━━━━━━━━\nPortfólio de projetos\n(Beyond Us, séries, docs)\nFestivais e prêmios\nFormatos: TV, cinema, web"]
    FILMES --> SOBRE
    SOBRE["👥 Sobre\n━━━━━━━━━━━\nRogério + Rose\nHistória da Atama\nFilosofia autoral\nCase: Comer, Beber e Aprender"]
    SOBRE --> CONTATO["📬 Contato\n━━━━━━━━━━━\nFormulário\nEmail\nRedes sociais"]

    %% JORNADA ALUNO — KPI CRÍTICO
    LAB["🧪 Lab\n━━━━━━━━━━━\nO que é o Atama Lab\nCurso Carro-Chefe em destaque\n\nFormato: 2 semanas, 20h\nMentores: Rogério + Rose\nCase: Evelyn (aluna→realizadora)\n\n• CTA → Inscrição  ← 2 CLIQUES KPI"]

    LAB --> D2{Usuário decide\nse inscrever?}
    D2 -->|Sim| CHECKOUT
    D2 -->|"Ainda na dúvida"| FAQ["❓ Dúvidas Frequentes\n(inline na página Lab)\n• Nível exigido\n• Formato presencial\n• Local: Casa da Chácara\n• Investimento"]
    FAQ --> D2

    %% CHECKOUT
    CHECKOUT["💳 Checkout\n━━━━━━━━━━━\nMercado Pago\nPIX / Cartão\nNota fiscal (Marcelo)\n\nDados: nome, email,\ntelefone, CPF"]

    CHECKOUT --> D3{Pagamento\naprovado?}
    D3 -->|Sim| CONFIRMACAO
    D3 -->|Não| ERRO["⚠️ Erro de pagamento\nOrientação para\ntentativa alternativa"]
    ERRO --> CHECKOUT

    %% CONFIRMAÇÃO
    CONFIRMACAO["✅ Confirmação\n━━━━━━━━━━━\nEmail de boas-vindas\nDetalhes da turma\nGrupo WhatsApp\nCalendário"]

    CONFIRMACAO --> INSCRITO(["🎓 Aluno inscrito\nKPI atingido: +1 inscrição"])

    %% ESTILO
    style HOME fill:#f5f5f5,stroke:#333,color:#000
    style LAB fill:#e8f4f8,stroke:#0066cc,color:#000
    style CHECKOUT fill:#e8f8e8,stroke:#009900,color:#000
    style CONFIRMACAO fill:#e8f8e8,stroke:#009900,color:#000
    style INSCRITO fill:#009900,stroke:#009900,color:#fff
    style CONTATO fill:#f5f5f5,stroke:#999,color:#000
```

---

## Validação do KPI: Conversão ≤ 2 Cliques

| Ponto de entrada | Clique 1 | Clique 2 | Resultado |
|-----------------|---------|---------|-----------|
| Home | → Lab | → Inscrição/Checkout | ✅ 2 cliques |
| QR Code / Link direto | (aterrisssa no Lab) | → Inscrição/Checkout | ✅ 1 clique |
| TikTok com link na bio | → Home | → Lab (na nav) → Inscrição | ⚠️ 3 cliques |

> **Decisão de design:** o link na bio do TikTok deve apontar **diretamente para o Lab**, não para o Home. Isso garante ≤ 2 cliques para qualquer canal social.

---

## Páginas do Site V1 (mapeadas)

| Página | URL sugerida | Prioridade | Serve qual KPI |
|--------|-------------|-----------|----------------|
| Home | `/` | Alta | Conversão → Lab |
| Lab | `/lab` | **Crítica** | Inscrições + Conversão |
| Filmes | `/filmes` | Média | Credibilidade (parceiros) |
| Sobre | `/sobre` | Média | Credibilidade (parceiros) |
| Contato | `/contato` | Baixa | Parceiros |
| Checkout | `/lab/inscricao` | **Crítica** | Pagamento funcional |
| Confirmação | `/lab/confirmacao` | Alta | Inscrições |

**Total: 7 páginas para o V1.**

---

## Dependências identificadas

| Dependência | Bloqueia | Owner | Status |
|-------------|---------|-------|--------|
| Definir plataforma de cursos (Hotmart, Kiwify, própria) | URL de checkout, integração de pagamento | Nicolas + Discovery | ⚠️ Pendente |
| Validar serviço de pagamento (Mercado Pago) | Checkout funcional | Nicolas + Marcelo | ⚠️ Pendente |
| Confirmar espaço Lab (Casa da Chácara) | Copy e detalhes da página Lab | Rose + Laura | ⚠️ Pendente |
| Definir preço do Curso Carro-Chefe | Copy do CTA + checkout | Nicolas + Rogério + Rose | ⚠️ Pendente |
| Syllabus do Curso | Conteúdo da página Lab | Rogério + Rose | ⚠️ Pendente |

> **Crítico:** a decisão de plataforma de cursos bloqueia TODO o backlog técnico do V1.

---

## Próximos passos gerados por este fluxograma

1. **[Discovery] Validar plataforma de cursos** — desbloqueador técnico #1
2. **[Discovery] Validar serviço de pagamento** — validar Mercado Pago com Marcelo
3. **[Site V1] Wireframes e Protótipo** — este fluxograma é o input direto
4. **Decisão de link da bio** nas redes sociais → apontar para `/lab`, não `/`

---

*Gerado em 2026-05-03 — Nicolas (PM + Design) com Claude Code*
