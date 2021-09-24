import axios from 'axios'

export default ({
    namespaced: true,

    state: {
        // Initiate stored objects
        token: null,
        alert: null,
        message: null,
        user: null,
    },

    mutations: {
        // Set your object changes here
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_ALERT(state, alert) {
            state.alert = alert
        },
        SET_MESSAGE(state, message) {
            state.message = message
        },
        SET_USER(state, user) {
            state.user = user
        },
    },

    getters: {
        authenticated (state) {
            return state.token && state.user
        },
        alert (state) {
            return state.alert
        },
        message (state) {
            return state.message
        },
        user (state) {
            return state.user
        },
    },

    actions: {
        async signIn ({ dispatch }, credentials) {
            let response = await axios.post('/users/login/', credentials)
            return dispatch('attempt', response.data.payload)
        },

        async attempt({ commit, state,  }, payload) {
            if (payload) {
                commit('SET_TOKEN', payload.access)
                commit('SET_ALERT', false)
                commit('SET_MESSAGE', 'Token has been received!')
                commit('SET_USER', payload.id)
            }

            if (!state.token) {
                return
            }

            try {
                commit('SET_ALERT', false)
                commit('SET_MESSAGE', 'Authorized user')
            }   catch (error) {
                    commit('SET_TOKEN', null)
                    commit('SET_USER', null)
                    commit('SET_ALERT', true)
                    commit('SET_MESSAGE', error.message)
            }
        },

        async signOut ( { dispatch }) {
                const alert = 'User has signed out!'
                return dispatch('logOut', alert)
        },
        
        async logOut ({ commit }, alert) {
            commit('SET_TOKEN', null)
            commit('SET_USER', null)
            commit('SET_ALERT', true)
            commit('SET_MESSAGE', alert)
        }
    },
})
