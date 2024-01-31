let newScore = 0;
const newText = document.querySelector('#newText');
const buttonMinus = document.querySelector('#buttonMinus');
const buttonPlus = document.querySelector('#buttonPlus');
const clickMe = document.querySelector('#clickMe');
const newScoreText = document.querySelector('#newScoreText')

function inputNumber() {
    newScore = parseInt(prompt('Enter a number'));
}

function addNumber() {
    newScore = newScore + 1;
    console.log(newScore);
    newText.textContent = 'You added by 1.';
    newScoreText.textContent = newScore;
}

function minusNumber() {
    newScore = newScore - 1;
    console.log(newScore);
    newText.textContent = 'You subtract by 1.';
    newScoreText.textContent = newScore;
}

clickMe.addEventListener('click', inputNumber);

buttonPlus.addEventListener('click', addNumber);

buttonMinus.addEventListener('click', minusNumber);