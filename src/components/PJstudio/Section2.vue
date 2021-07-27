<template>
  <div class="d-lg-flex flex-column justify-content-around align-items-center full-height">
    <div
      class="
        d-lg-flex
        flex-row
        justify-content-between
        align-items-center
        col-lg-12
      "
    >
      <div class="section2-responsive col-lg-6 section2-big-text mb-5">
        See all the best services that we provide.
      </div>
      <div class="d-lg-flex flex-column justify-content-center col-lg-6 gap-3">
        <div class="text-orange">_Services</div>
        <div class="font-light col-lg-9 my-4">
          Duis aute irure dolor in reprehenderit in volupatate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa.
        </div>
      </div>
    </div>
    <div class="d-lg-flex justify-content-around align-items-center col-12">
      <Section2Card />
    </div>
  </div>
</template>

<script>
import Section2Card from "./partials/Section2Card.vue";
export default {
  components: { Section2Card },
};
</script>

<style>
.text-orange {
  color: rgb(250, 143, 104);
}

.section2-big-text {
  font-size: 3.3rem;
  line-height: 1;
  font-weight: 500;
}
</style>
