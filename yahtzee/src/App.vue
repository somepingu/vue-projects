<script setup>
import { ref } from 'vue';
import ThrownDice from './components/ThrownDice.vue';
import ScoreTable from './components/ScoreTable.vue';
const dice = ref([]);
const diceCounts = ref([]);

const updateDice = (newDice) => {
    dice.value = newDice;
}

</script>

<template>
  <h3>top text</h3>
  <ScoreTable :dice="dice"/>
  <ThrownDice :dice="dice" @updateDice="updateDice"/>
</template>

<style scoped>

</style>
