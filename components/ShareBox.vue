<template lang="pug">
ul.share
  li
    a.twitter(:href='shareTwitter' target='_blank')
      img.share-icon(src='/icons/share-twitter.png')
  li
    a.facebook(:href='shareFacebook' target='_blank')
      img.share-icon(src='/icons/signin-facebook.png')
  li
    a.kakao-story(@click.stop.prevent='shareKakaoStory')
      img.share-icon(src='/icons/share-kakao-story.png')
  li
    a.kakao-talk(@click.stop.prevent='shareKakaoTalk')
      img.share-icon(src='/icons/signin-kakao.png')
  li
    a.clipboard(@click.stop.prevent='copyToClipboard')
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

export default {
  name: "ShareBox",
  props: {
    shareUrl: {
      type: String,
      required: true
    },
    shareTwitter: {
      type: String,
      required: true
    },
    shareFacebook: {
      type: String,
      required: true
    },
    post: {
      type: Object,
      required: true
    }
  },
  data: () => ({ snackbar: false }),
  methods: {
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
    copyToClipboard() {
      this.$copyText(this.shareUrl).then(
        e => {
          this.snackbar = true;
        },
        e => {
          alert("복사에 실패했습니다.");
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.share {
  margin-bottom: 0;
  margin-top: auto;
  display: flex;
  padding-left: 0;
  list-style: none;
  a {
    text-decoration: none;
    .share-icon {
      width: 32px;
      height: 32px;
      transition: transform .2s;
    }
    .share-icon:hover {
      transform: scale(1.15);
    }
  }

  li + li {
    margin-left: 10px;
  }
}
</style>
