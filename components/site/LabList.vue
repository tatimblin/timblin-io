<template>
    <transition-group
      tag="section"
      class="list container"
      v-bind:css="false"
      @enter="enter"
      @leave="leave"
      appear
    >
      <div class="list-item--wrap four" v-for="lab in labs" :key="lab.date">
        <lab-list-item :item="lab"></lab-list-item>
      </div>
    </transition-group>
</template>

<script>
import TweenMax from 'gsap';
import { mapGetters } from 'vuex';
import LabListItem from '~/components/site/LabListItem.vue';

export default {
  components: {
    LabListItem,
  },
  computed: {
    ...mapGetters(['labs'])
  },
  methods: {
    enter (el, done) {
      TweenMax.staggerTo(".list-item--wrap", 0.6, {
        opacity: 1,
        ease: Sine.easeOut,
        delay: 1.3,
				onComplete: done
      }, 0.3);
    },
    leave (el, done) {
      TweenMax.staggerTo(".list-item--wrap", 0.6, {
        opacity: 0,
        ease: Sine.easeOut,
        delay: 0.9,
				onComplete: done
      }, 0.3);
    },
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_variables.scss';

.list {
  margin-top: $spacing*2;
}
.list-item--wrap {
  opacity: 0;
}
</style>

