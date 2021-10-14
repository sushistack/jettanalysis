<template lang="pug">
.css-gi099c(:class='{reverse: isReverse, white: whiteBackground}' :style='{padding: pad}')
  figure.css-13j9vq9
    svg(xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='115px' height='18px' viewBox='0 0 115 18' version='1.1')
      g#Page-1(stroke='none' stroke-width='1' fill='none' fill-rule='evenodd')
        g#Asset-8(transform='translate(0.000000, 4.000000)' stroke='#00afff' stroke-width='8')
          path#Path(d='M0,0 C11.5,0 11.5,10 23,10 C34.5,10 34.5,0 46,0 C57.5,0 57.5,10 69,10 C80.5,10 80.5,0 92,0 C103.5,0 103.5,10 115,10')
</template>

<script>
export default {
  name: 'Separater',
  props: {
    deg: {
      type: Number,
      required: false,
      default: () => 0
    },
    padding: {
      type: Number,
      required: false,
      default: () => 7
    },
    whiteBackground: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  computed: {
    isReverse () {
      return this.deg === 180
    },
    pad () {
      return `${this.padding}rem 0`
    }
  }
}
</script>

<style lang="scss" scoped>
.css-gi099c {
  overflow: hidden;
  position: relative;
  background: linear-gradient(0deg, #eef0f7 50%, #FFFFFF 50%);
}
.css-gi099c.white {
  background: #fff;
}
.css-gi099c.reverse {
  background: linear-gradient(180deg, #eef0f7 50%, #FFFFFF 50%);
}
.css-13j9vq9 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 0;
  margin-top: 0;
}
</style>

