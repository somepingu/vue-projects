<script setup>
import { ref } from 'vue';

const numberOfDice = ref(10);
const numberOfDieSides = ref(6);
const rolls = ref([]);
const diceCounts = ref([]);

const updateDiceCounts = () => {
  const counts = Array(numberOfDieSides.value).fill(0);
  for (let i = 0; i<numberOfDice.value; i++) {
    counts[rolls.value[i]-1]++;
  }
  diceCounts.value = counts;
};

const rollDice = () => {
  rolls.value = [];
  for (let i = 0; i < numberOfDice.value; i++) {
    rolls.value.push(rollDie());
  }
  updateDiceCounts();
};

const rollDie = () => Math.floor(Math.random()*numberOfDieSides.value)+1;


</script>

<template>
  <h3>Dobbelsteen teller</h3>
  <ul>
    <li v-for="(roll, index) in diceCounts" :key="index">Aantal {{ index + 1 }}'en gegooid: {{ roll }}</li>
  </ul>
  <p>Aantal dobbelstenen: <input v-model.number="numberOfDice" placeholder="Vul hier in" type="string" /></p>
  <p>Aantal zijden per dobbelsteen: <input v-model.number="numberOfDieSides" placeholder="Vul hier in" type="string" /></p>
  <button @click="rollDice">Gooi dobbelstenen!</button>
</template>

<style scoped>

</style>
