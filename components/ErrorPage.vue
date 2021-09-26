<template lang="pug">
#error-page
  navigation-bar
  v-main
    v-container(style='width:100%;height:500px')
      v-row.fill-height(align-content='center' justify='center')
        v-col.logo-container.text-subtitle-1.text-center(cols='12')
          img.error-page-hh-illustration(src='/error-monkey.png' alt='error')
        v-col.error-text(cols='6')
          p 죄송합니다. 이 페이지를 사용할 수 없습니다.
          p(v-if='error') {{ `${error.message} (code: ${error.statusCode})` }}
  page-footer
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import PageFooter from '@/components/PageFooter'

export default {
  name: 'ErrorPage',
  props: ['error'],
  components: { NavigationBar, PageFooter }
}
</script>

<style lang="scss" scoped>
.error-text {
  text-align: center;
}
</style>