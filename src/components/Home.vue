<template>
  <div class="app">
    Home
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Enrollment Mobile'
    }
  },
  created () {
    console.log('home')
    this.prova()
  },
  methods: {
    prova () {
      console.log('prova')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
