---
title: Helpers
editLink: true
---

# {{ $frontmatter.title }}

Chiamiamo helper alcune funzioni all'interno del framework che semplificano la vita dello sviluppatore e in realtà le abbiamo nell'oggetto [`req`](../api/request) e [`res`](../api/response)

[[toc]]

## Oggetto Request

- [`body()`](../api/request#body) - Recupera il corpo della richiesta.
- [`file()`](../api/request#file) - Recupera un file quando `Content-Type` è `multipart/form-data`.
- [`get()`](../api/request#get) - Recupera il parametro di query specifico dall'URL.
- [`param()`](../api/request#param) - Recupera il parametro path specifico dall'URL.

## Oggetto Response

- [`json()`](../api/response#json) - Restituisce un oggetto json come risposta.
- [`status()`](../api/response#status) - Imposta il codice di stato della risposta.
- [`text()`](../api/response#text) - Restituisce il testo come risposta.
