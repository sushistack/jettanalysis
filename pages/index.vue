<template lang="pug">
.jett-container
  navigation-bar
  v-main
    section
      .top-container
        .inner-container
          .css-79elbk
            .css-1k9xznr
              .css-8p4et2
                h1.page-title 검색엔진 최적화, 상위노출을 꿈꾸신다면? <br> 제트와 상담하세요
                .recommend-conainer
                  .recommend
                    blockquote.recommend-block
                      p 무료로 제공되는 검색엔진 최적화 사이트 진단, 다양한 정보와 팁들을 확인하세요
                      cite 데이터 분석 기반 마케팅 에이전시, <br> JETT Analysis
                .call-container
                  .call-inner-container
                    .aweber-form-body
                      button.caller-btn.e1fw58rm0(
                        type='button'
                        role='button'
                        @click='counsel'
                      ) 상담하기
              .main-image-container
                figure.figure-image
                  picture
                    img.main-image(src='https://jettanalysis.com/images/main01.png')
      .css-ld04yu
        .css-1py7eya
          blockquote.css-1ptfann
            p “무료로 제공되는 검색엔진 최적화 사이트 진단과 다양한 팁들을 얻을 수 있습니다.”
            cite 데이터 분석 기반 마케팅 에이전시, JETT Analysis
    section
      feature(
        to='/diagnosis'
        type='SITE DIAGNOSIS'
        title='진단: 당신의 사이트를 무료로 진단해보세요!'
        desc='검색 엔진 최적화를 위한 온 페이지 사이트 진단을 해보고 사이트의 문제점을 파악해보세요.'
        imageUrl='/images/site-diagnosis.png'
      )
    section
      separater
    section
      feature(
        to='/blog'
        type='BLOG: SEO TIPS'
        title='2021년 검색엔진 최적화 완벽 가이드'
        desc='효과적이고 확실한 SEO 전략 및 팁을 확인해보세요.'
        imageUrl='/images/site-diagnosis.png'
      )
  page-footer

</template>

<script>
import NavigationBar from "@/components/NavigationBar"
import PageFooter from "@/components/PageFooter"
import Separater from "@/components/Separater"
import Feature from "@/components/Feature"
import Logo from "@/components/Logo"
const FRONTEND_BASE_URL = `${process.env.BASE_URL}${process.env.FRONTEND_PORT}`

export default {
  name: "Index",
  components: { NavigationBar, PageFooter, Separater, Feature, Logo },
  head ({$seoMeta}) {
    const title = '검색엔진 최적화 전략 가이드'
    return {
      title: title,
      meta: $seoMeta(
        { 
          title: `${title} | ${process.env.SITE_NAME}`,
          url: `${FRONTEND_BASE_URL}`,
          description: '이제 검색엔진 최적화는 저희에게 맡기세요! Jett Analysis는 다양한 검색엔진 최적화 전략과 팁을 제공합니다.'
        },
        false
      ).concat({ hid: 'naver-site-verification', name: 'naver-site-verification', content: '0e358a0869dfa65f24120c168925d9b1d706c353' }),
      link: [ {rel: 'canonical', href: `${FRONTEND_BASE_URL}${this.$route.path}`} ]
    }
  },
  methods: {
    counsel () {
      this.$router.push('/counsel')
    }
  }
};
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

.css-79elbk {
  position: relative;
}

.css-1k9xznr {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -10px;
  margin-left: -10px;
}

.css-8p4et2 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 10px;
  padding-left: 10px;
}

.page-title {
  line-height: 1.3;
  font-weight: 800;
  font-size: 32px;
  max-width: 235px;
  margin: 20px 0 calc(100% - 70px);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.recommend-conainer {
  color: #1d2b35;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #ccd3e8;
  font-size: 1rem;
  padding: 25px;
  display: none;
}

.recommend {
  position: relative;
  margin-bottom: 0;
  line-height: 1.6;
  p {
    margin-bottom: 0;
  }
  cite {
    font-style: normal;
    display: block;
    margin-top: 10px;
    font-weight: 400;
    text-transform: none;
    font-size: 1rem;
  }
}

.main-image-container {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 10px;
  padding-left: 10px;
  position: static;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-align-items: flex-end;
  -webkit-box-align: flex-end;
  -ms-flex-align: flex-end;
  align-items: flex-end;
  min-height: 0;
}

.figure-image {
  right: 0;
  margin: 0;
  bottom: 107px;
  overflow: hidden;
  img {
    width: 100%;
    margin-bottom: 0px;
    height: auto;
  }
}

.css-ld04yu {
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
}

.css-1py7eya {
  color: #1d2b35;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #ccd3e8;
  font-size: 1rem;
  padding: 25px;
}

.css-1ptfann {
  position: relative;
  margin-bottom: 0;
  line-height: 1.6;
}

.css-1ptfann p {
  margin-bottom: 0;
}

.css-1ptfann cite {
  font-style: normal;
  display: block;
  margin-top: 10px;
  font-weight: 400;
  text-transform: none;
  font-size: 1rem;
}

@media (min-width: 576px) {
  .inner-container {
    padding-right: 6px;
    padding-left: 10px;
  }
  .css-ld04yu {
    padding-right: 10px;
    padding-left: 10px;
  }
}

@media (min-width: 540px) {
  .inner-container {
    max-width: 540px;
  }
  .page-title {
    max-width: 340px;
    margin: 20px 0 150px;
  }
  .figure-image {
    right: 0;
    bottom: 135px;
    img {
      max-width: 270px;
    }
  }
  .css-ld04yu {
    max-width: 540px;
  }
}

@media (max-width: 767.98px) {
  .recommend-conainer {
    margin-top: 50px;
  }
  .css-1py7eya {
    margin-top: 50px;
  }
}

@media (min-width: 768px) {
  .inner-container {
    max-width: 720px;
  }
  .page-title {
    font-size: 48px;
    max-width: 440px;
    margin: 55px 0 40px;
  }
  .recommend-conainer {
    max-width: 335px;
    display: block;
  }
  .figure-image {
    right: -25px;
    bottom: -7px;
    transform: translateY(-10rem);
    img {
      max-width: 365px;
      margin-bottom: 0;
    }
  }
  .css-ld04yu {
    max-width: 720px;
    display: none;
  }
  .css-1py7eya {
    max-width: 335px;
  }
}

@media (max-width: 991.98px) {
  .figure-image {
    position: absolute;
  }
}

@media (min-width: 992px) {
  .inner-container {
    max-width: 960px;
  }
  .css-8p4et2 {
    -webkit-flex: 0 0 58.33333%;
    -ms-flex: 0 0 58.33333%;
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .page-title {
    max-width: 550px;
    margin: 75px 0 40px;
  }
  .recommend-conainer {
    max-width: 495px;
  }
  .main-image-container {
    -webkit-flex: 0 0 41.66667%;
    -ms-flex: 0 0 41.66667%;
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .figure-image {
    transform: translateY(-10rem);
    img {
      max-width: 520px;
      margin-top: 0px;
    
    }
  }
  .css-ld04yu {
    max-width: 960px;
  }
  .css-1py7eya {
    max-width: 495px;
  }
  .css-1ptfann {
    padding-left: 70px;
  }
}

@media (min-width: 1200px) {
  .inner-container {
    max-width: 1140px;
  }
  .css-8p4et2 {
    padding-left: 30px;
  }
  .page-title {
    font-size: 46px;
  }
  .recommend-conainer {
    max-width: 505px;
  }
  .figure-image {
    margin: 0 0 0 0;
    transform: translateY(-10rem);
  }
  .css-ld04yu {
    max-width: 1140px;
  }
  .css-1py7eya {
    max-width: 505px;
  }
}

.call-container {
  position: relative;
  padding: 18px 0;
}

@media (min-width: 768px) {
  .call-container {
    margin-top: 110px;
  }
}

@media (min-width: 992px) {
  .call-container {
    margin-top: 40px;
    max-width: 495px;
  }
}

@media (min-width: 1200px) {
  .call-container {
    max-width: 505px;
  }
}

.call-container:before {
  content: "";
  position: absolute;
  z-index: 2;
  width: 200vw;
  left: -50vw;
  top: 0;
  display: block;
  height: 1px;
  background-color: #ccd3e8;
}

@media (min-width: 992px) {
  .call-container:before {
    display: none;
  }
}

.call-container:after {
  content: "";
  position: absolute;
  z-index: 1;
  display: block;
  width: 200vw;
  left: -50vw;
  top: 0;
  bottom: 0;
  background-color: #eef0f7;
}

@media (min-width: 768px) and (max-width: 991px) {
  .call-container:after {
    opacity: 0.9;
  }
}

@media (min-width: 992px) {
  .call-container:after {
    display: none;
  }
}

.call-inner-container {
  position: relative;
  z-index: 3;
}
.caller-list {
  position: relative;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

.caller-list-item {
  margin-bottom: 0;
  padding: 0;
}

.caller-input {
  display: block;
  width: 100%;
  height: 3.7875rem;
  padding: 1.05rem 1.2rem;
  font-family: Inter;
  font-weight: 400;
  line-height: 1.4;
  color: #000;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  font-size: 11.25px;
  font-size: 1.125rem;
  border-color: #ccd3e8;
  font-family: "Inter";
}

.caller-input::-ms-expand {
  background-color: transparent;
  border: 0;
}

.caller-input:focus {
  color: #000;
  background-color: #fff;
  border-color: #00d07e;
  outline: 0;
  box-shadow: none;
}

.caller-input::-webkit-input-placeholder {
  color: #a5a5a5;
  opacity: 1;
}

.caller-input::-moz-placeholder {
  color: #a5a5a5;
  opacity: 1;
}

.caller-input:-ms-input-placeholder {
  color: #a5a5a5;
  opacity: 1;
}

.caller-input::placeholder {
  color: #a5a5a5;
  opacity: 1;
}

.caller-input:disabled,
.caller-input[readonly] {
  background-color: #e6e6e6;
  opacity: 1;
}

.caller-btn {
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
  font-weight: 700;
  min-height: 3.7875rem;
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
  padding: 1.05rem 1.2rem;
  font-size: 1.5rem;
  line-height: 1.4;
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
  cursor: pointer;
  text-transform: none;
  font-weight: 600;
  min-height: 3.7875rem;
  outline: none;
  border-radius: 6px;
  top: 0;
  right: 0;
  min-width: 170px;
  color: #fff;
  background-color: #00afff;
  border-color: #00afff;
  width: 100%;
}

.caller-btn:disabled[disabled] {
  cursor: not-allowed;
}

.caller-btn:disabled[disabled] {
  cursor: not-allowed;
}

.caller-btn:hover {
  background-color: #0077ff;
  border-color: #0077ff;
}

.caller-btn:active {
  background-color: #0077ff;
  border-color: #0077ff;
}

@media (max-width: 767.98px) {
  .caller-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
