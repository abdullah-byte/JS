console.clear();
// Scope and Environment
//The scope defines the part of the program where a variable or a function is visible/accessible
//The variable defined outside all the functions and blocks are available throughout the code. These are called Global Variables.
// Here, num1 is a global variable which can be accessed throughout the code while num2 is a local variable which can only be accessed within the function sum
var num1 = 10;

function sum(num2){
    console.log(num1);
    total = num1 + num2;
    console.log(total);
}
sum(20)

//Here num2 can not be accessed outside the function sum hence the an error would be printed
function sum(num2){
    console.log(num1);
    console.log(num2)
    total = num1 + num2;
    console.log(total);
}
console.log(num2)
sum(20)


function sum(num2){
    var total;
    console.log(num1);
    console.log(total);
    total = num1 + num2;
    console.log(total);
}

sum(20)

