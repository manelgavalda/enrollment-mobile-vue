<template>
  <v-app class="app">
    <v-card horizontal>
      <v-card-row img="https://s.gravatar.com/avatar/7d23ac5a56b02117f12c54f0d98bf6de?s=300" height="202px" style="max-width: 150px"></v-card-row>
      <v-card-column>
        <v-card-row height="75px" class="brown white--text">
          <v-card-text>
            <strong>DNI</strong>
            <div>1111111111X</div>
          </v-card-text>
        </v-card-row>
        <v-card-row height="75px" class="brown white--text">
          <v-card-text>
            <strong>Name</strong>
            <div>Manel Gavaldà Andreu</div>
          </v-card-text>
        </v-card-row>

        <v-card-row actions class="brown darken-2">
          <v-btn flat class="white--text">
            <v-icon left>directions</v-icon>More info
          </v-btn>
        </v-card-row>
      </v-card-column>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: 'personalStudentData',
  data () {
    return {
      msg: 'Welcome to Enrollment Mobile',
      // Alumn personal data.
      dni: '',
      tsi: '',
      birth_date: '',
      sex: '',
      name: '',
      first_surname: '',
      second_surname: '',
      username: '',
      telephone: '',
      mobile_phone: '',
      email: '',
      personal_email: '',
      postal_code: '',
      location: ''
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
