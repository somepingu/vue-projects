<script setup>
const NUMBER_OF_ROLLS = 5;

const props = defineProps({
    dice: {
        type: Array,
        required: true
    }
})

const emit = defineEmits(['updateDice']);

const rollDice = () => {
    const newDice = [];
    for (let i = 0; i < NUMBER_OF_ROLLS; i++) {
        const roll = (Math.floor(Math.random() * 6) + 1);
        newDice.push(roll);
    }
    emit('updateDice', newDice);
}

</script>

<template>
    <h3>Thrown Dice: <li v-for="(die, index) in dice" :key="index"> {{ die }}</li></h3>
    <button @click="rollDice">Gooi dobbelstenen!</button>
</template>