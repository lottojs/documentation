---
title: Lotto
editLink: true
---

# {{ $frontmatter.title }}

`Lotto` è la nostra classe principale e verrà utilizzata fino alla fine.

[[toc]]

## Constructor

Può ricevere un oggetto internamente chiamato `options` e ti consentirà di passare 3 chiavi opzionali che sono: `host`, `port` e `prefix`, tutte autoesplicative.

```typescript
/**
 * Router HTTP LottoJS
 * @param options Opzioni del server
 */
constructor(options?: LottoOptions)
```

Per impostazione predefinita, se non passi alcun valore, ogni chiave ha un valore predefinito:

```json
{
  "host": "0.0.0.0",
  "port": 9004,
  "prefix": "/"
}
```
## Metodi

Un'istanza di `Lotto` ha i seguenti metodi.

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


Tutti i metodi escluso `init` vengono utilizzati per il routing, fare riferimento alla sezione [Routing](./routing).

## `init()`

Questo metodo fa due cose:

1. Crea un server `node:http` passandogli la funzione `handle` dalla classe [Router](./routing) come callback passandogli l'oggetto [Context](./context).

2. Inizia l'ascolto sulla porta scelta o su quella predefinita `9004`. Questa funzione può ricevere un argomento chiamato `after` che verrà eseguito come callback dopo che il server si è attivato, e qui ad esempio puoi inserire l'inizio del database o semplicemente un registro.

```typescript
/**
 * Ascolta le connessioni.
 * @param after Eventuali callback da eseguire dopo l'avvio del server.
 */
init: (after?: (...args: unknown[]) => void) => void
```
