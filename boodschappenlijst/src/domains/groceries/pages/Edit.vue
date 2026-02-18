<script setup>
import GroceryForm from '../components/GroceryForm.vue';
import { getAllGroceries } from '../store.js'
import { getGroceryById } from '../store.js'
import { updateGrocery } from '../store.js'

const groceries = getAllGroceries;

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
});

const groceryToUpdate = getGroceryById(props.id);
</script>

<template>
    <GroceryForm :grocery="groceryToUpdate" :groceries="groceries" :mode="'edit'" @updateGrocery="updateGrocery"/>
</template>