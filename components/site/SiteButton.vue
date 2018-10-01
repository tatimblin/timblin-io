<template>
  <div class="button">
      <nuxt-link :to="`${href}`" exact>
          <slot></slot>
      </nuxt-link>
  </div>
</template>

<script>

export default {
  props: ['href']
}
</script>

<style lang="scss" scoped>
.button {
  a {
    position: relative;
    padding: 15px 0;
    border-bottom: 2px solid #000;

    &:after {
      content: 'o';
      position: absolute;
      right: 0;
    }
  }
}

.nuxt-link-active {
  opacity: 0.5;

  &:after {
    display: none;
  }
}
</style>


