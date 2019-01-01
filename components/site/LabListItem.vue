<template>
  <div class="list-item">
    <nuxt-link :to="`labs/${item._path}`">
      <img :src="item.thumbnail" :alt="`a front-end experience called ${item.title}`">
      <h5>{{ item.title }}</h5>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_variables.scss';

  .list-item {
    position: relative;
    margin-top: $spacing;
    border-radius: 7.5px;
    overflow: hidden;
    transition: all 600ms $ease;

    &:before {
      content: '';
      position: absolute;
      width: 100%; height: 100%;
      background-color: $white;
      border-radius: 7.5px;
      transform: scale(1,0.5);
      transition: all 300ms 525ms $ease;
      z-index: -1;
    }

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.17) 0px 10px 60px 0px;
      transition: all 900ms 150ms $ease;
      
      &:before {
        transform: scale(1,1);
        transition: all 300ms $ease;
      }
      img {
        transform: scale(1.07);
      }
    }

    img {
      min-width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 7.5px;
      box-shadow: rgba(0, 0, 0, 0.075) 0px 10px 60px 0px;
      transform-origin: center bottom;
      transition: all 600ms $ease;

      @include query ($medium-width) {
        min-width: none;
        height: 250px;
      }
      @include query ($large-width) {
        height: 400px;
      }
    }
    h5 {
      padding: 5px 5px 10px;
      color: $black;
    }
  }
</style>


