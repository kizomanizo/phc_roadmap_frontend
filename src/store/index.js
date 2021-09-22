import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import endpoints from './endpoints'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 
  },
  mutations: {
    // 
  },
  actions: {
    // 
  },
  modules: {
    // List all your store objects here
    auth,
    endpoints,
  }
})
