import axios from 'axios'

export default ({
    namespaced: true,

    state: {
        // Initiate stored objects
        token: null,
        user: null,
        alert: null,
    },

    mutations: {
        // Set your object changes here
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_USER(state, data) {
            state.user = data
        },
        SET_ALERT(state, alert) {
            state.alert = alert
        }
    },

    getters: {
        authenticated (state) {
            return state.token && state.user
        },

        user (state) {
            return state.user
        },
        alert (state) {
            return state.alert
        }
    },

    actions: {
        // This is what actually happens
        async signIn ({ dispatch }, credentials) {
            let response = await axios.post('users/login', credentials)
            return dispatch('attempt', response.data.token)
        },

        async attempt({ commit, state }, token) {
            if (token) {
                commit('SET_TOKEN', token)
            }

            if (!state.token) {
                return
            }

            try {
                // Muted as we set the mutations in the subscriber file
                // let response = await axios.get('users/me/details', {
                //     headers: {
                //         'Authorization': 'Bearer ' + token
                //     }
                // })
                let response = await axios.get('users/me/details')

                commit('SET_USER', response.data.user)
            }   catch (error) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },

        // signOut ( {commit} ) {
        //     return axios.post('users/signout').then(() => {
        //         commit('SET_TOKEN', null)
        //         commit('SET_USER', null)
        //     })
        // },

        async signOut ( { dispatch }) {
            let response = await axios.post('users/signout')
                const alert = response.data.message;
                return dispatch('logout', alert)

        },
        async logout ({ commit }, alert) {
            commit('SET_ALERT', alert)
            commit('SET_TOKEN', null)
            commit('SET_USER', null)
        }
    },
})
