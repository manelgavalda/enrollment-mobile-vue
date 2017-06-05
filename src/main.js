// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// import Full from './components/containers/Full.vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import Vuetify from 'vuetify'
import Axios from 'axios'
import 'vue-material/dist/vue-material.css'

Vue.config.productionTip = true

Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(Vuetify)

import router from './services/router'

window.axios = Axios
// Theme

Vue.material.registerTheme('manel', {
  primary: {
    color: 'red',
    hue: 700
  },
  accent: 'black',
  warn: 'red',
  background: {
    color: 'blue',
    hue: 300
  }
})

window.axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
}

window.axios.defaults.baseURL = 'http://enrollmentmobile.manelgavalda.sintesi.acacha.org:8080'
window.axios.defaults.headers.common = {
  'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
  'X-Requested-With': 'XMLHttpRequest',
  'Accept': 'application/json'
}

Vue.material.setCurrentTheme('manel')

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})

