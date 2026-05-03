# Guia Operacional de Contraste de Cor

## Referências WCAG

| Critério | Nível | Requisito | Aplicação |
|---|---|---|---|
| **1.4.3** | AA | 4.5:1 mínimo | Texto normal (< 24px regular, < 18.66px bold) |
| **1.4.3** | AA | 3:1 mínimo | Texto grande (≥ 24px regular ou ≥ 18.66px bold) |
| **1.4.6** | AAA | 7:1 mínimo | Texto normal |
| **1.4.6** | AAA | 4.5:1 mínimo | Texto grande |
| **1.4.11** | AA | 3:1 mínimo | Componentes de UI e objetos gráficos |

---

## Exceções

- Texto incidental (decorativo, inativo, não essencial)
- Logotipos (sem exigência de contraste)
- Componentes inativos/disabled
- Aparência padrão do user agent não modificada

---

## Procedimento de Verificação

### 1. Identificar pares de cor
Para cada elemento, registrar:
- Cor do foreground (texto, ícone, borda)
- Cor do background (superfície imediatamente abaixo)
- Contexto (texto normal, texto grande, UI element)

### 2. Calcular ratio
- Fórmula: (L1 + 0.05) / (L2 + 0.05) onde L1 é a luminância relativa mais clara
- Ferramentas: WebAIM Contrast Checker, Figma plugin "Contrast"

### 3. Classificar resultado

| Ratio | Texto normal | Texto grande | UI/Gráficos |
|---|---|---|---|
| ≥ 7:1 | AAA ✅ | AAA ✅ | AA ✅ |
| ≥ 4.5:1 | AA ✅ | AAA ✅ | AA ✅ |
| ≥ 3:1 | ❌ | AA ✅ | AA ✅ |
| < 3:1 | ❌ | ❌ | ❌ |

### 4. Verificar estados
Contraste deve ser mantido em **todos os estados**:
- Default
- Hover/Focus
- Pressed/Active
- Selected
- Error/Warning/Success

---

## Tokens do DS com Atenção Especial

Verificar contraste sempre que usar:
- `$text-secondary` sobre superfícies claras
- `$text-disabled` (exceção WCAG, mas verificar legibilidade)
- `$text-inverse` sobre superfícies escuras
- `$border-subtle` sobre backgrounds (critério 1.4.11)
- Ícones informativos sobre qualquer superfície (critério 1.4.11)

---

## Procedimento via Figma MCP

1. Usar `get_node_info` para obter fills do elemento e do parent
2. Extrair valores de cor (RGB/hex)
3. Calcular luminância relativa e ratio
4. Comparar com os limites WCAG aplicáveis
5. Registrar: elemento | foreground | background | ratio | veredicto
