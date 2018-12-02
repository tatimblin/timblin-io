import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state() {
      const context = require.context('~/content/labs/posts/', false, /\.json$/);
      const labs = context.keys().map(key => ({
        ...context(key),
        _path: `${key.substring(13).replace('.json', '').replace('./', '')}`,
      }));
      return {
        page: 'index',
        labs,
        indexedLab: 1,
      }
    },
    getters: {
      labs: state => state.labs,

      thisLab: state => state.labs[state.indexedLab],

      nav: state => {
        let i = state.indexedLab;
        let l = state.labs.length;
        let nextIndex = i + 1;
        let prevIndex = i - 1;

        if (i >= l - 1) {
            nextIndex = 0;
        }
        if (i === 0) {
            prevIndex = l - 1;
        }
        //console.log('INDEX -> next: ' + nextIndex + ', prev: ' + prevIndex);

        let next = state.labs[nextIndex]._path;
        let prev = state.labs[prevIndex]._path;
        console.log('PATHS -> next: ' + next + ', prev: ' + prev);
        return {
            prev,
            next,
        }
      },
    },
    mutations: {
      updatePage(state, pageName) {
        state.page = pageName
      },
      updateIndex (state, pageName) {
        // match the current route with array index to set 'indexedLab'
        let url = pageName.replace("labs-","");
        state.indexedLab = state.labs.findIndex(x => x._path === url);
      },
    }
  })
}

export default createStore