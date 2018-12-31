<template>
  <div class="in-collab">
    <p>{{ date }}</p>
    <span v-if="collab">
      <p>• with</p>
      <a :href="collab.url" target="_blank">
        <img :src="collab.avi" :alt="collab.name">
        <p>{{ collab.name }}</p>
      </a>
    </span>
  </div>
</template>

<script>
export default {
  props: ['collab', 'date'],
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
