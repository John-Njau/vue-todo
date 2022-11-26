import Vue from 'vue'
import Vuex from 'vuex'

import tasksModule from './modules/tasks'

// vuex for state management
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        tasks: tasksModule
    }
})

