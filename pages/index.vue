<template>
  <div class="site">
    <site-header/>
    <lab-list/>
  </div>
</template>

<script>
import SiteHeader from '~/components/site/SiteHeader.vue';
import LabList from '~/components/site/LabList.vue';

export default {
  layout: 'site',
  components: {
    SiteHeader,
    LabList,
  },
}
</script>
