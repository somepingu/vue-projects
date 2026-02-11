<script setup>
import GroceriesTable from '../components/GroceriesTable.vue';
import { getAllGroceries } from '../store';

const list = getAllGroceries();
</script>

<template>
    <GroceriesTable :list="list"/>
</template>

<style scoped>

</style>