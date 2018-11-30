<template>
    <div class="labsui">
        <labs-nav :title="labs[0].title" :nav="nav"></labs-nav>
        <labs-mode :labUrl="labs[0]._path" :articleUrl="labs[0]._pathArticles"></labs-mode>
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
