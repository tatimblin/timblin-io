<template>
  <div class="app">
    <site-header headline="Interactive Labs">
      <h2 id="header-subline">a collection of front-end experiences using motion, by interaction developer Tristan Timblin.</h2>
    </site-header>
    <transition
      v-bind:css="false"
      @enter="enter"
      @leave="leave"
      appear
    >
      <div class="app-content">
        <nuxt/>
        <app-footer></app-footer>
      </div>
    </transition>
  </div>
</template>

<script>
import TweenMax from 'gsap';
import AppFooter from '~/components/AppFooter.vue';
import SiteHeader from '~/components/site/SiteHeader.vue';

export default {
  components: {
    AppFooter,
    SiteHeader,
  },
  mounted() {
    if (process.client && window) {
      window.history.scrollRestoration = 'auto';
    }
  },
  methods: {
    enter: function (el, done) {
      TweenMax.to('.app-content', 1, {
        opacity: 1,
        y: 0,
        delay: 1.2,
        ease:Power3.easeOut,
				onComplete: done
      });
    },
    leave: function () {
      TweenMax.from('.app-content', 1, {
        opacity: 1,
        delay: 0.3,
        ease:Power3.easeOut,
				onComplete: done
      });
    }
  }
}
</script>

<style lang="scss">
//@import '~assets/sass/utilities/_variables.scss';

.app-content {
  opacity: 0;
  transform: translateY(15px);
}

</style>
