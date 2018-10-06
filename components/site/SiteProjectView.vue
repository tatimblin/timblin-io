<template>
    <div class="project-view">
        <section class="large-width">

            <div class="row">

                <button @click="postType('projects')">
                    Projects
                </button>

                <button @click="postType('labs')">
                    Labs
                </button>

            </div>

        </section>
        <div class="project-view-slider">

            <section class="large-width">

                <div class="project-view-slider-ctrl">
                    <h6><span @click="changeSlide('prev')">prev</span> — <span @click="changeSlide('next')">next</span></h6>
                </div>

                <nuxt-link :to="post._path">
                    <transition name="slide" mode="out-in">
                        <img :key="index" :src="post.thumbnail" alt="Project">
                    </transition>
                </nuxt-link>

            </section>

        </div>
        <section class="small-width text-center">

            <h3>{{ post.title }}</h3>
            <p>Cohere — 2018</p>

        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['labs']),
    },
    data() {
        // Using webpacks context to gather all files from a folder
        const context = require.context('~/content/projects/posts/', false, /\.json$/);

        const projects = context.keys().map(key => ({
        ...context(key),
        _path: `/projects/${key.replace('.json', '').replace('./', '')}`
        }));

        return {
            index: 0,
            projects,
            post: '',
            type: 'projects'
        };
    },
    created() {
        this.post = this.projects[0]
    },
    methods: {
        postType(type) {
            this.type = type
        },
        changeSlide(dir) {
            var i = this.index
            if (this.type === 'projects') {
                var l = this.projects.length - 1
            } else {
                var l = this.$store.state.labs.length - 1
            }
            
            if (dir === 'prev') {
                if (i === 0) {
                    i = l
                } else {
                    i = i - 1
                }
            } else {
                if (i === l) {
                    i = 0
                } else {
                    i++
                }
            }
            this.index = i
            
            if (this.type === 'projects') {
                this.post = this.projects[i]
            } else {
                this.post = this.$store.state.labs[i]
            }
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
    section {
        h3 {
            line-height: 2em;
        }
    }
}

.slide-enter-active, .slide-leave-active {
    transform: translateX(0px);
    transition: all 0.5s;
}
.slide-enter {
    transform: translateX(-100px);
    opacity: 0;
}
.slide-leave-to {
    transform: translateX(100px);
    opacity: 0;
}

</style>

