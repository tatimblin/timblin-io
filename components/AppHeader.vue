<template>
  <div class="app-header container large-width">
      <div class="content-block">
        <h1>Simple CMS Template</h1>
        <nuxt-link exact to="/">Home</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['page'])
}
</script>