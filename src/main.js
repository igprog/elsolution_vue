// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
// Font awesome
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

import resource from 'vue-resource';
Vue.use(resource);

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

Vue.config.productionTip = false

Vue.prototype.$constants = {
  appName: 'El Solution',
  appDomain: 'elsolution.hr',
  company: 'El Solution, obrt za instalacijske usluge',
  address: 'Kršinićeva 20, 51000 Rijeka, Hrvatska',
  phone: '+385 99 220 6399',
  phoneShort: '099 220 6399',
  email: 'markosupica@gmail.com',
  pin: '07474673441',
  sendTo: 'igprog@yahoo.com'
}

// Vue.prototype.$apiurl = 'https://localhost:5001/api';

Vue.prototype.$isLogin = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
