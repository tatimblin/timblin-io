<template>
    <div class="project-view">
        <div class="project-view-slider">
            <section class="large-width">
                <div class="project-view-slider-ctrl">
                    <h6><span @click="changeSlide(prev)">prev</span> — <span>next</span></h6>
                </div>
                <nuxt-link :to="posts[0]._path">
                    <img :src="posts[index].thumbnail" alt="Project">
                </nuxt-link>
            </section>
        </div>
        <section class="small-width text-center">
            <h3>{{posts[index].title}}</h3>
            <p>Cohere — 2018</p>
        </section>
    </div>
</template>

<script>

export default {
    data() {
        // Using webpacks context to gather all files from a folder
        const context = require.context('~/content/projects/posts/', false, /\.json$/);

        const posts = context.keys().map(key => ({
        ...context(key),
        _path: `/projects/${key.replace('.json', '').replace('./', '')}`
        }));

        return {
            index: 0,
            posts
        };
    },
    methods: {
        changeSlide(dir) {
            this.index = 1
        }
    }
}
</script>

<style lang="scss" scoped>
.project-view {
    &-slider {
        position: relative;
        text-align: center;

        &:after {
            content: '';
            position: absolute;
            width: 50%; height: 100%;
            top: 0; right: 0;
            background-color: #ececec;
            z-index: -1;
        }

        section {    
            padding: 30px 0 0 0;
            background-color: #ececec;
            line-height: 0em;

            a {
                display: block;
            }
        }
        &-ctrl {
            position: absolute;
            width: 430px; height: 20px;
            bottom: -20px;
            padding: 10px 30px;
            float: left;
            text-align: right;
            line-height: 0em;
            transform-origin: 0 0;
            transform: rotate(-90deg);
            background-color: #fff;
        }
        img {
            height: 400px;
        }
    }
}
</style>

