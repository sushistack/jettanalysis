<template lang="pug">
.diagnosis-container
  .diagnosis-meta-container(v-if='diagnosis.meta')
    diagnosis-head(
      title='메타 명세서'
      :score='diagnosis.meta.head'
    )
    template(v-for='meta in diagnosis.meta.body')
      diagnosis-body(:body='meta')
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
import DiagnosisHead from './diagnosis/Head'
import DiagnosisBody from './diagnosis/Body'

export default {
  name: 'Diagnosis',
  components: { DiagnosisHead, DiagnosisBody },
  props: {
    diagnosis: {
      type: Object,
      requied: true
    }
  },
  watch: {
    diagnosis: function (n, o) {
      console.log('diagnosis', n)
    }
  }
}
</script>

<style lang="scss" scoped>
.diagnosis-container {
  padding: 0 1.5rem;
}
</style>
