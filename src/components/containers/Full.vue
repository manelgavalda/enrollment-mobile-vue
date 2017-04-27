<template>
  <v-app class="elevation-1 app" top-toolbar left-fixed-sidebar>
    <md-toolbar style="color: white">
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="color: white">{{page_title}}</h2>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar>
        <div class="md-toolbar-container">
          <h3 style="color: white" class="md-title">Menu</h3>
        </div>
      </md-toolbar>
      <md-list>

        <md-list-item>
          <router-link @click.native="toggleLeftSidenav" exact  to="/home">
            <md-icon>send</md-icon> Home </router-link>
        </md-list-item>

        <md-list-item>
          <router-link @click.native="toggleLeftSidenav" exact  to="/profile">
            <md-icon>person_outline</md-icon> Profile </router-link>
        </md-list-item>

        <md-list-item>
          <router-link exact  to="/login">
            <md-icon>exit_to_app</md-icon> Logout </router-link>
        </md-list-item>

        <v-dialog v-model="d1">
          <v-btn primary dark slot="activator"> Exit </v-btn>
          <v-card>
            <v-card-row>
              <v-card-title>Exit</v-card-title>
            </v-card-row>
            <v-card-row>
              <v-card-text>Are you sure you want to Exit?</v-card-text>
            </v-card-row>
            <v-card-row actions>
              <v-btn class="green--text darken-1" flat="flat" @click.native="d1 = false">Disagree</v-btn>
              <v-btn class="green--text darken-1" flat="flat" @click.native="d1 = false">Agree</v-btn>
            </v-card-row>
          </v-card>
        </v-dialog>

      </md-list>

    </md-sidenav>
    <transition name="fade">
      <router-view></router-view>
    </transition>

    <v-footer id="footer">
      <div class="text-xs-right">Copyright @ 2016 by Manel Gavaldà Andreu</div>
    </v-footer><!--footer-->

  </v-app>

</template>

<script>
  export default {
    data () {
      return {
        page_title: 'Enrollments',
        d1: false
      }
    },
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
      },
      set (value) {
        // This setter gets called twice
        console.log('set!')
        this.showModal = value
      }
    }
  }
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }

  .app{
    margin-bottom:50px;
  }
  .footer{
    position:fixed;
    background-color:red;
    height: 35px;
    bottom:0px;
    left:0px;
    right:0px;
    margin-bottom:0px;
  }
</style>
