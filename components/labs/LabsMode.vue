<template>
    <div class="labsmode">
        <div class="labsmode__item">
            <nuxt-link :to="`/articles/${url}`">
                Article
            </nuxt-link>
        </div>
        <div class="labsmode__item">
            <nuxt-link :to="`/labs/${url}`">
                Lab
            </nuxt-link>
        </div>
        <div class="labsmode__item">
            <a :href="`https://github.com/tatimblin/timblin-io/blob/master/pages/labs${slug}.vue`" target="_blank">
                Github
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['url'],
    data () {
        return {
            slug: 'hi',
        };
    },
    created () {
        this.slug = this.$route.name.replace('-', '/').substring(4);
    },
}
</script>


<style scoped lang="scss">
@import '~assets/sass/utilities/_variables.scss';

.labsmode {
    display: flex;
    justify-content: space-between;

    &__item {
        padding: 5px $spacing/2;
        font-family: $font-family;
    }
}
</style>
