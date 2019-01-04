<template>
  <div class="site">
    <lab-list/>
  </div>
</template>

<script>
import LabList from '~/components/site/LabList.vue';

export default {
  layout: 'site',
  transition: 'fade',
  components: {
    LabList,
  },
}
</script>

<style>
</style>

