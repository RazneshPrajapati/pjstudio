<template>
  <div class="background">
    <div class="container full-height">
      <div
        class="
          d-lg-flex
          flex-column
          justify-content-center
          align-items-center
          gap-4
          py-4
        "
      >
        <div class="section4-title-text col-lg-6 text-center">
          Our Office Gallery
        </div>
        <div class="section4-sub-title col-lg-6 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          quis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          quis!
        </div>
      </div>

      <div class="d-lg-flex justify-content-around align-items-center">
        <div class="section4-image mb-5"><img :src="require('../../assets/office1.jpeg')" alt="Office 1"></div>
        <div class="section4-image mb-5"><img :src="require('../../assets/office2.jpg')" alt="Office 1"></div>
        <div class="section4-image mb-5"><img :src="require('../../assets/office3.jpeg')" alt="Office 1"></div>
      </div>
    </div>

    <Section5 :navItems="navItems" />
  </div>
</template>

<script>
import Section5 from "@/components/PJstudio/Section5.vue";

export default {
  components: { Section5 },
  props: {
    navItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.background {
  background-color: rgb(32, 28, 28);
  width: 100%;
  position: absolute;
  left: 0;
}

.section4-title-text {
  font-size: 4rem;
  color: white;
}

.section4-sub-title {
  font-size: 1.1rem;
  color: rgb(100, 100, 100);
}

.section4-image {
  background-color: white;
  width: 300px;
  height: 400px;
  margin-left:auto;
  margin-right:auto;
}

.section4-image > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
