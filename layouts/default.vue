<template lang="pug">
v-app
  nuxt
</template>

<script>
import { loadChannelIOScript, bootChannelIO } from '@/util'

export default {
  name: 'defaultLayout',
  mounted () {
    loadChannelIOScript()
    bootChannelIO()
  }
}
</script>

<style lang="scss">
</style>
