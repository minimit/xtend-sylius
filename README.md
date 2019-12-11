Installation
------------

Copy files from repository to `themes/xtend-theme-sylius`.

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

Compilation
------------

- Compile `assets/` files, running on the root folder:

```
npm run build
```

- Compile `assets/` files with watch, running on the root folder:

```
npm run dev
```

Eslint
------------

To use eslint theme's settings, running on the root folder:

```
npm install --save-dev eslint eslint-config-prettier eslint-plugin-prettier prettier-eslint
```
