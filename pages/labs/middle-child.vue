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
    <canvas ref="static" id="canvas" width="600px" height="600px"></canvas>
  </section>
</template>

<script>

export default {
    data() {
        return {
            
        }
    },
    mounted() {
        this.noise(this.$refs.static)

        let toggle = true;
        const loop = () => {
            toggle = !toggle
            if (toggle) {
                setTimeout( function()  {
                    requestAnimationFrame(loop)
                }, 40)
                return
            }
            this.noise(this.$refs.static)
            requestAnimationFrame(loop)
        };

        loop()
    },
    methods: {
        noise(e) {
            const ctx = e.getContext('2d');
            ctx.clearRect(0, 0, 300, 150);
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
    background-color: #c6c6c6;
}
#canvas {
    width: 100%;
}
.overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
}
</style>
