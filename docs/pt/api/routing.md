---
title: Routing
editLink: true
---

# {{ $frontmatter.title }}

O roteador `Lotto` é muito intuitivo e também extensível.

[[toc]]

## Basic

```typescript
// Métodos HTTP
lotto.get('/', ({ res }) => res.text('GET /'))
lotto.post('/', ({ res }) => res.text('POST /'))
lotto.put('/', ({ res }) => res.text('PUT /'))
lotto.patch('/', ({ res }) => res.text('PATCH /'))
lotto.delete('/', ({ res }) => res.text('DELETE /'))

// Qualquer método HTTP
lotto.all('/', ({ res }) => res.text('ALL /'))
```

## Path Parameters

Você pode usar nosso helper `param`...

```typescript
lotto.get('/user/:id', ({ req, res }) => {
  const userId = req.param('id')
  ...
})
```

ou pode recuperar todos os parâmetros de uma só vez:

```typescript
lotto.get('/users/:userId/group/:groupId', ({ req, res }) => {
  const { userId, groupId } = req.params
  ...
})
```

## Rotas encadeadas

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

Você pode especificar o caminho base ao instanciar a classe `Lotto`.

```typescript
...
const app = new Lotto({
  prefix: '/api'
})
...
```

## `use()`: Middleware

Se você quiser usar algum middleware customizado ou mesmo os nossos que não estão inseridos no framework como [@lottojs/cors](./middlewares/cors) você tem algumas maneiras de fazer isso:

1. Usando a função `use` e registrando um middleware para todas as rotas.

```typescript
lotto.use(({ req, res, next }) => {
  if (req.header('Authorization') === '1234') return next()

  return res.status(401).json({
    message: 'unauthorized.'
  })
})
```

2. Usando a função `use` e registrando um middleware para uma rota específica.

```typescript
lotto.use('/hello', ({ req, res, next }) => {
  if (req.header('Authorization') === '1234') return next()

  return res.status(401).json({
    message: 'unauthorized.'
  })
})
```

3. Em cada método de rota junto com o caminho e o handler.

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

## `use()`: Route Nesting

A classe `Router` não é feita exclusivamente para ser extensível da classe [Lotto](./lotto), então você também pode usá-la separadamente para separar e gerenciar melhor seu código.

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
