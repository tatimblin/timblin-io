<template>
    <div class="labsui">
        <labs-nav :title="thisLab.title" :nav="nav"></labs-nav>
        <labs-mode :url="thisLab._path"></labs-mode>
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
        ...mapGetters(['labs', 'nav', 'thisLab']),
    },
    data() {
        return {
            //labs: this.$store.state.labs[0].path,
        }
    }
}
</script>
