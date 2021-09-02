import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import aboutus from '@/pages/aboutus'
import services from '@/pages/services'
import test from '@/pages/test'
import contact from '@/pages/contact'
import reviews from '@/pages/reviews'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Naslovna',
      component: home
    },
    {
      path: '/o-nama',
      name: 'O Nama',
      component: aboutus
    },
    {
      path: '/usluge',
      name: 'Usluge',
      component: services
    },
    {
      path: '/kontakt',
      name: 'Koktakt',
      component: contact
    },
    {
      path: '/recenzije',
      name: 'Recenzije',
      component: reviews
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: login
    // },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})