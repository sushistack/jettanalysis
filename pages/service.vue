<template lang="pug">
.jett-container
  navigation-bar
  .wrap
    section
      product-radio-box(@onSelected='onProductSelected')
    separater(v-show='selectedProductType' ref='sectionSeparater' :deg='180' :padding='3')
    section(v-if='selectedProductType')
      product-detail(:type='selectedProductType')
    section(v-if='selectedProductType')
      .order-sheet-container
        .order-sheet-opener(@click.stop='toggleOrderSheet')
          | 주문서 작성
          svg(xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 24 24' fill='currentColor' width='24' height='24' viewBox='0 0 24 24')
            g
              rect(fill='none' height='24' width='24')
              g
                path(d='M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z')
              path(d='M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z')
        v-expand-transition
          order-sheet(
            ref='orderSheet'
            v-show='showOrderSheet'
            :sheetType='selectedProductType'
          )
  page-footer
</template>

<script>
import ProductRadioBox from '@/components/service/ProductRadioBox'
import ProductDetail from '@/components/service/ProductDetail'
import OrderSheet from '@/components/service/OrderSheet'

const FRONTEND_BASE_URL = `${process.env.BASE_URL}${process.env.FRONTEND_PORT}`

export default {
  name: 'Service',
  components: { ProductRadioBox, ProductDetail, OrderSheet },
  head ({$seoMeta}) {
    const title = 'JETT Analysis 소개'
    return {
      title: title,
      meta: $seoMeta(
        { 
          title: `${title} | ${process.env.SITE_NAME}`,
          url: `${FRONTEND_BASE_URL}/service`,
          description: 'JETT Analysis의 소개 페이지입니다.'
        },
        false
      ),
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
    },
    orderLink () {
      switch (this.selectedProductSeq) {
        case 0: case 1: return `/order?pid=${this.selectedProductSeq}`
        default: return '/service'
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.order-sheet-container {
  display: flex;
  flex-direction: column;
  .order-sheet-opener {
    display: flex;
    justify-content: center;
    margin: auto;
    color: #00afff;
    cursor: pointer;
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 35px;
    padding: 0.5rem 0.75rem;
    border-radius: 10px;
    border: 1px solid transparent;
    svg {
      margin-top: 6px;
    }
  }
  .order-sheet-opener:hover, .order-sheet-opener:active {
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
