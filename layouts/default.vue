<template>
  <div class="app" :class="{ 'show-ui' : showUi }">

    <div class="app__toggle" @click="toggleUi()">
      <toggle-ui :toggle="showUi"></toggle-ui>
    </div>

    <labs-ui ref="labsUi"></labs-ui>
      <div class="app__content" :class="{'app__content--article' : $route.name == 'articles-slug'}" >
        <transition 
          :name="direction"
          mode="out-in"
          @before-leave="beforeLeave()"
          @after-enter="afterEnter()"
          appear
        >
          <div v-bind:key="page" :style="stylesUi">
            <nuxt/>
          </div>
        </transition>
      </div>

    <transition name="fade">
      <app-footer v-show="showFooter"></app-footer>
    </transition>
  </div>
</template>

<script>
import TweenMax from 'gsap';
import LabsUi from '~/components/labs/LabsUi.vue'
import ToggleUi from '~/components/labs/ToggleUi.vue'
import AppFooter from '~/components/AppFooter.vue';
import { mapState } from 'vuex';

export default {
  middleware: 'labs',
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
      page: '',
      showFooter: false,
    };
  },
  watch: {
    $route (to, from) {
      this.page = to.name;
    }
  },
  mounted() {
    this.$nextTick(this.setUiHeight())
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
    beforeLeave () {
      this.showFooter = false;
    },
    afterEnter () {
      this.showFooter = true;
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
    perspective: 200vw;
    transform-style: preserve-3d;

    &.app__content--article > div{ // Hide border styles for articles
      box-shadow: none !important;
      transition: all 900ms 50ms $ease, box-shadow 300ms $ease;
    }

    > div {
      margin: 0 $spacing/2;
      overflow: hidden !important;
      transform-origin: top center;
      transition: all 950ms 50ms $ease;
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
$dur: 1.25s;
$ease-in: cubic-bezier(0.47, 0, 0.745, 0.715);
$ease-out: cubic-bezier(0.39, 0.575, 0.565, 1);

.slide-left-enter-active {
  animation: slide-right $dur 0s $ease-out 1 reverse forwards;
}

.slide-left-leave-active {
  animation: slide-left $dur 0s $ease-in 1 forwards;
}

.slide-right-enter-active {
  animation: slide-left $dur 0s $ease-out 1 reverse forwards;
}

.slide-right-leave-active {
  animation: slide-right $dur 0s $ease-in 1 forwards;
}

// MOBILE SLIDE ANIMATION
@keyframes slide-right {
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(0%) scale(0.75);
    opacity: 1;
  }
  100% {
    transform: translateX(20%) scale(0.75);
    opacity: 0;
  }
}

@keyframes slide-left {
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(0%) scale(0.75);
    opacity: 1;
  }
  100% {
    transform: translateX(-20%) scale(0.75);
    opacity: 0;
  }
}

// DESKTOP SLIDE ANIMATION
@media screen and (min-width: $small-width) {
@keyframes slide-right {
  0% {
    transform: translate(0%, 0);
  }
  50% {
    transform: translate(0%, 120px) scale(0.6);
    opacity: 1;
  }
  100% {
    transform: translate(50%, 120px) scale(0.6) rotateY(8deg);
    opacity: 0;
  }
}

@keyframes slide-left {
  0% {
    transform: translate(0%, 0);
  }
  50% {
    transform: translate(0%, 120px) scale(0.6);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 120px) scale(0.6) rotateY(-8deg);
    opacity: 0;
  }
}
}


// ARTICLE ANIMATIONS
.article-enter-active {
  animation: article 0.5s 0s $ease-in 1 reverse forwards;
}
.article-leave-active {
  animation: article 0.5s 0s $ease-in 1 forwards;
}

@keyframes article {
  0% {
    opacity: 1;
  }
  100% {
    transform: translateY(90px);
    opacity: 0;
  }
}

.default-enter-active {
  opacity: 0;
  animation: default 0.75s 0ms cubic-bezier(0.165, 0.84, 0.44, 1) 1 forwards;
}

@keyframes default {
  0% {
    opacity: 0;
    transform: scale(0.35) translateY(150vh) rotate3d(1, 0, 0, -3deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0px) rotate3d(0, 0, 0, 5deg);
  }
}
</style>
