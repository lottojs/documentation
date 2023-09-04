---
title: Response
editLink: true
---

# {{ $frontmatter.title }}

O objeto `res` contém dados a serem passados ​​como resposta e também helper que você também pode encadear entre os mesmos.

[[toc]]

## `res`: Response

```typescript
interface Response extends ServerResponse {
    /**
     * Enviar resposta como application/json.
     *
     * Exemplos:
     *
     *     res.json(null);
     *     res.json({ fruit: 'apple' });
     *     res.status(200).json('oh we are here!');
     * @param body Informação a ser transformada em JSON
     * @returns Response
     */
    json: (body?: any) => Response

    /**
     * Setar um `código` de status.
     * @param code HTTP status code e.g. 200, 201, 400, 404...
     * @returns Response
     */
    status: (code: number) => Response

    /**
     * Enviar uma resposta text/plain.
     *
     * Exemplos:
     *
     *     res.text('hello world!');
     *     res.status(200).text('oh we are here!');
     * @param body Data to be transformed on text.
     * @returns Response
     */
    text: (body: unknown) => Response
}
```
_PS: A interface ServerResponse faz parte da node:http api_

## `json()`

É um helper que permitirá retornar uma resposta JSON dentro de sua requisição.

```typescript
lotto.get('/ping', ({ res }) => {
  return res.json({
    message: 'pong'
  })
  ...
})
```
_PS: Você não precisa chamar um middleware para parsear json na solicitação, pois já fazemos isso internamente com nosso middleware [@lottojs/body-parser](../middlewares/body-parser)._


## `status()`

É um helper que permite definir um código de status para a resposta da sua solicitação.

```typescript
lotto.get('/ping', ({ res }) => {
  return res.status(200).json({
    message: 'pong'
  })
  ...
})
```

## `text()`

Em vez de retornar um json, você também pode definir uma resposta de texto.

```typescript
lotto.get('/ping', ({ res }) => {
  return res.status(200).text('pong.')
  ...
})
```