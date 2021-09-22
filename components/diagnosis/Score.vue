<template lang="pug">
#seo-score.summary
  .summary-card-body
    .card-header
      .card-meta
        .card-meta-detail
          .card-meta-title {{ score.head.url }}
          .card-meta-description 페이지 검색엔진 최적화 점수
    .summary-graph
      .summary-graph-wrapper
        .summary-graph-total
          v-progress-circular(
            :rotate='-90' 
            :size='140' 
            :width='15' 
            :value='percentage' 
            color='#00afff'
          ) {{ percentage }}
        .register-modal
          v-btn.white--text(color='#00afff' x-large rounded router to='/service') SEO 서비스 보기
      .summary-graph-split
        v-tabs(v-model='tab' color='#00afff')
          v-tab 전체
          v-tab 종류 별
        v-tabs-items(v-model='tab')
          v-tab-item
            .progress-item
              span.progress-label
                strong {{ score.head.failed }}
                |  치명
              .dignosis-progress
                v-progress-linear(v-model='failed' color='#f63842' height='20' rounded)
                  strong {{ failed }}%
            .progress-item
              span.progress-label
                strong {{ score.head.warning }}
                |  경고
              .dignosis-progress
                v-progress-linear(v-model='warning' color='#ffab00' height='20' rounded)
                  strong {{ warning }}%
            .progress-item
              span.progress-label
                strong {{ score.head.passed }}
                |  통과
              .dignosis-progress
                v-progress-linear(v-model='passed' color='#34bc6e' height='20' rounded)
                  strong {{ passed }}%
          v-tab-item
            .progress-item
              span.progress-label
                strong 메타 명세서
              .dignosis-progress
                v-progress-linear(v-model='meta' color='#00afff' height='20' rounded)
                  strong.white--text {{ meta }}%
            .progress-item
              span.progress-label
                strong 페이지 품질
              .dignosis-progress
                v-progress-linear(v-model='quality' color='#00afff' height='20' rounded)
                  strong.white--text {{ quality }}%
            .progress-item
              span.progress-label
                strong 페이지 구조
              .dignosis-progress
                v-progress-linear(v-model='structure' color='#00afff' height='20' rounded)
                  strong.white--text {{ structure }}%
            .progress-item
              span.progress-label
                strong 링크 구조
              .dignosis-progress
                v-progress-linear(v-model='link' color='#00afff' height='20' rounded)
                  strong.white--text {{ link }}%

</template>

<script>
export default {
  name: 'score',
  props: {
    score: {
      type: Object,
      required: true
    }
  },
  data: () => ({ tab: null }),
  computed: {
    sumOfScore () {
      return this.score.head.failed + this.score.head.warning + this.score.head.passed
    },
    failed () {
      return Math.round(this.score.head.failed / this.sumOfScore * 100)
    },
    warning () {
      return Math.round(this.score.head.warning / this.sumOfScore * 100)
    },
    passed () {
      return Math.round(this.score.head.passed / this.sumOfScore * 100)
    },
    percentage () {
      return Math.round(this.score.body.total.self / this.score.body.total.max * 100)
    },
    meta () {
      return Math.round(this.score.body.meta.self / this.score.body.meta.max * 100)
    },
    quality () {
      return Math.round(this.score.body.quality.self / this.score.body.quality.max * 100)
    },
    structure () {
      return Math.round(this.score.body.structure.self / this.score.body.structure.max * 100)
    },
    link () {
      return Math.round(this.score.body.link.self / this.score.body.link.max * 100)
    }
  }
}
</script>


<style lang="scss" scoped>
#seo-score {
  background: rgb(255, 255, 255);
  border-radius: 4px;
  box-shadow: rgb(143 143 143 / 16%) 0px 1px 3px 0px;
  margin-bottom: 24px;
}

.summary-card-body {
  padding: 0px;
  zoom: 1;
}

.report-card .ant-card-body {
  padding: 0px;
}

.card-header {
  padding: 16px 24px;
  border-bottom: 1px solid rgb(232, 232, 232);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.card-meta {
  margin: -4px 0px;
  zoom: 1;
}

.card-meta-detail {
  overflow: hidden;
}

.card-meta-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0px !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-meta-description {
  font-size: 13px;
  line-height: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.45);
}

.summary-graph {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 24px;
}

.summary-graph-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 24px;
}

.summary-graph-total {
  width: 140px;
  height: 140px;
  margin-right: 0px;
  margin-bottom: 10px;
}

.summary-graph-split {
  width: initial;
  flex: 1 1 0%;
}

.progress-item {
  margin-bottom: 24px;
}

.progress-label {
  font-size: 16px;
}



@media (max-width: 768px) {
  #seo-score {
    margin-bottom: 16px;
  }
  .card-header {
    padding: 16px;
    background: rgb(250, 250, 250);
  }
  .card-meta {
    width: 100%;
  }
  .card-meta-detail {
    overflow: hidden;
  }
  .summary-graph {
    padding: 16px 24px;
  }
  .summary-graph-wrapper {
    width: 100%;
  }
  .summary-graph-total {
    margin: auto;
  }
  .summary-graph-split {
    width: 100%;
    flex: initial;
  }
  .register-modal {
    margin: 2rem 0 1rem 0;
  }
}


</style>
