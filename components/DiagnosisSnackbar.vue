<template lang="pug">
v-snackbar.crawl-error(
  v-model='snackbar'
  timeout='2500'
  rounded='pill'
  width='320'
  min-width='320'
  top
  color='error'
) 
  svg(xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='#fff' viewBox='0 0 24 24' :style='{"margin-bottom": "-3px"}')
    path(d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 6h2v8h-2v-8zm1 12.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z')
  | {{ text }}
  template(v-slot:action='{ attrs }')
    v-btn(color='#fff' text v-bind='attrs' @click='snackbar = false')
      | 닫기
</template>

<script>
export default {
  name: 'DiagnosisSnackbar',
  data: () => ({ snackbar: false }),
  props: {
    text: {
      type: String,
      required: false,
      default: () => ' 유효하지 않은 URL입니다!'
    }
  },
  methods: {
    show () {
      this.snackbar = true
    }
  }
}
</script>