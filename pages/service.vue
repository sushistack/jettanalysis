<template lang="pug">
.jett-container
  navigation-bar
  .wrap
    section
      product-radio-box(@onSelected='onProductSelected')
    separater(v-show='selectedProductType' ref='sectionSeparater' :deg='180' :padding='3')
    section(v-if='selectedProductType')
      .order-sheet-container
        .order-sheet-opener(@click.stop='toggleOrderSheet')
          .css-3872h1
            .css-13xd08w 주문서 작성하기
        v-expand-transition
          order-sheet(
            ref='orderSheet'
            v-show='showOrderSheet'
            :sheetType='selectedProductType'
          )
    section(v-if='selectedProductType')
      product-detail(:type='selectedProductType')
  page-footer
</template>

<script>
import ProductRadioBox from '@/components/service/ProductRadioBox'
import ProductDetail from '@/components/service/ProductDetail'
import OrderSheet from '@/components/service/OrderSheet'

const NUXT_APP_BASE_URL = process.env.NUXT_APP_BASE_URL || 'https://jettanalysis.com'
const NUXT_APP_FRONTEND_PORT = process.env.NUXT_APP_FRONTEND_PORT || ''
const FRONTEND_BASE_URL = `${NUXT_APP_BASE_URL}${NUXT_APP_FRONTEND_PORT}`

export default {
  name: 'Service',
  components: { ProductRadioBox, ProductDetail, OrderSheet },
  head ({$seoMeta}) {
    const title = '서비스'
    return {
      title: title,
      meta: $seoMeta(
        { 
          title: `${title} | ${process.env.NUXT_APP_SITE_NAME || 'JETT Analysis'}`,
          url: `${FRONTEND_BASE_URL}${this.$route.path}`,
          description: 'JETT Analysis의 서비스 페이지입니다.'
        },
        false
      ).concat([ { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: `${title} | JETT Analysis` } ]),
      link: [ {rel: 'canonical', href: `${FRONTEND_BASE_URL}${this.$route.path}`} ]
    }
  },
  data: () => ({
    selectedProductSeq: null,
    showOrderSheet: false
  }),
  methods: {
    onProductSelected (seq) {
      this.selectedProductSeq = seq
      this.showOrderSheet = false
      this.$nextTick(() => { this.$scrollTo(this.$refs.sectionSeparater.$el, 500) })
    },
    toggleOrderSheet () {
      this.showOrderSheet = !this.showOrderSheet
      if (this.showOrderSheet) {
        this.$nextTick(() => { this.$scrollTo(this.$refs.orderSheet.$el, 500) })
      }
    }
  },
  computed: {
    selectedProductType () {
      switch (this.selectedProductSeq) {
        case 0: return 'SETTING_SEO'
        case 1: return 'BACKLINK'
        default: return null
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.order-sheet-container {
  display: flex;
  flex-direction: column;
}

.order-sheet-opener {
  width: 100%;
  display: flex;
  justify-content: center;
  .css-3872h1 {
    width: 300px;
  }
}

.css-3872h1 {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 1.5rem;
}

.css-13xd08w {
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
  color: #fff;
  background-color: #00afff;
  border-color: #00afff;
  width: 100%;
  border-radius: 6px;
}

.css-13xd08w:link,.css-13xd08w:visited,.css-13xd08w:hover,.css-13xd08w:active {
  color: #fff;
  -webkit-text-decoration: none;
  text-decoration: none;
}

.css-13xd08w:hover {
  background: #0077ff;
  border-color: #0077ff;
}
</style>
