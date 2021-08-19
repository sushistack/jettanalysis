<template lang="pug">
.dignosis-table-conainer
  v-simple-table(fixed-header height='300px')
    template(v-slot:default)
      thead
        tr
          th.text-left(v-for='(c, index) in columns' :key='index') {{ c.name }}
      tbody
        tr(v-for='(d, dIdx) in data' :key='dIdx')
          td(v-for='(c, cIdx) in columns' :key='cIdx')
            template(v-if='c.type === "TEXT"') {{ truncate(d[c.id]) }}
            template(v-else-if='c.type === "CHIP"')
              v-chip(small dark) {{ d[c.id] }}
            template(v-else-if='c.type === "CHIP_LIST"')
              span.chips(v-for='(da, daIdx) in d[c.id]' :key='daIdx')
                v-chip(small dark :color='getAttributeColor(da)') {{ da }}
</template>

<script>
export default {
  name: 'DignosisTable',
  props: {
    columns: {
      type: Array,
      requied: true
    },
    data: {
      type: Array,
      requied: true
    }
  },
  methods: {
    getAttributeColor (type) {
      switch (type) {
        case 'New window': return '#777'
        case 'Nofollow': return '#f0ad4e'
        case 'External': return '#777'
        default: return ''
      }
    },
    truncate (input) {
      return input.length > 30 ? `${input.substring(0, 30)}...` : input
    } 
  }
}
</script>

<style lang="scss" scoped>
.chips {
  line-height: 2;
}
</style>

