<template lang="pug">
.jett-container
  navigation-bar
  .wrap
    section
      product-radio-box(
        :preCheckedSeq='productId'
        @onSelected='onProductSelected'
      )
    separater(:deg='180' :padding='3' ref='sectionSeparater')
    section(v-if='selectedProductType')
      order-sheet(:sheetType='selectedProductType')

  page-footer
</template>

<script>
import ProductRadioBox from '@/components/service/ProductRadioBox'
import OrderSheet from '@/components/service/OrderSheet'

export default {
  name: 'Order',
  components: { ProductRadioBox, OrderSheet },
  async asyncData ({ route }) {
    return {
      productId: Number(route.query.pid)
    }
  },
  methods: {
    onProductSelected (seq) {
      this.$router.push({ path: '/service', query: { pid: seq } })
    }
  },
  mounted () {
    if (Object.keys(this.$route.query).length > 0) {
      this.$router.replace({'query': null})
      this.$nextTick(() => { this.$scrollTo(this.$refs.sectionSeparater.$el, 500) })
    }
  },
  computed: {
    selectedProductType () {
      switch (this.productId) {
        case 0: return 'SETTING_SEO'
        case 1: return 'BACKLINK'
        default: return null
      }
    }
  }
}
</script>

