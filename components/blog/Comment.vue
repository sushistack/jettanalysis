<template lang="pug">
.comments-container
  .comments-inner-container
    #comments
      p.comments-title
        span {{ commentCount }}
        |  댓글
      share-box(
        :post='post'
        :shareUrl='shareUrl'
        :shareTwitter='shareTwitter'
        :shareFacebook='shareFacebook'
      )
    ul.comments
      li.comment-item(v-for='(comment, index) in comments' :key='index')
        v-skeleton-loader(v-bind='attrs' :loading='isCommentLoading' type='list-item-avatar-two-line, paragraph')
          .comment-wrapper
            .comments-author
              .comments-author-photo(:style='{backgroundColor: userColor(comment.created_at)}') {{ comment.username | filterFirstChar }}
              .comments-author-data
                .comments-author-name {{ comment.username }}
                .comments-author-metadata
                  time(:datetime='comment.create_at') {{ comment.created_at | toDateTime }}
            p.comments-content {{ comment.content }}
    .comment-form
      validation-observer(ref='form' v-slot='{ handleSubmit, reset }')
        form(@submit.prevent='handleSubmit(submit)' @reset.prevent='reset')
          v-col
            validation-provider(v-slot='{ errors }' name='이름' rules='required|min:1|max:30')
              v-text-field.mb-3(v-model='username' :error-messages='errors' label='이름' outlined)
            validation-provider(v-slot='{ errors }' name='비밀번호' rules='required|min:4|max:20')
              v-text-field.mb-3(
                v-model='password'
                :error-messages='errors'
                label='비밀번호'
                outlined
                :append-icon='showPassword ? "mdi-eye" : "mdi-eye-off"'
                :type='showPassword ? "text" : "password"' 
                @click:append='showPassword = !showPassword'
              )
            validation-provider(v-slot='{ errors }' name='내용' rules='required|min:1|max:1500')
              v-textarea(v-model='content' label='내용' :error-messages='errors' outlined)
          v-col
            v-btn.white--text(:loading='loading' color='#00afff' type='submit' large) 등록
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
import { ValidationObserver, ValidationProvider } from "vee-validate"
import ShareBox from "@/components/ShareBox"
const FRONTEND_BASE_URL = `${process.env.BASE_URL}${process.env.FRONTEND_PORT}`

export default {
  name: "Comment",
  props: {
    post: { type: Object, required: true }
  },
  components: { ValidationObserver, ValidationProvider, ShareBox },
  data: () => ({
    comments: [{}, {}],
    isCommentLoading: true,
    username: "",
    password: "",
    showPassword: false,
    content: "",
    loading: false,
    attrs: {
      class: "mb-6",
      boilerplate: false,
      elevation: 0
    },
    snackbar: false
  }),
  mounted() {
    const collect = this.$fire.firestore.collection(this.post.id).get();

    collect.then(snapshot => {
      this.comments = snapshot.docs.map(doc => doc.data());
      this.isCommentLoading = false;
    });
  },
  methods: {
    submit() {
      const comment = {
        username: this.username,
        password: this.password,
        content: this.content,
        created_at: new Date().getTime()
      };
      this.loading = true;
      this.$fire.firestore
        .collection(this.post.id)
        .add(comment)
        .then(() => {
          this.loading = false;
          this.comments.push(comment);
          this.resetCommentForm();
        })
        .catch(error => {
          this.loading = false;
          alert("댓글 등록에 실패했습니다.");
        });
    },
    resetCommentForm () {
      this.username = ''
      this.password = ''
      this.content = ''
    },
    userColor (time) {
      switch (Number(time) % 8) {
        case 0: return '#855c47'
        case 1: return '#7a8547'
        case 2: return '#475085'
        case 3: return '#7d4785'
        case 4: return '#477085'
        case 5: return '#474b85'
        case 6: return '#7d8547'
        case 7: return '#478549'
      }
    },
    shareKakaoStory () {
      this.$kakao.Story.share({
        url: this.shareUrl,
        text: `${this.post.title}\n\n${this.post.description}`
      })
    },
    shareKakaoTalk () {
      this.$kakao.Link.sendCustom({
        templateId: 60106,
        templateArgs: {
          thumbnail: this.post.img,
          title: this.post.title,
          description: this.post.description,
          path: this.post.id
        }
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
    commentCount () {
      if (!this.comments) return 0
      return this.comments.length
    },
    shareUrl () {
      return `${FRONTEND_BASE_URL}/${this.post.id}`
    },
    shareTwitter () {
      return `https://twitter.com/share?text=${this.post.title}&url=${this.shareUrl}&via=jettanalysis`
    },
    shareFacebook () {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.shareUrl}`
    }
  },
  filters: {
    filterFirstChar (value) {
      if (!value) return ''
      return value.toUpperCase().charAt(0)
    },
    toDateTime (value) {
      if (!value) return ''
      const d = new Date(Number(value))
      const format = (n) => `${n}`.length === 1 ? `0${n}` : n
      return `${d.getFullYear()}.${format(d.getMonth() + 1)}.${format(d.getDate())} ${format(d.getHours())}:${format(d.getMinutes())}`
    }
  }
}
</script>

<style lang="scss" scoped>
#comments {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ebebeb;
  padding: 25px 0;
}

.comment-size-progress {
  margin-right: 7.5px;
}

.comments-title {
  font-size: 14px;
  display: flex;
  line-height: 1;
  -webkit-box-align: center;
  align-items: center;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin-bottom: 0px !important;
  span {
    color: #00afff;
    font-size: 36px;
    font-weight: 700;
    padding-right: 10px;
  }
}

.comments-container {
  padding: 22.5px 0px !important;
}

.comments-inner-container {
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
}

.comments {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  margin: 1rem 0;
}

.comments-wrapper {
  margin-bottom: 1.75rem;
  word-wrap: break-word;
}

.comments-author-photo {
  width: 48px;
  height: 48px;
  margin-right: 16px;
  line-height: 48px;
  text-align: center;
  font-weight: 700;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
}

.comments-author-data {
  flex-grow: 1;
  min-width: 1px;
}

.comments-author-name {
  font-weight: 700;
  line-height: 22.5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.comments-author-metadata {
  font-size: 10px;
  line-height: 22.5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.comments-socials {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
}

.comments-link {
  display: block;
  width: 1.75rem;
  height: 1.75rem;
  background: rgb(247, 247, 247);
  display: flex;
  justify-content: center;
  align-items: center;
  fill: rgb(36, 41, 46);
}

.comment-form {
  border-top: 1px solid #ebebeb;
  margin: 25px 0;
  padding-top: 1rem;
}

@media (min-width: 576px) {
  .comments-inner-container {
    padding-right: 10px;
    padding-left: 10px;
  }
}

@media (min-width: 540px) {
  .comments-inner-container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .comments-inner-container {
    max-width: 720px;
  }
  .comments-container {
    padding: 27.5px 0px !important;
  }
}

@media (min-width: 992px) {
  .comments-inner-container {
    max-width: 730px;
  }
}
</style>

<style lang="scss">
.comments-author {
  display: flex;
  margin-bottom: 1.75rem;
  position: relative;
}
</style>
