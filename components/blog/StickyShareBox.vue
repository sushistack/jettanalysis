<template lang="pug">
.entry-sticky-shares-wrap.css-1isgq23
  .entry-sticky-shares.css-72kctk
    ul.entry-shares
      li
        a.share-btn(:href='twiterSharingUrl' @click.stop.prevent='shareTwitter' target='_blank')
          svg.icon-twitter(viewBox='0 0 512 512')
            path(d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z')
      li
        a.share-btn(:href='facebookSharingUrl' @click.stop.prevent='shareFacebook' target='_blank')
          svg.icon-facebook(viewBox='0 0 320 512')
            path(d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z')
      li
        a.share-btn(@click.stop.prevent='shareKakaoStory')
          svg(fill='#f2d41e' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 1000 1000' xml:space='preserve' width='24' height='24')
            g
              g(transform='translate(0.000000,511.000000) scale(0.100000,-0.100000)')
                path(d='M2743.4,4958.8c-75.2-27.3-140.1-51.2-143.5-51.2c-3.4,0-47.8-58.1-95.7-126.4l-85.4-129.8V2410V168.8l78.6-116.2c150.3-228.9,194.7-235.8,1332.4-235.8H4848l-23.9-177.7c-30.7-252.8-170.8-686.7-310.9-966.9c-208.4-410-444.1-714.1-919-1175.3c-252.8-245.9-457.8-471.5-457.8-498.8c0-109.3,116.2-259.6,792.6-1007.9c594.5-659.4,710.6-768.7,799.5-779c92.2-10.2,157.2,30.7,410,242.6C6200.9-3661.1,6973-2468.8,7324.9-1177.3c232.4,850.7,228.9,775.5,242.6,3440.4l13.7,2432.6l-105.9,123c-61.5,68.3-164,136.7-232.3,157.2c-78.6,20.5-908.8,34.2-2244.7,34.2C3242.2,5006.6,2856.1,4999.8,2743.4,4958.8z')
      li
        a.share-btn(@click.stop.prevent='shareKakaoTalk')
          svg(xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 24 24' height='24' viewBox='0 0 24 24' width='24')
            path(fill='#fae100' d='m12 1c-6.627 0-12 4.208-12 9.399 0 3.356 2.246 6.301 5.625 7.963-1.299 4.45-1.333 4.47-1.113 4.599.276.161.634-.005 5.357-3.311.692.097 1.404.148 2.131.148 6.627 0 12-4.208 12-9.399s-5.373-9.399-12-9.399zm-5.942 12.023c0 .362-.311.657-.692.657s-.692-.295-.692-.657v-4.086h-1.08c-.375 0-.679-.302-.679-.673s.303-.674.678-.674h3.545c.375 0 .679.302.679.673s-.305.674-.679.674h-1.08zm5.378.648c-.72 0-.587-.565-.919-1.195h-2.111c-.329.625-.2 1.195-.919 1.195-.693.001-.815-.421-.604-1.071l1.656-4.33c.117-.33.471-.669.922-.679.452.01.807.349.923.679 1.093 3.39 2.654 5.402 1.052 5.401zm3.939-.092h-2.221c-1.159 0-.454-1.565-.663-5.301 0-.379.317-.688.707-.688s.707.308.707.688v4.04h1.471c.366 0 .663.283.663.63-.001.348-.298.631-.664.631zm5.419-.518c-.025.181-.122.344-.269.454-.955.721-1.661-1.381-2.593-2.271l-.24.239v1.5c0 .38-.31.688-.693.688-.382 0-.692-.308-.692-.688v-4.705c0-.379.31-.688.692-.688s.692.308.692.688v1.478c1.277-.958 1.985-2.67 2.792-1.869.792.786-.848 1.474-1.527 2.422 1.604 2.212 1.909 2.267 1.838 2.752z')
      li
        a.share-btn(@click.stop.prevent='copyToClipboard')
          v-icon mdi-link-variant
</template>

<script>
const FRONTEND_BASE_URL = `${process.env.BASE_URL}${process.env.FRONTEND_PORT}`

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    shareTwitter () {
      window.open(this.twiterSharingUrl, 'twitter-share', 'width=800,height=500')
    },
    shareFacebook () {
      window.open(this.facebookSharingUrl, 'facebook-share', 'width=800,height=500')
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
    shareUrl () {
      return `${FRONTEND_BASE_URL}/${this.post.id}`
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
