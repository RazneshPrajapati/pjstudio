<template>
  <div class="card-holder d-flex flex-column justify-content-between mb-5">
    <div class="card-image"><i class="bi bi-back card-icon"></i></div>
    <div class="card-title">Design</div>
    <div class="card-content font-light">
      Duis aute irure dolor in reprehenderit
    </div>
  </div>
  <div class="card-holder d-flex flex-column justify-content-between mb-5">
    <div class="card-image"><i class="bi bi-bag-fill card-icon"></i></div>
    <div class="card-title">Branding</div>
    <div class="card-content font-light">
      Duis aute irure dolor in reprehenderit
    </div>
  </div>
  <div class="card-holder d-flex flex-column justify-content-between mb-5">
    <div class="card-image"><i class="bi bi-award-fill card-icon"></i></div>
    <div class="card-title">Development</div>
    <div class="card-content font-light">
      Duis aute irure dolor in reprehenderit
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scopped>
.card-holder {
  border: 1px solid rgb(216, 216, 216);
  border-radius: 4px;
  padding: 20px 35px;
  width: 230px;
  height: 230px;
  margin-left: auto;
  margin-right: auto;
}

.card-image {
  height: 90px;
  width: 90px;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 500;
}

.card-icon {
    font-size: 60px;
    line-height: 1;
}

@media only screen and (max-width: 991px) {
  .card-image { 
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
