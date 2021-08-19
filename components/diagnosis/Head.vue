<template lang="pug">
.diagnosis-head
  .diagnosis-head-wrapper
    .diagnosis-head-title {{ title }}
    .diagnosis-extra
      .category-stats
        .stat-element.diagnosis-failed
          span.stat-value {{ score.failed }}
          span.stat-name 치명
          .dignosis-progress
            v-progress-linear(v-model='failed' color='#f63842' height='12' rounded)
              strong {{ failed }}%
        .stat-element.diagnosis-warning
          span.stat-value {{ score.warning }}
          span.stat-name 경고
          .dignosis-progress
            v-progress-linear(v-model='warning' color='#ffab00' height='12' rounded)
              strong {{ warning }}%
        .stat-element.diagnosis-passed
          span.stat-value {{ score.passed }}
          span.stat-name 통과
          .dignosis-progress
            v-progress-linear(v-model='passed' color='#34bc6e' height='12' rounded)
              strong {{ passed }}%
</template>

<script>
export default {
  name: 'DignosisHead',
  props: {
    title: {
      type: String,
      required: true
    },
    score: {
      type: Object,
      required: true
    }
  },
  computed: {
    sumOfScore () {
      return this.score.failed + this.score.warning + this.score.passed
    },
    failed () {
      return Math.round(this.score.failed / this.sumOfScore * 100)
    },
    warning () {
      return Math.round(this.score.warning / this.sumOfScore * 100)
    },
    passed () {
      return Math.round(this.score.passed / this.sumOfScore * 100)
    }
  }
}
</script>

<style lang="scss" scoped>
.diagnosis-head {
  font-size: 20px;
  font-weight: 600;
  padding: 0 24px;
  border-bottom: 1px solid #DCE1E6;
  margin-bottom: 1px;
  position: relative;
  z-index: 2;
  min-height: 48px;
  color: #000;
  zoom: 1;
}

.ant-card-head-wrapper {
  display: flex;
  align-items: center;
}

.diagnosis-head-title {
  display: inline-block;
  flex: 1;
  padding: 16px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.diagnosis-extra {
  float: right;
  margin-left: auto;
  padding: 16px 0;
  color: #282D2D;
  font-weight: normal;
  font-size: 14px;
}

.diagnosis-head .category-stats {
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.diagnosis-head .category-stats .stat-element {
  width: calc(100% / 3 - 8px);
  .stat-value {
    font-weight: 700;
  }
  .stat-name {
    margin-left: 3px;
  }
}

.diagnosis-failed .stat-value {
  color: #f63842;
}

.diagnosis-warning .stat-value {
  color: #ffab00;
}

.diagnosis-passed .stat-value {
  color: #34bc6e;
}

@media (max-width: 768px) {
  .diagnosis-head {
    padding: 0 16px;
    background: #fafafa;
  }
  .diagnosis-head-wrapper {
    flex-wrap: wrap;
  }
  .diagnosis-head-title {
    display: block;
    width: 100%;
    padding-bottom: 8px;
    flex: auto;
  }
  .diagnosis-extra {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    float: none;
    padding-top: 0;
    margin-bottom: 12px;
  }
  .category-stats {
    width: 100% !important;
  }
}


</style>
