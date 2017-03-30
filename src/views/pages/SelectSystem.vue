<template>
  <div class="app">
Select system
    <div class="row">
      <div v-for="system in systems" class="col-sm-6 col-md-4">
        <div class="card">
          <div class="card-header text-center">
            <h3>{{system.name}}</h3>
          </div>
          <div class="card-block">
              <ul class="list-group">
                  <li class="list-group-item">Location: &nbsp;<strong>{{system.location}}</strong></li>
                  <li class="list-group-item">Type: &nbsp;<strong>{{system.type}}</strong> </li>
                  <li class="list-group-item">Coordinates: &nbsp;<strong>{{system.coordinates}}</strong></li>
              </ul>
          </div>
          <button type="button" @click="saveSystem(system.id)" class="btn btn-outline-primary btn-lg btn-block">Select</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    //TODO: Refractor vue router
    import VueRouter from "vue-router";

export default {
  name: 'full',
  components: {
  },
    data() {
      return {
          uri: '/api/v1/get_systems_by_user',
          editing: false,
          systems: [],
      }
    },
    created() {
      this.fetchPage();
    },
  computed: {
    name () {
      return this.$route.name
    },

    list () {
      return this.$route.matched
    },
  },
    methods: {
        fetchPage: function(page) {
            axios.get(this.uri).then((response) => {

                this.systems = response.data;
                if(this.systems.length==1){
                    this.saveSystem(0)
                }
//            this.todos = response.data.data;
//            this.perPage = response.data.per_page;
//            this.to = response.data.to;
//            this.from = response.data.from;
//            this.total = response.data.total;
            }, (response) => {
                sweetAlert("Oops...", "Something went wrong!", "error");
                console.log(response);
            });
        },
        saveSystem: function(system_id) {
            console.log(system_id)
            window.localStorage.setItem('system_id', system_id)
            var router = new VueRouter() ;
            router.push({path: 'home'})
        },
    }
}
</script>
