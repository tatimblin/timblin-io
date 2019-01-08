<template>
  <div class="list-item">
    <nuxt-link :to="`labs/${item._path}`">
      <div class="list-item__card">
        <div class="list-item__card__img">
          <img :src="item.thumbnail" :alt="`a front-end experience called ${item.title}`">
        </div>
        <div class="list-item__card__meta">
          <p>Explore</p>
          <ui-arrow/>
        </div>
      </div>
      <div class="list-item__desc">
        <h5>{{ item.title }}</h5>
        <p :v-if="item.tagline">{{item.tagline}}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import UiArrow from '~/components/UiArrow.vue';

export default {
  components: {
    UiArrow,
  },
  props: ['item'],
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_variables.scss';

  .list-item {
    margin-bottom: $spacing;

    &:hover {
      a {
        color: $black;
      }
      .list-item__card {
      
        &:before {
          border-radius: 7.5px;
          background-color: white;
          transform: scale(1, 1);
          transition: all 450ms $ease;
        }
        img {
          transform: scale(1.1);
          transition: all 9s 450ms $ease-out;
        }
        &__meta {
          opacity: 1;
          transition: all 450ms 300ms $ease;
        }
      }
      .list-item__desc {
        transform: translateY(10px);
        transition: all 300ms $ease;
        p {
          opacity: 1;
          transition: all 300ms 150ms $ease;
        }
      }
    }
    // End :hover

    &__card {
      position: relative;
      border-radius: 7.5px;

      &:before {
        content: '';
        position: absolute;
        width: calc(100% + 10px); height: calc(100% + 10px);
        top: -5px; left: -5px;
        border-radius: 75%;
        z-index: -1;
        transform: scale(0.75, 0.1);
        transition: all 600ms 150ms $ease;
      }

      &__img {
        overflow:hidden;
        border-radius: 7.5px;

        img {
          height: 350px;
          min-width: 100%;
          object-fit: cover;
          border-radius: 7.5px;
          transform: scale(1.25);
          transform-origin: top center;
          transition: all 12s $ease-out;
        }
      }
      &__meta {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        padding: 5px 0;
        opacity: 0;
        transition: all 300ms $ease;

        p {
          margin: 0;
        }
      }
    }
    &__desc {
      transform: translateY(-$spacing/2);
      transition: all 300ms 150ms $ease;
      h5 {
        display: inline;
      }
      p {
        display: inline;
        font-size: 0.75em;
        letter-spacing: 0.05em;
        color: lighten($black, 40%);
        opacity: 0;
        transition: all 300ms $ease;

        &:before {
          content: ' ';
        }
      }
    }
  }
</style>


