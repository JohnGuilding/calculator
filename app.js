let calculatorOutput = document.querySelector('.calculator__output');
const clearBtn = document.querySelector('.clear__btn');
const plusMinusBtn = document.querySelector('.plusminus__btn');
const percentageBtn = document.querySelector('.percentage__btn ');
const divideBtn = document.querySelector('.divide__btn');
const multiplyBtn = document.querySelector('.multiply__btn');
const minusBtn = document.querySelector('.minus__btn');
const plusBtn = document.querySelector('.plus__btn');
const equalsBtn = document.querySelector('.equals__btn');

const btns = document.querySelectorAll('.number__btn');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'];

let sum = [];

// ADD HTML
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        numbers.forEach(element => {
            if (element == btn.dataset.number) {
            calculatorOutput.innerHTML += element;
            } 
        });
    });
});


// CLEAR OUTPUT FUNCTION
clearBtn.addEventListener('click', () => {
    const clear = () => {
        calculatorOutput.innerHTML = '';
        sum = [];
    }
    clear();
});


// DIVIDE FUNCTION
divideBtn.addEventListener('click', () => {
    sum = `${calculatorOutput.innerHTML} /`;
    calculatorOutput.innerHTML = '';
});


// MULTIPLY FUNCTION
multiplyBtn.addEventListener('click', () => {
    sum = `${calculatorOutput.innerHTML} *`;
    calculatorOutput.innerHTML = '';
});

// MINUS FUNCTION
minusBtn.addEventListener('click', () => {
    sum = `${calculatorOutput.innerHTML} -`;
    calculatorOutput.innerHTML = '';
});


// PLUS FUNCTION
plusBtn.addEventListener('click', () => {
    sum = `${calculatorOutput.innerHTML} +`;
    calculatorOutput.innerHTML = '';
    ;
});


// PERCENTAGE FUNCTION
percentageBtn.addEventListener('click', () => {
    sum += `${calculatorOutput.innerHTML / 100}`;
    calculatorOutput.innerHTML = sum;
});

// EQUALS FUNCTION
equalsBtn.addEventListener('click', () => {
    sum += ` ${calculatorOutput.innerHTML}`; 
    calculatorOutput.innerHTML = eval(sum); 
});

// PLUSMINUS FUNCTION
plusMinusBtn.addEventListener('click', () => {
    if(Math.sign(calculatorOutput.innerHTML) === 1) {
        calculatorOutput.innerHTML = -Math.abs(calculatorOutput.innerHTML);
    } else {
        calculatorOutput.innerHTML = Math.abs(calculatorOutput.innerHTML);
    }
});