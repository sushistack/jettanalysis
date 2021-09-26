<template lang="pug">
.jett-container
  navigation-bar
  .signin-container
    v-container(fluid)
      v-row
        v-col.ma-auto(cols='12' xs='12' sm='7' md='5' lg='4')
          v-card.px-8.pt-6.pb-12(outlined='')
            v-card-title.text-center JETT Analysis
            v-tabs#tab.mt-5(v-model='tab' color='#00afff' @change='onTabChanged')
              v-tab 소셜 로그인
              v-tab 로그인
              v-tab 회원가입
            v-tabs-items(v-model='tab')
              v-tab-item
                v-card-text.align-self-auto
                  .socials(v-for='social in socials')
                    v-btn(block text large outlined @click='socialSignin(social.type)')
                      img.social-img(
                        :src='social.src'
                        :style='{width: social.size, height: social.size}'
                      )
                      | {{ social.text }}
              v-tab-item
                v-card-text
                  validation-observer(ref='signin' v-slot='{ handleSubmit, reset }')
                    form(@submit.prevent='handleSubmit(signin)' @reset.prevent='reset')
                      validation-provider(v-slot='{ errors }' name='이메일' rules='required|email|min:4|max:256')
                        v-text-field(v-model='email' :error-messages='errors' label='이메일' outlined)
                      validation-provider(v-slot='{ errors }' name='비밀번호' rules='required')
                        v-text-field(v-model='password' type='password' :error-messages='errors' label='비밀번호' outlined)
                      .mt-6.d-flex.justify-end
                        v-btn.white--text(type='submit' depressed color='#00afff') 로그인
              v-tab-item
                v-card-text
                  validation-observer(ref='signup' v-slot='{ handleSubmit, reset }')
                    form(@submit.prevent='handleSubmit(signup)' @reset.prevent='reset')
                      validation-provider(v-slot='{ errors }' name='이름' rules='required|min:1|max:30')
                        v-text-field(v-model='username' :error-messages='errors' label='이름' outlined)
                      validation-provider(v-slot='{ errors }' name='이메일' rules='required|email|min:4|max:256')
                        v-text-field(v-model='email' :error-messages='errors' label='이메일' outlined)
                      validation-provider(v-slot='{ errors }' name='password' rules='required')
                        v-text-field(v-model='password' type='password' :error-messages='errors' label='비밀번호' outlined)
                      validation-provider(v-slot='{ errors }' name='confirm' rules='required|password:@password')
                        v-text-field(v-model='confirmation' type='password' :error-messages='errors' label='비밀번호 확인' outlined)
                      .mt-6.d-flex.justify-end
                        v-btn.white--text(type='submit' depressed color='#00afff') 가입
  page-footer
</template>

<script>
import { getSocialImage, loadKakaoSdk } from '@/util'
import { mapGetters, mapActions } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
const NUXT_APP_BASE_URL = process.env.NUXT_APP_BASE_URL || 'https://jettanalysis.com'
const NUXT_APP_FRONTEND_PORT = process.env.NUXT_APP_FRONTEND_PORT || ''
const FRONTEND_BASE_URL = `${NUXT_APP_BASE_URL}${NUXT_APP_FRONTEND_PORT}`

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  name: 'SignIn',
  data: () => ({
    tab: null,
    username: '',
    email: '',
    password: '',
    confirmation: '',
    socials: [
      { type: 'naver', src: getSocialImage('naver'), size: '32px', text: '네이버 로그인' },
      { type: 'kakao', src: getSocialImage('kakao'), size: '32px', text: '카카오 로그인' },
      { type: 'google', src: getSocialImage('google'), size: '32px', text: '구글 로그인' },
      { type: 'facebook', src: getSocialImage('facebook'), size: '32px', text: '페이스북 로그인' }
    ],
    isSignupMode: false
  }),
  created () {
    if (this.user) this.$router.push('/')
  },
  methods: {
    ...mapActions({
      registerUser: 'user/registerUser',
      sininWithEmailPassword: 'user/sininWithEmailPassword',
      signinWithSocial: 'user/signinWithSocial'
    }),
    onTabChanged (e) {
      switch (e) {
        case 1: return this.resetAll('signin')
        case 2: return this.resetAll('signup')
      }
    },
    signup () {
      this.registerUser({
        user: { email: this.email, password: this.password, username: this.username },
        callback: () => { this.resetAll('signup'); this.$router.push('/') },
        errorCallback: message => { alert(message) }
      })
    },
    signin () {
      this.sininWithEmailPassword({
        user: { email: this.email, password: this.password },
        callback: () => { this.resetAll('signin'); this.$router.push('/') },
        errorCallback: message => { alert(message) }
      })
    },
    socialSignin (providerType) {
      switch (providerType) {
        case 'naver': return this.signinWithNaver()
        case 'kakao': return this.signinWithKakao()
        case 'google': case 'facebook':
          return this.signinWithSocial({
            providerType: providerType,
            callback: () => { this.$router.push('/') },
            errorCallback: message => { alert(message) }
          })
        default: return
      }
    },
    signinWithKakao () {
      loadKakaoSdk(() => {
        Kakao.Auth.authorize({
          redirectUri: `${FRONTEND_BASE_URL}/oauth/callback/kakao`,
          throughTalk: true
        })
      })
    },
    signinWithNaver () {
      const params = {
        response_type: 'code',
        client_id: process.env.NUXT_APP_NAVER_CLIENT_ID || 'kp6cYCSm7hIR0p1fVYtb',
        redirect_url: `${FRONTEND_BASE_URL}/oauth/callback/naver`,
        state: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      }
      
      const url = `https://nid.naver.com/oauth2.0/authorize?${Object.entries(params).map(e => e.join('=')).join('&')}`
      console.log('url', url)
      location.href = url
    },
    resetAll (type) {
      this.username = ''
      this.email = ''
      this.password = ''
      this.confirmation = ''
      const form = type === 'signup' ? this.$refs.signup : this.$refs.signin
      this.$nextTick(() => { form && form.reset() })
    },
    oauthAPI () {
      switch (providerType) {
        case 'google': case 'facebook': return this.signinWithSocial
        case 'naver': return
        case 'kakao': return this.signinWithKakao
      }
    }
  },
  computed: {
    ...mapGetters({ user: 'user/user' })
  }
}
</script>

<style lang="scss" scoped>
.signin-container {
  margin: 5rem 0;
  display: flex;
}
.socials {
  margin: .7rem 0;
}
.social-img {
  position: absolute;
  left: 0;
}
</style>