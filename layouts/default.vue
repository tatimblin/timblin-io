<template>
  <div class="app" :class="{ 'show-ui' : showUi }">

    <button class="app__toggle" @click="toggleUi()">
        Close
    </button>

    <labs-ui ref="labsUi"></labs-ui>
    
      <div class="app__content" :class="{'app__content--article' : $route.name == 'articles-slug'}" >
        <transition :name="dir" mode="out-in">
          <div v-bind:key="page" :style="stylesUi">
            <nuxt/>
          </div>
        </transition>
      </div>

    <footer>
      <nuxt-link to="/">timblin.io</nuxt-link>
    </footer>

  </div>
</template>

<script>
import LabsUi from '~/components/labs/LabsUi.vue'
import AppFooter from '~/components/AppFooter.vue';

export default {
  components: {
    LabsUi,
    AppFooter,
  },
  data() {
    return {
      showUi: true,
      stylesUi: {
        marginTop: '65px',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 30px 60px 0px',
        borderRadius: '15px'
      },
      dir: 'slide-right',
      page: '',
    };
  },
  watch: {
    $route (to, from) {
      //let name = this.$route.name;
      console.log(to.name + ', ' + from.name);
      this.page = to.name;
      if (to.name == 'labs-knockout-text' && from.name == 'labs-demo') {
        this.dir = 'slide-left';
      } else if (to.name == 'articles-slug') {
        this.dir = 'to-article';
      } else if (from.name == 'articles-slug') {
        this.dir = 'from-article';
      } else {
        this.dir = 'slide-right';
      }
    }
  },
  mounted() {
    this.$nextTick(this.setUiHeight());
  },
  methods: {
    toggleUi() {
      const css = this.stylesUi;
      this.showUi = !this.showUi;
      if (this.showUi) {
        css.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 30px 60px 0px';
        css.borderRadius = '15px';
      } else {
        css.boxShadow = 'none';
        css.borderRadius = '0px';
      }
      this.setUiHeight()
    },
    setUiHeight() {
      if(this.showUi == true) {
        this.stylesUi.marginTop = this.$refs.labsUi.$el.clientHeight + 'px';
      } else {
        this.stylesUi.marginTop = 0;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_variables.scss';
$app-bg: #ededed;

body {
  background-color: $app-bg;
}

.app {
  background-color: $app-bg;

  &__toggle {
    position: fixed;
    top: 0; left: 50%;
    transform: translateX(-50%);
    z-index: 99999;
  }
  .labsui {
    position: fixed;
    width: 100%;
    top: 0; 
    background-color: $app-bg;
    transform: translateY(-100%);
    transition: all 900ms 50ms $ease;
    z-index: 99998;
  }

  &__content { // Generic stying to always be present on labs wrapper
    max-width: 100%;
    margin: 0 auto;
    padding-top: -15px;
    transition: all 900ms 50ms $ease;

    &.app__content--article > div{ // Hide border styles for articles
      box-shadow: none !important;
      transition: all 900ms 50ms $ease, box-shadow 300ms $ease;
    }

    > div {
      overflow: hidden !important;
      transition: all 950ms 50ms $ease;
      transform-origin: 50% 480px;
    }
  }

  footer {
    padding: $spacing/2 0;
    text-align: center;
    transition: all 900ms 50ms $ease;
  }

  &.show-ui { // Specialized styling for when UI is present

    .labsui {
      transform: translateY(0%);
    }

    .app__content {
      max-width: $large-width;
    }

    footer {
      padding: $spacing 0;
    }
  }
}


.slide-left-enter-active, .slide-left-leave-active {
  transition: all .6s $ease;
}

.slide-left-leave {
  transform: translate(0%);
}
.slide-left-enter, .slide-left-leave-to {
  transform: translateX(100%);
  opacity:0;
  transform-origin: 50% 50%;
}
.slide-left-enter {
  transform: translateX(-100%);
}

.slide-right-enter-active, .slide-right-leave-active {
  transition: all .6s $ease;
}
.slide-right-enter, .slide-right-leave-to {
  transform: translateX(-100%);
  opacity:0;
  transform-origin: 50% 50%;
}
.slide-right-enter {
  transform: translateX(100%);
}

.to-article-enter-active {
  animation: to-article 450ms 0s ease-in 1 reverse forwards;
}
.to-article-leave-active {
  animation: from-article 1.6s 0s $ease 1 forwards;
}
.from-article-enter-active {
  animation: from-article 1.6s 0s $ease 1 reverse forwards;
}
.from-article-leave-active {
  animation: to-article 450ms 0s ease-in 1 forwards;
}

@keyframes to-article {
  0% {
    opacity: 1;
  }
  100% {
    transform: translateY(90px);
    opacity: 0;
  }
}

@keyframes from-article {
  0% {
    opacity: 1;
  }
  55% {
    transform: scale(0.625);
    opacity: 1;
  }
  100% {
    transform: scale(0.625) translateY(-240px);
    opacity: 0;
  }
}
</style>
