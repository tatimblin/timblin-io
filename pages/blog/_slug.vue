<template>
  <div class="post container large-width">
      <div class="content">
        <img :src="thumbnail">
        <h1>{{ title }}</h1>
        <p>{{ body }}</p>
      </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  transition: 'fade',
  async asyncData({ params }) {
    // const postPromise = process.BROWSER_BUILD
    //   ? import('~/content/blog/posts/' + params.slug + '.json')
    //   : Promise.resolve(
    //       require('~/content/blog/posts/' + params.slug + '.json')
    //     );

    let post = await import('~/content/blog/posts/' + params.slug + '.json');
    return post;
  }
};
</script>

<style lang="scss">
  @import '~assets/sass/main.scss';

  .post {

    img {
      width: 100%;
    }
    p {
      @include grid-media($grid-small) {
        @include grid-column(8, $grid);
        @include grid-push(2);
      }
    }
  }
</style>