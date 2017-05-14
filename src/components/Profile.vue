<template>
  <v-app class="app">
    <v-card>
      <v-card-text>
        <v-card-row height="75px">
          <img :src="avatar" style="margin-right:42px; border-radius:100px" alt="">
          <div>
            <div>Name</div><strong>{{user_name}}</strong>
          </div>
        </v-card-row>
        <v-card-row height="75px">
          <v-icon class="mr-5">email</v-icon>
          <div>
            <div>Email</div><strong>{{user_email}}</strong>
          </div>
        </v-card-row>
      </v-card-text>
      <v-card-row actions>
        <v-btn flat class="green--text darken-1">View Email</v-btn>
      </v-card-row>
    </v-card>
  </v-app>
</template>

<script>

import gravatar from 'gravatar'
export default {
  name: 'profile',
  data () {
    return {
      user_name: '-',
      user_email: '-'
    }
  },
  created () {
    console.log('profile')
    this.getUserData()
  },
  methods: {
    getUserData () {
      this.user_name = localStorage.getItem('user-name')
      this.user_email = localStorage.getItem('user-email')
      this.avatar = 'http:' + gravatar.url(this.user_email)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
