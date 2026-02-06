
// receives dice from App.vue and calculates displays the score table

<script setup>
import { computed } from 'vue';

const props = defineProps({
    dice: {
        type: Array,
        required: true
    },
});

const diceCounts = computed(() => {
    const countArray = [0,0,0,0,0,0];
    props.dice.forEach(die => {
        countArray[die-1]++;
    });
    return countArray;
});

const diceScoreSum = computed(() => {
    return props.dice.reduce((sum, die) => sum + die, 0)
});

const onesScore = computed(() => {
    return props.dice.filter(die => die === 1).length * 1;
});

const twosScore = computed(() => {
    return props.dice.filter(die => die === 2).length * 2;
});

const threesScore = computed(() => {
    return props.dice.filter(die => die === 3).length * 3;
});

const foursScore = computed(() => {
    return props.dice.filter(die => die === 4).length * 4;
});

const fivesScore = computed(() => {
    return props.dice.filter(die => die === 5).length * 5;
});

const sixesScore = computed(() => {
    return props.dice.filter(die => die === 6).length * 6;
});

const TotalPart1Score = computed(() => {
    return onesScore.value + twosScore.value + threesScore.value + foursScore.value + fivesScore.value + sixesScore.value;
});

const threeOfAKindScore = computed(() => {
    for (let count of diceCounts.value) {
        if (count >= 3) {
            return diceScoreSum.value;
        }
    }
    return 0;
});

const fourOfAKindScore = computed(() => {
    for (let count of diceCounts.value) {
        if (count >= 4) {
            return diceScoreSum.value;
        }
    }
    return 0;
});

const fullHouseScore = computed(() => {
    for (let count of diceCounts.value) {
        if (count == 3) {
            for (let count2 of diceCounts.value) {
                if (count2 == 2) {
                    return 25;
                }
            }
        }
    }
    return 0;
});

function straightPresent(straitLength) {
    let currentChain = 0;
    for (let i = 0; i < DIE_SIDES; i++) {
        if (count[i + 1] == 1) {
            currentChain++;
            if (currentChain == straitLength) {
                return true;
            }
        } else {
            currentChain = 0;
        }
    }
    return false;
}

const smallstreetScore = computed(() => {
    for (let count of diceCounts.value) {
        if (count == 0) {
            return 0; 
        }
    }
});

const chanceScore = computed(() => {
    return diceScoreSum.value;
});

</script>

<template>
    <h3>scoreboard Dice: <li v-for="(die, index) in dice" :key="index"> {{ die }}</li></h3>
    <h3>Score Table</h3>
    <table>
    <thead>
            <tr>
                <td>Deel 1</td>
                <td>1e spel</td>
                <td>2e spel</td>
                <td>3e spel</td>
                <td>4e spel</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Enen</td>
                <td>{{ onesScore }}</td>
            </tr>
            <tr>
                <td>Tweeen</td>
                <td>{{ twosScore }}</td>
            </tr>
            <tr>
                <td>Drieen</td>
                <td>{{ threesScore }}</td>
            </tr>
            <tr>
                <td>Vieren</td>
                <td>{{ foursScore }}</td>
            </tr>
            <tr>
                <td>Vijfen</td>
                <td>{{ fivesScore }}</td>
            </tr>
            <tr>
                <td>Zessen</td>
                <td>{{ sixesScore }}</td>
            </tr>
            <tr>
                <td>Bonus</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Totaal deel 1</td>
                <td>0</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>Deel 2</td>
            </tr>
            <tr>
                <td>Three of a kind</td>
                <td>{{ threeOfAKindScore }}</td>
            </tr>
            <tr>
                <td>Carre</td>
                <td>{{ fourOfAKindScore}}</td>
            </tr>
            <tr>
                <td>Full house</td>
                <td>{{ fullHouseScore}}</td>
            </tr>
            <tr>
                <td>Kleine straat</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Grote straat</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Yahtzee</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Chance</td>
                <td>{{ chanceScore }}</td>
            </tr>
            <tr>
                <td>Totaal deel 2</td>
                <td>0</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>Totale score</td>
                <td>0</td>
            </tr>
        </tfoot>
    </table>
</template>