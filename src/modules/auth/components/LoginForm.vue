<template>
  <div class="max-w-md mx-auto px-4 sm:px-6 py-6 bg-white shadow">
    <form @submit.prevent="handleSubmit"> 
      <div class="text-3xl mt-4 mb-8 font-extrabold text-center">Login</div>
      <div class="space-y-6">
        <p v-if="errorMessage !== ''" class="text-red-500">{{ errorMessage }}, please enter valid credentials.</p>
        <!-- in vue3 => v-model translates into :value="email", @update:model-value="email = e.target.value" -->
        <InputField 
        type="text"
        id="email"
        label="Email"
        name="email"
        required="true"
        v-model="email"
        />
        <InputField
        type="password"
        id="password"
        label="Password"
        name="password"
        required="true"
        v-model="password"
        />
        <Button
        type="submit"
        class="
        w-full
        inline-flex 
        justify-center 
        items-center 
        py-2 px-4 
        border border-transparent 
        shadow-sm 
        text-sm 
        font-medium
        rounded-md
        text-white
        bg-pink-600
        hover:bg-pink-700 
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-pink-500  
        "
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
  data() {
    return {
      email: "",
      password: ""
    }
  },
  computed: {
    ...mapState({
      errorMessage: state => state.authStore.errorMessage
    })
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch("handleSubmit", { email: this.email, password: this.password })
      this.email = ""
      this.password = ""
    }
  }
}
</script>