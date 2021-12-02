<template>
  <div>
    <Label :id="id" :label="label" />
    <Input 
    :type="type"
    :name="name"
    :id="id"
    :modelValue="modelValue"
    :required="required"
    @input-changed="handleInput"
    />
  </div>
</template>

<script>
import Input from "./Input.vue"
import Label from "./Label.vue"

export default {
  components: {
    Input,
    Label
  },
  props: ["id", "label", "type", "name", "required", "modelValue"],
  methods: {
    handleInput(value) {
      this.$emit("update:modelValue", value)
    }
  }
}
</script>