<template>
  <div class="app" :class="{ 'show-ui' : showUi }">

    <button class="app__toggle" @click="toggleUi()">
        Close
    </button>

    <labs-ui ref="labsUi"></labs-ui>

    <div class="app__content" :class="{'app__content--article' : $route.name == 'articles-slug'}" :style="stylesUi">
        <nuxt/>
    </div>

    <footer>
      <nuxt-link to="/">timblin.io</nuxt-link>
    </footer>

  </div>
</template>

<script>
import LabsUi from '~/components/labs/LabsUi.vue'
import AppFooter from '~/components/AppFooter.vue';

export default {
  components: {
    LabsUi,
    AppFooter,
  },
  data() {
    return {
      showUi: true,
      stylesUi: {
        marginTop: '65px',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 30px 60px 0px',
        borderRadius: '15px'
      },
    };
  },
  mounted() {
    this.$nextTick(this.setUiHeight());
  },
  methods: {
    toggleUi() {
      const css = this.stylesUi;
      this.showUi = !this.showUi;
      if (this.showUi) {
        css.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 30px 60px 0px';
        css.borderRadius = '15px';
      } else {
        css.boxShadow = 'none';
        css.borderRadius = '0px';
      }
      this.setUiHeight()
    },
    setUiHeight() {
      if(this.showUi == true) {
        this.stylesUi.marginTop = this.$refs.labsUi.$el.clientHeight + 'px';
      } else {
        this.stylesUi.marginTop = 0;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_variables.scss';
$app-bg: #ededed;

.app {
  background-color: $app-bg;

  &__toggle {
    position: fixed;
    top: 0; left: 50%;
    transform: translateX(-50%);
    z-index: 99999;
  }
  .labsui {
    position: fixed;
    width: 100%;
    top: 0; 
    background-color: $app-bg;
    transform: translateY(-100%);
    transition: all 900ms 50ms $ease;
    z-index: 99998;
  }

  &__content { // Generic stying to always be present on labs wrapper
    max-width: 100%;
    margin: 0 auto;
    padding-top: -15px;
    transition: all 900ms 50ms $ease;
    overflow: hidden !important;

    &.app__content--article { // Hide border styles for articles
      box-shadow: none !important;
      transition: all 900ms 50ms $ease, box-shadow 300ms $ease;
    }
  }

  footer {
    padding: $spacing/2 0;
    text-align: center;
    transition: all 900ms 50ms $ease;
  }

  &.show-ui { // Specialized styling for when UI is present

    .labsui {
      transform: translateY(0%);
    }

    .app__content {
      max-width: $large-width;
    }

    footer {
      padding: $spacing 0;
    }
  }
}
</style>
