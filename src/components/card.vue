<template>
  <div class="card my-4">
    <div class="row no-gutters shadow">
      <div class="col-md-3">
          <a :href="require(`@/assets/img/${img}`)">
        <img
          :src="require(`@/assets/img/${img}`)"
          class="card-img-top h-100_"
          :alt="img"
        />
        </a>
      </div>
      <div class="col-md-9">
        <div class="card-body">
          <h2 class="card-title">{{ title }}</h2>
          <p class="card-text">{{ desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    title: String,
    desc: String,
  },
};
</script>

<style scoped>
</style>
