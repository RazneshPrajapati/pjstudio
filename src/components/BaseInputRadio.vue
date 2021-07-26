<template>
  <div
    class="d-flex align-items-center gap-2"
    v-for="(item, index) in radioItems"
    :key="index"
  >
    <input
      v-bind="$attrs"
      :checked="modelValue === item.value"
      @change="$emit('update:modelValue', item.value)"
      class="inp-border-outline"
    />{{ item.label }}
  </div>
</template>

<script>
export default {
  props: {
    radioItems: {
      type: Array,
      required: true,
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
