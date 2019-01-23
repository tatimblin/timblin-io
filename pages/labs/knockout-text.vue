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
            <div class="header-hero_inner">
                <h1>Art Ignites Change</h1>
            </div>
        </div>
        <span class="caption twelve">Philadelphia Muses by Meg Saligman</span>
    </header>
    <article class="body container">
        <div class="quote">
            <h3>"creating public art to transform places, individuals, and communities."</h3>
        </div>
    </article>
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
@import url('https://fonts.googleapis.com/css?family=Kumar+One|Kumar+One+Outline');

//GENERAL
$solid: 'Kumar One', cursive;
$outline: 'Kumar One Outline', cursive;
$body: 'Helvetica Neue', sans-serif;
$text: #2b2b2b;
$alt-dark: #3F41A6;
$alt-light: #F34B2F;

.page {
    background-color: lighten(#DC483C, 40%);
    font-size: 14px;
    color: $text;

    h1, h2, span {
        font-family: $solid;
    }
    h3 {
        font-family: $outline;
    }
}

.nav {
    display: contents;
    padding: 30px 0;

    &__list {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
    }
}
</style>
