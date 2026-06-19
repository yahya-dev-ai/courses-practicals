console.log("Hello, World");

const myInt = 5;
const myFloat = 6.667;
const hihi = 49;
const khikhi = 77;
myInt;
myFloat;
console.log(typeof myInt);
console.log(typeof myFloat);

//Useful Number methods
const lotsOfdecimal = 1.76658;
console.log("lotsOfdecimal = " + lotsOfdecimal);
twoDecimalPlaces = lotsOfdecimal.toFixed(2);
console.log(
  "twoDecimalPlaces (lotsOfdecimal.toFixed(2)) = " + twoDecimalPlaces
);

//Converting to number data types
let myNumber = "74";
console.log("myNumber += 3 = " + (myNumber += 3));
console.log("typeof myNumber -> " + typeof myNumber);
console.log("Number(myNumber) + 3 -> " + (Number(myNumber) + 3));

//Arithmetic operators
console.log("10 + 7 = " + (10 + 7));
console.log("9 * 8 = " + 9 * 8);
console.log("57 % 4 = " + (57 % 4));

const num1 = 10;
const num2 = 50;
console.log("9 * num1 = " + 9 * num1);
console.log("num1 ** 3 = " + num1 ** 3);
console.log("num2 / num1 = " + num2 / num1);

//Assignment operators
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12

//Comparison operators
const btn = document.querySelector("button");
const txt = document.querySelector("p");

 btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "The machine has started!";
  } else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine has stopped";
  }
}

//Tests

/*

//Math 1
const a1 = 20;
const a2 = 4;
const a3 = 8;
const a4 = 6;
const a12 = a1 + a2;
const a43 = a3 - a4;
const a1243 = a12 * a43;
console.log("a1243 = " + a1243);

const res = document.querySelector("h1");

console.log(res);

   if (a1243 === 48) {
  res.textContent += " = 48  PASSED";
}



//Math 2
// Final result should be 10.42
// Add/update your code here
let result = (7 + 13) / (9 + 7);
let result2 = 100 / (2 * 6);
result *= result2;

console.log("result = " + result);
console.log("result2 = " + result2);

finalResult = result.toFixed(2);
console.log("finalResult = " + finalResult);
console.log("typeof finalResult -> " + typeof finalResult);
finalNumber = Number(finalResult);
console.log("finalNumber = " + finalNumber);
// Don't edit the code below here!

section.innerHTML = " ";
const para1 = document.createElement("p");
para1.textContent = `Your finalResult is ${finalResult}`;
const para2 = document.createElement("p");
const finalNumberCheck =
  isNaN(finalNumber) === false
    ? "finalNumber is a number type. Well done!"
    : `Ooops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;

section.appendChild(para1);
section.appendChild(para2);



//Math 3

// Statement 1: The elephant weights less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;
weightComparison = eleWeight < mouseWeight;

// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;
heightComparison = ostrichHeight > duckHeight;

// Statement 3: The two passwords match
const pwd1 = 'stromboli';
const pwd2 = 'stROmBoLi';
pwdMatch = pwd1 === pwd2;
// Add your code here

// Don't edit the code below here!

const para1 = document.createElement('p');
const para2 = document.createElement('p');
const para3 = document.createElement('p');

const weightTest = weightComparison ? 'True — elephants weight less than mice!?' : 'False — of course an elephant is heavier than a mouse!';
const heightTest = heightComparison ? 'True — an ostrich is indeed taller than a duck!' : 'False — apparently a duck is taller than an ostrich!?';
const pwdTest = pwdMatch ? 'True — the passwords match.' : 'False — the passwords do not match; please check them';

para1.innerText = weightTest;
document.body.appendChild(para1);
para2.innerText = heightTest;
document.body.appendChild(para2);
para3.innerText = pwdTest;
document.body.appendChild(para3);

*/