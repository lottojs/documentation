---
title: Lotto
editLink: true
---

# {{ $frontmatter.title }}

`Lotto` is our primary class and will be used until the end.

[[toc]]

## Constructor

It can receive an object internally called `options` and will enable you to pass 3 optional keys that are: `host`, `port` and `prefix` all self explanatory.

```typescript
/**
 * LottoJS HTTP Router
 * @param options Server options
 */
constructor(options?: LottoOptions)
```

By default if you wouldn't pass any values each key has a default value:

```json
{
  "host": "0.0.0.0",
  "port": 9004,
  "prefix": "/"
}
```
## Methods

An instance of `Lotto` has the following methods.

- lotto.**get**(path, middlewares?, handler)
- lotto.**post**(path, middlewares?, handler)
- lotto.**put**(path, middlewares?, handler)
- lotto.**patch**(path, middlewares?, handler)
- lotto.**delete**(path, middlewares?, handler)
- lotto.**options**(path, middlewares?, handler)
- lotto.**head**(path, middlewares?, handler)
- lotto.**all**(path, middlewares?, handler)
- lotto.**use**(path?, middleware|router)
- lotto.**init**(after)


All the methods excluding `init` are used for routing, please refer to the [Routing](./routing) section.

## `init()`

This method do two things:

1. Creates a `node:http` server passing to it the `handle` function from [Router](./routing) class as a callback passing to it the [Context](./context) object.

2. Starts listening on the choosen port or the default one `9004`. This function can receive an argument called `after` that will be executed as a callback after the server rise up, and here for example you can put your database start or just a log.

```typescript
/**
 * Listen for connections.
 * @param after Any callbacks to be executed after server start.
 */
init: (after?: (...args: unknown[]) => void) => void
```
