<template lang="pug">
.diagnosis-container
  .diagnosis-score-container(v-if='diagnosis.score')
    score(:score='diagnosis.score')
  .diagnosis-meta-container(v-if='diagnosis.meta')
    diagnosis-head(
      title='메타 명세서'
      :score='diagnosis.meta.head'
    )
    template(v-for='meta in diagnosis.meta.body')
      diagnosis-body(:body='meta')
  .diagnosis-quality-container(v-if='diagnosis.quality')
    diagnosis-head(
      title='페이지 품질'
      :score='diagnosis.quality.head'
    )
    template(v-for='quality in diagnosis.quality.body')
      diagnosis-body(:body='quality')
  .diagnosis-structure-container(v-if='diagnosis.structure')
    diagnosis-head(
      title='페이지 구조'
      :score='diagnosis.structure.head'
    )
    template(v-for='structure in diagnosis.structure.body')
      diagnosis-body(:body='structure')
  .diagnosis-link-container(v-if='diagnosis.link')
    diagnosis-head(
      title='링크 구조'
      :score='diagnosis.link.head'
    )
    template(v-for='link in diagnosis.link.body')
      diagnosis-body(:body='link')
</template>

<script>
import Score from './diagnosis/Score'
import DiagnosisHead from './diagnosis/Head'
import DiagnosisBody from './diagnosis/Body'

export default {
  name: 'Diagnosis',
  components: { Score, DiagnosisHead, DiagnosisBody },
  props: {
    diagnosis: {
      type: Object,
      requied: true
    }
  }
}
</script>

<style lang="scss" scoped>
.diagnosis-container {
  padding: 0 1.5rem;
  .diagnosis-score-container, .diagnosis-meta-container, .diagnosis-quality-container,
  .diagnosis-structure-container, .diagnosis-link-container {
    margin: 3rem 0;
  }
}
</style>
