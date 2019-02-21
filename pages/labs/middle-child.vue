<template>
  <section class="page" ref="page">
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
    <canvas ref="static" id="canvas" width="100%" height="100%"></canvas>
  </section>
</template>

<script>

export default {
    data() {
        return {
            toggle: true,
        }
    },
    mounted() {
        this.noise(this.$refs.static)

        function loop() {
            this.toggle = !this.toggle
            if (this.toggle) {
                setTimeout( function()  {
                    requestAnimationFrame(loop)
                }, 20)
                return
            }
            this.noise(this.$refs.static)
            requestAnimationFrame(loop)
        };
    },
    methods: {
        noise(canvasElement) {
            console.log(canvasElement);
            const ctx = canvasElement.getContext('2d');
            ctx.clearRect(0, 0, 300, 150);
            ctx.fillStyle = 'red';
            ctx.font = '20px Georgia';
            ctx.fillText('hello', 10, 50);
            let w = ctx.canvas.width,
                h = ctx.canvas.height,
                imageData = ctx.createImageData(w, h),
                l = imageData.data.length,
                i = 0;

            for(; i < l;)
                imageData.data[i++] = (155 * Math.random()) + 70 | 20;

            ctx.putImageData(imageData, 0, 0);
        },
    },
}
</script>

<style scoped lang="scss">
.page {
    background-color: green;
}
</style>
