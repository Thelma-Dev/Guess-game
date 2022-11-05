'use strict';


// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}


function select(selector, parent = document) {
    return parent.querySelector(selector);
}

const number = select('.number');
const restartBtn = select('#restart');
const output = select('.output p');
const btn = select('.guess')
const inputField = select('#input');
const guesses = select('h2')


// Start game
function readWindow() {
    number.value = '';
} 

// Add event listener
onEvent('focus', inputField, function(event) {;
    guesses.classList = 'h2';
});


onEvent('click', restartBtn, function() {
    window.location.reload()
    readWindow();
})


onEvent('keypress', inputField, function(event) {;
    if (event.key == "Enter") {
        event.preventDefault();
        btn.click();
    }; 
});


// Generating random number
const randomNumber = Math.floor(Math.random() * 50);
console.log(randomNumber);


// Validating input
function isValid(input) {
    if (Number.isInteger(input)) {
        return true;
    }

    return false;
}

let count = 1;
function validate() {
    let num = number.value.trim();
    let answer = randomNumber;
    let valid = true;

    
    if (num.length === 0 && !isValid(Number(num))) {
        output.innerText = 'Enter a valid number';
        valid = false;
    } else if (num < answer) {
        let result = parseFloat(num);
        output.innerText = 'Oops! Try a bigger number';
    } else if (num > answer) {
        output.innerText = 'Oops! Try a smaller number';
    } else if (num == answer) {
        output.innerText ='Woohoo! You guessed right';
        guesses.classList = 'is-visible';
        guesses.innerText = `You had ${count} guesses`;
        restartBtn.classList = 'is-visible';
        number.value = '';
        count = 0;
    }
    count++;
}


// Adding an event listener
onEvent('click', btn, function() {
    validate();
});

