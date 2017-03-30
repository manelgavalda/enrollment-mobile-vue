<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <Sidebar/>
      <main class="main">
        <!--<breadcrumb :list="list"/>-->
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <!--<AppAside/>-->
    </div>
    <AppFooter/>
  </div>
</template>

<script>
  /* eslint-disable */
import AppHeader from '../components/frontend/Header'
import Sidebar from '../components/frontend/Sidebar'
//import AppAside from '../components/frontend/Aside'
import AppFooter from '../components/frontend/Footer'
//import Breadcrumb from '../components/frontend/Breadcrumb'
import router from '../services/routes'

export default {
  name: 'app',
  components: {
    AppHeader,
    Sidebar,
//    AppAside,
    AppFooter,
//    Breadcrumb
  },
  computed: {

    name () {
//      return this.$route.name
      return this.router.name

    },

    list () {
//      return this.$route.matched
      return this.router.matched
    }
  },
  created() {
//      console.log(localStorage.getItem('system_id'))
  }
}
</script>
