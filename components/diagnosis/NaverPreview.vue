<template lang="pug">
.preview-container
  .switch
    v-switch.device-switch(v-model='isMobile' label='모바일' color='#00afff' value='모바일' hide-details)
  .preview-box(v-if='!isMobile')
    .box-wrap
      .menu
        v-icon(small color='grey lighten-2') mdi-dots-vertical
      .search-head
        .source
          .source-box
            img(
              width='15'
              height='15'
              :src='faviconUrl'
              alt='favicon'
            )
            span.desktop-snippet-url {{ url }}
        .desktop-title {{ title.self }}
      .search-body
        .meta-description-wrap
          span.meta-description {{ description.self }}
  .mobile.preview-box(v-else)
    .box-wrap
      .menu
        v-icon(small color='grey lighten-2') mdi-dots-vertical
      .search-head
        .source
          .source-box
            img(
              width='15'
              height='15'
              :src='faviconUrl'
              alt='favicon'
            )
            span.desktop-snippet-url {{ url }}
        .desktop-title {{ title.self }}
      .search-body
        .meta-description-wrap
          span.meta-description {{ description.self }}
</template>

<script>
export default {
  name: 'NaverPreview',
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
  computed: {
    faviconUrl () {
      if (this.favicon) return this.favicon
      return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA/1JREFUSEvFl11sk1UYx//n/erHamm7rh1dOwuFMXGCEwcoLhmJt4IEE+PdSLw2MSSaqJdqooGYeGlM2J0xQXF4a9wSAhEmLlM+tkGlrl23dl1bStev9+OYc+BtWhijWQh9kjdt8p7n/M7znP/znPMStGCUUuHc5I3X9/cH3jaovm96djGQyq4FmKvf05Ec7O9JCkS8emU2+cuxkd2XCCHGk6YlGw2YmLhj/a+Q+UDVtZODfd2+zi02xJbyuLWQbXLb2etBeKsLq3fLmJ5fTsuidPp5p/fbw4e3VR43/2PBY+f/Oq5ptW8Mwwhtec6CAy8GQSHgwkwclBIQct+VUgpCKIb3hkBg4PL1BO7eq0IQhLgkKR+OHnnlp/Xgj4AppWTs1z8/V2vqJ8yBCASDu4II93hwO57FrXhztOakO0Me7Ah5EFvMYnouAWpQ/kpW5C9H33r1M8JW12BNYAY9Mz71g6Zp73InWYEsy3hz/3ZIkoDJqzGUq9q62bNZJIzsC0PTDPx25V+oqgpVrfGxkiT9eOLo0HuN8CbwmfNTX5iRKhYLRFGC12XH0O4ACmtVXJyJb6iZQ3tDcHZYMHUjiUy+BF3XUKtW65GfODL0qTlBHcz2tFarnGUvTCj739fbiUjQjWgih/mF1Q3B641thCuK9R1zzzmYqTeaS80zIbH0SrJcBxwY6IHHacNsLMPTLIkCf0Tx/pp1nULTDf6wdPeHvcgWyrh8bbE+h/Yg7UxwEbe/j6mde4+NT31UU9WvmJBsVjs6XXYOczut/HczxuC5QoUvYjVfQrlS4oJTZPnj0aNDXxPWHL4/98eSs0PxRYI+BP0uLqSHrVCsolRVoWoGdMPgkTJjkYuCAFkSYLfIcDosj/gywSVSeUQTaRTWaun3jx3cSn6euP5Gb5f9AhORw+HgTkxIK7kSShUVL+3wgUEv/r2xsEzaoT0hDmdbI0siutx2LjhmxWKRi25hpTRMEku5U6pWPQkiIpWrIJEu1EvGYVcw/HIvlleLmJ5bbinjg7u60d3p4OOZHzO290GfE363FaA6ZMlymiwkMxPRRGYkvlICIWLT5GylrETiqQKuRdMtgQciPoT8TvxzO82DaDRKdYS67IgEvZNk/PeZuVR2rc9itbE21zTQ5bDitT1BxJJ53IxlWgK/EPYiHHDh5p0M7+uNZhgGqpUyO1jmyXdnL90D4LDa7PX+aw5mqj44EGyphk0fs5ZZzbPab46YolIu8e1uH/ipp3qblx+RT0x128TVjnKSJOVU+xrIplqmztrmg5YpEIjiJlpm2w4JBm7bscijbsdFwOwubbn6MHjbLnsm/Jlfbxsb+jO/0DfC2/IJ89Bx9tQ/2v4HwYFI5VApi5UAAAAASUVORK5CYII='
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
}
.preview-box {
  width: 570px;
  border: 1px solid #e8ebee;
  border-radius: 6px;
  -webkit-box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
  background-color: #fff;
  padding-top: 11px;
  .box-wrap {
    position: relative;
    padding: 11px 20px 13px;
    .menu {
      float: right;
      position: relative;
      margin-top: -20px;
      margin-right: -15px;
      cursor: pointer;
    }
    .search-head {
      overflow: hidden;
      .source {
        font-size: 0.9rem;
        line-height: 1.5rem;
        .source-box {
          display: inline-block;
          max-width: 100%;
          vertical-align: top;
          .desktop-snippet-url {
            line-height: 1rem;
            color: #666;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            max-width: 300px;
            display: inline-block;
            margin-left: 8px;
            cursor: pointer;
          }
        }
      }
      .desktop-title {
        display: inline-block;
        max-width: 100%;
        padding-top: 2px;
        font-size: 1.2rem;
        line-height: 1.8rem;
        letter-spacing: -.25px;
        color: #0c43b7;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        cursor: pointer;
      }
    }
    .search-body {
      margin-top: 7px;
      border-top: 1px solid #f1f4f6;
      padding-top: 8px;
      clear: both;
      font-size: 0.8rem;
      line-height: 1.6rem;
      letter-spacing: -.25px;
      .meta-description {
        line-height: 1rem;
        max-height: 3rem;
        -webkit-line-clamp: 3;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        word-break: break-all;
      }
    }
  }
}

.mobile.preview-box {
  font-family: Roboto, HelveticaNeue, Arial, sans-serif;
  box-shadow: rgb(32 33 36 / 28%) 0px 1px 6px;
  border-radius: 8px;
  border-bottom: 1px hidden white;
  padding: 12px 16px;
  width: 375px;
  margin: 0px auto;
  .box-wrap .search-head .source .source-box .desktop-snippet-url {
    max-width: 275px;
  }
  .box-wrap .menu {
    margin-right: -25px;
  }
}

.device-switch {
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 16px;
  padding-bottom: 4px;
}


@media (max-width: 990px) {
  .preview-box {
    position: relative;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 2px;
    border-bottom: 1px hidden #fff;
    margin: 0;
  }
}
</style>
