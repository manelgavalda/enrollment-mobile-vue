<template>
  <v-app class="app">
    <v-stepper v-model="e6" vertical>

      <v-stepper-step step="1" v-bind:complete="e6 > 1"> Select User <small></small> </v-stepper-step>
      <v-stepper-content step="1">

        <v-card class="grey lighten-4 elevation-0">
          <v-card-text>
            <v-container fluid>
              <v-layout row>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="Username"
                    :value="username"
                  ></v-text-field>
                </v-flex>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="Email"
                    :value="email"
                  ></v-text-field>
                </v-flex>

              </v-layout>
              <v-layout>
                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="TSI"
                  ></v-text-field>
                </v-flex>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="Birth Date"
                  ></v-text-field>
                </v-flex>

              </v-layout>

              <v-layout>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="Name"
                  ></v-text-field>
                </v-flex>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="DNI"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="Location"
                  ></v-text-field>
                </v-flex>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="Sex"
                  ></v-text-field>
                </v-flex>

              </v-layout>

              <v-layout row>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="Telephone"
                  ></v-text-field>
                </v-flex>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="Mobile Phone"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="First Surname"
                  ></v-text-field>
                </v-flex>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="Second Surname"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="Personal Email"
                  ></v-text-field>
                </v-flex>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="Postal Code"
                  ></v-text-field>
                </v-flex>

              </v-layout>

            </v-container>
          </v-card-text>
        </v-card>

        <v-btn primary @click.native="e6 = 2">Continue</v-btn>
      </v-stepper-content>

      <v-stepper-step step="2" v-bind:complete="e6 > 2"> Enrollments </v-stepper-step>
      <v-stepper-content step="2">
        <v-card class="grey lighten-4 elevation-0">
          <v-flex xs3>
            <v-btn-dropdown v-bind:options="[{ text: enrollments.name }]" label="Enrollment"></v-btn-dropdown>
          </v-flex>
        </v-card>
        <v-btn primary @click.native="e6 = 3">Continue</v-btn>
        <v-btn flat>Back</v-btn>
      </v-stepper-content>

      <v-stepper-step step="3">Enrollment information 2016-17 period</v-stepper-step>
      <v-stepper-content step="3">
        <v-card class="grey lighten-1 z-depth-1 mb-5" height="200px" />
        <v-btn primary @click.native="e6 = 4">Continue</v-btn>
        <v-btn flat>Back</v-btn>
      </v-stepper-content>

      <v-stepper-step step="4">Professional Modules</v-stepper-step>
      <v-stepper-content step="4">
        <v-card class="grey lighten-1 z-depth-1 mb-5" height="200px" />
        <v-btn primary @click.native="e6 = 5">Continue</v-btn>
        <v-btn flat>Back</v-btn>
      </v-stepper-content>

      <v-stepper-step step="5">Formative Units</v-stepper-step>
      <v-stepper-content step="5">
        <v-card class="grey lighten-1 z-depth-1 mb-5" height="200px" />
        <v-btn primary @click.native="e6 = 1">Continue</v-btn>
        <v-btn flat>Back</v-btn>
      </v-stepper-content>
    </v-stepper>

  </v-app>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Enrollment Mobile',

      e6: 0,
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
      location: '',

      // Enrollments
      academic_year: '',
      enrollment_id: '',
      study: '',
      course: '',
      class_group: '',

      // Enrollment Information TODO
      professional_modules: [],
      formative_units: [],
      enrollments: {}

      //      var professional_modules = {
      //        id,
      //        code,
      //        short_name,
      //        course_name,
      //        weekend_hours
      //      };

      //      var professional_modules = {
      //        id,
      //        code,
      //        short_name,
      //        course_name,
      //        weekend_hours
//  };
    }
  },
  created () {
    this.username = localStorage.getItem('user-name')
    this.email = localStorage.getItem('user-email')
    this.getEnrollments()
  },
  methods: {
    getEnrollments () {
      window.axios.get('/api/v1/enrollments_from_user')
        .then((response) => {
          console.log(response)
          this.enrollments = response.data
        }, (err) => {
          console.log(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
