---
title: Request
editLink: true
---

# {{ $frontmatter.title }}

The `req` object will contain all data and also helpers that you can use from the coming request.

_PS: You don't need to call a middleware to parse path or query parameters as we already do it internaly with our [@lottojs/params-parser](../middlewares/params-parser) middleware._

[[toc]]

## `req`: Request

```typescript
interface Request extends IncomingMessage {
    /**
     * Request body.
     */
    body: any

    /**
     * Retrieve specific file by field name.
     *
     * Examples:
     *
     *     res.file('document');
     * @param field field name
     * @returns MultipartContent | undefined
     */
    file: (field: string) => MultipartContent | undefined

    /**
     * Request files.
     */
    files: MultipartContent[] | null

    /**
     * Retrieve specific query parameter.
     *
     * Examples:
     *
     *     res.get('gclid');
     * @param query query parameter
     * @returns Query
     */
    get: (query: string) => Query

    /**
     * Retrieve specific path parameter.
     *
     * Examples:
     *
     *     res.param('id');
     * @param param path parameter
     * @returns T | undefined
     */
    param: <T = string>(param: string) => T | undefined

    /**
     * Request path parameters e.g.: /:id, /user/:id/:group.
     */
    params: Params

    /**
     * Request query parameters e.g.: ...?gclid=123
     */
    query: ParsedQuery
}
```
_PS: IncomingMessage interface is part of node:http api_

## `body()`

Is the object that you can retrieve data passed on the HTTP request body on methods `POST`, `PUT` and `PATCH`.

```typescript
lotto.post('/users', ({ req }) => {
  const body = req.body
  ...
})
```

## `file()`

The file function is a helper that you can made use passing a field name in order to retrieve a file object when uploading it using the Content-Type `multipart/form-data`.

```typescript
lotto.post('/users', ({ req }) => {
  const file = req.file('doc')
  ...
})
```

This function returns `undefined` or a `MultipartContent` object containing the following keys:

```typescript
type MultipartContent = {
    /**
     * Content field name.
     */
    name: string

    /**
     * Content file name.
     */
    fileName: string

    /**
     * Content type e.g.: image/svg+xml.
     */
    contentType: string

    /**
     * Content as a Buffer.
     */
    content: Buffer
}
```

## `files`

You can use this object in order to retrieve one or more file objects when uploading it using the Content-Type `multipart/form-data`.

```typescript
lotto.post('/users', ({ req }) => {
  const { photo } = req.files
  ...
})
```

Like [file](./request#file) method this object can be`undefined` or also returns a `MultipartContent` array of objects.

## `get()`

It's a helper to retrieve query params from the URL just passing the param name as a function parameter.

```typescript
lotto.get('/me', ({ req }) => {
  const gclid = req.get('gclid')
  ...
})
```

## `query`

Is the object that will contain all passed query parameters.

```typescript
lotto.get('/me', ({ req }) => {
  const { gclid } = req.query
  ...
})
```

## `param()`

Is a helpers that just passing the path parameters as a function parameters you can retrieve it from the request.

```typescript
lotto.get('/users/:userId', ({ req }) => {
  const { userId } = req.param('userId')
  ...
})
```

## `params`

Is the object that will contain all passed path parameters.

```typescript
lotto.get('/users/:userId', ({ req }) => {
  const { userId } = req.params
  ...
})
```