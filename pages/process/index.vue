<template>
  <div class="process container">

    <div class="process__item twelve nested" v-for="(item) in items" :key="item.index" @click="updateProcess(item.title)" :id="`step-${item.index}`">
      <div class="process__item__title six nested">
        <h2 class="one">{{ item.index }}</h2>
        <h1 class="eleven">{{ item.title }}</h1>
      </div>
      <div class="process__item__desc six">
        <p>{{ item.description }}</p>
      </div>
      <div class="process__item__full twelve" :class="{open: item.title == thisProcess}">
        <div class="process__item__full__content">
          <vue-markdown>{{ item.body }}</vue-markdown>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { mapMutations, mapGetters } from 'vuex';

export default {
  layout: 'blank',
  transition: 'fade',
  components: {
    VueMarkdown,
  },
  data () {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/process/items/', false, /\.json$/);

    const items = context.keys().map(key => ({
        ...context(key),
        _path: `/process/${key.replace('.json', '').replace('./', '')}`
    }));
    return {
      items,
    };
  },
  methods: {
    ...mapMutations(['updateProcess'])
  },
  computed: {
    ...mapGetters(['thisProcess'])
  },
};
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_variables.scss';

.process {
  &__item {
    align-items: baseline;
    padding-top: $spacing/2;
    border-top: 2px solid $black;

    &__title {
      align-items: baseline;
    }
    &__full {
      position: relative;
      max-height: 0;
      overflow: scroll;
      transition: all 1200ms $ease;

      &.open {
        max-height: 50vh;
      }
    }
  }
}
</style>
