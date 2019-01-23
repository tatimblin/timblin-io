<template>
    <div class="labsui">
        <div class="labsui__nav">
            <labs-nav :title="thisLab.title" :nav="nav"></labs-nav>
            <labs-mode :url="thisLab._path"></labs-mode>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LabsNav from '~/components/labs/LabsNav.vue';
import LabsMode from '~/components/labs/LabsMode.vue';

export default {
    components: {
        LabsNav,
        LabsMode,
    },
    computed: {
        ...mapGetters(['nav', 'thisLab']),
    },
    head () {
        return {
            title: this.thisLab.title,
        }
    }
};
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_variables.scss';

.labsui__nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: baseline;
    max-width: $large-width;
    margin: 0 auto;
    padding: $spacing/2 0;

    @include query ($small-width) {
        flex-direction: row;
    }
}
</style>
