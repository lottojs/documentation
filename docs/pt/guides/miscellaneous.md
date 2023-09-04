---
title: Diversos
editLink: true
---

# {{ $frontmatter.title }}

`@lottojs/body-parser` é um de nossos built-in middlewares que permite parsear o corpo da solicitação http a partir de solicitações `POST`, `PUT` e `PATCH`.

[[toc]]

## Outros Projetos `Lotto`

Desenvolvemos também alguns pacotes para nos ajudar na montagem de nossos projetos e você pode dar uma olhada aqui.

### @lottojs/ts-config

É um pacote básico de configuração TypeScript com configurações comuns.

Se deseja usá-lo pode fazer o seguinte:

1. Instale a biblioteca.

```sh
npm i -D @lottojs/ts-config
```

2. Crie um arquivo `tsconfig.json` na raiz do seu projeto.

```sh
{
  "extends": "@lottojs/ts-config/base.json",
  "compilerOptions": {
    "outDir": "dist",
  }
}
```

E pronto!

- [GitHub](https://github.com/lottojs/eslint-config) 
- [npm registry](https://www.npmjs.com/@lottojs/eslint-config)

### @lottojs/eslint-config

É um pacote de configuração básico do eslint com configurações comuns.

Se deseja usá-lo pode fazer o seguinte:

1. Instale a biblioteca.

```sh
npm i -D eslint @lottojs/eslint-config
```

2. Create a .eslintrc.json file at the root of your project.

```sh
{
  "extends": [
    "@lottojs/eslint-config/node"
  ]
}
```

E pronto!

- [GitHub](https://github.com/lottojs/ts-config) 
- [npm registry](https://www.npmjs.com/@lottojs/ts-config)

## Contribuição

Todas as formas de contribuição são mais que bem-vindas! Você pode contribuir das seguintes formas:

- Crie uma issue
- Crie um pull request
- Criar third-party middlewares
- Compartilhe o projeto com os seus amigos
- Faça uma aplicação utilizando `Lotto`.

Para obter mais detalhes, consulte o nosso [Guia de Contribuição]().

## Outros recursos

- [Repositório GitHub](https://github.com/lottojs)
- [npm registry](https://www.npmjs.com/@lottojs/lotto)
