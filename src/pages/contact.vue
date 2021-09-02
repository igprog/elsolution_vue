<template>
  <div>
    <div class="container py-3">
      <div class="row mt-5">
        <div class="col-lg-5">
          <c-contact />
        </div>
        <div class="col-lg-7">
          <c-contact-form />
        </div>
      </div>
      <div style="height: 400px">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.321230545586!2d14.398239815067406!3d45.34232744958904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764a6db255cc875%3A0x31bb44b2564cc951!2sKr%C5%A1ini%C4%87eva%20ul.%2020%2C%2051000%2C%20Rijeka!5e0!3m2!1sen!2shr!4v1629986377460!5m2!1sen!2shr" style="border: 0; width: 100%; height: 95%" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import cContact from "../components/cContact.vue";
import cContactForm from "../components/cContactForm.vue";
import { mixin } from "../mixins/mixin.js";
export default {
  metaInfo: {
    titleTemplate: "%s | Kontakt",
    meta: [
      {
        name: "description",
        content:
          "Za sva pitanja kontaktirajte nas putem telefona ili emaila ili ispunite formu za kontakt.",
      },
    ],
  },
  mixins: [mixin],
  components: {
    cContact,
    cContactForm,
  },
};
</script>