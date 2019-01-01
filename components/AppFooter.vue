<template>
    <footer class="container">
        <div class="footer-item columns six">
            <p>One of many sites by Tristan Timblin</p>
        </div>
        <div class="footer-item columns six">
            <p>© TATIMBLIN LLC, 2018</p>
        </div>
    </footer>
</template>

<style lang="scss">
@import '~assets/sass/utilities/_variables.scss';

footer {

    .footer-item {
        @include query ($medium-width) {
            text-align: left;
            &:last-child {text-align: right;}
        }
        p {
            margin: 0;
            font-family: 'nimbus-sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        }
    }
}
</style>
