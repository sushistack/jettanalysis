<template lang="pug">
.jett-loading-container
  oauth-callback(v-if='code' provider='naver' :code='code')
</template>

<script>
import OauthCallback from '@/components/oauth/OauthCallback'

export default {
  name: 'CallbackNaver',
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