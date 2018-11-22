<template>
    <div class="labsui">
        <labs-nav></labs-nav>
        <labs-mode></labs-mode>
    </div>
</template>

<script>
import LabsNav from '~/components/labs/LabsNav.vue';
import LabsMode from '~/components/labs/LabsMode.vue';

export default {
    components: {
        LabsNav,
        LabsMode,
    },
}
</script>
