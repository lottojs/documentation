---
title: Context
editLink: true
---

# {{ $frontmatter.title }}

Is the object that do you have available on each route and here you can get to know better how it's builded inside our framework.

[[toc]]

## `ctx`: Context

The `ctx` object contains the 3 principal objects([Request](./request), [Response](./response) and [NextFunction](./next-function)) and is used to handle our requests.

```typescript
type Context = {
    /**
     * Request Object
     */
    req: Request

    /**
     * Response Object
     */
    res: Response

    /**
     * Next Function, mostly used on middlewares in order to can go ahead
     * to the request.
     */
    next: NextFunction
}
```

The [Request](./request) and [Response](./response) objects have some available helpers and you can understand better how to use on the specific pages.
