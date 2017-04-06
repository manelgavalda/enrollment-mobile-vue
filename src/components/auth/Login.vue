<template>
  <div class="app">
    <md-card>
      <!--<md-card-media>-->
        <!--<img src="/../images/enrollmentmobile_logo.png" alt="Logo">-->
      <!--</md-card-media>-->

      <md-card-header>
        <div class="md-title">Enrollment Mobile Login</div>
        <div class="md-subhead">Login for Enrollment Mobile Application</div>
      </md-card-header>
      <md-card-content>
        <form novalidate @submit.stop.prevent="submit">
          <md-input-container>
            <label>User</label>
            <md-input type="text"></md-input>
          </md-input-container>

          <md-input-container md-has-password>
            <label>Password</label>
            <md-input type="password"></md-input>
          </md-input-container>

        </form>
      </md-card-content>
      <md-card-actions>
        <md-button @click.native="login" class="md-raised md-primary">Login</md-button>
        <!--<md-button class="md-raised md-accent">Register</md-button>-->
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      authorized: false
    }
  },
  created () {
    console.log('Login')
  },
  methods: {
    login () {
      this.$router.push({path: 'home'})
    }
  }
}
</script>

