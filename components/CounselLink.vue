<template lang="pug">
.counsel-link
  v-container
    v-row
      v-col(cols='12')
        v-card(:color='color' dark @click='go')
          v-card-title.text-h5 {{ title }}
          v-card-subtitle {{ description }}
          v-card-actions.flex-row-reverse
            v-btn(@click='go' outlined rounded) {{ btnText }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    btnText: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: () => '#385F73'
    }
  },
  methods: {
    go () {
      window.open(this.link, '_blank').focus()
    }
  }
}
</script>

