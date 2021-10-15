console.clear();
//arithemetic operators
//addition: '+'
//subraction: '-'
//multiplication: '*'
//Division: '/'
//Modulus: '%'
//Increment: '++'
//Decrement: '--'
var num1 = 20;
var num2 = 30;
var num3 = 40;
console.log(num1 + num2)
console.log(num1 - num2 - num3)
console.log(num2 * num1)
console.log(num3/num1)
console.log(num1%num2)
console.log(num1++)
console.log(num1)
console.log(++num1)
console.log(num1--)
console.log(num1)
console.log(--num1)

//assignment operators
//+=
num1 += 20;//num1 = num1 + 20
console.log(num1)
//-=
num1 -= 30;//num1 = num1 - 30
console.log(num1)
//*=
num1 *= 5;//num1 = num1 * 5
console.log(num1)
///=
num1 /= 5;//num1 = num1 / 5
console.log(num1)
//%=
num1 %= 5;//num1 = num1 %5
console.log(num1)


//Comparison and Logical Operators
if(4 == 3){
    console.log(true)
}else{
    console.log(false)
}
if(5 === '5'){
    console.log(true)
}else{
    console.log(false)
}

//Logical Operators &&, ||
if(5< 20 && 20 > 25){
    console.log(true)
}else{
    console.log(false)
}
console.log(5 < 20 || 20 <25)

//Tenary Operators (expression) ? a : b
2 < 3 ? console.log(true) : console.log(false)