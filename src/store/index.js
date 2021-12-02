import { createStore } from 'vuex'
import { authStore } from "@/modules/auth/store"
import { marketplaceStore } from "@/modules/marketplace/store"

export default createStore({
  state: {
    accessToken: "",
  },
  mutations: {
    setAccessToken(state, payload) {
      state.accessToken = payload
    }
  },
  actions: {

  },
  modules: {
    authStore,
    marketplaceStore
  }
})
