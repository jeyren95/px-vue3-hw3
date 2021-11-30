<template>
  <div class="max-w-md mx-auto px-4 sm:px-6 py-6 bg-white shadow">
    <form @submit.prevent="handleSubmit"> 
      <div class="text-3xl mt-4 mb-8 font-extrabold text-center">Login</div>
      <div class="space-y-6">
        <InputField 
        type="text"
        label="Email"
        id="email"
        name="email"
        required="true"
        :value="email"
        :handleInput="handleEmailInput"
        />
        <InputField 
        type="password"
        label="Password"
        id="password"
        name="password"
        required="true"
        :value="password"
        :handleInput="handlePasswordInput"
        />
        <Button
        type="submit"
        >
        LOGIN
        </Button>
      </div>

    </form>
  </div>
</template>

<script>
import { mapState } from "vuex"

import InputField from "@/common/components/InputField.vue"
import Button from "@/common/components/Button.vue"

export default {
  components: {
    InputField,
    Button
  },
  computed: mapState(["email", "password"]),
  methods: {
    handleEmailInput(value) {
      this.$store.commit("setEmail", value)
    },
    handlePasswordInput(value) {
      this.$store.commit("setPassword", value)
    },
    handleSubmit() {
      this.$store.dispatch("handleSubmit")
    }
  }
}
</script>