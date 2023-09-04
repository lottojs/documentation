---
title: Basic
editLink: true
---

# {{ $frontmatter.title }}

Using **Lotto** is super easy. We can setup a project in less than one minute!

[[toc]]

## Starting a project

### Setup

First of all you will need to initialize a new project and can do it with npm typing the following commands:

```sh
mkdir my-app
cd my-app
npm init -y
```

### Install Lotto

Basically in order to have our library you just have to install it, there's no need to any additional configuration:

```sh
npm i @lottojs/lotto
```

## Hello World

Now that you already have setted up your project and has **Lotto** installed, in order to have a basic project you can do that:


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

By default it will rise's up a http server running on the following address [0.0.0.0:9004](http://0.0.0.0:9004/), but it's customizable and you can easily change it and also adds a prefix to your api url just doing the following:

```typescript
...
var app = new Lotto({
  host: '192.168.0.1',
  port: 3001,
  prefix: '/api'
})
...
```

Great, now you should have a **Lotto** project setted up and it took less than 1 minute ;).