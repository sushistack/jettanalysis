import colors from 'vuetify/es5/util/colors'
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
const FRONTEND_BASE_URL = `${process.env.BASE_URL}${process.env.FRONTEND_PORT}`

const FALLBACK = {
  TITLE: '검색엔진 최적화 전략 가이드',
  DESCRIPTION: '이제 검색 엔진 최적화는 저희에게 맡기세요! Jett Analysis는 다양한 검색엔진 최적화 전략과 팁을 제공합니다.',
  IMAGE: `${FRONTEND_BASE_URL}/images/jett-analysis.jpg`,
  KEYWORDS: ['검색 엔진 최적화', 'SEO', '검색순위', '검색 페이지', 'Search Engine Optimization', '검색 엔진']
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | JETT Analysis',
    title: FALLBACK.TITLE,
    htmlAttrs: { lang: 'ko' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'description', name: 'description', content: FALLBACK.DESCRIPTION },
      { hid: 'author', name: 'author', content: 'Jett Analysis' },
      { hid: 'keywords', name: 'keywords', content: FALLBACK.KEYWORDS.join(',') },
      { hid: 'facebook-url', property: 'og:url', content: FRONTEND_BASE_URL },
      { hid: 'facebook-local', property: 'og:locale', content: 'ko' },
      { hid: 'facebook-title', property: 'og:title', content: `${FALLBACK.TITLE} | JETT Analysis` },
      { hid: 'facebook-description', property: 'og:description', content: `${FALLBACK.TITLE} | JETT Analysis` },
      { hid: 'facebook-site_name', property: 'og:site_name', content: 'JETT Analysis' },
      { hid: 'facebook-image', property: 'og:image', content: FALLBACK.IMAGE },
      { hid: 'twitter-card', property: 'twitter:card', content: 'summary' },
      { hid: 'twitter-title', property: 'twitter:title', content: `${FALLBACK.TITLE} | JETT Analysis` },
      { hid: 'twitter-description', property: 'twitter:description', content: FALLBACK.DESCRIPTION },
      { hid: 'twitter-site', property: 'twitter:site', content: '@jettanalysis' },
      { hid: 'twitter-image', property: 'twitter:image', content: FALLBACK.IMAGE },
      { hid: 'twitter-creator', property: 'twitter:creator', content: '@jettanalysis' },
      { hid: 'mobile-web-app-capable', name: 'mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: `${FALLBACK.TITLE} | JETT Analysis` },
      { hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: 'white' },
      { hid: 'application-name', name: 'application-name', content: 'JETT Analysis' },
      { hid: 'apple-touch-icon', name: 'apple-touch-icon', content: FALLBACK.IMAGE }
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
    '@nuxtjs/firebase', 'nuxt-clipboard', 'vue-scrollto/nuxt',
    '@nuxtjs/google-analytics'
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
    defaultDescription: FALLBACK.DESCRIPTION,
    defaultUrl: FRONTEND_BASE_URL,
    defaultImage: FALLBACK.IMAGE,
    siteName: 'JETT Analysis',
    twitterUser: '@jettanalyisis'
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

  googleAnalytics: {
    id: 'UA-206750180-1'
  },

  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
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
