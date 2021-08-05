<template lang="pug">
.author-container
  v-img(:src='author.img')
  .author
    h4 Author
    p {{ author.name }}
    p {{ author.bio }}
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>
