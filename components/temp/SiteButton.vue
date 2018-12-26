<template>
  <button>
    <h4>{{ label }}</h4>
  </button>
</template>

<script>

export default {
  props: ['label', 'href']
}
</script>

<style lang="scss" scoped>
button {
  width: 160px;
  padding: 10px 0;
  text-align: left;
  border: none;
  border-bottom: 3px solid #2b2b2b;

  &:after {
    content: '';
    position: absolute;
    width: 12px; height: 12px;
    top: 40%;
    right: 0;
    background-image: url('~/assets/ui/arrow.svg');
    background-repeat: no-repeat;
  }
}
</style>


