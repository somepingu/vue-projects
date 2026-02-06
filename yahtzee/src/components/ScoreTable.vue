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

const diceStreetLength = computed(() => {
    let streetLength = 0
    let tempLength = 0;
    for (let count of diceCounts.value) {
        if (count == 1) {
            tempLength++;
            streetLength = Math.max(streetLength, tempLength);
        } else {
            tempLength = 0;
        }
    }
    return streetLength;
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

const totalPart1Score = computed(() => {
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

const smallstreetScore = computed(() => {
    if (diceStreetLength.value >= 4) {
        return 30;
    }
    return 0;
});

const largestreetScore = computed(() => {
    if (diceStreetLength.value >= 5) {
        return 40;
    }
    return 0;
});

const yahtzeeScore = computed(() => {
    for (let count of diceCounts.value) {
        if (count == 5) {
            return 50;
        }
    }
    return 0;

});

const chanceScore = computed(() => {
    return diceScoreSum.value;
});

const totalPart2Score = computed(() => {
    return threeOfAKindScore.value + fourOfAKindScore.value + fullHouseScore.value + smallstreetScore.value + largestreetScore.value + yahtzeeScore.value + chanceScore.value;
});

</script>

<template>
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
                <td>{{ totalPart1Score }}</td>
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
                <td>{{ smallstreetScore }}</td>
            </tr>
            <tr>
                <td>Grote straat</td>
                <td>{{ largestreetScore }}</td>
            </tr>
            <tr>
                <td>Yahtzee</td>
                <td>{{ yahtzeeScore }}</td>
            </tr>
            <tr>
                <td>Chance</td>
                <td>{{ chanceScore }}</td>
            </tr>
            <tr>
                <td>Totaal deel 2</td>
                <td>{{ totalPart2Score }}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>Totale score</td>
                <td>{{ totalPart1Score + totalPart2Score }}</td>
            </tr>
        </tfoot>
    </table>
</template>