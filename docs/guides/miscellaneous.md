---
title: Miscellaneous
editLink: true
---

# {{ $frontmatter.title }}

[[toc]]

## Another `Lotto` Projects

We developed also some packages in order to help us on the setup  of our projects and you can take a look here.

### @lottojs/ts-config

Is a basic typescript configuration package with common settings.

If you want to use can do the following:

1. Install the library.

```sh
npm i -D @lottojs/ts-config
```

2. Create a `tsconfig.json` file at the root of your project.

```sh
{
  "extends": "@lottojs/ts-config/base.json",
  "compilerOptions": {
    "outDir": "dist",
  }
}
```

And you are all set to use!

- [GitHub](https://github.com/lottojs/eslint-config) 
- [npm registry](https://www.npmjs.com/@lottojs/eslint-config)

### @lottojs/eslint-config

Is a basic eslint configuration package with common settings.

If you want to use can do the following:

1. Install the library.

```sh
npm i -D eslint @lottojs/eslint-config
```

2. Create a `.eslintrc.json` file at the root of your project.

```sh
{
  "extends": [
    "@lottojs/eslint-config/node"
  ]
}
```

And you are all set to use!

- [GitHub](https://github.com/lottojs/ts-config) 
- [npm registry](https://www.npmjs.com/@lottojs/ts-config)

## Contributing
All forms of contributions are more than welcome! You can contribute in the following ways:

- Create an Issue
- Crea a Pull Request
- Create third-party middlewares
- Share with your friends
- Make your application with `Lotto`.

For more details, see Contribution Guide.

## Other Resources

- [GitHub repository](https://github.com/lottojs)
- [npm registry](https://www.npmjs.com/@lottojs/lotto)
