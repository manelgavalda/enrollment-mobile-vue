<template>
  <div class="login">
    <form novalidate @submit.stop.prevent="submit">
      <md-input-container>
        <label>User</label>
        <md-input type="text"></md-input>
      </md-input-container>

      <md-input-container md-has-password>
        <label>Password</label>
        <md-input type="password"></md-input>
      </md-input-container>
      <md-button class="md-raised md-primary">Login</md-button>
      <md-button class="md-raised md-accent">Register</md-button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .parent {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
