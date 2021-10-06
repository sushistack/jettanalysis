<template lang="pug">
.jett-container
  navigation-bar
  v-main
    | 프로필
    ul
      li 이름: {{ user ? user.displayName : 'UNKOWN' }}
      li 이메일: {{ user ? user.email : 'UNKOWN' }}
      li 폰번호: {{ user ? user.phoneNumber : '' }}
  page-footer
</template>

<script>
import { mapGetters } from 'vuex'
const NUXT_APP_BASE_URL = process.env.NUXT_APP_BASE_URL || 'https://jettanalysis.com'
const NUXT_APP_FRONTEND_PORT = process.env.NUXT_APP_FRONTEND_PORT || ''
const FRONTEND_BASE_URL = `${NUXT_APP_BASE_URL}${NUXT_APP_FRONTEND_PORT}`

export default {
  name: 'Profile',
  components: {},
  head ({$seoMeta}) {
    const title = '유저 프로필'
    return {
      title: title,
      meta: $seoMeta(
        { 
          title: `${title} | ${process.env.NUXT_APP_SITE_NAME || 'JETT Analysis'}`,
          url: `${FRONTEND_BASE_URL}${this.$route.path}`,
          description: '유저 프로필 페이지입니다.'
        },
        false
      ).concat([ 
        { hid: 'robots', name: 'robots', content: 'noindex, nofollow' },
        { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: `${title} | JETT Analysis` } 
      ]),
      link: [ {rel: 'canonical', href: `${FRONTEND_BASE_URL}${this.$route.path}`} ]
    }
  },
  created () {
    if (!this.user) this.$router.push('/')
  },
  computed: {
    ...mapGetters({ user: 'user/user' }),
    providerType () {
      if (!this.user || !this.user.uid) return 'UNKNOWN'
      return ''
    }
  }
}
</script>