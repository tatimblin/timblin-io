<template>
<div class="post">
  <div class="post__content">
    <h1>{{title}}</h1>
    <vue-markdown>{{body}}</vue-markdown>
  </div>
</div>
</template>

<script>
import { TweenMax, Back } from 'gsap'

import VueMarkdown from 'vue-markdown'
import NavBack from '~/components/site/NavBack.vue'

export default {
  layout: 'default',
  components: {
    VueMarkdown,
  },
  async asyncData({ params }) {
    // const postPromise = process.BROWSER_BUILD
    //   ? import('~/content/blog/posts/' + params.slug + '.json')
    //   : Promise.resolve(
    //       require('~/content/blog/posts/' + params.slug + '.json')
    //     );

    let labs = await import('~/content/labs/posts/' + params.slug + '.json');
    return labs;
  },
};
</script>

<style lang="scss">
@import '~assets/sass/utilities/_variables.scss';

.post {
  padding: 0 $spacing/2;
  border-radius: 0 !important;
  box-shadow: none !important;

  &__content {
    max-width: $small-width;
    margin: $spacing*2 auto;
  }
}
</style>