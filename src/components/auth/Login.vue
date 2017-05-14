<template>
  <v-app id="app">
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
            <md-input type="text" v-model="email"></md-input>
          </md-input-container>

          <md-input-container md-has-password>
            <label>Password</label>
            <md-input type="password" v-model="password"></md-input>
          </md-input-container>

        </form>
      </md-card-content>
      <md-card-actions>
        <md-button @click.native="login" class="md-raised md-primary">Login</md-button>
        <!--<md-button class="md-raised md-accent">Register</md-button>-->
      </md-card-actions>
    </md-card>
  </v-app>
</template>

<script>
import axios from 'axios'
import constants from '../../constants'
export default {
  data () {
    return {
      authorized: false,
      email: '',
      password: ''
    }
  },
  created () {
    console.log('Login')
  },
  methods: {
    login: function () {
      axios.defaults.headers.common = {
        'X-Requested-With': 'XMLHttpRequest'
      }
      var formData = new FormData()
      formData.append('grant_type', constants.OAUTH_GRANT_TYPE)
      formData.append('client_id', constants.OAUTH_CLIENT_ID)
      formData.append('client_secret', constants.OAUTH_CLIENT_SECRET)
      formData.append('username', this.email)
      formData.append('password', this.password)
      formData.append('scope', '')

      var out = this

      console.log('Login')
      axios.post('http://localhost:8000/oauth/token', formData)
        .then(function (res) {
          var token = res.data.access_token
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
          console.log(token)
          window.localStorage.setItem('token', token)
          out.$router.push({path: 'home'})
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
}
</script>

