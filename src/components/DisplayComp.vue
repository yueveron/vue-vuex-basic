<template>
  <div>
    <p>You chose {{ $store.state.flavor }}</p>
    <p>{{ content }}</p>
    <p>You chose msg {{ msg }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    content () {
      return this.$store.state.count
    }
  },
  data () {
    return {
      msg: this.$store.state.flavor
    }
  }
}
</script>

<style>
</style>
