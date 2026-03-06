<script setup>
import GroceryForm from '../components/GroceryForm.vue';
import { getAllGroceries, addGrocery, generateGroceryId } from '../store.js';


const groceries = getAllGroceries;

const grocery = {name: '', price: 0, quantity: 0, id: generateGroceryId()};

</script>

<template>
    <GroceryForm :grocery="grocery" :groceries="groceries" :mode="'add'" @addGrocery="addGrocery"/>
</template>