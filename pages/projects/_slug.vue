<template>
<div class="post">

  <nav-back destination="/projects"/>
  
  <section class="post__title container">
    <div class="column twelve">
      <img :src="thumbnail" :alt="title">
      <h3>{{ title }}</h3>
      <p>{{ team }} • {{ date }}</p>
    </div>
  </section>

  <section class="post__content container xsmall-width">
    <div class="column six">
      <div>{{ body }}</div>
    </div>
  </section>

</div>
</template>

<script>
import { TweenMax } from 'gsap'

import NavBack from '~/components/general/NavBack.vue'

export default {
  layout: 'blank',
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
    NavBack,
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
@import '~assets/sass/utilities/_variables.scss';

.post {
  &__title {
    margin: $spacing*2 auto;
    text-align: center;

    img {
      width: 100%;
      max-height: 500px;
      object-fit: cover;
      object-position: top;
      border-radius: 15px;
    }
  }
  &__content {
    margin: 0 auto;
  }
}
</style>