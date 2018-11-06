<template>
<div class="post">

  <nav-back/>
  
  <section class="container small-width">

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

      <div class="post-body content">

        <vue-markdown>{{ body }}</vue-markdown>

      </div>

    </div>

  </section>
</div>
</template>

<script>
import { TweenMax } from 'gsap'

import VueMarkdown from 'vue-markdown'
import NavBack from '~/components/site/NavBack.vue'

export default {
  layout: 'default',
  transition: {
    mode: 'out-in',
    css: false,
    beforeEnter (el) {
      TweenMax.set(el, {
        transformPerspective: 600,
        perspective: 300,
        transformStyle: 'preserve-3d'
      })
    },
    enter (el, done) {
      TweenMax.to(el, 1, {
        rotationY: 360,
        transformOrigin: '50% 50%',
        ease: Back.easeOut,
        onComplete: done
      })
    },
    leave (el, done) {
      TweenMax.to(el, 1, {
        rotationX: -360,
        transformOrigin: '50% 50%',
        ease: Back.easeIn,
        onComplete: done
      })
    }
  },
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