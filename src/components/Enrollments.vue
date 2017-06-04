<template>
  <v-app class="app">
    <v-card>
      <v-card-title>
        Enrollments
        <v-spacer></v-spacer>
        <v-text-field
          append-icon="search"
          label="Search"
          single-line
          hide-details
          v-model="e3"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :items="items"
        v-bind:headers="headers"
        v-model="items"
        v-bind:search="e3"
        select-all
      >
        <template slot="items" scope="props">
          <td>
            <v-checkbox
              hide-details
              primary
              v-model="props.item.value"
            ></v-checkbox>
          </td>
          <td>
            <v-edit-dialog
              @open="props.item._name = props.item.name"
              @cancel="props.item.name = props.item._name || props.item.name"
              lazy
            >
              {{ props.item.name }}
              <div slot="input" class="mt-3 title">Update Name</div>
              <v-text-field
                slot="input"
                label="Edit"
                v-bind:value="props.item.name"
                v-on:change="val => props.item.name = val"
                single-line counter="counter"
              ></v-text-field>
            </v-edit-dialog>
          </td>
          <td class="text-xs-right">{{ props.item.study_id }}</td>
          <td class="text-xs-right">{{ props.item.course_id }}</td>
          <!--<td class="text-xs-right">{{ props.item.classroom.name }}</td>-->
          <td class="text-xs-right">{{ props.item.classroom_id }}</td>
          <td class="text-xs-right">{{ props.item.created_at }}</td>
          <td class="text-xs-right">{{ props.item.updated_at }}</td>
        </template>
      </v-data-table>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      e3: '',
      headers: [
        {
          text: 'Nom',
          left: true,
          sortable: false,
          value: 'name'
        },
        {
          text: 'Study',
          value: 'study'
        },
        {
          text: 'Course',
          value: 'course'
        },
        {
          text: 'Classroom',
          value: 'classroom'
        },
        {
          text: 'Created at',
          value: 'created_at'
        },
        {
          text: 'Updated at',
          value: 'updated_at'
        }

      ],
      items: []
    }
  },
  created () {
    console.log('home')
    this.getEnrollments()
  },
  methods: {
    getEnrollments () {
      window.axios.get('/api/v1/enrollments')
        .then((response) => {
          console.log(response)
          this.items = response.data.data
        }, (err) => {
          console.log(err)
        })
    }
  },
  computed: {
    filteredList: function () {
      var vm = this
      return this.words.filter(function (item) {
        return item.text.toLowerCase().indexOf(vm.searchWord.toLowerCase()) !== -1 && item.category.toLowerCase().indexOf(vm.searchCategory.toLowerCase()) !== -1
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
