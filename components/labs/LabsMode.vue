<template>
    <div class="labsmode">
        <div class="labsmode__item" v-if="$route.name !== 'articles-slug'">
            <nuxt-link :to="`/articles/${url}`">
                Article
            </nuxt-link>
        </div>
        <div class="labsmode__item" v-if="$route.name == 'articles-slug'">
            <nuxt-link :to="`/labs/${url}`">
                Lab
            </nuxt-link>
        </div>
        <div class="labsmode__item">
            <a :href="`https://github.com/tatimblin/timblin-io/blob/master/pages/labs/${url}.vue`" target="_blank">
                Github
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['url'],
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
