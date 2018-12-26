<template>
    <div class="project-view">
        <section class="large-width">

            <div class="row">

                <div class="btn-wrap" :class="{activeFolio : type === 'projects'}" @click="postType('projects')">

                    <site-button label="Projects"/>

                </div>

                <div class="btn-wrap" :class="{activeFolio : type === 'labs'}" @click="postType('labs')">

                    <site-button label="Labs"/>

                </div>

            </div>

        </section>
        <div class="project-view-slider">

            <section class="large-width">

                <view-ctrl
                    v-on:prev-slide="changeSlide('prev')"
                    v-on:next-slide="changeSlide('next')"
                ></view-ctrl>

                <nuxt-link :to="post._path">
                    <transition :name="slide" mode="out-in">
                        <img :key="index" :src="post.thumbnail" alt="Project">
                    </transition>
                </nuxt-link>

            </section>

        </div>
        <section class="small-width text-center">

            <h3>{{ post.title }}</h3>
            <p>Cohere — {{post.date | year}}</p>

        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import SiteButton from '~/components/temp/SiteButton.vue';
import ViewCtrl from '~/components/temp/ViewCtrl.vue';

export default {
    computed: {
        ...mapState(['labs']),
    },
    components: {
        SiteButton,
        ViewCtrl,
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
            type: 'projects',
            post: '',
            slide: 'slideLeft'
        };
    },
    filters: {
        year: function (date) {
            return date.substring(0, 4)
        }
    },
    created() {
        this.post = this.projects[0]
    },
    methods: {
        postType: function (active) {
            this.type = active
            
            if (active === 'projects') {
                this.post = this.projects[0]
            } else {
                this.post = this.$store.state.labs[0]
            }
        },
        changeSlide: function (dir) {
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
                this.slide = 'slideLeft'
            } else {
                if (i === l) {
                    i = 0
                } else {
                    i++
                }
                this.slide = 'slideRight'
            }
            this.index = i
            
            if (this.type === 'projects') {
                this.post = this.projects[i]
            } else {
                this.post = this.$store.state.labs[i]
            }
        },
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_variables.scss';

.project-view {
    &-slider {
        position: relative;
        text-align: center;
        overflow: hidden;

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
            height: 30px;
            z-index: 1000;

            @include query ($small-width) {
                position: absolute;
                width: 430px;
                bottom: -30px;
                padding: 15px 30px;
                float: left;
                text-align: right;
                line-height: 0em;
                transform-origin: 0 0;
                transform: rotate(-90deg);
                background-color: #fff;
            }

            @include query ($large-width) {
                height: 60px;
                bottom: -60px;
                padding: 30px 30px;
                transform: translateX(-15px) rotate(-90deg);
            }

            @include query ($xlarge-width) {
                transform: translateX(-45px) rotate(-90deg);
            }

            span {
                cursor: pointer;
            }
        }
        img {
            height: 400px;
            object-fit: cover;
        }
    }
    section {
        h3 {
            line-height: 2em;
        }
    }
}

.slideLeft-enter-active, .slideLeft-leave-active, .slideRight-enter-active, .slideRight-leave-active {
    //transform: translateX(0px);
    transition: all 0.6s;
}
.slideLeft-enter, .slideRight-leave-to {
    transform: translateX(-100px);
    opacity: 0;
}
.slideLeft-leave-to, .slideRight-enter {
    transform: translateX(100px);
    opacity: 0;
}

.slideLeft-enter {
    transform: translateX(-150px) scale(0.8, 1.5);
    transition: all 0.45s ease-in;
}
.slideRight-enter {
    transform: translateX(150px) scale(0.8, 1.5);
    transition: all 0.45s ease-in;
}

</style>

