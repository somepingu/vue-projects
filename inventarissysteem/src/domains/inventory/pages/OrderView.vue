<script setup lang="ts">
import InventoryTable from '../components/InventoryTable.vue';
import {getAllItems, removeItem} from '../store.ts';
const items = getAllItems;
</script>

<template>
    <h2>ORDERVIEW</h2>
    <InventoryTable :items="items" @removeInventoryItem="removeItem" />
</template>

<style scoped></style>
