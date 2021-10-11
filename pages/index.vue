<template lang="pug">
.jett-container
  navigation-bar
  v-main
    .structured-data
      span(itemscope itemtype='http://schema.org/Organization')
        link(itemprop='url' href='https://jettanlysis.com')
        a(itemprop='sameAs' href='https://blog.naver.com/jettanalysis')
        a(itemprop='sameAs' href='https://smartstore.naver.com/seolab')
    section
      .top-container
        .inner-container
          .main-banner
            .inner-section-logo
              logo(:size='mainLogoSize' marginTop='15' :jettOnly='true')
            .inner-section-heading
              h1.site-title 마케팅의 모든 것,
                br
                font.identity-color 제트
                |와 함께
            .inner-section-looking-for-service
              button.looking-for-service-btn(
                type='button'
                role='button'
                @click='showService'
              ) 서비스 알아보기
              .arrow-down(@click='focusDiagnosis')
                svg(xmlns='http://www.w3.org/2000/svg' fill="currentColor" width='52' height='52' viewBox='0 0 24 24')
                  path(d='M24 24H0V0h24v24z' fill='none' opacity='.87')
                  path(d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z')
    section.section-diagnoisis
      .inner-container
        .inner-section-title
          p.diagnosis-title 여러분의 사이트는
            font.identity-color  검색엔진 최적화
            | 가 잘되어 있나요?
          small.diagnosis-desc 블로그, 홈페이지, 쇼핑몰 등 여러분의 사이트를 진단해보세요.
        .inner-section-diagnosis
          diagnosis-input(
            ref='diagnosisInput'
            buttonText='진단'
            @onSubmit='onSubmit'
          )
    separater(:deg='0')
  page-footer
</template>

<script>
import DiagnosisInput from '@/components/DiagnosisInput'
import NavigationBar from '@/components/NavigationBar'
import PageFooter from '@/components/PageFooter'
import Separater from '@/components/Separater'
import Feature from '@/components/Feature'
import Logo from '@/components/Logo'
import { SD_FOR_GOOGLE } from '@/util'

const NUXT_APP_BASE_URL = process.env.NUXT_APP_BASE_URL || 'https://jettanalysis.com'
const NUXT_APP_FRONTEND_PORT = process.env.NUXT_APP_FRONTEND_PORT || ''
const FRONTEND_BASE_URL = `${NUXT_APP_BASE_URL}${NUXT_APP_FRONTEND_PORT}`

export default {
  name: "Index",
  components: { DiagnosisInput, NavigationBar, PageFooter, Separater, Feature, Logo },
  head ({$seoMeta}) {
    const title = '검색엔진 최적화 전략 가이드'
    return {
      title: title,
      meta: $seoMeta(
        { 
          title: `${title} | ${process.env.NUXT_APP_SITE_NAME || 'JETT Analysis'}`,
          url: `${FRONTEND_BASE_URL}`,
          description: '이제 검색엔진 최적화는 저희에게 맡기세요! Jett Analysis는 다양한 검색엔진 최적화 전략과 팁을 제공합니다.'
        },
        false
      ).concat({ hid: 'naver-site-verification', name: 'naver-site-verification', content: '0e358a0869dfa65f24120c168925d9b1d706c353' }),
      link: [ {rel: 'canonical', href: `${FRONTEND_BASE_URL}${this.$route.path}`} ],
      script: [{ type: 'application/ld+json', json: SD_FOR_GOOGLE }]
    }
  },
  data: () => ({ snackbar: false }),
  methods: {
    showService () {
      this.$router.push('/service')
    },
    onSubmit (res) {
      if (res.isValid) {
        this.$router.push({ path: '/diagnosis', query: {url: res.url} })
      } else {
        this.snackbar = true
      }
    },
    focusDiagnosis () {
      this.$refs.diagnosisInput.focus()
    }
  },
  computed: {
    mainLogoSize () {
      return this.$vuetify.breakpoint.width > 539 ? 260 : 230
    }
  }
}
</script>

<style lang="scss" scoped>
.top-container {
  overflow: hidden;
  background-image: linear-gradient(180deg, #fff 10%, #eef0f7);
  background-repeat: repeat-x;
}
.inner-container {
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
}

.main-banner {
  > div {
    margin: 2.5rem auto;
    max-width: 300px;
  }
  > .inner-section-logo {
    margin-bottom: 0;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    color: #00afff;
  }
  > .inner-section-heading {
    max-width: 320px;
    margin-top: -.5rem;
    .site-title {
      text-align: center;
      font-size: 40px;
      font-weight: 800;
    }
  }
  > .inner-section-looking-for-service {
    margin-bottom: 1.5rem;
  }
}

.section-diagnoisis {
  padding-top: 7rem;
  > .inner-container > div {
    margin: 0 auto;
  }
  > .inner-container > div.inner-section-title {
    max-width: 460px;
    text-align: center;
    margin-bottom: 2rem;
    p.diagnosis-title {
      font-size: 22px;
      font-weight: 800;
      margin-bottom: 0;
    }
    small.diagnosis-desc {
      color: #666;
    }
  }
  > .inner-container > div.inner-section-diagnosis {
    width: 100%;
    max-width: 460px;
  }
}



.arrow-down {
  width: 48px;
  margin: auto;
  margin-top: 1.5rem;
  color: #888;
  cursor: pointer;
}

.identity-color {
  color: #00afff;
}

.looking-for-service-btn {
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 50px;
  padding: 1.05rem 1.2rem;
  font-size: 1.125rem;
  line-height: 1.4;
  cursor: pointer;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-style: normal;
  white-space: normal;
  -webkit-letter-spacing: 0;
  -moz-letter-spacing: 0;
  -ms-letter-spacing: 0;
  letter-spacing: 0;
  margin: 0;
  cursor: pointer;
  text-transform: none;
  min-height: 3.7875rem;
  font-weight: 800;
  outline: none;
  top: 0;
  right: 0;
  min-width: 170px;
  color: #fff;
  background-color: #00afff;
  border-color: #00afff;
  width: 100%;
}

.looking-for-service-btn:disabled[disabled] {
  cursor: not-allowed;
}

.looking-for-service-btn:disabled[disabled] {
  cursor: not-allowed;
}

.looking-for-service-btn:hover {
  background-color: #0077ff;
  border-color: #0077ff;
}

.looking-for-service-btn:active {
  background-color: #0077ff;
  border-color: #0077ff;
}

@media (min-width: 576px) {
  .inner-container {
    padding-right: 6px;
    padding-left: 10px;
  }
}

@media (min-width: 540px) {
  .inner-container {
    max-width: 540px;
  }
  .main-banner {
    > div {
      margin: 2.5rem auto;
      max-width: 300px;
    }
    > .inner-section-logo {
      margin-bottom: 0;
    }
    > .inner-section-heading {
      max-width: 400px;
      margin-top: -.5rem;
      .site-title {
        text-align: center;
        font-size: 52px;
        font-weight: 800;
      }
    }
    > .inner-section-looking-for-service {
      margin-bottom: 1.5rem;
    }
  }
}

@media (max-width: 767.98px) {
  .looking-for-service-btn {
    width: 100%;
    margin-top: 10px;
  }
}

@media (min-width: 768px) {
  .inner-container {
    max-width: 720px;
  }
  .inner-section-diagnosis {
    margin: 45px 0 0;
  }
}

@media (min-width: 992px) {
  .inner-container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .inner-container {
    max-width: 1140px;
  }
}

@media (min-width: 992px) {
  
}

</style>
