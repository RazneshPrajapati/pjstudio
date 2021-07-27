<template>
  <nav
    class="d-lg-flex flex-row justify-content-center align-items-center col-12"
  >
    <div
      class="d-flex flex-row justify-content-around align-items-center col-lg-5"
    >
      <div class="" v-for="navItem in navItems" :key="navItem">
        <a class="navItem" href="/{{navItem.toLowerCase()}}">{{ navItem }}</a>
      </div>
    </div>
    <div class="col-lg-2 text-center">
      <a class="navItem" href="/"><div class="logo">PJ-Studio</div></a>
    </div>
    <div class="d-lg-flex justify-content-end text-center col-lg-4">
      <a class="navIcon mx-2" href="/"><i class="bi bi-facebook"></i></a>
      <a class="navIcon mx-2" href="/"><i class="bi bi-instagram"></i></a>
      <a class="navIcon mx-2" href="/"><i class="bi bi-twitter"></i></a>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    navItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scopped>
nav {
  padding: 0.2em 3em;
  position: fixed;
  top: 0px;
  background-color: rgba(241, 241, 241);
  z-index: 1;
}

.navItem {
  text-decoration: none;
  color: rgb(170, 170, 170);
}

.navItem:hover {
  color: rgb(119, 116, 116);
}

.navIcon {
  text-decoration: none;
  color: rgb(163, 163, 163);
}

.navIcon:hover {
  color: rgb(148, 146, 146);
}

.logo {
  font-size: 2rem;
  color: rgb(105, 105, 105);
}
</style>
