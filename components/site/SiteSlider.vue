<template>
    <section class="slider large-width">
        <div class="row">
            <slot></slot>
            <div class="slider-nav">
                <div class="slider-nav-prog"></div>
                <div class="slider-nav-ctrl">
                    * *
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
  components: {
  },
}
</script>

<style lang="scss">
.slider {
    &-nav {
        &-prog {
            position: relative;
            width: 50%;
            margin: 0 auto;

            &:before {
                content: '';
                position: absolute;
                width: 100%; height: 1px;
                top: 1px; left: 0;
                background-color: #2b2b2b;
            }
            &:after {
                content: '';
                position: absolute;
                width: 25%; height: 3px;
                background-color: #2b2b2b;
            }
        }
    }
}
</style>
