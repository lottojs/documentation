---
title: Base
editLink: true
---

# {{ $frontmatter.title }}

Usare **Lotto** è semplicissimo. Possiamo impostare un progetto in meno di un minuto!

[[toc]]

## Avvio di un Progetto

### Impostare

First of all you will need to initialize a new project and can do it with npm typing the following commands:

```sh
mkdir my-app
cd my-app
npm init -y
```

### Installa Lotto

In pratica per avere la nostra libreria è sufficiente installarla, non è necessaria alcuna configurazione aggiuntiva:

```sh
npm i @lottojs/lotto
```

## Hello World

Ora che hai già impostato il tuo progetto e hai installato **Lotto**, per avere un progetto base puoi farlo:

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

Per impostazione predefinita verrà creato un server http in esecuzione sul seguente indirizzo [0.0.0.0:9004](http://0.0.0.0:9004/), ma è personalizzabile e puoi modificarlo facilmente oppure aggiungere anche un prefisso al tuo URL API semplicemente facendo quanto segue:

```typescript
...
var app = new Lotto({
  host: '192.168.0.1',
  port: 3001,
  prefix: '/api'
})
...
```

Ottimo, ora dovresti avere un progetto **Lotto** configurato e ci è voluto meno di 1 minuto ;).