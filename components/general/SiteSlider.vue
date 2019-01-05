<template>
  <section class="slider">
    <div class="container">
      <div class="slider__gal twelve">
        <div  class="slider__gal__item"
              v-for="(slide) in slides[selectedGroup]"
              :key="slide">
              {{ slide }}
        </div>
      </div>
      <div class="slider__ctrl twelve nested">
        <div class="slider__ctrl__prog six">
          <div class="slider__ctrl__prog__bar" :style="{ width: timer + '%'}"></div>
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
import TweenMax from 'gsap';
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
      slides: [],
      selected: 0,
      timer: 0,
    }
  },
  created() {
      // Group process items into groups of 4
      const count = 4;
      const titles = this.items.map(a => a.title);
      var newArray = [];
      while (titles.length > 0) {
        newArray.push(titles.splice(0, count)); 
      }
      this.slides = newArray;

      this.runTimer()
  },
  methods: {
      currentSlide(dir) {
          const l = this.slides.length - 1;
          if (dir === 'next' && this.selected === l) {
              this.selected = 0;
          } else if (dir === 'next' ) {
              ++this.selected;
          } else if (dir === 'prev' && this.selected === 0) {
              this.selected = l - 1;
          } else if (dir === 'prev') {
              --this.selected;
          }

          this.timer = 0;
      },
      runTimer() {
          this.count = setInterval(() => {
              this.timer++
              if (this.timer === 100) {
                  this.currentSlide('next')
              }
          }, 50)
      }
  },
  computed: {
      selectedGroup: function () {
          return this.selected;
      },
  },
  watch: {
      duration: function(newValue, done) {
          TweenMax.to(this.$data, 3, {timer: newValue}, {onComplete: this.slide});
      },
      delay: function(newValue, done) {
          TweenMax.to(this.$data, 1, {timer: newValue}, {onComplete: this.slide});
      },
  },
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
