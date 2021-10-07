<template lang="pug">
.jett-container
  navigation-bar
  v-container.container(style='min-height:650px')
    .profile-container
      .profile-inner-container
        .user-details
          h2.profile-title 내 프로필
          table
            colgroup
              col(style='width:100px')
            tbody
              tr
                th(scope='row')
                  label 이름
                td {{ user ? user.displayName : 'UNKOWN' }}
              tr
                th(scope='row')
                  label 이메일
                td {{ user ? user.email : 'UNKOWN' }}
              tr
                th(scope='row')
                  label 휴대전화
                td
                  span(v-if='user && user.phoneNumber') {{ user.phoneNumber }}
                  input.phone-number-field(v-else 
                    ref='phoneNumberField'
                    :value='phoneNumber'
                    @input='writePhoneNumber'
                    placeholder='010-1234-5678'
                  )
                  v-switch.sms-switch(v-model='receiveSms' label='문자 수신 여부' color='#00afff' value='문자 수신 여부' hide-details)
          .save-profile
            v-btn(text color='red') 프로필 저장
        .details
          .seo-report
            h2.profile-title SEO 보고서
            .description 내가 구매한 서비스의 리포트를 확인하세요.
            button.detail-btn(type='button' @click.stop='go("/report")') 바로가기
          hr.separater
          .payment-history
            h2.profile-title 결제 내역
            .description 내가 결제한 내역을 확인하세요.
            button.detail-btn(type='button' @click.stop='go("/payment-history")') 바로가기
  page-footer
</template>

<script>
import { mapGetters } from 'vuex'
const NUXT_APP_BASE_URL = process.env.NUXT_APP_BASE_URL || 'https://jettanalysis.com'
const NUXT_APP_FRONTEND_PORT = process.env.NUXT_APP_FRONTEND_PORT || ''
const FRONTEND_BASE_URL = `${NUXT_APP_BASE_URL}${NUXT_APP_FRONTEND_PORT}`

export default {
  name: 'Profile',
  components: {},
  data: () => ({ receiveSms: false, phoneNumber: '' }),
  head ({$seoMeta}) {
    const title = '유저 프로필'
    return {
      title: title,
      meta: $seoMeta(
        { 
          title: `${title} | ${process.env.NUXT_APP_SITE_NAME || 'JETT Analysis'}`,
          url: `${FRONTEND_BASE_URL}${this.$route.path}`,
          description: '유저 프로필 페이지입니다.'
        },
        false
      ).concat([ 
        { hid: 'robots', name: 'robots', content: 'noindex, nofollow' },
        { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: `${title} | JETT Analysis` } 
      ]),
      link: [ {rel: 'canonical', href: `${FRONTEND_BASE_URL}${this.$route.path}`} ]
    }
  },
  created () {
    if (!this.user) this.$router.push('/')
  },
  methods: {
    go (path) {
      this.$router.push(path)
    },
    writePhoneNumber (e) {
      const number = e.target.value
      let rawNumber = number.replace(/-/ig, '')

      if (!/^\d+&/.test(rawNumber)) {
        const numberOnly = rawNumber.match(/\d/g)
        if (numberOnly) {
          rawNumber = numberOnly.join('')
        }
      }

      if (rawNumber.length > 11) {
        rawNumber = rawNumber.substring(0, 11)
      }

      if (rawNumber.length <= 3) {
          this.phoneNumber = rawNumber
        } else if (rawNumber.length <= 7) {
          const regex = new RegExp(`(\\d{3})(\\d{${rawNumber.length - 3}})`)
          this.phoneNumber = rawNumber.replace(regex, '$1-$2')
        } else {
          const regex = new RegExp(`(\\d{3})(\\d{4})(\\d{${rawNumber.length - 7}})`)
          this.phoneNumber = rawNumber.replace(regex, '$1-$2-$3')
        }
        this.$refs.phoneNumberField.value = this.phoneNumber
    }
  },
  computed: {
    ...mapGetters({ user: 'user/user' }),
    providerType () {
      if (!this.user || !this.user.uid) return 'UNKNOWN'
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.profile-container {
  width: 100%;
  margin: 2rem 0 5rem;
  display: flex;
  justify-content: center;
  .profile-inner-container {
    display: flex;
    flex-direction: column;
  }
}
.user-details {
  table {
    background: #e9f8ff;
    border: 1px solid transparent;
    border-radius: 20px;
    padding: 2rem 2.5rem;
    max-width: 500px;
    margin: 2rem 0;
  }
  
  tr {
    line-height: 50px;
  }
  th {
    text-align: left;
    vertical-align: top;
  }
}

.details {
  margin-top: 1.5rem;
  h2 {
    margin-top: 0;
  }
}
.sms-switch {
  margin-top: 0;
}

.description {
  font-size: 14px;
  color: #777;
}
.separater {
  margin: 3rem 0;
}
.detail-btn {
  width: 100%;
  background: #00afff;
  color: #fff;
  padding: 8px 0;
  border: 1px solid transparent;
  border-radius: 21px;
  margin-top: 2rem;
}

.save-profile {
  display: flex;
  justify-content: center;
}

.phone-number-field {
  margin-top: 10px;
  background: #fff;
  border: 1px solid;
  border-radius: 5px;
  height: 35px;
  padding-left: 10px;
}

.container {
    width: 100%;
    padding: 12px;
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 768px) {
  .profile-container {
    justify-content: space-evenly;
    .profile-inner-container {
      width: 100%;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
  .user-details .profile-title {
    margin-top: 0;
  }
  .details {
    margin-top: 0;
    min-width: 300px;
  }
}

@media (min-width: 960px) {
  .container {
    max-width: 900px;
  }
}

@media (min-width: 1264px) {
  .container {
    max-width: 1185px;
  }
}
</style>