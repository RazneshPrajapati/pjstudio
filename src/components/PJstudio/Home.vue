<template>
  <div class="d-lg-flex flex-row align-items-center col-12 full-height">
    <div class="d-lg-flex flex-column col-lg-6">
      <div class="d-flex flex-row align-items-center quotes">
        <div class="big-dash"></div>
        <span class="font-italic"
          >"We help people to reshape their business."</span
        >
      </div>
      <div class="col-lg-12 font-big py-4">
        <img :src="avatar1" alt="Avatar" class="avatar" />
        We are
        <span class="text-color-orange">creative</span>
        &amp;
        <span class="text-color-orange">minimalis</span>
        agency
        <img :src="avatar1" alt="Avatar" class="avatar" />
      </div>
      <div
        class="
          d-lg-flex
          flex-row
          col-lg-12
          justify-content-center
          align-items-center
        "
      >
        <div class="text-center col-lg-4">
          <button class="btn text-uppercase background-primary">
            Let's Talk
          </button>
        </div>
        <div class="font-light col-lg-7 py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum eius
          dignissimos quidem consequatur placeat quaerat asperiores nemo labore
          alias sequi.
        </div>
      </div>
    </div>
    <div class="d-lg-flex flex-column justify-content-start text-center pt-5">
      <img class="rotate-image-90" :src="meetingImage" alt="Meeting" />
    </div>
  </div>
</template>

<script>
import avatar1 from "../../assets/avatar1.jpg";
import meetingImage from "../../assets/meeting.jpg";

export default {
  data() {
    return {
      avatar1,
      meetingImage,
    };
  },
};
</script>

<style>
.background-primary {
  background-color: rgb(250, 143, 104);
}

.btn {
  font-size: 14px;
  padding: 10px 20px;
}

.font-big {
  font-size: 5.5em;
  line-height: 1;
}

.text-color-orange {
  color: rgb(250, 143, 104);
  font-size: 3rem;
}

.big-dash {
  background-color: black;
  height: 2px;
  width: 20px;
  margin: 0px 9px;
}

.avatar {
  vertical-align: middle;
  width: 75px;
  height: 75px;
  border-radius: 50%;
}

.rotate-image-90 {
  transform: rotate(90deg);
  width: 95%;
}

@media only screen and (max-width: 991px) {
  .quotes {
    justify-content: center;
  }
}
</style>
