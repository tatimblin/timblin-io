<template>
  <section class="container">
    <div class="header">
      <h1>Interactive Labs</h1>
      <h2>a collection of front-end experiences using motion to engage audiences, by interaction designer Tristan Timblin.</h2>
      <div class="header__callout columns twelve">
        <div class="columns six">
          <h4>developing at <a href="https://cohere.city/">Cohere.city</a></h4>
          <h4>now on <a href="https://github.com/tatimblin" target="_blank">github</a> and <a href="https://codepen.io/tatimblin" target="_blank">codepen</a></h4>
        </div>
      </div>
      <site-button>
        <nuxt-link to="/">labs</nuxt-link>
      </site-button>
      <site-button>
        <nuxt-link to="projects">projects</nuxt-link>
      </site-button>
    </div>
    
  </section>
</template>

<script>
import SiteButton from '~/components/general/SiteButton.vue';

export default {
  components: {
    SiteButton,
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_variables.scss';

.header {
  margin: $spacing*2 0 0 0;

  &__callout > div {
    margin-left: 0;
    padding: $spacing 0;
    border-bottom: 1px solid $black;
  }
}
</style>
