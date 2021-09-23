<template lang="pug">
.product-class-container
  .product-class-inner-container
    .product-class-wrap(
      v-for='p in productClasses'
      :class='{checked: p.checked}'
      @click.stop='selectClass(p.class)'
    )
      .product-selection
        .product-check-icon
          svg(v-if='p.checked' xmlns='http://www.w3.org/2000/svg' fill='#00afff' width='24' height='24' viewBox='0 0 24 24')
            path(d='M0 0h24v24H0V0z' fill='none')
            path(d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z')
          svg(v-else xmlns='http://www.w3.org/2000/svg' fill='#ccc' width='24' height='24' viewBox='0 0 24 24')
            path(d='M0 0h24v24H0V0z' fill='none')
            path(d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z')
        p.product-class {{ p.class }}
      .product-info
        p.product-title {{ p.title }}
        ul.product-details
          li(v-for='d in p.details') {{ d }}
        .price-wrap
          span.before-sale {{ p.beforeSale | withComma }}
          span.price {{ p.price | withComma }}
          span.unit 원
</template>

<script>
export default {
  name: 'ProductClass',
  props: {
    value: {
      type: String,
      required: true,
      default: () => 'DELUXE'
    }
  },
  data: () => ({
    productClasses: [
      { class: 'STANDARD', title: '기사/블로그형 백링크 20개', details: ['최대 5개 키워드', '3단계 피라미드 구조', '고품질 기사형 백링크 20개', '1,2 티어 420개', '보고서 제공'], beforeSale: 120000, price: 60000, checked: false },
      { class: 'DELUXE', title: '기사/블로그형 백링크 40개', details: ['최대 5개 키워드', '3단계 피라미드 구조', '고품질 기사형 백링크 40개', '1,2 티어 840개', '보고서 제공'], beforeSale: 200000, price: 120000, checked: true },
      { class: 'PRIMIUM', title: '기사/블로그형 백링크 60개', details: ['최대 5개 키워드', '3단계 피라미드 구조', '고품질 기사형 백링크 60개', '1,2 티어 1,260개', '보고서 제공'], beforeSale: 280000, price: 140000, checked: false }
    ]
  }),
  methods: {
    selectClass (cls) {
      this.productClasses.forEach(c => c.checked = c.class === cls)
      this.$emit('input', cls)
    }
  },
  filters: {
    withComma: function (num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
}
</script>

<style lang="scss" scoped>
.product-class-container {
  margin: 2rem 0;
}

.product-class-inner-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-class-wrap {
  text-align: center;
  cursor: pointer;
}

.product-class-wrap.checked {
  border: 3px solid #00afff;
  padding: 18.5px;
}

.product-class-wrap {
  border: 1.5px solid #eee;
  padding: 20px;
  margin: 3px 0;
}

.product-selection {
  display: flex;
  justify-content: center;
  .product-check-icon > svg {
    margin-bottom: -8px;
    margin-right: 4px;
  }
}

.product-class {
  margin-bottom: 0;
  font-size: 18px;
  font-weight: 800;
  color: #00afff;
}

.product-title {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 0;
}

.product-details {
  display: none;
  list-style: none;
  padding-left: 0;
  color: #666;
  font-size: 14px;
}

.before-sale {
  color: #aaa;
  vertical-align: super;
  font-size: 14px;
  text-decoration:line-through
}

.price {
  color: #00afff;
  font-size: 27px;
  font-weight: bold;
}

.unit {
  font-weight: bold;
  font-size: 15px;
}

@media (min-width: 540px) {
  .product-info {
    display: flex;
    justify-content: space-evenly;
  }
  .product-title {
    line-height: 37px;
  }
}

@media (min-width: 768px) {
  .product-class-inner-container {
    flex-direction: row;
  }
  .product-class-wrap {
    margin: 0 5px;
  }
  .product-selection {
    flex-direction: column;
    .product-check-icon > svg {
      margin: 0;
    }
  }
  .product-class {
    margin-bottom: 16px;
  }
  .product-info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .product-details {
    display: block;
  }
  .price-wrap {
    margin-top: 1rem;
  }
}
</style>