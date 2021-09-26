<template lang="pug">
.jett-loading-container
  v-container(style='width:100%;height:100vh')
    v-row.fill-height(align-content='center' justify='center')
      v-col.logo-container.text-subtitle-1.text-center(cols='12')
        logo
      v-col(cols='6')
        v-progress-linear(color='#00afff' indeterminate rounded height='6')
</template>

<script>
import Logo from '@/components/Logo'
import { firebase } from '@firebase/app'
import 'firebase/auth'
import 'firebase/functions'
import { mapMutations } from 'vuex'

export default {
  name: 'CallbackNaver',
  components: { Logo },
  data: () => ({ code: null }),
  created () {
    this.provider = 'naver'
    this.code = this.$route.query.code
    console.log('code', this.code)
    if (!this.code) {
      alert('로그인에 실패했습니다.')
      this.$router.push('/signin')
    }
  },
  mounted () {
    const _this = this
    const oauth = firebase.functions().httpsCallable('oauth')

    oauth({code: this.code, provider: this.provider.toUpperCase()})
      .then(result => {
        console.log('oauth success')
        const token = result.data.oauth_token

        firebase.auth().signInWithCustomToken(result.data.firebase_token)
          .then(result => {
            _this.setUserInfo(result.user, token)
            _this.$router.push('/')
          })
          .catch(_this.handleError)
      })
      .catch(_this.handleError)
  },
  methods: {
    ...mapMutations({ setUser: 'user/setUser' }),
    handleError (error) {
      console.log(`code := [${error.code}], message := [${error.message}], errorMessage := [${error.errorMessage}]`)
      this.$router.push('/signin')
    },
    setUserInfo (user, token) {
      this.setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        accessToken: token
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.logo-container {
  color: #00afff;
}
</style>
