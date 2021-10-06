<template lang="pug">
.jett-container
  navigation-bar
  v-container(style='min-height:500px')
    .table-header
      h2.table-title 결제 내역
    v-card(flat)
      v-card-title
        v-text-field(
          v-model='keyword'
          append-icon='mdi-magnify'
          label='상품 명'
          single-line
          hide-details
          @keyup.enter='searchPaymentHistory'
        )
      v-data-table(
        no-data-text='결제 내역이 없습니다.'
        :headers='headers'
        :server-items-length='paymentCount'
        :items='payments'
        :options.sync='options'
        :loading='loading'
        no-results-text='결과가 없습니다.'
        loading-text='결제 내역을 불러오는 중...'
      )
        template(v-slot:item.transcation='{ item }')
          v-btn.white--text(small color='blue-grey' type='button' @click.stop='showTransaction(item.transcation)') 보기
        template(v-slot:item.cashReceipts='{ item }')
          v-btn.white--text(small color='blue-grey' type='button' @click.stop='showCashReceipts(item.cashReceipts)') 보기
        template(v-slot:item.status='{ item }')
          v-chip.ma-2(small :color='statusColor(item.status)') {{ item.status | toUserFriendlyStatusText }} 
        template(v-slot:item.product='{ item }')
          | {{ item.product.name }}
        template(v-slot:item.paidAmount='{ item }')
          | {{ item.paidAmount | withComma }}
        template(v-slot:item.paidAt='{ item }')
          | {{ item.paidAt | toDateTime }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PaymentHistory',
  head ({$seoMeta}) {
    const title = '결제 내역'
    return {
      title: title,
      meta: $seoMeta(
        { 
          title: `${title} | ${process.env.NUXT_APP_SITE_NAME || 'JETT Analysis'}`,
          url: `${FRONTEND_BASE_URL}${this.$route.path}`,
          description: '결제 내역 페이지입니다.'
        },
        false
      ).concat([ { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: `${title} | JETT Analysis` } ]),
      link: [ {rel: 'canonical', href: `${FRONTEND_BASE_URL}${this.$route.path}`} ]
    }
  },
  data: () => ({
    loading: true,
    headers: [
      { text: '주문 번호', align: 'start', value: 'orderId', sortable: false },
      { text: '상품 명', value: 'product', sortable: false },
      { text: '결제 방법', value: 'payMethod', sortable: false },
      { text: '결제 금액', value: 'paidAmount', sortable: false },
      { text: '결제 일시', value: 'paidAt', sortable: false },
      { text: '현금 영수증', value: 'cashReceipts', sortable: false },
      { text: '거래 확인서', value: 'transcation', sortable: false }
    ],
    paymentCount: 1,
    options: {},
    param: {
      page: 0,
      size: 10,
      keyword: '',
      direction: 'ASC',
      sortType: 'ORDER_ID'
    },
    payments: [],
    keyword: ''
  }),
  created () {
    if (!this.user) this.$router.push('/')
  },
  mounted () {
    this.loadPayments(1000)
  },
  methods: {
    loadPayments (timeout) {
      setTimeout(() => {
        this.payments = [
          { orderId: '20210901000505', product: { id: 'p0000001', name: '사이트 SEO 설정' }, payMethod: 'CARD', paidAmount: 120000, paidAt: 1632711783459, cashReceipts: null, transcation: null },
          { orderId: '20210901000506', product: { id: 'p0000002', name: '고품질 기사형 백링크' }, payMethod: 'CARD', paidAmount: 120000, paidAt: 1632714783459, cashReceipts: null, transcation: null },
          { orderId: '20210901000507', product: { id: 'p0000001', name: '사이트 SEO 설정' }, payMethod: 'CARD', paidAmount: 120000, paidAt: 1632721783459, cashReceipts: null, transcation: null },
        ]
        this.loading = false
      }, timeout)
    },
    showTransaction () {

    },
    showCashReceipts () {

    },
    searchPaymentHistory () {
      this.param.page = 0
      this.param.keyword = this.keyword.trim()
      this.payments = []
      this.loadPayments(100)
    }
  },
  computed: {
    ...mapGetters({ user: 'user/user' })
  },
  filters: {
    toDateTime (value) {
      const d = new Date(value)
      const f = (n) => `${n}`.length === 1 ? `0${n}` : n
      return `${d.getFullYear()}.${f(d.getMonth() + 1)}.${f(d.getDate())} ${f(d.getHours())}:${f(d.getMinutes())}`
    },
    toProductsSummary (value) {
      return value ? value.name : '상품이 존재하지 않음'
    },
    withComma: function (num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  watch: {
    options () {
      if (this.param.page !== this.options.page || this.param.perPage !== this.options.itemsPerPage) {
        this.param.page = this.options.page - 1
        this.param.perPage = this.options.itemsPerPage > 0 ? this.options.itemsPerPage : this.paymentCount
        // this.loadPhotos()
      }
    }
  }
}
</script>

<style lang="scss">
.search-btn {
  margin-top: 15px;
  margin-left: 10px;
}
.table-header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2rem .5rem;
}

.table-title {
  margin-top: 0;
}

@media (min-width: 600px) {
  .table-header {
    display: flex;
    flex-direction: row;
  }
}
</style>