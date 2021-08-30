<template>
  <div id="app">
    <c-navbar />
    <header class="banner">
      <div class="container text-center" style="padding: 80px 0 20px 0">
        <h1 class="font-weight-bold text-white display-1">El. Solution</h1>
        <h2 class="font-weight-bold display-5">Elektroinstalacijske usluge - Rijeka</h2>
      </div>
    </header>
    <router-view />
    <comp-footer />
  </div>
</template>

<script>
require("@/assets/styles/main.css");
import cNavbar from "./components/cNavbar.vue";
import compFooter from "./components/CompFooter.vue";
import { mixin } from "./mixins/mixin.js";
export default {
  mixins: [mixin],
  name: "App",
  metaInfo: {
    title: "El. Solution",
    htmlAttrs: {
      lang: "hr",
    },
  },
  components: {
    cNavbar,
    compFooter
  },
  // data() {
  //   return {
  //     authenticated: false,
  //     year: new Date().getFullYear(),
  //   };
  // },
  // created() {},
  // mounted() {},
  // methods: {
  //   setAuthenticated(status) {
  //     this.authenticated = status;
  //   },
  //   logout() {
  //     this.authenticated = false;
  //   },
  // },
};
</script>

<style scoped src="@/assets/styles/main.css">
</style>