<template>
    <div class="site">
        
        <site-header></site-header>

        <site-project-view></site-project-view>

        <site-process></site-process>

        <site-slider count="4">
            hi
        </site-slider>

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

        about me slider!

    </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import SiteHeader from '~/components/site/SiteHeader.vue'
import SiteProjectView from '~/components/site/SiteProjectView.vue'
import SiteProcess from '~/components/site/SiteProcess.vue'
import SiteSlider from '~/components/site/SiteSlider.vue'
import SiteTitle from '~/components/site/SiteTitle.vue'
import SiteButton from '~/components/site/SiteButton.vue'
import SiteDivider from '~/components/site/SiteDivider.vue'

export default {
  layout: 'default',
  transition: 'fade',
  components: {
    AppLogo,
    SiteHeader,
    SiteProjectView,
    SiteProcess,
    SiteSlider,
    SiteTitle,
    SiteButton,
    SiteDivider
  }
};
</script>

<style lang="scss" scoped>

</style>