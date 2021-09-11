<template lang="pug">
.jett-container
  navigation-bar
  .wrap
    v-main
      .css-15j7bd7
        template(v-for='link in links')
          counsel-link(
            :title='link.title'
            :description='link.description'
            :btnText='link.btnText'
            :link='link.link'
            :color='link.color'
          )
  page-footer
</template>

<script>
import TopBanner from '@/components/TopBanner'
import CounselLink from '@/components/CounselLink'

export default {
  name: 'Counsel',
  components: { TopBanner, CounselLink },
  data: () => ({
    links: [
      {id: 0, title: '내 사이트 검색엔진 최적화 하기', description: '내 사이트에 필요한 검색엔진 최적화 작업이 있는지 확인하고 최적화 작업을 진행합니다.', btnText: '사이트 최적화 상담', link: process.env.SITE_SEO_FORM},
      {id: 1, title: '내 사이트 (백)링크 빌딩 작업 하기', description: '내 사이트에 링크 빌딩 작업을 진행하여 검색엔진에서 높은 검색결과 순위를 얻을 수 있습니다.', btnText: '링크 빌딩 작업 상담', link: process.env.SITE_LINK_BUILDING_FORM, color: '#1F7087'},
      {id: 2, title: '내 사이트 SEO 관련 직접 상담하기', description: '내 사이트에 필요한 SEO 관련 직접 상담을 요청할 수 있습니다.', btnText: 'SEO 관련 직접 상담', link: process.env.COUNSEL_LINK, color: '#952175'},
    ]
  }),
  methods: {
    go () {

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
