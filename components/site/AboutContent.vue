<template>

<section class="about-content large-width">

    <div class="row">
        <div class="about-content-slider">
            <div class="about-content-slider-gal">
                image
            </div>
            <div class="about-content-slider-txt">
                <h5>01/05</h5>
                <br/>
                <h3>title</h3>
                <p>A little tid-bit about the photo A little tid-bit about the photo A little tid-bit about the photo</p>
            </div>
        </div>
    </div>

</section>

</template>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_variables.scss';

.about-content {
    &-slider {
        display: flex;
        flex-direction: column;

        @include query ($medium-width) {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        & > div {
            width: 100%;

            @include query ($medium-width) {
                width: calc(50% - 10px);
            }
        }
        &-gal {
            height: 250px;
            background-color: purple;

            @include query ($medium-width) {
                height: 400px;
            }
        }
        &-txt {
            padding: $spacing 0;

            @include query ($medium-width) {
                padding: 0 $spacing*2;
            }
        }
    }
}

</style>
