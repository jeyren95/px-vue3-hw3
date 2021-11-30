<template>
  <div class="mt-1">
    <input 
    class="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
    :type="type"
    :name="name"
    :id="id"
    :required="required"
    :value="value"
    @input="(e) => handleInput(e.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ["type", "name", "id", "required", "value", "handleInput"]
}
</script>