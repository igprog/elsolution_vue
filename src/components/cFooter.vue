<template>
  <div class="mt-5">
    <c-call-us background="bg-secondary text-center py-3 font-weight-bold text-white lead" astyle="text-white" />
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
              <c-contact />
            </div>
            <div class="col-md-5">
              <c-contact-form />
            </div>
          </div>
        </div>
      </div>
      <footer class="container-fluid">
        <div class="text-center">
          <span class="small"
            >Copyright © {{ year }} {{ constants.appName }} | Izrada web stranice:
            <a href="https://www.igprog.hr" title="Izrada web stranica i aplikacija" class="text-white font-weight-bold">IG PROG</a></span
          >
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import cContact from "./cContact.vue";
import cContactForm from "./cContactForm.vue";
import cCallUs from "./cCallUs.vue";
export default {
  components: {
    cContact,
    cContactForm,
    cCallUs
  },
  data() {
    return {
      year: new Date().getFullYear(),
      constants: this.$constants,
    };
  },
};
</script>