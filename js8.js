console.clear();
//Hoisting in js: The mechanism where variable and functions can be used before declaring them is called hoisting.
console.log(num1)
num1 = 10;
console.log(num1);
var num1;

str1 = 'this is string';
console.log(str1)
var str1

//Code Excecution: The variables and function declaration are moved to the top of their scope before code execution
//Javascript has two steps in executing a particular script
//Step1-Creation
//Step2- Execution
//Function Hoisting
sum(20,30)

function sum(num1,num2){
    let total = num1 + num2;
    console.log(total);
}
sum(25,35)