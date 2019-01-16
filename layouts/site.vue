<template>
  <div class="app">
    <site-header/>
    <nuxt/>
    <app-footer></app-footer>
  </div>
</template>

<script>
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
}
</script>

<style lang="scss">
@import '~assets/sass/utilities/_variables.scss';

.app {
}
</style>
