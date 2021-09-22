<template lang="pug">
.simple-diagnosis
  h3.diagnosis-title {{ title }}
  p.diagnosis-description {{ description }}
  .diagnosis-container
    diagnosis-input(@onSubmit='onSubmit')
  diagnosis-snackbar(ref='snackbar')
</template>

<script>
import DiagnosisInput from './DiagnosisInput'
import DiagnosisSnackbar from './DiagnosisSnackbar'

export default {
  name: 'SimpleDiagnosis',
  components: { DiagnosisInput, DiagnosisSnackbar },
  props: {
    title: {
      type: String,
      required: false,
      default: () => '사이트 진단'
    },
    description: {
      type: String,
      required: false,
      default: () => '여러분 사이트의 검색엔진 최적화 진단해보세요.'
    }
  },
  methods: {
    onSubmit (res) {
      if (res.isValid) {
        this.$router.push({ path: '/diagnosis', query: {url: res.url} })
      } else {
        this.$refs.snackbar.show()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.diagnosis-container {
  position: relative;
}

.simple-diagnosis {
  border: 1px solid #cccc;
  border-radius: 5px;
  padding: 1rem 2.5rem 2rem;
  margin-bottom: 20px;
  h3.diagnosis-title {
    background: #eee;
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 0.3rem 1rem;
  }
  p {
    padding: 0.3rem;
  }
}
</style>
