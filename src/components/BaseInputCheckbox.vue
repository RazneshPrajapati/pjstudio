<template>
  <div
    class="d-flex align-items-center gap-2"
    v-for="(item, index) in checkboxItems"
    :key="index"
  >
    <input
      v-bind="$attrs"
      :name="item.value"
      :id="item.value"
      :value="item.value"
      :checked="modelValue.includes(item.value)"
      class=""
      @change="
        $emit(
          'update:modelValue',
          modelValue.includes(item.value)
            ? modelValue.filter((value) => {
                return value != item.value;
              })
            : modelValue.concat(item.value)
        )
      "
    />
    {{ item.label }}
  </div>
</template>

<script>
export default {
  props: {
    checkboxItems: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: Array,
    },
  },
};
</script>

<style scopped>
input[type="checkbox"]:hover {
  cursor: pointer;
}
</style>
