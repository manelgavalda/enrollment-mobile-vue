<template>
  <div class="animated fadeIn">

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <strong>Graphic</strong> options
          </div>
          <div class="card-block">
            <form action="" method="post" enctype="multipart/form-data" class="form-horizontal ">
              <div class="form-group row">
                <div class="col-lg-3 form-group">
                  <label for="var_types">Rang Dates</label>
                  <div class="col-lg-12">
                    <input id="dateRange" class="form-control input-lg" type="text" name="daterange"/>
                  </div>
                </div>
              <div class="col-lg-3 form-group">
                <label for="slave_type">Model Dispositiu</label>
                <div class="col-lg-12">
                  <select v-model="slave_type" id="slave_type" name="slave_type" class="form-control input-lg" size="1" @change="getNumberOfSlavesAndSelectedVars">
                    <option disabled value="">Tria Model</option>
                    <option v-for="slave_type in slave_types" :value="slave_type">
                      {{ slave_type }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-lg-3 form-group">
                <label for="var_types">Tipus de Variables</label>
                <div class="col-lg-12">
                  <select v-model="type_var" id="var_types" name="var_types" class="form-control input-lg" size="1" @change="getDeviceNumberAndVariables" :disabled="!slave_type">
                    <option disabled value="">Tipus Var</option>
                    <option v-for="type_var in var_types" :value="type_var">
                      {{ type_var }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-lg-3 form-group">
                <label for="number_of_slaves">Nº disp a compara</label>
                <div class="col-lg-12">
                  <select v-model="number_slave" id="number_of_slaves" name="number_of_slaves" class="form-control input-lg" size="1" @change="deleteVars" :disabled="!type_var">
                    <option disabled value="">Nº de dispositius</option>
                    <option v-for="number_slave in number_of_slaves" :value="number_slave">
                      {{ number_slave }}
                  </option>
                  </select>
                </div>
              </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-3 form-group">
                  <div class="col-lg-12">
                    <select v-model="device1" id="chose_device1" name="chose_device_1" class="form-control input-lg" size="1" :disabled="!type_var || number_slave<1">
                      <option disabled value="">Tria Dispositiu</option>
                      <option v-for="device1 in devices" :value="device1">
                        {{ device1.name }}
                    </option>
                    </select>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-for="variable1 in variables">
                      <input type="checkbox" id="variable" :value="variable1" v-model="checkedVariables1" name="checkboxes" :disabled="!type_var || number_slave<1">
                      <label for="variable">{{variable1}}</label>
                      <br>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 form-group">
                  <div class="col-lg-12">
                    <select v-model="device2" id="chose_device2" name="chose_device_2" class="form-control input-lg" size="1" :disabled="!type_var || number_slave<2">
                      <option disabled value="">Tria Dispositiu</option>
                      <option v-for="device2 in devices" :value="device2">
                        {{ device2.name }}
                    </option>
                    </select>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-for="variable2 in variables">
                      <input type="checkbox" id="variable2" :value="variable2" v-model="checkedVariables2" name="checkboxes" :disabled="!type_var || number_slave<2">
                      <label for="variable">{{variable2}}</label>
                      <br>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 form-group">
                  <div class="col-lg-12">
                    <select v-model="device3" id="chose_device3" name="chose_device_3" class="form-control input-lg" size="1" :disabled="!type_var || number_slave<3">
                      <option disabled value="">Tria Dispositiu</option>
                      <option v-for="device3 in devices" :value="device3">
                        {{ device3.name }}
                    </option>
                    </select>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-for="variable3 in variables">
                      <input type="checkbox" id="variable3" :value="variable3" v-model="checkedVariables3" name="checkboxes" :disabled="!type_var || number_slave<3">
                      <label for="variable">{{variable3}}</label>
                      <br>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 form-group">
                  <div class="col-lg-12">
                    <select v-model="device4" id="chose_device4" name="chose_device_4" class="form-control input-lg" size="1" :disabled="!type_var || number_slave<4">
                      <option disabled value="">Tria Dispositiu</option>
                      <option v-for="device4 in devices" :value="device4">
                        {{ device4.name }}
                    </option>
                    </select>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-for="variable4 in variables">
                      <input type="checkbox" id="variable4" :value="variable4" v-model="checkedVariables4" name="checkboxes" :disabled="!type_var || number_slave<4">
                      <label for="variable">{{variable4}}</label>
                      <br>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="card-footer">
            <button type="submit" @click="getGraphArray" class="btn btn-sm btn-primary"><i class="fa fa-dot-circle-o"></i> Submit</button>
            <button type="reset" @click="reset" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Reset</button>
            <div class=" offset-lg-4 col-lg-4"><i class="fa fa-refresh fa-spin fa-5x fa-fw" v-if="connecting"></i></div>
          </div>
        </div>
      </div>
    </div><!--/.row-->

    <div class="card" id="graph" style="display: none;">
      <div class="card-block">
        <div class="row">
          <div class="col-lg-12">
            <div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
          </div><!--/.col-->
        </div><!--/.row-->
      </div>
    </div><!--/.card-->
  </div>
</template>

<script>
    export default{
        data () {
            return {
                uri: '/api/v1/slaves_type',
                slave_types: [],
                var_types: [],
                variables: ['Variable 1', 'Variable 2', 'Variable 3', 'Combinada |||'],
                devices: [],
                checkedVariables: [],
                checkedVariables1: [],
                checkedVariables2: [],
                checkedVariables3: [],
                checkedVariables4: [],
                connecting: true,
                slave_type: '',
                type_var: '',
                number_slave: '',
                variable: '',
                device: '',
                device1: '',
                device2: '',
                device3: '',
                device4: '',
                number_of_slaves: '',
                numero_disp: '',
                chose_device: [],
                request_params: [],
                pos1: '',
                pos2: '',
                pos3: '',
                pos4: ''
            }
        },
        created()
        {
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
                    console.log(response.data);
                }, (response) => {
                    this.connecting = false
                    sweetAlert("Oops...", "Errror al aconseguir la pàgina!", "error");
                    console.log(response);
                });
            },
            getNumberOfSlavesAndSelectedVars: function () {
                axios.post('/api/v1/number_of_slaves_and_selected_vars', {
                    system_id: localStorage.getItem('system_id'),
                    type_slave: this.slave_type
                }).then((response) => {
                    console.log(this.slave_type)
                    this.connecting = false
                    this.number_of_slaves = response.data[0];
                    this.var_types = response.data[1]
                    if (this.number_of_slaves > 4) this.number_of_slaves = 4
//                    console.log(this.number_of_slaves);
//                    console.log(this.var_types);
                }, (response) => {
                    this.connecting = false
                    sweetAlert("Oops...", "Error al aconseguir les variables!", "error");
                    console.log(response);
                });
            },
            getDeviceNumberAndVariables: function () {
                axios.post('/api/v1/device_name_and_variables', {
                    system_id: localStorage.getItem('system_id'),
                    type_slave: this.slave_type,
                    type_var: this.type_var
                }).then((response) => {
                    this.connecting = false
                    this.checkedVariables = [],
                    this.deleteVars(),
//                    this.number_of_slaves = response.data[0];
//                    this.variables = response.data[1]
//                    console.log(this.type_var);
//                    console.log(response.data[0]);
                    this.devices = response.data[0];
                    this.variables = response.data[1];
//                    console.log(this.variables)
                }, (response) => {
                    this.connecting = false
                    sweetAlert("Oops...", "Error al aconseguir els dispositius i variables", "error");
                    console.log(response);
                });
            },
            getGraphArray: function () {
                //TODO: Refractor
//                console.log(this.device1.name)
//                console.log(this.device2.name)
//                console.log(this.device3.name)
//                console.log(this.device4.name)
//                console.log(this.checkedVariables1)
//                console.log(this.checkedVariables2)
//                console.log(this.checkedVariables3)
//                console.log(this.checkedVariables4)
//                var request_params=JSON.stringify([[this.device1.name,this.checkedVariables1], [this.device2.name, this.checkedVariables2], [this.device3.name, this.checkedVariables3], [this.device4.name, this.checkedVariables4]])
//                console.log(request_params)
//                console.log(JSON.stringify([[this.device1.name, JSON.stringify(this.checkedVariables1)], [this.device2.name, JSON.stringify(this.checkedVariables2)], [this.device3.name, JSON.stringify(this.checkedVariables3)], [this.device4.name, JSON.stringify(this.checkedVariables4)]]).replace("\\",""))
//                var graph_array=[[this.device1.name, this.checkedVariables1], [this.device2.name, this.checkedVariables2], [this.device3.name, this.checkedVariables3], [this.device4.name, this.checkedVariables4]]
//                console.log(JSON.stringify(graph_array)
//                console.log(JSON.stringify([[this.device1.name + "," + this.checkedVariables1.toString()], [this.device2.name + "," + this.checkedVariables2.toString()], [this.device3.name + "," + this.checkedVariables3.toString()], [this.device4.name + "," + this.checkedVariables4.toString()]]))
//                console.log([this.checkedVariables1.unshift(this.device1.name), [this.device2.name + "," + this.checkedVariables2.toString()], [this.device3.name + "," + this.checkedVariables3.toString()], [this.device4.name + "," + this.checkedVariables4.toString()]])

                this.graph_array=[]

                if(this.device4.name!==undefined){
                    this.graph_array=JSON.stringify([(this.device1.name + ',' + this.checkedVariables1.toString()).split(','), (this.device2.name + ',' + this.checkedVariables2.toString()).split(','), (this.device3.name + ',' + this.checkedVariables3.toString()).split(','), (this.device4.name + ',' + this.checkedVariables4.toString()).split(',')])
                }

                else if(this.device3.name!==undefined){
                    this.graph_array=JSON.stringify([(this.device1.name + ',' + this.checkedVariables1.toString()).split(','), (this.device2.name + ',' + this.checkedVariables2.toString()).split(','), (this.device3.name + ',' + this.checkedVariables3.toString()).split(',')])
                }

                else if(this.device2.name!==undefined){
                    this.graph_array=JSON.stringify([(this.device1.name + ',' + this.checkedVariables1.toString()).split(','), (this.device2.name + ',' + this.checkedVariables2.toString()).split(',')])
                }

                else if(this.device1.name!==undefined){
                    this.graph_array=JSON.stringify([(this.device1.name + ',' + this.checkedVariables1.toString()).split(',')])
                }


                console.log(this.graph_array)
                this.connecting=true
                axios.post('/api/v1/graph_array', {
                    system_id: localStorage.getItem('system_id'),
                    request_params: this.graph_array,
                    date_range: document.getElementById('dateRange').value
                }).then((response) => {
                    console.log(response)
                    document.getElementById("graph").style.display="block"
                    this.initializeGraph(response.data, this.type_var, this.limitPenalitzacio())
                }, (response) => {
                    this.connecting=false
                    sweetAlert("Oops...", "Error al mostrar el gràfic!", "error");
                    console.log(response);
                });
            },
            deleteVars(){
              this.checkedVariables1 = []
              this.checkedVariables2 = []
              this.checkedVariables3 = []
              this.checkedVariables4 = []
            },
            reset(){
                this.slave_type = ''
                this.type_var = '',
                this.number_slave = ''
                this.device1 = ''
                this.device2 = ''
                this.device3 = ''
                this.device4 = ''
                this.checkedVariables1 = []
                this.checkedVariables2 = []
                this.checkedVariables3 = []
                this.checkedVariables4 = []
            },
            fetchData() {
              return this.fetchPage();
            },
            limitPenalitzacio() {
              switch(this.type_var){
                  case 'voltage':
                      console.log('1')
                      //return p contractada.
                      break
                  case 'intensity':
                      console.log('2')
                      return null
                      break
                  case 'power':
                      axios.post('/api/v1/get_power_contracted', {
                          system_id: localStorage.getItem('system_id'),
                      }).then((response) => {
                          console.log(response)
                      }, (response) => {
                          sweetAlert("Oops...", "Error al obtenir la potència contractada!", "error");
                          console.log(response);
                      });
                      return(230*1.05)
                      console.log('3')
                      break
                  case 'cosφ':
                      console.log('4')
                      return 0.95
                      break
                }
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
//            initializeGraph(data_to_print=data_retornada, variable=v-model tipo variable,  ){
            initializeGraph(data_to_print, variable, limit_penalitzacio){
                this.connecting=false
                $(function () {

                    Highcharts.chart('container', {
                        chart: {
                            zoomType: 'x'
                        },
                        title: {
                            text: 'Grafic per poder comparar variables'
                        },
                        subtitle: {
                            text: document.ontouchstart === undefined ?
                                "Feu clic i arrossegueu en l'àrea de traçat per fer un zoom" : 'Pessigar el grafic per fer un zoom'
                        },
                        xAxis: {
                            type: 'datetime'
                        },
                        yAxis: {
                            title: {
                                text: variable
                            },
                            plotLines: [
                                {
                                color: 'red', // Color value
                                dashStyle: 'longdashdot', // Style of the plot line. Default to solid
                                value: limit_penalitzacio, // Value of where the line will appear
                                width: 2, // Width of the line
                                label: {
                                    text: 'Penalització '+limit_penalitzacio,
                                    style: {
                                        color: '#606060'
                                    }
                                }
                            }
                            ]
                        },
                        legend: {
                            enabled: false
                        },
                        plotOptions: {
                            area: {
                                fillColor: {
                                    linearGradient: {
                                        x1: 0,
                                        y1: 10,
                                        x2: 0,
                                        y2: 3
                                    },
                                    stops: [
                                        [0, Highcharts.getOptions().colors[0]],
                                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                                    ]
                                },
                                marker: {
                                    radius: 2
                                },
                                lineWidth: 1,
                                states: {
                                    hover: {
                                        lineWidth: 1
                                    }
                                },
                                threshold: null
                            }
                        },

                        series: data_to_print
                    });
                });
            }
        }
    }
</script>
