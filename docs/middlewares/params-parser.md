---
title: Params Parser
editLink: true
---

# {{ $frontmatter.title }}

`@lottojs/params-parser` is one of our built-in middlewares that enable you to parse the query and path parameters coming from http requests.

[[toc]]

## Supported Parameters

- Path Parameters
- Query Parameters

## Path Parameters

The path parameters if there are on the handled route always will be available at `req.params` object and you can retrieve it in 2 ways:

1. [`req.params`](../api/request#params) object.

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

The query parameters if there are on the handled route always will be available at `req.query` object and you can retrieve it in 2 ways:

1. [`req.query`](../api/request#query) object.

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

## Standalone use

Is also possible to use it on a standalone way on other projects that aren't using `Lotto`.

Whe export a function called `paramsParser` and expects a parameter containing the url that is being caleld at the moments and returns a function where you can pass the `req` object coming from your http server and also a `next` function in order to your project can follow the next calls.

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

If you are interested on how it works more deep, please take a look on the code on [Github](https://github.com/lottojs/params-parser).