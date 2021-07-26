<template>
  <select
    id="workShift"
    name="workShift"
    @change="$emit('update:modelValue', $event.target.value)"
    size="1"
  >
    <option value="" disabled :selected="modelValue == ''">
      Select your work shift
    </option>
    <option
      v-for="item in workShiftItems"
      :value="item"
      :key="item"
      :selected="modelValue == item"
    >
      {{ item }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    workShiftItems: {
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

<style scopped>
#workShift {
  overflow-y :auto; 
  overflow-x:hidden; 
}
</style>
