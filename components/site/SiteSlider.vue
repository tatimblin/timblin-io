<template>
    <section class="slider large-width">
        <div class="row">
            <div class="slider-view">
                <div 
                    v-for="item in selectItems"
                    :key="item.index"
                    class="slider-view-cell"
                >
                    {{ item.title }}
                </div>
            </div>
            <div class="slider-nav">
                <div class="slider-nav-ctrl">
                    <div class="slider-nav-ctrl-prev" role="img" alt="previous"></div>
                    <div class="slider-nav-ctrl-next" role="img" alt="next" @click="slide()"></div>
                </div>
                <div class="slider-nav-prog"></div>
            </div>
        </div>
    </section>
</template>

<script>

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
      start: 0,
      end: 4,
    }
  },
  methods: {
      slide() {
          if (this.start >= this.items.length - 4) {
              this.start = 0
          } else {
              this.start = this.start + 4
          }
          if (this.end >= this.items.length) {
              this.end = 4
          } else {
              this.end = this.end + 4
          }
          console.log0
      }
  },
  computed: {
      selectItems: function () {
          return this.items.slice(this.start, this.end)
      }
  }
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
        &-cell {
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
            &:after {
                content: '';
                position: absolute;
                width: 25%; height: 1px;
                background-color: lighten(#2b2b2b, 0%);
                box-shadow: 0px 0.1px 0.1px 0.2px #2b2b2b;
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
            }
            &-prev {
                transform: rotate(180deg);
            }
        }
    }
}
</style>
