import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state() {
      const context = require.context('~/content/labs/posts/', false, /\.json$/);
      const labs = context.keys().map(key => ({
        ...context(key),
        path: `/labs/${key.substring(13).replace('.json', '').replace('./', '')}`
      }));
      return {
        page: 'index',
        labs,
        indexedLab: 0,
      }
    },
    mutations: {
       updatePage(state, pageName) {
        state.page = pageName
      }
    }
  })
}

export default createStore