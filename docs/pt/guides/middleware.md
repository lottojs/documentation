---
title: Middleware
editLink: true
---

# {{ $frontmatter.title }}

Um `Middleware` é um pedaço de código que pode agir antes e/ou depois do handler de rota. Podemos obter o objeto [`req`](../api/request) antes de ser despachado ou manipular o objeto [`res`](../api/response) após o despacho.

[[toc]]

## Básico

O usuário pode registrar um middleware usando a função [`lotto.use()`](../api/routing#use-middleware) ou em cada método de rota junto com o caminho da rota e o handler como [`lotto.get`](../api/routing#basic) e assim por diante.

```typescript
// corresponde a todas as rotas independente do método
lotto.use(cors())

// especificando método, caminho e handler
lotto.post('/users', auth(), ({ res }) => res.status(201).text('created'))
```

Neste caso, dois middlewares seriam processados antes de executar o handler.

```typescript
cors() -> auth() -> handler
```

## Middlewares Múltiplos

Também é possível usar vários middlewares em uma rota.

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

## Ordem de execução

Como dito no início desta página os middlewares podem ser executados antes e/ou depois de uma requisição, vamos ver como funciona.

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

Qual resultado você acha que será impresso? Vamos ver:

```typescript
middleware 1 start
  Hello World!
middleware 1 end
```

## Built-in Middleware

`Lotto` tem alguns built-in middlewares como [@lottojs/cors](../middlewares/cors.md) e [@lottojs/secure-headers](../middlewares/secure-headers.md) e você pode usá-los, apenas fazendo isso:

```typescript
import { cors } from '@lottojs/cors'
...
// sem passar um caminho
lotto.use(cors())

// passasndo caminho, método e handler
lotto.get('/users', cors(), ({ res }) => res.status(200).text('user route'))
...
```

## Middleware Customizado

Se não tivermos o middleware que você precisa ou se quiser apenas escrever um, é totalmente possível.

Basta lembrar que um middleware no framework `Lotto` sempre será um callback que recebe o objeto [`ctx`](../api/context) como parâmetro.

```typescript
...
// Middleware geral
lotto.use(({ next }) => {
  console.log('my custom middleware')
  next();
})

// Middleware espcífico por rota
lotto.get(
  '/users',
  ({ next } => {
    console.log('my custom middleware')
  }),
  ({ res }) => res.status(200).text('user route'))
...
```

## Third-party Middlewares

É possível usar middlewares de terceiros, mas lembre-se sempre, nossos built-in middlewares não dependem de módulos externos, mas ao adicionar middlewares de terceiros sua aplicação começaria a ficar mais complexa e talvez com eles também pudesse ser necessário instalar outras bibliotecas.