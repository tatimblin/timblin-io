<template>
    <div class="labsnav">
        <div class="labsnav__nav">
            <div>
                <nuxt-link :to="nav.prev">
                    prev
                </nuxt-link>
            </div>
            <div>
                <nuxt-link :to="nav.next">
                    next
                </nuxt-link>
            </div>
        </div>
        <div class="labsnav__title">
            <h4>{{title}}</h4>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'nav'],
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
