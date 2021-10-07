<template lang="pug">
.split-box-container(:class='{reverse: isReverse}')
  .box-description
    h2.detail-title {{ selectedDetail.title }}
    h3.detail-desc(v-html='selectedDetail.description')
    .detail-content
      p(v-for='p in selectedDetail.paragraphs') {{ p }}
    .button-container
      button.detail-btn(type='button' @click.stop='go(selectedDetail.button.to)') {{ selectedDetail.button.text }}
  .box-image
    img(:src='imageUrl')
</template>

<script>
import DETAIL from '@/components/data/split-box-detail'

export default {
  name: 'HorizontalSplitBox',
  props: {
    isReverse: {
      type: Boolean,
      required: false,
      default: () => false
    },
    descriptionType: {
      type: String,
      required: true,
      default: () => 'UNKOWN'
    },
    imageUrl: {
      type: String,
      required: true,
      default: () => '/images/placeholder.png'
    }
  },
  data: () => ({ detail: DETAIL }),
  methods: {
    go (path) {
      this.$router.push(path)
    }
  },
  computed: {
    selectedDetail () {
      if (!this.descriptionType || this.descriptionType === 'UNKOWN') return null
      return this.detail[this.descriptionType]
    }
  }
}
</script>

<style lang="scss" scoped>
.split-box-container {
  display: flex;
  flex-direction: column-reverse;
  padding: 0 7px;
  width: 100%;
  margin: auto;
  margin-top: 8rem;
  margin-bottom: 4rem;
}
.split-box-container.reverse {
  flex-direction: column;
}

.box-description, .box-image {
  width: 100%;
}

.box-image > img {
  width: 100%;
}

.detail-title {
  font-size: 20px;
  font-weight: 800;
  color: #00afff;
}

.detail-desc {
  font-size: 36px;
  font-weight: bold;
}

.detail-content {
  margin-top: 20px;
  color: #777;
}

.detail-btn {
  background: #00afff;
  color: #fff;
  padding: 8px 24px;
  border: 1px solid transparent;
  border-radius: 21px;
  margin-top: 2rem;
}

@media (min-width: 540px) {
  .split-box-container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .split-box-container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .split-box-container {
    flex-direction: row;
    max-width: 960px;
  }
  .box-description, .box-image {
    width: 50%;
  }
}

@media (min-width: 1200px) {
  .split-box-container {
    max-width: 1140px;
  }
}
  
</style>

