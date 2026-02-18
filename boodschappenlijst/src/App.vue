<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'



</script>

<template>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
      |
    <RouterLink to="/create">Go to Create</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
