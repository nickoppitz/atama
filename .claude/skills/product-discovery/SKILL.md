---
name: product-discovery
description: >
  Use quando o usuario jogar um pedido amorfo ou vago que precisa
  ser explorado antes de virar demanda. Tambem use quando precisar
  descobrir o que construir antes de decidir como construir.
---

# Product Discovery

Processo para transformar pedidos vagos ou oportunidades em demandas claras com escopo de MVP.

## Quando usar

- Usuario joga pedido no chat sem saber exatamente o que esta pedindo
- Nova area de feature precisa ser explorada
- PM precisa descobrir o que construir antes de decidir como
- Intersecao de produto com design precisa ser investigada

## Processo

### 1. Entender a intencao
- O que o usuario disse? (pedido literal)
- O que provavelmente quer resolver? (necessidade real)
- Qual o contexto que motivou esse pedido?
- Ha urgencia real ou percebida?

### 2. Mapear o espaco de oportunidade
- Quem se beneficia se resolvermos isso?
- Que problema e resolvido?
- Que valor e criado? (para o usuario final e para o negocio)
- Que KPI do MVP isso impacta?

### 3. Identificar premissas
- O que estamos assumindo sobre o usuario?
- O que estamos assumindo sobre o comportamento?
- O que estamos assumindo sobre a viabilidade?
- Quais premissas sao mais arriscadas?

### 4. Definir escopo MVP (Pareto)
- Qual a versao mais simples que valida a premissa core?
- O que podemos NAO fazer e ainda entregar valor?
- 30% de esforco que entrega 70% do resultado — qual e?

### 5. Envolver PD (se aplicavel)
Se o problema tem implicacoes de interface:
- Que conceito de UI validaria a premissa?
- Qual o fluxo minimo viavel?
- Ha padroes existentes no DS que podemos reutilizar?

## Output esperado

```
## Discovery: [topico]

### Problema/Oportunidade
[O que estamos tentando resolver, em 2-3 frases]

### Quem se beneficia
[Perfil do usuario + contexto de uso]

### Premissa core a validar
[A premissa mais importante — se estiver errada, nada mais importa]

### Escopo MVP (versao Pareto)
[O minimo que entrega valor e valida a premissa]

### O que NAO estamos construindo (scope out explicito)
- [item fora de escopo 1]
- [item fora de escopo 2]

### Criterios de sucesso
- [como saber se funcionou]
- [que KPI impacta]

### Proximo passo
[acao imediata: delegar ao PD? ao Dev? validar com usuario?]
```

## Gotchas
- Discovery nao e analysis paralysis. Time-box. O objetivo e construir, nao planejar pra sempre
- Scope out explicito e tao importante quanto scope in — sem ele o escopo cresce silenciosamente
- Se a premissa core nao esta clara, nada mais importa — encontre ela primeiro
- Envolver PD cedo quando o problema tem cara de interface — nao espere ter tudo definido
- "Vamos fazer tudo" nao e discovery, e wishlist. Priorizar e o trabalho
