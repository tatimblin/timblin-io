<template>
  <section class="slider">
    <div class="container">
      <div class="slider__gal twelve">
        <div  class="slider__gal__item"
              v-for="(slide, index) in slides[selectedGroup]"
              :key="index"
              :style="{ backgroundImage: 'url(' + slide.thumbnail + ')' }"
              @click="triggerUpdateProcess(slide)"
        >
        </div>
      </div>
      <div class="slider__ctrl twelve nested">
        <div class="slider__ctrl__prog six">
          <div class="slider__ctrl__prog__bar" ref="progBar"></div>
        </div>
        <div class="slider__ctrl__nav one">
          <div class="slider__ctrl__nav__prev" role="img" alt="previous" @click="changeSlide('prev')">
            <ui-arrow direction="left"/>
          </div>
          <div class="slider__ctrl__nav__next" role="img" alt="next" @click="changeSlide('next')">
            <ui-arrow/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';
import { TimelineLite } from 'gsap';
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
      timeline: null,
      delay: null,
    }
  },
  created() {
    // Group process items into groups of 4
    const count = 4;
    const thumbnail = this.items.map(a => a);
    var newArray = [];
    while (thumbnail.length > 0) {
      newArray.push(thumbnail.splice(0, count)); 
    }
    this.slides = newArray;
  },
  mounted() {
    const progBar = document.querySelector('.slider__ctrl__prog__bar');
    this.timeline = new TimelineLite({
      onComplete: () => this.timeline.restart()
    });

    this.timeline.from(progBar, 4, {
      scaleX: 0,
      transformOrigin: 'left',
      ease: Expo.easeInOut,
    });
    this.timeline.call(this.changeSlide, ['auto'], this);
    this.timeline.to(progBar, 1, {
      scale: 0,
      transformOrigin: 'right',
      ease: Expo.easeInOut,
    });
  },
  methods: {
    ...mapMutations(['updateProcess']),
    changeSlide(dir) {
      // For when buttons are pressed.
      const l = this.slides.length - 1;
      if (dir === 'prev' && this.selected === 0) {
          this.selected = l;
      } else if (dir === 'prev') {
          --this.selected;
      } else if (this.selected === l) {
          this.selected = 0;
      } else {
          ++this.selected;
      }
      if (dir != 'auto') {
        this.timeline.restart()
      }
    },
    triggerUpdateProcess (slide) {
      this.updateProcess(slide.title)
      this.$router.push({ name: 'process', hash: `#step-${slide.index}`})
    }
  },
  computed: {
    selectedGroup: function () {
      return this.selected;
    }
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

    a {
      display: contents;
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
      background-size: cover;
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
        transform: scaleX(1);
        //transform-origin: left ;
      }
    }
  }
}
</style>
