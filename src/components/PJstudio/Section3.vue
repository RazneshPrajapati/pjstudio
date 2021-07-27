<template>
  <div class="d-lg-flex justify-content-between full-height pt-lg-5">
    <div class="d-flex flex-column col-lg-4 gap-3 py-5">
      <div class="section3-big-text">
        Why <span class="color-orange">Qpox</span>
      </div>
      <div class="font-light col-lg-10">
        Duis aute irure dolor in reprehenderit in voluptate velit esse villum
        volore eu fugiat nulla pariatur.
      </div>
    </div>
    <div class="d-flex flex-column col-lg-6">
      <div
        class="
          d-lg-flex
          justify-content-around
          align-items-center
          section3-card-holder
          border-top
        "
      >
        <div class="section3-card-title-group">
          <div class="section3-card-title">12</div>
          <div class="section3-card-subtitle">Years experience</div>
        </div>
        <div class="section3-card-content col-lg-7 font-light">
          Duis aute irure dolor in reprehenderit in voluptate velit esse villum
          volore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </div>
      </div>
      <div
        class="
          d-lg-flex
          justify-content-around
          align-items-center
          section3-card-holder
          border-top
        "
      >
        <div class="section3-card-title-group">
          <div class="section3-card-title">9.3k</div>
          <div class="section3-card-subtitle">Successful projects</div>
        </div>
        <div class="section3-card-content col-lg-7 font-light">
          Duis aute irure dolor in reprehenderit in voluptate velit esse villum
          volore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </div>
      </div>
      <div
        class="
          d-lg-flex
          justify-content-around
          align-items-center
          section3-card-holder
          border-top border-bottom
        "
      >
        <div class="section3-card-title-group">
          <div class="section3-card-title">753</div>
          <div class="section3-card-subtitle">Employees worldwide</div>
        </div>
        <div class="section3-card-content col-lg-7 font-light">
          Duis aute irure dolor in reprehenderit in voluptate velit esse villum
          volore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.section3-card-holder {
  padding: 30px 20px;
}

.section3-card-title-group {
  border: 1px solid rgb(199, 199, 199);
  background-color: rgba(226, 226, 226, 0.55);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 100px;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
}

.section3-card-title {
  font-size: 2.3rem;
  font-weight: 600;
  line-height: 1;
}

.section3-card-subtitle {
  font-size: 0.7rem;
}

.section3-big-text {
  font-size: 4rem;
}

.color-orange {
  color: rgb(250, 143, 104);
}

@media only screen and (max-width: 991px) {
  .section3-card-title-group { 
    margin-bottom: 20px;
  }
}
</style>
