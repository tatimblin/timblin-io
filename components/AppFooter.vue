<template>
    <footer class="medium-width">
        <div class="footer-item">
            <p>One of many sites by Tristan Timblin</p>
        </div>
        <div class="footer-item">
            <p>© TATIMBLIN LLC, 2018</p>
        </div>
    </footer>
</template>

<style lang="scss">
@import '~assets/sass/utilities/_variables.scss';

footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: $spacing;

    @include query ($small-width) {
        flex-direction: row;
    }

    .footer-item {
        font-family: $font-family;
    }
}
</style>
