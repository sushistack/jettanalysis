
<template lang="pug">
.jett-container
  navigation-bar
  .wrap
    section
      top-banner(
        title='다양한 SEO 요소들을 확인해보세요!'
        desc='다양한 SEO 요소를 알아야 SEO 최적화를 할 수 있습니다!'
        :buttonOnly='true'
        buttonText='SEO 전략 서비스 알아보기'
        @onButtonClick='counsel'
      )
    v-main
      .css-15j7bd7(v-if='articles')
        template(v-for='article in articles')
          article-preview(
            type='wiki'
            :article='article'
          )
        nav.css-1i46dgl
          h2.css-18dt6si Posts navigation
          .css-1ctem6t
            .css-1lkog1(v-show='isMore')
              nuxt-link.css-419jou(:to='prevLink') 다음
            .css-1lkog1
              nuxt-link.css-419jou(:to='nextLink') 이전
  page-footer
</template>

<script>
import TopBanner from '@/components/TopBanner'
import ArticlePreview from '@/components/blog/ArticlePreview'
const FRONTEND_BASE_URL = `${process.env.BASE_URL}${process.env.FRONTEND_PORT}`
const PER_PAGE = 5

export default {
  name: 'WikiPage',
  components: { TopBanner, ArticlePreview },
  async asyncData({ $content, params, error }) {
    const pageNo = parseInt(params.number)

    const total = await $content('articles', 'wiki').only(['slug']).fetch()
    const articles = await $content('articles', 'wiki')
      .only(['title', 'body', 'excerpt', 'img', 'slug', 'author', 'updatedAt', 'tags', 'backgroundColorForPreview'])
      .sortBy('createdAt', 'desc')
      .limit(PER_PAGE)
      .skip(PER_PAGE * (pageNo - 1))
      .fetch()

    articles.map((article) => { article.excerpt = { body: article.excerpt } })
    const prev = pageNo + 1
    const next = pageNo - 1
    const isMore = total.length > pageNo * PER_PAGE

    if (!articles.length) return error({ statusCode: 404, message: '포스트가 없습니다.' })

    return { articles, prev, next, isMore }
  },
  head ({$seoMeta}) {
    const title = '검색엔진 최적화 위키'
    return {
      title: title,
      meta: $seoMeta(
        {
          title: `${title} | ${process.env.SITE_NAME}`,
          url: `${FRONTEND_BASE_URL}${this.$route.path}`,
          description: '다양한 SEO 요소들에 대해 소개하는 검색엔진 최적화 위키입니다.'
        },
        false
      ),
      link: [ {rel: 'canonical', href: `${FRONTEND_BASE_URL}${this.$route.path}`} ]
    }
  },
  methods: {
    counsel () {
      this.$router.push('/counsel')
    }
  },
  computed: {
    prevLink () {
      return `/wiki/page/${this.prev}`
    },
    nextLink () {
      if (this.next <= 1) return `/wiki`
      return `/wiki/page/${this.next}`
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

.css-1i46dgl {
  max-width: 710px;
  margin: 35px auto 0;
}
.css-18dt6si {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  -webkit-clip: rect(0,0,0,0);
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}

.css-1ctem6t {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-flex-direction: row-reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  margin: 0 -10px;
}

.css-1lkog1 {
  padding: 0 10px;
  width: 100%;
}

.css-419jou {
  width: 100%;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-style: normal;
  white-space: normal;
  -webkit-letter-spacing: 0;
  -moz-letter-spacing: 0;
  -ms-letter-spacing: 0;
  letter-spacing: 0;
  cursor: pointer;
  text-transform: none;
  font-weight: 600;
  min-height: 3.7875rem;
  color: #fff;
  background-color: #00afff;
  border-color: #00afff;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 1.05rem 1.2rem;
  font-size: 1.125rem;
  line-height: 1.4;
  border-radius: 6px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-decoration: none;
}

@media (min-width: 768px) {
  .css-1i46dgl {
    margin:50px auto 0;
  }
}

@media (min-width: 992px) {
  .css-1i46dgl {
    margin:75px auto 0;
  }
}
</style>
