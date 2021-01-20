const chalk = require('chalk');
 
console.log(chalk.blue.bold.inverse('Error!'));





// const validator = require('validator')

// console.log(validator.isURL('aditee@you.com'))




const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg)



// const add = require('./utils')

// const sum = add(34,22)

// console.log(sum);