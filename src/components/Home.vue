<template>
  <v-app class="app">
    <v-stepper v-model="e6" vertical>

      <v-stepper-step step="1" v-bind:complete="e6 > 1"> User Information </v-stepper-step>
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
                    :value="person.tsi"
                  ></v-text-field>
                </v-flex>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="Birth Date"
                    :value="person.birth_date"
                  ></v-text-field>
                </v-flex>

              </v-layout>

              <v-layout>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="Name"
                    :value="person.name"
                  ></v-text-field>
                </v-flex>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="DNI"
                    :value="person.dni"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="Location"
                    :value="person.location"
                  ></v-text-field>
                </v-flex>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="Sex"
                    :value="person.sex"
                  ></v-text-field>
                </v-flex>

              </v-layout>

              <v-layout row>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="Telephone"
                    :value="person.telephone"
                  ></v-text-field>
                </v-flex>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="Mobile Phone"
                    :value="person.mobile_phone"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="First Surname"
                    :value="person.first_surname"
                  ></v-text-field>
                </v-flex>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="Second Surname"
                    :value="person.second_surname"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="Personal Email"
                    :value="person.personal_email"
                  ></v-text-field>
                </v-flex>

                <v-flex xs6>
                  <v-text-field
                    name="input-1"
                    label="Postal Code"
                    :value="person.postal_code"
                  ></v-text-field>
                </v-flex>

              </v-layout>

            </v-container>
          </v-card-text>
        </v-card>

        <v-btn primary @click.native="e6 = 2">Continue</v-btn>
      </v-stepper-content>

      <v-stepper-step step="2" v-bind:complete="e6 > 2"> Enrollment Name (5 characters min) </v-stepper-step>
      <v-stepper-content step="2">
        <v-card class="grey lighten-4 elevation-0">
          <!--<v-flex xs3>-->
            <!--<v-btn-dropdown v-bind:options="[{ text: enrollments.name }]" label="Enrollment"></v-btn-dropdown>-->
          <!--</v-flex>-->
          <md-input-container>
            <md-input type="text" v-model="enrollmentName"></md-input>
          </md-input-container>
        </v-card>
        <v-btn primary @click.native="e6 = 3">Continue</v-btn>
        <v-btn flat @click.native="e6 = 1">Back</v-btn>
      </v-stepper-content>

      <v-stepper-step step="3" v-bind:complete="e6 > 3">Course</v-stepper-step>
      <v-stepper-content step="3">
      <v-card class="grey lighten-4 elevation-0">
        <v-flex xs3>
          <v-list>
            <v-list-item v-for="course in courses" :key="course">
              <v-list-tile @click.native="selectCourse(course)">
                <v-list-tile-title :id="course.name">{{ course.name }}</v-list-tile-title>
              </v-list-tile>
            </v-list-item>
          </v-list>
        </v-flex>
      </v-card>
      <v-btn primary @click.native="e6 = 4">Continue</v-btn>
        <v-btn flat @click.native="e6 = 2">Back</v-btn>
      </v-stepper-content>

      <v-stepper-step step="4" v-bind:complete="e6 > 4">Professional Modules</v-stepper-step>
      <v-stepper-content step="4">
        <v-card class="grey lighten-4 elevation-0">
          <v-flex xs3>
            <v-list>
              <v-list-item v-for="module in modules" :key="module">
              <v-list-tile avatar @click.native="selectModule(module.name)">
                <v-list-tile-action>
                  <v-checkbox v-model="module.selected"></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ module.name }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ module.study_id }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              </v-list-item>
            </v-list>
          </v-flex>
        </v-card>
        <v-btn primary @click.native="e6 = 5">Continue</v-btn>
        <v-btn flat @click.native="e6 = 3">Back</v-btn>
      </v-stepper-content>

      <v-stepper-step step="5" v-bind:complete="e6 > 5">Formative Units</v-stepper-step>
      <v-stepper-content step="5">
        <v-card class="grey lighten-4 elevation-0">
          <v-flex xs3>
            <v-list>
              <v-list-item v-for="submodule in submodules" :key="submodule">
                <v-list-tile avatar>
                  <v-list-tile-action>
                    <v-checkbox v-model="submodule.selected"></v-checkbox>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ submodule.name }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ submodule.module.name}}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list-item>
            </v-list>
          </v-flex>
        </v-card>
        <v-btn flat @click.native="e6 = 4">Back</v-btn>
        <v-layout row justify-center>
          <v-dialog v-model="dialog">
            <v-btn primary light slot="activator">Finish</v-btn>
            <v-card>
              <v-card-row>
                <v-card-title>Send enrollment?</v-card-title>
              </v-card-row>
              <v-card-row>
                <v-card-text>You will get a notification when your enrollment is approved.</v-card-text>
              </v-card-row>
              <v-card-row actions>
                <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Cancel</v-btn>
                <v-btn class="green--text darken-1" flat="flat" @click.native="sendEnrollment()">Send</v-btn>
              </v-card-row>
            </v-card>
          </v-dialog>
        </v-layout>
      </v-stepper-content>
    </v-stepper>
    <md-snackbar md-position="bottom center" ref="connectionError" md-duration="4000">
      <span>Name validation error. Must be 5 characters!.</span>
    </md-snackbar>

  </v-app>
</template>

<script>
import notifications from '../services/notifications'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Enrollment Mobile',

      e6: 0,
      toggle_none: null,
      dialog: false,
//      success: false,

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
      enrollmentName: '',

      // Enrollments
      academic_year: '',
      enrollment_id: '',
      study: '',
      course: '',
      class_group: '',

      // Enrollment Information TODO
      professional_modules: [],
      formative_units: [],
      enrollments: {},
      person: {},
      courses: {},
      modules: {},
      selected_modules: {
        select: false
      },
      submodules: {},
      selected_submodules: {
        select: false
      },
      selectedCourse: false,
      selectedModule: false

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
    this.getEnrollments()
    this.getPerson()
    this.getCourses()
    this.getModules()
    this.getSubmodules()
    document.addEventListener('deviceready', this.onDeviceReady, false)
    if (window.cordova && window.device.platform !== 'browser') {
      notifications.enable()
    }
  },
  methods: {
    showConnectionError () {
      this.$refs.connectionError.open()
    },
    onDeviceReady  () {
      console.log('Working on platform' + window.device.platform)
      console.log('Data')
    },
    getEnrollments () {
      window.axios.get('/api/v1/enrollments_from_user')
        .then((response) => {
          this.enrollments = response.data
          console.log('Enrollments')
          console.log(response.data)
        }, (err) => {
          console.log(err)
        })
    },
    getPerson () {
      window.axios.get('/api/v1/person_from_user')
        .then((response) => {
          this.person = response.data
          this.username = localStorage.getItem('user-name')
          this.email = localStorage.getItem('user-email')
          console.log('Person')
          console.log(response.data)
        }, (err) => {
          console.log(err)
        })
    },
    getCourses () {
      window.axios.get('/api/v1/courses')
        .then((response) => {
          this.courses = response.data.data
          console.log('Courses')
          console.log(response.data.data)
        }, (err) => {
          console.log(err)
        })
    },
    getModules () {
      window.axios.get('/api/v1/modules')
        .then((response) => {
          this.modules = response.data.data
          this.modules.forEach(function (element) {
            element['selected'] = ''
          })
          console.log('Modules')
          console.log(response.data.data)
        }, (err) => {
          console.log(err)
        })
    },
    getSubmodules () {
      window.axios.get('/api/v1/submodules')
        .then((response) => {
          this.submodules = response.data.data
          console.log('Submodules')
          console.log(response.data.data)
        }, (err) => {
          console.log(err)
        })
    },
    postEnrollments () {
      window.axios.post('/api/v1/enrollments', {
        name: this.enrollmentName,
        validated: 0,
        finished: 1,
        study_id: 1,
        course_id: 1,
        classroom_id: 1
      })
        .then((res) => {
          console.log(res)
        }, (error) => {
          console.log(error)
          this.showConnectionError()
        })
    },
    selectCourse (selectedCourse) {
      console.log(selectedCourse.name)
      document.getElementById(selectedCourse.name).style.color = '#ffac31'
    },
    selectModule (selectedModule) {
//      console.log(selectedModule.selected)
//      this.selectedModule = selectedModule.selected
//      document.getElementById(selectedModule).checked = true
      selectedModule = false
    },
    sendEnrollment () {
      this.postEnrollments()
      this.dialog = false
      this.$router.push({path: 'enrollments'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
