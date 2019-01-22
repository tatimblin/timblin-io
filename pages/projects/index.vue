<template>
  <div class="site">

    <site-header headline="Interactive Labs">
      <h2 id="header-subline">a collection of front-end experiences using motion, by interaction developer Tristan Timblin.</h2>
    </site-header>

    <project-list>

    </project-list>

    
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
import SiteHeader from '~/components/site/SiteHeader.vue';

export default {
  layout: 'site',
  transition: 'fade',
  components: {
    ProjectList,
    SiteButton,
    SiteSlider,
    SiteHeader
  },
}
</script>

<style lang="scss">
@import '~assets/sass/utilities/_variables.scss';

</style>

