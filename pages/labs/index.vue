<template>
    <div class="site">
        
        <section class="header large-width">

            <site-title headline="Tristan Timblin">
                an interaction designer using motion, to tell engaging stories for brands.
            </site-title> 

            <div class="row">

                <h4>developing @ cohere.city/</h4>
                <h4>now on github, codepen, and twitter</h4>

            </div>

            <site-divider half="true"/>

            <div class="row">

                <site-button href="/">Projects</site-button>
                <site-button href="/labs">Labs</site-button>

            </div>

        </section>

        project slider!

        <section class="process large-width">

            <site-title headline="Trusting the Process">
                lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </site-title>

            <div class="row">

                <div class="callout">
                    <div class="callout-item">
                        <h4>UX</h4>
                        <p>lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="callout-item">
                        <h4>Front-End</h4>
                        <p>lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

            </div>

            <site-divider half="true"/>

            <div class="row">

                <site-button href="/process">Process</site-button>

            </div>

        </section>

        process slider!

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
import SiteTitle from '~/components/site/SiteTitle.vue'
import SiteButton from '~/components/site/SiteButton.vue'
import SiteDivider from '~/components/site/SiteDivider.vue'

export default {
  layout: 'default',
  transition: 'fade',
  components: {
    AppLogo,
    SiteTitle,
    SiteButton,
    SiteDivider
  }
};
</script>

<style lang="scss" scoped>

</style>