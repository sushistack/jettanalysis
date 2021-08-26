<template lang="pug">
.comments-container
  .comments-inner-container
    #comments
      p.comments-title
        span {{ commentCount }}
        |  댓글
      ul.share
        li
          a.twitter(:href='shareTwitter' target='_blank')
            svg.icon-twitter(fill='#219bcf' viewBox='0 0 512 512' width='24' height='24')
              path(d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z')
        li
          a.facebook(:href='shareFacebook' target='_blank')
            svg.icon-facebook(fill='#66679d' viewBox='0 0 320 512' width='24' height='24')
              path(d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z')
        li
          a.kakao-story(@click.stop.prevent='shareKakaoStory')
            svg(fill='#f2d41e' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 1000 1000' xml:space='preserve' width='24' height='24')
              g
                g(transform='translate(0.000000,511.000000) scale(0.100000,-0.100000)')
                  path(d='M2743.4,4958.8c-75.2-27.3-140.1-51.2-143.5-51.2c-3.4,0-47.8-58.1-95.7-126.4l-85.4-129.8V2410V168.8l78.6-116.2c150.3-228.9,194.7-235.8,1332.4-235.8H4848l-23.9-177.7c-30.7-252.8-170.8-686.7-310.9-966.9c-208.4-410-444.1-714.1-919-1175.3c-252.8-245.9-457.8-471.5-457.8-498.8c0-109.3,116.2-259.6,792.6-1007.9c594.5-659.4,710.6-768.7,799.5-779c92.2-10.2,157.2,30.7,410,242.6C6200.9-3661.1,6973-2468.8,7324.9-1177.3c232.4,850.7,228.9,775.5,242.6,3440.4l13.7,2432.6l-105.9,123c-61.5,68.3-164,136.7-232.3,157.2c-78.6,20.5-908.8,34.2-2244.7,34.2C3242.2,5006.6,2856.1,4999.8,2743.4,4958.8z')
        li
          a.kakao-talk(@click.stop.prevent='shareKakaoTalk')
            svg(xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 24 24' height='24' viewBox='0 0 24 24' width='24')
              path(fill='#fae100' d='m12 1c-6.627 0-12 4.208-12 9.399 0 3.356 2.246 6.301 5.625 7.963-1.299 4.45-1.333 4.47-1.113 4.599.276.161.634-.005 5.357-3.311.692.097 1.404.148 2.131.148 6.627 0 12-4.208 12-9.399s-5.373-9.399-12-9.399zm-5.942 12.023c0 .362-.311.657-.692.657s-.692-.295-.692-.657v-4.086h-1.08c-.375 0-.679-.302-.679-.673s.303-.674.678-.674h3.545c.375 0 .679.302.679.673s-.305.674-.679.674h-1.08zm5.378.648c-.72 0-.587-.565-.919-1.195h-2.111c-.329.625-.2 1.195-.919 1.195-.693.001-.815-.421-.604-1.071l1.656-4.33c.117-.33.471-.669.922-.679.452.01.807.349.923.679 1.093 3.39 2.654 5.402 1.052 5.401zm3.939-.092h-2.221c-1.159 0-.454-1.565-.663-5.301 0-.379.317-.688.707-.688s.707.308.707.688v4.04h1.471c.366 0 .663.283.663.63-.001.348-.298.631-.664.631zm5.419-.518c-.025.181-.122.344-.269.454-.955.721-1.661-1.381-2.593-2.271l-.24.239v1.5c0 .38-.31.688-.693.688-.382 0-.692-.308-.692-.688v-4.705c0-.379.31-.688.692-.688s.692.308.692.688v1.478c1.277-.958 1.985-2.67 2.792-1.869.792.786-.848 1.474-1.527 2.422 1.604 2.212 1.909 2.267 1.838 2.752z')
        li
          a.clipboard(@click.stop.prevent='copyToClipboard')
            v-icon mdi-link-variant
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
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate"
const FRONTEND_BASE_URL = `${process.env.BASE_URL}${process.env.FRONTEND_PORT}`

export default {
  name: 'Comment',
  props: {
    post: { type: Object, required: true }
  },
  components: { ValidationObserver, ValidationProvider },
  data: () => ({
    comments: [{}, {}],
    isCommentLoading: true,
    username: '',
    password: '',
    showPassword: false,
    content: '',
    loading: false,
    attrs: {
      class: 'mb-6',
      boilerplate: false,
      elevation: 0,
    }
  }),
  mounted () {
    const collect = this.$fire.firestore
      .collection(this.post.id)
      .get()
    
    collect.then(snapshot => {
      this.comments = snapshot.docs.map(doc => doc.data())
      this.isCommentLoading = false
    })
  },
  methods: {
    submit () {
      const comment = {
        username: this.username,
        password: this.password,
        content: this.content,
        created_at: new Date().getTime()
      }
      this.loading = true
      this.$fire.firestore
        .collection(this.post.id)
        .add(comment)
        .then(() => {
          this.loading = false
          this.comments.push(comment)
          this.resetCommentForm()
        })
        .catch(error => {
          this.loading = false
          alert('댓글 등록에 실패했습니다.')
        })
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
          e => { alert('복사되었습니다.') },
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
  border-bottom: 1px solid #ebebeb;
  padding: 25px 0;
}

.comment-size-progress {
  margin-right: 7.5px;
}

.share  {
  margin-bottom: 0;
  margin-left: auto;
  display: flex;
  padding-left: 0;
  list-style: none;
  a {
    text-decoration: none;
  }
  .twitter i {
    color: #219bcf;
  }
  .twitter i:hover {
    color: #1a7aa3;
  }
  .facebook i {
    color: #66679d;
  }
  .facebook i:hover {
    color: #51527f;
  }

  li + li {
    margin-left: 10px;
  }
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
