---
title: Body Parser
editLink: true
---

# {{ $frontmatter.title }}

`@lottojs/body-parser` é um de nossos built-in middlewares que permite analisar o corpo da solicitação http a partir de solicitações `POST`, `PUT` e `PATCH`.

[[toc]]

## Content-Types Suportados

Já oferecemos suporte aos `Content-Types` mais comuns:

- Multipart Form (**multipart/form-data**).
- Form URL Encoded (**application/x-www-form-urlencoded**).
- JSON (**application/json**).
- Text (**text/plain**).

## Multipart Form

Falando sobre requests `multipart/form-data`, se você estiver apenas enviando campos de texto, seus dados vão para o objeto [`req.body`](../api/request#body) mas se houver também algum arquivo além de [`req.body`](../api/request#body) você também terá dados no objeto [`req.files`](../api/request#files).

```typescript
lotto.patch('/profile', ({ req, res}) => {
  const { name, email } = req.body;
  // picture é o nome do campo passado na requisição.
  const { picture } = req.files;
  ...
})
```
_PS: Também temos um helper para ajudá-lo a recuperar arquivos de uma forma mais fácil, veja mais no método [req.file()](../api/request#file)_

## Form URL Encoded

O conteúdo que vem de um request `application/x-www-form-urlencoded` tem o mesmo tratamento de uma solicitação [JSON](./body-parser#json) e os dados vão para o [`req.body`](../api/request#body).

```typescript
lotto.patch('/profile', ({ req, res}) => {
  const { name, email } = req.body;
  ...
})
```

Uma coisa interessante é que também tratamos arrays na requisição. Digamos que você tenha um campo chamado `fruits` e queira enviá-lo como um form url encoded e o campo é um array de strings, você pode fazer o seguinte:

Na sua solicitação envie 2 campos chamados `fruits[]` com seu conteúdo e basicamente receba no objeto [`req.body`](../api/request#body).

```typescript
lotto.patch('/fruits', ({ req, res}) => {
  const { fruits } = req.body;
  // objeto fruits será
  // [
  //  'banana',
  //  'abacaxi'
  // ]
  ...
})
```

## JSON

A maneira mais comum, os dados vão para o objeto [`req.body`](../api/request#body) quando você está usando o tipo de conteúdo `application/json`.

```typescript
lotto.patch('/profile', ({ req, res}) => {
  const { name, email } = req.body;
  ...
})
```

## Text Plain

Você também pode receber dados como texto ao usar o Content-Type `text/plain` e os dados também vão para o objeto [`req.body`](../api/request#body) mas agora será uma string em vez de um objeto.

```typescript
lotto.patch('/profile', ({ req, res}) => {
  const text = req.body;
  ...
})
```

## Uso Autônomo

Também é possível utilizá-lo de forma autônoma em outros projetos que não utilizem o `Lotto`.

Ao exportar uma função chamada `bodyParser` que retorna uma função onde você pode passar o objeto `req` vindo do seu servidor http e também uma função `next` para que seu projeto possa executar as próximas chamadas.

```typescript
import { createServer } from 'node:http';
import { paramsParser } from '@lottojs/body-parser';

createServer(
    async (req: IncomingMessage, res: ServerResponse) => {
            ...
            if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
                bodyParser()(req, next())
            }
            ...
    },
)
```

## Github

Se você estiver interessado em saber como funciona mais profundamente, dê uma olhada no código no [Github](https://github.com/lottojs/body-parser).