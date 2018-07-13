<template>
    <div class="home container large-width">
        <div class="content-block">
            <h2>Home</h2>
            <ul>
                <li v-for="post in posts" :key="post.date">
                    <nuxt-link :to="post._path">
                        {{ post.title }}
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';

export default {
  layout: 'default',
  transition: 'fade',
  components: {
    AppLogo
  },
  data() {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/blog/posts/', false, /\.json$/);

    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`
    }));

    return { posts };
  }
};
</script>
