let path = require('path')

let myCurrentPath = __filename

console.log(__dirname)
console.log(__filename)
//path ekta object return kore.. er ekta property hosse basename() er maddome current path er only file name tah er koraa jai . 

// console.log(myCurrentPath)
console.log(path.basename(myCurrentPath))
console.log(path.basename(__dirname)) // file er j folder tah ase oita return korbe
console.log(path.extname(myCurrentPath)) // it will return file extention such as .js , .html , .png and so on. 

let pathObj = {
    dir: 'user/local',
    name: 'testFile',
    ext:'.js'
}

// formate use korar maddome kono obj ke ekta path e convert kora jai ...
console.log(path.format(pathObj)) //user/local\testFile.js

//isAbsolute er madddome file tah absolute kinah jana jabe 
console.log(path.isAbsolute(myCurrentPath)) //true
console.log(path.isAbsolute('./math.js')) //false


//join() er maddome onkguloo path name ke ekta path name e convert kora jai 
console.log(path.join('user', 'nayeem', 'test.js')) //user\nayeem\test.js 

//path.resolve()
console.log(path.resolve(__dirname, 'scripts', 'test.js'))

//path.parse() er maddome kono filename teke object akaare details pete chaile parse() use kora hoi .
console.log(path.parse(myCurrentPath))