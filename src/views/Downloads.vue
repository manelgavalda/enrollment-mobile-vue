<template>
  <div class="animated fadeIn">
    <div class="card-group">
      <div class="card">
        <div class="card-block">
          <div class="h1 text-muted text-right mb-2">
            <i class="fa fa-windows" aria-hidden="true"></i>
          </div>
          <div class="h4 mb-0">Windows <br>XP, 7, 8, 8.1, 10</div>
          <small class="text-muted text-uppercase font-weight-bold">Windows</small>
          <button type="button" class="btn btn-success btn-lg btn-block">Download</button>
        </div>
      </div>
      <div class="card">
        <div class="card-block">
          <div class="h1 text-muted text-right mb-2">
            <i class="fa fa-linux" aria-hidden="true"></i>
          </div>
          <div class="h4 mb-0">Linux <br>(Deb)</div>
          <small class="text-muted text-uppercase font-weight-bold">Linux</small>
          <button type="button" class="btn btn-success btn-lg btn-block" @click="primaryModal = true">Download</button>
        </div>
      </div>
      <div class="card">
        <div class="card-block">
          <div class="h1 text-muted text-right mb-2">
            <i class="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div class="h4 mb-0">Apple <br>OS X</div>
          <small class="text-muted text-uppercase font-weight-bold">OS X</small>
          <button type="button" class="btn btn-success btn-lg btn-block">Download</button>
        </div>
      </div>
    </div>
    <modal title="Modal title" class="modal-primary" v-model="primaryModal" @ok="primaryModal = false" effect="fade/zoom">
      <div slot="modal-header" class="modal-header">
        <h4 class="modal-title">Modal title</h4>
      </div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </modal>
  </div>
</template>

<script>
    import modal from 'vue-strap/src/Modal'
    export default {
        props: ['show'],
        name: 'modals',
        components: {
            modal
        },
        data () {
            return {
                primaryModal: false,
            }
        }
    }
</script>
