
// Variables
let target = 0;
let max = 100;
let over = false;

// DOM cache
const form = document.querySelector('#form');
const guessInput = document.getElementById('guess');
const diffSel = document.getElementById('diff');
const rangeText = document.getElementById('rangeText');
const newBtn = document.getElementById('new');

// returns random integer from 1 to "n"
const random = (n) => Math.floor(Math.random() * n) + 1;

function applyDifficulty() {
    max = parseInt(diffSel.value, 10) || 100;
    rangeText.textContent = `I'm thinking of a number from 1–${max}.`;
    guessInput.min = 1;
    guessInput.max = max;
    target = random(max); 
}




