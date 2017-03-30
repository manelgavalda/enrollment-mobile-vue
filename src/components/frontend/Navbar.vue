<template>
  <header class="app-header navbar">
    <slot></slot>
  </header>
</template>
<script>
export default {
  /* eslint-disable */
  name: 'navbar',
  created () {
    this._navbar = true
  }
}
</script>
