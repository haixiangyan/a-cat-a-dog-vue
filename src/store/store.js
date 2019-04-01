import Vue from 'vue'
import Vuex from 'vuex'

import {catAxios, dogAxios} from "../axios"
import {initUser} from "../utils/utils"

Vue.use(Vuex)

const mapper = {
  CAT: catAxios,
  DOG: dogAxios
}

const user = initUser()

export default new Vuex.Store({
  state: {
    axios: mapper[user.type],
    user
  },
  getters: {},
  mutations: {
    updateAxios(state, type) {
      state.axios = mapper[type]
    },
    updateUser(state, user) {
      state.user = user
    }
  }
})
