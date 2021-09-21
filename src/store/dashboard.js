import axios from 'axios'

export default ({
    namespaced: true,
    state: {
        // Initiating users array to be stored
        alert: null,
        message: null,
        goals: null,
    },
    mutations: {
        // Set your object changes here
        SET_ALERT(state, alert) {
            state.alert = alert
        },
        SET_MESSAGE(state, message) {
            state.message = message
        },
        SET_GOALS(state, goals) {
            state.goals = goals
        },
    },
    getters: {
        alert (state) {
            return state.alert
        },
        message (state) {
            return state.message
        },
        goals (state) {
            return state.goals
        },
    },
    actions: {
        // All actions related to users can and should be placed here
        async getGoals ({ commit }) {
            try {
                let response = await axios.get('/data/')
                commit('SET_ALERT', false)
                commit('SET_MESSAGE', 'Goals loaded.')
                commit('SET_GOALS', response.data)
            } catch (error) {
                commit('SET_ALERT', true)
                commit('SET_MESSAGE', error.statusCode)
                commit('SET_GOALS', error.message)
            }
        }
    },
})
