<template>
    <div class="row">
        <div class="divider" :class="{ half : half }"></div>
    </div>
</template>

<script>
export default {
    props: ['half']
}
</script>


<style lang="scss">
@import '~assets/sass/utilities/_variables.scss';

.divider {
    width: 100%; height: 1px;
    background-color: $black;

    &, .half {
        width: calc(50% - 10px);
    }
}
</style>

