<template lang="pug">
v-container(style='width:100%;height:100vh')
  v-row.fill-height(align-content='center' justify='center')
    v-col.logo-container.text-subtitle-1.text-center(cols='12')
      logo
    v-col(cols='6')
      v-progress-linear(color='#00afff' indeterminate rounded height='6')
</template>

<script>
import Logo from '@/components/Logo'
import { loadKakaoSdk } from '@/util'
import { firebase } from '@firebase/app'
import 'firebase/auth'
import 'firebase/functions'
import { mapMutations } from 'vuex'

export default {
  name: 'AuthCallback',
  components: { Logo },
  props: {
    provider: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  },
  data: () => ({ token: '' }),
  mounted () {
    if (this.isKakao) {
      loadKakaoSdk()
    }

    const _this = this

    if(_this.code) {
      console.log(_this.code)

      const oauth = firebase.functions().httpsCallable('oauth');
      oauth({code: _this.code, provider: _this.provider.toUpperCase()})
        .then(result => {
          console.log(result);

          // Read result of the Cloud Function.
          const token = result.data.oauth_token;
          const fireToken = result.data.firebase_token;

          // 토근이 정상적으로 처리될 경우 로그인 처리합니다.
          firebase.auth().signInWithCustomToken(fireToken)
          .then(result => {

            _this.token = token
            if (_this.isKakao) {
              window.Kakao.Auth.setAccessToken(token)
            }

            const user = result.user
            this.setUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
              accessToken: _this.token
            })
            _this.$router.push('/')
        })
        .catch(error => {
          console.log(error.code)
          console.log(error.message)
          console.log(error.errorMessage)
          alert("토큰이 정상적이지 않습니다. 만료된 토큰이거나 이미 사용된 토큰입니다.")
          _this.$router.push("/signin")
          return
        });
      }).catch(error => {
        console.log(error.code)
        console.log(error.message)
        console.log(error.errorMessage)
        alert("정상적이지 않은 접근입니다. 만료된 데이터이거나 이미 사용된 데이터입니다.")
        _this.$router.push("/signin")
        return
      });
    } else {
      alert("잘못된 방법으로 접근하셨습니다. 로그인 페이지로 이동합니다.")
      _this.$router.push("/signin")
      return
    }
  },
  methods: {
    ...mapMutations({ setUser: 'user/setUser' })
  },
  computed: {
    isKakao () {
      return this.provider === 'kakao'
    }
  }
}
</script>

<style lang="scss" scoped>
.logo-container {
  color: #00afff;
}
</style>