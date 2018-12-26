<template>
    <div class="row">
        <div class="site-title content">
            <h1>{{ headline }}</h1>
            <h2 class="site-title-overlay">{{subline}}</h2>
            <h2 class="site-title-readable">{{subline}}</h2>
        </div>
    </div>
</template>

<script>

export default {
  components: {
  },
  props: ['headline', 'subline'],
}
</script>

<style lang="scss" scoped>
.site-title {
    position: relative;
    margin-top: 4rem;
    overflow: hidden;

    h1 {
        transform: translateY(100%);
        animation: slide-up 500ms ease 500ms 1 forwards;

    }
    &-overlay {
        position: relative;
        display: inline;
        color: transparent;
        white-space: pre-line;
        word-break: keep-all;
        hyphens: none;
        background-image: linear-gradient(to left, white, white);
        background-position: 100% 100%;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        animation: uncover 1s ease 1s 1 forwards;
        z-index: 1000;
    }
    &-readable {
        position: absolute;
        bottom: 0;
    }
}

@keyframes slide-up {
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0%);
    }
}

@keyframes uncover {
    0% {
        background-size: 100% 100%;
    }
    100% {
        background-size: 0% 100%;
    }
}
</style>

