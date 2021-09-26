<template lang="pug">
.jett-container
  navigation-bar
  v-main
    | 결제 내역
  page-footer
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PaymentHistory',
  components: {},
  created () {
    if (!this.user) this.$router.push('/')
  },
  computed: {
    ...mapGetters({ user: 'user/user' })
  }
}
</script>