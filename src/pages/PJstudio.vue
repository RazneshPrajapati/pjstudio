<template>
  <div class="">
    <Navbar :navItems="navItems" />
    <div class="container">
      <div class="landingPage">
        <Home />
      </div>
      <Section2 />
      <Section3 />
      <Section4 :navItems="navItems" />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/PJstudio/Navbar.vue";
import Home from "@/components/PJstudio/Home.vue";
import Section2 from "@/components/PJstudio/Section2.vue";
import Section3 from "@/components/PJstudio/Section3.vue";
import Section4 from "@/components/PJstudio/Section4.vue";
export default {
  components: { Navbar, Home, Section2, Section3, Section4 },
  data() {
    return {
      navItems: ["Home", "Projects", "Blog", "Contact Us"],
    };
  },
};
</script>

<style scopped>
.landingPage {
  display: flex;
  justify-content: center;
  align-items: center;
}

body {
  background-color: rgba(241, 241, 241, 0.534);
}

@media only screen and (max-width: 991px) {
  body {
    text-align: center;
  }
  .font-big {
    font-size: 4em;
  line-height: 1;
  }
  .rotate-image-90 {
    width: 350px;
    margin-bottom: 90px;
  }
  .full-height {
    height: fit-content;
  }
  .landingPage {
    margin-top: 8em;;
  }
}
</style>
