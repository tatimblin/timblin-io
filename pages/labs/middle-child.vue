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

        // animate static
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

        const headline = new SplitText('.overlay__headline', {
            type: 'chars',
        });
        headline.chars.forEach( (e) => {
            const letter = e.innerHTML
            e.dataset.headline = letter
        })

        function getRandomInt(max, min) {
            return Math.floor(Math.random() * Math.floor(max - min) + min)
        }
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
@import '~assets/sass/utilities/_variables.scss';
$blue: #1AC5FD;
$red: #FE0000;

.page {
    color: white;
    background-color: #d8d8d8;
}
#canvas {
    display: block;
    width: 100%;
}
.overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: $spacing;

    &__name {
        h2 {
            color: white;
            font-size: 1.375em;
            text-transform: uppercase;
            letter-spacing: 0.25em;
        }
    }
    &__title {
		position: relative;
		z-index: 100;
	}
    &__headline {
        font-size: 4.5rem;
        text-transform: uppercase;
        color: white;
        div:before {
            content: attr(data-headline);
            position: absolute;
            background: repeating-linear-gradient($red, $red 4px, transparent 0.75px, transparent 4.75px);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: blur(0.625px);
            opacity: 0.33;
            transform: translateX(-4px);
            z-index: 10;
        }
        div:after {
            content: attr(data-headline);
            position: absolute;
            left: 0;
            background: repeating-linear-gradient($blue, $blue 4px, transparent 0.75px, transparent 4.75px);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: blur(0.875px);
            opacity: 0.25;
            transform: translateX(4px);
            z-index: 10;
        }
    }
}
</style>
