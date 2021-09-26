<template lang="pug">
.jett-loading-container
  oauth-callback(v-if='code' provider='kakao' :code='code')
</template>

<script>
import OauthCallback from '@/components/oauth/OauthCallback'

export default {
  name: 'CallbackKakao',
  components: { OauthCallback },
  data: () => ({ code: null }),
  created () {
    this.code = this.$route.query.code
    if (!this.code) {
      this.$router.push('/signin')
    }
  }
}
</script>
