
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
guessBtn.disabled = true;

start.addEventListener('click', startGame);
newBtn.addEventListener('click', newGame);
form.addEventListener('submit', onGuess);
input.addEventListener('input', validate);

function startGame() {
    if (started) {
        alert('Game already started. Use New Game to restart.');
        return;
    }
    makeSecret();
    started = true;
    start.disabled = true;
    gameBox.classList.add('started');
    alert(`Game started!\nI'm thinking of a number from 1 to ${max}.`);
    input.focus();
}

function newGame() {
    if (!confirm('Start a new game?')) return;
    makeSecret();
    started = true;
    start.disabled = true;
    alert(`New game started!\nRange: 1 to ${max}.`);
    input.focus();
}

// returns random integer from 1 to 100 (which is max)
function makeSecret() {
    secret = Math.floor(Math.random() * max) + 1;
    attempts = 0;
    input.value = '';
    input.setAttribute('min', '1');
    input.setAttribute('max', String(max));
    title.textContent = `I'm thinking of a number from (1-${max})`;
    validate();

    const frag = document.createDocumentFragment();
    list.innerHTML = '';
    list.appendChild(frag);
}

function onGuess(e) {
    e.preventDefault();

    if (!started) {
        alert('Click Start to begin.');
        return;
    }

    validate();
    if (!form.checkValidity()) {
        alert(input.validationMessage || `Please enter a whole number 1–${max}.`);
        return;
    }

    const n = Number(input.value.trim());
    attempts++;

    if (n === secret) {
        alert(`Correct! 🎉\nThe number was ${secret}.\nAttempts: ${attempts}`);
        if (confirm('Play again (New Game)?')) newGame();
        return;
    }

    alert(n < secret ? 'Too low — guess higher!' : 'Too high — guess lower!');
    addHistory(n);
    input.select();
    input.focus();
}

function validate() {
    const raw = input.value.trim();
    const n = Number(raw);
    let msg = '';

    if (!raw) msg = 'Please enter a number.';
    else if (!Number.isInteger(n)) msg = 'Whole numbers only.';
    else if (n < 1 || n > max) msg = `Enter a number between 1 and ${max}.`;

    input.setCustomValidity(msg);
    input.classList.toggle('invalid', !!msg);
    guessBtn.disabled = !!msg;
}


function addHistory(n) {
    const li = document.createElement('li');
    li.textContent = `Guess ${attempts}: ${n}`;
    const frag = document.createDocumentFragment();
    frag.appendChild(li);
    list.prepend(frag);
}











