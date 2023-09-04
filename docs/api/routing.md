---
title: Routing
editLink: true
---

# {{ $frontmatter.title }}

`Lotto` Router is very intuitive and also extendible.

[[toc]]

## Basic

```typescript
// HTTP Methods
lotto.get('/', ({ res }) => res.text('GET /'))
lotto.post('/', ({ res }) => res.text('POST /'))
lotto.put('/', ({ res }) => res.text('PUT /'))
lotto.patch('/', ({ res }) => res.text('PATCH /'))
lotto.delete('/', ({ res }) => res.text('DELETE /'))

// Any HTTP methods
lotto.all('/', ({ res }) => res.text('ALL /'))
```

## Path Parameters

You can use our helper `param`...

```typescript
lotto.get('/user/:id', ({ req, res }) => {
  const userId = req.param('id')
  ...
})
```

or can retrieve all parameters at once:

```typescript
lotto.get('/users/:userId/group/:groupId', ({ req, res }) => {
  const { userId, groupId } = req.params
  ...
})
```

## Chained Routes

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

You can specify the base path when instantiating the `Lotto` class.

```typescript
...
const app = new Lotto({
  prefix: '/api'
})
...
```

## `use()`: Middleware

If you want to use some custom middleware or even our ones that are not inserted on the framework like [@lottojs/cors](../middlewares/cors) you have some ways to do that:

1. Using the `use` function and register a middleware for all routes.


```typescript
lotto.use(({ req, res, next }) => {
  if (req.header('Authorization') === '1234') return next()

  return res.status(401).json({
    message: 'unauthorized.'
  })
})
```

2. Using the `use` function and register a middleware for a specific route.

```typescript
lotto.use('/hello', ({ req, res, next }) => {
  if (req.header('Authorization') === '1234') return next()

  return res.status(401).json({
    message: 'unauthorized.'
  })
})
```

3. On each route method together with the path and handler.

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

The `Router` class isn't exclusive made to be extendable from [Lotto](./lotto) class, so you can also use it separatedelly to separate and manage better your code.

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
