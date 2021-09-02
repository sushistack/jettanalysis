<template lang="pug">
.jett-container
  navigation-bar
  .wrap
    section
      top-banner(
        title='다양한 SEO 전략을 얻으세요!'
        desc='다양한 SEO 전략과 팁으로 솔루션 상담을 받을 수 있습니다!'
        :buttonOnly='true'
        buttonText='상담하기'
        @onButtonClick='counsel'
      )
    v-main
      .css-15j7bd7
        template(v-for='article in articles')
          article-preview(
            type='blog'
            :article='article'
          )
  page-footer
</template>

<script>
import TopBanner from '@/components/TopBanner'
import ArticlePreview from '@/components/blog/ArticlePreview'

export default {
  name: 'Blog',
  components: { TopBanner, ArticlePreview },
  async asyncData({ $content, params }) {
    const articles = await $content('articles', 'blog')
      .only(['title', 'body', 'excerpt', 'img', 'slug', 'author', 'updatedAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    articles.map((article) => {
      article.excerpt = { body: article.excerpt }
    })

    return {
      articles
    }
  },
  methods: {
    counsel () {
      window.open(process.env.COUNSEL_LINK, '_blank').focus()
    }
  }
}
</script>


<style lang="scss" scoped>
.wrap {
  font-size: 1.125rem;
  background-color: rgb(255, 255, 255);
  overflow-x: hidden;
}
.css-15j7bd7 {
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 30px;
  padding-bottom: 35px;
}
</style>
