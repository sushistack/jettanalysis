<template lang="pug">
.jett-container
  navigation-bar
  .signin-container
    v-container(fluid)
      v-row
        v-col.ma-auto(cols='12' xs='12' sm='7' md='5' lg='4')
          v-card.px-8.pt-6.pb-12(outlined='')
            v-card-title.text-center JETT Analysis
            v-tabs#tab.mt-5(v-model='tab' color='#00afff')
              v-tab 소셜 로그인
              v-tab 로그인
            v-tabs-items(v-model='tab')
              v-tab-item
                v-card-text.align-self-auto
                  .socials(v-for='social in socials')
                    v-btn(block text large outlined :href='socialLoginUrl(social.type)')
                      img.social-img(
                        :src='social.src'
                        :style='{width: social.size, height: social.size}'
                      )
                      | {{ social.text }}
              v-tab-item
                v-card-text
                  validation-observer(ref='form' v-slot='{ handleSubmit, reset }')
                    form(@submit.prevent='handleSubmit(signIn)' @reset.prevent='reset')
                      validation-provider(v-slot='{ errors }' name='이메일' rules='required|email|min:4|max:256')
                        v-text-field(v-model='email' :error-messages='errors' label='이메일' outlined)
                      validation-provider(v-slot='{ errors }' name='비밀번호' rules='required|password')
                        v-text-field(v-model='password' type='password' :error-messages='errors' label='비밀번호' outlined)
                      .mt-6.d-flex.justify-end
                        v-btn.white--text(type='submit' depressed color='#00afff') 로그인
  page-footer
</template>

<script>
import { getSocialLoginUrl, getSocialImage } from '@/util'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  name: 'SignIn',
  data: () => ({
    tab: null,
    email: '',
    password: '',
    socials: [
        { type: 'google', src: getSocialImage('google'), size: '32px', text: '구글 로그인' },
        { type: 'facebook', src: getSocialImage('facebook'), size: '32px', text: '페이스북 로그인' },
        { type: 'naver', src: getSocialImage('naver'), size: '32px', text: '네이버 로그인' },
        { type: 'kakao', src: getSocialImage('kakao'), size: '32px', text: '카카오 로그인' }
      ]
  }),
  mounted () {
    console.log('process.env', process.env.BASE_URL)
  },
  methods: {
    ...mapActions({
      fetchUser: 'user/fetchUser'
    }),
    ...mapMutations({
      setToken: 'auth/setToken'
    }),
    signIn() {
      this.$api.signIn(
        { id: this.email, password: this.password, socialType: 'LOCAL' },
        body => {
          this.setToken(body.token)
          this.fetchUser(
            () => { this.$router.push('/') },
            err => { console.error('error', err.message) }
          )
        },
        err => { console.error('error', err.message) }
      )
    },
    socialLoginUrl (socialType) {
      return getSocialLoginUrl(socialType)
    }
  },
  computed: {
    ...mapGetters({
      token: 'auth/token'
    })
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