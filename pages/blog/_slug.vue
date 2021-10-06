<template lang="pug">
.article-container
  navigation-bar
  sticky-share-box(:post='post')
  v-main
    article
      header.css-66hu0x(:style='{color: topFontColor, backgroundColor: topBackgroundColor}')
        .css-1pbu2z8
          .css-chky3p
            h1.css-1r8cg95 {{ article.title }}
            .css-5vc5y3
              time.updated(datetime='article.updatedAt')
              p {{ article.author.name }} · {{ formatDate(article.updatedAt) }} 업데이트
          figure.css-e00ba0
            v-img.article-img(
              lazy-src='/images/placeholder.png'
              :src='article.img' :alt='article.title'
            )
              template(v-slot:placeholder)
                v-row.fill-height.ma-0(align='center' justify='center')
                  v-progress-circular(indeterminate color='grey lighten-5')
      .css-2lmhoi
        .css-1ricvn
          table-of-content(:toc='article.toc')
          #content.css-107jwiq
            nuxt-content(:document='article')
      .tags
        ul
          li(v-for='tag in article.tags')
            span.icon.icon-link.small
            | {{ tag }}
    comment(:post='post')
  page-footer
</template>

<script>
import Author from '@/components/blog/Author'
import TableOfContent from '@/components/blog/TableOfContent'
import Comment from '@/components/blog/Comment'
import StickyShareBox from '@/components/blog/StickyShareBox'
import { smartUrl } from '@/util'
const NUXT_APP_BASE_URL = process.env.NUXT_APP_BASE_URL || 'https://jettanalysis.com'
const NUXT_APP_FRONTEND_PORT = process.env.NUXT_APP_FRONTEND_PORT || ''
const FRONTEND_BASE_URL = `${NUXT_APP_BASE_URL}${NUXT_APP_FRONTEND_PORT}`

export default {
  name: 'Slug',
  components: { Author, TableOfContent, Comment, StickyShareBox },
  async asyncData({ $content, params, error }) {
    let article = null
    try { article = await $content('articles', 'blog', params.slug).fetch() }
    catch (err) { error(err) }

    return { article }
  },
  head ({$seoMeta}) {
    return {
      title: this.article.title,
      meta: $seoMeta(
        {
          title: `${this.article.title} | ${process.env.NUXT_APP_SITE_NAME || 'JETT Analysis'}`,
          url: `${FRONTEND_BASE_URL}${this.$route.path}`,
          description: this.article.description,
          image: smartUrl(this.article.img)
        },
        false
      ).concat([
        { hid: 'keyword', name: 'keyword', content: this.article.tags.join(',') },
        { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: `${this.article.title} | JETT Analysis` }
      ]),
      link: [ {rel: 'canonical', href: `${FRONTEND_BASE_URL}${this.$route.path}`} ]
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('ko', options)
    }
  },
  computed: {
    topFontColor () {
      if (!this.article || !this.article.color) return '#ffffff'
      return this.article.color
    },
    topBackgroundColor () {
      if (!this.article || !this.article.backgroundColor) return '#00afff'
      return this.article.backgroundColor
    },
    post () {
      return {
        id: this.article.slug,
        title: this.article.title,
        description: this.article.description,
        img: this.article.img,
        type: 'blog'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/article.scss';
</style>
