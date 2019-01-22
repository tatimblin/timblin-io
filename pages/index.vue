<template>
  <div id="site" class="site">
    <div class="container">
      <div class="site-header__intro six">
        <h4>developing at <a href="">Cohere.city</a></h4>
        <h4>now on <a href="">Github</a> and <a href="">Codepen</a>.</h4>
      </div>
    </div>

    <lab-list/>

  </div>
</template>

<script>
import TweenMax from 'gsap';
import LabList from '~/components/site/LabList.vue';
import SiteHeader from '~/components/site/SiteHeader.vue';

export default {
  head () {
    return {
      hidden: true,
    }
  },
  layout: 'site',
  transition: {
    name: 'fade',
    mode: 'out-in',
  },
  name: 'home',
  components: {
    LabList,
    SiteHeader
  },
  updated: function () {
    this.$nextTick(function () {
      this.hidden = false;
    })
  },
}
</script>

<style lang="scss">
@import '~assets/sass/utilities/_variables.scss';

.site-header__intro {
  padding-bottom: $spacing;
  border-bottom: 1px solid black;
}
</style>

