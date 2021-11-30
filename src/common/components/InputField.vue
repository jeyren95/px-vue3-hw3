<template>
  <div>
    <Label 
    :label="label"
    :id="id"
    />
    <Input 
    :type="type"
    :id="id"
    :name="name"
    :required="required"
    :value="value"
    :handleInput="handleInput"
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
  props: ["label", "id", "name", "type", "required", "value", "handleInput"]
}
</script>