//
// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const d = new Date();
let m = d.getMonth() + 1;
let dt = d.getDate();
const y = d.getFullYear();
dt = dt < 10 ? "0" + dt : dt;
m = m < 10 ? "0" + m : m;

console.log(m, "-", dt, "-", y);
// --------------------------------------------------

// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

const leapyear = (y) => {
  return y % 100 === 0 ? y % 400 === 0 : y % 4 === 0;
};

console.log(leapyear(y));
// --------------------------------------------------

// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

for (let year = 2014; year <= 2050; year++) {
  let d = new Date(year, 0, 1);
  if (d.getDay() === 0) console.log("1st January is being a Sunday  " + year);
}
// --------------------------------------------------

// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

const num = Math.ceil(Math.random() * 10);
console.log(num);
// const gnum = prompt("guess the num");
if (gnum == num) console.log("matched");
else console.log("not matched ", +gnum, "num is " + num);
//--------------------------------------------------

// Write a JavaScript program to calculate the days left before Christmas.
0;
today = new Date();
let cmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
  cmas.setFullYear(cmas.getFullYear() + 1);
}
let one_day = 1000 * 60 * 60 * 24;
console.log(
  Math.ceil((cmas.getTime() - today.getTime()) / one_day) +
    " days left until Christmas!"
);
// --------------------------------------------------

// Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).
function multiplyBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = num1 / num2;
}
//--------------------------------------------------

// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
