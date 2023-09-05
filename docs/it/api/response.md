---
title: Response
editLink: true
---

# {{ $frontmatter.title }}

L'oggetto `res` contiene dati da passare come risposta e anche dei helper che puoi anche concatenare tra di loro.

[[toc]]

## `res`: Response

```typescript
interface Response extends ServerResponse {
    /**
     * Invia risposta application/json.
     *
     * Esempi:
     *
     *     res.json(null);
     *     res.json({ fruit: 'apple' });
     *     res.status(200).json('oh we are here!');
     * @param body Dati da trasformare su JSON.
     * @returns Response
     */
    json: (body?: any) => Response

    /**
     * Imposta il `codice` di stato.
     * @param code HTTP status code e.g. 200, 201, 400, 404...
     * @returns Response
     */
    status: (code: number) => Response

    /**
     * Invia risposta text/plain.
     *
     * Esempi:
     *
     *     res.text('hello world!');
     *     res.status(200).text('oh we are here!');
     * @param body Dati da trasformare in testo.
     * @returns Response
     */
    text: (body: unknown) => Response
}
```
_PS: l'interfaccia ServerResponse fa parte della node:http api_

## `json()`

È un helper che ti consentirà di restituire una risposta JSON all'interno della tua route.

```typescript
lotto.get('/ping', ({ res }) => {
  return res.json({
    message: 'pong'
  })
  ...
})
```
_PS: non è necessario chiamare un middleware per fare il JSON parsing sulla richiesta poiché lo facciamo già internamente con il nostro middleware [@lottojs/body-parser](../middlewares/body-parser)._


## `status()`

È un helper che ti consente di impostare un codice di stato per la risposta alla tua richiesta.

```typescript
lotto.get('/ping', ({ res }) => {
  return res.status(200).json({
    message: 'pong'
  })
  ...
})
```

## `text()`

Invece di impostare un json puoi anche impostare una risposta testuale.

```typescript
lotto.get('/ping', ({ res }) => {
  return res.status(200).text('pong.')
  ...
})
```