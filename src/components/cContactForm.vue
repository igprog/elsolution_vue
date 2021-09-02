<template>
  <form>
    <c-loading :val="loading" title="" />
    <div v-if="d" class="text-center">
      <div v-if="!d.resp.isSent && !loading">
        <div class="row">
          <div class="col-md-12">
            <h1 class="text-center contact-us">Pošaljite upit</h1>
            <c-json :data="d" />
            <div v-if="alert" class="alert alert-danger mt-3">
              <h5>{{ alert }}</h5>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="form-group form-primary">
              <input
                v-model="d.name"
                type="text"
                class="form-control text-left"
                placeholder="Ime"
                required=""
              />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group form-primary">
              <input
                v-model="d.email"
                type="email"
                class="form-control text-left"
                placeholder="Email"
                required=""
              />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group form-primary">
              <input
                v-model="d.phone"
                type="text"
                class="form-control text-left"
                placeholder="Telefon"
                required=""
              />
            </div>
          </div>
        </div>
        <div class="form-group form-primary">
          <textarea
            v-model="d.msg"
            class="form-control text-left"
            placeholder="Poruka"
            required=""
          >
          </textarea>
        </div>
        <div class="row">
          <div class="col-md-12">
            <button
              type="submit"
              class="btn btn-secondary btn-md btn-block text-center m-b-20"
              @click="send(d)"
            >
              <i class="fa fa-phone"></i> Pošalji
            </button>
          </div>
        </div>
      </div>
      <div class="container py-5 px-2">
        <div v-if="d.resp.msg" class="card">
          <div :class="classAlert" class="pt-3">
            <h3 v-if="d.resp.msg">{{ d.resp.msg }}</h3>
            <p v-if="d.resp.msg1">{{ d.resp.msg1 }}</p>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import cJson from "./cJson.vue";
import cLoading from "./cLoading.vue";
import { mixin } from "../mixins/mixin.js";
export default {
  mixins: [mixin],
  components: {
    cJson,
    cLoading,
  },
  data() {
    return {
      d: null,
      alert: null,
    };
  },
  created() {
    this.get("mail/init").then((resp) => {
      this.d = resp;
      this.d.sendTo = this.$constants.sendTo;
      this.d.owner = this.$constants.owner;
    });
  },
  computed: {
    classAlert: function () {
      return {
        "text-success": this.d.resp.isSent,
        "text-danger": !this.d.resp.isSent,
      };
    },
  },
  methods: {
    send(d) {
      this.alert = null;
      if (
        this.isNullOrWhiteSpace(d.name) ||
        this.isNullOrWhiteSpace(d.email) ||
        this.isNullOrWhiteSpace(d.phone) ||
        this.isNullOrWhiteSpace(d.msg)
      ) {
        this.alert = "Sva polja su obavezna!";
        return;
      }
      this.post("mail/send", d).then((resp) => {
        this.d = resp;
      });
    },
  },
};
</script>
