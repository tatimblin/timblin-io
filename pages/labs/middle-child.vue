<template>
  <section class="page">
    <div class="overlay">
        <div class="overlay__name">
            <h2>J.Cole</h2>
        </div>
        <div class="overlay__title">
            <h1 class="overlay__headline">Middle Child</h1>
        </div>
        <div class="overlay__rating">
            parental advisory
        </div>
    </div>
    <canvas id="canvas"></canvas>
  </section>
</template>

<script>

export default {
    data() {
        return {
            title: 'Issa demo'
        }
    }
}
</script>

<style scoped lang="scss">
.page {
    background-color: green;
}
</style>
