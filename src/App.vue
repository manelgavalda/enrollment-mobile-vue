<template>
  <router-view></router-view>
</template>

<script>
  export default {
    name: 'app',
    created () {
      console.log(window.location.href)
      document.addEventListener('deviceready', this.onDeviceReady, false)
    },
    methods: {
      toggleLeftSidenav () {
        this.$refs.leftSidenav.toggle()
      },
      open (ref) {
        console.log('Opened: ' + ref)
      },
      close (ref) {
        console.log('Closed: ' + ref)
      },
      onDeviceReady  () {
        console.log('Working on platform ' + window.device.platform)
//      notifications.enable()
      }
    }
  }
</script>
<!--
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
