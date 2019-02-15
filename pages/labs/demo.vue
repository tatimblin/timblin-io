<template>
    <div class="page">
        <header>
            <div class="content medium-width">
                <nav class="nav">
                    <div class="nav__item nav__item--logo">
                        logo
                    </div>
                    <div class="nav__item">Play</div>
                    <div class="nav__item">About</div>
                    <div class="nav__item">Company</div>
                </nav>
                <div class="hero">
                    <h1 class="hero__title">Steppy Pants</h1>
                    <div class="hero__item events-page">
                        <div id="event1" class="event event1">
                            <div class="pinWrapper">
                                <img class="image" src="https://cdn1.tekrevue.com/wp-content/uploads/2014/09/iphone6plus-folder-landscape.jpg" alt="">
                            </div>
                        </div>
                        <div id="event2" class="event event2">
                            <div class="pinWrapper">
                                <img class="image" src="https://cdn1.tekrevue.com/wp-content/uploads/2014/09/iphone6plus-folder-landscape.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="container">
            <div class="content medium-width">
                <section class="content-block download">
                    <img src="" alt="">
                    <div class="content-block__text">
                        <h2 class="content-block__title">
                            A bit about the game
                        </h2>
                        <p class="content-block__copy">
                            Keep your cool when faced with insurmountable odds, like reckless drivers and an inexplicable inability to step on sidewalk cracks. You'll laugh. You'll cry. You'll remember just how much fun you can have walking down the street.
                        </p>
                    </div>
                </section>
                <section class="content-block game">
                    <img src="" alt="">
                    <div class="content-block__text">
                        <h2 class="content-block__title">
                            A bit about the game
                        </h2>
                        <p class="content-block__copy">
                            Keep your cool when faced with insurmountable odds, like reckless drivers and an inexplicable inability to step on sidewalk cracks. You'll laugh. You'll cry. You'll remember just how much fun you can have walking down the street.
                        </p>
                    </div>
                </section>
                <section class="content-block development">
                    <img src="" alt="">
                    <div class="content-block__text">
                        <h2 class="content-block__title">
                            A bit about the game
                        </h2>
                        <p class="content-block__copy">
                            Keep your cool when faced with insurmountable odds, like reckless drivers and an inexplicable inability to step on sidewalk cracks. You'll laugh. You'll cry. You'll remember just how much fun you can have walking down the street.
                        </p>
                    </div>
                </section>
                <section class="content-block company">
                    <img src="" alt="">
                    <div class="content-block__text">
                        <h2 class="content-block__title">
                            A bit about the game
                        </h2>
                        <p class="content-block__copy">
                            Keep your cool when faced with insurmountable odds, like reckless drivers and an inexplicable inability to step on sidewalk cracks. You'll laugh. You'll cry. You'll remember just how much fun you can have walking down the street.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    head () {
        return {
            script: [
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js'},
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js'},
            ],
        };
    },
    mounted () {
        const controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            triggerElement: ".event2.image",
            triggerHook: 0.25,
            duration: "100%"
        }).setPin(".events-page .event.event1 .pinWrapper",{
            pushFollowers: false
        }).addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: ".event2.image",
            triggerHook: 0.25,
            duration: 343
        }).setPin(".events-page .event.event2 .pinWrapper",{
            pushFollowers: false
        }).addTo(controller);
    }
}
</script>

<style scoped lang="scss">
@import '~assets/sass/utilities/_variables.scss';

header {
    background: $blue;
}

.nav {
    display: flex;
    justify-content: flex-end;
    &__item {
        padding: $spacing;

        &--logo {
            margin-right: auto;
        }
    }
}

.hero__item {
    width:600px;
    margin: auto;
}
.image {
  top: -250px;
  position: absolute;
  margin-top: -75px;
  
  height: 100%;
  width:100%;
}

.pinWrapper {
  height: 100%;
  width: 100%;
}

.event {
  position: relative;
  overflow: hidden;
  height: 333px;
  width: 300px;
}
.event1.image {
    top: 25%;
}

.scrollmagic-pin-spacer {
  position: (absolute !important);
  clip: rect(auto, auto, auto, auto);
}

.content-block {
    display: flex;
    flex-direction: row-reverse;
    margin: $spacing 0;
    
    & > * {
        @include query($medium-width) {
            width: 50%;
        }
    }
    &__title {
        color: $black;
    }
    &__copy {
        line-height: 1.5em;
    }
}
</style>
