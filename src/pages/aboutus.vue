<template>
  <div class="container text-center py-3">
    <h2>O nama</h2>
    <div class="row pt-3">
      <div class="col-sm-4">
        <img
          src="../assets/img/electrician1.jpg"
          class="img-fluid"
          alt="o nama"
        />
      </div>
      <div class="col-sm-8 text-justify">
        <c-about-us />
      </div>
    </div>
  </div>
</template>

<script>
import cAboutUs from "../components/cAboutUs.vue";
export default {
  metaInfo: {
    titleTemplate: "%s | O nama",
    meta: [
      {
        name: "description",
        content:
          "EL SOLUTION, OBRT ZA INSTALACIJSKE USLUGE posluje od 2019 godine sa sjedištem u Rijeci.",
      },
    ],
  },
  components: {
    cAboutUs,
  },
};
</script>
