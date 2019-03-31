import Vue from 'vue'
import Vuex from 'vuex'

import {catAxios, dogAxios} from "../axios"

Vue.use(Vuex)

const mapper = {
  CAT: catAxios,
  DOG: dogAxios
}

export default new Vuex.Store({
  state: {
    axios: catAxios,
    user: {}
  },
  getters: {},
  mutations: {
    updateAxios(state, type) {
      state = mapper[type]
    },
    updateUser(state, user) {
      state = {...state, ...user}
    }
  }
})
