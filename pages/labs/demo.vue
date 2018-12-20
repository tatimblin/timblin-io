<template>
  <section class="page page-leave-active">
    <div>
      <h1>This is demo1.vue</h1>
    </div>
  </section>
</template>

<script>

export default {
    data() {
        return {
            title: 'Issa demo',
            dir: 'left',
        };
    },
}
</script>

<style scoped lang="scss">
.page {
    height: 110vh;
    background-color: orange;
    text-align: center;
}

    .slide-left-enter-active, .slide-left-leave-active {
      transition: all .50s ease-out;
    }
    .slide-left-enter, .slide-left-leave-active {
      transform: scale(2);
      transform-origin: 50% 50%;
    }

    .slide-right-enter-active, .slide-right-leave-active {
      transition: all .50s ease-out;
    }
    .slide-right-enter, .slide-right-leave-active {
      transform: scale(0);
      transform-origin: 50% 50%;
    }
</style>
