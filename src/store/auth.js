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
        // This is what actually happens
        async signIn ({ dispatch }, credentials) {
            let response = await axios.post('/users/login/', credentials)
            return dispatch('attempt', response.data)
        },
        
        async attempt({ commit, state }, data) {
            if (data) {
                commit('SET_TOKEN', data.access)
                commit('SET_ALERT', false)
                commit('SET_MESSAGE', 'Token has been received!')
                commit('SET_USER', data.username)
            }

            if (!state.token) {
                return
            }

            try {
                // let response = await axios.get('/users/me/details')
                // commit('SET_USER', response.data.message)
                commit('SET_ALERT', false)
                commit('SET_MESSAGE', 'Home page is loaded')
            }   catch (error) {
                    commit('SET_TOKEN', null)
                    commit('SET_USER', null)
                    commit('SET_ALERT', true)
                    commit('SET_MESSAGE', error.message)
            }
        },

        async signOut ( { dispatch }) {
            // let response = await axios.post('users/signout')
                // const alert = response.data.message;
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
