<template lang="pug">
.article-container
  navigation-bar
  v-main
    article
      header.css-66hu0x
        .css-1pbu2z8
          .css-chky3p
            h1.css-1r8cg95 {{ article.title }}
            .css-5vc5y3
              time.updated(datetime='article.updatedAt')
              p 최종 수정일: {{ formatDate(article.updatedAt) }}
          figure.css-e00ba0
            img(:src='article.img' :alt='article.title')
      .css-2lmhoi
        .css-1ricvn
          .toc
            ul
              li(v-for='link of article.toc' :key='link.id')
                nuxt-link(:to='`#${link.id}`') {{ link.text }}
          #content.css-107jwiq
            nuxt-content(:document='article')
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

<style lang="scss" scoped>
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

.toc {
  ul {
    
    li {

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
  .css-1pbu2z8, .css-1ricvn {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .css-1pbu2z8, .css-1ricvn {
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
  .css-1pbu2z8, .css-1ricvn {
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
  /* background-image: url('~assets/svg/icon-hashtag.svg'); */
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>