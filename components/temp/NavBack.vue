<template>
    <section class="container large-width">

        <div class="row">

            <div class="nav-back">

                <nuxt-link to="/">timblin.io</nuxt-link>

            </div>

        </div>

    </section>
</template>

<script>

export default {
}
</script>

<style lang="scss">
@import '~assets/sass/utilities/_variables.scss';

.nav-back {
    position: relative;
    padding: 2.25rem 0 0 $spacing/2+8px;

    &:before {
        content: '';
        position: absolute;
        width: 8px; height: 8px;
        top: 2.75rem; left: 0;
        background-image: url('~/assets/ui/arrow.svg');
        background-repeat: no-repeat;
        transform: rotate(180deg) translateY(25%);
    }

    a {
        font-weight: 700;
    }
}

</style>

