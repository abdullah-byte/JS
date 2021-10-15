console.clear();
//Coercion - Implicit:- Conversion Done automvtically by javascript
//Coercion - Explicit:-Conversion Done programlly by us
//String Conversion
var mStr = 'Hello'
var mNum = 5
var mSum = mStr + mNum
console.log(mSum)
console.log(typeof(mSum))
console.log('hola' + true)
console.log(typeof('hola'+true))
console.log(3 + 'true')
console.log(typeof(3+'true'))
//Integer conversion
var mValue = +'4'
console.log(mValue)
console.log(typeof(mValue))
//Boolean conversion
if(5){
    console.log('true')
}else{
    console.log('false')
}


//Explicit Type conversion
//string conversion
console.log(typeof(String(mNum)))
console.log(typeof(String(true)))
console.log(typeof(String(84.345)))
//integer conversion
console.log(typeof(Number(true)))
console.log(typeof(Number(33.3)))
console.log(typeof(Number('stop')))
//Boolean conversion
console.log(Boolean(2))
console.log(typeof(Boolean(2)))
console.log(Boolean(0))
console.log(typeof(Boolean(0)))