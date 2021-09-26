<template lang="pug">
.css-za4qqw
  .css-17ia555
    h1.css-1bk7ox4 {{ title }}
    .css-70qvj9
      .css-1c7u7ph
        p {{ desc }}
    .input-action-container
      diagnosis-input(
        :buttonOnly='buttonOnly'
        :buttonText='buttonText'
        :defaultUrl='defaultUrl'
        :loading='inputOption && inputOption.isProcessing'
        @onSubmit='onSubmit'
      )
      .share-box-wrapper(v-if='type === "diagnosis"')
        .share-box
          .share-title 공유하기
          share-box(
            :post='post'
            :shareTwitter='shareTwitter'
            :shareFacebook='shareFacebook'
            :shareUrl='shareUrl'
          )
</template>

<script>
import ShareBox from '@/components/ShareBox'
import DiagnosisInput from './DiagnosisInput'
const NUXT_APP_BASE_URL = process.env.NUXT_APP_BASE_URL || 'https://jettanalysis.com'
const NUXT_APP_FRONTEND_PORT = process.env.NUXT_APP_FRONTEND_PORT || ''
const FRONTEND_BASE_URL = `${NUXT_APP_BASE_URL}${NUXT_APP_FRONTEND_PORT}`

export default {
  name: "TopBanner",
  components: { ShareBox, DiagnosisInput },
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    buttonOnly: {
      type: Boolean,
      required: true
    },
    inputOption: {
      type: Object,
      required: false
    },
    focusInput: {
      type: Boolean,
      required: false,
      default: () => false
    },
    tooltipText: {
      type: String,
      required: false
    },
    buttonText: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: () => "NO"
    }
  },
  data: () => ({
    url: '',
    post: {
      id: 'diagnosis',
      title: '사이트 SEO 진단하기 | JETT Analysis',
      description: "여러분의 사이트가 SEO 최적화 조건에 맞는지 진단해보세요!",
      img: "https://jettanalysis.com/images/jett-analysis.jpg"
    }
  }),
  methods: {
    onSubmit (res) {
      this.$emit("onButtonClick", res)
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
    },
    defaultUrl () {
      if (!this.inputOption || !this.inputOption.defaultUrl) return ''
      return this.inputOption.defaultUrl
    }
  },
  watch: {
    focusInput: function (n, o) {
      if (n !== o) {
        this.$refs.diagnosisInput.focus()
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.css-za4qqw {
  background-image: linear-gradient(180deg, #fff 10%, #eef0f7);
  padding: 60px 0 70px;
}

.css-17ia555 {
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
}

.css-1bk7ox4 {
  margin-bottom: 40px;
  font-size: 32px;
}

.css-70qvj9 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}


.css-1c7u7ph {
  text-align: center;
  line-height: 1.6;
  max-width: 330px;
}

.css-1c7u7ph strong {
  font-weight: 600;
}

.css-1c7u7ph *:last-child {
  margin-bottom: 0 !important;
}

.input-action-container {
  width: 100%;
  margin: 35px 0 0;
  max-width: 460px;
}

.share-box-wrapper {
  margin-top: 2rem;
}

.share-box {
  justify-content: center;
  display: flex;
  padding: 1rem;
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  width: 250px;
  margin: 0 auto;
  position: relative;
}

.share-title {
  position: absolute;
  left: 10px;
  top: -10px;
  font-size: 14px;
  padding: 0 .3rem;
  border-left: 1px;
  border-right: 1px;
  border-top: 0;
  border-bottom: 0;
  background: #fff;
  border-style: solid;
  border-radius: 2px;
  border-color: #ebebeb;
  font-weight: bold;
}

@media (min-width: 576px) {
  .css-17ia555 {
    padding-right: 10px;
    padding-left: 10px;
  }
}

@media (min-width: 540px) {
  .css-17ia555 {
    max-width: 540px;
  }
}

@media (max-width: 767.98px) {
  .css-za4qqw {
    border-bottom: 1 solid #ccd3e8;
  }
}

@media (min-width: 768px) {
  .css-17ia555 {
    max-width: 720px;
  }
  .css-za4qqw {
    padding: 90px 0 135px;
  }
  .css-1bk7ox4 {
    font-size: 48px;
  }
  .input-action-container {
    margin: 45px 0 0;
  }
}

@media (min-width: 992px) {
  .css-17ia555 {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .css-17ia555 {
    max-width: 1140px;
  }
}
</style>
