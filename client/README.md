# client

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

## Copy & Localisation
Copy document [here](https://docs.google.com/spreadsheets/d/1rCS0IdEqm3-kqheTNpQV1WQiV6XC5xLi0uWiaaTagoQ/edit#gid=0)  
  
#### Setup & Usage
- Add `credentials.json` and `token.json` to the folder `config/` in the tools folder.
> Credentails and token files can be found in NK's 1Password vault.  
- If you do not have `token.json` credentials, add only `credentials.json`, and run command below. It will autogenerate `token.json` file for you
- Run `npm run import:copy` 
- Implement copy in code using [Nuxt's i18n](https://i18n.nuxtjs.org/)


The copy document will contain X languages and in order to support all of them we need to map them into the application what languages are we going to support.  
To do this open [nuxt.config.js](nuxt.config.js) and edit `i18n` property (keep in mind to always leave default "se" last in the list, as per i18n docs suggestion).  
```js
locales: [
  { code: 'se', iso: 'sv-SE', file: 'sv.json', dir: 'ltr' },
]
```