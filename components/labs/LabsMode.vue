<template>
    <div class="labsmode">
        <div class="labsmode__item" v-if="$route.name !== 'articles-slug'">
            <nuxt-link :to="`/articles/${url}`" @click.native="updateDirection('article')">
                Article
            </nuxt-link>
        </div>
        <div class="labsmode__item" v-if="$route.name == 'articles-slug'">
            <nuxt-link :to="`/labs/${url}`" @click.native="updateDirection('article')">
                Lab
            </nuxt-link>
        </div>
        <div class="labsmode__item">
            <a :href="`https://github.com/tatimblin/timblin-io/blob/master/pages/labs/${url}.vue`" target="_blank">
                Github
            </a>
        </div>
        <div class="labsmode__item">
            <nuxt-link to="/">
                Home
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    props: ['url'],
    methods: {
        ...mapMutations(['updateDirection']),
    },
}
</script>


<style scoped lang="scss">
@import '~assets/sass/utilities/_variables.scss';

.labsmode {
    display: flex;
    justify-content: flex-start;

    &__item {
        padding: 5px $spacing/2;
        font-family: $font-family;

        &:last-child {
            display: none;
            @include query ($medium-width) {
                display: block;
            }
        }
    }
}
</style>
