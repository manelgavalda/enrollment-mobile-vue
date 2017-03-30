<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <strong>Events</strong>
                    </div>
                    <div class="card-block">
    <table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
        <thead>
        <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Annotation</th>
            <th>Value</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="event in events">
            <td>{{event.date}}</td>
            <td>{{event.alias}}</td>
            <td>{{event.annotation}}</td>
            <td>{{event.value}}</td>
        </tr>
        <!--<div v-for="system in systems" class="col-sm-6 col-md-4">-->
            <!--<div class="card">-->
                <!--<div class="card-header text-center">-->
                    <!--<h3>{{system.name}}</h3>-->
                <!--</div>-->
                <!--<div class="card-block">-->
                    <!--<ul class="list-group">-->
                        <!--<li class="list-group-item">Location: &nbsp;<strong>{{system.location}}</strong></li>-->
                        <!--<li class="list-group-item">Type: &nbsp;<strong>{{system.type}}</strong> </li>-->
                        <!--<li class="list-group-item">Coordinates: &nbsp;<strong>{{system.coordinates}}</strong></li>-->
                    <!--</ul>-->
                <!--</div>-->
                <!--<button type="button" @click="saveSystem(system.id)" class="btn btn-outline-primary btn-lg btn-block">Select</button>-->
            <!--</div>-->
        <!--</div>-->

        </tbody>
    </table>
                            <div class=" offset-lg-4 col-lg-4"><i class="fa fa-refresh fa-spin fa-5x fa-fw" v-if="connecting"></i></div>
    </div>

</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
    data () {
        return {
            uri: '/api/v1/events',
            events: [],
            connecting: true,
        }
    },
    created()
    {
        this.connecting = true
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchPage: function () {
            axios.post(this.uri, {
                system_id: localStorage.getItem('system_id'),
            }).then((response) => {
                this.connecting = false
                this.events = response.data;
                this.loadTable();
            }, (response) => {
                this.connecting = false
                sweetAlert("Oops...", "Something went wrong!", "error");
                console.log(response);
            });
        },
        fetchData: function () {
            return this.fetchPage();
        },
        loadTable(){
                console.log('carregar taula')
            $(document).ready(function () {
                $('#example').dataTable();
            });
        }
    }
    }
</script>
<style>
</style>