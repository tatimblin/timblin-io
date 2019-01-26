<template>
<div class="post">

  <nav-back/>

  <process-list/>
  
  <section class="container small-width">

    <div class="row">

      <div class="content text-center">

        <h3>{{ title }}</h3>
        <p>Cohere • 2018</p>

      </div>

    </div>

  </section>
</div>
</template>

<script>
import NavBack from '~/components/general/NavBack.vue'
import ProcessList from '~/components/temp/ProcessList.vue'

export default {
  layout: 'site',
  transition: 'fade',
  components: {
    NavBack,
    ProcessList,
  },
  async asyncData({ params }) {
    // const postPromise = process.BROWSER_BUILD
    //   ? import('~/content/blog/posts/' + params.slug + '.json')
    //   : Promise.resolve(
    //       require('~/content/blog/posts/' + params.slug + '.json')
    //     );

    let item = await import('~/content/process/items/' + params.slug + '.json');
    return item;
  }
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