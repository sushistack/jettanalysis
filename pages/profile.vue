<template lang="pug">
.jett-container
  navigation-bar
  v-main
    | 프로필
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
    ...mapGetters({ user: 'user/user' })
  }
}
</script>