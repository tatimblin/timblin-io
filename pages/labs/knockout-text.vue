<template>
  <section class="page">
    <div class="container">
        <nav class="nav">
            <h2 class="six">zine</h2>
            <ul class="nav__list six">
                <li class="nav__list-item">art</li>
                <li class="nav__list-item">culture</li>
                <li class="nav__list-item">living</li>
                <li class="nav__list-item">style</li>
            </ul>
        </nav>
    </div>
    <header class="header">
        <div class="background" v-bind:class="{ 'background-fade': this.scrolled}"></div>
        <div class="header-hero" v-bind:class="{ 'header-hero-fade': this.scrolled}">
            <transition v-bind:css="false" @enter="enter" appear>
                <h1 id="headline" v-if="loaded">Art Ignites Change</h1>
            </transition>
        </div>
        <div class="container">
            <span class="caption twelve">Philadelphia Muses by Meg Saligman</span>
        </div>
    </header>
    <article class="body container">
        <div class="quote twelve">
            <img src="~assets/labs/knockout-text/mural-arts-logo.jpg" alt="">
            <h3>"creating public art to transform places, individuals, and communities."</h3>
        </div>
        <div class="content eight">
            <p>Mural Arts Philadelphia is the nation’s largest public art program, dedicated to the belief that art ignites change.</p>
            <p>For over 30 years, Mural Arts has united artists and communities through a collaborative process, rooted in the traditions of mural-making, to create art that transforms public spaces and individual lives. Mural Arts engages communities in 60–100 public art projects each year, and maintains its growing collection through a restoration initiative. Our core program areas—Art Education, Restorative Justice, and Porch Light—yield unique, project-based learning opportunities for thousands of youth and adults.</p>
            <img src="~assets/labs/knockout-text/painting-mural.jpg" alt="Painting a mural in Philadelphia">
            <p>Each year, 15,000 residents and visitors tour Mural Arts’ outdoor art gallery, which has become part of the city’s civic landscape and a source of pride and inspiration, earning Philadelphia international recognition as the “City of Murals.”</p>
            <h3>our mission</h3>
            <p>We create art with others to transform places, individuals, communities and institutions. Through this work, we establish new standards of excellence in the practice of public and contemporary art.</p>
            <img src="~assets/labs/knockout-text/exteriors.jpg" alt="Mural by Richard Haas, 1983">
            <span class="caption">Richard Haas, 1983</span>
            <p>Our process empowers artists to be change agents, stimulates dialogue about critical issues, and builds bridges of connection and understanding.</p>
            <p>Our work is created in service of a larger movement that values equity, fairness and progress across all of society.</p>
        </div>

        <div class="callout twelve">
            <h3>invest in mural arts</h3>
            <a href="#" class="callout-form">signup</a>
        </div>

        <div class="content eight">
            <p>We listen with empathetic ears to understand the aspirations of our partners and participants. And through beautiful collaborative art, we provide people with the inspiration and tools to seize their own future.</p>
            <img src="~assets/labs/knockout-text/philadelphia-mural-history.jpg" alt="Philadelphias first mural">
            <span>Dr. J by Kent Twitchell • Photo by Jack Ramsdale</span>
            <h3>history</h3>
            <p>In 1984, Mural Arts is established as part of the Philadelphia Anti-Graffiti Network.</p>
            <p>Artist Jane Golden reaches out to graffiti writers in order to redirect their energies into constructive public art projects. Mural Arts’ collective mural-making process proves to be a powerful tool for generating dialogue, building relationships, empowering communities, and sparking economic revitalization.</p>
        </div>
    </article>
    <footer class="footer container">
        <div class="six">
            <h3>art ignites change.</h3>
            <br/>
            <span>Lincoln Financial Mural Arts Center</span><br/>
            <span>info(at)muralarts.org</span><br/>
            <span><a href="muralarts.org/" target="_blank">muralarts.org/</a></span>
        </div>
        <div class="six">
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
        </div>
    </footer>
  </section>
</template>

<script>
import TweenMax from 'gsap';

export default {
    layout: 'default',
    transition: 'slide',
    data () {
        return {
            loaded: false,
            scrolled: false,
            headline: null,
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.loaded = true;
        });
    },
    methods: {
        handleScroll: function () {
            var height;
            height = document.documentElement.scrollTop;
            if (height > 30) {
                this.scrolled = true;
            } else {
                this.scrolled = false;
            }
        },
        enter: function (el, done) {
            TweenMax.from(el, 0.4, {
                ease:Power3.easeOut,
                delay: 0.6,
                onComplete: done
            });
            console.log('hi');
        },
    },
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped lang="scss">
@import '~assets/sass/utilities/_variables.scss';
@import url('https://fonts.googleapis.com/css?family=Kumar+One|Kumar+One+Outline');

//GENERAL
$solid: 'Kumar One', cursive;
$outline: 'Kumar One Outline', cursive;
$body: 'Helvetica Neue', sans-serif;
$text: #2b2b2b;
$alt-dark: #3F41A6;
$alt-light: #F34B2F;
$bg: lighten(#DC483C, 40%);

.page {
    padding: $spacing 0;
    background-color: $bg;
    font-size: 14px;
    color: $text;
    box-sizing: border-box;

    h1, h2, span {
        font-family: $solid;
    }
    h3 {
        font-family: $outline;
        color: $alt-dark;
    }
    p {
        font-size: 1.25em;
        line-height: 1.625em;
    }
    span {
        font-size: 0.875em;
    }
}

.nav {
    display: contents;
    align-items: end;

    &__list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0;
        list-style-type: none;
        &-item {
            margin: 0;
            padding: 0;
            color: lighten($alt-light, 32%);
            font-family: $solid;
            font-size: 1em;
            -webkit-text-stroke-width: 0.075em;
            -webkit-text-stroke-color: $alt-dark;
            transition: all 200ms $ease;
            cursor: pointer;
            &:hover {
                color: $alt-dark;
                -webkit-text-stroke-color: hsla(239, 45%, 45%, 0);
            }
        }
    }
}

.header {
    position: relative;
    height: 550px + $spacing*2;
    margin: 0 0 $spacing*2 0;

    span {
        position: absolute;
        bottom: 0px;
    }
    &-hero {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%; height:550px;
        background-image: url('~assets/labs/knockout-text/philadelphia-mural-hero.jpg');
        background-position: 20%;
        background-size:cover;
        border-bottom: 1px solid $alt-light;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: brightness(0%) grayscale(0%);
        transition: all 400ms $ease;
        h1 {
            text-align: center;
            font-size: 8em;
        }
        &-fade {
            filter: brightness(90%) grayscale(0%);
        }
    }
}

.background {
    position:absolute;
    width:100%; height:550px;
	background: url('~assets/labs/knockout-text/philadelphia-mural-hero.jpg');
    background-position: 20% center;
	background-size:cover;
	opacity:1;
    filter: blur(0px) brightness(135%) contrast(80%);
    transition: all 400ms 100ms $ease;
    
    &-fade {
        filter: blur(4px);
	    opacity:0;
    }
}

.body {
    .quote {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @include query ($small-width) {
            flex-direction: row;
        }
        h3 {
            padding: $spacing 0;
            text-align: center;

            @include query ($small-width) {
                padding: 0 0 0 $spacing;
                text-align: left;
            }
        }
        img {
            border: 4px solid $bg;
            box-shadow: 1px 1px 0px 2px $alt-dark;
        }
    }
    .content {
        grid-column-start: 3;
        h3 {
            margin-top: $spacing*2;
        }
        img {
            border: 4px solid $bg;
            box-shadow: 1px 1px 0px 2px $alt-dark;
        }
    }
    .callout {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: $spacing;
        border: 1px solid $alt-dark;
        border-bottom: 3px solid $alt-dark;
        border-right: 2px solid $alt-dark;
        a{
            padding: 2px $spacing;
            color: $alt-dark;
            background: $bg;
            border: 2px solid $bg;
            box-shadow: 0.5px 0.5px 0px 1.5px $alt-dark;
            transition: all 300ms ease;
            &:hover {
                color: $bg;
                background: $alt-dark;
                box-shadow: 0px 0px 0px 1px $alt-dark;
            }
        }
    }
}
.footer {
    margin-top: $spacing;
    padding-top: $spacing;
    border-top: 2px solid $alt-dark;
    ul {
        padding-left: 0;
        list-style-type: none;
        font-family: $solid;
        li {
            display: inline;
            margin-right: 10px;
            font-size: 0.875em;
            cursor: pointer;
        }
    }
}
</style>
