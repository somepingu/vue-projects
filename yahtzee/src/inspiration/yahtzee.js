// V1.1
// Fixed edge cases

const button = document.getElementById('button');
const NUMBER_OF_ROLLS = 5;
const DIE_SIDES = 6;

const dices = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
}

const count = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
}

function resetScoresheet() {
    // reset count
    for (let i = 0; i < DIE_SIDES; i++) {
        count[i + 1] = 0;
    }
    // set all special throws to 0
    const specialThrows = document.getElementsByClassName('specialThrows');
    for (let i = 0; i < specialThrows.length; i++) {
        specialThrows[i].innerHTML = 0;
    }
}

function diceSum() {
    let sum = 0;
    for (let i = 0; i < NUMBER_OF_ROLLS; i++) {
        sum = sum + dices[i + 1];
    }
    return sum;
}

function sameDiesPresent(amount) {
    for (let i = 0; i < DIE_SIDES; i++) {
        if (count[i + 1] == amount) {
            return true;
        }
    }
    return false;
}

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

function rollDice() {
    resetScoresheet();

    const rolls = document.getElementsByClassName('rolls');
    for (let i = 0; i < NUMBER_OF_ROLLS; i++) {
        const roll = (Math.floor(Math.random() * 6) + 1);
        count[roll]++;
        dices[i + 1] = roll;
        rolls[i].innerHTML = roll;
    }

    console.log('dices', dices);
    console.log('count', count);

    // Scoresheet part 1
    const numberCounts = document.getElementsByClassName('numberCount');
    let sumPart1 = 0;
    for (let i = 0; i < DIE_SIDES; i++) {
        const value = (i + 1) * count[i + 1];
        numberCounts[i].innerHTML = value;
        sumPart1 = sumPart1 + value;
    }
    const totalPart1 = document.getElementById('totalPart1');
    totalPart1.innerHTML = sumPart1;

    // Scoresheet part 2
    const threeOfAKind = document.getElementById('threeOfAKind');
    const carre = document.getElementById('carre');
    const fullHouse = document.getElementById('fullHouse');
    const smallStraight = document.getElementById('smallStraight');
    const largeStraight = document.getElementById('largeStraight');
    const chance = document.getElementById('chance');
    const yahtzee = document.getElementById('yahtzee');

    // three of a kind, full house, carre, yahtzee
    if (sameDiesPresent(3)) {
        threeOfAKind.innerHTML = diceSum();
        if (sameDiesPresent(2)) {
            fullHouse.innerHTML = 25;
        }
    }
    if (sameDiesPresent(4)) {
        carre.innerHTML = diceSum();
        threeOfAKind.innerHTML = diceSum();
    }
    if (sameDiesPresent(5)) {
        yahtzee.innerHTML = 50;
    }

    // straights
    if (straightPresent(4)) {
        smallStraight.innerHTML = 30;
    }
    if (straightPresent(5)) {
        largeStraight.innerHTML = 40;
        smallStraight.innerHTML = 30;
    }

    // chance
    chance.innerHTML = diceSum();

    // sum part 2
    let sumPart2 = 0;
    const specialThrows = document.getElementsByClassName('specialThrows');
    for (let i = 0; i < specialThrows.length; i++) {
        sumPart2 = sumPart2 + parseInt(specialThrows[i].innerHTML);
    }
    const totalPart2 = document.getElementById('totalPart2');
    totalPart2.innerHTML = sumPart2;

    // total sum
    const totalScore = document.getElementById('totalScore');
    totalScore.innerHTML = sumPart1 + sumPart2;
}

button.addEventListener('click', rollDice);