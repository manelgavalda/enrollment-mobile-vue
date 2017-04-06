<template>
  <div class="phone-viewport">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">Enrollment Mobile</h2>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Content</h3>
        </div>
      </md-toolbar>
      <md-list>
        <md-list-item @click="toggleLeftSidenav">
          <md-icon>move_to_inbox</md-icon>
          <router-link exact to="/login">Login</router-link>
        </md-list-item>

        <md-list-item @click="toggleLeftSidenav">
          <md-icon>send</md-icon>
          <router-link exact  to="/home" >Home</router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    closeRightSidenav () {
      this.$refs.rightSidenav.close()
    },
    open (ref) {
      console.log('Opened: ' + ref)
    },
    close (ref) {
      console.log('Closed: ' + ref)
    }
  }
}
</script>
<style>
</style>
