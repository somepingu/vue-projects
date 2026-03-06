<!-- View for displaying the inventory overview. This page will show a list of all inventory items, with options to edit or
delete each item, and a button to add new items. -->
<script setup lang="ts">
import InventoryTable from '../components/InventoryTable.vue';
import {getAllItems, removeItem} from '../store.ts';
const items = getAllItems;
</script>

<template>
    <InventoryTable :items="items" @removeInventoryItem="removeItem" />
</template>

<style scoped></style>
