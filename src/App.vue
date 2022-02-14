<template>
  <div id="app">
    <p>Hello Vue!</p>
      <main-wrapper />
  </div>
</template>

<script>
import mainWrapper from './components/main-wrapper'


export default {
  name: 'app',
  components: {
    mainWrapper,
  }
}
</script>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
