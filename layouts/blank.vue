<template>
  <div class="app">
    <nuxt/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from '~/components/AppFooter.vue';

export default {
  components: {
    AppFooter,
  },
}
</script>
