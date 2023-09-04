---
title: Request
editLink: true
---

# {{ $frontmatter.title }}

O objeto `req` conterá todos os dados e também helpers que você pode usar na sua requisição.

_PS: Você não precisa chamar um middleware para parsear query ou path parameters, pois já fazemos isso internamente com nosso middleware [@lottojs/params-parser](../middlewares/params-parser)._


[[toc]]

## `req`: Request

```typescript
interface Request extends IncomingMessage {
    /**
     * Corpo da requisição.
     */
    body: any

    /**
     * Recupera arquivo específico por nome de campo.
     *
     * Exemplos:
     *
     *     res.file('document');
     * @param field nome do campo
     * @returns MultipartContent | undefined
     */
    file: (field: string) => MultipartContent | undefined

    /**
     * Objeto de arquivos.
     */
    files: MultipartContent[] | null

    /**
     * Recupera query param específico.
     *
     * Exemplos:
     *
     *     res.get('gclid');
     * @param query query parameter
     * @returns Query
     */
    get: (query: string) => Query

    /**
     * Recupera path parameter específico.
     *
     * Exemplos:
     *
     *     res.param('id');
     * @param param path parameter
     * @returns T | undefined
     */
    param: <T = string>(param: string) => T | undefined

    /**
     * path parameters da requisição e.g.: /:id, /user/:id/:group.
     */
    params: Params

    /**
     * query parameters da requisição e.g.: ...?gclid=123
     */
    query: ParsedQuery
}
```
_PS: A interface IncomingMessage faz parte da node:http api_

## `body()`

É o objeto que você pode recuperar dados passados no corpo da solicitação HTTP nos métodos `POST`, `PUT` e `PATCH`.

```typescript
lotto.post('/users', ({ req }) => {
  const body = req.body
  ...
})
```

## `file()`

A função file é um helper que você pode usar passando um nome de campo para recuperar um objeto de arquivo ao carregá-lo usando o Content-Type `multipart/form-data`.

```typescript
lotto.post('/users', ({ req }) => {
  const file = req.file('doc')
  ...
})
```

Esta função retorna `undefined` ou um objeto `MultipartContent` contendo as seguintes chaves:

```typescript
type MultipartContent = {
    /**
     * Nome do campo.
     */
    name: string

    /**
     * Nome do arquivo.
     */
    fileName: string

    /**
     * Tipo de conteúdo e.g.: image/svg+xml.
     */
    contentType: string

    /**
     * Buffer do conteúdo.
     */
    content: Buffer
}
```

## `files`

Você pode usar este objeto para recuperar um ou mais objetos de arquivo ao carregá-lo usando o Content-Type `multipart/form-data`.

```typescript
lotto.post('/users', ({ req }) => {
  const { photo } = req.files
  ...
})
```

Assim como o método [file](./request#file) este objeto pode ser `undefined` ou também retornar um array de objetos `MultipartContent`.

## `get()`

É um auxiliar para recuperar query parameters da URL apenas passando o nome do mesmo como parâmetro da função.

```typescript
lotto.get('/me', ({ req }) => {
  const gclid = req.get('gclid')
  ...
})
```

## `query`

É o objeto que conterá todos os query parameters passados.

```typescript
lotto.get('/me', ({ req }) => {
  const { gclid } = req.query
  ...
})
```

## `param()`

É um helpers que apenas passando os path parameters como parâmetros da função você pode recuperá-los da requisição.

```typescript
lotto.get('/users/:userId', ({ req }) => {
  const { userId } = req.param('userId')
  ...
})
```

## `params`

É o objeto que conterá todos os path parameters da requisição.

```typescript
lotto.get('/users/:userId', ({ req }) => {
  const { userId } = req.params
  ...
})
```