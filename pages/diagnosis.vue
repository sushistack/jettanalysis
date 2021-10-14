<template lang="pug">
.jett-container
  navigation-bar
  .wrap
    section
      top-banner(
        title='여러분의 사이트를 진단 해보세요!'
        desc='사이트 진단으로 여러분의 웹사이트 문제점을 확인하고, SEO 최적화 설정에 대해서 알아보세요.'
        :buttonOnly='false'
        type='diagnosis'
        :inputOption='inputOption'
        :directUrl='directUrl'
        :focusInput='isFocusDiagnosis'
        tooltipText='사이트 진단을 위해 유효한 URL을 입력해주세요'
        buttonText='진단'
        @onButtonClick='diagnose'
        @onError='onError'
      )
      .share-container
        span.share-title 공유하기
        .share-inner-container
          share-box(
            :shareUrl='shareUrl'
            :shareTwitter='shareTwitter'
            :shareFacebook='shareFacebook'
            :post='post'
          )
    v-main
      .diagnosis-wrapper(
        v-if='diagnosis'
        ref='diagnosisWrapper'
      )
        diagnosis(:diagnosis='diagnosis')
      section(v-else)
        horizontal-split-box(
          descriptionType='DIAGNOSIS'
          imageUrl='/images/diagnosis-dummy.png'
        )
        separater(:deg='0' :padding='1' :whiteBackground='true')
        horizontal-split-box(
          :isReverse='true'
          descriptionType='WIKI'
          imageUrl='/images/diagnosis-dummy.png'
        )
  diagnosis-snackbar(
    ref='diagnosisSnackbar'
    :text='snackbarText'
  )
  page-footer
</template>

<script>
import { createDiagnosis } from "@/utils/diagnosis-creator"
import Diagnosis from "@/components/Diagnosis"
import DiagnosisSnackbar from '@/components/DiagnosisSnackbar'
import HorizontalSplitBox from '@/components/HorizontalSplitBox'
const NUXT_APP_BASE_URL = process.env.NUXT_APP_BASE_URL || 'https://jettanalysis.com'
const NUXT_APP_FRONTEND_PORT = process.env.NUXT_APP_FRONTEND_PORT || ''
const FRONTEND_BASE_URL = `${NUXT_APP_BASE_URL}${NUXT_APP_FRONTEND_PORT}`

export default {
  components: { Diagnosis, DiagnosisSnackbar, HorizontalSplitBox },
  head ({$seoMeta}) {
    const title = '사이트 검색엔진 최적화 진단'
    return {
      title: title,
      meta: $seoMeta(
        {
          title: `${title} | ${process.env.NUXT_APP_SITE_NAME || 'JETT Analysis'}`,
          url: `${FRONTEND_BASE_URL}${this.$route.path}`,
          description: '사이트 진단으로 여러분의 웹사이트 문제점을 확인하고, SEO 최적화 설정에 대해서 알아보세요.'
        },
        false
      ).concat([ { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: `${title} | JETT Analysis` } ]),
      link: [ {rel: 'canonical', href: `${FRONTEND_BASE_URL}${this.$route.path}`} ]
    }
  },
  async asyncData ({route}) {
    return {
      directUrl: route.query.url ? route.query.url : ''
    }
  },
  data: () => ({
    inputOption: {
      name: "dignosis",
      type: "text",
      placeholder: "https://jettanalysis.com",
      isProcessing: false
    },
    diagnosis: null,
    isFocusDiagnosis: false,
    requestFailed: false,
    snackbar: false,
    snackbarText: ' 페이지 크롤링에 실패하였습니다!',
    post: {
      id: 'diagnosis',
      title: '사이트 검색엔진 최적화 진단 | JETT Analysis',
      description: '사이트 진단으로 여러분의 웹사이트 문제점을 확인하고, SEO 최적화 설정에 대해서 알아보세요.',
      img: 'https://jettanalysis.com/images/jettanalysis.png'
    }
  }),
  async mounted () {
    const url = this.$route.query.url
    const regex = /^(http|https):\/\/[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])*(\.[a-zA-Z]{2,}){1,2}([:\/?][^ㄱ-ㅎㅏ-ㅣ가-힣\s]*)?$|^(market):\/\//
    if (url) {
      if (regex.test(url)) {
        this.inputOption.defaultUrl = url
        await this.diagnose({ isValid: true, url: url })
      } else {
        this.onError(' 유효하지 않은 URL입니다!')    
      }
    }
  },
  methods: {
    async diagnose (res) {
      if (this.diagnosis && this.diagnosis.url === res.url) return
      if (res.url.toLowerCase().indexOf('jettanalysis.com') > -1) return

      if (!res.isValid) {
        this.onError(' 유효하지 않은 URL입니다!')
        return
      }

      this.inputOption.isProcessing = true
      this.diagnosis = await createDiagnosis(res.url)
      this.inputOption.isProcessing = false

      if (!this.diagnosis) {
        this.onError(' 페이지 크롤링에 실패하였습니다!')
      }
      
      this.$nextTick(() => { this.$scrollTo(this.$refs.diagnosisWrapper, 800) })
    },
    onError (text) {
      this.snackbarText = text
      this.$refs.diagnosisSnackbar.show()
    },
    focusDiagnosis () {
      this.isFocusDiagnosis = !this.isFocusDiagnosis
    }
  },
  computed: {
    shareUrl() {
      return `${FRONTEND_BASE_URL}/diagnosis`
    },
    shareTwitter() {
      return `https://twitter.com/share?text=사이트 진단&url=${this.shareUrl}&via=jettanalysis`
    },
    shareFacebook() {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.shareUrl}`
    }
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  font-size: 1.125rem;
  background-color: rgb(255, 255, 255);
  overflow-x: hidden;
}
.site-diagnosis-thumb {
  width: calc(100% - 4rem);
  margin: 5rem 2rem;
}

.share-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: -90px;
}

.share-title {
  text-align: center;
  color: #777;
  font-size: 14px;
  margin-bottom: 10px;
}

.share-inner-container {
  display: flex;
  justify-content: center;
}
</style>

<style lang="scss">
.crawl-error > div { 
  margin-top: 4.5rem;
}
</style>

