---
title: Middleware
editLink: true
---

# {{ $frontmatter.title }}

A `Middleware` is a piece of code that can act before and/or after the route handler. We can get the [`req`](../api/request) object before being dispatched or manipulate the [`res`](../api/response) boject after dispatching.

[[toc]]

## Basic

The user can register a middleware using [`lotto.use()`](../api/routing#use-middleware) function or on each route method together with route path and handler like [`lotto.get`](../api/routing#basic) and so on.

```typescript
// match all routes independing of method
lotto.use(cors())

// specifying method, path and handler
lotto.post('/users', auth(), ({ res }) => res.status(201).text('created'))
```

In this case, two middlewares would be processed before execute the handler.

```typescript
cors() -> auth() -> handler
```

## Multiple Middlewares

Is possible also to use multiple middlewares for one route.

```typescript
...
lotto.post(
  '/users',
  [
    ({ next }) => {
      console.log('middleware 1')
      next()
    },
    ({ next }) => {  
      console.log('middleware 2')
      next()
    },
  ],
  ({ res }) => res.status(201).text('created'))
...
```

## Execution order

As said on the beginning of this page the middlewares can be executed before and/or after a request, let's see how it works.

```typescript
import { Lotto } from '@lottojs/lotto'

const lotto = new Lotto()

lotto.use(({ next }) => {
  console.log('middleware 1 start')
  next()
  console.log('middleware 1 end')
})

lotto.get('/ping', ({ res }) => {
  return res.text('Hello World!')
})
```

What result you think that will be printed? Let's see:

```typescript
middleware 1 start
  Hello World!
middleware 1 end
```

## Built-in Middleware

`Lotto` has some built-in middlewares like [@lottojs/cors](../middlewares/cors.md) and [@lottojs/secure-headers](../middlewares/secure-headers.md) and you can use it, just doing that:

```typescript
import { cors } from '@lottojs/cors'
...
// without pass a path
lotto.use(cors())

// with path and handler
lotto.get('/users', cors(), ({ res }) => res.status(200).text('user route'))
...
```

## Custom Middleware

If we have not a middleware that you need or if you just want to write one, is totally possible.

Just remember a middleware in `Lotto` framework always will be a callback function that receives the [`ctx`](../api/context) object as a parameter.

```typescript
...
// General middleware
lotto.use(({ next }) => {
  console.log('my custom middleware')
  next();
})

// Route specific middleware
lotto.get(
  '/users',
  ({ next } => {
    console.log('my custom middleware')
  }),
  ({ res }) => res.status(200).text('user route'))
...
```

## Third-party Middlewares

It's possible to use Third-party middlewares but always remember, our built-in middlewares doesn't depends of external modules, but when you add third-party middlewares your application would start to be more complex and maybe with them could also be necessary to install another libraries.