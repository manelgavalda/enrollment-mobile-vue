<template>
  <div class="app">
    <!--<AppHeader/>-->
    <div class="app-body">
      <!--<Sidebar/>-->
      <main class="main">
        <breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <!--<AppAside/>-->
    </div>
    <!--<AppFooter/>-->
  </div>
</template>

<script>

export default {
  name: 'full',
  components: {
//    AppHeader,
//    Sidebar,
//    AppAside,
//    AppFooter,
//    Breadcrumb
  },
  computed: {
    name () {
      return this.$route.name
    },

    list () {
      return this.$route.matched
    }
  }
}
</script>
