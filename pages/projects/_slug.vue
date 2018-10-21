<template>
  <section class="post container small-width">

    <nav-back>hi</nav-back>

    <div class="row">

      <div class="content">

        <img :src="thumbnail">

      </div>

    </div>

    <div class="row">

      <div class="content text-center">

        <h3>{{ title }}</h3>
        <p>Cohere • 2018</p>

      </div>

    </div>

    <div class="row">

      <div class="body content">

        <vue-markdown>{{ body }}</vue-markdown>

      </div>

    </div>

  </section>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import NavBack from '~/components/site/NavBack.vue'

export default {
  layout: 'default',
  transition: 'fade',
  components: {
    VueMarkdown,
    NavBack
  },
  async asyncData({ params }) {
    // const postPromise = process.BROWSER_BUILD
    //   ? import('~/content/blog/posts/' + params.slug + '.json')
    //   : Promise.resolve(
    //       require('~/content/blog/posts/' + params.slug + '.json')
    //     );

    let post = await import('~/content/projects/posts/' + params.slug + '.json');
    return post;
  }
};
</script>

<style lang="scss">
.body {
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