/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function Add (number1, number2){
    return number1 + number2;
}
function addNumbers (){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = Add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function Subtract (number1, number2){
    return number1 - number2;
}
function subtractNumbers (){
    let subNumber1 = Number(document.querySelector("#subtract1").value);
    let subNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = Subtract(subNumber1, subNumber2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
};
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(dividend, divisor){
    if (divisor === 0){
        return "Cannot divide by zero";
    }
    return dividend / divisor;
}

function divideNumbers(){
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    let result = divide(dividend, divisor);
    document.querySelector('#quotient').value = result;
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function() {
    let subtotal = parseFloat(document.querySelector('#subtotal').value);
    let discount = document.querySelector('#member').checked ? 0.2 : 0;
    let totalDue = subtotal - (subtotal*discount);
    document.querySelector('#total').textContent = `$${totalDue.toFixed(2)}`;
});



/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Source Array */
document.querySelector('#array').textContent = numbersArray.join(', ');
/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.querySelector('#odds').textContent = oddNumbers.join(', ');
/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').textContent = evenNumbers.join(', ');
/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfArray').textContent = sumOfArray;
/* Output Multiplied by 2 Array */
let doubledNumbers = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').textContent = multipliedArray.join(', ');
/* Output Sum of Multiplied by 2 Array */
let sumOfDoubledNumbers = doubledNumbers.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfMultiplied').textContent = sumOfDoubledNumbers;

const imageElement = document.querySelector('#img');
imageElement.setAttribute ('src', photo);
imageElement.setAttribute('alt','Profile picture of Sabelo K. Mpungose');