<template lang="pug">
v-app
  nuxt
</template>

<script>
import { loadChannelIOScript } from '@/util'

export default {
  name: 'defaultLayout',
  data: () => ({ isChannelScriptLoaded: false }),
  mounted () {
    if (!this.isChannelScriptLoaded) {
      setTimeout(() => { loadChannelIOScript(() => { this.isChannelScriptLoaded = true }) }, 1500)
    }
  }
}
</script>

<style lang="scss">
</style>
