<template>
  <div class="login">
    <md-card>
      <md-card-media>
        <img src="/../assets/enrollmentmobile_logo.png" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Enrollment Mobile Login</div>
        <div class="md-subhead">Login for Enrollment Mobile Application</div>
      </md-card-header>
      <md-card-content>
        <form novalidate @submit.stop.prevent="submit">
          <md-input-container>
            <label>User</label>
            <md-input type="text"></md-input>
          </md-input-container>

          <md-input-container md-has-password>
            <label>Password</label>
            <md-input type="password"></md-input>
          </md-input-container>

        </form>
      </md-card-content>
      <md-card-actions>
        <md-button class="md-raised md-primary">Login</md-button>
        <md-button class="md-raised md-accent">Register</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
  import Vue from 'vue'
  new Vue({ // eslint-disable-line no-new
    template: '<Login/>'
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .parent {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
