<template lang="pug">
footer.css-895q96
  .css-5pzm99
    .css-17rfwei
      .css-1k9xznr
        .css-tc2za9
          .css-1k9xznr
            .css-j0bl2w
              router-link.css-osz9vn(title='Backlinko' to='/')
                logo(
                  size='60'
                  fill='#fff'
                )
              .css-1l6xqrc
                p 최적의 검색엔진 최적화 진단과 다양한 팁 그리고 링크 빌딩 전략
            .css-1enann6
              h4.css-10iwlr9 Learn
              nav.css-1xx9hpn
                ul.css-9f21ci
                  li.menu-item
                    router-link(to='/blog') 블로그
                  li.menu-item
                    router-link(to='/diagnosis') 사이트 진단
            .css-1enann6
              h4.css-10iwlr9 Company
              nav.css-1xx9hpn
                ul.css-9f21ci
                  li.menu-item
                    router-link(to='/') 홈
                  li.menu-item
                    router-link(to='/about') 소개
                  li.menu-item
                    a(@click.stop='counsel') 연락하기
        .css-9hzi2i
          h4.css-1hl05th Connect
          ul.css-68xvsd
            li
              a(href='https://twitter.com/jettanalysis' title='Twitter' target='_blank' rel='noopener noreferrer')
                span.sr-only Twitter
                svg(viewBox='0 0 512 512')
                  path(d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z')
            li
              a(href='https://www.youtube.com/channel/' title='YouTube' target='_blank' rel='noopener noreferrer')
                span.sr-only YouTube
                svg(viewBox='0 0 576 512')
                  path(d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z')
            li
              a(href='https://www.instagram.com/jettanalysis/' title='Instagram' target='_blank' rel='noopener noreferrer')
                span.sr-only Instagram
                svg(viewBox='0 0 448 512')
                  path(d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z')
    .css-1ow5rm9
      nav.css-119of8i
        ul.css-9f21ci
          li.menu-item
            router-link(to='/terms-of-service') 서비스 약관
          li.menu-item
            router-link(to='/privacy-notice') 개인정보 보호정책
      p.css-fqr2l1 © 2021 JETT Analysis is a Trademark of JETT Analysis LLC
</template>

<script>
import Logo from './Logo'
export default {
  name: 'PageFooter',
  components: { Logo },
  methods: {
    counsel () {
      window.open(process.env.COUNSEL_LINK, '_blank').focus()
    }
  }
}
</script>


<style lang="scss" scoped>

a {
  transition: all 0.2s ease-in-out 0s;
  color: rgb(187, 74, 3);
  background-color: transparent;
}

a, a:hover {
  text-decoration: none;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0px;
  overflow: hidden;
  clip: rect(0px, 0px, 0px, 0px);
  white-space: nowrap;
  border: 0px;
}

.css-895q96 {
  background-color: #1d2b35;
  line-height: 1.6;
}

.css-5pzm99 {
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
}

.css-17rfwei {
  padding: 50px 0;
}

.css-1ow5rm9 {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 35px 0;
}

.css-1k9xznr {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -10px;
  margin-left: -10px;
}

.css-tc2za9 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 10px;
  padding-left: 10px;
}

.css-9hzi2i {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 10px;
  padding-left: 10px;
}

.css-1k9xznr {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -10px;
  margin-left: -10px;
}

.css-j0bl2w {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 10px;
  padding-left: 10px;
}

.css-1enann6 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 10px;
  padding-left: 10px;
  -webkit-flex: 0 0 50.00000%;
  -ms-flex: 0 0 50.00000%;
  flex: 0 0 50.00000%;
  max-width: 50.00000%;
}

.css-10iwlr9 {
  font-size: 1rem;
  color: #fff;
  font-weight: 600;
  margin-bottom: 20px;
}

.css-9f21ci {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.css-1xx9hpn > ul ul {
  display: none;
}

.css-1xx9hpn > ul > li {
  width: 100%;
}

.css-1xx9hpn > ul > li + li {
  margin-top: 6px;
}

.css-1xx9hpn > ul > li > a {
  display: block;
  color: #94a1af;
  font-size: 1rem;
}

.css-1xx9hpn > ul > li > a:hover,.css-1xx9hpn > ul > li > a:focus {
  color: #fff;
}

.css-osz9vn {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  margin-bottom: 30px;
}

.css-osz9vn img,.css-osz9vn svg {
  width: 188px;
  height: auto;
}

.css-osz9vn svg g {
  fill: #00d07e;
}

.css-1l6xqrc {
  color: #fff;
  font-weight: 600;
  font-size: 1.25rem;
  max-width: 300px;
}

.css-1l6xqrc p {
  margin: 0;
}

.css-1l6xqrc *:last-child {
  margin-bottom: 0 !important;
}

.css-1hl05th {
  font-size: 1rem;
  color: #fff;
  font-weight: 600;
  margin-bottom: 20px;
}

.css-68xvsd {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  margin: -10px;
  padding-left: 0;
  list-style: none;
}

.css-68xvsd li {
  padding: 10px;
}

.css-68xvsd li a {
  color: rgba(255,255,255,0.6);
  font-size: 30px;
}

.css-68xvsd svg {
  fill: currentColor;
  height: 30px;
}

.css-119of8i {
  margin-left: auto;
}

.css-119of8i > ul {
  margin: 0 -12px;
}

.css-119of8i > ul ul {
  display: none;
}

.css-119of8i > ul > li {
  padding: 0 12px;
}

.css-119of8i > ul > li > a {
  color: #94a1af;
  font-size: 13px;
}

.css-119of8i > ul > li > a:hover,.css-119of8i > ul > li > a:focus {
  color: #fff;
}

.css-fqr2l1 {
  margin-right: auto;
  margin-bottom: 0;
  color: #94a1af;
  font-size: 13px;
}

@media (min-width: 1px) {
  .css-1enann6 {
    -webkit-flex:0 0 50.00000%;
    -ms-flex: 0 0 50.00000%;
    flex: 0 0 50.00000%;
    max-width: 50.00000%;
  }
}

@media (min-width: 540px) {
  .css-5pzm99 {
    max-width:540px;
  }
  .css-119of8i > ul > li > a {
    font-size:0.875rem;
  }
  .css-fqr2l1 {
    font-size:0.875rem;
  }
}

@media (min-width: 576px) {
  .css-5pzm99 {
    padding-right:10px;
    padding-left: 10px;
  }
}

@media (max-width: 767.98px) {
  .css-10iwlr9 {
    margin-top:50px;
  }
  .css-1hl05th {
    margin-top:50px;
  }
  .css-68xvsd {
    padding-top:50px;
  }
  .css-68xvsd h4 {
    display: none;
  }
  .css-119of8i {
    margin-bottom:10px;
  }
}

@media (min-width: 768px) {
  .css-5pzm99 {
    max-width:720px;
  }
  .css-17rfwei {
    padding:80px 0 50px;
  }
  .css-1ow5rm9 {
    display:-webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
  .css-j0bl2w {
    -webkit-flex:0 0 50.00000%;
    -ms-flex: 0 0 50.00000%;
    flex: 0 0 50.00000%;
    max-width: 50.00000%;
  }
  .css-1enann6 {
    -webkit-flex:0 0 25.00000%;
    -ms-flex: 0 0 25.00000%;
    flex: 0 0 25.00000%;
    max-width: 25.00000%;
  }
}

@media (min-width: 768px) and (max-width:991px) {
  .css-9hzi2i {
    padding-top:50px;
  }
}

@media (max-width: 991.98px) {
  .css-1hl05th {
    display:none;
  }
}

@media (min-width: 992px) {
  .css-5pzm99 {
    max-width:960px;
  }
  .css-17rfwei {
    padding:80px 0;
  }
  .css-tc2za9 {
    -webkit-flex:0 0 83.33333%;
    -ms-flex: 0 0 83.33333%;
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .css-9hzi2i {
    -webkit-flex:0 0 16.66667%;
    -ms-flex: 0 0 16.66667%;
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .css-j0bl2w {
    -webkit-flex:0 0 50.00000%;
    -ms-flex: 0 0 50.00000%;
    flex: 0 0 50.00000%;
    max-width: 50.00000%;
  }
  .css-1l6xqrc {
    max-width:350px;
  }
}

@media (min-width: 1200px) {
  .css-5pzm99 {
    max-width:1140px;
  }
}
</style>
