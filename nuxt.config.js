var glob = require('glob');
var path = require('path');

// Enhance Nuxt's generate process by gathering all content files from Netifly CMS
// automatically and match it to the path of your Nuxt routes.
// The Nuxt routes are generate by Nuxt automatically based on the pages folder.
var dynamicRoutes = getDynamicPaths({
  '/projects': 'projects/posts/*.json'
});


module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - Small CMS Template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'INSERT SITE DESCRIPTION - nuxt.config.js.' },
      { hid: 'keywords', name: 'keywords', content: 'timblin, website' },
      { name: 'twitter:card', content: 'summary_large_image'},
      { name: 'twitter:site', content: '@TristanTimblin'},
      { name: 'twitter:creator', content: '@TristanTimblin'},
      { property: 'og:url', content: 'URL_HERE'},
      { property: 'og:title', content: 'SITE_TITLE'},
      { property: 'og:description', content: 'DESCRIPTION'},
      { poroperty: 'og:image', content: '/social-card.jpg'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/zor5ibn.css' }
    ]
  },
  css: [
      'assets/sass/main.scss'
  ],
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: ['~/plugins/vue-scrollmonitor'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  router: {
    base: '',
    middleware: 'pages'
  },
  /*
  ** Route config for pre-rendering
  */
  generate: {
    routes: dynamicRoutes
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}
