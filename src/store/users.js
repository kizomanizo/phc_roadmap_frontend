import axios from 'axios'


export default ({
    namespaced: true,
    state: {
        // Initiating users array to be stored
        type: null,
        title: null,
        list: null,
    },
    mutations: {
        // Set your object changes here
        SET_TYPE(state, type) {
            state.type = type
        },
        SET_TITLE(state, title) {
            state.title = title
        },
        SET_LIST(state, list) {
            state.list = list
        },
    },
    getters: {
        type (state) {
            return state.type
        },
        title (state) {
            return state.title
        },
        list (state) {
            return state.list
        },
    },
    actions: {
        // All actions related to users can and should be placed here
        async getUsers ({ commit }) {
            try {
                let response = await axios.get('users/')
                commit('SET_TYPE', response.data.type)
                commit('SET_TITLE', response.data.title)
                commit('SET_LIST', response.data.message)
            } catch (error) {
                commit('SET_TYPE', error.statusCode)
                commit('SET_TITLE', 'Error!')
                commit('SET_LIST', error.message)
            }
        }
    },
})
