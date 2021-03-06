<template>
    <section class="slider large-width">
        <div class="row">
            <transition 
                name="list" 
                tag="div"
            >
                <div class="slider-view">
                    <div 
                        v-for="(slide) in slides[selectedGroup]"
                        :key="slide"
                        class="slider-view-cell"
                    >
                        {{slide}}
                    </div>
                </div>
            </transition>
            <div class="slider-nav">
                <div class="slider-nav-ctrl">
                    <div class="slider-nav-ctrl-prev" role="img" alt="previous" @click="currentSlide('prev')"></div>
                    <div class="slider-nav-ctrl-next" role="img" alt="next" @click="currentSlide('next')"></div>
                </div>
                <div class="slider-nav-prog">
                    <div class="slider-nav-prog-bar" :style="{ width: timer + '%'}"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TweenMax from 'gsap';

export default {
  components: {
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
      percentComplete: function () {
          return this.timer.toFixed(0);
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
    &-view {
        display: grid;
        grid-column-gap: $spacing;
        grid-template-columns: repeat(auto-fill, minmax(calc(25% - 30px), 1fr));
        grid-auto-rows: 1fr;

        &:before {
            content: '';
            width: 0;
            padding-bottom: 100%;
            grid-row: 1/1;
            grid-column: 1/1;
        }

        & > *:first-child {
            grid-row: 1/1;
            grid-column: 1/1;
        }
        .slider-view-cell {
            background-color: orange;
        }
    }
    &-nav {
        position: relative;
        padding-top: $spacing;

        &-prog {
            position: relative;
            width: 50%;
            margin: 0.5em auto;

            &:before {
                content: '';
                position: absolute;
                width: 100%; height: 1px;
                left: 0;
                background-color: lighten(#2b2b2b, 65%);
                z-index: 99;
            }
            &-bar {
                content: '';
                position: absolute;
                height: 1px;
                background-color: lighten(#2b2b2b, 0%);
                transition: all 50ms $ease;
                z-index: 100;
            }
        }
        &-ctrl {
            position: absolute;
            display: flex;
            justify-content: flex-end;
            right: 0;

            > div {
                width: 12px; height: 12px;
                margin-left: $spacing/2;
                background-image: url('~/assets/ui/arrow.svg');
                background-repeat: no-repeat;
                cursor: pointer;
                transition: opacity 300ms $ease;

                &:hover {
                    opacity: 0.66;
                }
            }
            &-prev {
                transform: rotate(180deg);
            }
        }
    }
}
</style>
