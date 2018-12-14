<template>
  <div class="app" :class="{ 'show-ui' : showUi }">

    <button class="app__toggle" @click="toggleUi()">
        Close
    </button>

    <labs-ui ref="labsUi"></labs-ui>

    <div class="app__content" :style="{ paddingTop: uiHeight + 'px' }">
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
      uiHeight: 65,
    };
  },
  mounted() {
    this.$nextTick(this.setUiHeight());
  },
  methods: {
    toggleUi() {
      this.showUi = !this.showUi;
      this.setUiHeight()
    },
    setUiHeight() {
      if(this.showUi == true) {
        this.uiHeight = this.$refs.labsUi.$el.clientHeight;
      } else {
        this.uiHeight = 0;
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
    left: 50%;
    transform: translateX(-50%);
    z-index: 99999;
  }
  .labsui {
    position: fixed;
    width: 100%;
    top: 0; 
    background-color: $app-bg;
    transform: translateY(-100%);
    transition: all 900ms 150ms $ease;
    z-index: 99998;
  }

  &__content { // Generic stying to always be present on labs wrapper
    max-width: 100%;
    margin: 0 auto;
    padding-top: 0px;
    transition: all 900ms 150ms $ease;

    > section, > div {
      margin: 0;
      transition: all 900ms 150ms $ease;
      overflow: hidden;
    }
  }

  footer {
    padding: $spacing/2 0;
    text-align: center;
    transition: all 900ms 150ms $ease;
  }

  &.show-ui { // Specialized styling for when UI is present

    .labsui {
      transform: translateY(0%);
    }

    .app__content {
      max-width: $large-width;
      > section, > div {
        margin: 0 $spacing/2;
        border-radius: 15px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 60px 0px;
      }
    }

    footer {
      padding: $spacing 0;
    }
  }
}
</style>
