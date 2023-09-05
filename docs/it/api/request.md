---
title: Request
editLink: true
---

# {{ $frontmatter.title }}

L'oggetto `req` conterrà tutti i dati e anche gli helper che potrai utilizzare dalla richiesta successiva.

_PS: non è necessario chiamare un middleware per fare il parsing dei path parametri o i parametri di query poiché lo facciamo già internamente con il nostro middleware [@lottojs/params-parser](../middlewares/params-parser)._

[[toc]]

## `req`: Request

```typescript
interface Request extends IncomingMessage {
    /**
     * Corpo della Richiesta.
     */
    body: any

    /**
     * Recupera file specifico in base al nome del campo.
     *
     * Esempi:
     *
     *     res.file('document');
     * @param field Nome del campo
     * @returns MultipartContent | undefined
     */
    file: (field: string) => MultipartContent | undefined

    /**
     * Archivi della richiesta.
     */
    files: MultipartContent[] | null

    /**
     * Recupera parametri di query specifici.
     *
     * Esempo:
     *
     *     res.get('gclid');
     * @param query Parametro di query
     * @returns Query
     */
    get: (query: string) => Query

    /**
     * Recupera il parametro path specifico.
     *
     * Esempi:
     *
     *     res.param('id');
     * @param param Parametro path
     * @returns T | undefined
     */
    param: <T = string>(param: string) => T | undefined

    /**
     * Parametri path della richiesta e.g.: /:id, /user/:id/:group.
     */
    params: Params

    /**
     * Parametri di query della richiesta e.g.: ...?gclid=123
     */
    query: ParsedQuery
}
```
_PS: l'interfaccia IncomingMessage fa parte della node:http api_

## `body()`

È l'oggetto da cui è possibile recuperare i dati passati nel corpo della richiesta HTTP sui metodi `POST`, `PUT` e `PATCH`.

```typescript
lotto.post('/users', ({ req }) => {
  const body = req.body
  ...
})
```

## `file()`

La funzione file è un helper che puoi utilizzare passando un nome di campo per recuperare un oggetto file quando lo carichi utilizzando il Content-Type `multipart/form-data`.

```typescript
lotto.post('/users', ({ req }) => {
  const file = req.file('doc')
  ...
})
```

Questa funzione restituisce `undefined` o un oggetto `MultipartContent` contenente le seguenti chiavi:

```typescript
type MultipartContent = {
    /**
     * Nome del campo
     */
    name: string

    /**
     * Nome del archivio.
     */
    fileName: string

    /**
     * Tipo di contenuto e e.g.: image/svg+xml.
     */
    contentType: string

    /**
     * Contenuto come un Buffer
     */
    content: Buffer
}
```

## `files`

Puoi utilizzare questo oggetto per recuperare uno o più oggetti file durante il caricamento utilizzando il Content-Type `multipart/form-data`.

```typescript
lotto.post('/users', ({ req }) => {
  const { photo } = req.files
  ...
})
```

Come il metodo [file](./request#file), questo oggetto può essere `undefined` o restituisce anche un array di oggetti `MultipartContent`.

## `get()`

È un helper per recuperare i parametri di query dall'URL semplicemente passando il nome del parametro come parametro di funzione.

```typescript
lotto.get('/me', ({ req }) => {
  const gclid = req.get('gclid')
  ...
})
```

## `query`

Oggetto che conterrà tutti i parametri di query passati.

```typescript
lotto.get('/me', ({ req }) => {
  const { gclid } = req.query
  ...
})
```

## `param()`

È un helper che semplicemente passando i path parametri come parametri di funzione è possibile recuperarli dalla richiesta.

```typescript
lotto.get('/users/:userId', ({ req }) => {
  const { userId } = req.param('userId')
  ...
})
```

## `params`

Oggetto che conterrà tutti i path parametri passati.

```typescript
lotto.get('/users/:userId', ({ req }) => {
  const { userId } = req.params
  ...
})
```