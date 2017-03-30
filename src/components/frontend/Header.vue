<template>
  <navbar>
    <button class="navbar-toggler mobile-sidebar-toggler hidden-lg-up" type="button" @click="mobileSidebarToggle">&#9776;</button>
    <a class="navbar-brand" href="#"></a>
    <ul class="nav navbar-nav hidden-md-down">
      <li class="nav-item">
        <a class="nav-link navbar-toggler sidebar-toggler" href="#" @click="sidebarToggle">&#9776;</a>
      </li>
      <li class="nav-item px-1">
        <a class="nav-link" href="#">Dashboard</a>
      </li>
      <li class="nav-item px-1">
        <a class="nav-link" href="#">Users</a>
      </li>
      <li class="nav-item px-1">
        <a class="nav-link" href="#">Settings</a>
      </li>
    </ul>
    <ul class="nav navbar-nav ml-auto">
      <li class="nav-item hidden-md-down">
        <a class="nav-link" href="#"><i class="icon-bell"></i><span class="badge badge-pill badge-danger">5</span></a>
      </li>
      <li class="nav-item hidden-md-down">
        <a class="nav-link" href="#"><i class="icon-list"></i></a>
      </li>
      <li class="nav-item hidden-md-down">
        <a class="nav-link" href="#"><i class="icon-location-pin"></i></a>
      </li>


      <dropdown size="nav" class="nav-item">
        <span slot="button">
          <img src="img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
          <span class="hidden-md-down">admin</span>
        </span>
        <div slot="dropdown-menu"class="dropdown-menu dropdown-menu-right">

          <div class="dropdown-header text-center"><strong>Account</strong></div>

          <a class="dropdown-item" href="#"><i class="fa fa-bell-o"></i> Updates<span class="badge badge-info">42</span></a>
          <a class="dropdown-item" href="#"><i class="fa fa-envelope-o"></i> Messages<span class="badge badge-success">42</span></a>
          <a class="dropdown-item" href="#"><i class="fa fa-tasks"></i> Tasks<span class="badge badge-danger">42</span></a>
          <a class="dropdown-item" href="#"><i class="fa fa-comments"></i> Comments<span class="badge badge-warning">42</span></a>

          <div class="dropdown-header text-center"><strong>Settings</strong></div>

          <a class="dropdown-item" href="#"><i class="fa fa-user"></i> Profile</a>
          <a class="dropdown-item" href="#"><i class="fa fa-wrench"></i> Settings</a>
          <a class="dropdown-item" href="#"><i class="fa fa-usd"></i> Payments<span class="badge badge-default">42</span></a>
          <a class="dropdown-item" href="#"><i class="fa fa-file"></i> Projects<span class="badge badge-primary">42</span></a>
          <div class="divider"></div>
          <a class="dropdown-item" href="#"><i class="fa fa-shield"></i> Lock Account</a>
          <a class="dropdown-item" @click="logout"><i class="fa fa-lock"></i> Logout</a>
          <!--<form id="logout-form" action="/logout" method="POST" style="display: none;">-->
            <!--{{ csrf_field() }}-->
            <!--<input type="submit" value="logout" style="display: none;">-->
          <!--</form>-->
        </div>
      </dropdown>
      <li class="nav-item hidden-md-down">
        <a class="nav-link navbar-toggler aside-menu-toggler" href="#" @click="asideToggle">&#9776;</a>
      </li>
    </ul>
  </navbar>
</template>
<script>
  /* eslint-disable */
import navbar from './Navbar'
import { dropdown } from 'vue-strap'
import VueRouter from "vue-router";

export default {
  name: 'header',
  components: {
    navbar,
    dropdown
  },
  methods: {
    click () {
      // do nothing
    },
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    },

      //logout
      logout: function (user) {
          window.localStorage.clear()
          axios.post('/logout', {
//              name: user.name,
//              surnames: user.surnames,
//              email: user.email,
//              phone: user.phone,
//              charge: user.charge,
//              password: user.password,
//              password_confirmation: user.password_confirmation,
//              avatar: user.avatar,
//              systems: user.systems
          }).then((response) => {
              window.location.reload(false)
              console.log(response)
          }, (response) => {
              window.location.reload(false)
//              console.log(response);
          })
      }
  }
}
</script>

<style lang="css">

.dropdown-toggle::after {
  /*display: none !important;*/
}
</style>
