<template>
<div class="post">
  <h1>title</h1>
  <vue-markdown>body</vue-markdown>

</div>
</template>

<script>
import { TweenMax } from 'gsap'

import VueMarkdown from 'vue-markdown'
import NavBack from '~/components/site/NavBack.vue'

export default {
  layout: 'default',
  components: {
    VueMarkdown,
  },
  
};
</script>

<style lang="scss">
.post-body {
  h1 {
    margin: 1.125rem 0;
  }
  p {
    margin-bottom: 1.125rem;
  }
  img {
    width: calc(100% - 60px);
    padding: 1.125rem 0;
    transform: translateX(60px);
  }
}
</style>