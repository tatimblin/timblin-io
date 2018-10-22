<template>
  <section class="process large-width">

    <site-title headline="Trusting the Process">
      seeing digital product development through, from design to development.
    </site-title>

    <div class="row">

      <div class="callout">
        <div class="callout-item">
          <h4>UX</h4>
          <p>research backed design to connect scope with user's needs.</p>
        </div>
        <div class="callout-item">
          <h4>Front-End</h4>
          <p>understanding and executing on design to deliver the right digital product.</p>
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

