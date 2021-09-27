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

export default {
  name: 'Profile',
  components: {},
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