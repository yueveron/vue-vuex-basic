<template>
  <div id="app">
    <form-input></form-input>
    <display-comp></display-comp>
  </div>
</template>

<script>
import FormInput from './components/FormInput'
import DisplayComp from './components/DisplayComp'

export default {
  name: 'app',
  components: {
    FormInput,
    DisplayComp
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
