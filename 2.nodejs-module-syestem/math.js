const add = (a, b) => a + b
const sub = (a, b) => a - b 
const div = (a, b) => a / b 


const test =(a,b) =>  add(a,b) / sub(a,b )


// ei export er maddome sudumatro ei file guloo bhaireer file er kasse accees dissi. je file gulo export korboo sudumatro sei file guloii bhairee access pabe . 

// module.exports = add


// onk gulo function ekshate export korte chaile object akaarre likee dite pari 
// module.exports = {
//     test,
//     add
// }


// evabe o chaile likhte pari 
module.exports.add = add 
module.exports.test = test

// //sorasori evabe o export kora jai
// module.exports add = (a, b) => a + b;
// module.exports sub = (a, b) => a - b; 

//module charaa sudumatroo exports diye o kaj koraa jai
// exports.add = (a, b) => a + b;
// exports.sub = (a, b) => a - b; 
//export ekta bad practice export er por = sign diye kono kisu export korle ager gula shb reset hoye jai

// console.log(module)