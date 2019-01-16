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
      let list = document.querySelectorAll('.list-item--wrap');
      const tm = TweenMax.staggerfrom(list, 0.5, {
				opacity: 0, 
				ease:Back.easeOut,
				onComplete: done
			}, 0.04);
    },
    leave (el, done) {
      let list = document.querySelectorAll('.list-item--wrap');
      const tm = TweenMax.staggerto(list, 0.5, {
				opacity: 0, 
				ease:Back.easeOut,
				onComplete: done
			}, 0.04);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_variables.scss';

.list {
  margin-top: $spacing*2;
}
</style>

