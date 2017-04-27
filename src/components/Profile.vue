<template>
  <v-app class="app">
    <v-card>
      <v-card-text>
        <v-card-row height="75px">
          <img src="https://s.gravatar.com/avatar/7d23ac5a56b02117f12c54f0d98bf6de?s=30" style="margin-right:42px; border-radius:100px" alt="">
          <div>
            <div>Name</div><strong>Manel Gavaldà Andreu</strong>
          </div>
        </v-card-row>
        <v-card-row height="75px">
          <v-icon class="mr-5">email</v-icon>
          <div>
            <div>Email</div><strong>manelgavalda@iesebre.com</strong>
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
export default {
  name: 'profile',
  data () {
    return {
      msg: 'Welcome to Enrollment Mobile'
    }
  },
  created () {
    console.log('profile')
    this.prova()
  },
  methods: {
    prova () {
      console.log('profile')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
