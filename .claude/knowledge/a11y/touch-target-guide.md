# Guia Operacional de Touch Targets

## Referências WCAG

| Critério | Nível | Requisito |
|---|---|---|
| **2.5.5** | AAA | Alvos de interação ≥ 44 × 44 px CSS |
| **2.5.8** | AA | Alvos de interação ≥ 24 × 24 px CSS (WCAG 2.2) |

---

## Guidelines de Plataforma

| Plataforma | Mínimo recomendado | Referência |
|---|---|---|
| **iOS (Apple HIG)** | 44 × 44 pt | Human Interface Guidelines |
| **Android (Material 3)** | 48 × 48 dp | Material Design Guidelines |
| **WCAG 2.5.8 (AA)** | 24 × 24 px CSS | WCAG 2.2 |
| **WCAG 2.5.5 (AAA)** | 44 × 44 px CSS | WCAG 2.1 |

---

## Exceções (WCAG 2.5.5)

- Existe alvo equivalente na mesma página com tamanho adequado
- Alvos inline (ex.: links em parágrafos)
- Tamanho definido pelo user agent e não modificado
- Tamanho específico é essencial para a apresentação

## Exceções (WCAG 2.5.8)

- Espaçamento: se o alvo + espaçamento ao redor totaliza ≥ 24px
- Equivalente: existe alvo equivalente com tamanho adequado
- Inline: links em texto corrido
- User agent: tamanho definido pelo browser/OS
- Essencial: tamanho específico é essencial

---

## Procedimento de Verificação

### 1. Identificar elementos interativos
- Botões (todos os tipos)
- Links
- Checkboxes, radio buttons, switches
- Ícones clicáveis
- Inputs e selects
- Tabs, chips, tags
- Itens de lista clicáveis

### 2. Medir tamanho efetivo
O tamanho que conta é a **área clicável**, não o tamanho visual:
- Botão com ícone 16px mas padding de 14px em cada lado = 44px ✅
- Ícone 24px sem padding = 24px (AA, mas não AAA) ⚠️

### 3. Verificar espaçamento entre alvos
- Alvos próximos devem ter espaçamento suficiente para evitar toque acidental
- Mínimo recomendado entre alvos: 8px

### 4. Classificar resultado

| Tamanho | iOS | Android | WCAG AA | WCAG AAA |
|---|---|---|---|---|
| ≥ 48dp | ✅ | ✅ | ✅ | ✅ |
| ≥ 44pt | ✅ | ⚠️ | ✅ | ✅ |
| ≥ 24px | ❌ | ❌ | ✅ | ❌ |
| < 24px | ❌ | ❌ | ❌ | ❌ |

---

## Componentes do DS com Atenção Especial

- **Icon buttons** sem padding — verificar área efetiva
- **Text links** em parágrafos — exceção inline, mas verificar legibilidade
- **Chips/Tags** em tamanho small — verificar se atingem mínimo
- **Elementos de formulário** custom — verificar área de toque real
- **Close buttons** em modais/toasts — frequentemente abaixo do mínimo

---

## Procedimento via Figma MCP

1. Usar `get_node_info` para obter `absoluteBoundingBox` (width, height)
2. Comparar com mínimos da plataforma alvo
3. Se menor que o mínimo, verificar se há padding/hit area invisível
4. Registrar: elemento | tamanho visual | tamanho efetivo | plataforma | veredicto
