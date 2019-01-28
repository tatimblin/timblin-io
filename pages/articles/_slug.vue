<template>
<div class="article container">

  <div class="article__title content medium-width">
    <h1>{{title}}</h1>
    <in-collab :collab="collaboration" :date="date | moment"/>
  </div>
  
  <article class="article__body content small-width" v-html="compiledMarkdown">
    {{body}}
  </article>

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

.article {
  &__title {
    margin-bottom: 2.5rem !important;
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
    border-bottom: 1px solid $black;

    h1 {
      margin-bottom: $spacing/2;
    }
  }
  &__body {

    #heading-two {
      color: $text-color;
      font-size: 2.125em;
    }
    #heading-three {
      font-size: 1.25em;
    }
    img {
      padding: $spacing 0;
    }
  }
}
</style>