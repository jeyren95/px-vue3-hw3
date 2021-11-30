export const authStore = {
  state: {
    email: "",
    password: ""
  },
  mutations: {
    setEmail(state, input) {
      state.email = input
    },
    setPassword(state, input) {
      state.password = input
    },
    resetInputs(state) {
      state.email = ""
      state.password = ""
      
    }
  },
  actions: {
    handleSubmit({ state, commit, rootState }) {
      console.log(state)
      console.log(`Email: ${state.email}`)
      console.log(`Password: ${state.password}`)

      fetch(`https://ecomm-service.herokuapp.com/login`, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          username: state.email,
          password: state.password
        })
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          rootState.accessToken = data.access_token
        } else {
          throw new Error(data.message)
        }
      })
      .catch((err) => console.log(err))

      commit("resetInputs")
    }
  }
}

