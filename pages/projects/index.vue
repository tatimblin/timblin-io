<template>
  <div class="site">
    <project-list>

    </project-list>
    <section class="headline container">
      <div class="twelve">
        <h1>Trusting the process</h1>
        <h2>Lorem ipsum dolor sit amit, consectetur adipiscing.</h2>
      </div>
      <div class="twelve">
        <div class="callout nested">
          <div class="three">
            <h4>UX</h4>
            <p>Lorem ipsum dolor sit amit, consectetur adipiscing.</p>
          </div>
          <div class="three">
            <h4>Font-End</h4>
            <p>Lorem ipsum dolor sit amit, consectetur adipiscing.</p>
          </div>
        </div>
      </div>
      <hr class="six">
    </section>

    <div class="container">
      <site-button>
        <nuxt-link to="/process">process</nuxt-link>
      </site-button>
    </div>

    <site-slider/>

  </div>
</template>

<script>
import ProjectList from '~/components/site/ProjectList.vue';
import SiteButton from '~/components/general/SiteButton.vue';
import SiteSlider from '~/components/general/SiteSlider.vue';

export default {
  layout: 'site',
  transition: 'fade',
  components: {
    ProjectList,
    SiteButton,
    SiteSlider,
  },
}
</script>

<style lang="scss">
@import '~assets/sass/utilities/_variables.scss';

.site {
  margin-top: $spacing*2;
}
</style>

