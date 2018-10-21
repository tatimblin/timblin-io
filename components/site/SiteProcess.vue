<template>
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

      <nuxt-link to="process" class="btn-wrap">

        <site-button label="Process"/>

      </nuxt-link>

    </div>

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

<style lang="scss" scoped>

</style>

