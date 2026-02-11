<script setup>
import { ref } from 'vue'

const list = ref([
  { name: 'Rijst', price: 1.00, quantity: 1 },
  { name: 'Broccoli', price: 0.99, quantity: 2 },
  { name: 'Koekjes', price: 1.20, quantity: 3 },
  { name: 'Noten', price: 2.99, quantity: 4 }
]);
</script>

<template>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/create">Go to Create</RouterLink>
    <RouterLink to="/edit">Go to Edit</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
