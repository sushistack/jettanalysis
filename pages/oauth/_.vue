<template lang="pug">
.default-error-page
  error-page
</template>

<script>
import ErrorPage from '@/components/ErrorPage'

export default {
  name: 'DefaultErrorPage',
  components: { ErrorPage },
  head () {
    return { title: '이 페이지를 사용할 수 없습니다.' }
  }
}
</script>
