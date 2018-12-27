<template>
  <div class="app" :class="{ 'show-ui' : showUi }">

    <div class="app__toggle" @click="toggleUi()">
      <toggle-ui :toggle="showUi"></toggle-ui>
    </div>

    <labs-ui ref="labsUi"></labs-ui>
    
      <div class="app__content" :class="{'app__content--article' : $route.name == 'articles-slug'}" >
        <transition :name="dir" mode="out-in">
          <div v-bind:key="page" :style="stylesUi">
            <nuxt/>
          </div>
        </transition>
      </div>

    <app-footer></app-footer>

  </div>
</template>

<script>
import LabsUi from '~/components/labs/LabsUi.vue'
import ToggleUi from '~/components/labs/ToggleUi.vue'
import AppFooter from '~/components/AppFooter.vue';
import { mapState } from 'vuex';

export default {
  components: {
    LabsUi,
    ToggleUi,
    AppFooter,
  },
  data() {
    return {
      showUi: true,
      stylesUi: {
        marginTop: '65px', marginLeft: '15px', marginRight: '15px',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 30px 60px 0px',
        borderRadius: '15px'
      },
      dir: 'slide-right',
      page: '',
    };
  },
  watch: {
    $route (to, from) {
      let dir = this.direction;
      console.log(to.name + ', ' + from.name);
      this.page = to.name;
      if (from.name == 'articles-slug') {
        this.dir = 'from-article';
      } else if (to.name == 'articles-slug') {
        this.dir = 'to-article';
      } else if (dir == 'next') {
        this.dir = 'slide-left';
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
        css.marginLeft = '15px';
        css.marginRight = '15px';
        css.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 30px 60px 0px';
        css.borderRadius = '15px';
      } else {
        css.marginLeft = '0px';
        css.marginRight = '0px';
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
    },
  },
  computed: {
    ...mapState(['direction'])
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_variables.scss';
//$app-bg: #ededed;

.app {
  //background-color: $app-bg;

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
    background-color: $bg;
    transform: translateY(-100%);
    transition: all 900ms 50ms $ease;
    z-index: 99998;
  }

  &__content { // Generic stying to always be present on labs wrapper
    max-width: 100%;
    margin: 0 auto;
    transition: all 900ms 50ms $ease;
    perspective: 375px;

    &.app__content--article > div{ // Hide border styles for articles
      box-shadow: none !important;
      transition: all 900ms 50ms $ease, box-shadow 300ms $ease;
    }

    > div {
      margin: 0 $spacing/2;
      overflow: hidden !important;
      transition: all 950ms 50ms $ease;
      transform-origin: 50% 240px;
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

// NEXT LAB ANIMATIONS
$dur: 1.6s;
$ease: cubic-bezier(0.77, 0, 0.175, 1);

.slide-left-enter-active {
  animation: slide-right $dur 0s $ease 1 reverse forwards;
}

.slide-left-leave-active {
  animation: slide-left $dur 0s $ease 1 forwards;
}

.slide-right-enter-active {
  animation: slide-left $dur 0s $ease 1 reverse forwards;
}

.slide-right-leave-active {
  animation: slide-right $dur 0s $ease 1 forwards;
}

@keyframes slide-right {
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(0%) scale(0.625);
    opacity: 1;
    transform-origin: 50% 240px;
  }
  100% {
    transform: translateX(50%) scale(0.55) rotate3d(0, 1, 0, 3deg);
    opacity: 0;
    transform-origin: 0% 240px;
  }
}

@keyframes slide-left {
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(0%) scale(0.625);
    opacity: 1;
    transform-origin: 50% 240px;
  }
  100% {
    transform: translateX(-50%) scale(0.55) rotate3d(0, 1, 0, -3deg);
    opacity: 0;
    transform-origin: 100% 240px;
  }
}


// ARTICLE ANIMATIONS
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
    transform: scale(0.5) translateY(-320px) rotate3d(1, 0, 0, 5deg);
    opacity: 0;
  }
}
</style>
