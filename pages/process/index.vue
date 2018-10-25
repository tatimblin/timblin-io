<template>
  <div class="process">

    <nav-back/>

    <process-list/>
    
  </div>
</template>

<script>
import NavBack from '~/components/site/NavBack.vue'
import ProcessList from '~/components/site/ProcessList.vue'

export default {
  layout: 'default',
  transition: 'fade',
  components: {
    NavBack,
    ProcessList
  },
  data () {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/process/items/', false, /\.json$/);

    const items = context.keys().map(key => ({
        ...context(key),
        _path: `/process/${key.replace('.json', '').replace('./', '')}`
    }));
    return {
      items
    }
  }
};
</script>

<style lang="scss">

</style>
