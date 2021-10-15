console.clear()
// How to use if-else conditional statements
// If statement
if (7>3){
    console.log(true)
}
// If-else statement
if (5>7){
    console.log(true)
}else{
    console.log(false)
}
// for multiple statements
if (5>7){
    console.log('5>7')
}else if(7>8){
    console.log('7>8')
}else{
    console.log("Nothing")
}

//Switch
var currentDay = 'Wed'
if (currentDay === 'Mon'){
    console.log('Timings: 02:00-06:00')
}else if(currentDay === 'Tue'){
    console.log('Timings: 02:20-06:00')
}else if(currentDay === 'Wed'){
    console.log('Timings: 02:30-06:00')
}else if(currentDay === 'Thu'){
    console.log('Timings: 02:40-06:00')
}else if(currentDay === 'Fri'){
    console.log('Timings: 02:50-06:00')
}else if(currentDay === 'Sat'){
    console.log('Timings: 03:00-06:00')
}else if(currentDay === 'Sun'){
    console.log('Timings: 03:00-06:00')
}

switch(currentDay){
    case 'Mon':
      console.log('Timings: 02:00-06:00')
      break;
    case 'Tue':
      console.log('Timings: 02:20-06:00')
      break;
    case 'Wed':
      console.log('Timings: 02:30-06:00')
      break;
    case 'Thu':
      console.log('Timings: 02:40-06:00')
      break;
    case 'Fri':
      console.log('Timings: 02:50-06:00')
      break;
    case 'Sat':
      console.log('Timings: 03:00-06:00')
      break;
    case 'Sun':
      console.log('Timings: 03:00-06:00')
      break;
    default:
      console.log('Timings: 02:00-06:00')
        

}