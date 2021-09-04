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
      .diagnosis-wrapper(
        v-if='diagnosis'
        ref='diagnosisWrapper'
      )
        diagnosis(:diagnosis='diagnosis')
      section(v-else)
        feature(
          to='/diagnosis'
          type='SITE DIAGNOSIS'
          title='진단: 당신의 사이트를 무료로 진단해보세요!'
          desc='검색엔진 최적화를 위한 온 페이지 사이트 진단을 해보고 사이트의 문제점을 파악해보세요.'
          imageUrl='https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/01/on-page-seo-hero.svg'
        )
  v-snackbar.crawl-error(
    v-model='snackbar'
    timeout='2500'
    rounded='pill'
    width='320'
    min-width='320'
    top
    color='error'
  ) 
    v-icon(:style='{"margin-top": "-5px"}') mdi-alert-circle-outline
    |  페이지 크롤링에 실패하였습니다!
    template(v-slot:action='{ attrs }')
      v-btn(color='#fff' text v-bind='attrs' @click='snackbar = false')
        | 닫기
  page-footer
</template>

<script>
import { createDiagnosis } from "@/utils/diagnosis-creator"
import Diagnosis from "@/components/Diagnosis"
const FRONTEND_BASE_URL = `${process.env.BASE_URL}${process.env.FRONTEND_PORT}`

export default {
  components: { Diagnosis },
  head ({$seoMeta}) {
    const title = '사이트 검색엔진 최적화 진단'
    return {
      title: title,
      meta: $seoMeta({ 
        title: `${title} | ${process.env.SITE_NAME}`,
        url: `${FRONTEND_BASE_URL}/diagnosis`,
        description: '사이트의 검색엔진 최적화 진단을 해보세요!'
      },
      false
    )}
  },
  data: () => ({
    inputOption: {
      name: "dignosis",
      type: "text",
      placeholder: "https://jettanalysis.com",
      isProcessing: false
    },
    diagnosis: null,
    requestFailed: false,
    snackbar: false
  }),
  methods: {
    async diagnose(url) {
      if (this.diagnosis && this.diagnosis.url === url) {
        return
      }

      this.inputOption.isProcessing = true
      this.diagnosis = await createDiagnosis(url)

      if (!this.diagnosis) {
        this.snackbar = true
      }

      this.inputOption.isProcessing = false
      this.$nextTick(() => { this.$scrollTo(this.$refs.diagnosisWrapper, 800) })
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

<style lang="scss">
.crawl-error > div { 
  margin-top: 4.5rem;
}
</style>

