<template>
    <section class="large-width">
        <div class="row">
            <footer class="content">
                <div class="footer-item">
                    <p>One of many sites by Tristan Timblin</p>
                </div>
                <div class="footer-item">
                    <p>© TATIMBLIN LLC, 2018</p>
                </div>
            </footer>
        </div>
    </section>
</template>

<style lang="scss">
@import '~assets/sass/utilities/_variables.scss';

footer {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include query ($medium-width) {
        flex-direction: row;
        justify-content: space-between;
    }

    .footer-item p {
        margin: 0;
        font-family: 'nimbus-sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    }
}
</style>
