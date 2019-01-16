<template>
<section>
  <div class="project">
    <div class="project__view container">
      <div class="project__nav">
        <div class="project__nav__vert">
          <div @click="changeProject('prev')">previous</div>
          <div @click="changeProject('next')">next</div>
        </div>
      </div>
      <div class="project__view__slider twelve" @click="removeImage()">
        <transition-group name="images">
          <img 
            v-for="(image, index) in project.thumbnail"
            :key="index"
            :src="image"
            :alt="project.title"
          >
        </transition-group>
      </div>
    </div>
  </div>
  <div class="desc container">
    <div class="desc__title columns twelve">
      <h4><nuxt-link :to="project._path">{{ project.title }}</nuxt-link></h4>
      <p>{{ project.team }} • {{ project.date | year }}</p>
    </div>
  </div>
</section>
</template>

<script>
import moment from 'moment';

export default {
  data () {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/projects/posts/', false, /\.json$/);

    const projects = context.keys().map(key => ({
        ...context(key),
        _path: `/projects/${key.replace('.json', '').replace('./', '')}`
    }));
    return {
      projects,
      index: 0,
    };
  },
  methods: {
    changeProject (dir) {
      let p = this.projects
      let i = this.index

      if (dir == 'next' && p.length - 1 == i) {
        i = 0
      } else if (dir == 'next') {
        i = i + 1
      } else if (dir == 'prev' && i == 0) {
        i = p.length - 1
      } else {
        i = i - 1
      }

      this.index = i
      console.log(this.index);
    },
    removeImage () {
      let arr = this.project.thumbnail
      console.log(arr.length)
      if (arr.length == 0) {
        this.changeProject('next')
        console.log('HEY!')
      } else {
        arr.pop()
      }
    },
  },
  computed: {
    project: function () {
      return this.projects[this.index]
    }
  },
  filters: {
    year: function (date) {
      return moment(date).year();
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~assets/sass/utilities/_variables.scss';
$expanded-medium-width: calc(#{$medium-width} + 60px);

.project {
  position: relative;
  background-color: $bg;

  &__nav {
    position: absolute;
    top: -$spacing*1.5; left: 0;
    width: 100%; height: 100%;
    z-index: 1001;

    @include query ($medium-width) {
      top: 0;
      padding-top: $spacing;
      transform: translateX(-100%);
    }

    &:after { // Project view rounded cap
      content: '';
      position: absolute;
      width: $spacing/2; height: 100%;
      top: 0; right: -$spacing;

      @include query ($medium-width) {
        background-color: $bg;
        border-radius: 15px 0 0 15px;
      }
    }

    &__vert {
      position: relative;
      display: flex;
      justify-content: center;
      transform-origin: 100% 0%;

      @include query ($medium-width) {
        justify-content: flex-end;
        transform: rotate(-90deg) translateY(calc(-100% + 15px));
      }

      div {
        margin: 0 7px;
        padding: 5px 0 7px $spacing/2;
      }
    }
  }
  &__view {
    position: relative;
    grid-row-gap: 0; // override grid, so image can be flush with container.

    &:before { // Covers up project view background on the left side
      content: '';
      position: absolute;
      width: 100vw; height: 100%;
      top: 0; left: 0;
      transform: translateX(calc(-100% + 29px));
      z-index: 1000;

      @include query ($medium-width) {
        background-color: $bg-site;
      }
    }

    &__slider {
      position: relative;
      height: calc(50vh + 15px);
      min-height: 350px + $spacing;
      max-height: 600px + $spacing;
      padding-top: $spacing;
      text-align: center;
      z-index: 10;
      overflow: hidden;

      img {
        position: absolute;
        height: 50vh;
        min-height: 350px;
        max-height: 600px;
        bottom: 0;
        object-fit: contain;
        object-position: bottom;
        transform: translateX(-50%);
      }
    }
  }
}

.desc {
  padding: $spacing 0;

  &__title {
    text-align: center;
  }
}
</style>
