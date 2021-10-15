console.clear();
//Loop: While loop and for loop
//While loop
//while(condition){
//    block of code
//}
var nValue = 0
while(nValue < 50){
    nValue++
}
console.log(nValue)

//for loop
//var mList = [0,2,4,6,7,8,9]
//var pos;
//for(pos = 0; pos <mList.length;pos++){
//    console.log("Position => " + pos + " value => " +  mList[pos])
//}

//continue keyword
var mList = [0,2,4,6,7,8,9]
var pos;
for(pos = 0; pos <mList.length;pos++){
    if(pos % 2 !== 0)continue
    console.log("Position => " + pos + " value => " +  mList[pos])
}
console.log("------------------------")
var pos;
for(pos = 0; pos <mList.length;pos++){
    if(pos % 2 == 0)continue
    console.log("Position => " + pos + " value => " +  mList[pos])
}

//Functions
//function functionName(params1,params2,.....,paramsN) {
//    block of code
//}
function mSum(){
    var num1 = 30;
    var num2 = 20;
    var sum = num1 + num2;

    return sum
}
var totalSum = 50 + mSum()
console.log(totalSum)

function greetings(personName){
    console.log('Welcome '+ personName)
}
greetings('Femi')

function total(num1,num2){
    console.log(num1 + num2)
}
total(2,5);