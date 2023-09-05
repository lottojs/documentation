---
title: Varie
editLink: true
---

# {{ $frontmatter.title }}

[[toc]]

## Another `Lotto` Projects

Abbiamo sviluppato anche alcuni pacchetti per aiutarci nell'impostazione dei nostri progetti e puoi dare un'occhiata qui.

### @lottojs/ts-config

È un pacchetto di configurazione base di TypeScript con impostazioni comuni.

Se vuoi usarlo puoi fare quanto segue:

1. Installa la libreria.

```sh
npm i -D @lottojs/ts-config
```

2. Crea un file `tsconfig.json` nella radice del tuo progetto.

```sh
{
  "extends": "@lottojs/ts-config/base.json",
  "compilerOptions": {
    "outDir": "dist",
  }
}
```

E sei pronto per l'uso!

- [GitHub](https://github.com/lottojs/eslint-config) 
- [npm registry](https://www.npmjs.com/@lottojs/eslint-config)

### @lottojs/eslint-config

È un pacchetto di configurazione di base di eslint con impostazioni comuni.

Se vuoi usarlo puoi fare quanto segue:

1. Installa la libreria.

```sh
npm i -D eslint @lottojs/eslint-config
```

2. Crea un file `.eslintrc.json` nella radice del tuo progetto.

```sh
{
  "extends": [
    "@lottojs/eslint-config/node"
  ]
}
```

E sei pronto per l'uso!

- [GitHub](https://github.com/lottojs/ts-config) 
- [npm registry](https://www.npmjs.com/@lottojs/ts-config)

## Contribuire
Qualsiasi forma di contributo è più che benvenuta! Puoi contribuire nei seguenti modi:

- Crea una Issue
- Crea una Pull Request
- Creare Third-party middlewares
- Condividi con i tuoi amici
- Crea la tua applicazione con `Lotto`.

Per ulteriori dettagli, consultare la Guida al contributo.

## Altre Risorse

- [Repositorio GitHub](https://github.com/lottojs)
- [npm registry](https://www.npmjs.com/@lottojs/lotto)
