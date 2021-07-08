
// javascript e shb kisu window object er shate attached hoye jai . kintuu node js e shb kisu attached thake global obj er shate . node js window obj bolte kisu nhai !


// console.log(__dirname)  
// console.log(__filename) 

// console.log(module);



// require er modde jokon 'math' evabe kisu import kori etake bola hoi absolute path . jeta muloto node module theke kono kisu import korbe. 
// bt jodi './math.js' evabe import kori etake bola hoi relative path

// const math = require('./math')
//we can import it like below

// const test = require('./math')
const { add } = require('./math')

console.log(add(1,2))
// console.log(add(1,2))
