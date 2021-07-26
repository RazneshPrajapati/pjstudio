<template>
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Warning!</strong> {{ this.errorMessage }}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
