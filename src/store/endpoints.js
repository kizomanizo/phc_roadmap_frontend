import axios from 'axios'

export default ({
    namespaced: true,
    state: {
        alert: null,
        message: null,
        payload: null,
        user: null,
    },

    mutations: {
        SET_ALERT(state, alert) {
            state.alert = alert
        },
        SET_MESSAGE(state, message) {
            state.message = message
        },
        SET_PAYLOAD(state, payload) {
            state.payload = payload
        },
    },

    getters: {
        alert (state) {
            return state.alert
        },
        message (state) {
            return state.message
        },
        payload (state) {
            return state.payload
        },
    },

    actions: {
        async commitHelper({ commit }, data) {
            try {
                commit('SET_ALERT', false)
                commit('SET_MESSAGE', 'Payload has been received.')
                commit('SET_PAYLOAD', data)
            } catch (error) {
                commit('SET_ALERT', true)
                commit('SET_MESSAGE', error.statusCode)
                commit('SET_PAYLOAD', error.message)
            }
        },
        async getActivityReport ({ dispatch }) {
            let response = await axios.get('/data/')
            return dispatch('commitHelper', response.data.payload)
        },        
        async getDetailedReport ({dispatch}) {
            let response = await axios.get('/goals/')
            return dispatch('commitHelper', response.data.payload)
        },
        async getOtherReport ({dispatch}) {
            let response = await axios.get('/users/')
            return dispatch('commitHelper', response.data.payload)
        },
    },
})
