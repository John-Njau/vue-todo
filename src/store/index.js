import Vue from 'vue'
import Vuex from 'vuex'
import todoModule from './modules/todo.js'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todoModule: todoModule
  },
  plugins: [createPersistedState()],

})
