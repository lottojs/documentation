---
title: Params Parser
editLink: true
---

# {{ $frontmatter.title }}

`@lottojs/params-parser` è uno dei nostri built-in middlewares che ti consente di analizzare i parametri di query e percorso provenienti dalle richieste http.

[[toc]]

## Parametri supportati

- Path Parameters
- Query Parameters

## Path Parameters

I parametri path, se presenti sulla rotta gestita, saranno sempre disponibili nell'oggetto `req.params` e potrai recuperarli in 2 modi:

1. Oggetto [`req.params`](../api/request#params).

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

I parametri di query, se presenti sulla rotta gestita, saranno sempre disponibili nell'oggetto `req.query` e potrai recuperarli in 2 modi:

1. Oggetto [`req.query`](../api/request#query).

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

## Utilizzo autonomo

È anche possibile utilizzarlo in modo autonomo su altri progetti che non utilizzano `Lotto`.

Esportiamo una funzione chiamata `paramsParser` e aspettiamo un parametro contenente l'URL che viene chiamato in quel momento e restituisce una funzione in cui puoi passare l'oggetto `req` proveniente dal tuo server http e anche una funzione `next` affinché il tuo progetto possa seguire le chiamate successive.prossime.

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

Se sei interessato a come funziona in modo più approfondito, dai un'occhiata al codice su [Github](https://github.com/lottojs/params-parser).