<template lang="pug">
.product-detail-container
  .product-detail-inner-container
    .css-15j7bd7
      article-preview(
        :article='detail'
        :noTitleLink='true'
        :buttonText='detail.buttonText'
      )
</template>

<script>
import ArticlePreview from '@/components/blog/ArticlePreview'

export default {
  name: 'ProductDetail',
  components: { ArticlePreview },
  props: {
    type: String,
    required: false,
    default: () => 'SETTING_SEO'
  },
  data: () => ({
    PRODUCT_DETAIL: {
      SETTING_SEO: {
        title: '사이트 SEO 최적화 설정은 어떤 서비스인가요?',
        slug: 'diagnosis',
        excerpt: {
          body: {
            type: 'root',
            children: [
              {
                type: 'element', tag: 'p', props:{},
                children: [
                  {
                    type: 'element', tag: 'strong', props: {},
                    children: [ { type: 'text', value: '사이트 SEO 최적화 설정' } ]
                  },
                  { 
                    type: 'text',
                    value: '은 여러분의 웹 사이트를 "사이트 진단"을 통해 분석하여 사이트에 부족한 SEO 요소들을 설정해주는 온페이지(On-Page) SEO 최적화 서비스입니다. ' + 
                           '검색엔진에 잘 노출되기 위해서는 검색엔진 로봇이 사이트를 잘 분석할 수 있는 최적의 환경을 만들어 주어야합니다. ' + 
                           '저희의 "사이트 SEO 최적화 설정" 서비스를 통해 여러분의 사이트를 SEO 환경에 최적화된 사이트로 만들어드리겠습니다.'
                  }
                ]
              }
            ]
          }
        },
        img: '/images/placeholder.png',
        backgroundColorForPreview: '#ccd3e8',
        buttonText: '사이트 자가 진단 하러가기'
      },
      BACKLINK: {
        title: '고품질 기사형 백링크는 어떤 서비스인가요?',
        slug: '/blog/what-is-backlink',
        excerpt: {
          body: {
            type: 'root',
            children: [
              {
                type: 'element', tag: 'p', props:{},
                children: [
                  {
                    type: 'element', tag: 'strong', props: {},
                    children: [ { type: 'text', value: '고품질 기사형 백링크' } ]
                  },
                  { 
                    type: 'text',
                    value: '는 여러분의 웹 사이트를 연결하는 고품질의 기사/블로그 글을 작성해주는 서비스입니다. ' + 
                           '저희가 제공하는 고품질의 기사/블로그 글은 여러분의 웹 사이트의 성격에 맞도록 맞춤형으로 작성됩니다. ' + 
                           '저희의 "고품질 기사형 백링크" 서비스를 통해 여러분의 사이트의 검색 순위 상승을 도와드리겠습니다.'
                  }
                ]
              }
            ]
          }
        },
        img: '/images/placeholder.png',
        backgroundColorForPreview: '#ccd3e8',
        buttonText: '백링크 자세히 알아보기'
      },
    }
  }),
  computed: {
    detail () {
      switch (this.type) {
        case 'SETTING_SEO': return this.PRODUCT_DETAIL.SETTING_SEO
        case 'BACKLINK': return this.PRODUCT_DETAIL.BACKLINK
        default: return 'SEO_SETTING'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.product-detail-container {
  background: #fff;
  margin: auto;
}

.product-detail-inner-container {
  margin: auto;
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

@media (min-width: 540px) {
  .product-detail-inner-container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .product-detail-inner-container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .product-detail-inner-container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .product-detail-inner-container {
    max-width: 1140px;
  }
}
</style>