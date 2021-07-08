//How can i write any file or read file everything is possible by file module. in this module we are going to learn how can read or write file. For write file we have needed to import fs module

const fs = require('fs')


const testObj = {
    name: 'Nayeem',
    email: 'test@test.com',
    address: {
        city: 'Chittagong',
        
        country:'BD'
    }
}

// to write file first we've to convert json from obj, so we will able to use JSON.stringify()

const data = JSON.stringify(testObj);

//There are 2 types of way is available for write or read file . one is synchronous way and another is asynchronous. if i would like to use synchronous we have to use writeFileSync for asynchronous only writeFile . so we can is asynchronous first time . 

//writeFile will received 3 parameters , first one is file name , second one is data , and another is a callback funcion which received error ,

fs.writeFile('./test.json', data, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('File write Sucessfully')
    }
})

//  Test with async await
// const data = JSON.stringify(testObj);
// const writeData = async () => {
//   try {
//       await fs.writeFile("./test.json", data, (err) => {
//           if (err) {
//             console.log("error happened");
//           } else {
//               console.log('File write Successfully')
//         }
//     });

//   } catch (err) {
//     console.log(err);
//   }
// };

// writeData()

// after doing that  if i looked into our directory we will able to see a new file has been created called test.json and where all json data is available . 