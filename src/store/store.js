import Vue from 'vue'
import Vuex from 'vuex'

import {catAxios, dogAxios} from "../axios"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        axios: catAxios
    },
    getters: {

    },
    mutations: {
    }
})
