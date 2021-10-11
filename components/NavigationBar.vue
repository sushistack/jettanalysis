<template lang="pug">
#header-container
  v-toolbar.toolbar(color='elevation-0' :height='headerHeight')
    v-toolbar-title
      router-link.logo-title(to='/' :class='{overlayed: overlay}')
        logo(:size='headerHeight' marginTop='15' :jettOnly='true')
    v-spacer
    nav.menu
      ul.menu-list(v-show='!isSmallerThanMd')
        li(v-for='m in menu')
          router-link.menu-link(:to='m.to' :class='{"not-home": m.to === "/" && isNotExactHome}') {{ m.name }}
      button.burger-button(v-show='isSmallerThanMd' :class='{active: overlay}' @click.stop='toggleMenu')
        span.burger-menu-icon
  v-overlay.overlayed(v-show='isSmallerThanMd' :value='overlay' color='#00afff' opacity='1')
    .css-1ltxe64
      .css-blynua
        .css-10y79h4
          ul.css-9f21ci
            li(v-for='m in menu')
              router-link.menu-link(:to='m.to' :class='{"not-home": m.to === "/" && isNotExactHome}') {{ m.name }}
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
  mounted () {
    document.body.className = ''
  },
  methods: {
    toggleMenu () {
      this.overlay = !this.overlay
      if (this.overlay) {
        document.body.classList.add('nav-actived')
      } else {
        document.body.classList.remove('nav-actived')
      }
    }
  },
  computed: {
    headerHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 60
        case 'sm': return 60
        case 'md': return 60
        case 'lg': return 60
        case 'xl': return 60
      }
    },
    isSmallerThanMd () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': case 'sm': return true
        case 'md': case 'lg': case 'xl': return false
      }
    },
    isNotExactHome () {
      return this.$route.path !== '/'
    }
  }
}
</script>

<style lang="scss" scoped>
#header-container, .overlay-toolbar {
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin: 1rem auto;
}

.drawer-menu {
  text-decoration: none;
  color: #000;
}

.toolbar {
  z-index: 6;
}
.toolbar.theme--light.v-toolbar.v-sheet {
  background: transparent;
}

.logo-title {
  text-decoration: none;
  color: #00afff;
}

.logo-title.overlayed {
  color: #fff;
}

.menu {
  display: flex;
  .profile-btn {
    line-height: 45px;
    font-size: 1rem;
    text-decoration: none;
    align-items: center;
    padding: 0 25px;
    margin: 0 15px;
    color: #000;
    cursor: pointer;
  }
  .profile-btn.overlayed {
    display: flex;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: 0;
    line-height: 38px;
  }
  .menu-list {
    display: flex;
    list-style: none;
    line-height: 45px;
    .menu-link {
      font-size: 1rem;
      text-decoration: none;
      align-items: center;
      padding: 0 10px;
      margin: 0 15px;
      color: #000;
      cursor: pointer;
    }
    .menu-link.nuxt-link-active {
      font-weight: 600;
      color: #0077ff;
      cursor: default;
    }
    .menu-link.nuxt-link-active.not-home {
      font-weight: normal;
      color: #000;
      cursor: pointer;
    }
  }
}

.css-9f21ci {
  .menu-link.nuxt-link-active {
    color: #000;
    cursor: default;
  }
  .menu-link.nuxt-link-active.not-home {
    color: #fff;
    cursor: pointer;
  }
}

.menu-btn {
  margin-top: 5px;
}

.burger-button {
  cursor: pointer;
  -webkit-box-pack: center;
  justify-content: center;
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  display: inline-flex;
  width: 40px;
  height: 40px;
  position: relative;
  transition: transform 500ms cubic-bezier(0.4,0,0.2,1);
  .burger-menu-icon {
    width: 35px;
    height: 5px;
    border-radius: 2px;
    background: #000;
    margin: 17px 0;
    position: relative;
    z-index: 6;
    pointer-events: none;
  }

  .burger-menu-icon::before {
    top: -10px;
    width: 25px;
  }

  .burger-menu-icon::after {
    top: 10px;
    width: 20px;
  }

  .burger-menu-icon::before, .burger-menu-icon::after {
    border-radius: 2px;
    height: 5px;
    background: #000;
    content: " ";
    position: absolute;
    left: 0;
    -webkit-transition: -webkit-transform 250ms cubic-bezier(.68,-.55,.265,1.55);
    -webkit-transition: transform 250ms cubic-bezier(.68,-.55,.265,1.55);
    transition: transform 250ms cubic-bezier(.68,-.55,.265,1.55);
  }
}

.burger-button.active {
  > .burger-menu-icon {
    background: none;
  }
  > .burger-menu-icon:hover {
    transform: scale(1.2);
  }
  > .burger-menu-icon::before, > .burger-menu-icon::after  {
    top: 0px;
    width: 40px;
    background: #fff;
  }
  > .burger-menu-icon::before {
    transform: rotate(-45deg);
  }
  > .burger-menu-icon::after {
    transform: rotate(45deg);
  }
}

.profile-btn {
  border: 1px solid transparent;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  background: #eee;
}

.profile-btn:hover {
  background: #ddd;
}

.overlayed .profile-btn {
  margin: 0 auto;
}

.user-menu {
  cursor: pointer;
}
.user-menu:hover { 
  background: #eee;
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
