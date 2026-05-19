# ATA DE REUNIÃO — ATAMA WEEKLY

**Data:** 18 de maio de 2026
**Local:** Remoto (Google Meet)
**Duração:** ~52 minutos
**Facilitador:** Nicolas Oppitz

---

## PARTICIPANTES

- **Rogério Rodrigues** — Co-fundador, diretor
- **Rose França** — Co-fundadora, produtora
- **Nicolas Oppitz** — PM / Tech Lead / Product Designer

---

## CONTEXTO & OBJETIVOS

Primeira reunião de apresentação do site V1 em desenvolvimento. Nicolas compartilhou a tela mostrando a homepage com as duas variantes de header (A/B) e a seção do Atama Lab. O foco foi colher feedback dos fundadores sobre as escolhas de design, estrutura de navegação e roadmap de conteúdo. Ao final, o grupo discutiu a integração de pagamento para o Lab.

**13 dias restantes para o lançamento do V1 (31/05/2026).**

---

## DECISÕES TOMADAS

### 1. Hospedagem — Migração KingHost para Node.js

**Decisão:** Nicolas vai migrar diretamente o plano na KingHost para suportar Node.js (tecnologia do novo site). Rogério e Rose estão cientes e aprovam — Nicolas coordena com o suporte da KingHost sem envolver os fundadores.

---

### 2. Carousel de Projetos — Carrossel Horizontal com Vídeos Curtos

**Decisão:** Manter o carousel horizontal com slides individuais por obra (não vídeo único em loop como a Vulcana). Justificativas:
- UX: usuário consegue abstrair por projeto específico
- SEO: conteúdo separado por obra ranqueia melhor nos buscadores
- Manutenção: mais fácil atualizar — troca-se um slide sem reeditar o todo

**Conteúdo dos slides:** vídeos curtos de 7–8 segundos. Primeiro teste: converter trailers existentes do Vimeo via serviço de IA. Se não ficar bom, a Atama edita versões curtas internamente.

**Quantidade:** máximo 5 obras em destaque na home. O restante fica na galeria de projetos.

---

### 3. Nomenclatura Interna — Projetos vs. Obras

**Decisão:** Adotar terminologia correta daqui em diante:
- **Projetos** = produções em desenvolvimento (editais, pré-produção)
- **Obras** = produções realizadas e finalizadas

Impacto no menu: discutido, mas não finalizado. Candidatos debatidos: *Cinema / TV / Projetos / Sobre / Contato*. Rogério propõe separar por linguagem (Cinema e TV), Rose concorda. Nicolas vai considerar para a próxima apresentação.

---

### 4. Depoimentos na Home — Removidos do V1

**Decisão:** Remover a seção de depoimentos da homepage. O depoimento da Evelyn Fernandes (sugerido pela IA) é inválido — ela participou de uma oficina do Icine ministrada por Rogério, não de um curso do Atama Lab. O Atama Lab ainda não rodou sua primeira turma, portanto não há depoimentos reais. Espaço reservado para pós-V1.

---

### 5. Atama Lab na Home — Aprovado com Texto Curto

**Decisão:** Manter a seção do Atama Lab logo abaixo do carousel na homepage. Rogério e Rose aprovam a estrutura: o texto deve ser curto e direto, funcionando como chamada para a página `/lab`. Nenhuma seção adicional além de carousel + Atama Lab + footer para o V1.

---

### 6. Plataforma de Pagamento — Mercado Pago como Preferência

**Decisão (pendente de pesquisa):** Mercado Pago é o candidato preferido por ser nacional, ter comunidade forte no Brasil e ter taxas competitivas. Rogério vai pesquisar e contatar o Mercado Pago para confirmar.

**Premissas confirmadas:**
- Boleto: descartado
- Formas aceitas: cartão de crédito + Pix (Pix pode ser chave direta da Atama)
- Taxas: a Atama absorve — não repassa ao aluno
- Parcelamento: a definir (ex: 2x ou 3x sem acréscimo)

**Fiscal (Marcelo, contador):** confirmou que consegue contabilizar independente da plataforma. Se o sistema não emitir nota individual, ele emite uma nota da Atama para um CPF dos sócios e contabiliza a entrada. Alunos de cursos geralmente não pedem nota.

---

### 7. Página Sobre — Memória Afetiva e Ano de Fundação

**Decisão:**
- Corrigir ano de fundação: **2012** (CNPJ é 2010, mas a Atama foi aberta em 2012 — sempre foi a data usada)
- Resgatar o carrossel histórico de fotos da Atama (que estava no site antigo) como seção de **memória afetiva** na página Sobre — não como carrossel repetido, mas como fotos diagramadas editorialmente entre texto (layout editorial)
- Nicolas vai considerar isso no refinamento da página Sobre

---

## RISCOS IDENTIFICADOS

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| Trailers do Vimeo não convertirem bem em 7-8s por IA | Carousel sem vídeo no lançamento | Fallback: usar imagens estáticas ou editar vídeos curtos internamente |
| Mercado Pago não atender às necessidades (taxa, cartão parcelado) | Bloqueio no checkout do Lab | Stripe como backup; Pix direto como fallback mínimo |
| Sem preço definido do curso → checkout não pode ser implementado | Bloqueio crítico do Lab | Rogério/Rose precisam definir até 22/05 |
| Obras e fotos históricas do site antigo perdidas no servidor | Sem memória afetiva no Sobre | Rogério verifica se tem arquivos locais; Nicolas tenta recuperar do servidor |

---

## DÚVIDAS EM ABERTO

1. **Menu final:** Cinema / TV / Projetos / Sobre / Contato — ou outra ordem? (Rogério/Rose definem junto com Nicolas)
2. **Header A ou B?** Rogério e Rose viram as duas opções mas não decidiram formalmente na reunião
3. **Preço do curso e parcelamento:** não discutido — bloqueador crítico para o checkout
4. **Espaço presencial Lab:** data e local confirmados? (não discutido na reunião)
5. **Fotos históricas (carrossel antigo):** Rogério tem os arquivos em alta resolução?

---

## ACTION ITEMS

| # | Task | Responsável | Prazo | Status |
|---|------|-------------|-------|--------|
| 1 | Escolher as 5 obras para o carousel + mandar links do Vimeo | Rogério + Rose | 22/05 | ⏳ |
| 2 | Pesquisar Mercado Pago: cartão parcelado, Pix, taxas | Rogério | 22/05 | ⏳ |
| 3 | Definir preço do curso e parcelamento | Rogério + Rose | 22/05 | ⏳ |
| 4 | Migrar KingHost para plano Node.js | Nicolas | 20/05 | ⏳ |
| 5 | Testar conversão de trailers Vimeo → vídeos curtos (7-8s) via IA | Nicolas | 23/05 | ⏳ |
| 6 | Corrigir ano de fundação na página Sobre (2010 → 2012) | Nicolas | próximo refinamento | ⏳ |
| 7 | Remover seção de depoimentos da homepage | Nicolas | ✅ (já identificado) | ⏳ |
| 8 | Verificar se fotos históricas estão salvas em alta resolução | Rogério | 22/05 | ⏳ |
| 9 | Enviar transcrição da reunião para Nicolas | Rogério | 19/05 | ✅ |

---

## PRÓXIMOS PASSOS

### Esta semana (18–23/05)
- Nicolas: migrar KingHost + continuar refinamento do site
- Nicolas: testar pipeline de vídeos curtos com trailers do Vimeo
- Rogério/Rose: escolher 5 obras + mandar links
- Rogério: pesquisar/contatar Mercado Pago
- Rogério/Rose: definir preço e parcelamento do curso

### Semana seguinte (25–31/05) — Sprint final
- Nicolas: implementar checkout com Mercado Pago (após receber preço)
- Nicolas: implementar carousel com vídeos (após receber links)
- Nicolas: páginas Sobre, Projetos, Contato refinadas
- Nicolas: redirects 301, SEO técnico, Plausible Analytics
- **31/05: go-live**

---

## MATRIZ SSD

### CERTEZAS
- Carousel horizontal com slides por obra é a abordagem correta
- Máximo 5 obras em destaque na home
- Depoimentos fora do V1
- Atama Lab destacado na home, texto curto
- Mercado Pago é o candidato de pagamento
- Ano de fundação da Atama é 2012

### SUPOSICÕES
- Trailers do Vimeo convertem bem em vídeos curtos de 7-8s via IA
- Mercado Pago vai atender com cartão parcelado sem repassar taxa ao aluno
- KingHost Node.js I é suficiente para o tráfego inicial

### DÚVIDAS
- Qual o preço final do curso e parcelamento?
- Header A ou B? (decisão formal ainda pendente)
- Menu: estrutura de navegação final?
- Fotos históricas estão salvas em alta resolução?
- Espaço presencial: confirmado?

---

*Ata elaborada por Nicolas (PM) com base na transcrição da reunião de 18/05/2026.*
