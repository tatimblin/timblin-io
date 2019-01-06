<template>
  <section class="page">
    <div class="logo">
      <img src="~/assets/labs/netflix-profile/logo.png" alt="Netflix Logo">
    </div>
    <h1>{{ title }}</h1>
    <div class="profile container">
      <div class="profile__item three" v-for="(profile, index) in profiles" :key="index">
        <div class="profile__item__icon">
          {{ profile.svg }}
        </div>
        <p>{{ profile.name }}</p>
      </div>

      <div class="profile__item three">
        <div class="profile__item__icon">
          <img src="~/assets/labs/netflix-profile/kids.png" alt="Netflix for kids">
        </div>
        <p>Kids</p>
      </div>
    </div>
    <div class="manage">
      <a href="#">{{ button }}</a>
    </div>
  </section>
</template>

<script>

export default {
    data() {
      return {
        title: "Who's Watching?",
        profiles: [
          {
            name: "Account Holder",
          },
          {
            name: "Millenial Son",
          },
          {
            name: "Hotel You Visited 3 Years Ago",
          },
        ],
        button: "Manage Profiles"
      }
    }
}
</script>

<style scoped lang="scss">
@import '~assets/sass/utilities/_variables.scss';
@import '~assets/sass/layout/_grid.scss';

$text-color: #6d6d6d;
$font: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;

.page {
  padding: 30px 15px;
  background-color: #141414;
}
.logo {
  padding: 30px 60px;
  img {
    width: 100px;
  }
}

h1 {
  margin-bottom: $spacing;
  text-align: center;
  color: #fff;
  font-family: $font;
  font-size: 2.75em;
  font-weight: 300;
}

.profile {
  &__item {
    &__icon {
      padding: 4px;
      background-color: #2D2D2D;
      border-radius: 1px;
      transition: all 300ms $ease;
      img {
        display: block;
      }
    }
    p {
      padding: 15px 0;
      text-align: center;
      color: $text-color;
      font-family: $font;
      transition: all 300ms $ease;
    }
    &:hover .profile__item__icon {
      background-color: white;
    }
    &:hover p {
      color: white;
    }
  }
}

.manage {
  margin: $spacing 0;
  text-align: center;

  a {
    padding: 7px 20px;
    font-family: $font;
    color: $text-color;
    border: 1px solid $text-color;
  }
}
</style>
