<template lang="pug">
.diagnosis-body(v-if='body')
  .report-element(:class='validType')
    .report-element-title
      v-icon.top-icon(:color='topIconColor') {{ topIcon }}
      strong {{ body.title }}
      .importance(v-if='filledCount > 0')
        v-icon(small color='#00afff' v-for='(n, index) in filledCount' :key='index + "l"') mdi-checkbox-blank-circle
        v-icon(small color='#00afff' v-for='(n, index) in emptyCount' :key='index + "r"') mdi-checkbox-blank-circle-outline
    description(
      :validType='validType'
      :body='body'
    )
    .report-element-info
      router-link.wiki-link(v-if='body.wiki' :to='body.wiki' target='_blank')
        v-icon(small) mdi-information-outline
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
    topIcon () {
      switch (this.body.validCode) {
        case 'PASSED': return 'mdi-check-circle-outline'
        case 'WARNING': return 'mdi-alert-circle-outline'
        case 'FAILED': return 'mdi-close-circle-outline'
        default: return 'mdi-checkbox-blank-circle-outline'
      }
    },
    topIconColor () {
      switch (this.body.validCode) {
        case 'PASSED': return '#34bc6e'
        case 'WARNING': return '#ffab00'
        case 'FAILED': return '#f63842'
        default: return '#ccc'
      }
      if (this.isValid) return 
      if (this.isNotValid) return 
      return 
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
