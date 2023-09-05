---
title: NextFunction
editLink: true
---

# {{ $frontmatter.title }}

L'oggetto `next` viene utilizzato per gestire una richiesta successiva quando l'oggetto è il middleware, viene utilizzato sui nostri built-in middlewares e ovviamente è possibile utilizzarlo anche sui propri middleware personalizzati.

[[toc]]

## `next`: NextFunction

```typescript
type NextFunction = (...args: unknown[]) => void
```