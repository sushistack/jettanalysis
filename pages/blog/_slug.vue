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
            v-img.article-img(:src='article.img' :alt='article.title')
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
const FRONTEND_BASE_URL = `${process.env.BASE_URL}${process.env.FRONTEND_PORT}`

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
      meta: [{ hid: 'keyword', name: 'keyword', content: this.article.tags.join(',') }]
        .concat($seoMeta(
        {
          title: `${this.article.title} | ${process.env.SITE_NAME}`,
          url: `${FRONTEND_BASE_URL}/blog/${this.article.id}`,
          description: this.article.description,
          image: smartUrl(this.article.img)
        },
        false
      )),
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
      if (!this.article || !this.article.fontColor) return '#ffffff'
      return this.article.fontColor
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
        img: this.article.img
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#content {
  img {
    display: block;
    max-width: 100%;
    margin: auto;
  }
  ul {
    margin: 1rem 0;
  }
  h2 {
    margin: 4rem 0 1rem 0;
  }
}


.css-66hu0x {
  overflow: hidden;
  position: relative;
  color: rgb(255, 255, 255);
  text-align: center;
  transition: all 0.2s ease-in-out 0s;
  background-color: rgb(64, 122, 223);
}
.css-1pbu2z8 {
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
}
.css-chky3p {
  padding: 45px 0px;
}
.css-1r8cg95 {
  color: rgb(255, 255, 255);
  font-size: 28px;
  margin-bottom: 25px;
}

.css-5vc5y3 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-bottom: 0px !important;
  p {
  margin-bottom: 0px;
  line-height: 1.2;
  font-size: 14px;
  }
}

.css-e00ba0 {
  position: relative;
  margin: -10px auto 0px;
  max-width: 600px;
  .article-img {
    position: relative;
    width: 100%;
    height: auto;
  }
}

.css-e00ba0::before {
  content: "";
  position: absolute;
  left: -100vw;
  right: -100vw;
  bottom: 0px;
  height: 50%;
  background-color: white;
}

.css-2lmhoi {
  padding: 22.5px 0px !important;
}

.css-1ricvn {
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
}

.tags {
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  ul {
    padding: 0;
    list-style: none;
    li {
      display: inline;
      cursor: pointer;
      background: #eee;
      border: 1px solid #ddd;
      border-radius: 3px;
      margin-right: 5px;
      padding: 0 5px;
    }
  }
}

@media (min-width: 576px) {
  .css-1pbu2z8, .css-1ricvn {
    padding-right: 10px;
    padding-left: 10px;
  }
}

@media (min-width: 540px) {
  .css-1pbu2z8, .css-1ricvn, .tags {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .css-1pbu2z8, .css-1ricvn, .tags {
    max-width: 720px;
  }
  .css-chky3p {
    padding: 55px 0px;
  }
  .css-1r8cg95 {
    font-size: 38px;
  }
  .css-e00ba0 {
    margin-top: -15px;
  }
  .css-2lmhoi {
    padding: 27.5px 0px !important;
  }
}

@media (min-width: 992px) {
  .css-1pbu2z8, .css-1ricvn, .tags {
    max-width: 730px;
  }
  .css-chky3p {
    padding: 65px 0px;
  }
  .css-e00ba0 {
    margin-top: -20px;
  }
  .css-2lmhoi {
    padding: 32.5px 0px !important;
  }
}

@media (min-width: 1200px) {

}
</style>


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
  background-image: url('~assets/svgs/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
.icon.icon-link.small {
  width: 14px;
  height: 14px;
  background-size: 14px 17px;
}
</style>