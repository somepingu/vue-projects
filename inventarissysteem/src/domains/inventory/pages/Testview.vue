<!-- View for displaying the inventory overview. This page will show a list of all inventory items, with options to edit or
delete each item, and a button to add new items. -->
<script setup lang="ts">
import {ref} from 'vue';
import SafeNumberInput from '../components/SafeNumberInput.vue';

const quantity = ref(0);
</script>

<template>
    <SafeNumberInput v-model="quantity" :min="0" label="Quantity" />
</template>

<style scoped></style>
