<template>
  <div class="icon" :class="{ 'icon--open': toggle}">
    <div class="icon__arm"></div>
    <div class="icon__arm"></div>
  </div>
</template>

<script>
export default {
  props: ['toggle'],
}
</script>

<style lang="scss" scoped>
  @import '~assets/sass/utilities/_variables.scss';

  .icon {
    display: flex;
    padding: 15px;
    cursor: pointer;
   
    &__arm {
      width: 18px; height: 4px;
      background-color: #949494;
      transition: transform 750ms $ease, transform-origin 750ms $ease;

      &:first-child {
        border-radius: 4px 0 0 4px;
        transform-origin: 100% 100%;
      }
      &:last-child {
        border-radius: 0 4px 4px 0;
        transform-origin: 0% 100%;
      }
    }
    &:hover .icon__arm:first-child { transform: rotate(25deg); }
    &:hover .icon__arm:last-child { transform: rotate(-25deg); }
  }
  .icon--open {
    .icon__arm {
      &:first-child {
        transform-origin: 100% 0%;
      }
      &:last-child {
        transform-origin: 0% 0%;
      }
    }
    &:hover {
      .icon__arm:first-child { transform: rotate(-25deg); }
      .icon__arm:last-child { transform: rotate(25deg); }
    }
  }
</style>


