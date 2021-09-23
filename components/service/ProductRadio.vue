<template lang="pug">
.product-radio(:class='{checked: checked}' @click.stop='$emit("onSelected", seq)')
  p.product-title 
    span.small-icon(v-show='!isNotMobile')
      svg(v-if='icon === "BACKLINK"' xmlns='http://www.w3.org/2000/svg' fill="currentColor" enable-background='new 0 0 24 24' width='24' height='24' viewBox='0 0 24 24')
        rect(fill='none' height='24' width='24')
        path(d='M22,11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3H22z M7,9H4V5h3V9z M17,15h3v4h-3V15z M17,5h3v4h-3V5z')
      svg(v-else-if='icon === "SETTING"' xmlns='http://www.w3.org/2000/svg' fill="currentColor" enable-background='new 0 0 24 24' width='24' height='24' viewBox='0 0 24 24')
        rect(fill='none' height='24' width='24')
        path(d='M10,13c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S9.45,13,10,13 M10,11c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3 S11.66,11,10,11L10,11z M18.5,9l1.09-2.41L22,5.5l-2.41-1.09L18.5,2l-1.09,2.41L15,5.5l2.41,1.09L18.5,9z M21.28,12.72L20.5,11 l-0.78,1.72L18,13.5l1.72,0.78L20.5,16l0.78-1.72L23,13.5L21.28,12.72z M16.25,14c0-0.12,0-0.25-0.01-0.37l1.94-1.47l-2.5-4.33 l-2.24,0.94c-0.2-0.13-0.42-0.26-0.64-0.37L12.5,6h-5L7.2,8.41C6.98,8.52,6.77,8.65,6.56,8.78L4.32,7.83l-2.5,4.33l1.94,1.47 C3.75,13.75,3.75,13.88,3.75,14s0,0.25,0.01,0.37l-1.94,1.47l2.5,4.33l2.24-0.94c0.2,0.13,0.42,0.26,0.64,0.37L7.5,22h5l0.3-2.41 c0.22-0.11,0.43-0.23,0.64-0.37l2.24,0.94l2.5-4.33l-1.94-1.47C16.25,14.25,16.25,14.12,16.25,14z M14.83,17.64l-1.73-0.73 c-0.56,0.6-1.3,1.04-2.13,1.23L10.73,20H9.27l-0.23-1.86c-0.83-0.19-1.57-0.63-2.13-1.23l-1.73,0.73l-0.73-1.27l1.49-1.13 c-0.12-0.39-0.18-0.8-0.18-1.23c0-0.43,0.06-0.84,0.18-1.23l-1.49-1.13l0.73-1.27l1.73,0.73c0.56-0.6,1.3-1.04,2.13-1.23L9.27,8 h1.47l0.23,1.86c0.83,0.19,1.57,0.63,2.13,1.23l1.73-0.73l0.73,1.27l-1.49,1.13c0.12,0.39,0.18,0.8,0.18,1.23 c0,0.43-0.06,0.84-0.18,1.23l1.49,1.13L14.83,17.64z')
    | {{ title }}
    span.arrow-down(@click.stop='toggleMore' :class='{opened: isMore}')
      svg(xmlns='http://www.w3.org/2000/svg' fill="currentColor" width='24' height='24' viewBox='0 0 24 24')
        path(d='M24 24H0V0h24v24z' fill='none' opacity='.87')
        path(d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z')
  .icon(v-show='isNotMobile')
    svg(v-if='icon === "BACKLINK"' xmlns='http://www.w3.org/2000/svg' fill="currentColor" enable-background='new 0 0 24 24' width='96' height='96' viewBox='0 0 24 24')
      rect(fill='none' height='24' width='24')
      path(d='M22,11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3H22z M7,9H4V5h3V9z M17,15h3v4h-3V15z M17,5h3v4h-3V5z')
    svg(v-else-if='icon === "SETTING"' xmlns='http://www.w3.org/2000/svg' fill="currentColor" enable-background='new 0 0 24 24' width='96' height='96' viewBox='0 0 24 24')
      rect(fill='none' height='24' width='24')
      path(d='M10,13c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S9.45,13,10,13 M10,11c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3 S11.66,11,10,11L10,11z M18.5,9l1.09-2.41L22,5.5l-2.41-1.09L18.5,2l-1.09,2.41L15,5.5l2.41,1.09L18.5,9z M21.28,12.72L20.5,11 l-0.78,1.72L18,13.5l1.72,0.78L20.5,16l0.78-1.72L23,13.5L21.28,12.72z M16.25,14c0-0.12,0-0.25-0.01-0.37l1.94-1.47l-2.5-4.33 l-2.24,0.94c-0.2-0.13-0.42-0.26-0.64-0.37L12.5,6h-5L7.2,8.41C6.98,8.52,6.77,8.65,6.56,8.78L4.32,7.83l-2.5,4.33l1.94,1.47 C3.75,13.75,3.75,13.88,3.75,14s0,0.25,0.01,0.37l-1.94,1.47l2.5,4.33l2.24-0.94c0.2,0.13,0.42,0.26,0.64,0.37L7.5,22h5l0.3-2.41 c0.22-0.11,0.43-0.23,0.64-0.37l2.24,0.94l2.5-4.33l-1.94-1.47C16.25,14.25,16.25,14.12,16.25,14z M14.83,17.64l-1.73-0.73 c-0.56,0.6-1.3,1.04-2.13,1.23L10.73,20H9.27l-0.23-1.86c-0.83-0.19-1.57-0.63-2.13-1.23l-1.73,0.73l-0.73-1.27l1.49-1.13 c-0.12-0.39-0.18-0.8-0.18-1.23c0-0.43,0.06-0.84,0.18-1.23l-1.49-1.13l0.73-1.27l1.73,0.73c0.56-0.6,1.3-1.04,2.13-1.23L9.27,8 h1.47l0.23,1.86c0.83,0.19,1.57,0.63,2.13,1.23l1.73-0.73l0.73,1.27l-1.49,1.13c0.12,0.39,0.18,0.8,0.18,1.23 c0,0.43-0.06,0.84-0.18,1.23l1.49,1.13L14.83,17.64z')
  v-expand-transition
    ul.desc-list(v-show='isNotMobile || isMore')
      li.dest-list-item(v-for='detail in details') {{ detail }}
</template>

<script>
export default {
  name: 'ProductRadio',
  props: {
    seq: {
      type: Number,
      required: false,
      default: () => -1
    },
    title: {
      type: String,
      required: false,
      default: () => ''
    },
    icon: {
      type: String,
      required: false,
      default: () => ''
    },
    details: {
      type: Array,
      required: false,
      default: () => []
    },
    checked: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  data: () => ({ isMore: false }),
  methods: {
    reset () {
      this.isMore = false
    },
    toggleMore () {
      this.isMore = !this.isMore
      if (this.isMore) {
        this.$emit('onOpened', this.seq)
      }
    }
  },
  computed: {
    isNotMobile () {
      return this.$vuetify.breakpoint.width > 575
    }
  }
}
</script>

<style lang="scss" scoped>

.product-radio {
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 2rem .75rem;
  border: 1px solid transparent;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 3px 12px -1px rgb(7 10 25 / 20%), 0 22px 27px -20px rgb(7 10 25 / 20%)
}

.product-radio.checked {
  background: #00afff;
  color: #fff;
}

.product-title {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 0;
  .small-icon > svg {
    margin-bottom: -5px;
    margin-right: 2px;
  }
  .arrow-down {
    cursor: pointer;
    > svg {
      margin-bottom: -5px;
      margin-left: 2px;
    }
  }
  .arrow-down.opened svg {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
  }
}

.desc-list {
  list-style: none;
  padding-left: 0;
  margin-top: 1rem;
}

@media (min-width: 576px) {
  .icon, .desc-list {
    display: block;
  }

  .icon {
    margin-top: 1rem;
  }

  .arrow-down {
    display: none;
  }

  .product-radio {
    width: 250px;
    height: 365px;
  }
}

@media (min-width: 768px) {
  .product-title {
    font-size: 24px;
  }
  .product-radio {
    width: 270px;
  }
}

@media (min-width: 992px) {
  
}

</style>