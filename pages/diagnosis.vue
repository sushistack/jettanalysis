<template lang="pug">
.jett-container
  navigation-bar
  .wrap
    section
      top-banner(
        title='당신의 사이트를 진단 해보세요!'
        desc='사이트 진단을 통해 문제점을 확인하고 사이트 최적화를 할 수 있습니다!'
        :buttonOnly='false'
        type='diagnosis'
        :inputOption='inputOption'
        tooltipText='사이트 진단을 위해 유효한 URL을 입력해주세요'
        buttonText='진단'
        @onButtonClick='diagnose'
      )
    v-main
      .diagnosis-wrapper(v-if='diagnosis')
        diagnosis(:diagnosis='diagnosis')
      section(v-else)
        feature(
          to='/diagnosis'
          type='SITE DIAGNOSIS'
          title='진단: 당신의 사이트를 무료로 진단해보세요!'
          desc='검색 엔진 최적화를 위한 온 페이지 사이트 진단을 해보고 사이트의 문제점을 파악해보세요.'
          imageUrl='https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/01/on-page-seo-hero.svg'
        )
     
  page-footer
</template>

<script>
import { createDiagnosis } from "@/utils/diagnosis-creator";
import Diagnosis from "@/components/Diagnosis";

export default {
  components: { Diagnosis },
  data: () => ({
    inputOption: {
      name: "dignosis",
      type: "text",
      placeholder: "https://jettanalysis.com",
      isProcessing: false
    },
    diagnosis: null
  }),
  methods: {
    async diagnose(url) {
      if (this.diagnosis && this.diagnosis.url === url) {
        return;
      }

      this.inputOption.isProcessing = true;
      this.diagnosis = await createDiagnosis(url);
      this.inputOption.isProcessing = false;
      // this.diagnosis.url = url
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  font-size: 1.125rem;
  background-color: rgb(255, 255, 255);
  overflow-x: hidden;
}
</style>
