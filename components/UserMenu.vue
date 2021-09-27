<template lang="pug">
v-list
  v-list-item.user-menu(v-for='(m, index) in menu' :key='index' @click='go(m.to)')
    v-list-item-title.menu-content
      svg(v-if='m.id === 0' xmlns='http://www.w3.org/2000/svg' style='margin-bottom:-4px' fill='#333' width='24' height='24' viewBox='0 0 24 24')
        path(d='M23.995 24h-1.995c0-3.104.119-3.55-1.761-3.986-2.877-.664-5.594-1.291-6.584-3.458-.361-.791-.601-2.095.31-3.814 2.042-3.857 2.554-7.165 1.403-9.076-1.341-2.229-5.413-2.241-6.766.034-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 4.983 0 8.451 4.766 3.732 13.678-1.551 2.928 1.65 3.624 5.09 4.418 2.979.688 3.178 2.143 3.178 4.663l-.005 1.241zm-13.478-6l.91 2h1.164l.92-2h-2.994zm2.995 6l-.704-3h-1.615l-.704 3h3.023z')
      svg(v-else-if='m.id === 1' xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 24 24' fill='#333' height='24' width='24' viewBox='0 0 24 24')
        g
          path(d='M0,0h24v24H0V0z' fill='none')
        g
          g
            path(d='M15,3H5C3.9,3,3.01,3.9,3.01,5L3,19c0,1.1,0.89,2,1.99,2H19c1.1,0,2-0.9,2-2V9L15,3z M5,19V5h9v5h5v9H5z M9,8 c0,0.55-0.45,1-1,1S7,8.55,7,8s0.45-1,1-1S9,7.45,9,8z M9,12c0,0.55-0.45,1-1,1s-1-0.45-1-1s0.45-1,1-1S9,11.45,9,12z M9,16 c0,0.55-0.45,1-1,1s-1-0.45-1-1s0.45-1,1-1S9,15.45,9,16z')
      svg(v-else-if='m.id === 2' xmlns='http://www.w3.org/2000/svg' fill='#333' width='24' height='24' viewBox='0 0 24 24')
        path(d='M0 0h24v24H0V0z' fill='none')
        path(d='M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z')
      svg(v-else-if='m.id === 3' xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 24 24' fill='#333' width='24' height='24' viewBox='0 0 24 24')
        g
          path(d='M0,0h24v24H0V0z' fill='none')
        g
          path(d='M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z')
      | {{ m.name }}
</template>

<script>

export default {
  name: 'UserMenu',
  data: () => ({
    menu: [
      { id: 0, name: '프로필', to: '/profile' },
      { id: 1, name: '리포트', to: '/report' },
      { id: 2, name: '결제 내역', to: '/payment-history' },
      { id: 3, name: '로그아웃', to: null }
    ]
  }),
  methods: {
    go (to) {
      if (!to) {
        this.$emit('onSignout')
        return
      }
      this.$router.push(to)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-content svg {
  margin-right: 8px;
  margin-bottom: -6px;
}
</style>