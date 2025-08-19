
// variables
const max = 100;
let secret = null;
let attempts = 0;
let started = false;

// DOM cache
const id = (x) => document.getElementById(x);
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
const title = id('title');
const start = id('startBtn');
const newBtn = id('newGameBtn');
const form = id('guessForm');
const input = id('guess');
const guessBtn = id('guessBtn');
const gameBox = id('game');

const list = id('guessList');

const first = gameBox.firstElementChild;
if (first && first.nextElementSibling) {
    first.textContent = first.textContent.trim();
}
const parent = gameBox.parentNode;

// min & max allowed number (validation)
title.textContent = `I'm Thinking Of A Number (1-${max})`;
input.setAttribute('min', '1');
input.setAttribute('max', String(max));
input.setAttribute('required', '');
// disable guess button til game starts
guessBt.disabled = true;

start.addEventListener('click', startGame);
newBtn.addEventListener('click', newGame);
form.addEventListener('submit', onGuess);
input.addEventListener('input', validate);


// returns random integer from 1 to 100 (which is max)
function makeSecret() {
    secret = Math.floor(Math.random() * max) + 1;
    attempts = 0;
    input.value = '';
    validate();
    list.innerHTML = '';
}



