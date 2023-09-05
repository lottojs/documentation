---
title: Routing
editLink: true
---

# {{ $frontmatter.title }}

Il router `Lotto` è molto intuitivo e anche estensibile.

[[toc]]

## Basic

```typescript
// Metodi HTTP
lotto.get('/', ({ res }) => res.text('GET /'))
lotto.post('/', ({ res }) => res.text('POST /'))
lotto.put('/', ({ res }) => res.text('PUT /'))
lotto.patch('/', ({ res }) => res.text('PATCH /'))
lotto.delete('/', ({ res }) => res.text('DELETE /'))

// Qualsiasi metodo HTTP
lotto.all('/', ({ res }) => res.text('ALL /'))
```

## Path Parameters

Puoi usare il nostro helper `param`...

```typescript
lotto.get('/user/:id', ({ req, res }) => {
  const userId = req.param('id')
  ...
})
```

oppure può recuperare tutti i parametri contemporaneamente:

```typescript
lotto.get('/users/:userId/group/:groupId', ({ req, res }) => {
  const { userId, groupId } = req.params
  ...
})
```

## Route concatenati

```typescript
lotto
  .get('/ping', ({ res }) => {
    return res.text('GET /pong')
  })
  .post(({ res }) => {
    return res.text('POST /pong')
  })
  .delete(({ res }) => {
    return res.text('DELETE /pong')
  })
```

## Base Path

Puoi specificare il base path della tua api quando istanzia la classe `Lotto`.

```typescript
...
const app = new Lotto({
  prefix: '/api'
})
...
```

## `use()`: Middleware

Se vuoi utilizzare del middleware personalizzato o anche i nostri che non sono inseriti nel framework come [@lottojs/cors](../middlewares/cors) hai alcuni modi per farlo:

1. Utilizzando la funzione `use` e registrare un middleware per tutti le route.

```typescript
lotto.use(({ req, res, next }) => {
  if (req.header('Authorization') === '1234') return next()

  return res.status(401).json({
    message: 'unauthorized.'
  })
})
```

2. Utilizzare la funzione `use` e registrare un middleware per una route specifica.

```typescript
lotto.use('/hello', ({ req, res, next }) => {
  if (req.header('Authorization') === '1234') return next()

  return res.status(401).json({
    message: 'unauthorized.'
  })
})
```

3. Su ogni http method insieme al path e al handler.

```typescript
lotto.get(
  '/profile/me',
  ({ req, res, next }) => {
    if (req.header('Authorization') === '1234') return next()

    return res.status(401).json({
      message: 'unauthorized.'
    })
  },
  ({ req, res }) => {
    const { userId, groupId } = req.params
    ...
  }
)
```

## `use()`: Nidificazione Delle Route

La classe `Router` non è pensata esclusivamente per essere estendibile dalla classe [Lotto](./lotto), quindi puoi anche usarla separatamente per separare e gestire meglio il tuo codice.

```typescript
import { Lotto, Router } from '@lottojs/lotto'

const app = new Lotto()

app.get('/ping', ({ res }) => res.status(200).text('pong'))

const userRouter = new Router()

userRouter.get('/'), ({ res } => {
  return res.status(200).text('user list')
})

app.use('/users', userRouter)

app.init()
```
