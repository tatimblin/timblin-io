<template>
  <section class="page">
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
            currentTransition: 'slide-left',
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
</style>
