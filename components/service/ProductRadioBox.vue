<template lang="pug">
.product-container
  .product-inner-container
    p.product-radio-title 상품을 선택해주세요.
    .radio-box
      template(v-for='product in products')
        product-radio(
          ref='productRadios'
          :seq='product.seq'
          :title='product.title'
          :icon='product.icon'
          :details='product.details'
          :checked='product.checked'
          @onSelected='select'
          @onOpened='open'
        )
</template>

<script>
import ProductRadio from './ProductRadio'

export default {
  name: 'ProductRadioBox',
  components: { ProductRadio },
  props: {
    preCheckedSeq: {
      type: Number,
      required: false,
      default: () => -1
    }
  },
  data: () => ({
    selected: -1,
    products: [
      { 
        seq: 0,
        title: '사이트 SEO 최적화 설정',
        icon: "SETTING",
        details: ['홈페이지 / 쇼핑몰', '온페이지 필수 SEO 설정', '코드 품질 향상', '리치 스니펫 검토', '보고서 제공'],
        checked: false
      },
      { 
        seq: 1,
        title: '고품질 기사형 백링크',
        icon: "BACKLINK",
        details: ['3단계 피라미드 구조', '고품질 기사형 백링크 20개+', '1,2 티어 백링크 420개+', '최대 5개 키워드', '보고서 제공'],
        checked: false
      }
    ]
  }),
  mounted () {
    if (this.preCheckedSeq > -1) {
      this.select(this.preCheckedSeq)
    }
  },
  methods: {
    select (seq) {
      if (this.selected === seq) {
        return
      }
      this.selected = seq
      this.products.forEach(p => p.checked = p.seq === seq)
      
      this.$emit('onSelected', seq)
    },
    open (seq) {
      this.$refs.productRadios
        .filter(p => p.seq !== seq)
        .forEach(p => p.reset && p.reset())
    }
  }
}
</script>

<style lang="scss" scoped>
.product-container {
  background-image: linear-gradient(180deg, #fff 10%, #eef0f7);
  padding: 30px 0 70px;
}

.product-inner-container {
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
  .product-radio-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 1rem;
  }
}

.radio-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 400px;
  > div {
    margin: 0 auto;
  }
}

@media (min-width: 576px) {
  .product-inner-container {
    padding-right: 10px;
    padding-left: 10px;
    .product-radio-title {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 3.5rem;
    }
  }
  .radio-box {
    flex-direction: row;
  }
}

@media (min-width: 540px) {
  .product-inner-container {
    max-width: 540px;
  }
}

@media (max-width: 767.98px) {
  .product-container {
    border-bottom: 1 solid #ccd3e8;
  }
}

@media (min-width: 768px) {
  .product-container {
    padding: 40px 0 135px;
  }
  .product-inner-container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .product-inner-container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .product-inner-container {
    max-width: 1140px;
  }
}
</style>