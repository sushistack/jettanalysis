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
      v-btn(v-else icon @click.stop='overlay = !overlay')
        v-icon mdi-menu
  v-overlay(:value='overlay' color='#00afff' opacity='1')
    .overlay-toolbar
      logo(:size='headerHeight' fill='#fff' marginTop='10')
      v-spacer
      v-btn.menu-btn(icon width='48' height='48' @click='overlay = false')
        v-icon() mdi-close
    .css-1ltxe64
      .css-blynua
        .css-10y79h4
          ul.css-9f21ci
            li(v-for='m in menu')
              router-link.menu-link(:to='m.to') {{ m.name }}
</template>

<script>
import Logo from './Logo'
import MENU from '@/components/data/menu'

export default {
  name: 'NavigationBar',
  components: { Logo },
  data: () => ({ 
    menu: MENU,
    isMenuOpened: false,
    overlay: false
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
#header-container, .overlay-toolbar {
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
    .menu-link.nuxt-link-exact-active {
      font-weight: 600;
      color: #0077ff;
    }
  }
}
.menu-btn {
  margin-top: 5px;
}

.overlay-toolbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
}

.css-1ltxe64 {
  width: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
}

.css-blynua {
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
  padding: 43.5px 0;
}

.css-9f21ci {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  flex-direction: column;
}

.css-10y79h4 > ul > li > a {
    color: #fff;
    text-align: center;
    display: block;
    font-weight: 800;
    font-size: 1.75rem;
    text-decoration: none;
}

@media (min-width: 576px) {
  #header-container, .overlay-toolbar {
    padding-right: 6px;
    padding-left: 10px;
  }
}

@media (min-width: 540px) {
  #header-container, .overlay-toolbar {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  #header-container, .overlay-toolbar {
    max-width: 720px;
  } 
}

@media (min-width: 992px) {
  #header-container, .overlay-toolbar {
    max-width: 960px;
  } 
}

@media (min-width: 1200px) {
  #header-container, .overlay-toolbar {
    max-width: 1140px;
  } 
}

@media screen and (min-width: 576px) {
  #header-container, .overlay-toolbar {
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
