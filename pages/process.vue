<template>
  <div class="process">

    <nav-back/>

    <section class="container large-width">

      <div class="process-item row" v-for="(item) in items" :key="item.index">
        <div class="process-item-title">
          <h2>{{ item.index }}</h2>
          <h1>{{ item.title }}</h1>
        </div>
        <div class="process-item-desc">
          <p>{{ item.description }}</p>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import NavBack from '~/components/site/NavBack.vue'

export default {
  layout: 'default',
  transition: 'fade',
  components: {
    NavBack
  },
  data () {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/process/items/', false, /\.json$/);

    const items = context.keys().map(key => ({
        ...context(key),
        _path: `/process/${key.replace('.json', '').replace('./', '')}`
    }));
    return {
      items
    }
  }
};
</script>

<style lang="scss">
@import '~assets/sass/utilities/_variables.scss';

.process-item {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-bottom: 0; //override .row global
  padding: $spacing/2 0;
  border-top: 2px solid $black;

  @include query ($small-width) {
    flex-direction: row;
  }

  & > div {
    width: 100%;

    @include query ($small-width) {
      width: 50%;
    }
  }
  &-title {
    padding: 0 0 $spacing/2 0;

    @include query ($small-width) {
      padding: 0;
    }

    h1, h2 {
      display: inline-block;
    }
    h2 {
      width: $spacing*2;
    }
  }
  &-desc {
    padding-left: $spacing*2;

    @include query ($small-width) {
      padding-left: 0;
    }

    p {
      margin: 0;
    }
  }
}
</style>
