---
title: Body Parser
editLink: true
---

# {{ $frontmatter.title }}

`@lottojs/body-parser` è uno dei nostri built-in middlewares che ti consente di analizzare il corpo della richiesta http dalle richieste `POST`, `PUT` e `PATCH`.

[[toc]]

## Content-Types supportati

Supportiamo già i `Content-Types` più comuni:

- Multipart Form (**multipart/form-data**).
- Form URL Encoded (**application/x-www-form-urlencoded**).
- JSON (**application/json**).
- Text (**text/plain**).

## Multipart Form

Parlando di contenuto `multipart/form-data`, se stai semplicemente inviando campi di testo, i tuoi dati vanno all'oggetto [`req.body`](../api/request#body) ma se c'è anche qualche file, oltre a [`req.body`](../api/request#body) avrai dati anche sull'oggetto [`req.files`](../api/request#files).

```typescript
lotto.patch('/profile', ({ req, res}) => {
  const { name, email } = req.body;
  // picture è il nome del campo passato nella richiesta.
  const { picture } = req.files;
  ...
})
```
_PS: abbiamo anche un helper per aiutarti a recuperare i file in un modo più semplice, vedi di più sul metodo [req.file()](../api/request#file)_

## Form URL Encoded

Il contenuto che proviene da un `application/x-www-form-urlencoded` ha lo stesso trattamento di una richiesta [JSON](./body-parser#json) e i dati vanno a [`req.body`]( ../api/request#body).

```typescript
lotto.patch('/profile', ({ req, res}) => {
  const { name, email } = req.body;
  ...
})
```

Una cosa interessante è che trattiamo anche gli array su richiesta. Supponiamo che tu abbia un campo chiamato `fruits` e desideri inviarlo come form url encoded ed il campo è un array di stringhe, puoi eseguire nel modo seguente:

Su tua richiesta invia 2 campi chiamati `fruits[]` con i loro contenuti e sostanzialmente verranno inseriti nell'oggetto [`req.body`](../api/request#body).

```typescript
lotto.patch('/fruits', ({ req, res}) => {
  const { fruits } = req.body;
  // l'oggetto fruits sarà
  // [
  //  'banana',
  //  'mela'
  // ]
  ...
})
```

## JSON

Il modo più comune. I dati vanno all'oggetto [`req.body`](../api/request#body) quando si utilizza il tipo di contenuto `application/json`.

```typescript
lotto.patch('/profile', ({ req, res}) => {
  const { name, email } = req.body;
  ...
})
```

## Text Plain

Puoi anche ricevere dati come testo quando usi il tipo di contenuto `text/plain`. I dati vanno anche all'oggetto [`req.body`](../api/request#body) ma ora sarà una stringa invece di un oggetto.

```typescript
lotto.patch('/profile', ({ req, res}) => {
  const text = req.body;
  ...
})
```

## Utilizzo autonomo

È anche possibile utilizzarlo in modo autonomo su altri progetti che non utilizzano `Lotto`.

Esportiamo una funzione chiamata `bodyParser` che restituisce una funzione in cui puoi passare l'oggetto `req` proveniente dal tuo server http e anche una funzione `next` affinché il tuo progetto possa seguire le chiamate successive.

```typescript
import { createServer } from 'node:http';
import { paramsParser } from '@lottojs/body-parser';

createServer(
    async (req: IncomingMessage, res: ServerResponse) => {
            ...
            if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
                bodyParser()(req, next())
            }
            ...
    },
)
```

## Github

Se sei interessato a come funziona in modo più approfondito, dai un'occhiata al codice su [Github](https://github.com/lottojs/body-parser).