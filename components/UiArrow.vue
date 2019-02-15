<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 32" :style="svg">
    <path data-name="Path 8" d="M24 16L8 0H0l16 16L0 32h8z" fill="#30323d"/>
  </svg>
</template>

<script>
export default {
  props: ['direction'],
  data () {
    return {
      svg: {
        transform: 'rotate(0deg)',
      },
    };
  },
  created() {
    if (this.direction == 'left') {
      this.svg.transform = 'rotate(180deg)';
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~assets/sass/utilities/_variables.scss';

svg {
  width: 0.825em; height: 0.825em;
  transition: opacity 300ms $ease;

  &:hover {
    opacity: 0.75;
  }
  &:focus {
    opacity: 0.5;
  }
}
</style>
