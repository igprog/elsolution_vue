<template>
  <div class="mt-3">
    <div class="bg-secondary text-center py-3 font-weight-bold text-white lead">
      <span>Nazovite nas</span>
      <a :href="`tel:${constants.phone}`" class="text-white"
        ><icon name="phone" scale="2" /> {{ constants.phoneShort }}</a
      >
    </div>
    <div class="footer-gradient">
      <div class="pt-3">
        <div class="container-fluid px-5">
          <div class="row">
            <div class="col-md-2 pb-4">
              <img
                src="../assets/img/elsolution.jpg"
                alt="elsolution"
                class="img-fluid"
              />
            </div>
            <div class="col-md-5">
              <comp-contact />
            </div>
            <div class="col-md-5">
              <comp-contactform />
            </div>
          </div>
        </div>
      </div>
      <footer class="container-fluid">
        <div class="text-center">
          <span class="small"
            >Copyright © {{ year }} El Solution | Izrada web stranice:
            <a href="https://www.igprog.hr" title="Izrada web stranica i aplikacija" class="text-white font-weight-bold">IG PROG</a></span
          >
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import compContact from "./CompContact.vue";
import compContactform from "./CompContactform.vue";
export default {
  components: {
    compContact,
    compContactform,
  },
  data() {
    return {
      year: new Date().getFullYear(),
      constants: this.$constants,
    };
  },
};
</script>