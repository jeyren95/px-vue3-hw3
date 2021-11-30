<template>
  <main v-if="!accessToken" class="bg-gray-50 p-6 sm:p-12 min-h-screen">
    <LoginForm />
  </main>
</template>

<script>
import { mapState } from "vuex"

import LoginForm from "@/modules/auth/components/LoginForm.vue"

export default {
  name: 'App',
  components: {
    LoginForm
  },
  computed: mapState(["accessToken"])
}
</script>

