<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router';
</script>

<template>
    <nav>
        <RouterLink to="/">Inventaris</RouterLink>
        |
        <RouterLink to="/add-item">Product toevoegen</RouterLink>
        |
        <RouterLink to="/order">Producten op lage vooraad</RouterLink>
        |
        <RouterLink to="/test">Go to Test</RouterLink>
    </nav>
    <main>
        <RouterView />
    </main>
</template>

<style scoped></style>
