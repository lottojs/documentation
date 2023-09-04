---
title: Helpers
editLink: true
---

# {{ $frontmatter.title }}

We call helpers some functions inside the framework that turns the developer live more easy and actually we have it either in [`req`](../api/request) object and [`res`](../api/response)

[[toc]]

## Request Object

- [`body()`](../api/request#body) - Retrieve request body.
- [`file()`](../api/request#file) - Retrieve file field when `Content-Type` is `multipart/form-data`.
- [`get()`](../api/request#get) - Retrieve specific query pameter from the URL.
- [`param()`](../api/request#param) - Retrieve specific path pameter from the URL.

## Response Object

- [`json()`](../api/response#json) - Return a json object as response.
- [`status()`](../api/response#status) - Set the response status code.
- [`text()`](../api/response#text) - Return text as response.
