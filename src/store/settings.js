import axios from 'axios'

export default ({
    namespaced: true,
    state: {
        // Initiating users array to be stored
        alert: null,
        message: null,
        list: null,
    },
    mutations: {
        // Set your object changes here
        SET_ALERT(state, alert) {
            state.alert = alert
        },
        SET_MESSAGE(state, message) {
            state.message = message
        },
        SET_LIST(state, list) {
            state.list = list
        },
    },
    getters: {
        alert (state) {
            return state.alert
        },
        message (state) {
            return state.message
        },
        list (state) {
            return state.list
        },
    },
    actions: {
        // All actions related to users can and should be placed here
        async getSettings ({ commit }) {
            try {
                let response = await axios.get('/')
                commit('SET_ALERT', false)
                commit('SET_MESSAGE', 'All available API endpoints.')
                commit('SET_LIST', response.data)
            } catch (error) {
                commit('SET_ALERT', true)
                commit('SET_MESSAGE', error.statusCode)
                commit('SET_LIST', error.message)
            }
        }
    },
})
