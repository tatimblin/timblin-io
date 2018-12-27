<template>
    <div class="labsnav">
        <div class="labsnav__nav">
            <div @click="updateDirection('prev')">
                <nuxt-link :to="`/labs/${nav.prev}`">
                    <ui-arrow direction="left"></ui-arrow>
                </nuxt-link>
            </div>
            <div @click="updateDirection('next')">
                <nuxt-link :to="`/labs/${nav.next}`">
                    <ui-arrow></ui-arrow>
                </nuxt-link>
            </div>
        </div>
        <div class="labsnav__title">
            <h4>{{title}}</h4>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import UiArrow from '~/components/UiArrow.vue';

export default {
    components: {
        UiArrow,
    },
    props: ['title', 'nav'],
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
