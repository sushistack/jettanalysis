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
        :focusInput='toggleFocus'
        tooltipText='사이트 진단을 위해 유효한 URL을 입력해주세요'
        buttonText='진단'
        @onButtonClick='diagnose'
        @onError='onError'
      )
    v-main
      .diagnosis-wrapper(
        v-if='diagnosis'
        ref='diagnosisWrapper'
      )
        diagnosis(:diagnosis='diagnosis')
      section(v-else)
        feature(
          type='SITE DIAGNOSIS'
          title='진단: 당신의 사이트를 무료로 진단해보세요!'
          desc='검색엔진 최적화를 위한 온 페이지 사이트 진단을 해보고 사이트의 문제점을 파악해보세요.'
          imageUrl='/images/site-diagnosis.png'
          @onFeatureClick='focusDiagnosisInput'
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
    svg(xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='#fff' viewBox='0 0 24 24' :style='{"margin-bottom": "-3px"}')
      path(d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 6h2v8h-2v-8zm1 12.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z')
    |  {{ snackbarText }}
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
      meta: $seoMeta(
        {
          title: `${title} | ${process.env.SITE_NAME}`,
          url: `${FRONTEND_BASE_URL}/diagnosis`,
          description: '사이트의 검색엔진 최적화 진단을 해보세요!'
        },
        false
      ),
      link: [ {rel: 'canonical', href: `${FRONTEND_BASE_URL}${this.$route.path}`} ]
    }
  },
  data: () => ({
    inputOption: {
      name: "dignosis",
      type: "text",
      placeholder: "https://jettanalysis.com",
      isProcessing: false,
      defaultUrl: ''
    },
    diagnosis: null,
    toggleFocus: false,
    requestFailed: false,
    snackbar: false,
    snackbarText: '페이지 크롤링에 실패하였습니다!'
  }),
  async mounted () {
    const url = this.$route.query.url
    const regex = /^(http|https):\/\/[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])*(\.[a-zA-Z]{2,}){1,2}([:\/?][^ㄱ-ㅎㅏ-ㅣ가-힣\s]*)?$|^(market):\/\//
    if (url) {
      if (regex.test(url)) {
        this.inputOption.defaultUrl = url
        await this.diagnose(url)
      } else {
        this.onError('유효하지 않은 URL입니다!')    
      }
    }
    
  },
  methods: {
    async diagnose(url) {
      if (this.diagnosis && this.diagnosis.url === url) {
        return
      }

      if (url.toLowerCase().indexOf('jettanalysis.com') > -1) {
        return
      }

      this.inputOption.isProcessing = true
      this.diagnosis = await createDiagnosis(url)

      if (!this.diagnosis) {
        this.snackbarText = '페이지 크롤링에 실패하였습니다!'
        this.snackbar = true
      }

      this.inputOption.isProcessing = false
      this.$nextTick(() => { this.$scrollTo(this.$refs.diagnosisWrapper, 800) })
    },
    onError (text) {
      this.snackbarText = text
      this.snackbar = true
    },
    focusDiagnosisInput () {
      this.toggleFocus = !this.toggleFocus
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

