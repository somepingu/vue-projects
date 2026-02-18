<script setup>
import GroceriesTable from '../components/GroceriesTable.vue';
import { getAllGroceries } from '../store.js'
import { removeGrocery } from '../store.js';

const groceries = getAllGroceries;

</script>

<template>
    <GroceriesTable :groceries="groceries" @removeGrocery="removeGrocery"/>
</template>

<style scoped>

</style>