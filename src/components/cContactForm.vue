<template>
  <div>
    <c-loading :val="loading" title="" />
    <div v-if="d" class="text-center">
      <div v-if="!loading">
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
              />
            </div>
          </div>
        </div>
        <div class="form-group form-primary">
          <textarea
            v-model="d.msg"
            class="form-control text-left"
            placeholder="Poruka"
          >
          </textarea>
        </div>
        <div class="row">
          <div class="col-md-12">
            <button
              class="btn btn-secondary btn-md btn-block text-center m-b-20"
              @click="send(d)"
            >
              <i class="fa fa-phone"></i> Pošalji
            </button>
          </div>
        </div>
      </div>
      <div class="container py-5 px-2">
        <div v-if="resp" class="card">
          <div :class="classAlert" class="pt-3">
            <h3 v-if="resp.msg">{{ resp.msg }}</h3>
            <p v-if="resp.msg1">{{ resp.msg1 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      resp: null
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
        "text-success": this.resp.isSuccess,
        "text-danger": !this.resp.isSuccess,
      };
    },
  },
  methods: {
    send(d) {
      this.alert = null;
      if (this.isNullOrWhiteSpace(d.name)) {
        this.alert = "Ime je obavezno!";
        return;
      }
      if (this.isNullOrWhiteSpace(d.email) && this.isNullOrWhiteSpace(d.phone)) {
        this.alert = "Email ili Telefon su obavezni!";
        return;
      }
      if (this.isNullOrWhiteSpace(d.msg)) {
        this.alert = "Poruka je obavezna!";
        return;
      }
      this.post("mail/send", d).then((resp) => {
        this.resp = resp;
      });
    },
  },
};
</script>
