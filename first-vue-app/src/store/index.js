import { createStore } from 'vuex'

export default createStore({
  state: {
    doubledata: 1,
    vuexdata:3
  },
  getters: {
    getdata: function(state) {
      let a = state.vuexdata * 2
      return a

    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
