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
    bootChannelIO({ pluginKey: process.env.CHANNEL_IO_PLUGINKEY })
  }
}
</script>

<style lang="scss">
</style>
