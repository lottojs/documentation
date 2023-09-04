---
title: Helpers
editLink: true
---

# {{ $frontmatter.title }}

Chamamos de helpers algumas funções dentro do framework que facilitam a vida do desenvolvedor e atualmente temos isso no objeto [`req`](../api/request) e [`res`](../api/response)

[[toc]]

## Objeto Request

- [`body()`](../api/request#body) - Recupera o corpo da solicitação.
- [`file()`](../api/request#file) - Recupera o um arquivo quando `Content-Type` é `multipart/form-data`.
- [`get()`](../api/request#get) - Recupera um query parameter específico da URL.
- [`param()`](../api/request#param) - Recupera um path parameter específico da URL.

## Objeto Response

- [`json()`](../api/response#json) - Retorna um objeto json como resposta.
- [`status()`](../api/response#status) - Defina o código de status da resposta.
- [`text()`](../api/response#text) - Retorna um texto como resposta.
