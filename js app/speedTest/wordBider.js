window.addEventListener('load', init);
// --- global variables 

const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}
let currentLevel = levels.easy;

// to change level

let time = currentLevel;
score = 0;
let isPlaying;

// --- DOM

const level_a = document.querySelector('#level-1');
const level_b = document.querySelector('#level-2');
const level_c = document.querySelector('#level-3');
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const form = document.querySelector('.progress');

const words = ['giraffe',
    'teacher',
    'married',
    'richard',
    'lucky',
    'statue',
    'generate',
    'sturbborn',
    'developer',
    'javascript',
    'python',
    'ninja',
    'establish',
    'nutrition',
    'adult',
    'master',
    'shreck!',
    'niece',
    'million',
    'dreams',
    'champion',
    'technology',
    'teams',
    'really',
    'cherish',
    'eucaryptus',
    'boom',
    'commas',
    'deodarant'
];

// --- intialize game

function init() {
    // --- load word from array
    showWord(words);

    // start matching om word inpiut

    wordInput.addEventListener('input', startMatch);

    // --- call count down every sec
    setInterval(countDown, 1000);

    // checkStatus
    setInterval(checkStatus, 50);

    // // ----- check level
    // setInterval(checkLevel, 50);

}

// --- levels event listeners

level_a.addEventListener('input', () => {
    currentLevel = levels.easy;
    time = currentLevel;
    seconds.innerHTML = time;
});

level_b.addEventListener('input', () => {
    currentLevel = levels.medium;
    time = currentLevel;
    seconds.innerHTML = time;

});

level_c.addEventListener('input', () => {
    currentLevel = levels.hard;
    time = currentLevel;
    seconds.innerHTML = time;
});


function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++
    }
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }

    // match current word input
    function matchWords() {
        if (wordInput.value === currentWord.innerHTML) {
            message.innerHTML = 'correct !!'
            return true;
        } else {
            message.innerHTML = ''
            return false;
        }
    }
}



// --- pick and show random word
function showWord(words) {
    //  ---   generate random word
    const randomIndex = Math.floor(Math.random() * words.length);

    currentWord.innerHTML = words[randomIndex];
}

function countDown() {
    // make sure time is not run out
    if (time > 0) {
        // decrement
        time--;
    } else if (time === 0) {
        // game is over
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;

}

// check satutus

function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = " Game over !!"
        score = -1;
    }
}