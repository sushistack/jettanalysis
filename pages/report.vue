<template lang="pug">
.jett-container
  navigation-bar
  v-main
    | 리포트
  page-footer
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Report',
  components: {},
  created () {
    if (!this.user) this.$router.push('/')
  },
  computed: {
    ...mapGetters({ user: 'user/user' })
  }
}
</script>