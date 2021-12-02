export const authStore = {
  state: {
    errorMessage: ""
  },
  actions: {
    handleSubmit({ state, rootState }, payload) {
      console.log(`Email: ${payload.email}`)
      console.log(`Password: ${payload.password}`)

      fetch(`https://ecomm-service.herokuapp.com/login`, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          username: payload.email,
          password: payload.password
        })
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          if (state.errorMessage !== "") {
            state.errorMessage = ""
          }

          rootState.accessToken = data.access_token
          localStorage.setItem("accessToken", data.access_token)
        } else {
          state.errorMessage = data.message
          throw new Error(data.message)
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}

