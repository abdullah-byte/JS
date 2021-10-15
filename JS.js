console.clear();

var firstNum = 10;
console.log(firstNum);

var secondNum = 20;
console.log(secondNum); 

var sum =  firstNum + secondNum;
console.log(sum);

var divBy0 = firstNum / 0;
console.log(divBy0);
console.log(typeof(divBy0));
var nulByString = firstNum * 'G';
console.log(nulByString);
console.log(typeof(nulByString));

//inbuilt number functions

var num1 = 20;
var num2 = 23.4;
console.log(num1.toString())
console.log(num2.toString())

var strNum1 = "20";
var strNum2 = "23.4";
var strNum3 = "BV";
console.log(parseInt(strNum1));
console.log(parseInt(strNum2));
console.log(parseInt(strNum3));

console.log(parseFloat(strNum2));
console.log(parseFloat(strNum3)); 

//Strings
console.clear()
var myFirstString = "I love JS"
console.log(typeof(myFirstString));

var doublemark = "this is a \"javascript\" string"
console.log(doublemark);

var singlemark = "this is a \'javascript\' string"
console.log(singlemark);
// OR
var doublemark1 = 'this is a "javascript" string'
console.log(doublemark1);

var singlemark2 = "this is a 'javascript' string"
console.log(singlemark2);

//Inbuit string functions
console.clear()
var mySecondString = "This is my second string"
//length of a string
console.log(mySecondString.length);
//to find the index of a string
console.log(mySecondString.indexOf('my'));
console.log(mySecondString.indexOf('g'));
//to find the last index of a string
console.log(mySecondString.lastIndexOf('string'));
console.log(mySecondString.lastIndexOf('This'))
//get a part of the string slice(start, end)
console.log(mySecondString.slice(0,5))
console.log(myFirstString.slice())
//get substring function - substr(startPos, length)
console.log(mySecondString.substr(0,4))
console.log(mySecondString.substr(7))