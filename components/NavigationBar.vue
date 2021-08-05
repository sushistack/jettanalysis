<template lang="pug">
#header-container
  v-toolbar.toolbar(color='elevation-0' :height='headerHeight')
    v-toolbar-title
      router-link.logo-title(to='/')
        logo(:size='headerHeight' marginTop='15')
    v-spacer
    nav.menu
      ul.menu-list(v-if='!isSmallerThanMd')
        li(v-for='m in menu')
          router-link.menu-link(:to='m.to') {{ m.name }}
      v-app-bar-nav-icon(v-else @click.stop='drawer = !drawer')
  v-navigation-drawer(v-if='isSmallerThanMd' v-model='drawer' absolute temporary right)
    v-list
      v-list-item(v-for='m in menu' :key='m.name' link :to='m.to')
          v-list-item-content
            v-list-item-title {{ m.name }}
</template>

<script>
import Logo from './Logo'
import MENU from '@/components/data/menu'

export default {
  name: 'NavigationBar',
  components: { Logo },
  data: () => ({ 
    menu: MENU,
    drawer: false
  }),
  computed: {
    headerHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 60
        case 'sm': return 60
        case 'md': return 80
        case 'lg': return 80
        case 'xl': return 80
      }
    },
    isSmallerThanMd () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': case 'sm': return true
        case 'md': case 'lg': case 'xl': return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#header-container {
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
}

.drawer-menu {
  text-decoration: none;
  color: #000;
}

.logo-title {
  text-decoration: none;
  color: #000;
}
.menu {
  .menu-list {
    display: flex;
    list-style: none;
    .menu-link {
      font-size: 1rem;
      text-decoration: none;
      align-items: center;
      padding: 0 10px;
      margin: 0 15px;
      color: #000;
    }
    .menu-link.nuxt-link-active {
      font-weight: 600;
    }
  }
}

@media (min-width: 576px) {
  #header-container {
    padding-right: 6px;
    padding-left: 10px;
  }
}

@media (min-width: 540px) {
  #header-container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  #header-container {
    max-width: 720px;
  } 
}

@media (min-width: 992px) {
  #header-container {
    max-width: 960px;
  } 
}

@media (min-width: 1200px) {
  #header-container {
    max-width: 1140px;
  } 
}

@media screen and (min-width: 576px) {
  #header-container {
    padding-right: 10px;
    padding-left: 10px;
  }
}
</style>

<style lang="scss">
.toolbar .v-toolbar__content {
  padding: 4px 0px;
}
</style>
