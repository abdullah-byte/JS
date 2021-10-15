console.clear()
// Inbuilt string functions
var exampleString = "This is a string example"
// to change the string to uppercase use the toUpperCase() function
console.log(exampleString.toUpperCase())
// to change the string to lowercase use the toLowerCase() function
console.log(exampleString.toLowerCase())
// concat() - it merges two or more strings
var firstName = "Javascript"
var secondName = "Playground"
console.log(firstName.concat(' ',secondName))
// we can also use '+' to concat two or more strings
console.log(firstName + ' ' + secondName)
// trim() - it removes extra spaces
var extraSpaceString = '      string trim    '
console.log(extraSpaceString.trim())
// charAt() - this takes a position as an arg and return the character at that position
var charAtExampleString = 'This is my test string'
console.log(charAtExampleString.charAt(9))
// split() - splits our string on the basis of the argument passed
var sampleString = 'This is my sample string'
console.log(sampleString.split(' '))
var sampleString2 = 'This,is,my,sample,string'
console.log(sampleString2.split(','))
var sampleString3 = 'this is awesome'
console.log(sampleString3.split())


//Null and Undefined values
console.clear()
//Undefined
var nVar
console.log(nVar)
//Null
var mVar = null
console.log(mVar)