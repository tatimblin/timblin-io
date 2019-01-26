<template>
<div class="post">
  <div class="post__content">
    <div class="post__content--title">
      <h1>{{title}}</h1>
      <in-collab :collab="collaboration" :date="date | moment"/>
    </div>
    <div v-html="compiledMarkdown">{{body}}</div>
  </div>
</div>
</template>

<script>
//import { TweenMax, Back } from 'gsap';
import marked from 'marked';
import moment from 'moment';

import InCollab from '~/components/labs/InCollab.vue'

export default {
  layout: 'default',
  components: {
    InCollab,
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
  data() {
    return {
      timeAgo:'',
    };
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.body, { sanitize: true })
    },
  },
  filters: {
    moment: function (date) {
      return moment(date).startOf('day').fromNow();
    }
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
    margin: $spacing auto 0 auto;

    h1, h2, h3 {
      margin: $spacing 0 $spacing/2 0;
    }
    img {
      width: 100%;
      padding: $spacing 0;
    }
    &--title {
      margin-bottom: $spacing*1;
      padding: $spacing 0 $spacing*2 0;
      font-family: $font-family;
      border-bottom: 1px solid $black;

      p {
        margin: 0;
      }
    }
  }
}
</style>