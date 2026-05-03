# WCAG — Regras de Acessibilidade

## 1.4.3 — Contraste Mínimo (AA)
A apresentação visual de **texto** e **imagens de texto** deve ter **contraste mínimo de 4,5:1**.

**Exceções:**
- **Texto grande** (≥ 24px regular ou ≥ 18,66px em negrito): contraste mínimo de **3:1**
- Texto incidental (decorativo, inativo ou não essencial)
- **Logotipos** (sem exigência de contraste)

---

## 1.4.6 — Contraste Melhorado (AAA)
A apresentação visual de **texto** e **imagens de texto** deve ter **contraste mínimo de 7:1**.

**Exceções:**
- **Texto grande**: contraste mínimo de **4,5:1**
- Texto incidental
- **Logotipos**

---

## 1.4.11 — Contraste Não Textual (AA)
A apresentação visual deve garantir **contraste mínimo de 3:1** em relação às cores adjacentes para:

- **Componentes de interface do usuário** e seus estados (ex.: bordas, ícones, controles)
- **Objetos gráficos** necessários para compreender o conteúdo

**Exceções:**
- Componentes inativos
- Aparência padrão do user agent não modificada pelo autor
- Casos em que a apresentação visual seja essencial

---

## 2.4.3 — Ordem do Foco (A)
Quando uma página pode ser navegada sequencialmente e a sequência afeta o **significado** ou a **operação**, os elementos devem receber foco em uma ordem que preserve **sentido lógico** e **usabilidade**.

---

## 2.4.7 — Foco Visível (AA)
Todo componente de interface operável por teclado deve apresentar um **indicador de foco visível** quando recebe foco por teclado.

---

## 2.4.12 — Foco Não Obscurecido (AAA)
Quando um componente de interface recebe foco por teclado, **nenhuma parte dele pode ficar oculta** por conteúdo criado pelo autor.

---

## 2.4.13 — Aparência do Foco (AAA)
Quando o indicador de foco do teclado estiver visível:

- A **área do indicador** deve ser **igual ou maior** que o perímetro de **2px CSS** ao redor do componente (ou subcomponente) sem foco
- Deve haver **contraste mínimo de 3:1** entre os mesmos pixels nos estados **com foco** e **sem foco**

**Exceções:**
- Indicadores definidos pelo user agent e não customizáveis
- Casos em que o autor não altera nem o indicador nem o fundo

---

## 2.5.5 — Tamanho Alvo Melhorado (AAA)
Os alvos para interação por ponteiro devem ter **mínimo de 44 × 44 px CSS**.

**Exceções:**
- Existe um alvo equivalente na mesma página com tamanho adequado
- Alvos inline (ex.: links em parágrafos)
- Tamanho definido pelo user agent e não modificado
- Quando o tamanho específico é essencial para a apresentação