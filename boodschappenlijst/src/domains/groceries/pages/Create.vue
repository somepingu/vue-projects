<script setup>
import GroceryForm from '../components/GroceryForm.vue';
import { getAllGroceries } from '../store.js'
import { addGrocery } from '../store.js';

const groceries = getAllGroceries;

const grocery = {name: '', price: 0, amount: 0};

</script>

<template>
    <GroceryForm :groceries="groceries" @addGrocery="addGrocery"/>
</template>