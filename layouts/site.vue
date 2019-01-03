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
}
</script>

<style lang="scss">

</style>
