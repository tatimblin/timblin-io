<template>

<section class="about-content large-width">
        <div class="about-content-slider">
            
            <div class="about-content-slider-gal">
                <view-ctrl
                    v-on:prev-slide="changeSlide('prev')"
                    v-on:next-slide="changeSlide('next')"
                ></view-ctrl>
                {{slide}}{{index}}
            </div>
            <div class="about-content-slider-txt">
                <h5>0{{index + 1}}/0{{slides.length}}</h5>
                <br/>
                <h3>{{ slides[index].title }}</h3>
                <p>A little tid-bit about the photo A little tid-bit about the photo A little tid-bit about the photo</p>
            </div>
        </div>

</section>

</template>

<script>
import ViewCtrl from '~/components/temp/ViewCtrl.vue';

export default {
    components: {
        ViewCtrl
    },
    data() {
        return {
            index: 0,
            slide: 'slideLeft',
            slides: [
                {
                    title: 'Elementary',
                },
                {
                    title: 'Middle',
                },
                {
                    title: 'High',
                },
                {
                    title: 'College',
                },
            ],
        };
    },
    methods: {
        changeSlide: function (dir) {
            var i = this.index
            var l = this.slides.length - 1
            
            if (dir === 'prev') {
                if (i === 0) {
                    i = l
                } else {
                    i = i - 1
                }
                this.slide = 'slideLeft'
            } else {
                if (i === l) {
                    i = 0
                } else {
                    i++
                }
                this.slide = 'slideRight'
            }
            this.index = i
        },
    }
}
</script>


<style lang="scss" scoped>
@import '~assets/sass/utilities/_variables.scss';

.about-content {
    &-slider {
        position: relative;
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
