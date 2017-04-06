<template>
  <div class="app">
    User Profile
  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      msg: 'Welcome to Enrollment Mobile'
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
