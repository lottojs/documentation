---
title: Params Parser
editLink: true
---

# {{ $frontmatter.title }}

`@lottojs/params-parser` é um de nossos built-in middlewares que permite analisar os query e path parameters provenientes de solicitações HTTP

[[toc]]

## Parâmetros Suportados

- Path Parameters
- Query Parameters

## Path Parameters

Caso hajam  path parameters na rota tratada, sempre estarão disponíveis no objeto `req.params` e você pode recuperá-los de 2 maneiras:

1. Objeto [`req.params`](../api/request#params).

```typescript
lotto.get('/user/:id', ({ req, res}) => {
  const { id } = req.params;
  ...
})
```
2. [`req.param`](../api/request#param) helper.

```typescript
lotto.get('/user/:id', ({ req, res}) => {
  const userId = req.param('id');
  ...
})
```

## Query Parameters

Caso hajam query parameters na rota tratada, sempre estarão disponíveis no objeto `req.query` e você pode recuperá-los de 2 maneiras:

1. Objeto [`req.query`](../api/request#query).

```typescript
lotto.get('/user', ({ req, res}) => {
  const { gclid } = req.query;
  ...
})
```
2. [`req.get`](../api/request#get) helper.

```typescript
lotto.get('/user/', ({ req, res}) => {
  const gclid = req.get('gclid');
  ...
})
```

## Uso Autônomo

Também é possível utilizá-lo de forma autônoma em outros projetos que não utilizem o `Lotto`.

Ao exportar uma função chamada `paramsParser` e espera um parâmetro contendo a url que está sendo chamada no momento e retorna uma função onde você pode passar o objeto `req` vindo do seu servidor http e também uma função `next` para seu projeto poder executar as próximas chamadas.

```typescript
import { createServer } from 'node:http';
import { paramsParser } from '@lottojs/params-parser';

createServer(
    async (req: IncomingMessage, res: ServerResponse) => {
            ...
            paramsParser(req.url)(req, next())
            ...
    },
)
```

## Github

Se você estiver interessado em saber como funciona mais profundamente, dê uma olhada no código no [Github](https://github.com/lottojs/params-parser).