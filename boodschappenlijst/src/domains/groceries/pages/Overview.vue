<script setup>
import { ref } from 'vue'
import GroceriesTable from '../components/GroceriesTable.vue';

const list = ref([
  { name: 'Rijst', price: 1.00, quantity: 1 },
  { name: 'Broccoli', price: 0.99, quantity: 2 },
  { name: 'Koekjes', price: 1.20, quantity: 3 },
  { name: 'Noten', price: 2.99, quantity: 4 }
]);
</script>

<template>
    <GroceriesTable :list="list"/>
</template>

<style scoped>

</style>