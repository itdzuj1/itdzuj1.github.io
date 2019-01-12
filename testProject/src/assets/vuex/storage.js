import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    i: 0
  },

  actions: {
    userLogged ({commit}, user) {
      commit('USER_LOGGED', user)
    }
  },

  mutations: {
    USER_LOGGED (state, user) {
      state.user = user
    },
      langEng: state => state.i = 0,
      langRu: state => state.i = 1
  },
});