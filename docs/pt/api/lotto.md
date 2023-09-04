---
title: Lotto
editLink: true
---

# {{ $frontmatter.title }}

`Lotto` é nossa classe principal e será usada até o final.

[[toc]]

## Constructor

Ele pode receber um objeto chamado internamente `options` e permitirá que você passe 3 chaves opcionais que são: `host`, `port` e `prefix` todas autoexplicativas.

```typescript
/**
 * Roteador HTTP LottoJS
 * @param options Server options
 */
constructor(options?: LottoOptions)
```

Por padrão, se você não passar nenhum valor, cada chave terá o seu padrão:

```json
{
  "host": "0.0.0.0",
  "port": 9004,
  "prefix": "/"
}
```
## Métodos

Uma instância de `Lotto` possui os seguintes métodos.

- lotto.**get**(path, middlewares?, handler)
- lotto.**post**(path, middlewares?, handler)
- lotto.**put**(path, middlewares?, handler)
- lotto.**patch**(path, middlewares?, handler)
- lotto.**delete**(path, middlewares?, handler)
- lotto.**options**(path, middlewares?, handler)
- lotto.**head**(path, middlewares?, handler)
- lotto.**all**(path, middlewares?, handler)
- lotto.**use**(path?, middleware|router)
- lotto.**init**(after)


Todos os métodos, exceto `init`, são usados para roteamento, consulte a seção [Routing](./routing).

## `init()`

Este método faz duas coisas:

1. Cria um servidor `node:http` passando para ele a função `handle` da classe [Router](./routing) como um retorno de chamada passando para ele o objeto [Context](./context).

2. Começa a escutar na porta escolhida ou na porta padrão `9004`. Esta função pode receber um argumento chamado `after` que será executado como um callback após o servidor subir, e aqui por exemplo você pode colocar o início do seu banco de dados ou apenas um log.

```typescript
/**
 * Escuta por conexões
 * @param after Quaisquer callbacks a serem executados após o início do servidor.
 */
init: (after?: (...args: unknown[]) => void) => void
```
