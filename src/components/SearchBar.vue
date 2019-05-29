<template>
  <div>
    <input @input="searchInputChanged" />
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    methods: {
      searchInputChanged (event) {
        this.$emit('termChangedEvent', event.target.value);
      }
    }
  }
</script>

<style>

</style>