<template lang="pug">
.preview-container
  .switch
    v-switch.device-switch(v-model='isMobile' label='모바일' color='#00afff' hide-details)
  .preview-box(v-if='!isMobile')
    .desktop
      span.desktop-snippet-url {{ url }}
    a.desktop-title {{ ellipsis('TITLE', title.self) }}
    .meta-desciption
      span.desktop-snippet-date {{ date }} — 
      span.desktop-meta-description-text {{ ellipsis('DESC', description.self) }}
  .mobile-preview-box(v-else)
    .mobile
      img.favicon(
        width='16'
        height='16'
        :src='faviconUrl'
        alt='favicon'
      )
      span.desktop-snippet-url {{ url }}
    a.mobile-title {{ ellipsis('TITLE', title.self) }}
    .meta-desciption
      span.desktop-snippet-date {{ date }} — 
      span.desktop-meta-description-text {{ ellipsis('DESC', description.self) }}
</template>

<script>
import { getTextLimitedByPixel } from '@/utils/pixel-calculator'

export default {
  name: 'GooglePreview',
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: Object,
      required: true
    },
    date: {
      type: String,
      default: '2021. 01. 01.'
    },
    description: {
      type: Object,
      required: true
    },
    favicon: {
      type: String,
      required: true
    }
  },
  data: () => ({
    isMobile: false
  }),
  methods: {
    ellipsis (type, text) {
      if (!text) return ''
      return getTextLimitedByPixel(type, text.split(' '), this.isMobile)
    }
  },
  computed: {
    faviconUrl () {
      if (this.favicon) return this.favicon
      return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABs0lEQVR4AWL4//8/RRjO8Iucx+noO0MWUDo16FYABMGP6ZfUcRnWtm27jVPbtm3bttuH2t3eFPcY9pLz7NxiLjCyVd87pKnHyqXyxtCs8APd0rnyxiu4qSeA3QEDrAwBDrT1s1Rc/OrjLZwqVmOSu6+Lamcpp2KKMA9PH1BYXMe1mUP5qotvXTywsOEEYHXxrY+3cqk6TMkYpNr2FeoY3KIr0RPtn9wQ2unlA+GMkRw6+9TFw4YTwDUzx/JVvARj9KaedXRO8P5B1Du2S32smzqUrcKGEyA+uAgQjKX7zf0boWHGfn71jIKj2689gxp7OAGShNcBUmLMPVjZuiKcA2vuWHHDCQxMCz629kXAIU4ApY15QwggAFbfOP9DhgBJ+nWVJ1AZAfICAj1pAlY6hCADZnveQf7bQIwzVONGJonhLIlS9gr5mFg44Xd+4S3XHoGNPdJl1INIwKyEgHckEhgTe1bGiFY9GSFBYUwLh1IkiJUbY407E7syBSFxKTszEoiE/YdrgCEayDmtaJwCI9uu8TKMuZSVfSa4BpGgzvomBR/INhLGzrqDotp01ZR8pn/1L0JN9d9XNyx0AAAAAElFTkSuQmCC'
    }
  }
}
</script>


<style lang="scss" scoped>
.preview-container {
  text-align: left;
  padding: 20px;
  border: 2px solid #eee;
  border-radius: 5px;
  margin-top: 16px;
  overflow: auto;
  .preview-box {
    width: 570px;
    .desktop-snippet-url {
      color: #5f6368;
      display: inline;
      font-size: 14px;
      font-weight: 400;
      line-height: 21.98px;
      list-style-image: none;
      list-style-position: outside;
      list-style-type: none;
      text-align: left;
      overflow-wrap: break-word;
      zoom: 1;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .desktop {
      cursor: pointer;
      font-family: arial, sans-serif;
      font-size: 13px;
      font-weight: 400;
      line-height: 20.41px;
      margin-bottom: 4px;
      color: #3C4043;
    }
  }
  
  .desktop-title {
    margin-bottom: 3px;
    font-family: arial,sans-serif;
    font-size: 20px;
  }
  a {
    color: #1a0dab;
    cursor: pointer;
    display: inline-block;
    font-family: Roboto,HelveticaNeue,Arial,sans-serif;
    font-size: 20px;
    font-weight: 400;
    height: 26px;
    line-height: 26px;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    text-align: left;
    text-decoration: none;
    width: auto;
    zoom: 1;
  }

  span {
    color: #5f6368;
    display: inline;
    font-size: 14px;
    font-weight: 400;
    line-height: 21.98px;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    text-align: left;
    overflow-wrap: break-word;
    zoom: 1;
  }
  
  .desktop-meta-description-text {
    font-family: arial,sans-serif;
  }
  .mobile-preview-box {
    font-family: Roboto, HelveticaNeue, Arial, sans-serif;
    box-shadow: rgb(32 33 36 / 28%) 0px 1px 6px;
    border-radius: 8px;
    border-bottom: 1px hidden rgb(255, 255, 255);
    padding: 12px 16px;
    width: 375px;
    margin: 0px auto;
    .mobile {
      display: flex;
      .favicon {
        margin-right: 6px;
        margin-top: 3px;
      }
      .desktop-snippet-url {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-bottom: 5px;
      }
    }
    .mobile-title {
      white-space: normal;
    }
  }
  .device-switch {
    margin-top: 0;
    padding-top: 0;
    margin-bottom: 16px;
    padding-bottom: 4px;
  }
}


@media (max-width: 990px) {
  .preview-box {
    position: relative;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 2px;
    border-bottom: 1px hidden #fff;
    margin: 0;
    padding-top: 11px;
  }

  .desktop-title {
    line-height: 20px;
    word-wrap: break-word;
    font-size: 16px;
    margin-right: 16px;
  }
  .meta-desciption {
    margin: 0 16px 11px 0;
  }
}
</style>
