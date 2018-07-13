import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: 'index',
      currentPost: 1
    },
    mutations: {
       updatePage(state, pageName) {
        state.page = pageName
      }
    }
  })
}

export default createStore