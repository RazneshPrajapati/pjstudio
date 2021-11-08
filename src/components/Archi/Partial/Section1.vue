<template>
  <div class="d-flex text-dark">
    <!-- <div class="card-deck"> -->
    <div class="card-holder" v-for="marvel in marvelData" :key="marvel.id">
      <img
        class="card-image"
        :src="`${marvel.thumbnail.path}/portrait_xlarge.${marvel.thumbnail.extension}`"
        alt=""
      />
      <div class="card-body">
        <h5 class="card-title">{{ marvel.title }}</h5>
        <p class="card-text">
          {{marvel.description}}
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">{{ marvel.modified }}</small>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      marvelData: "",
    };
  },
  created() {
    this.getComics();
  },

  methods: {
    getComics() {
      this.axios
        .get(
          "http://gateway.marvel.com/v1/public/comics?ts=54623215&apikey=43f236d0e2011c19c32eab8c8bda27a6&hash=804003c6d3c835e34b3d9acadfbaa821"
        )
        .then((response) => {
          console.log(response.data.data.results);
          this.marvelData = response.data.data.results;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style></style>
          <!-- {{
            marvel.description ? marvel.description.length > 20
              ? marvel.description.slice(0, 20) + "..."
              : marvel.description : ""
          }} -->
