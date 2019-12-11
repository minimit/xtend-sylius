Installation
------------

Add/edit this scripts in sylius `package.json`:

```
"scripts": {
  "build": "gulp build & npm run build --prefix themes/xtend-sylius",
  "dev": "gulp shop-watch & npm run dev --prefix themes/xtend-s
  "clean": "php bin/console cache:clear && rm -rf public/assets",ylius",
  "install": "npm install --prefix themes/xtend-sylius",
```

Install theme's node modules:

```
npm run install
```

Compilation
------------

Compile files:

```
npm run build
```

Compile files with watch:

```
npm run dev
```
