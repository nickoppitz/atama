# WCAG — Requisitos Mínimos para Leitura de Tela em Apps Mobile

## 1. Aplicação da WCAG em apps mobile
As **WCAG (2.1 e 2.2)** se aplicam a **aplicativos mobile** (nativos, híbridos ou webviews).  
Não existe um conjunto separado de regras apenas para mobile, mas há **documentos de orientação (WCAG2Mobile)** que explicam como aplicar os critérios em contextos móveis, sem criar novos requisitos normativos.

---

## 2. Requisitos mínimos para leitura de tela

### 2.1 Textos e alternativas textuais
- Todo **conteúdo textual** deve ser legível por leitores de tela.
- **Conteúdos não textuais** (imagens, ícones, ilustrações, gráficos) devem possuir **alternativa textual** quando transmitirem informação ou função.
- Textos devem permitir **redimensionamento** sem perda de informação.

Critérios relacionados:
- **1.1.1 — Conteúdo Não Textual (A)**
- **1.4.4 — Redimensionar Texto (AA)**

---

### 2.2 Semântica e rotulagem
- Componentes interativos devem expor:
  - **Nome acessível (label)**
  - **Função (role)**
  - **Estado (state)** quando aplicável
- Rótulos devem ser **claros, descritivos e únicos**.
- Evitar rótulos genéricos como “botão” ou “clique aqui”.

Critérios relacionados:
- **1.3.1 — Informação e Relações (A)**
- **2.5.3 — Label in Name (A)**
- **4.1.2 — Nome, Função, Valor (A)**

---

### 2.3 Ordem de leitura e foco
- A navegação por foco/leitor de tela deve seguir uma **ordem lógica e previsível**.
- A sequência deve preservar **significado, hierarquia e fluxo da interface**.
- Elementos ocultos visualmente não devem ser lidos indevidamente.

Critérios relacionados:
- **2.4.3 — Ordem do Foco (A)**
- **1.3.2 — Sequência Significativa (A)**

---

### 2.4 Compatibilidade com tecnologias assistivas
- A interface deve ser construída usando os **componentes e APIs nativas de acessibilidade** da plataforma:
  - iOS: Accessibility API
  - Android: AccessibilityNodeInfo
- Estados como **selecionado, desabilitado, expandido/colapsado** devem ser corretamente expostos.

Critérios relacionados:
- **4.1.1 — Análise (A)**
- **4.1.2 — Nome, Função, Valor (A)**

---

### 2.5 Clareza de instruções e feedback
- Instruções não devem depender apenas de **cor, forma ou posição**.
- Mudanças de estado importantes devem ser **anunciadas ao leitor de tela** (ex.: erro, sucesso, carregamento).

Critérios relacionados:
- **1.3.3 — Características Sensoriais (A)**
- **3.3.1 — Identificação de Erro (A)**

---

## 3. Princípio POUR aplicado à leitura de tela

### Perceptível
- Conteúdo deve ser percebido via áudio pelo leitor de tela.

### Operável
- Interface navegável por foco e gestos assistivos.

### Compreensível
- Labels, mensagens e instruções claras quando lidas em voz alta.

### Robusto
- Compatível com leitores de tela atuais e futuros.

---

## 4. Critérios WCAG mais críticos para leitura de tela em mobile

| Critério | Descrição |
|--------|-----------|
| 1.1.1 (A) | Conteúdo não textual com alternativa textual |
| 1.3.1 (A) | Estrutura e relações semânticas |
| 1.3.2 (A) | Ordem de leitura significativa |
| 2.4.3 (A) | Ordem correta do foco |
| 2.5.3 (A) | Label visível compatível com nome acessível |
| 4.1.2 (A) | Nome, função e valor expostos à tecnologia assistiva |

---

## 5. Resumo — checklist mínima para apps mobile

- [ ] Todos os elementos relevantes são lidos pelo leitor de tela  
- [ ] Imagens e ícones funcionais têm alternativa textual  
- [ ] Componentes têm label, role e state corretos  
- [ ] Ordem de leitura/foco é lógica  
- [ ] Estados e feedbacks são anunciados  
- [ ] Uso correto das APIs nativas de acessibilidade  

---

## Observação final
A WCAG define o **mínimo normativo**.  
Para apps mobile, recomenda-se complementar com **guidelines específicas de iOS e Android** para garantir uma experiência consistente com leitores de tela como VoiceOver e TalkBack.