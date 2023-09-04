---
title: Body Parser
editLink: true
---

# {{ $frontmatter.title }}

`@lottojs/body-parser` is one of our built-in middlewares that enable you to parse the http request body from `POST`, `PUT` and `PATCH` requests.

[[toc]]

## Supported Content-Types

We already support the most commons `Content-Types`:

- Multipart Form (**multipart/form-data**).
- Form URL Encoded (**application/x-www-form-urlencoded**).
- JSON (**application/json**).
- Text (**text/plain**).

## Multipart Form

Talking about `multipart/form-data` content if you are just sending text fields your data goes to the [`req.body`](../api/request#body) object but if there's also some file in addition to [`req.body`](../api/request#body) you will have data also on [`req.files`](../api/request#files) object.

```typescript
lotto.patch('/profile', ({ req, res}) => {
  const { name, email } = req.body;
  // picture is the name of the field passed on the request.
  const { picture } = req.files;
  ...
})
```
_PS: We also have a helper to help you retrieve files in a more easy way, see more on [req.file()](../api/request#file) method_

## Form URL Encoded

The content that comes from an `application/x-www-form-urlencoded` has the same treatment from a [JSON](./body-parser#json) request and the data goes to the [`req.body`](../api/request#body) object.

```typescript
lotto.patch('/profile', ({ req, res}) => {
  const { name, email } = req.body;
  ...
})
```

An interesting thing is that we also treat arrays on the request. Let's say that you have a field called `fruits` and want to send it as form url encoded and it is an array of strings you can do the following:

On your request send 2 fields called `fruits[]` with their contents and basically receive in on the [`req.body`](../api/request#body) object.

```typescript
lotto.patch('/fruits', ({ req, res}) => {
  const { fruits } = req.body;
  // fruits object will be
  // [
  //  'banana',
  //  'pineapple'
  // ]
  ...
})
```

## JSON

The most common way and the data goes to the [`req.body`](../api/request#body) object when you are using `application/json` Content-Type.

```typescript
lotto.patch('/profile', ({ req, res}) => {
  const { name, email } = req.body;
  ...
})
```

## Text Plain

You can also receive data as text when using `text/plain` Content-Type and the data also goes to [`req.body`](../api/request#body) object but now it will be a string instead an object.

```typescript
lotto.patch('/profile', ({ req, res}) => {
  const text = req.body;
  ...
})
```

## Standalone use

Is also possible to use it on a standalone way on other projects that aren't using `Lotto`.

Whe export a function called `bodyParser` that returns a function where you can pass the `req` object coming from your http server and also a `next` function in order to your project can follow the next calls.

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

If you are interested on how it works more deep, please take a look on the code on [Github](https://github.com/lottojs/body-parser).