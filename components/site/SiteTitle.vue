<template>
    <div class="row">
        <div class="site-title content">
            <h1>{{ headline }}</h1>
            <h2>
                <slot></slot>
            </h2>
        </div>
    </div>
</template>

<script>

export default {
  components: {
  },
  props: ['headline']
}
</script>

<style lang="scss" scoped>
.site-title {
    margin-top: 4rem;
}
</style>

