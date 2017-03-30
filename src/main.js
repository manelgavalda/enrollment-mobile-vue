// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.config.productionTip = true
Vue.use(VueMaterial)
Vue.use(VueRouter)
/* eslint-disable no-new */

import router from './services/router'

new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
