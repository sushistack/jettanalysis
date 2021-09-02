<template lang="pug">
nav.table-of-content
  .toc-title
    h2 목차
    .more
      a.more-btn(@click='more = !more') {{ more ? '열기' : '접기' }}
  v-expand-transition
    ul(v-show='!more')
      li(
        :class='{toc2: link.depth === 2, toc3: link.depth === 3}'
        v-for='link of tableOfContent' :key='link.id'
      )
        nuxt-link(
          :to='`#${link.id}`'
          v-scroll-to='{el: `#${link.id}`}'
        ) {{ link.text }}
</template>

<script>
export default {
  name: 'TableOfContent',
  props: { toc: { type: Array, required: true } },
  data: () => ({ more: true }),
  computed: {
    tableOfContent () {
      if (!this.toc) return []
      return this.toc.filter(t => t.depth > 1 && t.depth < 4)
    }
  }
}
</script>

<style lang="scss" scoped>
.table-of-content {
  margin-bottom: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
  ul {
    list-style: none;
    li {
      position: relative;
      a {
        color: black;
      }
      a:hover {
        color: #0077ff;
      }
    }
    li:before {
      content: " ";
      position: absolute;
      top: 7px;
      margin-left: -15px;
      border: 5px solid black;
      border-color: transparent transparent transparent #aaa;
      border-radius: 2px;
    }
  }
  .toc-title {
    display: flex;
    justify-content: space-between;
  }
  .more {
    .more-btn {
      line-height: 36px;
      text-decoration: none;
      color: #00afff;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .more-btn:hover {
      color: #0077ff;
      border-bottom: 1px solid #0077ff;
    }
  }
  
  a {
    text-decoration: none;
    color: #00afff;
  }
  .toc2 {
    font-size: 1.2rem;
  }
  .toc3 {
    font-size: 1rem;
    padding-left: 1rem;
  }
}
</style>
