//@ts-nocheck
<template>
  <p>Clicks: {{ clicks }}</p>
  <p>Speler: {{ player.firstName }}</p>
  <p>Land: {{ player.country }}</p>

  <button @click="incrementClicks">Klik mij!</button>
  <button @click="changeCountry('Nederland')">Nederland</button>
  <button @click="changeCountry('België')">België</button>
  <input v-model="player.firstName" placeholder="Vul je naam hier in">
</template>

<script setup>
import { ref, reactive } from 'vue';

const clicks = ref(0);

const player = reactive({
  firstName: '',
  country: ''
});

const incrementClicks = () => {
  clicks.value++;
};

const changeCountry = (newCountry) => {
  player.country = newCountry;
};

</script>

<style>

</style>
