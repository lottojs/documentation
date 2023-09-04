---
title: Context
editLink: true
---

# {{ $frontmatter.title }}

É o objeto que você tem disponível em cada rot. Aqui você poderá conhecer melhor como ele é construído dentro do nosso framework.

[[toc]]

## `ctx`: Context

O objeto `ctx` contém os 3 objetos principais ([Request](./request), [Response](./response) e [NextFunction](./next-function)) e é usado para lidar com nossas solicitações.

```typescript
type Context = {
    /**
     * RObjeto Request
     */
    req: Request

    /**
     * Objeto Response
     */
    res: Response

    /**
     * Next Function, usada principalmente em middlewares para poder seguir em frente
     * com o request.
     */
    next: NextFunction
}
```

Os objetos [Request](./request) e [Response](./response) possuem alguns helpers disponíveis e você pode entender melhor como usar nas páginas específicas.