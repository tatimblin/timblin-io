<template>
    <div class="labsnav">
        <div class="labsnav__nav">
            <div @click="newSlide('prev')">
                <nuxt-link :to="`/labs/${nav.prev}`">
                    <ui-arrow direction="left"></ui-arrow>
                </nuxt-link>
            </div>
            <div @click="newSlide('next')">
                <nuxt-link :to="`/labs/${nav.next}`">
                    <ui-arrow></ui-arrow>
                </nuxt-link>
            </div>
        </div>
        <div class="labsnav__title">
            <transition
                v-bind:css="false"
                @leave="leave"
                @after-leave="afterLeave"
                @enter="enter"
            >
                <h4 id="lab-title" v-if="show">{{ title }}</h4>
            </transition>
        </div>
    </div>
</template>

<script>
import TweenMax from 'gsap';
import { mapMutations } from 'vuex';
import UiArrow from '~/components/UiArrow.vue';

export default {
    components: {
        UiArrow,
    },
    data() {
        return {
            show: true,
            dir: 'next',
        };
    },
    props: ['title', 'nav'],
    methods: {
        newSlide (dir) {
            this.show = false;
            this.dir = dir
            console.log('newSlider')
        },
        leave: function (el, done) {
            let mySplitText = new SplitText("#lab-title", {type: "words, chars"});
			TweenMax.staggerTo(mySplitText.chars, 0.5, {
				opacity: 0, 
				ease:Back.easeOut,
				onComplete: done
			}, 0.04);
        },
        afterLeave (el) {
            this.updateDirection(this.dir)
            this.show = true;
        },
        enter: function (el, done) {
            let mySplitText = new SplitText("#lab-title", {type: "words, chars"});
			TweenMax.staggerFrom(mySplitText.chars, 0.6, {
				opacity: 0,
				y: 10,
                rotationY: 45,
                rotation: 15,
                ease:Back.easeOut,
                delay: 1.2,
				onComplete: done
            }, 0.02);
        },
        ...mapMutations(['updateDirection']),
    }
}
</script>


<style scoped lang="scss">
@import '~assets/sass/utilities/_variables.scss';

.labsnav {
    display: flex;
    align-items: baseline;

    &__nav {
        display: flex;
        border-right: 1px solid $black;

        div {
            padding: 5px $spacing/2;
        }
    }
    &__title {
        padding: 0 $spacing/2;
    }
}
</style>
