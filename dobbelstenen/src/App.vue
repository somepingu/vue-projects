// fix NaN bug

<script setup>
import { computed, ref } from 'vue';

const numberOfDice = ref(10);
const numberOfDieSides = ref(6);
const rolls = ref([]);

const diceCounts = computed( () => {
  const counts = Array(numberOfDieSides.value).fill(0);
  for (let i = 0; i<numberOfDice.value; i++) {
    counts[rolls.value[i]-1]++;
  }
  return counts
});

const rollDice = () => {
  rolls.value = [];
  for (let i = 0; i < numberOfDice.value; i++) {
    rolls.value.push(rollDie());
  }
};

const rollDie = () => Math.floor(Math.random()*numberOfDieSides.value)+1;


</script>

<template>
  <ul>
    <li v-for="(roll, index) in diceCounts" :key="index">Aantal {{ index + 1 }}'en gegooid: {{ roll }}</li>
  </ul>
  Aantal dobbelstenen:<input v-model="numberOfDice" placeholder="Vul hier in" type="string" />
  Aantal zijden per dobbelsteen:<input v-model="numberOfDieSides" placeholder="Vul hier in" type="string" />
  <button @click="rollDice">Roll dice!</button>
</template>

<style scoped>

</style>
