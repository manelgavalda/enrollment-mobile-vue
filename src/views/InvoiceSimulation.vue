<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <strong>Create Invoice Simulation</strong>
          </div>
          <div class="card-block">
            <form action="" method="post" enctype="multipart/form-data" class="form-horizontal ">
              <div class="form-group row">
                <div class="col-lg-3 form-group">
                  <div class="col-lg-12">
                    <label for="dateRange">Rang Dates</label>
                    <input id="dateRange" class="form-control input-lg" type="text" name="daterange"/>
                  </div>
                </div>
                <div class="col-lg-3 form-group">
                  <label for="user">Usuari</label>
                  <input type="text" v-model="user" id="user" name="user" class="form-control input-lg" size="1" :value="user" disabled>
                </div>
                <div class="col-lg-3 form-group">
                  <div class="col-lg-12">
                    <label for="slave_type">Model Dispositiu</label>
                    <select v-model="slave_type" id="slave_type" name="slave_type" class="form-control input-lg" size="1" @change="getDeviceNumberAndVariables">
                      <option disabled value="">Tria Model</option>
                      <option v-for="slave_type in slave_types" :value="slave_type">
                        {{ slave_type }}
                    </option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-3 form-group">
                  <div class="col-lg-12">
                    <label for="chose_device">Dispositiu</label>
                    <select v-model="device" id="chose_device" name="chose_device" class="form-control input-lg" size="1" :disabled="!slave_type">
                      <option disabled value="">Tria Dispositiu</option>
                      <option v-for="device in devices" :value="device">
                        {{ device.name }}
                    </option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="card-footer">
            <div class="offset-lg-4 col-lg-4">
              <button type="submit" @click="" class="btn btn-sm btn-primary"><i class="fa fa-dot-circle-o"></i> Submit</button>
              <button type="reset" @click="reset" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Reset</button>
              <div class=" offset-lg-4 col-lg-4"><i class="fa fa-refresh fa-spin fa-5x fa-fw" v-if="connecting"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div><!--/.row-->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <strong>Invoice Simulations</strong>
          </div>
          <div class="card-block">
            <table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
              <thead>
              <tr>
                <th>Name</th>
                <th>Model</th>
                <th>Device Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Operations</th>
              </tr>
              </thead>
              <tbody>
              <!--<tr v-for="event in events">-->
                <!--<td>{{event.date}}</td>-->
                <!--<td>{{event.alias}}</td>-->
                <!--<td>{{event.annotation}}</td>-->
                <!--<td>{{event.value}}</td>-->
              <!--</tr>-->
              <tr>
                <td>Prova</td>
                <td>Prova</td>
                <td>Prova</td>
                <td>Prova</td>
                <td>Prova</td>
                <td>
                  <div class="span12 pagination-centered">
                  <span class="btn btn-xs btn-info" @click="editSystem(index,system.id)">
                    <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                  </span>
                    <span class="btn btn-xs btn-danger"  @click="deleteSystem(index,system.id)">
                    <i class='fa fa-fw fa-trash'/>
                  </span>
                  </div>
                </td>
              </tr>
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
                uri: '/api/v1/slaves_type',
                slave_types: [],
                var_types: [],
                devices: [],
                connecting: true,
                slave_type: '',
                type_var: '',
                report: '',
                user: '',
                device: '',
                request_params: [],
            }
        },
        created()
        {
            this.getUser()
            this.connecting = true
            this.initializeDateRangePicker();
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
                    this.slave_types = response.data;
//                    console.log(response.data);
                    this.loadTable()
                }, (response) => {
                    this.connecting = false
                    sweetAlert("Oops...", "Errror al aconseguir la pàgina!", "error");
                    console.log(response);
                });
            },
            getDeviceNumberAndVariables: function () {
                axios.post('/api/v1/device_name_and_variables', {
                    system_id: localStorage.getItem('system_id'),
                    type_slave: this.slave_type,
                }).then((response) => {
                    this.connecting = false
                    this.devices = response.data[0];
//                    console.log(this.variables)
                }, (response) => {
                    this.connecting = false
                    sweetAlert("Oops...", "Error al aconseguir els dispositius i variables", "error");
                    console.log(response);
                });
            },
            getUser() {
                axios.get('/api/v1/get_user_name').then((response) => {
                    this.user = response.data;
                }, (response) => {
                    sweetAlert("Oops...", "Something went wrong when getting user!", "error");
                    console.log(response);
                });
            },
            reset(){
                this.report = ''
                this.slave_type = ''
                this.type_var = ''
                this.number_slave = ''
                this.device = ''
            },
            fetchData() {
                return this.fetchPage();
            },
            initializeDateRangePicker(){
                $(function() {
                    var today = new Date();
                    var m = today.getMonth()+1;
                    var y = today.getFullYear();
                    var d = new Date(y, m, 0);// last day in month
                    $('input[name="daterange"]').daterangepicker({
                        "locale": {
                            "format": "DD/MM/YYYY",
                            "separator": " - ",
                            "applyLabel": "Apply",
                            "cancelLabel": "Cancel",
                            "fromLabel": "From",
                            "toLabel": "To",
                            "customRangeLabel": "Custom",
                            "weekLabel": "W",
                            "daysOfWeek": [
                                "dg",
                                "dl",
                                "dt",
                                "dc",
                                "dj",
                                "dv",
                                "ds"
                            ],
                            "monthNames": [
                                "Gener",
                                "Febrer",
                                "Març",
                                "Abril",
                                "Maig",
                                "Juny",
                                "Juliol ",
                                "Agost ",
                                "Setembre",
                                "Octubre",
                                "Novembre",
                                "Desembre"
                            ],
                            "firstDay": 1
                        },
                        "startDate": "01/"+m+"/"+y,
                        "endDate": d+"/"+m+"/"+y
                    })

                });
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
