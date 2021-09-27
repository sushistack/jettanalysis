<template lang="pug">
.jett-container
  navigation-bar
  v-container(style='min-height:500px')
    .d-flex.justify-space-between.mb-5
      h2 SEO 보고서
      .right
        v-btn.mr-8.createPhotoBtn(outlined @click='howToCheckReportDialog = true' style='padding-left:12px')
          svg(xmlns='http://www.w3.org/2000/svg' style='margin-right:2px' enable-background='new 0 0 24 24' fill='#000' width='24' height='24' viewBox='0 0 24 24')
            g
              path(d='M0,0h24v24H0V0z' fill='none')
            g
              g
                path(d='M15,3H5C3.9,3,3.01,3.9,3.01,5L3,19c0,1.1,0.89,2,1.99,2H19c1.1,0,2-0.9,2-2V9L15,3z M5,19V5h9v5h5v9H5z M9,8 c0,0.55-0.45,1-1,1S7,8.55,7,8s0.45-1,1-1S9,7.45,9,8z M9,12c0,0.55-0.45,1-1,1s-1-0.45-1-1s0.45-1,1-1S9,11.45,9,12z M9,16 c0,0.55-0.45,1-1,1s-1-0.45-1-1s0.45-1,1-1S9,15.45,9,16z')
          | 보고서 확인방법
        v-btn.mr-8.manageTagBtn(outlined @click='howToCheckResultDialog = true' style='padding-left:12px')
          svg(xmlns='http://www.w3.org/2000/svg' style='margin-right:2px' fill='#000' width='24' height='24' viewBox='0 0 24 24')
            path(d='M0 0h24v24H0V0z' fill='none')
            path(d='M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z')          
          | SEO 결과 확인방법
    v-card(flat)
      v-data-table(
        no-data-text='주문 내역이 없습니다.'
        :headers='headers'
        :server-items-length='orderCount'
        :items='orders'
        :options.sync='options'
        :loading='loading'
        no-results-text='결과가 없습니다.'
        loading-text='주문 내역을 불러오는 중...'
      )
        template(v-slot:item.reportUrl='{ item }')
          v-btn(icon type='button' @click.stop='downloadReport(item.reportUrl)' :style='{opacity: item.reportUrl ? 1 : 0.5}' :disabled='!item.reportUrl')
            img(src='/icons/excel.png' style='width:32px')
        template(v-slot:item.status='{ item }')
          v-chip.ma-2(small :color='statusColor(item.status)') {{ item.status | toUserFriendlyStatusText }} 
        template(v-slot:item.products='{ item }')
          | {{ item.products | toProductsSummary }}
        template(v-slot:item.price='{ item }')
          | {{ item.price | withComma }}
        template(v-slot:item.orderedAt='{ item }')
          | {{ item.orderedAt | toDateTime }}
  how-to-check-report-modal(:dialog='howToCheckReportDialog' @onClose='closeReportDialog')
  how-to-check-result-modal(:dialog='howToCheckResultDialog' @onClose='closeResultDialog')
</template>

<script>
import { mapGetters } from 'vuex'
import HowToCheckReportModal from '@/components/report/HowToCheckReportModal'
import HowToCheckResultModal from '@/components/report/HowToCheckResultModal'

export default {
  name: 'Report',
  components: { HowToCheckReportModal, HowToCheckResultModal },
  data: () => ({
    loading: true,
    headers: [
      { text: '주문 번호', align: 'start', value: 'orderId', sortable: false },
      { text: '상품', value: 'products', sortable: false },
      { text: '금액', value: 'price', sortable: false },
      { text: '주문 일시', value: 'orderedAt', sortable: false },
      { text: '진행 상태', value: 'status', sortable: false },
      { text: '보고서', value: 'reportUrl', sortable: false }
    ],
    orderCount: 1,
    options: {},
    param: {
      page: 0,
      size: 10,
      keyword: '',
      direction: 'ASC',
      sortType: 'ORDERED_AT'
    },
    orders: [],
    howToCheckReportDialog: false,
    howToCheckResultDialog: false
  }),
  created () {
    if (!this.user) this.$router.push('/')
  },
  mounted () {
    setTimeout(() => {
      this.orders = [
        { orderId: '20210901000501', products: [{id: 'p0000002', name: '고품질 기사형 백링크'}, {id: 'p0000002', name: '고품질 기사형 백링크'}], price: 120000, orderedAt: 1632711783459, status: 'DONE', reportUrl: '/reports/file.xlsx' },
        { orderId: '20210901000502', products: [{id: 'p0000001', name: '사이트 SEO 최적화 설정'}, {id: 'p0000002', name: '고품질 기사형 백링크'}], price: 240000, orderedAt: 1632731783459, status: 'PROCESSING', reportUrl: null },
        { orderId: '20210901000503', products: [{id: 'p0000002', name: '고품질 기사형 백링크'}], price: 120000, orderedAt: 1632751783459, status: 'WAIT', reportUrl: null },
      ]
      this.loading = false
    }, 1000)
  },
  methods: {
    statusColor (status) {
      switch (status) {
        case 'WAIT': return 'gray'
        case 'PROCESSING': return 'primary'
        case 'DONE': return 'gray'
        default: return '알 수 없음'
      }
    },
    downloadReport () {

    },
    closeReportDialog (value) {
      this.howToCheckReportDialog = value
    },
    closeResultDialog (value) {
      this.howToCheckResultDialog = value
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
      if (!value || value.length === 0) return '상품이 존재하지 않음'
      const len = value.length - 1
      return `${value[0].name}${len > 0 ? ' 외 ' + len + '건' : ''}`
    },
    toUserFriendlyStatusText (value) {
      switch (value) {
        case 'WAIT': return '작업 전'
        case 'PROCESSING': return '작업 중'
        case 'DONE': return '작업 완료'
        default: return '알 수 없음'
      }
    },
    withComma: function (num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  watch: {
    options () {
      if (this.param.page !== this.options.page || this.param.perPage !== this.options.itemsPerPage) {
        this.param.page = this.options.page - 1
        this.param.perPage = this.options.itemsPerPage > 0 ? this.options.itemsPerPage : this.orderCount
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
</style>