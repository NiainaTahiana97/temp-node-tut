// const amount = 12
// const revenue = 150

// if ( amount < 10 ){
//     console.log("Small number");
// }
// else{
//     console.log("Large number");
// }

// console.log(`Hey it's my first node app!!!`)


// CommonJS - every file in node is a module (by default)
// Modules - Encapsulated Code (Only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
// console.log(data)

// console.log(names)
// sayHi('Susan')
// sayHi(names.john)
// sayHi(names.peter)