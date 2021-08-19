<template lang="pug">
.report-element-description
  div(v-if='body.descType === "TEXT"')
    .body-info(v-if='body.value') {{ body.value }}
    .description-meta(
      v-if='body.details && body.details.length > 0'
    )
      ul
        li(
          v-for='(d, index) in body.details' :key='index'
          :class='{passed: d.isValid, failed: !d.isValid && !d.isWarning, warn: d.isWarning}'
        )
          span.single-result {{ d.text }}
  .search-preview(v-else-if='body.descType === "PREVIEW"')
    v-tabs(v-model='tab' color='#00afff')
      v-tab GOOGLE
      v-tab NAVER
    v-tabs-items(v-model='tab')
      v-tab-item
        google-preview(
          :url='snippetUrl'
          :title='body.meta.title'
          :description='body.meta.description'
          :favicon='body.meta.favicon'
        )
      v-tab-item
        naver-preview(
          :url='snippetUrl | removeScheme'
          :title='body.meta.title'
          :description='body.meta.description'
          :favicon='body.meta.favicon'
        )
  .desc-table(v-else-if='body.descType === "TABLE"')
    diagnosis-table(
      :columns='body.columns'
      :data='body.data'
    )
</template>

<script>
import GooglePreview from './GooglePreview'
import NaverPreview from './NaverPreview'
import DiagnosisTable from './Table'

export default {
  name: 'DiagnosisDescription',
  components: { GooglePreview, NaverPreview, DiagnosisTable },
  props: {
    validType: {
      type: Object,
      required: true
    },
    body: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    tab: null
  }),
  computed: {
    snippetUrl () {
      if (!this.body || !this.body.meta || !this.body.meta.url) return ''
      const pathname = this.body.meta.url.pathname === '/' ? '' : this.body.meta.url.pathname.replace(/\//g, ' › ')
      return `${this.body.meta.url.origin}${pathname}`
    }
  },
  filters: {
    removeScheme: function (url) {
      return url.replace(/^https?\:\/\//i, '')
    }
  }
}
</script>


<style lang="scss">
.report-element-description {
  width: 60%;
  .body-info {
    background-color: #F0F5FD;
    font-weight: 700;
    padding: 8px 13px!important;
    word-wrap: break-word;
  }
  .description-content ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      margin-bottom: 0;
      position: relative;
      display: flex;
      align-items: center;
    }
  }
  .description-meta {
    margin-top: 8px;
  }
  .description-meta ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      margin-bottom: 0;
      position: relative;
      display: flex;
      align-items: center;
      padding-left: 16px;
      word-break: break-word;
      color: #000;
    }
    li:before {
      content: "";
      position: absolute;
      top: 7px;
      left: 0;
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background: #ccc;
      transform: initial;
    }
  }
  .description-meta li.passed:before {
    background: #34bc6e;
  }
  .description-meta li.warn:before {
    background: #ffab00;
  }
  .description-meta li.failed:before {
    background: #f63842;
  }
}

@media (max-width: 768px) {
  .report-element-description {
    width: 100%;
  }
}
</style>
