import Vue from 'vue'
// import Vuex from 'vuex'
import { createStore } from 'vuex'


// Vue.use(Vuex)
import todoMod from './modules/todo.js'
import createPersistedState from "vuex-persistedstate";


// Vue.use(Vuex)

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todoModule: todoMod
  },
  plugins: [createPersistedState()],

})
