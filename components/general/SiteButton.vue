<template>
  <button class="button three">
    <slot></slot>
    <ui-arrow></ui-arrow>
  </button>
</template>

<script>
import UiArrow from '~/components/UiArrow.vue';

export default {
  components: {
    UiArrow,
  },
}
</script>


<style lang="scss">
@import '~assets/sass/utilities/_variables.scss';

button {
  margin-top: $spacing/2;
  margin-bottom: $spacing/2;
  background-color: red;
  
  &:first-of-type {
    margin-left: 0;
  }
  a {
    display: block;
    width: 100%;
    line-height: 2.875em;
    text-transform: capitalize;
    &.nuxt-link-active {
      
    }
  }
  svg {
    position: absolute;
    top: 37%; right: 0;
    transition: opacity 300ms $ease;
  }
  // hide arrow 
  a.nuxt-link-exact-active + svg {
    opacity: 0;
  }
}
</style>
