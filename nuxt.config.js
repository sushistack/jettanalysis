import colors from 'vuetify/es5/util/colors'
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const NUXT_APP_BASE_URL = process.env.NUXT_APP_BASE_URL || 'https://jettanalysis.com'
const NUXT_APP_FRONTEND_PORT = process.env.NUXT_APP_FRONTEND_PORT || ''
const FRONTEND_BASE_URL = `${NUXT_APP_BASE_URL}${NUXT_APP_FRONTEND_PORT}`

const FALLBACK = {
  TITLE: '검색엔진 최적화 전략 가이드',
  DESCRIPTION: '이제 검색엔진 최적화는 저희에게 맡기세요! JETT Analysis는 다양한 검색엔진 최적화 전략과 팁을 제공합니다.',
  IMAGE: `${FRONTEND_BASE_URL}/images/jett-analysis.jpg`,
  KEYWORDS: ['검색엔진 최적화', 'SEO', '검색순위', '검색 페이지', 'Search Engine Optimization', '검색엔진']
}

const createSitemapRoutes = async () => {
  let routes = []
  let posts = null
  let wikis = null
  const { $content } = require('@nuxt/content')
  if (posts === null || posts.length === 0) {
    posts = await $content('articles', 'blog').fetch()
  }
  if (wikis === null || wikis.length === 0) {
    wikis = await $content('articles', 'wiki').fetch()
  }
  for (const post of posts) {
    routes.push(`blog/${post.slug}`)
  }
  for (const wiki of wikis) {
    routes.push(`wiki/${wiki.slug}`)
  }
  return routes
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
      { hid: 'author', name: 'author', content: 'Jett Analysis' },
      { hid: 'keyword', name: 'keyword', content: FALLBACK.KEYWORDS.join(',') },
      { hid: 'mobile-web-app-capable', name: 'mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: `${FALLBACK.TITLE} | JETT Analysis` },
      { hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: 'white' },
      { hid: 'application-name', name: 'application-name', content: 'JETT Analysis' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=1' },
      { rel: 'apple-touch-icon', href: FALLBACK.IMAGE }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ '@/assets/styles/main.scss' ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/number-abbreviator.js' },
    { src: '~/plugins/vee-validate.js', ssr: false },
    { src: '~/plugins/persisted-state.client.js', mode: 'client' }
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
    hostname: FRONTEND_BASE_URL,
    gzip: true,
    routes: createSitemapRoutes
  },

  seoMeta: {
    defaultDescription: FALLBACK.DESCRIPTION,
    defaultUrl: FRONTEND_BASE_URL,
    defaultImage: FALLBACK.IMAGE,
    siteName: 'JETT Analysis',
    twitterUser: '@jettanalyisis'
  },

  content: {
    liveEdit: false,
    markdown: {
      // https://github.com/remarkjs/remark-external-links#options
      remarkExternalLinks: {
        target: '_blank',
        rel: 'nofollow'
      }
    }
  },

  firebase: {
    config: {
      apiKey: process.env.NUXT_APP_FIREBASE_APIKEY,
      authDomain: process.env.NUXT_APP_FIREBASE_AUTHDOMAIN,
      projectId: process.env.NUXT_APP_FIREBASE_PROJECTID,
      storageBucket: process.env.NUXT_APP_FIREBASE_STORAGEBUCKET,
      messagingSenderId: process.env.NUXT_APP_FIREBASE_MESSAGINGSENDERID,
      appId: process.envFIREBASE_APPID
    },
    services: {
      firestore: true,
      auth: true,
      functions: true
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

  auth: {
    persistence: 'local', // default
    initialize: {
      onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
      onAuthStateChangedAction: 'onAuthStateChangedAction',
      subscribeManually: false
    },
    ssr: false, // default
    emulatorPort: 3000,
    emulatorHost: 'http://localhost',
  },

  functions: {
    location: 'us-central1',
    emulatorPort: 5001,
    emulatorHost: 'http://localhost',
  },

  googleAnalytics: {
    id: 'UA-206750180-1'
  },

  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.NUXT_APP_GOOGLE_ANALYTICS_ID || 'UA-206750180-1'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: false,
      icons: false
    },
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
