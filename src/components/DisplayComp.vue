<template>
  <div>
    <p>You chose {{ $store.getters.flavor }}</p>
    <p>computed : {{ content }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    content () {
      return this.$store.getters.flavor
    }
  }
}
</script>

<style>
</style>
