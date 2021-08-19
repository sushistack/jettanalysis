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
        tooltipText='사이트 진단을 위해 유효한 URL을 입력해주세요'
        buttonText='진단'
        @onButtonClick='diagnose'
      )
    v-main
      .css-15j7bd7
        diagnosis(:diagnosis='diagnosis')
  page-footer
</template>

<script>
import { createDiagnosis } from '@/utils/diagnosis-creator'
import Diagnosis from '@/components/Diagnosis'

export default {
  components: { Diagnosis },
  data: () => ({
    inputOption: {
      name: 'dignosis',
      type: 'text',
      placeholder: 'https://jettanalysis.com',
      isProcessing: false,
    },
    diagnosis: {},
  }),
  methods: {
    async diagnose (url) {
      if (this.diagnosis.url === url) {
        return
      }

      this.inputOption.isProcessing = true
      this.diagnosis = await createDiagnosis(url)
      this.inputOption.isProcessing = false
      // this.diagnosis.url = url
    }
  }
}
</script>


<style lang="scss" scoped>
.wrap {
  font-size: 1.125rem;
  background-color: rgb(255, 255, 255);
  overflow-x: hidden;
}
</style>
