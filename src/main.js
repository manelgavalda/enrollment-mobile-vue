// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import Full from './components/containers/Full.vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.config.productionTip = true

Vue.use(VueMaterial)
Vue.use(VueRouter)

import router from './services/router'

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

Vue.material.setCurrentTheme('manel')

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
