<template lang="pug">
.entry-sticky-shares-wrap.css-1isgq23
  .entry-sticky-shares.css-72kctk
    ul.entry-shares
      li
        a.share-btn(:href='twiterSharingUrl' @click.stop.prevent='shareTwitter' target='_blank')
          img.share-icon(src='/icons/share-twitter.png')
      li
        a.share-btn(:href='facebookSharingUrl' @click.stop.prevent='shareFacebook' target='_blank')
          img.share-icon(src='/icons/signin-facebook.png')
      li
        a.share-btn(@click.stop.prevent='shareKakaoStory')
          img.share-icon(src='/icons/share-kakao-story.png')
      li
        a.share-btn(@click.stop.prevent='shareKakaoTalk')
          img.share-icon(src='/icons/signin-kakao.png')
      li
        a.share-btn(@click.stop.prevent='copyToClipboard')
          img.share-icon(src='/icons/share-link.png')
  v-snackbar(
    v-model='snackbar'
    timeout='1500'
    min-width='210'
    width='210' 
    rounded='pill'
    top
    right
  ) 복사되었습니다!
    template(v-slot:action='{ attrs }')
      v-btn(color='pink' text v-bind='attrs' @click='snackbar = false') 닫기
</template>

<script>
import { loadKakaoSdk, smartUrl } from '@/util'
const NUXT_APP_BASE_URL = process.env.NUXT_APP_BASE_URL || 'https://jettanalysis.com'
const NUXT_APP_FRONTEND_PORT = process.env.NUXT_APP_FRONTEND_PORT || ''
const FRONTEND_BASE_URL = `${NUXT_APP_BASE_URL}${NUXT_APP_FRONTEND_PORT}`

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data: () => ({ snackbar: false }),
  methods: {
    shareTwitter () {
      window.open(this.twiterSharingUrl, 'twitter-share', 'width=800,height=500')
    },
    shareFacebook () {
      window.open(this.facebookSharingUrl, 'facebook-share', 'width=800,height=500')
    },
    shareKakaoStory() {
      loadKakaoSdk(() => {
          window.Kakao.Story.share({
          url: this.shareUrl,
          text: `${this.post.title}\n\n${this.post.description}`
        })
      })
    },
    shareKakaoTalk() {
      loadKakaoSdk(() => {
          window.Kakao.Link.sendCustom({
          templateId: 60106,
          templateArgs: {
            thumbnail: smartUrl(this.post.img),
            title: this.post.title,
            description: this.post.description,
            path: `${this.post.type}/${this.post.id}`
          }
        })
      })
    },
    copyToClipboard () {
      this.$copyText(this.shareUrl)
        .then(
          e => { this.snackbar = true },
          e => { alert('복사에 실패했습니다.') }
        )
    }
  },
  computed: {
    shareUrl () {
      return `${FRONTEND_BASE_URL}/${this.post.type}/${this.post.id}`
    },
    twiterSharingUrl () {
      return `https://twitter.com/share?text=${this.post.title}&url=${this.shareUrl}&via=jettanalysis`
    },
    facebookSharingUrl () {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.shareUrl}`
    }
  }
}
</script>


<style lang="scss" scoped>
.css-1isgq23 {
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
}

.share-btn {
  cursor: pointer;
}

.share-icon {
  width: 32px;
  height: 32px;
  transition: transform .2s;
}

.share-icon:hover {
  transform: scale(1.15);
}

.css-72kctk {
  display: none;
}

@media (min-width: 576px) {
  .css-1isgq23 {
    padding-right:10px;
    padding-left: 10px;
  }
}

@media (min-width: 540px) {
  .css-1isgq23 {
    max-width:540px;
  }
}

@media (min-width: 768px) {
  .css-1isgq23 {
    max-width:720px;
  }
}

@media (min-width: 992px) {
  .css-1isgq23 {
    max-width:960px;
  }
  .css-72kctk {
    display:block;
    position: fixed;
    z-index: 1;
    background-color: #fff;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    padding: 15px 2px 10px;
    text-align: center;
    top: 140px;
    width: 60px;
  }

  .css-72kctk ul {
    margin-bottom: 0;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .css-72kctk ul li a {
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
    width: 33px;
    height: 33px;
    font-size: 24px;
  }

  .css-72kctk ul li a svg {
    max-width: 26px;
    height: 100%;
    max-height: 26px;
    pointer-events: none;
  }

  .css-72kctk ul li a svg.icon-twitter {
    fill: #219bcf;
  }

  .css-72kctk ul li a svg.icon-twitter:hover {
    fill: #1d8bba;
  }

  .css-72kctk ul li a svg.icon-facebook {
    fill: #66679d;
  }

  .css-72kctk ul li a svg.icon-facebook:hover {
    fill: #5b5c8d;
  }
}

@media (min-width: 1200px) {
  .css-1isgq23 {
    max-width:1140px;
  }
  .css-72kctk ul li a {
    font-size:26px;
    width: 50px;
    height: 50px;
  }
  .css-72kctk {
    width:75px;
  }
}

</style>
