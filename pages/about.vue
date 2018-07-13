<template>
  <section class="container large-width">
    <div class="content-block">
      <h2>About</h2>
    </div>
    
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';

export default {
  layout: 'default',
  transition: 'fade',
  components: {
    AppLogo
  },
  data() {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/blog/posts/', false, /\.json$/);

    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`
    }));

    return { posts };
  }
};
</script>

<style lang="scss">

</style>
