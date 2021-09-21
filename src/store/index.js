import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import users from './users'

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
    users,
  }
})
