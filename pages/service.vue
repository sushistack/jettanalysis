<template lang="pug">
.jett-container
  navigation-bar
  .wrap
    section
      product-radio-box
  page-footer
</template>

<script>
import ProductRadioBox from '@/components/service/ProductRadioBox'
const FRONTEND_BASE_URL = `${process.env.BASE_URL}${process.env.FRONTEND_PORT}`

export default {
  name: 'Service',
  components: { ProductRadioBox },
  head ({$seoMeta}) {
    const title = 'JETT Analysis 소개'
    return {
      title: title,
      meta: $seoMeta(
        { 
          title: `${title} | ${process.env.SITE_NAME}`,
          url: `${FRONTEND_BASE_URL}/service`,
          description: 'JETT Analysis의 소개 페이지입니다.'
        },
        false
      ),
      link: [ {rel: 'canonical', href: `${FRONTEND_BASE_URL}${this.$route.path}`} ]
    }
  },
  methods: {
    counsel () {
      this.$router.push('/counsel')
    }
  }
}
</script>


<style lang="scss" scoped>

figure {
  margin: 0px 0px 1rem;
}

.css-z0gvzq {
  overflow: hidden;
  padding: 60px 0 65px;
}

.css-1isgq23 {
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
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

.css-1jwyo51 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 10px;
  padding-left: 10px;
}

.css-14cif07 {
  line-height: 1.3;
  font-weight: 800;
  font-size: 32px;
}

.css-fuu65d {
  font-size: 17px;
}

.css-fuu65d *:last-child {
  margin-bottom: 0 !important;
}

.css-140242p {
  padding-bottom: 0;
  padding-top: 57.6px;
}

.css-1411txx {
  position: relative;
  background-color: #00afff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  padding: 50px 20px 25px;
}

.css-1411txx::before,.css-1411txx::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
}

.css-1411txx::before {
  border-width: 100px 100px 0 0;
  border-color: #000 transparent transparent transparent;
}

.css-1411txx::after {
  border-width: 0 0 100px 100px;
  border-color: transparent transparent #fff transparent;
}

.css-qhuqqz {
  color: #fff;
  font-size: 32px;
}

.css-y4zzde {
  color: #fff;
  max-width: 630px;
}

.css-y4zzde *:last-child {
  margin-bottom: 0 !important;
}

.css-1mswzqz {
  width: 100%;
  margin: 25px 0 0;
  max-width: 580px;
}

.css-79elbk {
  position: relative;
}

.css-1y4vu0u {
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
  z-index: 1;
}

.css-xvb5ry {
  text-align: center;
  color: #061845;
  margin-bottom: 0;
  font-size: 32px;
  padding-bottom: 43.2px;
}

.css-tc2za9 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 10px;
  padding-left: 10px;
}

.css-36dv62 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 10px;
  padding-left: 10px;
  position: relative;
  z-index: 1;
}

.css-rs4bqn {
  position: relative;
  max-width: 350px;
  padding: 0 !important;
  margin: 0 !important;
}

.css-11ywslu {
  margin-bottom: 1.5rem;
  max-height: 350px;
}

.css-11ywslu img {
  height: 100%;
  width: 100%;
}

.css-ateso6 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 10px;
  padding-left: 10px;
  position: relative;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.css-qq57cc {
  margin: 0 25px 15px 0;
  width: 100%;
  height: 150px;
  text-align: center;
}

.css-qq57cc img {
  width: 150px;
  border-radius: 100%;
  margin: 0;
}

.css-xh93ug .sc-twitter-follow {
    margin: 2rem 0;
}

.css-xh93ug *:last-child {
    margin-bottom: 0 !important;
}

.css-19silmo {
  margin-bottom: 0;
  border-radius: 20px;
  overflow: hidden;
  max-width: 400px;
}

.css-1a2v9hb {
  max-width: 100%;
  height: auto;
}

.css-vcm286 {
  position: absolute;
  right: -180px;
  bottom: -420px;
  margin-bottom: 0;
}

.css-vcm286 img {
  width: 100%;
  height: 100%;
}

.css-ovzwb1 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 10px;
  padding-left: 10px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.caller-btn {
  font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 1.05rem 1.2rem;
  font-size: 1.125rem;
  line-height: 1.4;
  cursor: pointer;
  border-radius: 6px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
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
  margin: 0;
  cursor: pointer;
  text-transform: none;
  font-weight: 600;
  min-height: 3.7875rem;
  font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 1.05rem 1.2rem;
  font-size: 1.125rem;
  line-height: 1.4;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
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
  outline: none;
  border-radius: 6px;
  top: 0;
  right: 0;
  min-width: 170px;
  color: #fff;
  background-color: #000;
  border-color: #000;
  width: 100%;
}

.caller-btn:disabled[disabled] {
  cursor: not-allowed;
}

.caller-btn:disabled[disabled] {
  cursor: not-allowed;
}

.css-1bqdi62 {
  overflow: hidden;
  position: relative;
  padding-top: 57.6px;
  padding-bottom: 57.6px;
}

@media (min-width: 576px) {
  .css-1isgq23 {
    padding-right:10px;
    padding-left: 10px;
  }
  .css-1y4vu0u {
    padding-right:10px;
    padding-left: 10px;
  }
}

@media (min-width: 540px) {
  .css-1isgq23 {
    max-width:540px;
  }
  .css-1y4vu0u {
    max-width:540px;
  }
}

@media (max-width: 767.98px) {
  .caller-btn {
    width:100%;
    margin-top: 10px;
  }
}

@media (min-width: 768px) {
  .css-z0gvzq {
    padding:80px 0 100px;
  }
  .css-1isgq23 {
    max-width:720px;
  }
  .css-14cif07 {
    margin-bottom:50px;
    font-size: 48px;
  }
  .css-fuu65d {
    font-size:19px;
  }
  .css-140242p {
    padding-top:86.4px;
  }
  .css-1411txx {
    padding:60px 50px 70px;
  }
  .css-qhuqqz {
    font-size:38px;
  }
  .css-1mswzqz {
    margin:45px 0 0;
  }
  .css-1y4vu0u {
    max-width:720px;
  }
  .css-xvb5ry {
    font-size:38px;
  }
  .css-xvb5ry {
    padding-bottom:57.6px;
  }
  .css-qq57cc {
    margin:0 auto 15px auto;
    width: 210px;
    height: 210px;
    img {
      width:210px;
    }
  }
  .css-1bqdi62 {
    padding-top:86.4px;
    padding-bottom:86.4px;
  }
  .css-ovzwb1 {
    -webkit-flex:0 0 50.00000%;
    -ms-flex: 0 0 50.00000%;
    flex: 0 0 50.00000%;
    max-width: 50.00000%;
  }
}

@media (max-width: 991.98px) {
  .css-1jwyo51 {
    text-align:center;
  }
  .css-1411txx::before,.css-1411txx::after {
    display:none;
  }
  .css-1y4vu0u {
    position:relative;
  }
  .css-19silmo {
    display:none;
  }
  .css-vcm286 {
    display:none;
  }
  .css-36dv62 {
    display:none;
  }
}

@media (min-width: 768px) and (max-width:991px) {
  .css-1bqdi62 {
    margin:0 auto;
    max-width: 620px;
  }
}

@media (min-width: 992px) {
  .css-z0gvzq {
    background-image:linear-gradient(180deg,#fff 10%,#eef0f7);
    background-repeat: repeat-x;
    padding: 60px 0 215px;
  }
  .css-1isgq23 {
    max-width:960px;
  }
  .css-1jwyo51 {
    -webkit-flex:0 0 50.00000%;
    -ms-flex: 0 0 50.00000%;
    flex: 0 0 50.00000%;
    max-width: 50.00000%;
  }
  .css-1jwyo51 {
    margin:20px 0 30px;
  }
  .css-14cif07 {
    max-width:450px;
    margin-bottom: 30px;
  }
  .css-fuu65d {
    max-width:450px;
  }
  .css-1y4vu0u {
    max-width:960px;
  }
  .css-tc2za9 {
    -webkit-flex:0 0 83.33333%;
    -ms-flex: 0 0 83.33333%;
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .css-36dv62 {
    -webkit-flex:0 0 41.66667%;
    -ms-flex: 0 0 41.66667%;
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .css-ateso6 {
    -webkit-flex:0 0 58.33333%;
    -ms-flex: 0 0 58.33333%;
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .css-ateso6 {
    -webkit-box-pack:end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .css-qq57cc {
    display:none;
  }
  .css-xh93ug {
    max-width:565px;
  }
}

@media (min-width: 1200px) {
  .css-1isgq23 {
    max-width:1140px;
  }
  .css-1y4vu0u {
    max-width:1140px;
  }
  .css-rs4bqn {
    margin-left:70px !important;
  }
  .css-19silmo {
    margin-right:50px;
  }
}
</style>
