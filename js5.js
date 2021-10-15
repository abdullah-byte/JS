console.clear()
//arrays
var mFriends = ['mike','ron','tom','Femi', 'Tobi', 'Paul']
console.log(mFriends)
console.log(typeof(mFriends))
console.log(mFriends[4])
console.log(mFriends.length)

//Update value
mFriends[2] = 'Tayo'
console.log(mFriends)
mFriends[9] = 'Bolu'
console.log(mFriends)
mFriends[mFriends.length] ='Tife'
console.log(mFriends)
mFriends.push = 'Sam'
console.log(mFriends)
//delete a value
var nfriend = mFriends.pop()
console.log(nfriend)
console.log(mFriends)

var nfriend = mFriends.pop()
console.log(nfriend)
console.log(mFriends)

var nfriend = mFriends.pop()
console.log(nfriend)
console.log(mFriends)
var nfriend = mFriends.pop()
console.log(nfriend)
console.log(mFriends)
var nfriend = mFriends.pop()
console.log(nfriend)
console.log(mFriends)

var tfriends = ['sam','Bob','Cat','Fish','Tom','Feyi','Hope','John']
tfriends.splice(3,0,'Ben','Ted')
console.log(tfriends)
tfriends.splice(0,0,'ana')
console.log(tfriends)

tfriends.splice(0,3)
console.log(tfriends)

//concatination
var allFriends = mFriends.concat(tfriends)
console.log("''''''''''''''''''''''''''''''''''''''''")
console.log(mFriends)
console.log(tfriends)
console.log(allFriends)

//sorting ascending and descending
allFriends.sort()
console.log(allFriends)
allFriends.reverse()
console.log(allFriends)