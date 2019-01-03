<template>
  <div class="site">
    proj
    <section class="headline container">
      <div class="column tweleve">
        <h1>Trusting the process</h1>
        <h2>Lorem ipsum dolor sit amit, consectetur adipiscing.</h2>
      </div>
      <div class="callout columns twelve">
        <div class="columns three">
          <h4>UX</h4>
          <p>Lorem ipsum dolor sit amit, consectetur adipiscing.</p>
        </div>
        <div class="columns three">
          <h4>Font-End</h4>
          <p>Lorem ipsum dolor sit amit, consectetur adipiscing.</p>
        </div>
      </div>
    </section>
    <div class="container">
      <hr class="columns six">
    </div>
  </div>
</template>

<script>

export default {
  layout: 'site',
}
</script>

<style lang="scss">
@import '~assets/sass/utilities/_variables.scss';

.site {
  margin-top: 120px;
}

.callout {
  padding: $spacing 0;
}
</style>

