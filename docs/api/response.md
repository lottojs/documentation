---
title: Response
editLink: true
---

# {{ $frontmatter.title }}

The `res` object contains data to be passed as response and also helpers that you can also chain between them.

[[toc]]

## `res`: Response

```typescript
interface Response extends ServerResponse {
    /**
     * Send application/json response.
     *
     * Examples:
     *
     *     res.json(null);
     *     res.json({ fruit: 'apple' });
     *     res.status(200).json('oh we are here!');
     * @param body Data to be transformed on JSON.
     * @returns Response
     */
    json: (body?: any) => Response

    /**
     * Set status `code`.
     * @param code HTTP status code e.g. 200, 201, 400, 404...
     * @returns Response
     */
    status: (code: number) => Response

    /**
     * Send text/plain response.
     *
     * Examples:
     *
     *     res.text('hello world!');
     *     res.status(200).text('oh we are here!');
     * @param body Data to be transformed on text.
     * @returns Response
     */
    text: (body: unknown) => Response
}
```
_PS: ServerResponse interface is part of node:http api_

## `json()`

Is a helper that will enable you to return a JSON response inside your route.

```typescript
lotto.get('/ping', ({ res }) => {
  return res.json({
    message: 'pong'
  })
  ...
})
```
_PS: You don't need to call a middleware to parse json on the request as we already do it internaly with our [@lottojs/body-parser](../middlewares/body-parser) middleware._


## `status()`

Is a helper that enables you to set a status code to your request response.

```typescript
lotto.get('/ping', ({ res }) => {
  return res.status(200).json({
    message: 'pong'
  })
  ...
})
```

## `text()`

Instead set a json you can also set a text response.

```typescript
lotto.get('/ping', ({ res }) => {
  return res.status(200).text('pong.')
  ...
})
```