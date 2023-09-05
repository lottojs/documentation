---
title: Context
editLink: true
---

# {{ $frontmatter.title }}

È l'oggetto che hai a disposizione su ogni route e qui potrai conoscere meglio come è costruito all'interno della nostra struttura.

[[toc]]

## `ctx`: Context

L'oggetto `ctx` contiene i 3 oggetti principali ([Request](./request), [Response](./response) e [NextFunction](./next-function)) e viene utilizzato per gestire le nostre richieste.

```typescript
type Context = {
    /**
     * Oggetto Request
     */
    req: Request

    /**
     * Oggetto Response
     */
    res: Response

    /**
     * NextFunction, utilizzata principalmente sui middleware per poter andare avanti
     * con le richieste.
     */
    next: NextFunction
}
```

Gli oggetti [Request](./request) e [Response](./response) hanno alcuni helper disponibili e puoi capire meglio come utilizzarli nelle pagine specifiche.