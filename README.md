Installation
------------

Add/edit this scripts in `package.json`, on the root folder:

```
"scripts": {
  "build": "gulp build & npm run build --prefix themes/xtend-sylius",
  "dev": "gulp shop-watch & npm run dev --prefix themes/xtend-s
  "clean": "php bin/console cache:clear && rm -rf public/assets",ylius",
  "install": "npm install --prefix themes/xtend-sylius",
  "start": "bin/console server:start",
  "stop": "bin/console server:stop",
```

Install theme's node modules, running on the root folder:

```
npm run install
```

Compilation
------------

Compile files, running on the root folder:

```
npm run build
```

Compile files with watch, running on the root folder:

```
npm run dev
```

Eslint
------------

To use eslint theme's settings install, running on the root folder:

```
npm install --save-dev eslint eslint-config-prettier eslint-plugin-prettier prettier-eslint
```
