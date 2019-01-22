<template>
  <section class="container" :style="{visibility: visibility}">
    <div class="header twelve">
      <transition
        v-bind:css="false"
        @enter="enterHeadline"
        @after-enter="afterEnter"
        appear
      >
        <h1 id="header-headline" class="header-headline">{{ headline }}</h1>
      </transition>
      <transition
        v-bind:css="false"
        @enter="enterSubline"
        @after-enter="afterEnter"
        appear
      >
        <slot></slot>
      </transition>
    </div>
  </section>
</template>

<script>
import TweenMax from 'gsap';

export default {
  props: ['headline'],
  data () {
    return {
      visibility: 'hidden',
      splitHeadline: null,
      splitSubline: null,
    };
  },
  mounted () {
    this.visibility = 'visible';
  },
  methods: {
    enterHeadline: function (el, done) {
      this.splitHeadline = new SplitText("#header-headline", {type: "words"});
			TweenMax.staggerFrom(this.splitHeadline.words, 0.8, {
        y: 110,
        cycle: {
          opacity: ['0', '1', '1']
        },
        delay: 0.3,
        ease:Power3.easeOut,
				onComplete: done
      }, 0);
    },
    enterSubline: function (el, done) {
      this.splitsubline = new SplitText("#header-subline", {type: "lines"});
			TweenMax.staggerFrom(this.splitsubline.lines, 0.4, {
        opacity: 0,
        x: -12,
        ease:Power3.easeOut,
        delay: 0.6,
				onComplete: done
      }, 0.2);
    },
    afterEnter: function () {
      this.splitHeadline.revert()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_variables.scss';

.header {
  margin: $spacing*2 0 0 0;

  &-headline {
    overflow: hidden;
  }

  &__callout > div {
    margin-left: 0;
    padding: $spacing 0;
    border-bottom: 1px solid $black;
  }
}
</style>
