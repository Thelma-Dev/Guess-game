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


function isNumber(str) {
    let input = str.trim();

    if (input.length > 0 && !isNaN(input)) 
        return true;

    return false;
    
}

const randomNumber = Math.floor((Math.random() * 50) + 1);


function restart() {
    number.value = '';
    output.innerText ='';
    guesses.classList = 'h2';
}


onEvent('click', restartBtn, function() {
    restart();
})


onEvent('keypress', inputField, function(event) {;
    if (event.key == "Enter") {
        event.preventDefault();
        btn.click();
    };
   
});


let count = 1;

// Adding an event listener

onEvent('click', btn, function() {
    let num = number.value.trim();
    let answer = randomNumber;

    if (isNumber(num) && num < answer) {
        let result = parseFloat(num);
        output.innerText = `Oops! Try a bigger number `;
  
    } else {
        if (num > answer) {
            output.innerText = 'Oops! Try a smaller number';
        } else {
            output.innerText =`Woohoo! You guessed right`;
            guesses.classList = 'is-visible';
            guesses.innerText = `Guesses: ${count}`;
            number.value = '';
            count = 0;
        }
    }
    count++;
});


