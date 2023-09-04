---
title: Básico
editLink: true
---

# {{ $frontmatter.title }}

Usar o **Lotto** é super fácil. Podemos configurar um projeto em menos de um minuto!

[[toc]]

## Iniciando um projeto

### Setup

Primeiro de tudo você precisará inicializar um novo projeto e pode fazer isso com npm digitando os seguintes comandos:

```sh
mkdir my-app
cd my-app
npm init -y
```

### Instalar Lotto

Basicamente para ter nossa biblioteca basta instalá-la, não há necessidade de nenhuma configuração adicional:

```sh
npm i @lottojs/lotto
```

## Hello World

Agora que você já configurou seu projeto e tem o **Lotto** instalado, para ter um projeto básico você pode fazer isso:

`ES6 Import Syntax`
```typescript
import { Lotto } from '@lottojs/lotto';

const app = new Lotto();

app.get('ping', ({ res }) => res.text('pong'));

app.init();
```

::: details Javascript Require Syntax
```typescript
const { Lotto } = require('@lottojs/lotto');

var app = new Lotto();

app.get('ping', ({ res }) => res.text('pong'));

app.init();
```
:::

Por padrão, ele criará um servidor http rodando no seguinte endereço [0.0.0.0:9004](http://0.0.0.0:9004/), mas é personalizável e você pode alterá-lo facilmente e também adicionar um prefixo na URL de sua API apenas fazendo o seguinte:

```typescript
...
var app = new Lotto({
  host: '192.168.0.1',
  port: 3001,
  prefix: '/api'
})
...
```

Ótimo, agora você deve ter um projeto **Lotto** configurado e nem levou 1 minuto ;).