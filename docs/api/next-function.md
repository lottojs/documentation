---
title: NextFunction
editLink: true
---

# {{ $frontmatter.title }}

The `next` object is used to handle to a next request when the subject is middleware, is used on our built-in middlewares and of course you can also use it on your own custom middlewares.

[[toc]]

## `next`: NextFunction

```typescript
type NextFunction = (...args: unknown[]) => void
```