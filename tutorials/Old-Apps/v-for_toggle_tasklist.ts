//@ts-nocheck
<template>
    <ul>
        <li v-for="(task, index) in tasks" :key="index">
            {{ task.name }}{{ task.completed ? ' (voltooid)' : ' (niet voltooid)' }}
            <button @click="toggleTask(task)">Toggle</button>
        </li>
    </ul>
</template>

<script setup>
import {ref} from 'vue';

const tasks = ref([
    {name: 'Boodschappen doen', completed: false},
    {name: 'Afwassen', completed: true},
    {name: 'Hond uitlaten', completed: false},
]);

const toggleTask = task => {
    task.completed = !task.completed;
};
</script>

<style></style>
