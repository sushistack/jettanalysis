<template lang="pug">
article
  h1 {{ article.title }}
  p {{ article.description }}
  img(:src='article.img' :alt='article.alt')
  p Article last updated: {{ formatDate(article.updatedAt) }}
  nav
  ul
    li(v-for='link of article.toc' :key='link.id')
      nuxt-link(:to='`#${link.id}`') {{ link.text }}
  nuxt-content(:document='article')
  author(:author='article.author')
</template>

<script>
import Author from '@/components/blog/Author'

export default {
  name: 'Slug',
  components: { Author },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    
    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('ko', options)
    }
 }
}
</script>

<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
.icon.icon-link {
  /* background-image: url('~assets/svg/icon-hashtag.svg'); */
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>