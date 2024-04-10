// Question 1 

let celsius = +prompt("Enter Temprature in Cels");

let fahrenheit = (celsius * 9 / 5) + 32

console.log("The Temprature in fahrenheit : ",fahrenheit);

// Question 2

let baseSalery = +prompt("Base Salary");
let hra = +prompt("HRA");
let da = +prompt("DA");
let ta = +prompt("TA");

let bs = baseSalery * hra / 100
let d1 = baseSalery * da / 100
let t2 = baseSalery * ta /100

let grossSalary = bs + d1 + t2 + baseSalery

console.log("Gross Salary is :",grossSalary);

// Question 3

let angle = +prompt("First Angle");
let angle2 = +prompt("Second Angle");

let thirdAngle = 180 - angle - angle2;

console.log("Third Angle is :",thirdAngle);