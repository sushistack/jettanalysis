<template lang="pug">
#error-page
  navigation-bar
  v-main
    .error-page-content
      img.error-page-hh-illustration(src='/error-monkey.png' alt='error')
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


<style lang="scss">
#error-page {
  text-align: center;
  height: 100%;
  white-space: nowrap;
  word-break: normal;
  .error-page-content {
    margin: 10rem 0;
    display: inline-block;
    .error-page-hh-illustration {
      margin-bottom: 10px;
    }
    p {
      width: 500px;
      margin: auto;
      color: #333;
      font-size: 16px;
      white-space: normal;
      text-shadow: 0 0 0 transparent, 0 1px 1px #fff;
    }
  }
}
</style>
