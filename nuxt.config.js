import colors from 'vuetify/es5/util/colors'
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
const FRONTEND_BASE_URL = `${process.env.BASE_URL}${process.env.FRONTEND_PORT}`
const DEFAULT_SITE_DESCRIPTION = 'It\'s time to get backlinks that make a difference. Backlinko is the place for next-level SEO training and link building strategies.'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | JETT Analysis',
    title: '검색엔진 최적화 전략',
    htmlAttrs: { lang: 'ko' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'description', name: 'description', content: DEFAULT_SITE_DESCRIPTION }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ '@/assets/styles/main.scss' ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/number-abbreviator.js' },
    { src: '~/plugins/vee-validate.js', ssr: false },
    { src: '~/plugins/kakao-sdk.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios', '@nuxtjs/dotenv', '@nuxtjs/robots', 
    '@nuxtjs/sitemap', 'nuxt-seo-meta', '@nuxt/content',
    '@nuxtjs/firebase', 'nuxt-clipboard', 'vue-scrollto/nuxt'
  ],

  dotenv: { filename: `.env.${process.env.NODE_ENV}` },

  robots: [
    {
      UserAgent: '*',
      Allow: '/',
      Sitemap: FRONTEND_BASE_URL + '/sitemap.xml'
    }
  ],

  sitemap: {
    hostname: FRONTEND_BASE_URL
  },

  seoMeta: {
    defaultDescription: DEFAULT_SITE_DESCRIPTION,
    defaultUrl: FRONTEND_BASE_URL,
    defaultImage: '/logo.png',
    siteName: 'JETT Analysis',
    twitterUser: ''
  },

  content: {
    liveEdit: false
  },

  firebase: {
    config: {
      apiKey: 'AIzaSyDQSZWb2ip7_dx-IXHzLYptF0oLGkqJWDg',
      authDomain: 'jett-analysis-comments.firebaseapp.com',
      projectId: 'jett-analysis-comments',
      storageBucket: 'jett-analysis-comments.appspot.com',
      messagingSenderId: '525401133908',
      appId: '1:525401133908:web:eb8b1237ec3d3d49d42ec1'
    },
    services: {
      firestore: true
    }
  },

  firestore: {
    memoryOnly: false,
    enablePersistence: true,
    emulatorPort: 3000,
    emulatorHost: 'localhost',
    settings: {
      // Firestore Settings - currently only works in SPA mode
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.pug$/,
        loader: 'pug-plain-loader',
        options: {
          data: {}
        }
      })
    },
    transpile: ['vee-validate/dist/rules']
  }
}
