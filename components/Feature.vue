<template lang="pug">
.css-xyedk8
  .css-1isgq23
    .css-1etpwf(@click='go')
      .css-iu3tgu
        p.css-k2w90m {{ type }}
        h3.css-1tlyyhw {{ title }}
        .css-8yi3qm
          p {{ desc }}
        figure.css-1n3a0vm
          picture
            source(
              srcset='https://jettanalysis.com/images/site-diagnosis.png 640w, https://jettanalysis.com/images/site-diagnosis.png 300w, https://jettanalysis.com/images/site-diagnosis.png 1280w, √ 768w, https://jettanalysis.com/images/site-diagnosis.png 1536w, https://jettanalysis.com/images/site-diagnosis.png 480w, https://jettanalysis.com/images/site-diagnosis.png 960w, https://jettanalysis.com/images/site-diagnosis.png 1440w, https://jettanalysis.com/images/site-diagnosis.png 1600w'
              sizes='(max-width: 640px) 100vw, 640px'
              type='image/webp'
            )
            img.css-1a2v9hb(
              src='https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/12/seo-in-2021-post-banner.png'
              srcset='https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/12/seo-in-2021-post-banner-640x335.png 640w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/12/seo-in-2021-post-banner-300x157.png 300w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/12/seo-in-2021-post-banner-1280x670.png 1280w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/12/seo-in-2021-post-banner-768x402.png 768w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/12/seo-in-2021-post-banner-1536x804.png 1536w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/12/seo-in-2021-post-banner-480x251.png 480w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/12/seo-in-2021-post-banner-960x502.png 960w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/12/seo-in-2021-post-banner-1440x753.png 1440w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/12/seo-in-2021-post-banner.png 1600w'
              sizes='(max-width: 640px) 100vw, 640px'
              alt='seo-in-2021-post-banner'
              loading='lazy'
            )
</template>

<script>
export default {
  name: 'Feature',
  props: ['to', 'type', 'title', 'desc', 'imageUrl'],
  methods: {
    go () {
      this.to ? this.$router.push(this.to) : this.$emit('onFeatureClick')
    }
  }
}
</script>


<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #000;
}
.css-xyedk8 {
  position: relative;
  overflow: hidden;
  padding-bottom: 57.6px;
  padding-top: 43.2px;
}

.css-xyedk8::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f7f9ff;
  height: 345px;
}

.css-1isgq23 {
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
}

.css-1etpwf {
  max-width: 750px;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
}

.css-iu3tgu {
  position: relative;
  z-index: 2;
  text-align: center;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  padding: 35px 20px;
}

.css-k2w90m {
  color: #00afff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 17px;
  margin-bottom: 15px;
}

.css-1tlyyhw {
  font-size: 29px;
  margin-bottom: 20px;
}

.css-1tlyyhw a {
  color: black;
}

.css-8yi3qm {
  margin: 0 auto;
  max-width: 430px;
  font-size: 1rem;
}

.css-1n3a0vm {
  border-radius: 20px;
  margin: 40px 0 0;
  overflow: hidden;
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
  .css-xyedk8 {
    padding-bottom:86.4px;
    padding-top:57.6px;
  }
  .css-1isgq23 {
    max-width:720px;
  }
  .css-iu3tgu {
    padding:60px 55px;
  }
  .css-k2w90m {
    margin-bottom:20px;
  }
  .css-1tlyyhw {
    font-size:35px;
    margin-bottom: 25px;
  }
  .css-8yi3qm {
    font-size:1.125rem;
  }
  .css-1n3a0vm {
    margin:45px 0 0;
  }
}

@media (min-width: 992px) {
  .css-1isgq23 {
    max-width:960px;
  }
}

@media (min-width: 1200px) {
  .css-1isgq23 {
    max-width:1140px;
  }
}
</style>
