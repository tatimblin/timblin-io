<template>
  <div class="in-collab">
    <p>{{ date }}</p>
    <span v-if="name != ''">
      <p>• with</p>
      <a :href="url" target="_blank">
        <img :src="pic" alt="j">
        <p>{{ name }}</p>
      </a>
    </span>
  </div>
</template>

<script>
export default {
  props: ['name', 'url', 'pic', 'date']
}
</script>


<style lang="scss">
  @import '~assets/sass/utilities/_variables.scss';

  .in-collab, span {
    display: flex;
    align-items: center;
    img, p {
      margin: 0 4px;
      padding: 0;
    }
    img {
      width: 28px; height: 28px;
      border: 1px solid $white;
      border-radius: 50%;
      box-sizing: content-box;
    }
    a {
      display: flex;
      align-items: center;
    }
  }
</style>
