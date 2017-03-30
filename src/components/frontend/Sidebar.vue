<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <img src="img/avatars/8.jpg" class="img-avatar" alt="Avatar"/>
      <div><strong>Manel</strong></div>
      <div class="text-muted"><small>Founder &amp; CEO</small></div>

      <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
        <button type="button" class="btn btn-link">
          <i class="icon-settings"></i>
        </button>
        <button type="button" class="btn btn-link">
          <i class="icon-speech"></i>
        </button>
        <button type="button" class="btn btn-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="icon-user"></i>
        </button>
      </div>
    </div>
    <nav class="sidebar-nav">
      <ul class="nav">

        <!--Rutes afegides-->
        <li class="nav-item">
        <router-link :to="'/home'" class="nav-link" exact><i class="icon-home"></i> Home </router-link>
        </li>
        <li class="nav-item">
        <router-link :to="'/devices'" class="nav-link" exact><i class="icon-screen-tablet"></i> Devices </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/events'" class="nav-link" exact><i class="icon-event"></i> Events </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/graphics'" class="nav-link" exact><i class="icon-graph"></i> Graphics </router-link>
        </li>
        <!--<li class="nav-item">-->
          <!--<router-link :to="'/reports'" class="nav-link" exact><i class="icon-docs"></i> Reports </router-link>-->
        <!--</li>-->
        <li class="nav-item">
        <router-link tag="li" class="nav-item nav-dropdown" :to="{ path: '/reports'}" disabled>
          <div class="nav-link nav-dropdown-toggle" @click="handleClick"><i class="icon-docs"></i> Reports </div>
          <ul class="nav-dropdown-items">
            <li class="nav-item">
              <router-link :to="'/reports/cost-reports'" class="nav-link" exact><i class="fa fa-money" aria-hidden="true"></i> Cost Reports </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'/reports/invoice-simulation'" class="nav-link" exact><i class="fa fa-eur" aria-hidden="true"></i> Invoice Simulation </router-link>
            </li>
          </ul>
        </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/downloads'" class="nav-link" exact><i class="icon-cloud-download"></i> Downloads </router-link>
        </li>
        <!---->

        <li class="divider"></li>
        <li class="nav-title">
          Extras
        </li>
        <li class="nav-item nav-dropdown">
          <a class="nav-link nav-dropdown-toggle" href="#" @click="handleClick"><i class="icon-star"></i> Pages</a>
          <ul class="nav-dropdown-items">
            <li class="nav-item">
              <a class="nav-link" href="views/pages/login.html" target="_top"><i class="icon-star"></i> Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="views/pages/register.html" target="_top"><i class="icon-star"></i> Register</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="views/pages/404.html" target="_top"><i class="icon-star"></i> Error 404</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="views/pages/500.html" target="_top"><i class="icon-star"></i> Error 500</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>

export default {
  /* eslint-disable */
  name: 'sidebar',
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }
}
</script>

<style lang="css">
  .nav-link {
    cursor:pointer;
  }
</style>
