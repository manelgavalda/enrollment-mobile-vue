<template>
  <v-app id="app">
    <md-card style="background-color: white">
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
      <md-snackbar md-position="bottom center" ref="connectionError" md-duration="4000">
        <span>Login error.</span>
      </md-snackbar>
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
      password: '',
      user: {}
    }
  },
  created () {
    console.log('Login')
  },
  methods: {

    showConnectionError () {
      this.$refs.connectionError.open()
    },

    login: function () {
      var formData = new FormData()
      formData.append('grant_type', constants.OAUTH_GRANT_TYPE)
      formData.append('client_id', constants.OAUTH_CLIENT_ID)
      formData.append('client_secret', constants.OAUTH_CLIENT_SECRET)
      formData.append('username', this.email)
      formData.append('password', this.password)
      formData.append('scope', '')

      console.log('Login')
      axios.post('/oauth/token', formData)
        .then((res) => {
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access_token
          localStorage.setItem('token', res.data.access_token)
          console.log(res.data.access_token)
          this.getUser()
          this.$router.push({path: 'home'})
        }, (error) => {
          console.log(error)
          this.showConnectionError()
        })
    },
    getUser () {
      axios.get('/api/v1/user', {
      }).then((response) => {
        console.log(response.data)
        this.user = response.data
        this.saveUserInfo()
      }, (error) => {
        console.log(error)
      })
    },
    saveUserInfo () {
      localStorage.setItem('user-name', this.user.name)
      localStorage.setItem('user-email', this.user.email)
    }
  }
}
</script>

