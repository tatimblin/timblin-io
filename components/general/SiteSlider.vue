<template>
  <section class="slider">
    <div class="container">
      <div class="slider__gal twelve">
        <div  class="slider__gal__item">
        </div>
        <div  class="slider__gal__item">
        </div>
        <div  class="slider__gal__item">
        </div>
        <div  class="slider__gal__item">
        </div>
      </div>
      <div class="slider__ctrl twelve nested">
        <div class="slider__ctrl__prog six">
          <div class="slider__ctrl__prog__bar" ref="progBar"></div>
        </div>
        <div class="slider__ctrl__nav one">
          <div class="slider__ctrl__nav__prev" role="img" alt="previous" @click="currentSlide('prev')">
            <ui-arrow direction="left"/>
          </div>
          <div class="slider__ctrl__nav__next" role="img" alt="next" @click="currentSlide('next')">
            <ui-arrow/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { TimelineLite, Back } from 'gsap';
import UiArrow from '~/components/UiArrow.vue';

export default {
  components: {
    UiArrow,
  },
  data () {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/process/items/', false, /\.json$/);

    const items = context.keys().map(key => ({
        ...context(key),
        _path: `/process/${key.replace('.json', '').replace('./', '')}`
    }));
    return {
      items,
      timeline: null,
    }
  },
  mounted() {
    const progBar = document.querySelector('.slider__ctrl__prog__bar');
    this.timeline = new TimelineLite({
      onComplete: () => this.timeline.restart()
    });

    this.timeline.to(progBar, 1, {
      scale: 1.5,
    });
  }
}
</script>


<style lang="scss">
@import '~assets/sass/utilities/_variables.scss';

.slider {
  margin: $spacing 0;
  &__gal {
    display: grid;
    grid-gap: $spacing/2;
    grid-template-columns: repeat(auto-fill, minmax(calc(50% - 30px), 1fr));
    grid-auto-rows: 1fr;

    @include query ($small-width) {
      grid-template-columns: repeat(auto-fill, minmax(calc(25% - 30px), 1fr));
    }

    &:before {
      content: '';
      width: 100%;
      padding-bottom: 100%;
      grid-row: 1/1;
      grid-column: 1/1;
    }

    & > *:first-child {
      grid-row: 1/1;
      grid-column: 1/1;
    }

    &__item {
      background-color: yellow;
    }
  }
  &__ctrl {
    align-items: center;

    &__nav {
      display: flex;
      justify-content: space-between;
      grid-column: 7 / 12;

      @include query ($small-width) {
        grid-column: 12 / 13;
      }
    }
    &__prog {
      position: relative;
      grid-column: 3 / 6;

      @include query ($small-width) {
        grid-column: 4 / 10;
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%; height: 100%;
        top: 0; left: 0;
        background-color: lighten($black, 65%);
        z-index: -1;
      }

      &__bar {
        width: 100%; height: 1px;
        background-color: $black;
        transition: width 50ms linear;
      }
    }
  }
}
</style>
