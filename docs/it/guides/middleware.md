---
title: Middleware
editLink: true
---

# {{ $frontmatter.title }}

Un "Middleware" è un pezzo di codice che può agire prima e/o dopo il handler della route. Possiamo ottenere l'oggetto [`req`](../api/request) prima dell'invio o manipolare l'oggetto [`res`](../api/response) dopo l'invio.

[[toc]]

## Base

L'utente può registrare un middleware utilizzando la funzione [`lotto.use()`](../api/routing#use-middleware) o su ciascun metodo http come [`lotto.get`](../api/routing#basic) e così via.

```typescript
// corrisponde a tutti i paths indipendentemente dal metodo
lotto.use(cors())

// specificando metodo, path e handler
lotto.post('/users', auth(), ({ res }) => res.status(201).text('created'))
```

In questo caso, due middleware verrebbero elaborati prima di eseguire il handler.

```typescript
cors() -> auth() -> handler
```

## Middleware Multipli

È possibile anche utilizzare più middleware per una route.

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

## Ordine di Esecuzione

Come detto all'inizio di questa pagina i middleware possono essere eseguiti prima e/o dopo una richiesta, vediamo come funziona.

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

Quale risultato pensi che verrà stampato? Vediamo:

```typescript
middleware 1 start
  Hello World!
middleware 1 end
```

## Built-in Middleware

`Lotto` ha alcuni built-in middlewares come [@lottojs/cors](../middlewares/cors.md) e [@lottojs/secure-headers](../middlewares/secure-headers.md) e puoi usalo, semplicemente facendo questo:

```typescript
import { cors } from '@lottojs/cors'
...
// senza path
lotto.use(cors())

// con path e handler
lotto.get('/users', cors(), ({ res }) => res.status(200).text('user route'))
...
```

## Middleware personalizzato

Se non abbiamo il middleware di cui hai bisogno o se vuoi semplicemente scriverne uno, è assolutamente possibile.

Ricorda solo che un middleware nel framework `Lotto` sarà sempre una funzione di callback che riceve l'oggetto [`ctx`](../api/context) come parametro.

```typescript
...
// Middleware generale
lotto.use(({ next }) => {
  console.log('my custom middleware')
  next();
})

// Middleware specifico per route
lotto.get(
  '/users',
  ({ next } => {
    console.log('my custom middleware')
  }),
  ({ res }) => res.status(200).text('user route'))
...
```

## Third-party Middlewares

È possibile utilizzare middleware di terze parti ma ricorda sempre, i nostri built-in middlewares non dipendono da moduli esterni, ma quando aggiungi middleware di terze parti la tua applicazione inizierà a essere più complessa e forse con essi potrebbe anche essere necessario installare delle altre librerie.