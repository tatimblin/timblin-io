<template>
    <div class="site">
      <scroll-container @change="updateState">
        
        <scroll-item @change="onChange">
          <div :class="state[0] && state[0].isFullyInViewport">
            <site-header></site-header>
            <site-project-view></site-project-view>
          </div>
        </scroll-item>

        <scroll-item @change="onChange">
          <div :class="state[1] && state[1].isFullyInViewport">
            <site-process></site-process>
            <site-slider count="4"></site-slider>
          </div>
        </scroll-item>

        <scroll-item @change="onChange">
          <section class="about large-width" :class="state[2] && state[2].isFullyInViewport">
              <site-title headline="A Creator" subline="hello, now you know me">
              </site-title>

              <div class="row">
                  <div class="callout">
                      <div class="callout-item">
                          <h4>Tysons, VA</h4>
                      </div>
                      <div class="callout-item">
                          <h4>Philadelphia, PA</h4>
                      </div>
                  </div>
              </div>
              <site-divider half="true"/>
          </section>
        </scroll-item>

          <about-content></about-content>

      </scroll-container>
    </div>
</template>

<script>
import { TweenMax } from 'gsap'

import SiteProjectView from '~/components/temp/SiteProjectView.vue'
import SiteProcess from '~/components/temp/SiteProcess.vue'
import SiteSlider from '~/components/temp/SiteSlider.vue'
import SiteTitle from '~/components/temp/SiteTitle.vue'
import SiteDivider from '~/components/temp/SiteDivider.vue'
import AboutContent from '~/components/temp/AboutContent.vue'

export default {
  layout: 'site',
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
    SiteProjectView,
    SiteProcess,
    SiteSlider,
    SiteTitle,
    SiteDivider,
    AboutContent
  },
  data: () => ({
    state: {},
  }),
  methods: {
    updateState (state) {
      this.state = state
    },
    onChange (state) {
      console.log('change')
    },
  },
  computed: {
    itemsInViewport() {
      return _.pickBy(this.state, ({ isInViewport }) => isInViewport)
    }
  },
};
</script>

<style lang="scss" scoped>

</style>