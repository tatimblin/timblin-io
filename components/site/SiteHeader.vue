<template>
    <section class="header large-width">

        <site-title headline="Tristan Timblin">
            an interaction designer using motion, to tell engaging stories for brands.
        </site-title> 

        <div class="row">

            <h4>developing @ cohere.city/</h4>
            <h4>now on github, codepen, and twitter</h4>

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

