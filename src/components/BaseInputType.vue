<template>
  <label :for="id" class="label">{{ label }}</label>
  <input
    v-bind="$attrs"
    class="inp-border-outline"
    :placeholder="label"
    name=""
    :id="id"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style>
.inp-border-outline:hover {
  border: 2px solid rgb(86, 86, 255);
}

.inp-border-outline:focus {
  outline: none;
  border: 2px solid blue;
}

input[type="file"]:hover,
input[type="file"]:focus {
  border: none;
}
</style>
