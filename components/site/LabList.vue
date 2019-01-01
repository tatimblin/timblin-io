<template>
  <section class="list container">
    <lab-list-item class="columns three" v-for="lab in labs" :key="lab.date" :item="lab">
    </lab-list-item>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import LabListItem from '~/components/site/LabListItem.vue';

export default {
  components: {
    LabListItem,
  },
  computed: {
    ...mapGetters(['labs'])
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_variables.scss';

.list {
  margin-top: $spacing*2;
  margin-bottom: $spacing*2;
}
</style>

