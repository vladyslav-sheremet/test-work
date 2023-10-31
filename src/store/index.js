import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accounts: [
      {
        id: 1,
        money: 123,
        name: 'Privat Bank'
      },
      {
        id: 2,
        money: 323,
        name: 'Mono Bank'
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
