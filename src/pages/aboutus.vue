<template>
  <div class="container text-center py-3">
    <h2>O nama</h2>
    <div class="row">
      <div class="col-sm-4">
        <img
          src="../assets/img/electrician1.jpg"
          class="img-fluid"
          alt="o nama"
        />
      </div>
      <div class="col-sm-8 text-justify">
        <comp-aboutus />
      </div>
    </div>
  </div>
</template>

<script>
import compAboutus from "../components/CompAboutus.vue";
export default {
  metaInfo: {
    titleTemplate: "%s | O nama",
    meta: [
      {
        name: "description",
        content:
          "EL SOLUTION, OBRT ZA ELEKTROINSTALACIJSKE USLUGE posluje od 2019 godine sa sjedištem u Rijeci.",
      },
    ],
  },
  components: {
    compAboutus,
  },
};
</script>
