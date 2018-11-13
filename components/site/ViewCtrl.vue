<template>
    <div class="slider-ctrl">
        <h6><span @click="changeSlide('prev')">prev</span> — <span @click="changeSlide('next')">next</span></h6>
    </div>
</template>

<script>
export default {
    methods: {
        changeSlide: function (dir) {
            var i = this.index
            if (this.type === 'projects') {
                var l = this.projects.length - 1
            } else {
                var l = this.$store.state.labs.length - 1
            }
            
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
            
            if (this.type === 'projects') {
                this.post = this.projects[i]
            } else {
                this.post = this.$store.state.labs[i]
            }
        }
    }
}
</script>

<style lang="scss">
@import '~assets/sass/utilities/_variables.scss';

.slider-ctrl {
    height: 30px;
    z-index: 1000;

    @include query ($small-width) {
        position: absolute;
        width: 430px;
        bottom: -30px;
        padding: 15px 30px;
        float: left;
        text-align: right;
        line-height: 0em;
        transform-origin: 0 0;
        transform: rotate(-90deg);
        background-color: #fff;
    }

    @include query ($large-width) {
        height: 60px;
        bottom: -60px;
        padding: 30px 30px;
        transform: translateX(-15px) rotate(-90deg);
    }

    @include query ($xlarge-width) {
        transform: translateX(-45px) rotate(-90deg);
    }

    span {
        cursor: pointer;
    }
}
</style>


