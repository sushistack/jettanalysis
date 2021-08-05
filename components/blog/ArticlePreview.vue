<template lang="pug">
article.post
  .css-u5p2ag
    header.css-79elbk
      div
        router-link(:to='link')
          h2.css-1izrdyl {{ article.title }}
        .css-1d7x0cs
          figure.css-qyxjlf
            picture
              img.css-1a2v9hb(:src='article.author.img' alt='Brian Dean' loading='lazy')
          time.updated(:datetime='article.updatedAt')
          p {{ article.author.name }} · {{ formatDate(article.updatedAt) }} 업데이트
    .css-12m1dn8
      figure.backlinko-image__img-explicit-no-border.backlinko-image(style='max-width: 871.5px')
        .backlinko-img-placeholder(style='display: none; padding-bottom: 34.07917383821%')
        picture
          source(type='image/webp' srcset='https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2021/06/evergreen-content-blog-banner.webp 1743w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2021/06/evergreen-content-blog-banner-300x102.webp 300w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2021/06/evergreen-content-blog-banner-1280x436.webp 1280w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2021/06/evergreen-content-blog-banner-768x262.webp 768w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2021/06/evergreen-content-blog-banner-1536x523.webp 1536w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2021/06/evergreen-content-blog-banner-480x164.webp 480w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2021/06/evergreen-content-blog-banner-640x218.webp 640w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2021/06/evergreen-content-blog-banner-960x327.webp 960w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2021/06/evergreen-content-blog-banner-1440x491.webp 1440w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2021/06/evergreen-content-blog-banner-1600x545.webp 1600w' sizes='(max-width: 871px) 100vw, 871px')
          img.a3-notlazy(style='max-width: 871.5px !important' title='We Analyzed 3.6 Billion Articles. Here’s What We Learned About Evergreen Content' alt="We Analyzed 3.6 Billion Articles. Here's What We Learned About Evergreen Content" data-aspect-ratio='0.34098737083812' src='https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2021/06/evergreen-content-blog-banner.png' srcset='https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2021/06/evergreen-content-blog-banner.png 1743w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2021/06/evergreen-content-blog-banner-300x102.png 300w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2021/06/evergreen-content-blog-banner-1280x436.png 1280w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2021/06/evergreen-content-blog-banner-768x262.png 768w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2021/06/evergreen-content-blog-banner-1536x523.png 1536w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2021/06/evergreen-content-blog-banner-480x164.png 480w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2021/06/evergreen-content-blog-banner-640x218.png 640w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2021/06/evergreen-content-blog-banner-960x327.png 960w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2021/06/evergreen-content-blog-banner-1440x491.png 1440w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2021/06/evergreen-content-blog-banner-1600x545.png 1600w' sizes='(max-width: 871px) 100vw, 871px')
      nuxt-content(:document='article.excerpt')
    footer.css-3872h1
      p.css-toegfy
        span 100
        |  댓글
      router-link.css-13xd08w(:to='link') 이어서 읽기
</template>

<script>
export default {
  name: 'ArticlePreview',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('ko', options)
    }
  },
  computed: {
    link () {
      if (!this.article) return ''
      return `/blog/${this.article.slug}`
    },
    excerpt () {
      if (!this.article) return ''
      return ''
    }
  }
}
</script>


<style lang="scss" scoped>
a {
  text-decoration: none;
  transition: all 0.2s ease-in-out 0s;
}

.css-u5p2ag {
  position: relative;
  padding: 25px 0 35px;
}

.css-79elbk {
  position: relative;
}

.css-1izrdyl {
  font-size: 28px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  cursor: pointer;
  margin-bottom: 25px;
  color: #000;
  -webkit-transition: color 0.5s;
  transition: color 0.5s;
}

.css-1izrdyl:hover,.css-1izrdyl:focus {
  color: #bb4a03;
}

.css-1a2v9hb {
  max-width: 100%;
  height: auto;
}

.css-1d7x0cs {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  margin-bottom: 30px;
}

.css-1d7x0cs p {
  margin-bottom: 0;
  line-height: 1.2;
  font-size: 14px;
}

.css-qyxjlf {
  margin-bottom: 0;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
}

.css-12m1dn8 {
  font-family: "Georgia",serif;
}

.css-12m1dn8 p {
  margin-bottom: 1.2rem;
}

.css-12m1dn8 figure {
  margin-bottom: 1.3rem;
}

.css-12m1dn8 img {
  width: 100%;
}

.css-12m1dn8 *:last-child {
  margin-bottom: 0 !important;
}

.css-12m1dn8 p > img {
  width: initial;
}

.css-12m1dn8 .backlinko-image img {
  display: inline-block;
  width: 100%;
}

.css-12m1dn8 .backlinko-image.backlinko-has-border img {
  border: 4px solid #cccccc;
}

.css-12m1dn8 .backlinko-image.img-circle img {
  border-radius: 50% !important;
}

.css-12m1dn8 .alignnone {
  margin-left: 0;
  margin-right: 0;
  max-width: 100%;
  height: auto;
}

.css-12m1dn8 .aligncenter {
  display: block;
  margin: 1rem auto;
  height: auto;
}

.css-12m1dn8 .alignleft {
  margin-bottom: 1rem;
  height: auto;
}

.css-12m1dn8 .alignright {
  margin-bottom: 1rem;
  height: auto;
}

.css-12m1dn8 .backlinko-image__centered-image img {
  margin: 0 auto !important;
}

.css-12m1dn8 .backlinko-image__img-explicit-no-border:not(.backlinko-has-border) img {
  border: 0 none !important;
  border-radius: 0 !important;
}

.css-12m1dn8 .backlinko-image__img-mt-minus-1-xs-up img {
  margin-top: -1rem !important;
}

.css-12m1dn8 .backlinko-image__img-mt-minus-1-point-5-xs-up img {
  margin-top: -1.5rem !important;
}

.css-12m1dn8 .backlinko-image__img-mt-minus-2-xs-up img {
  margin-top: -2rem !important;
}

.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-5-xs-up img {
  margin-top: -2.5rem !important;
}

.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-75-xs-up img {
  margin-top: -2.75rem !important;
}

.css-12m1dn8 .backlinko-image__img-mt-minus-3-xs-up img {
  margin-top: -3rem !important;
}

.css-12m1dn8 .backlinko-image__img-mt-minus-4-point-5-xs-up img {
  margin-top: -4.5rem !important;
}

.css-12m1dn8 .backlinko-image__img-mb-0 img {
  margin-bottom: 0 !important;
}

.css-12m1dn8 .backlinko-image__img-border-radius-4 img,.css-12m1dn8 .visual > img {
  border: 0 none !important;
  border-radius: 0.25rem !important;
}

.css-12m1dn8 .backlinko-image__img-hub-rounded img,.css-12m1dn8 .backlinko-image__rounded img {
  border: 0 none !important;
  border-radius: 0.5rem !important;
}

.css-12m1dn8 .backlinko-image__screenshot img {
  outline: none !important;
  margin: 0 auto !important;
  border: 4px solid #cccccc;
  border-radius: 0 !important;
}

.css-12m1dn8 .backlinko-image__visual-chart img {
  outline: none !important;
  margin: 0 auto !important;
  border: 0 none !important;
  border-radius: 0.3rem !important;
}

.css-12m1dn8 .backlinko-image__bg-white img {
  background-color: #fff !important;
}

.css-12m1dn8 .backlinko-image__bg-light-gray-lighter img {
  background-color: #f8f8f8 !important;
}

.css-12m1dn8 .backlinko-image__bg-light-gray-darker img {
  background-color: #f4f4f4 !important;
}

.css-3872h1 {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 1.5rem;
}

.css-toegfy {
  font-size: 14px;
  display: flex;
  line-height: 1;
  -webkit-box-align: center;
  align-items: center;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin-bottom: 0px !important;
}

.css-toegfy span {
  color: #00afff;
  font-size: 36px;
  font-weight: 700;
  padding-right: 10px;
}

.css-13xd08w {
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
  width: 100%;
  border-radius: 6px;
}

.css-13xd08w:link,.css-13xd08w:visited,.css-13xd08w:hover,.css-13xd08w:active {
  color: #fff;
  -webkit-text-decoration: none;
  text-decoration: none;
}

.css-13xd08w:hover {
  background: #0077ff;
  border-color: #0077ff;
}

@media (min-width: 540px) {
  .css-12m1dn8 .alignright {
    float:right;
    margin-left: 1rem;
  }
  .css-12m1dn8 .alignleft {
    float:left;
    margin-left: 1rem;
  }
  .css-12m1dn8 .backlinko-image__img-mt-minus-1-point-5-sm-up img {
    margin-top:-1.5rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mt-minus-1-sm-up img {
    margin-top:-1rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mt-minus-2-sm-up img {
    margin-top:-2rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mt-minus-2-point-5-sm-up img {
    margin-top:-2.5rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mt-minus-2-point-75-sm-up img {
    margin-top:-2.75rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mt-minus-3-sm-up img {
    margin-top:-3rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mt-minus-4-point-5-sm-up img {
    margin-top:-4.5rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mb-minus-1-sm-up img {
    margin-bottom:-1rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mb-minus-2-sm-up img {
    margin-bottom:-2rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mb-minus-2-point-5-sm-up img {
    margin-bottom:-2.5rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mb-minus-3-sm-up img {
    margin-bottom:-3rem !important;
  }
}

@media (min-width: 768px) {
  .css-u5p2ag {
    padding:35px 0 55px;
  }
  .css-1izrdyl {
    font-size:38px;
  }
  .css-toegfy {
    margin-right: 30px;
  }
  .css-12m1dn8 .backlinko-image.alignleft-md-up {
    float:left;
    margin-left: 1rem;
  }
  .css-12m1dn8 .backlinko-image.alignright-md-up {
    float:right;
    margin-left: 1rem;
  }
  .css-12m1dn8 .backlinko-image__img-mt-minus-1-md-up img {
    margin-top:-1rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mt-minus-1-point-5-md-up img {
    margin-top:-1.5rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mt-minus-2-md-up img {
    margin-top:-2rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mt-minus-2-point-5-md-up img {
    margin-top:-2.5rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mt-minus-2-point-75-md-up img {
    margin-top:-2.75rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mt-minus-3-md-up img {
    margin-top:-3rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mt-minus-4-point-5-md-up img {
    margin-top:-4.5rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mb-minus-1-md-up img {
    margin-bottom:-1rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mb-minus-2-md-up img {
    margin-bottom:-2rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mb-minus-2-point-5-md-up img {
    margin-bottom:-2.5rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mb-minus-3-md-up img {
    margin-bottom:-3rem !important;
  }
  .css-3872h1 {
    display:-webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-top: 2rem;
  }
}

@media (min-width: 992px) {
  .css-u5p2ag {
    padding:50px 0;
  }
  .css-12m1dn8 .backlinko-image__img-mt-minus-1-lg-up img {
    margin-top:-1rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mt-minus-1-point-5-lg-up img {
    margin-top:-1.5rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mt-minus-2-lg-up img {
    margin-top:-2rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mt-minus-2-point-5-lg-up img {
    margin-top:-2.5rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mt-minus-2-point-75-lg-up img {
    margin-top:-2.75rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mt-minus-3-lg-up img {
    margin-top:-3rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mt-minus-4-point-5-lg-up img {
    margin-top:-4.5rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mb-minus-1-lg-up img {
    margin-bottom:-1rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mb-minus-2-lg-up img {
    margin-bottom:-2rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mb-minus-2-point-5-lg-up img {
    margin-bottom:-2.5rem !important;
  }
  .css-12m1dn8 .backlinko-image__img-mb-minus-3-lg-up img {
    margin-bottom:-3rem !important;
  }
}

</style>

<style lang="scss">
.css-15j7bd7 {
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 30px;
  padding-bottom: 35px;
}

.css-15j7bd7 .post + .post > div {
  border-top: 1px solid #e6e6e6;
}

.css-15j7bd7 article:last-of-type > div:last-of-type {
  border-bottom: 1px solid #e6e6e6;
}

@media (min-width: 576px) {
  .css-15j7bd7 {
    padding-right:10px;
    padding-left: 10px;
  }
}

@media (min-width: 540px) {
  .css-15j7bd7 {
    max-width:540px;
  }
}

@media (min-width: 768px) {
  .css-15j7bd7 {
    padding-bottom:50px;
    max-width:720px;
  }
}

@media (min-width: 992px) {
  .css-15j7bd7 {
    padding-top:20px;
    padding-bottom: 90px;
    max-width: 850px;
    article {
      padding:0 60px;
      margin-top: 20px;
    }
    article:first-child {
      margin-top:0;
    }
  }
}
</style>

