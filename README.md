# WIP pre 1.0 version: api changing fast

## Installation

Download the [latest release](https://github.com/minimit/xtend-theme-sylius/releases/latest).

Copy the files to `themes/xtend-theme-sylius`.

Add/edit this scripts in `package.json`, on the root folder:

```
"scripts": {
  "build": "gulp build & npm run build --prefix themes/xtend-theme-sylius",
  "dev": "gulp shop-watch & npm run dev --prefix themes/xtend-theme-sylius",
  "clean": "php bin/console cache:clear && rm -rf public/assets",
  "install": "npm install --prefix themes/xtend-theme-sylius",
  "start": "bin/console server:start",
  "stop": "bin/console server:stop",
```

Install theme's node modules, running on the root folder:

```
npm run install
```

## Commands

- Compile sylius and theme files:

```
npm run build
```

- Compile sylius and theme files with watch:

```
npm run dev
```

- Clean `public/assets/` folder:

```
npm run clean
```

- Start sylius dev server:

```
npm run start
```

- Stop sylius dev server:

```
npm run stop
```

## Eslint

To use eslint theme's settings, running on the root folder:

```
yarn add --save-dev eslint eslint-config-prettier eslint-plugin-prettier prettier-eslint
```
