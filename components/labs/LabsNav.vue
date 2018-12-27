<template>
    <div class="labsnav">
        <div class="labsnav__nav">
            <div @click="updateDirection('prev')">
                <nuxt-link :to="`/labs/${nav.prev}`">
                    <img src="~assets/ui/arrow.svg" alt="Previous Demo">
                </nuxt-link>
            </div>
            <div @click="updateDirection('next')">
                <nuxt-link :to="`/labs/${nav.next}`">
                    <img src="~assets/ui/arrow.svg" alt="Next Demo">
                </nuxt-link>
            </div>
        </div>
        <div class="labsnav__title">
            <h4>{{title}}</h4>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    props: ['title', 'nav'],
    computed: {
        arrow() {
            return require('./ui/arrow.svg');
        },
    },
    methods: {
        ...mapMutations(['updateDirection'])
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
