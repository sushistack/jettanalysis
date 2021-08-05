<template lang="pug">
.jett-container
  navigation-bar
  .wrap
    section
      top-banner(
        title='당신의 사이트를 진단 해보세요!'
        desc='사이트 진단을 통해 문제점을 확인하고 사이트 최적화를 할 수 있습니다!'
        :buttonOnly='false'
        :inputOption='inputOption'
        buttonText='진단'
      )
    v-main
      .css-15j7bd7
  page-footer
</template>

<script>
export default {
  data: () => ({
    inputOption: {
      name: 'dignosis',
      type: 'text',
      placeholder: 'https://jettanalysis.com'
    }
  })
}
</script>


<style lang="scss" scoped>
.wrap {
  font-size: 1.125rem;
  background-color: rgb(255, 255, 255);
  overflow-x: hidden;
}
</style>
