<template>
    <div class="site">
        
        <site-header></site-header>

        <site-project-view></site-project-view>

        <site-process></site-process>

        <site-slider count="4"></site-slider>

        <section class="about large-width">

            <site-title headline="A Creator">
                hello, now you know me
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

        <about-content></about-content>

    </div>
</template>

<script>
import { TweenMax } from 'gsap'

import AppLogo from '~/components/AppLogo.vue'
import SiteHeader from '~/components/site/SiteHeader.vue'
import SiteProjectView from '~/components/site/SiteProjectView.vue'
import SiteProcess from '~/components/site/SiteProcess.vue'
import SiteSlider from '~/components/site/SiteSlider.vue'
import SiteTitle from '~/components/site/SiteTitle.vue'
import SiteButton from '~/components/site/SiteButton.vue'
import SiteDivider from '~/components/site/SiteDivider.vue'
import AboutContent from '~/components/site/AboutContent.vue'

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
    AppLogo,
    SiteHeader,
    SiteProjectView,
    SiteProcess,
    SiteSlider,
    SiteTitle,
    SiteButton,
    SiteDivider,
    AboutContent
  }
};
</script>

<style lang="scss" scoped>

</style>