<template>
    <div class="slider-ctrl">
        <h6><span @click="$emit('prev-slide')">prev</span> — <span @click="$emit('next-slide')">next</span></h6>
    </div>
</template>

<script>
export default {
    methods: {
        
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


