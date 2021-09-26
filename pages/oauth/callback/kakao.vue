<template lang="pug">
.jett-loading-container
  oauth-callback(v-if='code' provider='kakao' :code='code')
</template>

<script>
import OauthCallback from '@/components/oauth/OauthCallback'

export default {
  name: 'CallbackKakao',
  components: { OauthCallback },
  async asyncData({route}) {
    return {
      code: route.query.code
    }
  },
  created () {
    if (!this.code) {
      this.$router.push('/signin')
    }
  }
}
</script>
