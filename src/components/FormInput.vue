<template>
  <div>
    <label for="flavor">Favorite ice cream flavor?</label>
    <input @input="changed" name="flavor" />
  </div>
</template>

<script>
export default {
  methods: {
    changed (evt) {
      // console.debug(evt.target.value)
      this.$store.commit('change', evt.target.value)
    }
  }
}
</script>

<style>
</style>
