// import i18n from './config/i18n'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Oxfam - Kosten som förkortar livet.',
    htmlAttrs: {
      lang: 'se'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'KOSTEN SOM FÖRKORTAR LIVET - Visste du att den mat som är toppen för din egen hälsa, kan vara förödande för någon annans? Läs mer om vad du äter på www.kortareliv.se'
      },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      {
        hid: 'og-title',
        property: 'og:title',
        content: 'KOSTEN SOM FÖRKORTAR LIVET.'
      },
      {
        hid: 'og-desc',
        property: 'og:description',
        content:
          'Visste du att den mat som är toppen för din egen hälsa, kan vara förödande för någon annans? Läs mer om vad du äter på www.kortareliv.se'
      },
      {
        hid: 'og-image',
        property: 'og:image',
        content: 'https://kortareliv.se/ogimage.jpeg'
      },
      {
        hid: 'og-url',
        property: 'og:url',
        content: 'https://dev.northkingdom.com/oxfam/'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'apple-touch-icon.png'
      },
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/x-icon',
        href: 'favicon-16x16.png'
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/x-icon',
        href: 'favicon-32x32.png'
      },
      {
        rel: 'icon',
        sizes: '192x192',
        type: 'image/x-icon',
        href: 'android-chrome-192x192.png'
      },
      {
        rel: 'icon',
        sizes: '512x512',
        type: 'image/x-icon',
        href: 'android-chrome-512x512.png'
      },
      { rel: 'manifest', href: 'site.webmanifest' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  css: ['./styles/_variables', './styles/app'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            file: 'en.json',
            name: 'English'
          },
          {
            code: 'cmn',
            iso: 'cmn-CN',
            file: 'cmn.json',
            name: '简体中文'
          },
          {
            code: 'se',
            iso: 'se-SV',
            file: 'se.json',
            name: 'Svenska'
          }
        ],
        langDir: 'static/locales/',
        defaultLocale: 'se',
        strategy: 'prefix_except_default',
        differentDomains: false,
        vueI18n: {
          fallbackLocale: 'se'
        },
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'lang',
          redirectOn: 'root'
        }
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  /*
   ** Generate location
   */
  generate: {
    dir: 'dist'
  }
}
