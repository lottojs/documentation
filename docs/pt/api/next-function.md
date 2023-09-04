---
title: NextFunction
editLink: true
---

# {{ $frontmatter.title }}

O objeto `next` é usado para lidar com uma próxima solicitação quando o assunto é middleware. É usado em nossos built-in middlewares e, claro, você também pode usá-lo em seus próprios middlewares personalizados.

[[toc]]

## `next`: NextFunction

```typescript
type NextFunction = (...args: unknown[]) => void
```