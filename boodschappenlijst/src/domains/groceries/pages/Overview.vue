<script setup>
import GroceriesTable from '../components/GroceriesTable.vue';
import { getAllGroceries } from '../store.js'

const groceries = getAllGroceries;

</script>

<template>
    <GroceriesTable :groceries="groceries"/>
</template>

<style scoped>

</style>