<template>
    <div class="labsnav">
        <div class="labsnav__nav">
            <div @click="updateDirection('slide-left')" @mouseover="updateDirection('slide-left')">
                <nuxt-link :to="`/labs/${nav.prev}`" @click.native="triggerTitle()">
                    <ui-arrow direction="left"></ui-arrow>
                </nuxt-link>
            </div>
            <div @click="updateDirection('slide-right')" @mouseover="updateDirection('slide-right')">
                <nuxt-link :to="`/labs/${nav.next}`" @click.native="triggerTitle()">
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
                appear
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
        };
    },
    props: ['title', 'nav'],
    methods: {
        triggerTitle () {
            this.show = false
        },
        leave: function (el, done) {
            let mySplitText = new SplitText("#lab-title", {type: "words, chars"});
			TweenMax.staggerTo(mySplitText.chars, 0.5, {
				opacity: 0, 
				ease:Back.easeOut,
				onComplete: done
			}, 0.02);
        },
        afterLeave (el) {
            this.show = true;
        },
        enter: function (el, done) {
            let mySplitText = new SplitText("#lab-title", {type: "words, chars"});
			TweenMax.staggerFrom(mySplitText.chars, 0.6, {
				opacity: 0,
				y: 3,
                rotationY: 15,
                rotation: 5,
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
            padding: 3px;
            a {
                padding: 2px 5px;
            }

            @include query ($small-width) {
                padding: 3px 10px;
            }
        }
    }
    &__title {
        padding: 0 $spacing/2;
    }
}
</style>
