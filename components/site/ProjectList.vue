<template>
<section>
  <div class="project">
    <div class="project__view container">
      <div class="project__nav">
        <div class="project__nav__vert">
          <div>previous</div>
          <div>next</div>
        </div>
      </div>
      <div class="project__view__slider twelve">
        <img src="/images/uploads/profilepic.png" alt="project">
      </div>
    </div>
  </div>
  <div class="desc container">
    <div class="desc__title columns twelve">
      <h4>Otto Brewerytown</h4>
      <p>Cohere • 2018</p>
    </div>
  </div>
</section>
</template>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_variables.scss';

.project {
  position: relative;
  background-color: darken($bg, 10%);

  &__nav {
    position: absolute;
    top: 0; left: 0;
    height: 100%;
    padding-top: $spacing;
    transform: translateX(calc(-100% + 30px));

    @include query ($small-width) {
        transform: translateX(-100%);
      }

    &:after {
      content: '';
      position: absolute;
      width: $spacing/2; height: 100%;
      top: 0; right: -$spacing/2;
      z-index: -1;

      @include query ($small-width) {
        background-color: darken($bg, 10%);
        border-radius: 15px 0 0 15px;
      }
    }

    &__vert {
      position: relative;
      display: flex;
      transform: rotate(-90deg) translateY(-100%);
      transform-origin: 100% 0%;
      z-index: 10;

      div {
        margin: 0 7px;
        padding: 5px 0 7px $spacing/2;
      }
    }
  }
  &__view {
    position: relative;
    grid-row-gap: 0; // override grid, so image can be flush with container.

    &:before {
      content: '';
      position: absolute;
      width: 100vw; height: 100%;
      top: 0; left: 0;
      transform: translateX(calc(-100% + 14px));

      @include query ($small-width) {
        background-color: $bg;
      }
    }

    &__slider {
      position: relative;
      height: calc(50vh + 15px);
      min-height: 350px + $spacing;
      padding-top: $spacing;
      text-align: center;
      z-index: 10;

      img {
        position: absolute;
        height: 50vh;
        min-height: 350px;
        bottom: 0;
        object-fit: cover;
        transform: translateX(-50%);
      }
    }
  }
}

.desc {
  padding: $spacing 0;

  &__title {
    text-align: center;
  }
}
</style>
