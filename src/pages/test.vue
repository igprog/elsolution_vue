<template>
  <div class="container text-left">
    <h1>{{ d.msg }}</h1>
    globalVariable: {{ d.gl }}
    <p>backend: {{ d.backend }}</p>
    <div>
      <c-control
        type="button"
        @click="testMixin"
        css="warning"
        title="Test mixin"
      />
    </div>
    <div>
      <c-control
        type="button"
        @click="getConfig"
        css="info"
        title="Test Http Get"
      />
    </div>
    <div>
      <c-control
        type="button"
        @click="postData"
        css="primary"
        title="Test Http Post"
      />
      <c-loading :val="loading" title="Loading Data from web service" />
    </div>
    <div>
      <c-control
        type="button"
        @click="testLoading"
        css="danger"
        title="Test Loading"
      />
    </div>
    <div>
      <c-control type="button" @click="testMail" css="danger" title="Test Mail" />
    </div>
    <div>
      <control
        type="button"
        @click="testApiGet"
        css="info"
        title="Test API Get"
      />
    </div>
    <div>
      <c-control
        type="button"
        @click="testApiInit"
        css="secondary"
        title="Test API Init"
      />
    </div>
    <div>
      <c-control
        type="button"
        @click="testApiPost"
        css="success"
        title="Test API Post"
      />
    </div>
    <c-loading :val="d.loading" title="Loading..." />
    <icon name="home" scale="5" title="Test"></icon>
    <c-json :data="d" />
  </div>
</template>

<script>
import cJson from "../components/cJson.vue";
import cControl from "../components/cControl.vue";
import cLoading from "../components/cLoading.vue";
import { mixin } from "../mixins/mixin.js";
import axios from "axios";
export default {
  mixins: [mixin],
  components: {
    cJson,
    cControl,
    cLoading,
  },
  data() {
    return {
      d: {
        msg: "Test",
        gl: this.$constants,
        config: null,
        postdata: null,
        loading: false,
        maildata: {
          name: "Igor",
          email: "igprog@yahoo.com",
          messageSubject: "subject test",
          message: "message body test....",
        },
        backend: this.$backend,
        resp: null,
        root_api: process.env.VUE_APP_ROOT_API
      },
    };
  },
  mounted() {
    console.log('process.env', process.env)
  },
  methods: {
    getConfig() {
      this.gethttp("static/config.json").then((d) => {
        this.d.config = d;
      });
    },
    postData() {
      //this.d.loading = true;
      this.postasmx("Mail", "Test", null).then((d) => {
        this.d.postdata = d;
        alert(d);
        //this.d.loading = false;
      });
    },
    testLoading() {
      this.d.loading = true;
    },
    testMail() {
      this.postasmx("Mail", "Send", this.d.maildata).then((d) => {
        this.d.postdata = d;
        //this.d.loading = false;
      });
    },
    testApiGet() {
      const api = "https://localhost:5001/api/mail";
      axios.get(api).then((response) => {
        console.log(response.data);
      });
    },
    testApiInit() {
      // Init Mail
      // const service = 'mail/init';
      // axios.get(`${process.env.ROOT_API}/${service}`).then((response) => {
      //   this.d.resp = response.data;
      //   console.log('d.resp', response.data);
      // });
      
      this.get("mail/init").then((d) => {
        debugger;
        console.log(d);
      });
    },
    testApiPost() {
      
      this.d.resp.name = "Igor Gašparović";
      this.d.resp.email = "igprog@yahoo.com";
      this.d.resp.msg = "Ovo je test...";

      console.log('process.env.ROOT_API', process.env.ROOT_API);
      const service = 'mail/save';
      // this.d.loading = true;
      axios.post(`${process.env.ROOT_API}/${service}`, this.d.resp).then((response) => {
        debugger;
        console.log("axios post", response.data);
        this.d.loading = false;
      });
      // this.post("mail/send", this.d.resp).then((d) => {
      //   console.log(d);
      // });
    },
  },
};
</script>

<style scoped>
h1 {
  color: #c07228;
}
</style>
