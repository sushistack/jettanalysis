<template lang="pug">
.jett-container
  navigation-bar
  .wrap
    section
      product-radio-box(
        :preCheckedSeq='productId'
        @onSelected='onProductSelected'
      )
    separater(v-show='selectedProductType' ref='sectionSeparater' :deg='180' :padding='3')
    section(v-if='selectedProductType')
      product-detail(:type='selectedProductType')
    section(v-if='selectedProductType')
      .order-container
        router-link.order-btn(:to='orderLink') 
          svg(xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 24 24' fill='currentColor' width='48' height='48' viewBox='0 0 24 24')
            g
              rect(fill='none' height='24' width='24')
              g
                path(d='M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z')
              path(d='M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z')
          | 주문서 작성하기
  page-footer
</template>

<script>
import ProductRadioBox from '@/components/service/ProductRadioBox'
import ProductDetail from '@/components/service/ProductDetail'

const FRONTEND_BASE_URL = `${process.env.BASE_URL}${process.env.FRONTEND_PORT}`

export default {
  name: 'Service',
  components: { ProductRadioBox, ProductDetail },
  async asyncData ({ route }) {
    return {
      productId: Number(route.query.pid)
    }
  },
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
    selectedProductSeq: null
  }),
  mounted () {
    if (this.productId !== null || this.productId !== undefined) {
      this.selectedProductSeq = this.productId
    }
    if (Object.keys(this.$route.query).length > 0) {
      this.$router.replace({'query': null})
    }
  },
  methods: {
    onProductSelected (seq) {
      this.selectedProductSeq = seq
      this.$nextTick(() => { this.$scrollTo(this.$refs.sectionSeparater.$el, 500) })
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

.order-btn {
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
  font-weight: 800;
  min-height: 3.7875rem;
  color: #00afff;
  border-color: #0077ff;
  border: 1px solid;
  width: 100%;
  border-radius: 6px;
  font-size: 24px;
  height: 100px;
}

.order-btn:link,.order-btn:visited,.order-btn:hover,.order-btn:active {
  color: #00afff;
  border-color: #00afff;
  -webkit-text-decoration: none;
  text-decoration: none;
}

.order-btn:hover {
  background: #eee;
  color: #0077ff;
  border-color: #0077ff;
}

.order-container {
  margin: auto;
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 4rem;
}

@media (min-width: 540px) {
  .order-container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .order-container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .order-container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .order-container {
    max-width: 1140px;
  }
}

</style>
