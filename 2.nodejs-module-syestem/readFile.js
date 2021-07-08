const fs = require("fs");

fs.readFile("./test.json", (err, data) => {
  if (err) {
    console.log(err);
  }

  //Here data return a buffer file inside string. so we have to convert it to a json file .
  let parseData = JSON.parse(data);
  console.log(parseData);
  //     {
  //          name: 'Nayeem',
  //            email: 'test@test.com',
  //            address: { city: 'Chittagong', country: 'BD' }
  //          }
    
});
