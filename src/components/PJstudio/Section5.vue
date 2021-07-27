<template>
  <div class="border-top m-4"></div>
  <div
    class="
      container
      d-flex
      col-12
      flex-column
      align-items-center
      gap-5
    "
  >
    <a class="navItem" href="/"><div class="footer-logo">PJ-Studio</div></a>
    <div class="text-center font-light col-lg-6">
      I am currently part of the design team at Sopra Steria in Madrid, and I
      had the opportunity to help create digital experiences.
    </div>
    <div class=""><a class="lets-talk" href="/">Let's Talk</a></div>
    <div class="d-flex align-items-center gap-4 color-white">
      Follow us on:
      <span class="d-flex gap-3">
        <a class="footer-icon" href="/"><i class="bi bi-facebook"></i></a>
        <a class="footer-icon" href="/"><i class="bi bi-instagram"></i></a>
        <a class="footer-icon" href="/"><i class="bi bi-twitter"></i></a>
      </span>
    </div>
    <div class="d-flex justify-content-center col-12">
      <div class="d-flex flex-row justify-content-around align-items-center">
        <div class="mx-lg-4 mx-2" v-for="navItem in navItems" :key="navItem">
          <a class="footer-navItems" href="/{{navItem.toLowerCase()}}">{{
            navItem
          }}</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Copyright -->
  <div class="d-flex align-items-center justify-content-center col-12 my-4 p-3">
    <div class="border-top col-4"></div>
    <div class="copyright-text col-4 text-center">
      Copyright &copy; PJStudio {{ currentYear }}. All Right Reserves
    </div>
    <div class="border-top col-4"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
  props: {
    navItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.footer-logo {
  font-size: 2rem;
  color: rgb(255, 255, 255);
}

.lets-talk {
  font-size: 2.5rem;
  font-weight: 500;
  color: rgb(250, 143, 104);
}

.lets-talk:hover {
  color: rgb(212, 109, 71);
}

.footer-icon {
  color: white;
  line-height: 1;
  border: 2px solid rgb(75, 75, 75);
  border-radius: 100%;
  padding: 10px 10px;
}

.footer-icon:hover {
  border: 2px solid rgb(255, 255, 255);
  color: white;
}

.footer-navItems {
  font-size: 1rem;
  text-decoration: none;
  color: rgb(168, 168, 168);
}

.footer-navItems:hover {
  color: rgb(223, 223, 223);
}

.footer-navItems:active {
  color: white;
}

.copyright-text {
  font-size: 1em;
  color: white;
}
</style>
