<template>
  <form novalidate @submit.stop.prevent="submit">
    <md-input-container>
      <label>Regular Password</label>
      <md-input type="password"></md-input>
    </md-input-container>

    <md-input-container md-has-password>
      <label>Password Reveal</label>
      <md-input type="password"></md-input>
    </md-input-container>
  </form>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Enrollment Mobile'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
