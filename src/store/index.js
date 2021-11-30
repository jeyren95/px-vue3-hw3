import { createStore } from 'vuex'
import { authStore } from "@/modules/auth/store"

export default createStore({
  state: {
    accessToken: ""
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authStore
  }
})
