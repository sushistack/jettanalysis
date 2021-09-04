<template lang="pug">
.jett-container
  navigation-bar
  .wrap
    section
      top-banner(
        title='다양한 SEO 요소들을 확인해보세요!'
        desc='다양한 SEO 요소를 알아야 SEO 최적화를 할 수 있습니다!'
        :buttonOnly='true'
        buttonText='상담하기'
        @onButtonClick='counsel'
      )
    v-main
      .css-15j7bd7(v-if='articles')
        template(v-for='article in articles')
          article-preview(
            type='wiki'
            :article='article'
          )
  page-footer
</template>

<script>
import TopBanner from '@/components/TopBanner'
import ArticlePreview from '@/components/blog/ArticlePreview'
const FRONTEND_BASE_URL = `${process.env.BASE_URL}${process.env.FRONTEND_PORT}`

export default {
  name: 'Wiki',
  components: { TopBanner, ArticlePreview },
  async asyncData({ $content, params }) {
    const articles = await $content('articles', 'wiki')
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
  head ({$seoMeta}) {
    const title = '검색엔진 최적화 위키'
    return {
      title: title,
      meta: $seoMeta(
        {
          title: `${title} | ${process.env.SITE_NAME}`,
          url: `${FRONTEND_BASE_URL}/wiki`,
          description: '다양한 SEO 요소들에 대해 소개하는 검색엔진 최적화 위키입니다.'
        },
        false
      ),
      link: [ {rel: 'canonical', href: `${FRONTEND_BASE_URL}${this.$route.path}`} ]
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
