<template>
  <div class="about page">
    <section class="container large-width">
      <div class="content">
        <h2>About</h2>
        <h4>Established 2018</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda cumque non quas delectus, facilis numquam fuga illo, inventore minus ullam, aut maxime a alias accusamus nisi consequatur laudantium cupiditate?</p>
      </div>
    </section>
  </div>
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
