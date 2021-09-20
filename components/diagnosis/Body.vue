<template lang="pug">
.diagnosis-body(v-if='body')
  .report-element(:class='validType')
    .report-element-title
      svg(v-if='body.validCode === "PASSED"' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='#34bc6e' viewBox='0 0 24 24')
        path(d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z')
      svg(v-else-if='body.validCode === "WARNING"' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='#ffab00' viewBox='0 0 24 24')
        path(d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 6h2v8h-2v-8zm1 12.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z')
      svg(v-else-if='body.validCode === "FAILED"' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='#f63842' viewBox='0 0 24 24')
        path(d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z')
      svg(v-else xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='#aaa' viewBox='0 0 24 24')
        path(d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z')
      strong {{ body.title }}
      .importance(v-if='filledCount > 0')
        template(v-for='(n, index) in filledCount')
          svg(xmlns='http://www.w3.org/2000/svg' fill='#00afff' width='16' height='16' viewBox='0 0 24 24')
            circle(cx='12' cy='12' r='12')
        template(v-for='(n, index) in emptyCount')
          svg(xmlns='http://www.w3.org/2000/svg' fill='#00afff' width='16' height='16' viewBox='0 0 24 24')
            path(d='M12 1c6.065 0 11 4.935 11 11s-4.935 11-11 11-11-4.935-11-11 4.935-11 11-11zm0-1c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z')
    description(
      :validType='validType'
      :body='body'
    )
    .report-element-info
      router-link.wiki-link(v-if='body.wiki' :to='body.wiki' target='_blank')
        svg(xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='#aaa' viewBox='0 0 24 24')
          path(d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 18h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z')
</template>

<script>
import Description from './Description'

export default {
  name: 'DignosisBody',
  props: ['body'],
  // props: {
  //   body: {
  //     type: Object,
  //     required: true
  //   }
  // },
  data: () => ({ maxImportance: 5 }),
  components: { Description },
  computed: {
    isCustom () {
      return this.body.isCustom
    },
    validType () {
      return {
        custom: this.body.validCode === 'CUSTOM',
        passed: this.body.validCode === 'PASSED',
        warn: this.body.validCode === 'WARNING',
        failed: !this.isCustom && this.body.validCode === 'FAILED'
      }
    },
    filledCount () {
      return this.body.importance
    },
    emptyCount () {
      return this.maxImportance - this.body.importance
    },
    wiki () {
      return ''
    }
  }
}
</script>


<style lang="scss" scoped>
.diagnosis-body {
  padding: 0;
  zoom: 1;
}

.wiki-link {
  text-decoration: none;
}

.importance {
  margin-left: 32px;
  svg {
    margin: 1px;
  }
}

.report-element {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #fff;
  padding: 16px 24px;
  padding-bottom: 32px;
  border-bottom: 1px solid #dfe5e5;
  color: rgba(0, 0, 0, 0.54);
  .report-element-title {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 30%;
    > svg {
      margin-right: 7px;
    }
    strong {
      font-size: 16px;
      line-height: normal;
      color: rgba(0, 0, 0, 0.87);
      font-weight: 600;
      width: calc(100% - 32px);
    }
  }
  
}

.top-icon {
  margin-right: 8px;
}

.report-element .report-element-info {
  width: 32px;
  height: 24px;
  text-align: right;
  cursor: pointer;
}

@media (max-width: 768px) {
  .report-element {
    padding: 16px;
    .report-element-title {
      width: 100%;
      margin-bottom: 12px;
      strong {
        width: calc(100% - 50px);
      }
    }
    .report-element-info {
      position: absolute;
      right: 16px;
    }
  }
}

</style>
