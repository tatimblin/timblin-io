<template>
    <section class="header large-width">

        <site-title headline="Tristan Timblin">
            an interaction designer using motion, to tell engaging stories for brands.
        </site-title> 

        <div class="row">

            <h4>developing @ <a href="https://cohere.city/" target="_blank">cohere.city/</a></h4>
            <h4>now on <a href="https://github.com/tatimblin/" target="_blank">github</a>, <a href="https://codepen.io/tatimblin/" target="_blank">codepen</a>, and <a href="https://twitter.com/TristanTimblin" target="_blank">twitter</a></h4>

        </div>

        <site-divider half="true"/>

    </section>
</template>

<script>
import SiteTitle from '~/components/site/SiteTitle.vue'
import SiteButton from '~/components/site/SiteButton.vue'
import SiteDivider from '~/components/site/SiteDivider.vue'

export default {
    components: {
        SiteTitle,
        SiteButton,
        SiteDivider
    }
}
</script>

<style>
.header {
    margin-top: 1.5rem;
}
</style>

