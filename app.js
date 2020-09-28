// The challenge is to build a calculator that has the same functionality as your iPhone calculator (portrait). You'll need the following to complete it:

// 1. Conditional Statement (If/Else as well as the &&/|| operators)
// 2. JS Functions (arrow functions covered this morning)
// 3. How to add event listeners (interacting with the DOM, covered fully on Thursday but covered a bit already with the validation lesson and responsiveness lesson from last week)
// 4. How to change the text with the (textContext)
// 5. For loops (to be covered tomorrow morning but you may have already come across them too)

// 1. declare variables
// 2. add event listeners
// 3. function for performing each calculation 
// 4. take numbers and arythmetic run them in a function which completes calculation
// 5. manipulate text content to show calculation
// 6. function for if sum gets too big

const outputContainer = document.querySelector('.output__container');
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
let firstvalue = [];
let secondValue = [];

// add html
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

// outputContainer.addEventListener('click', () => {
//     // calculatorOutput.innerHTML.pop();
//     sum.pop();
//     console.log(sum);
    
// });

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
    console.log(sum);
    console.log(calculatorOutput.innerHTML);
});

// PLUS FUNCTION
plusBtn.addEventListener('click', () => {
    sum = `${calculatorOutput.innerHTML} +`;
    calculatorOutput.innerHTML = '';
    ;
});

// // PERCENTAGE FUNCTION
percentageBtn.addEventListener('click', () => {
    sum += `${calculatorOutput.innerHTML / 100}`;
    calculatorOutput.innerHTML = sum;
});

// const eval = () => {
//     return Function
// }

// EQUALS FUNCTION
equalsBtn.addEventListener('click', () => {
    sum += ` ${calculatorOutput.innerHTML}`; 
    calculatorOutput.innerHTML = eval(sum); 
    console.log(sum);
    console.log(calculatorOutput.innerHTML);
});

// PLUSMINUS FUNCTION
plusMinusBtn.addEventListener('click', () => {
    if(Math.sign(calculatorOutput.innerHTML) === 1) {
        calculatorOutput.innerHTML = -Math.abs(calculatorOutput.innerHTML);
    } else {
        calculatorOutput.innerHTML = Math.abs(calculatorOutput.innerHTML);
    }
});

// const calcLength = calculatorOutput.innerHTML.length;
// console.log(calcLength);

// calculatorOutput.addEventListener('onchange', () => {
//     if (calculatorOutput.innerHTML.length >= 2) {
//         console.log('yo');
        
//         // calculatorOutput.style.font.size = '40px';
//     }
// })

// const textResize = () => {
//     if (calcLengthLength >= 2) {
//         console.log('yo');
//         // calculatorOutput.style.font.size = '40px';
//     }
// }


// const calculation = (operator, firstvalue, secondValue) => {
//     switch (operator) {
//         case '+': 
//             sum = firstvalue + secondValue;
//             break;
//         case '-': 
//             sum = firstvalue - secondValue;
//             break;
//         case '%': 
//             sum = firstvalue / 100;
//             break;
//         case '*': 
//             sum = firstvalue * secondValue;
//             break;
//         case '/': 
//             sum = firstvalue / secondValue;
//             break;
//         default:
//             console.log('ERRR');
//     }
// }

// calculation('-', 1, 3);

// console.log(sum);


// sum[1]
// switch sum[1] {