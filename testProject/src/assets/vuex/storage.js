import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    i: 0
  },

  actions: {
  },

  mutations: {
      langEng: state => state.i = 0,
      langRu: state => state.i = 1
  },
});